Redesign the **Featured Projects** section of my portfolio website from scratch.

The current implementation is too raw, basic, and vertically repetitive. It looks like a list of projects rather than a premium engineering portfolio.

I want this section to become one of the **most visually impressive parts of the entire website**.

Do NOT simply make the existing cards prettier.

Do NOT keep a uniform vertical list.

Do NOT create a basic 2-column grid where every card looks identical.

Instead, design the section as a **dynamic project showcase / editorial-style portfolio gallery** with strong visual hierarchy, asymmetric composition, large featured projects, project imagery, technical storytelling, and interaction.

The goal is that when a recruiter reaches this section, they immediately think:

> "These are substantial engineering projects."

rather than:

> "Here is a list of GitHub repositories."

---

# CORE CONCEPT

Treat projects as **case studies**, not cards.

The section should communicate:

- what I built
- what problem it solves
- the interesting technical architecture behind it
- the role AI plays
- the technologies involved
- the outcome / measurable result when available

Visual priority should be:

**Project → Visual → Problem → Technical approach → Result → Links**

rather than:

**Title → Description → Tags → GitHub**

---

# SECTION STRUCTURE

Create the section approximately like this:

FEATURED WORK

A small eyebrow:
`SELECTED WORK`

Large heading:

**Systems I've built.  
Problems I've solved.**

A concise introductory sentence:

"Selected projects spanning agentic AI, multimodal systems, robotics, and production infrastructure."

Then create a **visual project composition** rather than a vertical list.

---

# 1. HERO PROJECT

The first project should dominate the section.

Use a large horizontal / landscape feature:

┌───────────────────────────────────────────────────────────┐
│                                                           │
│              LARGE PROJECT VISUAL                         │
│                                                           │
│                                      PROJECT CATEGORY     │
│                                      PROJECT TITLE        │
│                                      SHORT DESCRIPTION    │
│                                      TECH TAGS            │
│                                      VIEW PROJECT →       │
│                                                           │
└───────────────────────────────────────────────────────────┘

The first project should occupy substantially more visual space than the others.

Use one of the strongest projects as the hero project, preferably:

**VeriShelf**

or whichever project in the repository has the strongest technical depth and visual assets.

The hero project must have:

- large visual area
- project title
- category
- one-sentence value proposition
- 3–5 technologies
- GitHub / demo CTA
- subtle hover animation
- subtle visual overlay
- clear visual hierarchy

The project image should not be an arbitrary stock image.

Use project screenshots, architecture diagrams, UI screenshots, generated technical visuals, or repository assets when available.

---

# 2. ASYMMETRIC BENTO / EDITORIAL LAYOUT

Below the hero project, create an **asymmetric layout**.

Do NOT make every project the same width and height.

Example conceptual layout:

┌──────────────────────────────┬───────────────────────────┐
│                              │                           │
│       PROJECT 2              │       PROJECT 3           │
│       LARGE                  │       MEDIUM              │
│                              │                           │
├──────────────────────────────┤                           │
│                              │                           │
│       PROJECT 4              │                           │
│       WIDE                   │                           │
├──────────────────────────────┴───────────────────────────┤
│                                                           │
│                    PROJECT 5                              │
│                    LARGE FEATURE                          │
│                                                           │
└───────────────────────────────────────────────────────────┘

The exact layout can change responsively, but it must feel intentionally composed.

Think:

**Apple product page + Linear + Vercel + high-end engineering portfolio**

rather than:

**GitHub repository listing**

---

# 3. PROJECT VISUALS MUST BE IMPORTANT

Do not make the project image a tiny thumbnail above the text.

Visuals should occupy a major portion of each project.

Possible visuals:

- application screenshots
- dashboards
- AI workflow diagrams
- architecture diagrams
- robotics simulation screenshots
- drone footage stills
- terminal / deployment screenshots
- model visualizations
- product UI
- generated conceptual technical artwork

For AI projects, the visual should communicate the **nature of the system**.

For example:

VERISHELF

Visual:
Documents → Retrieval → Agents → Verification → Answer

STYLE FINDER AI

Visual:
Image → Vision Model → Embedding → Retrieval → Results

DRONE / ROBOTICS

Visual:
Drone → Sensors → Perception → Planning → Autonomous action

Avoid generic images of robots, brains, circuits, or "AI" stock photography.

---

# 4. DIFFERENT PROJECT TYPES SHOULD LOOK DIFFERENT

Do not force every project into exactly the same component.

For example:

### AI / AGENTIC PROJECT

Large visual + architecture information.

### COMPUTER VISION PROJECT

Large visual screenshot + model / pipeline information.

### ROBOTICS PROJECT

Full-width immersive image / simulation screenshot.

### INFRASTRUCTURE PROJECT

