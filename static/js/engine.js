/* ==========================================================================
   ENGINE — shared runtime for the site's technical/perception visuals.
   Dependency-free canvas2D + small DOM utilities. No external requests.
   ========================================================================== */
(function () {
  'use strict';

  var REDUCED = !!(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  var NARROW = window.innerWidth < 760;
  var DPR = Math.min(window.devicePixelRatio || 1, NARROW ? 1.5 : 2);

  /* ---------------------------------------------------------------------
     Generic "in view" observer: adds .in-view to any [data-observe] node
     the first time it crosses the viewport, and toggles .is-visible on
     [data-fx] canvases so heavy loops can pause off-screen.
  --------------------------------------------------------------------- */
  var revealIO = ('IntersectionObserver' in window) ? new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        revealIO.unobserve(entry.target);
      }
    });
  }, { threshold: 0.18, rootMargin: '0px 0px -8% 0px' }) : null;

  function initReveal(root) {
    root.querySelectorAll('[data-observe]:not([data-observed])').forEach(function (el) {
      el.setAttribute('data-observed', '1');
      if (revealIO) revealIO.observe(el); else el.classList.add('in-view');
    });
  }

  function watchVisibility(el, cb) {
    if (!('IntersectionObserver' in window)) { cb(true); return; }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) { cb(e.isIntersecting); });
    }, { threshold: 0.01 });
    io.observe(el);
  }

  /* ---------------------------------------------------------------------
     Shared ticker — one requestAnimationFrame loop drives every instance
     instead of each canvas running its own rAF chain.
  --------------------------------------------------------------------- */
  var instances = [];
  var ticking = false;
  function tick(t) {
    for (var i = 0; i < instances.length; i++) {
      var inst = instances[i];
      if (inst.active) inst.step(t);
    }
    if (instances.length) requestAnimationFrame(tick);
    else ticking = false;
  }
  function register(inst) {
    instances.push(inst);
    if (!ticking) { ticking = true; requestAnimationFrame(tick); }
  }

  function fit(canvas) {
    var parent = canvas.parentElement;
    var w = parent.clientWidth, h = parent.clientHeight;
    canvas.width = Math.max(1, Math.round(w * DPR));
    canvas.height = Math.max(1, Math.round(h * DPR));
    canvas.style.width = w + 'px';
    canvas.style.height = h + 'px';
    return { w: w, h: h };
  }

  /* ---------------------------------------------------------------------
     LidarField — a perspective-projected point cloud. Points drift,
     occasionally a scan-plane sweeps through and brightens what it
     crosses, and (optional) a short autonomous trajectory periodically
     draws itself through the volume and fades.
  --------------------------------------------------------------------- */
  function LidarField(canvas, opts) {
    opts = opts || {};
    var ctx = canvas.getContext('2d');
    var size = fit(canvas);
    var density = opts.density || 1;
    var count = Math.round((opts.count || 700) * density * (NARROW ? 0.45 : 1));
    var withTrajectory = !!opts.trajectory && !NARROW;
    var color = opts.color || '34,211,238';   // cyan
    var dimColor = opts.dimColor || '120,140,155';
    var focal = 260;
    var mx = 0, my = 0, tmx = 0, tmy = 0;
    var theta = 0;
    var scanZ = -180, scanDir = 1;
    var points = [];
    var R = opts.spreadXY || 190, Z = opts.spreadZ || 180;

    function seed(p) {
      p.x = (Math.random() * 2 - 1) * R;
      p.y = (Math.random() * 2 - 1) * R * (size.h / size.w > 1 ? 1.3 : 0.72);
      p.z = (Math.random() * 2 - 1) * Z;
      p.life = 0.4 + Math.random() * 0.6;
      p.decay = 0.0006 + Math.random() * 0.0012;
    }
    for (var i = 0; i < count; i++) {
      var p = {};
      seed(p);
      p.life = Math.random();
      points.push(p);
    }

    var traj = null;
    function catmullRom(p0, p1, p2, p3, t) {
      var t2 = t * t, t3 = t2 * t;
      return {
        x: 0.5 * ((2 * p1.x) + (-p0.x + p2.x) * t + (2 * p0.x - 5 * p1.x + 4 * p2.x - p3.x) * t2 + (-p0.x + 3 * p1.x - 3 * p2.x + p3.x) * t3),
        y: 0.5 * ((2 * p1.y) + (-p0.y + p2.y) * t + (2 * p0.y - 5 * p1.y + 4 * p2.y - p3.y) * t2 + (-p0.y + 3 * p1.y - 3 * p2.y + p3.y) * t3),
        z: 0.5 * ((2 * p1.z) + (-p0.z + p2.z) * t + (2 * p0.z - 5 * p1.z + 4 * p2.z - p3.z) * t2 + (-p0.z + 3 * p1.z - 3 * p2.z + p3.z) * t3)
      };
    }
    function newTrajectory() {
      var wp = [];
      var startSide = Math.random() > 0.5 ? -1 : 1;
      wp.push({ x: -startSide * R * 0.9, y: (Math.random() * 2 - 1) * R * 0.5, z: -Z * 0.3 });
      wp.push({ x: -startSide * R * 0.25 + tmx * 40, y: (Math.random() * 2 - 1) * R * 0.6 + tmy * 30, z: 0 });
      var obstacle = { x: startSide * R * 0.1, y: (Math.random() * 2 - 1) * R * 0.35, z: Z * 0.15 };
      wp.push({ x: obstacle.x + startSide * R * 0.35, y: obstacle.y - startSide * R * 0.3, z: Z * 0.1 });
      wp.push({ x: startSide * R * 0.9 + tmx * 30, y: (Math.random() * 2 - 1) * R * 0.4, z: Z * 0.35 });
      var ctrl = [wp[0]].concat(wp, [wp[wp.length - 1]]);
      var samples = [];
      var STEPS = 26;
      for (var s = 0; s <= (ctrl.length - 3) * STEPS; s++) {
        var seg = Math.floor(s / STEPS);
        var t = (s % STEPS) / STEPS;
        if (seg + 3 >= ctrl.length) break;
        samples.push(catmullRom(ctrl[seg], ctrl[seg + 1], ctrl[seg + 2], ctrl[seg + 3], t));
      }
      return { samples: samples, obstacle: obstacle, progress: 0, state: 'draw', hold: 0, fade: 1 };
    }

    function project(p) {
      var ct = Math.cos(theta), st = Math.sin(theta);
      var x = p.x * ct - p.z * st;
      var z = p.x * st + p.z * ct + focal;
      var f = focal / Math.max(z, 1);
      return {
        x: size.w / 2 + x * f,
        y: size.h / 2 + p.y * f,
        f: f,
        depth: p.z
      };
    }

    var running = true;
    var lastTraj = performance.now();

    var inst = {
      active: !REDUCED,
      step: function () {
        if (!running) return;
        mx += (tmx - mx) * 0.02;
        my += (tmy - my) * 0.02;
        theta += 0.0011 + mx * 0.0009;
        scanZ += scanDir * 1.35;
        if (scanZ > Z) scanDir = -1;
        if (scanZ < -Z) scanDir = 1;

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.save();
        ctx.scale(DPR, DPR);

        for (var i = 0; i < points.length; i++) {
          var p = points[i];
          p.life -= p.decay;
          if (p.life <= 0) { seed(p); p.life = 1; }
          var proj = project(p);
          if (proj.f <= 0.15) continue;
          var scanDist = Math.abs(p.z - scanZ);
          var scanBoost = Math.exp(-(scanDist * scanDist) / 900);
          var alpha = (0.14 + 0.35 * proj.f) * Math.min(1, p.life * 3);
          var r = Math.max(0.4, 1.15 * proj.f);
          if (scanBoost > 0.04) {
            ctx.fillStyle = 'rgba(' + color + ',' + Math.min(1, alpha + scanBoost * 0.9) + ')';
            r += scanBoost * 1.6;
          } else {
            ctx.fillStyle = 'rgba(' + dimColor + ',' + alpha + ')';
          }
          ctx.beginPath();
          ctx.arc(proj.x, proj.y, r, 0, Math.PI * 2);
          ctx.fill();
        }

        if (withTrajectory) {
          var now = performance.now();
          if (!traj && now - lastTraj > 1600) traj = newTrajectory();
          if (traj) {
            var obs = project(traj.obstacle);
            ctx.save();
            ctx.globalAlpha = 0.35 * traj.fade;
            ctx.strokeStyle = 'rgba(255,138,61,0.9)';
            ctx.setLineDash([3, 4]);
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.arc(obs.x, obs.y, 10 * obs.f, 0, Math.PI * 2);
            ctx.stroke();
            ctx.setLineDash([]);
            ctx.restore();

            var total = traj.samples.length;
            var upto = traj.state === 'draw' ? Math.floor(total * traj.progress) : total;
            ctx.save();
            ctx.globalAlpha = traj.fade;
            ctx.beginPath();
            for (var s2 = 0; s2 < upto; s2++) {
              var pr = project(traj.samples[s2]);
              if (s2 === 0) ctx.moveTo(pr.x, pr.y); else ctx.lineTo(pr.x, pr.y);
            }
            ctx.strokeStyle = 'rgba(' + color + ',0.85)';
            ctx.lineWidth = 1.4;
            ctx.stroke();
            if (upto > 0 && upto <= total) {
              var head = project(traj.samples[Math.min(upto - 1, total - 1)]);
              ctx.beginPath();
              ctx.fillStyle = 'rgba(' + color + ',1)';
              ctx.arc(head.x, head.y, 2.6, 0, Math.PI * 2);
              ctx.fill();
              ctx.beginPath();
              ctx.strokeStyle = 'rgba(' + color + ',0.5)';
              ctx.arc(head.x, head.y, 6, 0, Math.PI * 2);
              ctx.stroke();
            }
            ctx.restore();

            if (traj.state === 'draw') {
              traj.progress += 0.012;
              if (traj.progress >= 1) { traj.state = 'hold'; traj.hold = 0; }
            } else if (traj.state === 'hold') {
              traj.hold++;
              if (traj.hold > 70) traj.state = 'fade';
            } else if (traj.state === 'fade') {
              traj.fade -= 0.03;
              if (traj.fade <= 0) { traj = null; lastTraj = now; }
            }
          }
        }

        ctx.restore();
      }
    };

    canvas.addEventListener('pointermove', function (e) {
      var rect = canvas.getBoundingClientRect();
      tmx = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      tmy = ((e.clientY - rect.top) / rect.height) * 2 - 1;
    }, { passive: true });

    watchVisibility(canvas, function (visible) {
      running = visible;
      inst.active = visible && !REDUCED;
    });

    window.addEventListener('resize', function () { size = fit(canvas); }, { passive: true });

    if (REDUCED) { inst.step(); } else { register(inst); }
    return inst;
  }

  /* ---------------------------------------------------------------------
     Terminal typewriter — boots a short diagnostic, then settles into a
     single status line. Skips straight to the end under reduced motion.
  --------------------------------------------------------------------- */
  function TerminalTyper(el) {
    var lines = JSON.parse(el.getAttribute('data-lines') || '[]');
    var finalLine = el.getAttribute('data-final') || '';
    if (!lines.length) return;
    if (REDUCED) {
      el.innerHTML = '<div class="term-final">' + finalLine + '</div>';
      return;
    }
    var out = document.createElement('div');
    out.className = 'term-body';
    el.appendChild(out);
    var li = 0, ci = 0;
    function typeLine() {
      if (li >= lines.length) {
        setTimeout(function () {
          out.innerHTML = '';
          var f = document.createElement('div');
          f.className = 'term-final';
          f.textContent = finalLine;
          out.appendChild(f);
        }, 650);
        return;
      }
      var row = document.createElement('div');
      row.className = 'term-row';
      out.appendChild(row);
      var text = lines[li];
      ci = 0;
      var speed = li === 0 ? 32 : 14;
      (function typeChar() {
        row.textContent = text.slice(0, ci);
        ci++;
        if (ci <= text.length) {
          setTimeout(typeChar, speed);
        } else {
          li++;
          setTimeout(typeLine, li === 1 ? 260 : 90);
        }
      })();
    }
    watchVisibility(el, function (visible) {
      if (visible && !el.dataset.started) {
        el.dataset.started = '1';
        typeLine();
      }
    });
  }

  /* ---------------------------------------------------------------------
     Custom cursor — small dot + trailing ring. Fine pointers only.
  --------------------------------------------------------------------- */
  function initCursor() {
    if (REDUCED) return;
    if (!window.matchMedia || !window.matchMedia('(pointer: fine)').matches) return;
    var dot = document.createElement('div');
    var ring = document.createElement('div');
    dot.className = 'cx-dot';
    ring.className = 'cx-ring';
    document.body.appendChild(ring);
    document.body.appendChild(dot);
    document.documentElement.classList.add('has-cursor-fx');
    var mx = -100, my = -100, rx = -100, ry = -100;
    document.addEventListener('pointermove', function (e) {
      mx = e.clientX; my = e.clientY;
      dot.style.transform = 'translate3d(' + mx + 'px,' + my + 'px,0)';
    }, { passive: true });
    document.addEventListener('pointerdown', function () { ring.classList.add('cx-down'); });
    document.addEventListener('pointerup', function () { ring.classList.remove('cx-down'); });
    function loop() {
      rx += (mx - rx) * 0.18;
      ry += (my - ry) * 0.18;
      ring.style.transform = 'translate3d(' + rx + 'px,' + ry + 'px,0)';
      requestAnimationFrame(loop);
    }
    loop();
    var hoverables = 'a, button, .project-card, .doc-card, .armory-node, [data-cursor-hover]';
    document.addEventListener('mouseover', function (e) {
      if (e.target.closest && e.target.closest(hoverables)) ring.classList.add('cx-hover');
    });
    document.addEventListener('mouseout', function (e) {
      if (e.target.closest && e.target.closest(hoverables)) ring.classList.remove('cx-hover');
    });
  }

  /* ---------------------------------------------------------------------
     Project domain filter
  --------------------------------------------------------------------- */
  function initProjectFilters() {
    var filterBtns = document.querySelectorAll('.project-filter');
    var cards = document.querySelectorAll('.project-card');
    if (!filterBtns.length) return;
    filterBtns.forEach(function (btn) {
      btn.addEventListener('click', function () {
        var filter = btn.dataset.filter;
        filterBtns.forEach(function (b) { b.classList.remove('active'); });
        btn.classList.add('active');
        var anyVisible = false;
        cards.forEach(function (card) {
          var match = filter === 'all' || card.dataset.category === filter;
          card.style.display = match ? '' : 'none';
          if (match) anyVisible = true;
        });
        document.querySelectorAll('.domain-heading').forEach(function (h) {
          if (filter === 'all') { h.style.display = ''; return; }
          h.style.display = h.dataset.category === filter ? '' : 'none';
        });
      });
    });
  }

  /* ---------------------------------------------------------------------
     Scroll-to-top
  --------------------------------------------------------------------- */
  function initScrollTop() {
    var btn = document.createElement('button');
    btn.setAttribute('aria-label', 'Scroll to top');
    btn.className = 'scroll-top-btn';
    btn.innerHTML = '&#8593;';
    document.body.appendChild(btn);
    window.addEventListener('scroll', function () {
      btn.classList.toggle('visible', window.scrollY > 500);
    }, { passive: true });
    btn.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: REDUCED ? 'auto' : 'smooth' });
    });
  }

  /* ---------------------------------------------------------------------
     Armory — progressive category disclosure
  --------------------------------------------------------------------- */
  function initArmory() {
    var groups = document.querySelectorAll('.armory-group');
    groups.forEach(function (g) {
      var head = g.querySelector('.armory-head');
      if (!head) return;
      head.addEventListener('click', function () {
        var open = g.classList.toggle('open');
        head.setAttribute('aria-expanded', open ? 'true' : 'false');
      });
    });
  }

  /* ---------------------------------------------------------------------
     Scan + init. Some blocks (the hero) are hydrated client-side by the
     theme after first paint, so a single DOMContentLoaded pass can miss
     them — a MutationObserver keeps scanning until nothing new appears.
  --------------------------------------------------------------------- */
  function scan(root) {
    initReveal(root);
    root.querySelectorAll('[data-fx="lidar"]:not([data-ready])').forEach(function (canvas) {
      canvas.setAttribute('data-ready', '1');
      LidarField(canvas, {
        density: parseFloat(canvas.dataset.density || '1'),
        count: parseInt(canvas.dataset.count || '700', 10),
        trajectory: canvas.dataset.trajectory === '1',
        color: canvas.dataset.color,
        dimColor: canvas.dataset.dim,
        spreadXY: canvas.dataset.spread ? parseFloat(canvas.dataset.spread) : undefined,
        spreadZ: canvas.dataset.depth ? parseFloat(canvas.dataset.depth) : undefined
      });
    });
    root.querySelectorAll('[data-term]:not([data-ready])').forEach(function (el) {
      el.setAttribute('data-ready', '1');
      TerminalTyper(el);
    });
  }

  function boot() {
    scan(document);
    initCursor();
    initProjectFilters();
    initScrollTop();
    initArmory();

    if ('MutationObserver' in window) {
      var pending = false;
      var mo = new MutationObserver(function () {
        if (pending) return;
        pending = true;
        requestAnimationFrame(function () { pending = false; scan(document); });
      });
      mo.observe(document.body, { childList: true, subtree: true });
      setTimeout(function () { mo.disconnect(); }, 12000);
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }
})();
