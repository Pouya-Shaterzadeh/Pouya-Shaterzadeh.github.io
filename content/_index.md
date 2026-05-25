---
title: 'Portfolio'
date: 2026-03-10
type: landing

design:
  spacing: "5rem"

sections:
  - block: hero
    content:
      title: |
        <span class="glitch">Pouya Shaterzadeh</span>
      text: |
        <div class="hero-cyber">
          <div class="hero-cyber-copy">
            <div class="hero-cyber-status">-- SYSTEM: ACTIVE --</div>
            <p class="hero-cyber-role">
              <strong>AI Developer</strong>
              <span>Cybersecurity</span>
              <em>Robotics</em>
            </p>
            <p class="hero-cyber-terminal">
              $ cat /home/pouya/README.md<br>
              <span>&gt;</span> AI Engineering @ Bahçeşehir University<br>
              <span>&gt;</span> Deep learning · Computer vision · NLP<br>
              <span>&gt;</span> Self-hosted infrastructure · Secure systems<br>
              <span>&gt;</span> 20+ repos · 46+ stars · Open source advocate
            </p>
          </div>
          <div class="hero-cyber-actions">
            <a href="/#projects" class="btn-cyber">
              ■ &nbsp;./explore_projects
            </a>
            <a href="/docs/" class="btn-cyber purple">
              ◆ &nbsp;./view_docs
            </a>
            <a href="https://github.com/Pouya-Shaterzadeh" target="_blank" class="btn-cyber" style="border-color:#0ff;color:#0ff;">
              ◇ &nbsp;./github
            </a>
          </div>
        </div>
    design:
      spacing:
        padding: ["4rem", 0, "2rem", 0]
      css_class: ""
      background:
        color: "#0a0a0f"
        image:
          filename: ""
          filters:
            brightness: 0.5

  - block: markdown
    id: status
    content:
      title: ""
      text: |
        <hr class="cyber">
        <div style="display: flex; justify-content: center; gap: 3rem; flex-wrap: wrap; padding: 1rem 0;">
          <div class="cyber-stat">
            <div class="number">22</div>
            <div class="label">Repositories</div>
          </div>
          <div class="cyber-stat">
            <div class="number" style="color: #ff00ff;">46+</div>
            <div class="label">GitHub Stars</div>
          </div>
          <div class="cyber-stat">
            <div class="number" style="color: #0ff;">7</div>
            <div class="label">Languages</div>
          </div>
          <div class="cyber-stat">
            <div class="number">87%</div>
            <div class="label">Best Model</div>
          </div>
        </div>
        <hr class="cyber">
    design:
      spacing:
        padding: ["0rem", 0, "0rem", 0]

  - block: markdown
    id: skills
    content:
      title: '<span class="section-title-cyber">Armory</span>'
      subtitle: '<span style="font-family: Courier New, monospace; font-size: 0.85rem; color: #888;">$ cat /home/pouya/.toolkit</span>'
      text: |
        <div style="display: flex; flex-wrap: wrap; gap: 0.4rem; justify-content: center; margin: 1.5rem 0;">
          <span class="tag-cyber">python</span>
          <span class="tag-cyber purple">pytorch</span>
          <span class="tag-cyber cyan">tensorflow</span>
          <span class="tag-cyber">opencv</span>
          <span class="tag-cyber purple">nlp</span>
          <span class="tag-cyber cyan">computer_vision</span>
          <span class="tag-cyber">typeScript</span>
          <span class="tag-cyber purple">ros</span>
          <span class="tag-cyber cyan">gazebo</span>
          <span class="tag-cyber">docker</span>
          <span class="tag-cyber purple">linux</span>
          <span class="tag-cyber cyan">bash</span>
          <span class="tag-cyber">fastapi</span>
          <span class="tag-cyber purple">mongodb</span>
          <span class="tag-cyber cyan">jupyter</span>
          <span class="tag-cyber">clip</span>
          <span class="tag-cyber purple">whisper</span>
          <span class="tag-cyber cyan">langchain</span>
          <span class="tag-cyber">rocket.chat</span>
          <span class="tag-cyber purple">asterisk</span>
          <span class="tag-cyber cyan">traefik</span>
          <span class="tag-cyber">git</span>
          <span class="tag-cyber purple">github_actions</span>
          <span class="tag-cyber cyan">selenium</span>
          <span class="tag-cyber">c++</span>
          <span class="tag-cyber purple">ffmpeg</span>
          <span class="tag-cyber cyan">go</span>
          <span class="tag-cyber">scikit-learn</span>
          <span class="tag-cyber purple">huggingface</span>
          <span class="tag-cyber cyan">prometheus</span>
        </div>
    design:
      spacing:
        padding: ["2rem", 0, "1rem", 0]
      css_class: "cyber-section cyber-section-armory"

  - block: markdown
    id: timeline
    content:
      title: '<span class="section-title-cyber">Timeline</span>'
      subtitle: '<span style="font-family: Courier New, monospace; font-size: 0.85rem; color: #888;">$ cat /var/log/progress.log | tail -20</span>'
      text: |
        <div style="display: flex; flex-direction: column; gap: 1rem; max-width: 600px; margin: 1.5rem auto;">
          <div style="display: grid; grid-template-columns: 100px 1fr; gap: 0.5rem; font-family: Courier New, monospace; font-size: 0.85rem;">
            <span style="color: #00ff41;">2026-04</span>
            <span>Launched <strong>Style Finder AI v2.0</strong> — multimodal fashion search with Llama 4</span>
            <span style="color: #00ff41;">2026-03</span>
            <span>Deployed <strong>Self-Hosted Infrastructure</strong> — multi-region Rocket.Chat + Asterisk</span>
            <span style="color: #00ff41;">2026-02</span>
            <span>Began <strong>Sky Warriors ROS</strong> workspace — Gazebo robotics</span>
            <span style="color: #00ff41;">2025-11</span>
            <span>Built open-source <strong>Robot Fleet Dashboard</strong> with TypeScript</span>
            <span style="color: #00ff41;">2025-10</span>
            <span>Created <strong>AI Meeting Assistant</strong> — Whisper + Watsonx + LangChain</span>
            <span style="color: #00ff41;">2024-12</span>
            <span>Completed ML Specialization by <strong>Andrew Ng</strong></span>
            <span style="color: #00ff41;">2024-11</span>
            <span>Built <strong>PyUploadMate</strong> — audio distribution automation</span>
            <span style="color: #ff00ff;">2024-09</span>
            <span>Started AI Engineering @ <strong>Bahçeşehir University</strong></span>
          </div>
        </div>
    design:
      spacing:
        padding: ["1rem", 0, "2rem", 0]
      css_class: "cyber-section cyber-section-timeline"

  - block: collection
    id: projects
    content:
      title: '<span class="section-title-cyber">Projects</span>'
      subtitle: '<span style="font-family: Courier New, monospace; font-size: 0.85rem; color: #888;">$ ls -la /home/pouya/projects/</span>'
      text: ""
      page_type: project
      count: 20
      filters:
        folders:
          - project
      sort_by: 'Weight'
      sort_ascending: true
    design:
      view: showcase
      columns: 1
      css_class: "cyber-section cyber-section-projects"

  - block: markdown
    id: project-slider
    content:
      title: ""
      text: |
        <script>
        (function(){
          function initProjectSlider(){
            var section=document.querySelector('.cyber-section-projects');
            if(!section||section.dataset.sliderReady==='true')return;
            var cards=Array.prototype.slice.call(section.querySelectorAll('.project-card, [role="article"], article'));
            if(cards.length<2)return;
            var track=cards[0].parentElement;
            while(track&&track!==section&&!cards.every(function(card){return track.contains(card);})){
              track=track.parentElement;
            }
            if(!track||track===section)return;
            section.dataset.sliderReady='true';
            track.classList.add('project-slider-track');
            cards.forEach(function(card){card.classList.add('project-slider-card');});
            var shell=document.createElement('div');
            shell.className='project-slider-shell';
            track.parentNode.insertBefore(shell,track);
            shell.appendChild(track);
            var controls=document.createElement('div');
            controls.className='project-slider-controls';
            controls.innerHTML='<button class="project-slider-btn" type="button" aria-label="Previous project">‹</button><div class="project-slider-status" aria-hidden="true">slides</div><button class="project-slider-btn" type="button" aria-label="Next project">›</button>';
            shell.appendChild(controls);
            var buttons=controls.querySelectorAll('button');
            var current=0;
            function show(index){
              current=(index+cards.length)%cards.length;
              cards[current].scrollIntoView({behavior:'smooth',block:'nearest',inline:'center'});
            }
            function step(direction){
              show(current+direction);
            }
            buttons[0].addEventListener('click',function(){step(-1);});
            buttons[1].addEventListener('click',function(){step(1);});
            var timer=window.setInterval(function(){
              if(section.matches(':hover'))return;
              step(1);
            },10200);
            // Removed: auto-scroll to first project card on load
            window.addEventListener('pagehide',function(){window.clearInterval(timer);},{once:true});
          }
          if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',initProjectSlider);
          else initProjectSlider();
          window.setTimeout(initProjectSlider,250);
          window.setTimeout(initProjectSlider,1000);
        })();
        </script>
    design:
      spacing:
        padding: ["0", 0, "0", 0]

  - block: markdown
    id: testimonials
    content:
      title: '<span class="section-title-cyber">Endorsements</span>'
      subtitle: '<span style="font-family: Courier New, monospace; font-size: 0.85rem; color: #888;">$ cat /var/log/feedback.log</span>'
      text: '<pre style="background:rgba(0,255,65,0.04);border:1px solid rgba(0,255,65,0.12);border-radius:8px;padding:1.5rem;font-family:Courier New,monospace;font-size:0.85rem;color:#e0e0e0;max-width:560px;margin:1.5rem auto;white-space:pre-wrap;"><span style="color:#00ff41;">[2025-12-15 14:32]</span> <span style="color:#888;">&lt;anil_b&gt;</span> Thank you Pouya, you are valuable fellow!\n<span style="color:#888;">                                    Thanks for your efforts in ML and AI.</span>\n\n<span style="color:#0ff;">──</span> Anil B., Founder @ Catalpinar IT Solutions\n<span style="color:#0ff;">──</span> <a href="https://catalpinar.solutions/" target="_blank" style="color:#0ff;text-decoration:underline;">https://catalpinar.solutions</a></pre>'
    design:
      spacing:
        padding: ["2rem", 0, "3rem", 0]
      css_class: "cyber-section cyber-section-endorsements"

  - block: markdown
    id: matrix-rain
    content:
      title: ""
      text: ""
    design:
      spacing:
        padding: ["0", 0, "0", 0]
---
