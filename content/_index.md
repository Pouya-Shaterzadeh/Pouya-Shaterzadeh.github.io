---
title: "Portfolio"
date: 2026-03-10
type: landing
design:
  spacing: "4rem"
---

   - block: hero
     content:
       title: "Pouya Shaterzadeh"
       text: |
         <div class="hero-premium">
           <p class="hero-tag">AI Engineer &middot; ML Engineer &middot; Robotics</p>
           <h1 class="hero-headline">Building intelligent systems, agents &amp; robotics.</h1>
           <p class="hero-sub">AI Engineering student at Bahçeşehir University focused on machine learning, agentic AI, computer vision, robotics, and production-grade software systems.</p>
           <div class="hero-ctas">
             <a href="/#projects" class="btn-premium primary">View Projects</a>
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
         <div class="skills-grid">
           <div class="skill-category">
             <h3>AI &amp; Machine Learning</h3>
             <div class="skill-tags">
               <span>PyTorch</span><span>TensorFlow</span><span>scikit-learn</span><span>Computer Vision</span><span>NLP</span><span>Embeddings</span><span>Multimodal AI</span>
             </div>
           </div>
           <div class="skill-category">
             <h3>Agentic AI &amp; RAG</h3>
             <div class="skill-tags">
               <span>LangGraph</span><span>LangChain</span><span>CrewAI</span><span>RAG</span><span>Hybrid Retrieval</span><span>FAISS</span><span>ChromaDB</span><span>Docling</span>
             </div>
           </div>
           <div class="skill-category">
             <h3>Robotics &amp; Autonomous Systems</h3>
             <div class="skill-tags">
               <span>ROS 2</span><span>PX4</span><span>Gazebo</span><span>Computer Vision</span><span>UAV Systems</span><span>Telemetry</span>
             </div>
           </div>
           <div class="skill-category">
             <h3>Software &amp; Infrastructure</h3>
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
           <div class="timeline-event">Co-founded AP Common Projects with CipherDriftX — built Nanograd &amp; YouTube Research Pipeline</div>
           <div class="timeline-event">Obtained RAG and Agentic AI Professional Certificate — IBM</div>
           <div class="timeline-event">Launched Style Finder AI v2.0 — multimodal fashion search with Llama 4</div>
           <div class="timeline-event">Launched VeriShelf — multi-agent RAG with fact verification</div>
           <div class="timeline-event">Deployed Self-Hosted Infrastructure — multi-region Rocket.Chat + Asterisk</div>
         </div>
     design:
       spacing:
         padding: ["1rem", 0, "2rem", 0]
       css_class: "cyber-section"

   - block: collection
     id: projects
     content:
       title: '<span class="section-title-premium">Featured Projects</span>'
       subtitle: ''
       text: ""
       page_type: project
       count: 10
       filters:
         folders:
           - project
       sort_by: 'Weight'
       sort_ascending: true
     design:
       view: showcase
       columns: 1
       css_class: "cyber-section"
       show_date: false
       show_read_time: false
       show_read_more: true

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
             track.style.display='none';
             var wrapper=document.createElement('div');
             wrapper.className='carousel-wrapper';
             track.parentNode.insertBefore(wrapper,track);
             var controls=document.createElement('div');
             controls.className='carousel-nav-arrows';
             controls.innerHTML='<button class="carousel-arrow" type="button" aria-label="Previous project">&#8249;</button><span class="carousel-counter">1 / '+cards.length+'</span><button class="carousel-arrow" type="button" aria-label="Next project">&#8250;</button>';
             wrapper.appendChild(controls);
             var shell=document.createElement('div');
             shell.className='carousel-3d';
             wrapper.appendChild(shell);
             cards.forEach(function(card){
               card.classList.add('carousel-3d-card');
               shell.appendChild(card);
             });
             var arrowBtns=controls.querySelectorAll('.carousel-arrow');
             var counter=controls.querySelector('.carousel-counter');
             var current=0;
             var total=cards.length;
             var autoTimer=null;
             function updateUI(){
               counter.textContent=(current+1)+' / '+total;
               cards.forEach(function(card,i){
                 card.classList.remove('active','prev','next','far-prev','far-next');
                 var diff=i-current;
                 if(diff>total/2)diff-=total;
                 if(diff<-total/2)diff+=total;
                 if(diff===0)card.classList.add('active');
                 else if(diff===-1)card.classList.add('prev');
                 else if(diff===1)card.classList.add('next');
                 else if(diff<-1)card.classList.add('far-prev');
                 else card.classList.add('far-next');
               });
             }
             function goTo(index){
               current=((index%total)+total)%total;
               updateUI();
             }
             function step(dir){goTo(current+dir);}
             function startAuto(){stopAuto();autoTimer=setInterval(function(){step(1);},4000);}
             function stopAuto(){if(autoTimer){clearInterval(autoTimer);autoTimer=null;}}
             arrowBtns[0].addEventListener('click',function(){stopAuto();step(-1);startAuto();});
             arrowBtns[1].addEventListener('click',function(){stopAuto();step(1);startAuto();});
             cards.forEach(function(card,i){
               card.style.cursor='pointer';
               card.addEventListener('click',function(e){
                 if(card.classList.contains('prev')||card.classList.contains('next')){
                   e.preventDefault();e.stopPropagation();
                   stopAuto();goTo(i);startAuto();
                 }
               });
             });
             wrapper.addEventListener('mouseenter',stopAuto);
             wrapper.addEventListener('mouseleave',startAuto);
             document.addEventListener('keydown',function(e){
               if(e.key==='ArrowLeft'){stopAuto();step(-1);startAuto();}
               else if(e.key==='ArrowRight'){stopAuto();step(1);startAuto();}
             });
             var touchStartX=0;
             shell.addEventListener('touchstart',function(e){touchStartX=e.touches[0].clientX;stopAuto();},{passive:true});
             shell.addEventListener('touchend',function(e){
               var diff=e.changedTouches[0].clientX-touchStartX;
               if(Math.abs(diff)>50){step(diff>0?-1:1);}
               startAuto();
             },{passive:true});
             updateUI();startAuto();
           }
           if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',initProjectSlider);
           else initProjectSlider();
           window.setTimeout(initProjectSlider,250);
           window.setTimeout(initProjectSlider,1000);
         })();
         </script>
         <script>
         (function(){
           function initScrollReveal(){
             var targets=document.querySelectorAll('.cyber-section, .hero-block-container, .now-section');
             if(!targets.length)return;
             targets.forEach(function(el){
               el.style.opacity='0';el.style.transform='translateY(40px)';
               el.style.transition='opacity 0.8s cubic-bezier(0.16,1,0.3,1), transform 0.8s cubic-bezier(0.16,1,0.3,1)';
             });
             var observer=new IntersectionObserver(function(entries){
               entries.forEach(function(entry){
                 if(entry.isIntersecting){
                   var delay=entry.target.dataset.revealDelay||0;
                   setTimeout(function(){
                     entry.target.style.opacity='1';entry.target.style.transform='translateY(0)';
                   },parseInt(delay));
                   observer.unobserve(entry.target);
                 }
               });
             },{threshold:0.1,rootMargin:'0px 0px -60px 0px'});
             var sections=document.querySelectorAll('.cyber-section');
             sections.forEach(function(s,i){s.dataset.revealDelay=i*100;});
             var hero=document.querySelector('.hero-block-container');
             if(hero)hero.dataset.revealDelay='0';
             targets.forEach(function(el){observer.observe(el);});
           }
           if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',initScrollReveal);
           else initScrollReveal();
         })();
         </script>
         <script>
         (function(){
           var btn=document.createElement('button');
           btn.setAttribute('aria-label','Scroll to top');
           btn.innerHTML='&#8593;';
           btn.style.cssText='position:fixed;bottom:2rem;right:2rem;width:2.5rem;height:2.5rem;border:1px solid rgba(255,255,255,0.15);border-radius:8px;background:rgba(255,255,255,0.05);backdrop-filter:blur(8px);color:rgba(255,255,255,0.6);font:600 1rem/1 sans-serif;cursor:pointer;display:grid;place-items:center;opacity:0;visibility:hidden;transform:translateY(10px);transition:all 0.3s ease;z-index:9999;';
           document.body.appendChild(btn);
           window.addEventListener('scroll',function(){
             if(window.scrollY>400){btn.style.opacity='1';btn.style.visibility='visible';btn.style.transform='translateY(0)';}
             else{btn.style.opacity='0';btn.style.visibility='hidden';btn.style.transform='translateY(10px)';}
           },{passive:true});
           btn.addEventListener('mouseenter',function(){btn.style.borderColor='rgba(255,255,255,0.4)';btn.style.color='rgba(255,255,255,0.9)';btn.style.background='rgba(255,255,255,0.1)';});
           btn.addEventListener('mouseleave',function(){btn.style.borderColor='rgba(255,255,255,0.15)';btn.style.color='rgba(255,255,255,0.6)';btn.style.background='rgba(255,255,255,0.05)';});
           btn.addEventListener('click',function(){window.scrollTo({top:0,behavior:'smooth'});});
         })();
         </script>
     design:
       spacing:
         padding: ["0", 0, "0", 0]

   - block: markdown
     id: more-projects
     content:
       title: '<span class="section-title-premium">More Projects</span>'
       subtitle: ''
       text: |
         <div class="more-projects-grid">
           <a href="/project/it-infrastructure/" class="more-project-card">
             <span class="mp-category">Infrastructure</span>
             <span class="mp-title">Self-Hosted Communication</span>
           </a>
           <a href="/project/ai-meeting-assistant/" class="more-project-card">
             <span class="mp-category">Agentic AI</span>
             <span class="mp-title">AI Meeting Assistant</span>
           </a>
           <a href="/project/style-finder-ai/" class="more-project-card">
             <span class="mp-category">Multimodal AI</span>
             <span class="mp-title">Style Finder AI v2.0</span>
           </a>
           <a href="/project/pyuploadmate/" class="more-project-card">
             <span class="mp-category">Automation</span>
             <span class="mp-title">PyUploadMate</span>
           </a>
           <a href="/project/house-price-prediction/" class="more-project-card">
             <span class="mp-category">ML Research</span>
             <span class="mp-title">House Price Prediction</span>
           </a>
           <a href="/project/customer-segmentation/" class="more-project-card">
             <span class="mp-category">ML Research</span>
             <span class="mp-title">Customer Segmentation</span>
           </a>
           <a href="/project/sky-warriors/" class="more-project-card">
             <span class="mp-category">Robotics</span>
             <span class="mp-title">Sky Warriors ROS</span>
           </a>
         </div>
     design:
       spacing:
         padding: ["2rem", 0, "3rem", 0]
       css_class: "cyber-section"

   - block: markdown
     id: testimonials
     content:
       title: '<span class="section-title-premium">Endorsements</span>'
       subtitle: ''
       text: |
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
       title: '<span class="section-title-premium">Let's connect</span>'
       subtitle: ''
       text: |
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
