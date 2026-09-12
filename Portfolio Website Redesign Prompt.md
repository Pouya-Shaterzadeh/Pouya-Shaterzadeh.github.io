You are redesigning my personal portfolio website at:

https://pouya-shaterzadeh.github.io/

I want you to **fully redesign and improve the website**, not merely tweak colors or spacing.

First, inspect the existing codebase and understand the current structure/content. Preserve the technically accurate information and existing working links, but substantially improve the UX, visual hierarchy, copywriting, responsiveness, and positioning.

## MAIN GOAL

The website should immediately communicate:

> "Pouya Shaterzadeh is a serious AI Engineer / ML Engineer who builds real systems—not someone who only completes tutorials or coursework."

The target audience is:
- AI/ML engineering recruiters
- technical founders
- startup CTOs
- engineering collaborators
- professors/researchers
- companies looking for an AI/software engineer

The site should feel like a **high-quality personal engineering portfolio**, not a generic Hugo template.

---

# 1. FIX THE HERO SECTION

The current website does not establish a strong personal identity quickly enough.

Create a much stronger hero section.

Use a headline along the lines of:

**AI Engineer building intelligent systems, agents & robotics.**

Then a concise supporting paragraph explaining what I actually build.

For example:

"AI Engineering student at Bahçeşehir University focused on machine learning, agentic AI, computer vision, robotics, and production-grade software systems."

Do NOT make the hero excessively wordy.

Add strong primary CTAs:

- View Projects
- GitHub
- LinkedIn

Also make my location / university / field easy to understand without clutter.

The visitor should understand who I am within approximately 5 seconds.

---

# 2. MAKE THE DESIGN FEEL PREMIUM

The current visual presentation feels too close to a developer documentation page.

Move toward a modern, premium engineering portfolio aesthetic.

Desired qualities:

- dark-first visual identity
- sophisticated typography
- excellent spacing
- subtle animations
- clean cards
- strong visual hierarchy
- restrained use of gradients
- tasteful glass / border effects where appropriate
- professional rather than flashy
- technical but human

Avoid:

- excessive neon
- "AI hacker" aesthetics
- excessive glowing effects
- generic startup gradients
- unnecessary animations
- huge blocks of text
- template-looking sections

The site should feel closer to the portfolio of a strong software/AI engineer than a template demo.

---

# 3. REWORK MY PERSONAL POSITIONING

The site currently lists many technologies, but the positioning is too broad.

I do not want visitors to think:

"this person knows 50 random technologies."

I want them to think:

"this person specializes in AI systems and can actually build and deploy them."

Group my expertise into meaningful categories.

For example:

### AI & Machine Learning
PyTorch, TensorFlow, scikit-learn, computer vision, NLP, embeddings, multimodal AI

### Agentic AI & RAG
LangGraph, LangChain, CrewAI, RAG, hybrid retrieval, FAISS, ChromaDB, Docling

### Robotics & Autonomous Systems
ROS 2, PX4, Gazebo, computer vision, UAV systems

### Software & Infrastructure
Python, FastAPI, Docker, Linux, GitHub Actions, MongoDB, Prometheus

Do NOT display every technology as an equally important skill.

Prioritize the skills that reinforce my identity as an AI engineer.

---

# 4. COMPLETELY REWORK THE PROJECT SECTION

This is the most important section of the website.

The current project section is too list-like.

I want each important project to communicate:

1. What problem it solves
2. What I built
3. Why it is technically interesting
4. The technologies used
5. A measurable result when available
6. A link to demo / GitHub

Create visually strong project cards.

Prioritize my strongest projects rather than treating every project equally.

Suggested hierarchy:

## FEATURED PROJECTS

### VeriShelf
Multi-agent RAG system with fact verification.

Emphasize:
- LangGraph
- Docling
- hybrid retrieval
- multi-agent architecture
- fact verification

### Style Finder AI
Multimodal fashion search system.

Emphasize:
- Llama 4
- Fashion-CLIP
- image understanding
- product retrieval
- real-world inference pipeline

### DroneX / Aerostack
Autonomous drone / fleet-management project.

Emphasize:
- robotics
- telemetry
- computer vision
- fleet management
- ROS/PX4 where relevant
- real-world deployment

### Sky Warriors
UAV / robotics project.

Emphasize:
- ROS 2
- Gazebo
- PX4
- perception
- autonomous systems

### Self-Hosted Communication Infrastructure
This is technically interesting and should NOT look like a random side project.

Present it as an engineering/infrastructure project demonstrating:

- Linux
- Docker
- Rocket.Chat
- Asterisk
- Traefik
- monitoring
- networking
- deployment

Then put secondary projects such as PyUploadMate, House Price Prediction, Customer Segmentation, etc. into a smaller "More Projects" section.

---

# 5. SHOW TECHNICAL DEPTH, NOT JUST PROJECT NAMES

For the best projects, allow the user to click into a project detail view/modal/page.

Each detailed project should have:

### Overview
One paragraph.

### Architecture
A simple visual architecture diagram if practical.

Example:

Input → Processing → AI Model → Retrieval → Agents → Verification → Output

### Tech Stack
Technologies shown as compact tags.

### Results
Use measurable results where they genuinely exist.

Examples:
- inference time
- accuracy
- number of agents
- retrieval method
- deployment environment
- dataset size
- model performance

Do NOT invent metrics.

---

# 6. FIX THE "87% ACCURACY" PRESENTATION

The House Price Prediction project currently says:

"87% Accuracy"

This is misleading for a regression problem.

Accuracy is generally not the correct metric for regression.

Replace it with the actual evaluation metric available in the project, such as R², RMSE, MAE, or log-RMSE.

Do not make a machine-learning portfolio look technically inaccurate.

