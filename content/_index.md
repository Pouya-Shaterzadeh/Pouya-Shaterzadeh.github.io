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
           <!-- VeriShelf - Hero Project -->
           <article class="project-card hero" data-category="agentic-ai">
             <div class="project-visual">
               <div class="project-glow"></div>
               <svg class="project-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                 <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
                 <path d="M12 9v4l2 2"/>
               </svg>
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

           <!-- Style Finder AI -->
           <article class="project-card" data-category="multimodal-ai">
             <div class="project-visual">
               <div class="project-glow"></div>
               <svg class="project-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                 <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                 <circle cx="8.5" cy="8.5" r="1.5"/>
                 <path d="M21 15l-5-5L5 17"/>
               </svg>
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

           <!-- DroneX Aerostack -->
           <article class="project-card" data-category="robotics">
             <div class="project-visual">
               <div class="project-glow"></div>
               <svg class="project-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                 <path d="M12 2l3 8h7l-6 4 2 7-6-5-6 5 2-7-6-4h7z"/>
               </svg>
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

           <!-- Sky Warriors -->
           <article class="project-card" data-category="robotics">
             <div class="project-visual">
               <div class="project-glow"></div>
               <svg class="project-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                 <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h7.586a1 1 0 0 1 .707.293l3.707 3.707a1 1 0 0 0 .707.293H21a2 2 0 0 1 2 2v5"/>
                 <path d="M15 9h.01"/>
               </svg>
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

           <!-- Infrastructure -->
           <article class="project-card" data-category="infrastructure">
             <div class="project-visual">
               <div class="project-glow"></div>
               <svg class="project-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                 <rect x="2" y="2" width="20" height="20" rx="2"/>
                 <path d="M6 9h12M6 15h8M10 3v4M14 3v4"/>
               </svg>
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

           <!-- AI Meeting Assistant -->
           <article class="project-card" data-category="agentic-ai">
             <div class="project-visual">
               <div class="project-glow"></div>
               <svg class="project-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                 <path d="M12 2a10 10 0 0 1 7.38 16.75M5 10a10 10 0 0 0 7.38 10.74M19 14a10 10 0 0 1-7.38 2.75M5 14a10 10 0 0 1 7.38-2.75"/>
                 <path d="M8 14h8M12 10v8"/>
               </svg>
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

           <!-- PyUploadMate -->
           <article class="project-card" data-category="automation">
             <div class="project-visual">
               <div class="project-glow"></div>
               <svg class="project-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                 <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M17 10l-5-5-5 5M12 15v-3"/>
               </svg>
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

           <!-- House Price Prediction -->
           <article class="project-card" data-category="ml-research">
             <div class="project-visual">
               <div class="project-glow"></div>
               <svg class="project-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                 <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                 <polyline points="9 22 9 12 15 12 15 22"/>
               </svg>
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

           <!-- Customer Segmentation -->
           <article class="project-card" data-category="ml-research">
             <div class="project-visual">
               <div class="project-glow"></div>
               <svg class="project-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                 <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                 <circle cx="9" cy="7" r="4"/>
                 <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>
               </svg>
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
           // Three.js Background Animations for each section
           const sections = [
             { id: 'hero-canvas', type: 'particles', color: 0x6366f1, count: 800 },
             { id: 'now-canvas', type: 'grid', color: 0x22d3ee, count: 200 },
             { id: 'skills-canvas', type: 'particles', color: 0xa855f7, count: 400 },
             { id: 'timeline-canvas', type: 'lines', color: 0xf59e0b, count: 150 },
             { id: 'projects-canvas', type: 'particles', color: 0xec4899, count: 500 }
           ];

           sections.forEach(function(section) {
             initSectionCanvas(section);
           });

           function initSectionCanvas(config) {
             const container = document.getElementById(config.id);
             if (!container) return;

             const width = container.offsetWidth || container.parentElement.offsetWidth;
             const height = container.offsetHeight || 300;

             const scene = new THREE.Scene();
             const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
             camera.position.z = 50;

             const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
             renderer.setSize(width, height);
             renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
             container.appendChild(renderer.domElement);

             let objects = [];

             if (config.type === 'particles') {
               const geometry = new THREE.BufferGeometry();
               const positions = new Float32Array(config.count * 3);
               const velocities = new Float32Array(config.count * 3);
               const sizes = new Float32Array(config.count);

               for (let i = 0; i < config.count; i++) {
                 positions[i * 3] = (Math.random() - 0.5) * 100;
                 positions[i * 3 + 1] = (Math.random() - 0.5) * 100;
                 positions[i * 3 + 2] = (Math.random() - 0.5) * 100;
                 velocities[i * 3] = (Math.random() - 0.5) * 0.02;
                 velocities[i * 3 + 1] = (Math.random() - 0.5) * 0.02;
                 velocities[i * 3 + 2] = (Math.random() - 0.5) * 0.02;
                 sizes[i] = Math.random() * 2 + 0.5;
               }

               geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
               geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));

               const material = new THREE.PointsMaterial({
                 color: config.color,
                 size: 2,
                 transparent: true,
                 opacity: 0.6,
                 sizeAttenuation: true
               });

               const points = new THREE.Points(geometry, material);
               scene.add(points);
               objects.push({ points, velocities, positions });
             } else if (config.type === 'grid') {
               const gridSize = 20;
               const gridDivisions = 20;
               const gridHelper = new THREE.GridHelper(gridSize, gridDivisions, config.color, config.color);
               gridHelper.material.opacity = 0.15;
               gridHelper.material.transparent = true;
               gridHelper.rotation.x = -Math.PI / 2;
               scene.add(gridHelper);
               objects.push({ grid: gridHelper });
             } else if (config.type === 'lines') {
               const lineCount = config.count;
               const lines = new THREE.Group();
               for (let i = 0; i < lineCount; i++) {
                 const geometry = new THREE.BufferGeometry();
                 const vertices = [];
                 const startX = (Math.random() - 0.5) * 80;
                 const startY = (Math.random() - 0.5) * 80;
                 const startZ = (Math.random() - 0.5) * 80;
                 for (let j = 0; j < 10; j++) {
                   vertices.push(
                     startX + (Math.random() - 0.5) * 10,
                     startY + (Math.random() - 0.5) * 10,
                     startZ + (Math.random() - 0.5) * 10
                   );
                 }
                 geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
                 const material = new THREE.LineBasicMaterial({ color: config.color, opacity: 0.3, transparent: true });
                 const line = new THREE.Line(geometry, material);
                 lines.add(line);
               }
               scene.add(lines);
               objects.push({ lines });
             }

             let mouseX = 0, mouseY = 0;
             document.addEventListener('mousemove', (e) => {
               mouseX = (e.clientX / window.innerWidth) * 2 - 1;
               mouseY = -(e.clientY / window.innerHeight) * 2 + 1;
             });

             function animate() {
               requestAnimationFrame(animate);

               objects.forEach(obj => {
                 if (obj.points) {
                   const positions = obj.points.geometry.attributes.position.array;
                   const velocities = obj.velocities;
                   for (let i = 0; i < positions.length; i += 3) {
                     positions[i] += velocities[i];
                     positions[i + 1] += velocities[i + 1];
                     positions[i + 2] += velocities[i + 2];

                     if (Math.abs(positions[i]) > 50) velocities[i] *= -1;
                     if (Math.abs(positions[i + 1]) > 50) velocities[i + 1] *= -1;
                     if (Math.abs(positions[i + 2]) > 50) velocities[i + 2] *= -1;

                     positions[i] += mouseX * 0.01;
                     positions[i + 1] += mouseY * 0.01;
                   }
                   obj.points.geometry.attributes.position.needsUpdate = true;
                   obj.points.rotation.y += 0.0002;
                   obj.points.rotation.x += 0.0001;
                 }
                 if (obj.grid) {
                   obj.grid.rotation.z += 0.0001;
                 }
                 if (obj.lines) {
                   obj.lines.rotation.y += 0.0001;
                   obj.lines.rotation.x += 0.00005;
                 }
               });

               renderer.render(scene, camera);
             }

             animate();

             window.addEventListener('resize', () => {
               const width = container.offsetWidth;
               const height = container.offsetHeight || 300;
               camera.aspect = width / height;
               camera.updateProjectionMatrix();
               renderer.setSize(width, height);
             });
           }
         })();

         // Project filtering
         (function(){
           const filterBtns = document.querySelectorAll('.project-filter');
           const cards = document.querySelectorAll('.project-card');

           filterBtns.forEach(btn => {
             btn.addEventListener('click', () => {
               const filter = btn.dataset.filter;
               filterBtns.forEach(b => b.classList.remove('active'));
               btn.classList.add('active');

               cards.forEach(card => {
                 if (filter === 'all' || card.dataset.category === filter) {
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
           const targets = document.querySelectorAll('.cyber-section, .hero-block-container');
           if (!targets.length) return;

           targets.forEach(el => {
             el.style.opacity = '0';
             el.style.transform = 'translateY(40px)';
             el.style.transition = 'opacity 0.8s cubic-bezier(0.16,1,0.3,1), transform 0.8s cubic-bezier(0.16,1,0.3,1)';
           });

           const observer = new IntersectionObserver(entries => {
             entries.forEach(entry => {
               if (entry.isIntersecting) {
                 const delay = entry.target.dataset.revealDelay || 0;
                 setTimeout(() => {
                   entry.target.style.opacity = '1';
                   entry.target.style.transform = 'translateY(0)';
                 }, parseInt(delay));
                 observer.unobserve(entry.target);
               }
             });
           }, { threshold: 0.1, rootMargin: '0px 0px -60px 0px' });

           const sections = document.querySelectorAll('.cyber-section');
           sections.forEach((s, i) => { s.dataset.revealDelay = i * 100; });
           const hero = document.querySelector('.hero-block-container');
           if (hero) hero.dataset.revealDelay = '0';
           targets.forEach(el => observer.observe(el));
         })();

         // Scroll to top
         (function(){
           const btn = document.createElement('button');
           btn.setAttribute('aria-label', 'Scroll to top');
           btn.innerHTML = '&#8593;';
           btn.style.cssText = 'position:fixed;bottom:2rem;right:2rem;width:2.5rem;height:2.5rem;border:1px solid rgba(255,255,255,0.12);border-radius:8px;background:rgba(255,255,255,0.04);backdrop-filter:blur(8px);color:rgba(255,255,255,0.5);font:600 1rem/1 sans-serif;cursor:pointer;display:grid;place-items:center;opacity:0;visibility:hidden;transform:translateY(10px);transition:all 0.3s ease;z-index:9999;';
           document.body.appendChild(btn);
           window.addEventListener('scroll', () => {
             if (window.scrollY > 400) { btn.style.opacity = '1'; btn.style.visibility = 'visible'; btn.style.transform = 'translateY(0)'; }
             else { btn.style.opacity = '0'; btn.style.visibility = 'hidden'; btn.style.transform = 'translateY(10px)'; }
           }, { passive: true });
           btn.addEventListener('click', () => { window.scrollTo({ top: 0, behavior: 'smooth' }); });
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
       title: '<span class="section-title-premium">Let\'s connect</span>'
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