Dark technical visual with architecture / infrastructure diagram.

The visual language should reflect the project itself.

---

# 5. USE PROJECT CATEGORIES

Every project should have a tiny category label above its title.

Examples:

`AGENTIC AI`

`MULTIMODAL AI`

`ROBOTICS`

`COMPUTER VISION`

`INFRASTRUCTURE`

Make these understated.

Do not use giant colorful badges.

---

# 6. PROJECT CARD HIERARCHY

A project should visually read in this order:

CATEGORY

PROJECT TITLE

One strong sentence explaining the project.

VISUAL

TECHNICAL HIGHLIGHT

TECH STACK

ACTION

Example:

AGENTIC AI

### VeriShelf

A multi-agent research system that retrieves, verifies, and synthesizes information from complex documents.

[large architecture / product visual]

`LangGraph` `RAG` `Docling` `Hybrid Retrieval`

**Explore project →**

Do NOT put a large paragraph inside every card.

---

# 7. ADD TECHNICAL HIGHLIGHTS

Each major project should have one small technical highlight.

Examples:

`Multi-agent verification`

`Hybrid retrieval pipeline`

`Vision-language inference`

`ROS 2 autonomy`

`PX4 integration`

`Self-hosted distributed infrastructure`

This gives the recruiter an immediate reason to care.

---

# 8. USE METRICS WHERE AVAILABLE

When a real metric exists, surface it visually.

Examples:

`97% accuracy`

`0.902 R²`

`3-agent architecture`

`ROS 2 + PX4`

`Real-time inference`

However:

**NEVER INVENT METRICS.**

Only use verified metrics from the project itself.

Do not use "87% accuracy" for regression unless that is genuinely a defined and appropriate metric.

---

# 9. PROJECT INTERACTION

Make the projects interactive.

On hover:

- image subtly scales
- overlay becomes slightly darker/lighter
- title moves a few pixels
- arrow moves toward the right
- border / background transitions
- technical information becomes slightly more prominent

Keep the animations elegant.

No exaggerated bouncing.

No excessive glow.

No spinning objects.

Use smooth transitions around:

`200–400ms`

---

# 10. PROJECT EXPANSION

Clicking a featured project should open a deeper project experience.

Preferred implementation:

A dedicated project detail page.

Alternative:

A large modal / fullscreen case-study panel.

The expanded experience should contain:

### Overview

What it is.

### Problem

What problem it addresses.

### Architecture

How the system works.

### Technical implementation

Important engineering decisions.

### Stack

Technologies.

### Results

Metrics / observations.

### Links

GitHub / live demo / paper / documentation.

This makes the Featured Projects section the gateway into detailed case studies.

---

# 11. MAKE THE FIRST PROJECT FEEL LIKE A PRODUCT

For the strongest project, do not present it like an academic assignment.

Instead, structure the copy like a product:

### VeriShelf

**AI research system for evidence-backed answers.**

A multi-agent system that combines document parsing, retrieval, reasoning, and verification to produce more reliable answers from complex sources.

Then show:

`Retrieve → Reason → Verify → Respond`

This kind of presentation makes the technical work immediately understandable.

---

# 12. SHOW ARCHITECTURE VISUALLY

For the technically strongest projects, incorporate very small architecture diagrams directly into the cards.

Example:

┌────────┐
│ Input  │
└───┬────┘
    ↓
┌────────┐
│ RAG    │
└───┬────┘
    ↓
┌────────┐
│ Agents │
└───┬────┘
    ↓
┌──────────┐
│ Verify   │
└──────────┘

Do not make the diagram gigantic.

It should function as a visual signature of the technical architecture.

---

# 13. DO NOT DISPLAY ALL PROJECTS HERE

Featured Projects should contain only the strongest work.

Recommended structure:

### Featured

4–6 strongest projects.

### More Work

A secondary compact grid/list containing smaller projects.

This prevents weaker academic experiments from visually competing with major projects.

---

# 14. PROJECT SELECTION

Prioritize projects approximately in this order:

1. VeriShelf
2. Style Finder AI
3. DroneX / autonomous drone work
4. Sky Warriors
5. Self-hosted communication / infrastructure project
6. Other technically meaningful projects

Use the actual project names from the existing repository if they differ.

Do not fabricate project details.

---

# 15. CREATE VISUAL DIFFERENTIATION

Each major project should have its own visual identity.

For example:

VeriShelf:
document / agent / retrieval visual language

Style Finder:
fashion / image / multimodal visual language

DroneX:
aerial / telemetry / robotics visual language

Sky Warriors:
simulation / UAV / autonomy visual language

Infrastructure:
network / servers / terminal / architecture visual language

Do not simply assign random gradients to each card.

---

