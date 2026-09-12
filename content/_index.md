---
title: "Portfolio"
date: 2026-03-10
type: landing
design:
  spacing: "4rem"

sections:
   - block: hero
     content:
       title: "Pouya Shaterzadeh"
       text: |
          <div class="hero-premium">
          <div id="hero-canvas"></div>
          <p class="hero-tag">AI Engineer &middot; ML Engineer &middot; Robotics</p>
          <h1 class="hero-headline">Building intelligent systems, agents & robotics.</h1>
          <p class="hero-sub">AI Engineering student at Bahçeşehir University focused on machine learning, agentic AI, computer vision, robotics, and production-grade software systems.</p>
          <div class="hero-ctas">
          <a href="#projects" class="btn-premium primary">View Projects</a>
          <a href="https://github.com/Pouya-Shaterzadeh" target="_blank" class="btn-premium">GitHub</a>
          <a href="https://www.linkedin.com/in/pouya-shaterzadeh-b88426284/" target="_blank" class="btn-premium">LinkedIn</a>
          </div>
          <div class="hero-meta">
          <span class="hero-meta-item">Bahçeşehir University</span>
          <span class="hero-meta-item">Istanbul, Türkiye</span>
          </div>
          </div>

     design:
       spacing:
         padding: ["5rem", 0, "3rem", 0]
       css_class: ""
       background:
         color: "#0a0a0f"

   - block: markdown
     id: now
     content:
       title: '<span class="section-title-premium">Now</span>'
       subtitle: ''
       text: |
          <div id="now-canvas"></div>
          <div class="now-section">
          <p class="now-label">Currently building</p>
          <p>Agentic AI systems, multimodal applications, robotics infrastructure, and production-oriented AI software.</p>
          </div>

     design:
       spacing:
         padding: ["1rem", 0, "1rem", 0]
       css_class: "cyber-section"

   - block: markdown
     id: what-i-build
     content:
       title: '<span class="section-title-premium">What I Build</span>'
       subtitle: ''
       text: |
          <div id="skills-canvas"></div>
          <div class="skills-grid">
          <div class="skill-category">
          <h3>AI & Machine Learning</h3>
          <div class="skill-tags">
          <span>PyTorch</span><span>TensorFlow</span><span>scikit-learn</span><span>Computer Vision</span><span>NLP</span><span>Embeddings</span><span>Multimodal AI</span>
          </div>
          </div>
          <div class="skill-category">
          <h3>Agentic AI & RAG</h3>
          <div class="skill-tags">
          <span>LangGraph</span><span>LangChain</span><span>CrewAI</span><span>RAG</span><span>Hybrid Retrieval</span><span>FAISS</span><span>ChromaDB</span><span>Docling</span>
          </div>
          </div>
          <div class="skill-category">
          <h3>Robotics & Autonomous Systems</h3>
          <div class="skill-tags">
          <span>ROS 2</span><span>PX4</span><span>Gazebo</span><span>Computer Vision</span><span>UAV Systems</span><span>Telemetry</span>
          </div>
          </div>
          <div class="skill-category">
          <h3>Software & Infrastructure</h3>
          <div class="skill-tags">
          <span>Python</span><span>FastAPI</span><span>Docker</span><span>Linux</span><span>GitHub Actions</span><span>MongoDB</span><span>Prometheus</span><span>Traefik</span>
          </div>
          </div>
          </div>

     design:
       spacing:
         padding: ["2rem", 0, "1rem", 0]
       css_class: "cyber-section"

   - block: markdown
     id: timeline
     content:
       title: '<span class="section-title-premium">Timeline</span>'
       subtitle: ''
       text: |
          <div id="timeline-canvas"></div>
          <div class="timeline-premium">
          <div class="timeline-year">2024</div>
          <div class="timeline-event prominent">Started AI Engineering @ Bahçeşehir University</div>
          <div class="timeline-event">Completed ML Specialization by Andrew Ng</div>
          <div class="timeline-event">Built PyUploadMate — audio distribution automation</div>
          <div class="timeline-year">2025</div>
          <div class="timeline-event prominent">Machine Learning → AI applications → DroneX</div>
          <div class="timeline-event">Built DroneX Aerostack on open-source fleet management</div>
          <div class="timeline-event">Created AI Meeting Assistant — Whisper + Watsonx + LangChain</div>
          <div class="timeline-event">Launched Sky Warriors ROS workspace — Gazebo robotics</div>
          <div class="timeline-event">Completed Customer Segmentation — PCA/UMAP/GMM</div>
          <div class="timeline-year">2026</div>
          <div class="timeline-event prominent">Agentic AI → RAG → robotics → infrastructure</div>
          <div class="timeline-event">Co-founded AP Common Projects with CipherDriftX — built Nanograd & YouTube Research Pipeline</div>
          <div class="timeline-event">Obtained RAG and Agentic AI Professional Certificate — IBM</div>
          <div class="timeline-event">Launched Style Finder AI v2.0 — multimodal fashion search with Llama 4</div>
          <div class="timeline-event">Launched VeriShelf — multi-agent RAG with fact verification</div>
          <div class="timeline-event">Deployed Self-Hosted Infrastructure — multi-region Rocket.Chat + Asterisk</div>
          </div>

     design:
       spacing:
         padding: ["1rem", 0, "2rem", 0]
       css_class: "cyber-section"

   - block: markdown
     id: projects
     content:
       title: '<span class="section-title-premium">Featured Projects</span>'
       subtitle: ''
       text: |
           <div id="projects-canvas"></div>
           <div class="project-filters">
           <button class="project-filter active" data-filter="all">ALL</button>
           <button class="project-filter" data-filter="agentic-ai">AGENTIC AI</button>
           <button class="project-filter" data-filter="multimodal-ai">MULTIMODAL AI</button>
           <button class="project-filter" data-filter="robotics">ROBOTICS</button>
           <button class="project-filter" data-filter="infrastructure">INFRASTRUCTURE</button>
           <button class="project-filter" data-filter="automation">AUTOMATION</button>
           <button class="project-filter" data-filter="ml-research">ML RESEARCH</button>
           </div>
           <div class="projects-grid">
           <article class="project-card hero" data-category="agentic-ai">
           <div class="project-visual">
           <div class="project-glow"></div>
           <img src="/project/verishelf/featured.jpeg" alt="VeriShelf" loading="lazy" />
           </div>
           <div class="project-content">
           <span class="project-category">Agentic AI</span>
           <h3>VeriShelf</h3>
           <p class="project-desc">AI research system with multi-agent verification pipeline for evidence-backed answers.</p>
           <div class="project-tech">
           <span>LangGraph</span><span>Docling</span><span>Hybrid Retrieval</span><span>Multi-Agent</span>
           </div>
           <div class="project-highlight">Multi-agent verification pipeline</div>
           <a href="/project/verishelf/" class="project-link">Explore Project <span aria-hidden="true">→</span></a>
           </div>
           </article>
           <article class="project-card" data-category="multimodal-ai">
           <div class="project-visual">
           <div class="project-glow"></div>
           <img src="/project/style-finder-ai/featured.jpeg" alt="Style Finder AI" loading="lazy" />
           </div>
           <div class="project-content">
           <span class="project-category">Multimodal AI</span>
           <h3>Style Finder AI v2.0</h3>
           <p class="project-desc">Multimodal fashion search pipeline using Llama 4 Maverick + Fashion-CLIP.</p>
           <div class="project-tech">
           <span>Llama 4</span><span>Fashion-CLIP</span><span>~5s inference</span>
           </div>
           <div class="project-highlight">Vision-language inference</div>
           <a href="/project/style-finder-ai/" class="project-link">Explore Project <span aria-hidden="true">→</span></a>
           </div>
           </article>
           <article class="project-card" data-category="robotics">
           <div class="project-visual">
           <div class="project-glow"></div>
           <img src="/project/robot-fleet/featured.jpeg" alt="DroneX Aerostack" loading="lazy" />
           </div>
           <div class="project-content">
           <span class="project-category">Robotics</span>
           <h3>DroneX Aerostack</h3>
           <p class="project-desc">Autonomous drone fleet management dashboard with live telemetry and camera feeds.</p>
           <div class="project-tech">
           <span>ROS</span><span>PX4</span><span>Telemetry</span><span>Computer Vision</span>
           </div>
           <div class="project-highlight">Real-time fleet tracking</div>
           <a href="/project/robot-fleet/" class="project-link">Explore Project <span aria-hidden="true">→</span></a>
           </div>
           </article>
           <article class="project-card" data-category="robotics">
           <div class="project-visual">
           <div class="project-glow"></div>
           <img src="/project/sky-warriors/featured.jpeg" alt="Sky Warriors ROS" loading="lazy" />
           </div>
           <div class="project-content">
           <span class="project-category">Robotics</span>
           <h3>Sky Warriors ROS</h3>
           <p class="project-desc">ROS 2 workspace for robotic arm control, perception pipelines, and Gazebo simulation.</p>
           <div class="project-tech">
           <span>ROS 2</span><span>Gazebo</span><span>PX4</span><span>Perception</span>
           </div>
           <div class="project-highlight">ROS 2 + PX4 autonomy</div>
           <a href="/project/sky-warriors/" class="project-link">Explore Project <span aria-hidden="true">→</span></a>
           </div>
           </article>
           <article class="project-card" data-category="infrastructure">
           <div class="project-visual">
           <div class="project-glow"></div>
           <img src="/project/it-infrastructure/featured.jpeg" alt="Self-Hosted Communication" loading="lazy" />
           </div>
           <div class="project-content">
           <span class="project-category">Infrastructure</span>
           <h3>Self-Hosted Communication</h3>
           <p class="project-desc">Distributed communication stack: Rocket.Chat federation, Asterisk PBX, Traefik SSL, Prometheus monitoring.</p>
           <div class="project-tech">
           <span>Docker</span><span>Rocket.Chat</span><span>Asterisk</span><span>Traefik</span><span>Prometheus</span>
           </div>
           <div class="project-highlight">Self-hosted distributed infrastructure</div>
           <a href="/project/it-infrastructure/" class="project-link">Explore Project <span aria-hidden="true">→</span></a>
           </div>
           </article>
           <article class="project-card" data-category="agentic-ai">
           <div class="project-visual">
           <div class="project-glow"></div>
           <img src="/project/ai-meeting-assistant/featured.jpeg" alt="AI Meeting Assistant" loading="lazy" />
           </div>
           <div class="project-content">
           <span class="project-category">Agentic AI</span>
           <h3>AI Meeting Assistant</h3>
           <p class="project-desc">Automatic meeting transcription, summaries, and action items using Whisper + Watsonx + LangChain.</p>
           <div class="project-tech">
           <span>Whisper</span><span>Watsonx</span><span>LangChain</span>
           </div>
           <div class="project-highlight">End-to-end meeting intelligence</div>
           <a href="/project/ai-meeting-assistant/" class="project-link">Explore Project <span aria-hidden="true">→</span></a>
           </div>
           </article>
           <article class="project-card" data-category="automation">
           <div class="project-visual">
           <div class="project-glow"></div>
           <img src="/project/pyuploadmate/featured.jpeg" alt="PyUploadMate" loading="lazy" />
           </div>
           <div class="project-content">
           <span class="project-category">Automation</span>
           <h3>PyUploadMate</h3>
           <p class="project-desc">Telegram bot for Believe.com audio uploads using Selenium automation and FFmpeg processing.</p>
           <div class="project-tech">
           <span>Selenium</span><span>FFmpeg</span><span>Telegram Bot API</span>
           </div>
           <div class="project-highlight">Automated audio distribution pipeline</div>
           <a href="/project/pyuploadmate/" class="project-link">Explore Project <span aria-hidden="true">→</span></a>
           </div>
           </article>
           <article class="project-card" data-category="ml-research">
           <div class="project-visual">
           <div class="project-glow"></div>
           <img src="/project/house-price-prediction/featured.jpeg" alt="House Price Prediction" loading="lazy" />
           </div>
           <div class="project-content">
           <span class="project-category">ML Research</span>
           <h3>House Price Prediction</h3>
           <p class="project-desc">Stacked ensemble of 6 regression models achieving R²=0.87 on Ames Housing dataset.</p>
           <div class="project-tech">
           <span>XGBoost</span><span>LightGBM</span><span>CatBoost</span><span>Stacking</span>
           </div>
           <div class="project-highlight">R² = 0.87 · 6-model ensemble</div>
           <a href="/project/house-price-prediction/" class="project-link">Explore Project <span aria-hidden="true">→</span></a>
           </div>
           </article>
           <article class="project-card" data-category="ml-research">
           <div class="project-visual">
           <div class="project-glow"></div>
           <img src="/project/customer-segmentation/featured.jpeg" alt="Customer Segmentation" loading="lazy" />
           </div>
           <div class="project-content">
           <span class="project-category">ML Research</span>
           <h3>Customer Segmentation</h3>
           <p class="project-desc">Customer personality analysis using PCA, UMAP, and Gaussian Mixture Models for targeted profiling.</p>
           <div class="project-tech">
           <span>PCA</span><span>UMAP</span><span>GMM</span><span>Scikit-learn</span>
           </div>
           <div class="project-highlight">Unsupervised customer profiling</div>
           <a href="/project/customer-segmentation/" class="project-link">Explore Project <span aria-hidden="true">→</span></a>
           </div>
           </article>
           </div>

     design:
       spacing:
         padding: ["4rem", 0, "5rem", 0]
       css_class: "cyber-section"

   - block: markdown
     id: project-scripts
     content:
       title: ""
       text: |
           <script src="https://cdn.jsdelivr.net/npm/three@0.160.0/build/three.min.js"></script>
           <script>
           (function(){
           var mouseX = 0, mouseY = 0;
           document.addEventListener('mousemove', function(e){
           mouseX = (e.clientX / window.innerWidth) * 2 - 1;
           mouseY = -(e.clientY / window.innerHeight) * 2 + 1;
           });

           /* ======================== HERO: Neural Network ======================== */
           (function(){
           var c = document.getElementById('hero-canvas');
           if (!c) return;
           var w = c.offsetWidth || c.parentElement.offsetWidth;
           var h = c.offsetHeight || 300;
           var scene = new THREE.Scene();
           var cam = new THREE.PerspectiveCamera(75, w/h, 0.1, 1000);
           cam.position.z = 60;
           var ren = new THREE.WebGLRenderer({alpha:true, antialias:true});
           ren.setSize(w, h);
           ren.setPixelRatio(Math.min(window.devicePixelRatio, 2));
           c.appendChild(ren.domElement);

           var N = 120, pos = [], vel = [];
           for (var i = 0; i < N; i++){
           pos.push((Math.random()-0.5)*80, (Math.random()-0.5)*80, (Math.random()-0.5)*40);
           vel.push((Math.random()-0.5)*0.015, (Math.random()-0.5)*0.015, (Math.random()-0.5)*0.008);
           }
           var geo = new THREE.BufferGeometry();
           geo.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
           var mat = new THREE.PointsMaterial({color:0x6366f1, size:2.5, transparent:true, opacity:0.8, sizeAttenuation:true});
           var pts = new THREE.Points(geo, mat);
           scene.add(pts);

           var lineGeo = new THREE.BufferGeometry();
           var lineMat = new THREE.LineBasicMaterial({color:0x6366f1, transparent:true, opacity:0.12});
           var lineMesh = new THREE.LineSegments(lineGeo, lineMat);
           scene.add(lineMesh);

           function animate(){
           requestAnimationFrame(animate);
           var p = geo.attributes.position.array;
           for (var i = 0; i < N*3; i += 3){
           p[i] += vel[i]; p[i+1] += vel[i+1]; p[i+2] += vel[i+2];
           if (Math.abs(p[i]) > 40) vel[i] *= -1;
           if (Math.abs(p[i+1]) > 40) vel[i+1] *= -1;
           if (Math.abs(p[i+2]) > 20) vel[i+2] *= -1;
           p[i] += mouseX * 0.005;
           p[i+1] += mouseY * 0.005;
           }
           geo.attributes.position.needsUpdate = true;

           var verts = [];
           var threshold = 18;
           for (var i = 0; i < N*3; i += 3){
           for (var j = i+3; j < N*3; j += 3){
           var dx = p[i]-p[j], dy = p[i+1]-p[j+1], dz = p[i+2]-p[j+2];
           var d = Math.sqrt(dx*dx + dy*dy + dz*dz);
           if (d < threshold){
           verts.push(p[i], p[i+1], p[i+2], p[j], p[j+1], p[j+2]);
           }
           }
           }
           lineGeo.setAttribute('position', new THREE.Float32BufferAttribute(verts, 3));

           pts.rotation.y += 0.0003;
           lineMesh.rotation.y += 0.0003;
           ren.render(scene, cam);
           }
           animate();
           window.addEventListener('resize', function(){
           w = c.offsetWidth; h = c.offsetHeight || 300;
           cam.aspect = w/h; cam.updateProjectionMatrix(); ren.setSize(w,h);
           });
           })();

           /* ======================== NOW: Code Rain ======================== */
           (function(){
           var c = document.getElementById('now-canvas');
           if (!c) return;
           var w = c.offsetWidth || c.parentElement.offsetWidth;
           var h = c.offsetHeight || 300;
           var scene = new THREE.Scene();
           var cam = new THREE.PerspectiveCamera(60, w/h, 0.1, 1000);
           cam.position.z = 30;
           var ren = new THREE.WebGLRenderer({alpha:true, antialias:true});
           ren.setSize(w, h);
           ren.setPixelRatio(Math.min(window.devicePixelRatio, 2));
           c.appendChild(ren.domElement);

           var cols = 30, rows = 15;
           var glyphs = '01{}[]<>=/;:import def class async await return yield lambda yield True False None'.split('');
           var chars = [];
           for (var x = 0; x < cols; x++){
           for (var y = 0; y < rows; y++){
           var geo = new THREE.PlaneGeometry(0.6, 0.8);
           var ch = glyphs[Math.floor(Math.random()*glyphs.length)];
           var canvas2 = document.createElement('canvas');
           canvas2.width = 32; canvas2.height = 40;
           var ctx = canvas2.getContext('2d');
           ctx.fillStyle = 'rgba(0,0,0,0)';
           ctx.fillRect(0,0,32,40);
           ctx.font = '18px monospace';
           ctx.fillStyle = '#22d3ee';
           ctx.textAlign = 'center';
           ctx.fillText(ch, 16, 28);
           var tex = new THREE.CanvasTexture(canvas2);
           var mat2 = new THREE.MeshBasicMaterial({map: tex, transparent: true, opacity: 0.15 + Math.random()*0.15});
           var mesh = new THREE.Mesh(geo, mat2);
           mesh.position.set((x - cols/2) * 1.1, (y - rows/2) * 1.1, 0);
           scene.add(mesh);
           chars.push({mesh: mesh, baseY: mesh.position.y, speed: 0.02 + Math.random()*0.04, x: x});
           }
           }

           function animate(){
           requestAnimationFrame(animate);
           for (var i = 0; i < chars.length; i++){
           var ch = chars[i];
           ch.mesh.position.y -= ch.speed;
           if (ch.mesh.position.y < -rows/2 * 1.1){
           ch.mesh.position.y = rows/2 * 1.1;
           }
           ch.mesh.material.opacity = 0.1 + Math.abs(Math.sin(Date.now()*0.001 + ch.x*0.3)) * 0.15;
           }
           ren.render(scene, cam);
           }
           animate();
           window.addEventListener('resize', function(){
           w = c.offsetWidth; h = c.offsetHeight || 300;
           cam.aspect = w/h; cam.updateProjectionMatrix(); ren.setSize(w,h);
           });
           })();

           /* ======================== SKILLS: Orbital Rings ======================== */
           (function(){
           var c = document.getElementById('skills-canvas');
           if (!c) return;
           var w = c.offsetWidth || c.parentElement.offsetWidth;
           var h = c.offsetHeight || 300;
           var scene = new THREE.Scene();
           var cam = new THREE.PerspectiveCamera(75, w/h, 0.1, 1000);
           cam.position.z = 45;
           var ren = new THREE.WebGLRenderer({alpha:true, antialias:true});
           ren.setSize(w, h);
           ren.setPixelRatio(Math.min(window.devicePixelRatio, 2));
           c.appendChild(ren.domElement);

           var rings = [];
           var ringConfigs = [
           {radius: 18, count: 60, tilt: 0.3, speed: 0.008, color: 0xa855f7},
           {radius: 24, count: 80, tilt: 0.8, speed: -0.005, color: 0x7c3aed},
           {radius: 30, count: 100, tilt: 1.2, speed: 0.003, color: 0x6366f1}
           ];
           ringConfigs.forEach(function(cfg){
           var geo = new THREE.BufferGeometry();
           var pos = new Float32Array(cfg.count * 3);
           for (var i = 0; i < cfg.count; i++){
           var a = (i / cfg.count) * Math.PI * 2;
           pos[i*3] = Math.cos(a) * cfg.radius;
           pos[i*3+1] = Math.sin(a) * cfg.radius;
           pos[i*3+2] = (Math.random()-0.5) * 2;
           }
           geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
           var mat = new THREE.PointsMaterial({color: cfg.color, size: 1.5, transparent: true, opacity: 0.5, sizeAttenuation: true});
           var pts = new THREE.Points(geo, mat);
           var grp = new THREE.Group();
           grp.add(pts);
           grp.rotation.x = cfg.tilt;
           scene.add(grp);
           rings.push({grp: grp, speed: cfg.speed});
           });

           var centerGeo = new THREE.IcosahedronGeometry(3, 1);
           var centerMat = new THREE.MeshBasicMaterial({color: 0xa855f7, wireframe: true, transparent: true, opacity: 0.3});
           var center = new THREE.Mesh(centerGeo, centerMat);
           scene.add(center);

           function animate(){
           requestAnimationFrame(animate);
           for (var i = 0; i < rings.length; i++){
           rings[i].grp.rotation.z += rings[i].speed;
           rings[i].grp.rotation.y += rings[i].speed * 0.3;
           }
           center.rotation.x += 0.003;
           center.rotation.y += 0.005;
           cam.position.x += (mouseX * 5 - cam.position.x) * 0.02;
           cam.position.y += (mouseY * 3 - cam.position.y) * 0.02;
           cam.lookAt(0,0,0);
           ren.render(scene, cam);
           }
           animate();
           window.addEventListener('resize', function(){
           w = c.offsetWidth; h = c.offsetHeight || 300;
           cam.aspect = w/h; cam.updateProjectionMatrix(); ren.setSize(w,h);
           });
           })();

            /* ======================== TIMELINE: Data Stream ======================== */
            (function(){
            var c = document.getElementById('timeline-canvas');
            if (!c) return;
            var w = c.offsetWidth || c.parentElement.offsetWidth;
            var h = c.offsetHeight || 300;
            var scene = new THREE.Scene();
            var cam = new THREE.PerspectiveCamera(60, w/h, 0.1, 1000);
            cam.position.z = 30;
            var ren = new THREE.WebGLRenderer({alpha:true, antialias:true});
            ren.setSize(w, h);
            ren.setPixelRatio(Math.min(window.devicePixelRatio, 2));
            c.appendChild(ren.domElement);

            var streams = 6, tokensPerStream = 12;
            var allTokens = [];
            for (var s = 0; s < streams; s++){
            var y = (s - streams/2 + 0.5) * 3.5;
            for (var t = 0; t < tokensPerStream; t++){
            var geo = new THREE.PlaneGeometry(0.4, 0.5);
            var canvas2 = document.createElement('canvas');
            canvas2.width = 20; canvas2.height = 26;
            var ctx = canvas2.getContext('2d');
            var glyphs = '01{}[]=>:;#'.split('');
            var ch = glyphs[Math.floor(Math.random()*glyphs.length)];
            ctx.font = '14px monospace';
            ctx.fillStyle = '#f59e0b';
            ctx.textAlign = 'center';
            ctx.fillText(ch, 10, 20);
            var tex = new THREE.CanvasTexture(canvas2);
            var mat = new THREE.MeshBasicMaterial({map: tex, transparent: true, opacity: 0.12});
            var mesh = new THREE.Mesh(geo, mat);
            var x = (t - tokensPerStream/2) * 2.2;
            mesh.position.set(x, y, 0);
            scene.add(mesh);
            allTokens.push({mesh: mesh, baseX: x, speed: 0.015 + Math.random()*0.02, stream: s});
            }
            }

            var connGeo = new THREE.BufferGeometry();
            var connMat = new THREE.LineBasicMaterial({color: 0xf59e0b, transparent: true, opacity: 0.06});
            var connLines = new THREE.LineSegments(connGeo, connMat);
            scene.add(connLines);

            function animate(){
            requestAnimationFrame(animate);
            for (var i = 0; i < allTokens.length; i++){
            var tk = allTokens[i];
            tk.mesh.position.x += tk.speed;
            if (tk.mesh.position.x > tokensPerStream/2 * 2.2){
            tk.mesh.position.x = -tokensPerStream/2 * 2.2;
            }
            tk.mesh.material.opacity = 0.06 + Math.abs(Math.sin(Date.now()*0.0008 + tk.baseX*0.2 + tk.stream)) * 0.12;
            }

            var verts = [];
            for (var i = 0; i < allTokens.length; i++){
            for (var j = i+1; j < allTokens.length; j++){
            if (allTokens[i].stream === allTokens[j].stream){
            var dx = allTokens[i].mesh.position.x - allTokens[j].mesh.position.x;
            if (Math.abs(dx) < 3){
            var a = allTokens[i].mesh.position, b = allTokens[j].mesh.position;
            verts.push(a.x, a.y, a.z, b.x, b.y, b.z);
            }
            }
            }
            }
            connGeo.setAttribute('position', new THREE.Float32BufferAttribute(verts, 3));
            ren.render(scene, cam);
            }
            animate();
            window.addEventListener('resize', function(){
            w = c.offsetWidth; h = c.offsetHeight || 300;
            cam.aspect = w/h; cam.updateProjectionMatrix(); ren.setSize(w,h);
            });
            })();

            /* ======================== PROJECTS: Neural Inference ======================== */
            (function(){
            var c = document.getElementById('projects-canvas');
            if (!c) return;
            var w = c.offsetWidth || c.parentElement.offsetWidth;
            var h = c.offsetHeight || 300;
            var scene = new THREE.Scene();
            var cam = new THREE.PerspectiveCamera(60, w/h, 0.1, 1000);
            cam.position.z = 35;
            var ren = new THREE.WebGLRenderer({alpha:true, antialias:true});
            ren.setSize(w, h);
            ren.setPixelRatio(Math.min(window.devicePixelRatio, 2));
            c.appendChild(ren.domElement);

            var layers = [5, 7, 5, 3];
            var layerX = [];
            var allNodes = [];
            var spacing = 8;
            var startX = -(layers.length - 1) * spacing / 2;
            for (var l = 0; l < layers.length; l++){
            layerX.push(startX + l * spacing);
            var n = layers[l];
            for (var i = 0; i < n; i++){
            var y = (i - (n-1)/2) * 3.5;
            allNodes.push({x: startX + l * spacing, y: y, z: 0, layer: l, idx: i, pulse: Math.random() * Math.PI * 2});
            }
            }

            var nGeo = new THREE.BufferGeometry();
            var nPos = new Float32Array(allNodes.length * 3);
            for (var i = 0; i < allNodes.length; i++){
            nPos[i*3] = allNodes[i].x; nPos[i*3+1] = allNodes[i].y; nPos[i*3+2] = allNodes[i].z;
            }
            nGeo.setAttribute('position', new THREE.BufferAttribute(nPos, 3));
            var nMat = new THREE.PointsMaterial({color: 0xec4899, size: 2.5, transparent: true, opacity: 0.5});
            var nPts = new THREE.Points(nGeo, nMat);
            scene.add(nPts);

            var edges = [];
            for (var i = 0; i < allNodes.length; i++){
            for (var j = 0; j < allNodes.length; j++){
            if (allNodes[i].layer === allNodes[j].layer - 1){
            edges.push({a: i, b: j});
            }
            }
            }
            var eGeo = new THREE.BufferGeometry();
            var eMat = new THREE.LineBasicMaterial({color: 0xec4899, transparent: true, opacity: 0.06});
            var eLines = new THREE.LineSegments(eGeo, eMat);
            scene.add(eLines);

            var pulses = [], pulseCount = 15;
            for (var i = 0; i < pulseCount; i++){
            var e = edges[Math.floor(Math.random() * edges.length)];
            pulses.push({a: e.a, b: e.b, t: Math.random(), speed: 0.005 + Math.random()*0.008});
            }
            var pGeo = new THREE.BufferGeometry();
            var pPos = new Float32Array(pulseCount * 3);
            pGeo.setAttribute('position', new THREE.BufferAttribute(pPos, 3));
            var pMat = new THREE.PointsMaterial({color: 0xf472b6, size: 1.5, transparent: true, opacity: 0.8});
            var pPts = new THREE.Points(pGeo, pMat);
            scene.add(pPts);

            function animate(){
            requestAnimationFrame(animate);
            var t = Date.now() * 0.001;
            var np = nGeo.attributes.position.array;
            for (var i = 0; i < allNodes.length; i++){
            np[i*3+1] = allNodes[i].y + Math.sin(t * 0.5 + allNodes[i].pulse) * 0.3;
            }
            nGeo.attributes.position.needsUpdate = true;

            var ev = [];
            for (var i = 0; i < edges.length; i++){
            var a = allNodes[edges[i].a], b = allNodes[edges[i].b];
            ev.push(a.x, a.y, a.z, b.x, b.y, b.z);
            }
            eGeo.setAttribute('position', new THREE.Float32BufferAttribute(ev, 3));

            var pp = pGeo.attributes.position.array;
            for (var i = 0; i < pulseCount; i++){
            var pu = pulses[i];
            pu.t += pu.speed;
            if (pu.t > 1){
            pu.t = 0;
            var ne = edges[Math.floor(Math.random() * edges.length)];
            pu.a = ne.a; pu.b = ne.b;
            }
            var na = allNodes[pu.a], nb = allNodes[pu.b];
            pp[i*3] = na.x + (nb.x - na.x) * pu.t;
            pp[i*3+1] = na.y + (nb.y - na.y) * pu.t;
            pp[i*3+2] = 0;
            }
            pGeo.attributes.position.needsUpdate = true;

            ren.render(scene, cam);
            }
            animate();
            window.addEventListener('resize', function(){
            w = c.offsetWidth; h = c.offsetHeight || 300;
            cam.aspect = w/h; cam.updateProjectionMatrix(); ren.setSize(w,h);
            });
            })();

           /* ======================== TESTIMONIALS: Ambient ======================== */
           (function(){
           var c = document.getElementById('testimonials-canvas');
           if (!c) return;
           var w = c.offsetWidth || c.parentElement.offsetWidth;
           var h = c.offsetHeight || 300;
           var scene = new THREE.Scene();
           var cam = new THREE.PerspectiveCamera(75, w/h, 0.1, 1000);
           cam.position.z = 40;
           var ren = new THREE.WebGLRenderer({alpha:true, antialias:true});
           ren.setSize(w, h);
           ren.setPixelRatio(Math.min(window.devicePixelRatio, 2));
           c.appendChild(ren.domElement);
           var N = 50, pos = [], vel = [];
           for (var i = 0; i < N; i++){
           pos.push((Math.random()-0.5)*60, (Math.random()-0.5)*40, (Math.random()-0.5)*20);
           vel.push((Math.random()-0.5)*0.005, (Math.random()-0.5)*0.005, 0);
           }
           var geo = new THREE.BufferGeometry();
           geo.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
           var mat = new THREE.PointsMaterial({color: 0x22d3ee, size: 1.5, transparent: true, opacity: 0.3});
           var pts = new THREE.Points(geo, mat);
           scene.add(pts);
           function animate(){
           requestAnimationFrame(animate);
           var p = geo.attributes.position.array;
           for (var i = 0; i < N*3; i+=3){
           p[i]+=vel[i]; p[i+1]+=vel[i+1];
           if(Math.abs(p[i])>30) vel[i]*=-1;
           if(Math.abs(p[i+1])>20) vel[i+1]*=-1;
           }
           geo.attributes.position.needsUpdate = true;
           pts.rotation.y += 0.0001;
           ren.render(scene, cam);
           }
           animate();
           window.addEventListener('resize', function(){
           w = c.offsetWidth; h = c.offsetHeight || 300;
           cam.aspect = w/h; cam.updateProjectionMatrix(); ren.setSize(w,h);
           });
           })();

           /* ======================== CONTACT: Glow Particles ======================== */
           (function(){
           var c = document.getElementById('contact-canvas');
           if (!c) return;
           var w = c.offsetWidth || c.parentElement.offsetWidth;
           var h = c.offsetHeight || 300;
           var scene = new THREE.Scene();
           var cam = new THREE.PerspectiveCamera(75, w/h, 0.1, 1000);
           cam.position.z = 40;
           var ren = new THREE.WebGLRenderer({alpha:true, antialias:true});
           ren.setSize(w, h);
           ren.setPixelRatio(Math.min(window.devicePixelRatio, 2));
           c.appendChild(ren.domElement);
           var N = 35, pos = [], vel = [];
           for (var i = 0; i < N; i++){
           pos.push((Math.random()-0.5)*50, (Math.random()-0.5)*30, (Math.random()-0.5)*15);
           vel.push((Math.random()-0.5)*0.003, (Math.random()-0.5)*0.003, 0);
           }
           var geo = new THREE.BufferGeometry();
           geo.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
           var mat = new THREE.PointsMaterial({color: 0xa855f7, size: 2, transparent: true, opacity: 0.25});
           var pts = new THREE.Points(geo, mat);
           scene.add(pts);
           function animate(){
           requestAnimationFrame(animate);
           var p = geo.attributes.position.array;
           for (var i = 0; i < N*3; i+=3){
           p[i]+=vel[i]; p[i+1]+=vel[i+1];
           if(Math.abs(p[i])>25) vel[i]*=-1;
           if(Math.abs(p[i+1])>15) vel[i+1]*=-1;
           }
           geo.attributes.position.needsUpdate = true;
           pts.rotation.y += 0.00015;
           ren.render(scene, cam);
           }
           animate();
           window.addEventListener('resize', function(){
           w = c.offsetWidth; h = c.offsetHeight || 300;
           cam.aspect = w/h; cam.updateProjectionMatrix(); ren.setSize(w,h);
           });
           })();

           })();

           // Project filtering
           (function(){
           var filterBtns = document.querySelectorAll('.project-filter');
           var cards = document.querySelectorAll('.project-card');
           filterBtns.forEach(function(btn){
           btn.addEventListener('click', function(){
           var filter = btn.dataset.filter;
           filterBtns.forEach(function(b){ b.classList.remove('active'); });
           btn.classList.add('active');
           cards.forEach(function(card){
           if (filter === 'all' || card.dataset.category === filter){
           card.style.display = '';
           card.style.opacity = '1';
           card.style.transform = '';
           } else {
           card.style.display = 'none';
           }
           });
           });
           });
           })();

           // Scroll reveal
           (function(){
           var targets = document.querySelectorAll('.cyber-section, .hero-block-container');
           if (!targets.length) return;
           targets.forEach(function(el){
           el.style.opacity = '0';
           el.style.transform = 'translateY(40px)';
           el.style.transition = 'opacity 0.8s cubic-bezier(0.16,1,0.3,1), transform 0.8s cubic-bezier(0.16,1,0.3,1)';
           });
           var observer = new IntersectionObserver(function(entries){
           entries.forEach(function(entry){
           if (entry.isIntersecting){
           var delay = entry.target.dataset.revealDelay || 0;
           setTimeout(function(){
           entry.target.style.opacity = '1';
           entry.target.style.transform = 'translateY(0)';
           }, parseInt(delay));
           observer.unobserve(entry.target);
           }
           });
           }, { threshold: 0.1, rootMargin: '0px 0px -60px 0px' });
           var sections = document.querySelectorAll('.cyber-section');
           sections.forEach(function(s, i){ s.dataset.revealDelay = i * 100; });
           var hero = document.querySelector('.hero-block-container');
           if (hero) hero.dataset.revealDelay = '0';
           targets.forEach(function(el){ observer.observe(el); });
           })();

           // Scroll to top
           (function(){
           var btn = document.createElement('button');
           btn.setAttribute('aria-label', 'Scroll to top');
           btn.innerHTML = '&#8593;';
           btn.style.cssText = 'position:fixed;bottom:2rem;right:2rem;width:2.5rem;height:2.5rem;border:1px solid rgba(255,255,255,0.12);border-radius:8px;background:rgba(255,255,255,0.04);backdrop-filter:blur(8px);color:rgba(255,255,255,0.5);font:600 1rem/1 sans-serif;cursor:pointer;display:grid;place-items:center;opacity:0;visibility:hidden;transform:translateY(10px);transition:all 0.3s ease;z-index:9999;';
           document.body.appendChild(btn);
           window.addEventListener('scroll', function(){
           if (window.scrollY > 400){ btn.style.opacity='1'; btn.style.visibility='visible'; btn.style.transform='translateY(0)'; }
           else { btn.style.opacity='0'; btn.style.visibility='hidden'; btn.style.transform='translateY(10px)'; }
           }, { passive: true });
           btn.addEventListener('click', function(){ window.scrollTo({top:0, behavior:'smooth'}); });
           })();
           </script>

     design:
       spacing:
         padding: ["0", 0, "0", 0]

   - block: markdown
     id: testimonials
     content:
       title: '<span class="section-title-premium">Endorsements</span>'
       subtitle: ''
       text: |
          <div id="testimonials-canvas"></div>
          <div class="testimonial-card">
          <p class="testimonial-text">"Thank you Pouya, you are valuable fellow! Thanks for your efforts in ML and AI."</p>
          <div class="testimonial-author">Anil B.</div>
          <div class="testimonial-role">Founder @ <a href="https://catalpinar.solutions/" target="_blank" style="color:var(--cyber-accent);">Catalpinar IT Solutions</a></div>
          </div>

     design:
       spacing:
         padding: ["2rem", 0, "3rem", 0]
       css_class: "cyber-section"

   - block: markdown
     id: contact
     content:
       title: "<span class=\"section-title-premium\">Let's connect</span>"
       subtitle: ''
       text: |
          <div id="contact-canvas"></div>
          <div class="contact-section">
          <p class="contact-text">Interested in AI systems, robotics, agentic workflows, or ambitious software projects?</p>
          <div class="contact-links">
          <a href="https://www.linkedin.com/in/pouya-shaterzadeh-b88426284/" target="_blank" class="btn-premium">LinkedIn</a>
          <a href="https://github.com/Pouya-Shaterzadeh" target="_blank" class="btn-premium">GitHub</a>
          <a href="mailto:pouya.shaterzadeh@bahcesehir.edu.tr" class="btn-premium">Email</a>
          </div>
          </div>

     design:
       spacing:
         padding: ["3rem", 0, "4rem", 0]
       css_class: "cyber-section"

   - block: markdown
     id: matrix-rain
     content:
       title: ""
       text: ""
     design:
       spacing:
         padding: ["0", 0, "0", 0]
---
