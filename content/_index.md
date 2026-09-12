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

   - block: markdown
     id: featured-projects
     content:
       title: '<span class="section-title-premium">01 / 02</span>'
       subtitle: ''
       text: |
         <section class="featured-section" id="projects">
           <div class="fp-header">
             <span class="fp-eyebrow">SELECTED WORK</span>
             <h2>Systems I've built.<br>Problems I've solved.</h2>
             <p class="fp-subtitle">Selected projects spanning agentic AI, multimodal systems, robotics, and production infrastructure.</p>
             <div class="fp-filters">
               <button class="fp-filter active" data-filter="all">ALL</button>
               <button class="fp-filter" data-filter="ai">AI / ML</button>
               <button class="fp-filter" data-filter="agentic">AGENTIC AI</button>
               <button class="fp-filter" data-filter="cv">COMPUTER VISION</button>
               <button class="fp-filter" data-filter="robotics">ROBOTICS</button>
               <button class="fp-filter" data-filter="infra">INFRASTRUCTURE</button>
               <button class="fp-filter" data-filter="software">SOFTWARE</button>
             </div>
           </div>
           <div class="fp-grid" id="fpGrid">
             <div class="fp-project fp-hero" data-category="agentic" data-index="01">
               <a href="/project/verishelf/" class="fp-card fp-hero-card">
                 <div class="fp-visual">
                   <div class="fp-arch-diagram">
                     <div class="fp-node fp-input">Docs</div>
                     <div class="fp-arrow"></div>
                     <div class="fp-node fp-rag">RAG</div>
                     <div class="fp-arrow"></div>
                     <div class="fp-node fp-agent">Agents</div>
                     <div class="fp-arrow"></div>
                     <div class="fp-node fp-verify">Verify</div>
                     <div class="fp-arrow"></div>
                     <div class="fp-node fp-output">Answer</div>
                   </div>
                 </div>
                 <div class="fp-info">
                   <span class="fp-category">AGENTIC AI</span>
                   <h3>VeriShelf</h3>
                   <p class="fp-desc">AI research system for evidence-backed answers.</p>
                   <div class="fp-tech">
                     <span>LangGraph</span><span>Docling</span><span>Hybrid Retrieval</span><span>Multi-Agent</span>
                   </div>
                   <div class="fp-highlight">Multi-agent verification pipeline</div>
                   <span class="fp-cta">Explore project →</span>
                 </div>
               </a>
             </div>
             <div class="fp-row">
               <div class="fp-project fp-medium" data-category="ai" data-index="02">
                 <a href="/project/style-finder-ai/" class="fp-card">
                   <div class="fp-visual">
                     <div class="fp-flow-diag">
                       <div class="fp-node fp-img">Image</div>
                       <div class="fp-arrow"></div>
                       <div class="fp-node fp-vision">Llama 4</div>
                       <div class="fp-arrow"></div>
                       <div class="fp-node fp-embed">Embedding</div>
                       <div class="fp-arrow"></div>
                       <div class="fp-node fp-result">Results</div>
                     </div>
                   </div>
                   <div class="fp-info">
                     <span class="fp-category">MULTIMODAL AI</span>
                     <h3>Style Finder AI v2.0</h3>
                     <p class="fp-desc">Multimodal fashion search pipeline.</p>
                     <div class="fp-tech">
                       <span>Llama 4</span><span>Fashion-CLIP</span><span>~5s inference</span>
                     </div>
                     <div class="fp-highlight">Vision-language inference</div>
                     <span class="fp-cta">Explore project →</span>
                   </div>
                 </a>
               </div>
               <div class="fp-project fp-medium" data-category="robotics" data-index="03">
                 <a href="/project/robot-fleet/" class="fp-card">
                   <div class="fp-visual">
                     <div class="fp-flow-diag">
                       <div class="fp-node fp-drone">Drone</div>
                       <div class="fp-arrow"></div>
                       <div class="fp-node fp-telemetry">Telemetry</div>
                       <div class="fp-arrow"></div>
                       <div class="fp-node fp-cam">Camera</div>
                       <div class="fp-arrow"></div>
                       <div class="fp-node fp-fleet">Fleet</div>
                     </div>
                   </div>
                   <div class="fp-info">
                     <span class="fp-category">ROBOTICS</span>
                     <h3>DroneX Aerostack</h3>
                     <p class="fp-desc">Autonomous drone fleet management dashboard.</p>
                     <div class="fp-tech">
                       <span>ROS</span><span>PX4</span><span>Telemetry</span><span>CV</span>
                     </div>
                     <div class="fp-highlight">Real-time fleet tracking</div>
                     <span class="fp-cta">Explore project →</span>
                   </div>
                 </a>
               </div>
             </div>
             <div class="fp-project fp-wide" data-category="robotics" data-index="04">
               <a href="/project/sky-warriors/" class="fp-card">
                 <div class="fp-visual">
                   <div class="fp-flow-diag">
                     <div class="fp-node fp-sim">Gazebo</div>
                     <div class="fp-arrow"></div>
                     <div class="fp-node fp-px4">PX4</div>
                     <div class="fp-arrow"></div>
                     <div class="fp-node fp-perception">Perception</div>
                     <div class="fp-arrow"></div>
                     <div class="fp-node fp-auto">Autonomy</div>
                   </div>
                 </div>
                 <div class="fp-info">
                   <span class="fp-category">AUTONOMOUS SYSTEMS</span>
                   <h3>Sky Warriors ROS</h3>
                   <p class="fp-desc">UAV workspace for robotic arm control and Gazebo simulation.</p>
                   <div class="fp-tech">
                     <span>ROS 2</span><span>Gazebo</span><span>PX4</span><span>Perception</span>
                   </div>
                   <div class="fp-highlight">ROS 2 + PX4 autonomy</div>
                   <span class="fp-cta">Explore project →</span>
                 </div>
               </a>
             </div>
             <div class="fp-project fp-wide" data-category="infra" data-index="05">
               <a href="/project/it-infrastructure/" class="fp-card">
                 <div class="fp-visual">
                   <div class="fp-infra-diag">
                     <div class="fp-server">Rocket.Chat</div>
                     <div class="fp-arrow"></div>
                     <div class="fp-server">Asterisk</div>
                     <div class="fp-arrow"></div>
                     <div class="fp-server">Traefik</div>
                     <div class="fp-arrow"></div>
                     <div class="fp-server">Prometheus</div>
                   </div>
                 </div>
                 <div class="fp-info">
                   <span class="fp-category">INFRASTRUCTURE</span>
                   <h3>Self-Hosted Communication</h3>
                   <p class="fp-desc">Distributed communication stack across multiple regions.</p>
                   <div class="fp-tech">
                     <span>Docker</span><span>Rocket.Chat</span><span>Asterisk</span><span>Traefik</span><span>Prometheus</span>
                   </div>
                   <div class="fp-highlight">Self-hosted distributed infrastructure</div>
                   <span class="fp-cta">Explore project →</span>
                 </div>
               </a>
             </div>
             <div class="fp-row fp-compact">
               <div class="fp-project fp-small" data-category="agentic" data-index="06">
                 <a href="/project/ai-meeting-assistant/" class="fp-card">
                   <div class="fp-info">
                     <span class="fp-category">AGENTIC AI</span>
                     <h4>AI Meeting Assistant</h4>
                     <p class="fp-desc-short">Whisper + Watsonx + LangChain</p>
                     <span class="fp-cta">→</span>
                   </div>
                 </a>
               </div>
               <div class="fp-project fp-small" data-category="software" data-index="07">
                 <a href="/project/pyuploadmate/" class="fp-card">
                   <div class="fp-info">
                     <span class="fp-category">AUTOMATION</span>
                     <h4>PyUploadMate</h4>
                     <p class="fp-desc-short">Selenium + FFmpeg automation</p>
                     <span class="fp-cta">→</span>
                   </div>
                 </a>
               </div>
               <div class="fp-project fp-small" data-category="ai" data-index="08">
                 <a href="/project/house-price-prediction/" class="fp-card">
                   <div class="fp-info">
                     <span class="fp-category">ML RESEARCH</span>
                     <h4>House Price Prediction</h4>
                     <p class="fp-desc-short">R² = 0.87 · 6-model ensemble</p>
                     <span class="fp-cta">→</span>
                   </div>
                 </a>
               </div>
             </div>
             <div class="fp-project fp-small" data-category="ai" data-index="09">
               <a href="/project/customer-segmentation/" class="fp-card">
                 <div class="fp-info">
                   <span class="fp-category">ML RESEARCH</span>
                   <h4>Customer Segmentation</h4>
                   <p class="fp-desc-short">PCA · UMAP · GMM profiling</p>
                   <span class="fp-cta">→</span>
                 </div>
               </a>
             </div>
             <div class="fp-project fp-small" data-category="agentic" data-index="10">
               <a href="/project/langgraph-agents/" class="fp-card">
                 <div class="fp-info">
                   <span class="fp-category">AGENTIC AI</span>
                   <h4>LangGraph Agents</h4>
                   <p class="fp-desc-short">Multi-agent orchestration</p>
                   <span class="fp-cta">→</span>
                 </div>
               </a>
             </div>
           </div>
           <div class="fp-footer">
             <a href="/docs/" class="fp-view-all">View all projects →</a>
           </div>
         </section>
     design:
       spacing:
         padding: ["4rem", 0, "5rem", 0]
       css_class: "cyber-section"

   - block: markdown
     id: fp-slider
     content:
       title: ""
       text: |
         <script>
         (function(){
           var filters=document.querySelectorAll('.fp-filter');
           var projects=document.querySelectorAll('#fpGrid .fp-project');
           filters.forEach(function(btn){
             btn.addEventListener('click',function(){
               var f=btn.dataset.filter;
               filters.forEach(function(b){b.classList.remove('active')});
               btn.classList.add('active');
               projects.forEach(function(p){
                 if(f==='all'||p.dataset.category===f){
                   p.style.display='';
                   p.style.opacity='1';
                   p.style.transform='';
                 } else {
                   p.style.display='none';
                 }
               });
             });
           });
           var btn=document.createElement('button');
           btn.setAttribute('aria-label','Scroll to top');
           btn.innerHTML='&#8593;';
           btn.style.cssText='position:fixed;bottom:2rem;right:2rem;width:2.5rem;height:2.5rem;border:1px solid rgba(255,255,255,0.12);border-radius:8px;background:rgba(255,255,255,0.04);backdrop-filter:blur(8px);color:rgba(255,255,255,0.5);font:600 1rem/1 sans-serif;cursor:pointer;display:grid;place-items:center;opacity:0;visibility:hidden;transform:translateY(10px);transition:all 0.3s ease;z-index:9999;';
           document.body.appendChild(btn);
           window.addEventListener('scroll',function(){
             if(window.scrollY>400){btn.style.opacity='1';btn.style.visibility='visible';btn.style.transform='translateY(0)';}
             else{btn.style.opacity='0';btn.style.visibility='hidden';btn.style.transform='translateY(10px)';}
           },{passive:true});
           btn.addEventListener('mouseenter',function(){btn.style.borderColor='rgba(255,255,255,0.35)';btn.style.color='rgba(255,255,255,0.8)';btn.style.background='rgba(255,255,255,0.08)';});
           btn.addEventListener('mouseleave',function(){btn.style.borderColor='rgba(255,255,255,0.12)';btn.style.color='rgba(255,255,255,0.5)';btn.style.background='rgba(255,255,255,0.04)';});
           btn.addEventListener('click',function(){window.scrollTo({top:0,behavior:'smooth'});});
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
       title: '<span class="section-title-premium">Lets connect</span>'
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
