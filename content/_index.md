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
          <canvas data-fx="lidar" data-count="900" data-trajectory="1" data-color="34,211,238" data-dim="110,130,145" data-spread="230" data-depth="210"></canvas>
          <p class="hero-name">POUYA SHATERZADEH</p>
          <p class="hero-tag">AI Engineering &times; Robotics &times; Systems</p>
          <h1 class="hero-headline">Building intelligent systems across AI, robotics, computer vision, and Linux infrastructure.</h1>
          <p class="hero-sub">AI Engineering student at Bahçeşehir University, working across perception, autonomy, and the infrastructure that runs them.</p>
          <div class="term-block" data-term data-lines='["$ ./pouya --initialize","","&gt; loading perception systems...","ROS2 ............... ONLINE","CUDA ................ ONLINE","LINUX ............... ONLINE","AI ................... ACTIVE"]' data-final="SYSTEM ONLINE // BUILDING INTELLIGENT MACHINES">
          <div class="term-titlebar"><span></span><span></span><span></span></div>
          </div>
          <div class="hero-ctas">
          <a href="#projects" class="btn-premium primary">View Projects</a>
          <a href="https://github.com/Pouya-Shaterzadeh" target="_blank" rel="noopener" class="btn-premium">GitHub</a>
          <a href="https://www.linkedin.com/in/pouya-shaterzadeh-b88426284/" target="_blank" rel="noopener" class="btn-premium">LinkedIn</a>
          </div>
          <div class="hero-meta">
          <span class="hero-meta-item">Bahçeşehir University</span>
          <span class="hero-meta-item">Istanbul, Türkiye</span>
          </div>
          </div>

     design:
       spacing:
         padding: ["4rem", 0, "2.5rem", 0]
       css_class: ""
       background:
         color: "#05070a"

   - block: markdown
     id: about
     content:
       title: '<span class="eyebrow"><span class="idx">01</span> / ABOUT</span>'
       subtitle: ''
       text: |
          <div class="about-wrap" data-observe>
          <div class="about-roles">
          <span>AI Engineering Student</span>
          <span>Robotics <em>Builder</em></span>
          <span>Linux / Systems Engineer</span>
          </div>
          <p class="about-bio">I work at the intersection of AI, computer vision, robotics, and the Linux infrastructure that keeps all of it running. My projects span agentic AI and RAG systems, ROS 2 / PX4 robotics with Gazebo simulation, and self-hosted infrastructure (Docker, Traefik, Prometheus) that I design, deploy, and operate myself.</p>
          <div class="about-meta">
          <div class="about-meta-item"><span class="k">Location</span><span class="v">Istanbul, Türkiye</span></div>
          <div class="about-meta-item"><span class="k">Focus</span><span class="v">AI / Robotics / Systems</span></div>
          <div class="about-meta-item"><span class="k">Stack</span><span class="v">Python · C++ · ROS 2 · PyTorch · OpenCV · Docker</span></div>
          </div>
          </div>

     design:
       spacing:
         padding: ["3rem", 0, "3rem", 0]
       css_class: "cyber-section"

   - block: markdown
     id: projects
     content:
       title: '<span class="eyebrow"><span class="idx">02</span> / PROJECTS</span>'
       subtitle: ''
       text: |
           <canvas data-fx="lidar" data-count="220" data-color="34,211,238" data-dim="70,80,90"></canvas>
           <div class="project-filters">
           <button class="project-filter active" data-filter="all">ALL</button>
           <button class="project-filter" data-filter="robotics">ROBOTICS</button>
           <button class="project-filter" data-filter="agents-rag">AGENTS / RAG</button>
           <button class="project-filter" data-filter="computer-vision">COMPUTER VISION</button>
           <button class="project-filter" data-filter="infrastructure">INFRASTRUCTURE</button>
           <button class="project-filter" data-filter="ml-research">ML RESEARCH</button>
           <button class="project-filter" data-filter="automation">AUTOMATION</button>
           </div>

           <div class="domain-heading" data-category="robotics"><span class="idx">01</span><h3>Robotics / Autonomy</h3><span class="rule"></span></div>
           <div class="projects-grid">
           <article class="project-card hud-frame" data-category="robotics" data-observe>
           <div class="project-visual">
           <img src="/project/sky-warriors/featured.jpeg" alt="Sky Warriors ROS workspace" loading="lazy" />
           <span class="project-scan"><span class="blip"></span>PERCEPTION_ACTIVE</span>
           <span class="project-index">01</span>
           </div>
           <div class="project-content">
           <span class="project-category">Robotics / Autonomy</span>
           <h3>Sky Warriors: ROS Workspace</h3>
           <p class="project-desc">ROS 2 workspace for robotic arm control, perception pipelines, and Gazebo simulation.</p>
           <div class="project-tech"><span>ROS 2</span><span>Gazebo</span><span>PX4</span><span>Computer Vision</span></div>
           <div class="project-highlight">Perception pipelines + Gazebo simulation</div>
           <a href="https://github.com/Pouya-Shaterzadeh/sky_warriors_ws" target="_blank" rel="noopener" class="project-link">View Repository <span aria-hidden="true">→</span></a>
           </div>
           </article>
           <article class="project-card hud-frame" data-category="robotics" data-observe>
           <div class="project-visual">
           <img src="/project/robot-fleet/featured.jpeg" alt="DroneX Aerostack fleet dashboard" loading="lazy" />
           <span class="project-scan"><span class="blip"></span>TELEMETRY_LIVE</span>
           <span class="project-index">02</span>
           </div>
           <div class="project-content">
           <span class="project-category">Robotics / Autonomy</span>
           <h3>Aerostack · DroneX Delivery Solutions</h3>
           <p class="project-desc">Drone fleet management dashboard with live camera feeds, telemetry, and warehouse ops monitoring.</p>
           <div class="project-tech"><span>ROS</span><span>Drones</span><span>IoT</span></div>
           <div class="project-highlight">Real-time fleet + camera telemetry</div>
           <a href="https://dronex-delivery-solutions.github.io/Dronex.github.io/companies/aerostack-wms/" target="_blank" rel="noopener" class="project-link">View Project <span aria-hidden="true">→</span></a>
           </div>
           </article>
           </div>

           <div class="domain-heading" data-category="agents-rag"><span class="idx">02</span><h3>Agents / RAG</h3><span class="rule"></span></div>
           <div class="projects-grid">
           <article class="project-card hud-frame" data-category="agents-rag" data-observe>
           <div class="project-visual">
           <img src="/project/verishelf/featured.jpeg" alt="VeriShelf multi-agent RAG system" loading="lazy" />
           <span class="project-scan"><span class="blip"></span>RETRIEVAL_ACTIVE</span>
           <span class="project-index">03</span>
           </div>
           <div class="project-content">
           <span class="project-category">Agents / RAG</span>
           <h3>VeriShelf</h3>
           <p class="project-desc">Multi-agent RAG Q&amp;A with fact verification: a Research Agent drafts answers, a Verification Agent fact-checks against sources and self-corrects.</p>
           <div class="project-tech"><span>LangGraph</span><span>Docling</span><span>Hybrid Retrieval</span><span>Multi-Agent</span></div>
           <div class="project-highlight">Self-correcting verification pipeline</div>
           <a href="https://verishelf.streamlit.app" target="_blank" rel="noopener" class="project-link">Live Demo <span aria-hidden="true">→</span></a>
           </div>
           </article>
           <article class="project-card hud-frame" data-category="agents-rag" data-observe>
           <div class="project-visual">
           <img src="/project/ai-meeting-assistant/featured.jpeg" alt="AI Meeting Assistant" loading="lazy" />
           <span class="project-scan"><span class="blip"></span>TRANSCRIBING</span>
           <span class="project-index">04</span>
           </div>
           <div class="project-content">
           <span class="project-category">Agents / RAG</span>
           <h3>AI Meeting Assistant</h3>
           <p class="project-desc">Automatic meeting transcription, summaries, and action items using Whisper, Watsonx.ai, and LangChain.</p>
           <div class="project-tech"><span>Whisper</span><span>Watsonx</span><span>LangChain</span></div>
           <div class="project-highlight">End-to-end meeting intelligence</div>
           <a href="https://pouyadeva1-ai-meeting-assistant.hf.space/" target="_blank" rel="noopener" class="project-link">Live Demo <span aria-hidden="true">→</span></a>
           </div>
           </article>
           </div>

           <div class="domain-heading" data-category="computer-vision"><span class="idx">03</span><h3>Computer Vision / Multimodal AI</h3><span class="rule"></span></div>
           <div class="projects-grid">
           <article class="project-card span-solo hud-frame" data-category="computer-vision" data-observe>
           <div class="project-visual">
           <img src="/project/style-finder-ai/featured.jpeg" alt="Style Finder AI v2.0" loading="lazy" />
           <span class="project-scan"><span class="blip"></span>VISION_ONLINE</span>
           <span class="project-index">05</span>
           </div>
           <div class="project-content">
           <span class="project-category">Computer Vision / Multimodal AI</span>
           <h3>Style Finder AI v2.0</h3>
           <p class="project-desc">Llama 4 Maverick analyzes outfit photos, Fashion-CLIP re-ranks for visual similarity, matching products from a real product catalog in about 5 seconds end-to-end.</p>
           <div class="project-tech"><span>Llama 4</span><span>Fashion-CLIP</span><span>~5s inference</span></div>
           <div class="project-highlight">Vision-language matching pipeline</div>
           <a href="https://pouyadeva1-style-finder-ai-v2.hf.space/" target="_blank" rel="noopener" class="project-link">Live Demo <span aria-hidden="true">→</span></a>
           </div>
           </article>
           </div>

           <div class="domain-heading" data-category="infrastructure"><span class="idx">04</span><h3>Linux / Infrastructure</h3><span class="rule"></span></div>
           <div class="projects-grid">
           <article class="project-card span-solo hud-frame" data-category="infrastructure" data-observe>
           <div class="project-visual">
           <img src="/project/it-infrastructure/featured.jpeg" alt="Self-hosted communication infrastructure" loading="lazy" />
           <span class="project-scan"><span class="blip"></span>SERVICES_ONLINE</span>
           <span class="project-index">06</span>
           </div>
           <div class="project-content">
           <span class="project-category">Linux / Infrastructure</span>
           <h3>Self-Hosted Communication Infrastructure</h3>
           <p class="project-desc">A self-owned communication stack: Rocket.Chat with federation, Asterisk PBX VoIP, and Traefik with auto-SSL, all containerized and monitored with Prometheus.</p>
           <div class="project-tech"><span>Docker</span><span>Rocket.Chat</span><span>Asterisk</span><span>Traefik</span><span>Prometheus</span></div>
           <div class="project-highlight">Self-hosted, self-operated infrastructure</div>
           <a href="https://www.linkedin.com/posts/pouya-shaterzadeh-b88426284_a-few-months-ago-i-designed-and-deployed-activity-7432541984302497799-asGr" target="_blank" rel="noopener" class="project-link">View Project <span aria-hidden="true">→</span></a>
           </div>
           </article>
           </div>

           <div class="domain-heading" data-category="ml-research"><span class="idx">05</span><h3>Machine Learning Research</h3><span class="rule"></span></div>
           <div class="projects-grid">
           <article class="project-card hud-frame" data-category="ml-research" data-observe>
           <div class="project-visual">
           <img src="/project/house-price-prediction/featured.jpeg" alt="House Price Prediction ensemble model" loading="lazy" />
           <span class="project-scan"><span class="blip"></span>MODEL_TRAINED</span>
           <span class="project-index">07</span>
           </div>
           <div class="project-content">
           <span class="project-category">Machine Learning</span>
           <h3>House Price Prediction</h3>
           <p class="project-desc">Stacked ensemble of six regression models (Lasso, Ridge, SVR, Kernel Ridge, Elastic Net, Bayesian Regression) achieving R² = 0.87 on the Ames Housing dataset.</p>
           <div class="project-tech"><span>Ensemble</span><span>Scikit-learn</span><span>R² = 0.87</span></div>
           <div class="project-highlight">Six-model stacked ensemble</div>
           <a href="https://www.kaggle.com/code/pouyashaterzadeh/87-accuracy-ensemble-model-house-price-prediction#Importing-necessary-libraries" target="_blank" rel="noopener" class="project-link">View Notebook <span aria-hidden="true">→</span></a>
           </div>
           </article>
           <article class="project-card hud-frame" data-category="ml-research" data-observe>
           <div class="project-visual">
           <img src="/project/customer-segmentation/featured.jpeg" alt="Customer segmentation clustering" loading="lazy" />
           <span class="project-scan"><span class="blip"></span>CLUSTERING</span>
           <span class="project-index">08</span>
           </div>
           <div class="project-content">
           <span class="project-category">Machine Learning</span>
           <h3>Customer Segmentation</h3>
           <p class="project-desc">Customer personality analysis using PCA, UMAP, and Gaussian Mixture Models for targeted audience profiling.</p>
           <div class="project-tech"><span>PCA</span><span>UMAP</span><span>GMM</span></div>
           <div class="project-highlight">Unsupervised persona extraction</div>
           <a href="https://github.com/Pouya-Shaterzadeh/Customer-Segmentation-2D-3D-PCA-UMAP-GMM-Algorithms" target="_blank" rel="noopener" class="project-link">View Repository <span aria-hidden="true">→</span></a>
           </div>
           </article>
           </div>

           <div class="domain-heading" data-category="automation"><span class="idx">06</span><h3>Automation</h3><span class="rule"></span></div>
           <div class="projects-grid">
           <article class="project-card span-solo hud-frame" data-category="automation" data-observe>
           <div class="project-visual">
           <img src="/project/pyuploadmate/featured.jpeg" alt="PyUploadMate Telegram automation bot" loading="lazy" />
           <span class="project-scan"><span class="blip"></span>PIPELINE_ACTIVE</span>
           <span class="project-index">09</span>
           </div>
           <div class="project-content">
           <span class="project-category">Automation</span>
           <h3>PyUploadMate</h3>
           <p class="project-desc">Telegram bot that automates audio uploads to Believe.com using Selenium for browser automation and FFmpeg for audio processing.</p>
           <div class="project-tech"><span>Selenium</span><span>FFmpeg</span><span>Telegram Bot API</span></div>
           <div class="project-highlight">Automated audio distribution pipeline</div>
           <a href="https://github.com/Pouya-Shaterzadeh/PyUploadMate" target="_blank" rel="noopener" class="project-link">View Repository <span aria-hidden="true">→</span></a>
           </div>
           </article>
           </div>

     design:
       spacing:
         padding: ["4rem", 0, "3rem", 0]
       css_class: "cyber-section"

   - block: markdown
     id: systems
     content:
       title: '<span class="eyebrow"><span class="idx">03</span> / SYSTEMS</span>'
       subtitle: ''
       text: |
          <div class="systems-intro" data-observe>
          <p class="section-lede">Three layers of the same idea: sense the environment, reason over it, and run the infrastructure that keeps the whole system alive.</p>
          </div>

          <div class="tech-panel" data-observe>
          <div class="tech-panel-copy">
          <p class="panel-kicker" style="color:var(--cyan)">Robotics / Autonomy</p>
          <h3>Perception, simulation, navigation.</h3>
          <p>ROS 2 workspaces for robotic arm control and perception pipelines, PX4 flight stacks, and Gazebo simulation environments, building toward autonomous navigation that senses, plans, and avoids obstacles in real time.</p>
          <div class="tag-row"><span>ROS2</span><span>PX4</span><span>Gazebo</span><span>Navigation</span><span>Perception</span><span>Simulation</span></div>
          </div>
          <div class="tech-panel-visual hud-frame" data-observe>
          <svg viewBox="0 0 400 220" role="img" aria-label="Simulated autonomous navigation path avoiding an obstacle">
          <defs><pattern id="navgrid" width="22" height="22" patternUnits="userSpaceOnUse"><circle class="navpath-grid" cx="1" cy="1" r="1"></circle></pattern></defs>
          <rect width="400" height="220" fill="url(#navgrid)"></rect>
          <circle class="navpath-pulse a" cx="30" cy="178" r="4"></circle>
          <circle class="navpath-pulse b" cx="30" cy="178" r="4"></circle>
          <path class="navpath-route" d="M30,178 C80,163 108,120 140,140 C170,158 195,112 230,110 C258,110 268,128 300,100 C330,72 350,60 372,50"></path>
          <circle class="navpath-obstacle" cx="230" cy="150" r="20"></circle>
          <circle class="navpath-node start" cx="30" cy="178" r="5"></circle>
          <circle class="navpath-node" cx="140" cy="140" r="4"></circle>
          <circle class="navpath-node dest" cx="372" cy="50" r="5"></circle>
          <polygon class="navpath-marker" points="-4,-3 6,0 -4,3"></polygon>
          <text class="navpath-label hot" x="12" y="198">START</text>
          <text class="navpath-label" x="118" y="128">WAYPOINT_01</text>
          <text class="navpath-label" x="185" y="188">OBSTACLE_AVOID</text>
          <text class="navpath-label hot" x="372" y="36" text-anchor="end">DESTINATION</text>
          </svg>
          </div>
          </div>

          <div class="tech-panel" data-observe>
          <div class="tech-panel-copy">
          <p class="panel-kicker" style="color:var(--violet)">AI / Intelligence</p>
          <h3>Data becomes a decision.</h3>
          <p>A signal moves through perception, a model, and reasoning before it becomes an action. Agentic pipelines built with LangGraph and LangChain, retrieval with FAISS and ChromaDB, and models trained with PyTorch and scikit-learn sit at each stage of that path.</p>
          <div class="tag-row"><span>PyTorch</span><span>LangGraph</span><span>LangChain</span><span>FAISS</span><span>Whisper</span><span>Hugging Face</span></div>
          </div>
          <div class="tech-panel-visual hud-frame" data-observe>
          <svg viewBox="0 0 640 200" role="img" aria-label="Signal flow from data through perception, model, reasoning, to action">
          <text class="neural-col-label" x="50" y="18">DATA</text>
          <text class="neural-col-label" x="210" y="18">PERCEPTION</text>
          <text class="neural-col-label" x="350" y="18">MODEL</text>
          <text class="neural-col-label" x="490" y="18">REASONING</text>
          <text class="neural-col-label" x="590" y="18">ACTION</text>
          <path class="neural-edge" d="M50,70 L210,45"></path>
          <path class="neural-edge" d="M50,70 L210,100"></path>
          <path class="neural-edge" d="M50,130 L210,100"></path>
          <path class="neural-edge" d="M50,130 L210,155"></path>
          <path class="neural-edge" d="M210,45 L350,75"></path>
          <path class="neural-edge" d="M210,100 L350,75"></path>
          <path class="neural-edge" d="M210,100 L350,125"></path>
          <path class="neural-edge" d="M210,155 L350,125"></path>
          <path class="neural-edge" d="M350,75 L490,45"></path>
          <path class="neural-edge" d="M350,75 L490,100"></path>
          <path class="neural-edge" d="M350,125 L490,100"></path>
          <path class="neural-edge" d="M350,125 L490,155"></path>
          <path class="neural-edge" d="M490,45 L590,100"></path>
          <path class="neural-edge" d="M490,100 L590,100"></path>
          <path class="neural-edge" d="M490,155 L590,100"></path>
          <path class="neural-flow" style="animation-delay:0s" d="M50,70 L210,45"></path>
          <path class="neural-flow" style="animation-delay:0s" d="M50,70 L210,100"></path>
          <path class="neural-flow" style="animation-delay:0s" d="M50,130 L210,100"></path>
          <path class="neural-flow" style="animation-delay:0s" d="M50,130 L210,155"></path>
          <path class="neural-flow" style="animation-delay:0.5s" d="M210,45 L350,75"></path>
          <path class="neural-flow" style="animation-delay:0.5s" d="M210,100 L350,75"></path>
          <path class="neural-flow" style="animation-delay:0.5s" d="M210,100 L350,125"></path>
          <path class="neural-flow" style="animation-delay:0.5s" d="M210,155 L350,125"></path>
          <path class="neural-flow" style="animation-delay:1s" d="M350,75 L490,45"></path>
          <path class="neural-flow" style="animation-delay:1s" d="M350,75 L490,100"></path>
          <path class="neural-flow" style="animation-delay:1s" d="M350,125 L490,100"></path>
          <path class="neural-flow" style="animation-delay:1s" d="M350,125 L490,155"></path>
          <path class="neural-flow" style="animation-delay:1.5s" d="M490,45 L590,100"></path>
          <path class="neural-flow" style="animation-delay:1.5s" d="M490,100 L590,100"></path>
          <path class="neural-flow" style="animation-delay:1.5s" d="M490,155 L590,100"></path>
          <circle class="neural-node" cx="50" cy="70"></circle>
          <circle class="neural-node" cx="50" cy="130"></circle>
          <circle class="neural-node lit" style="animation-delay:0s" cx="210" cy="45"></circle>
          <circle class="neural-node lit" style="animation-delay:0s" cx="210" cy="100"></circle>
          <circle class="neural-node lit" style="animation-delay:0s" cx="210" cy="155"></circle>
          <circle class="neural-node lit" style="animation-delay:0.5s" cx="350" cy="75"></circle>
          <circle class="neural-node lit" style="animation-delay:0.5s" cx="350" cy="125"></circle>
          <circle class="neural-node lit" style="animation-delay:1s" cx="490" cy="45"></circle>
          <circle class="neural-node lit" style="animation-delay:1s" cx="490" cy="100"></circle>
          <circle class="neural-node lit" style="animation-delay:1s" cx="490" cy="155"></circle>
          <circle class="neural-node lit" style="animation-delay:1.5s" cx="590" cy="100"></circle>
          </svg>
          </div>
          </div>

          <div class="tech-panel" data-observe>
          <div class="tech-panel-copy">
          <p class="panel-kicker" style="color:var(--green)">Systems / Linux</p>
          <h3>I don't only train models. I run what they live on.</h3>
          <p>A self-hosted, containerized stack: Rocket.Chat with federation, Asterisk PBX for VoIP, Traefik for SSL termination, and Prometheus watching all of it, deployed and operated on Linux, not a managed platform.</p>
          <div class="tag-row"><span>Linux</span><span>Docker</span><span>Traefik</span><span>Prometheus</span><span>Asterisk</span><span>Rocket.Chat</span><span>GitHub Actions</span></div>
          </div>
          <div class="tech-panel-visual hud-frame" data-observe>
          <svg viewBox="0 0 640 260" role="img" aria-label="Infrastructure topology with Docker at the hub of connected services">
          <path class="infra-edge" d="M320,140 L60,60"></path>
          <path class="infra-edge" d="M320,140 L60,220"></path>
          <path class="infra-edge" d="M320,140 L320,30"></path>
          <path class="infra-edge" d="M320,140 L580,60"></path>
          <path class="infra-edge" d="M320,140 L580,220"></path>
          <path class="infra-edge" d="M320,140 L320,250"></path>
          <path class="infra-flow" style="animation-delay:0s" d="M320,140 L60,60"></path>
          <path class="infra-flow" style="animation-delay:0.4s" d="M320,140 L60,220"></path>
          <path class="infra-flow" style="animation-delay:0.8s" d="M320,140 L320,30"></path>
          <path class="infra-flow" style="animation-delay:1.2s" d="M320,140 L580,60"></path>
          <path class="infra-flow" style="animation-delay:1.6s" d="M320,140 L580,220"></path>
          <path class="infra-flow" style="animation-delay:2s" d="M320,140 L320,250"></path>
          <rect class="infra-node-box" x="5" y="42" width="110" height="36" rx="4"></rect>
          <circle class="infra-status" cx="15" cy="60"></circle>
          <text class="infra-label" x="65" y="64">SERVER</text>
          <rect class="infra-node-box" x="5" y="202" width="132" height="36" rx="4"></rect>
          <circle class="infra-status" cx="15" cy="220"></circle>
          <text class="infra-label" x="76" y="224">GITHUB ACTIONS</text>
          <rect class="infra-node-box" x="265" y="12" width="110" height="36" rx="4"></rect>
          <circle class="infra-status" cx="275" cy="30"></circle>
          <text class="infra-label" x="325" y="34">TRAEFIK</text>
          <rect class="infra-node-box" x="525" y="42" width="110" height="36" rx="4"></rect>
          <circle class="infra-status" cx="535" cy="60"></circle>
          <text class="infra-label" x="585" y="64">PROMETHEUS</text>
          <rect class="infra-node-box" x="513" y="202" width="122" height="36" rx="4"></rect>
          <circle class="infra-status" cx="523" cy="220"></circle>
          <text class="infra-label" x="580" y="224">ROCKET.CHAT</text>
          <rect class="infra-node-box" x="265" y="232" width="110" height="36" rx="4"></rect>
          <circle class="infra-status" cx="275" cy="250"></circle>
          <text class="infra-label" x="325" y="254">ASTERISK</text>
          <rect class="infra-node-box hub" x="262" y="122" width="116" height="36" rx="4"></rect>
          <circle class="infra-status" cx="272" cy="140"></circle>
          <text class="infra-label" x="325" y="144">DOCKER</text>
          </svg>
          </div>
          </div>

     design:
       spacing:
         padding: ["4rem", 0, "1rem", 0]
       css_class: "cyber-section"

   - block: markdown
     id: project-scripts
     content:
       title: ""
       text: |
           <script src="/js/engine.js" defer></script>

     design:
       spacing:
         padding: ["0", 0, "0", 0]

   - block: markdown
     id: documentation
     content:
       title: '<span class="eyebrow"><span class="idx">04</span> / DOCUMENTATION</span>'
       subtitle: ''
       text: |
          <div class="doc-grid" data-observe>
          <a class="doc-card" href="/docs/ur_reach_migration/">
          <span class="doc-tag">ROS2 · ISAACLAB</span>
          <span class="doc-title">Humble → Jazzy Migration for IsaacLab UR Reach</span>
          <span class="doc-desc">Migrating the IsaacLab UR Reach Sim2Real codebase across ROS 2 distros, with a working URSim setup guide.</span>
          </a>
          <a class="doc-card" href="/docs/opencv_migration/">
          <span class="doc-tag">ROS1 → ROS2</span>
          <span class="doc-title">OpenCV + Gazebo ROS 1 to ROS 2 Migration</span>
          <span class="doc-desc">Porting a ROS 1 OpenCV/Gazebo tutorial package to ROS 2, covering package manifests, ament_cmake, and Python launch files.</span>
          </a>
          <a class="doc-card" href="/docs/jitsi_rocket_chat_integration/">
          <span class="doc-tag">SELF-HOSTED</span>
          <span class="doc-title">Self-Hosted Jitsi + Rocket.Chat Integration</span>
          <span class="doc-desc">Wiring a self-hosted Jitsi Meet instance into Rocket.Chat for one-click calls with no third-party login.</span>
          </a>
          </div>
          <a class="doc-more" href="/docs/">→ Full documentation hub</a>

     design:
       spacing:
         padding: ["3rem", 0, "3rem", 0]
       css_class: "cyber-section"

   - block: markdown
     id: testimonials
     content:
       title: '<span class="eyebrow">// ENDORSEMENT</span>'
       subtitle: ''
       text: |
          <div class="testimonial-card" data-observe>
          <p class="testimonial-text">"Thank you Pouya, you are valuable fellow! Thanks for your efforts in ML and AI."</p>
          <div class="testimonial-author">Anil B.</div>
          <div class="testimonial-role">Founder @ <a href="https://catalpinar.solutions/" target="_blank" rel="noopener" style="color:var(--cyan);">Catalpinar IT Solutions</a></div>
          </div>

     design:
       spacing:
         padding: ["2rem", 0, "2.5rem", 0]
       css_class: "cyber-section"

   - block: markdown
     id: contact
     content:
       title: "<span class=\"eyebrow\"><span class=\"idx\">05</span> / CONTACT</span>"
       subtitle: ''
       text: |
          <div class="contact-section" data-observe>
          <p class="contact-echo"><span class="prompt">$</span> echo <span class="str">"Let's build something together."</span></p>
          <div class="contact-links">
          <a href="https://www.linkedin.com/in/pouya-shaterzadeh-b88426284/" target="_blank" rel="noopener" class="btn-premium">LinkedIn</a>
          <a href="https://github.com/Pouya-Shaterzadeh" target="_blank" rel="noopener" class="btn-premium">GitHub</a>
          <a href="mailto:pouya.shaterzadeh@bahcesehir.edu.tr" class="btn-premium">Email</a>
          </div>
          <div class="status-line"><span class="dot"></span>System Status: Available</div>
          </div>

     design:
       spacing:
         padding: ["3rem", 0, "4rem", 0]
       css_class: "cyber-section"
---