# 16. COLOR SYSTEM

Keep the website's overall palette restrained.

Use:

- one primary accent
- neutral surfaces
- subtle borders
- subtle gradients

Projects may have subtle visual accent variations, but the website should still feel cohesive.

Avoid:

- rainbow gradients
- neon cyberpunk
- excessive purple/blue glow
- giant gradient blobs
- colorful pills everywhere

---

# 17. TYPOGRAPHY

Project titles should be large and confident.

Hero project title:

approximately:

`48–72px desktop`

depending on viewport.

Secondary projects:

`28–42px`

Descriptions:

`16–19px`

Metadata:

`11–13px`

Create strong typography contrast between:

CATEGORY
TITLE
DESCRIPTION
TECHNICAL INFORMATION

---

# 18. SPATIAL DESIGN

Use generous whitespace.

Do not cram all information into cards.

Featured Projects should breathe.

The user should be able to visually scan:

Project → Image → Technical concept → CTA

without reading every sentence.

---

# 19. RESPONSIVE BEHAVIOR

Desktop:

Use asymmetric composition.

Tablet:

Reduce complexity but preserve hierarchy.

Mobile:

Stack projects vertically, but **do NOT turn them into identical cards**.

The hero project should still be clearly dominant.

Mobile structure:

Hero project
↓
Large project
↓
Medium project
↓
Large project
↓
More work

Preserve visual variety even when stacking.

---

# 20. ADD A "VIEW ALL PROJECTS" CTA

At the bottom of the section:

**View all projects →**

This should lead to a dedicated projects page or expanded project archive.

The Featured Projects section itself should remain curated.

---

# 21. OPTIONAL: HORIZONTAL PROJECT EXPERIENCE

Consider adding a subtle horizontal-scroll interaction for one part of the section.

For example:

`Featured Work →`

[VeriShelf] [Style Finder] [DroneX] [Sky Warriors]

But do NOT make the entire portfolio horizontally scrolling.

Horizontal interaction should be supplemental, not the main navigation.

---

# 22. OPTIONAL: PROJECT NUMBERING

Use very subtle indexing:

`01`

`02`

`03`

`04`

This can create an editorial / case-study feel.

The numbers should not dominate.

---

# 23. THE SECTION SHOULD FEEL LIKE A STORY

The user should visually experience:

### 01
AI / Agents

### 02
Multimodal AI

### 03
Robotics

### 04
Autonomous systems

### 05
Infrastructure

This communicates breadth while maintaining a coherent identity:

**AI engineering across software, perception, autonomy, and infrastructure.**

---

# 24. AVOID THESE PATTERNS

DO NOT:

- create six identical cards
- create six vertically stacked sections
- put every project into a 3-column grid
- make every image the same size
- place technology badges everywhere
- use giant paragraphs
- use stock photography
- make every project neon
- use generic "AI generated" illustrations
- overuse glassmorphism
- make hover animations distracting
- hide important information behind unnecessary interactions
- make the section slow to load

---

# 25. MICRO-DETAILS

Add subtle premium details such as:

- thin borders
- muted metadata
- small arrow icons
- image clipping
- subtle grain/noise if appropriate
- slight image movement on hover
- elegant divider lines
- section numbering
- tiny status labels

These should reward closer inspection without becoming visual noise.

---

# 26. ACCESSIBILITY

Ensure:

- keyboard-accessible project cards
- proper focus states
- semantic headings
- alt text
- sufficient contrast
- no hover-only critical information
- reduced-motion support

---

# 27. PERFORMANCE

The visual redesign must remain performant.

Use:

- optimized images
- WebP/AVIF when appropriate
- lazy loading
- responsive image sizes
- CSS transitions instead of heavy JS
- IntersectionObserver only where necessary

Do not install a huge animation library just to animate project cards.

---

# 28. FINAL VISUAL TARGET

The final Featured Projects section should feel like a combination of:

- premium personal portfolio
- product case-study showcase
- editorial design
- modern software engineering website

It should NOT feel like:

- Bootstrap cards
- GitHub project list
- university student portfolio
- generic AI landing page
- template gallery

The project section should be something a recruiter remembers after closing the page.

---

# IMPLEMENTATION REQUIREMENT

Inspect the existing code and assets first.

Reuse high-quality existing project screenshots/assets where possible.

If suitable visual assets do not exist, create elegant technical visual placeholders using the project's actual concepts rather than generic stock imagery.

Do not fabricate project functionality.

Implement the redesign directly in the website.

Do not merely describe what should be changed.

After implementation, verify:

- desktop layout
- tablet layout
- mobile layout
- hover states
- keyboard navigation
- image loading
- project links
- animations
- no horizontal overflow

The final result should look intentionally art-directed rather than generated from a standard card component.