If the repository contains a better metric, use that metric.

---

# 7. REPLACE THE CURRENT "ARMORY" STYLE

The giant technology list is visually overwhelming.

Instead of one huge wall of technologies, create a compact interactive or categorized skills section.

Potential presentation:

AI / ML
████████████████

Agentic AI
███████████████

Computer Vision
██████████████

Robotics
████████████

Backend / Infrastructure
███████████

Do NOT use fake percentage skill ratings.

Use technologies, categories, and evidence through projects instead.

A recruiter should trust the skills because the projects demonstrate them.

---

# 8. IMPROVE THE TIMELINE

The timeline is a good idea, but currently feels like a raw changelog.

Turn it into a visual career / engineering journey.

For example:

2024
Started AI Engineering @ Bahçeşehir University

2025
Machine Learning → AI applications → DroneX

2026
Agentic AI → RAG → robotics → infrastructure

Make important milestones visually prominent.

Do not give every minor activity equal weight.

---

# 9. ADD A "NOW" SECTION

Add a small section showing what I am currently focused on.

For example:

### Currently building

Agentic AI systems, multimodal applications, robotics infrastructure, and production-oriented AI software.

This makes the portfolio feel alive rather than static.

---

# 10. IMPROVE THE CONTACT SECTION

The current terminal-style:

$ echo "Let's build something together."

is clever, but it should not be the main communication mechanism.

Keep the technical personality, but make the contact area more polished.

Example:

### Let's build something useful.

Interested in AI systems, robotics, agentic workflows, or ambitious software projects?

Then provide:

LinkedIn
GitHub
Email

Make these visually obvious.

---

# 11. REMOVE TEMPLATE / GENERATOR FEEL

The website currently exposes some Hugo Blox/template characteristics.

The final result should feel like a deliberately designed personal website.

Minimize or remove obvious template branding where legally/technically appropriate.

Do not make "Made with Hugo Blox" visually prominent.

The user should remember **Pouya Shaterzadeh**, not the framework used to generate the website.

---

# 12. ADD SOCIAL PROOF CAREFULLY

The endorsement section is useful, but it currently looks like raw log output.

Redesign it as a clean testimonial card.

Show:

"Thank you Pouya, you are valuable fellow!"

Then:

Anil B.
Founder @ Catalpinar IT Solutions

Make it visually credible without exaggerating the endorsement.

---

# 13. ADD PROJECT FILTERING

Create filters such as:

All
AI / ML
Agentic AI
Robotics
Infrastructure
Software

This allows recruiters to quickly find relevant work.

Keep the interaction subtle and fast.

---

# 14. RESPONSIVE DESIGN

The website must look excellent on:

- desktop
- laptop
- tablet
- mobile

On mobile:

- hero should remain concise
- cards should stack cleanly
- skill sections should not overflow
- navigation should be simple
- typography should remain readable
- animations should be reduced where appropriate

Test for horizontal overflow.

---

# 15. PERFORMANCE

Do not sacrifice performance for visual effects.

Optimize:

- images
- fonts
- JavaScript
- animations
- lazy loading
- unnecessary dependencies

Target an excellent Lighthouse performance score.

Prefer CSS over JavaScript for simple animations.

---

# 16. ACCESSIBILITY

Implement:

- semantic HTML
- keyboard navigation
- visible focus states
- sufficient contrast
- alt text for meaningful images
- accessible buttons/links
- reduced-motion support

---

# 17. SEO

Improve:

- page title
- meta description
- Open Graph metadata
- Twitter/X metadata
- canonical URL
- structured data where appropriate

Use wording that naturally communicates:

Pouya Shaterzadeh
AI Engineer
Machine Learning
Agentic AI
Robotics
Bahçeşehir University

Do not keyword-stuff.

---

# 18. COPYWRITING STYLE

Rewrite the site copy so it sounds:

- confident
- technically competent
- concise
- human
- mature

Avoid phrases like:

"passionate about technology"

"innovative solutions"

"cutting-edge technology"

unless they are genuinely necessary.

Show competence through concrete statements instead.

Bad:

"I am passionate about using cutting-edge AI to solve real-world problems."

Better:

"I build AI systems that combine models, retrieval, agents, and production infrastructure."

---

# 19. VISUAL HIERARCHY

The page should roughly follow this hierarchy:

HERO
↓
What I build
↓
Featured Projects
↓
Technical Expertise
↓
Engineering Timeline
↓
Additional Projects
↓
Endorsement
↓
Contact

Featured projects should receive substantially more visual attention than minor projects.

---

# 20. MICRO-INTERACTIONS

Use subtle interactions:

- card hover
- image zoom
- border transitions
- smooth scrolling
- section reveal
- button hover states

But keep animations restrained.

Nothing should feel like a gaming website.

---

# 21. IMPORTANT TECHNICAL RULES

Do not fabricate:
- companies
- job titles
- metrics
- project results
- awards
- users
- revenue
- publications

Only use information that exists in the current website, repository, or project source.

When information is incomplete, write around the limitation instead of inventing details.

Preserve all valid external project links.

---

# 22. FINAL QUALITY BAR

After redesigning, ask yourself:

Would an AI/ML recruiter immediately understand what I do?

Does the site look like it belongs to a serious engineer?

Do my strongest projects dominate the page?

Does the website demonstrate technical depth instead of simply listing technologies?

Does it look custom-designed rather than template-generated?

Would someone remember my name and specialization after visiting once?

If the answer is no, continue refining the design.

## DELIVERABLE

Implement the redesign directly in the existing project.

Do not merely give recommendations.

Modify the actual website code.

At the end, summarize:
1. what you changed
2. why you changed it
3. which files were modified
4. any remaining weaknesses