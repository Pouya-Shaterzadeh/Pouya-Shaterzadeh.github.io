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
        <div class="hero-cyber" style="padding: 2rem 0; text-align: center;">
          <div style="font-family: 'Courier New', monospace; font-size: 1rem; color: #00ff41; margin-bottom: 0.75rem; opacity: 0.8;">
            ── SYSTEM: ACTIVE ──
          </div>
          <p style="font-family: 'Courier New', monospace; font-size: 1.2rem; color: #e0e0e0; font-weight: 400; margin-bottom: 0.5rem;">
            ⚡ <strong style="color: #fff;">AI Developer</strong> · <strong style="color: #ff00ff;">Cybersecurity</strong> · <strong style="color: #0ff;">Robotics</strong>
          </p>
          <p style="font-family: 'Courier New', monospace; font-size: 0.9rem; color: #888; max-width: 600px; margin: 0.5rem auto 1.5rem auto; line-height: 1.6;">
            $ cat /home/pouya/README.md<br>
            <span style="color: #0ff;">></span> AI Engineering @ Bahçeşehir University<br>
            <span style="color: #0ff;">></span> Deep learning · Computer vision · NLP<br>
            <span style="color: #0ff;">></span> Self-hosted infrastructure · Secure systems<br>
            <span style="color: #0ff;">></span> 20+ repos · 46+ stars · Open source advocate
          </p>
          <div style="display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap;">
            <a href="/#projects" class="btn-cyber">
              ■ &nbsp;./explore_projects
            </a>
            <a href="/docs/" class="btn-cyber purple">
              ◆ &nbsp;./view_docs
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
            <div class="number">20+</div>
            <div class="label">Repositories</div>
          </div>
          <div class="cyber-stat">
            <div class="number" style="color: #ff00ff;">46+</div>
            <div class="label">GitHub Stars</div>
          </div>
          <div class="cyber-stat">
            <div class="number" style="color: #0ff;">3</div>
            <div class="label">Active Projects</div>
          </div>
          <div class="cyber-stat">
            <div class="number">87%</div>
            <div class="label">Model Accuracy</div>
          </div>
        </div>
        <hr class="cyber">
    design:
      spacing:
        padding: ["0rem", 0, "0rem", 0]

  - block: markdown
    id: skills
    content:
      title: |
        <span class="section-title-cyber">Skills & Tools</span>
      subtitle: |
        <span style="font-family: 'Courier New', monospace; font-size: 0.85rem; color: #888;">$ cat /home/pouya/.toolkit</span>
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
        </div>
    design:
      spacing:
        padding: ["2rem", 0, "2rem", 0]

  - block: collection
    id: projects
    content:
      title: |
        <span class="section-title-cyber">Active Projects</span>
      subtitle: |
        <span style="font-family: 'Courier New', monospace; font-size: 0.85rem; color: #888;">$ ls -la /home/pouya/projects/</span>
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

  - block: markdown
    id: testimonials
    content:
      title: |
        <span class="section-title-cyber">Endorsements</span>
      subtitle: |
        <span style="font-family: 'Courier New', monospace; font-size: 0.85rem; color: #888;">$ cat /var/log/feedback.log</span>
      text: |
        <pre style="background: rgba(0,255,65,0.04); border: 1px solid rgba(0,255,65,0.12); border-radius: 8px; padding: 1.5rem; font-family: 'Courier New', monospace; font-size: 0.85rem; color: #e0e0e0; max-width: 560px; margin: 1.5rem auto; white-space: pre-wrap;">
<span style="color: #00ff41;">[2025-12-15 14:32]</span> <span style="color: #888;">&lt;anil_b&gt;</span> Thank you Pouya, you are valuable fellow!
<span style="color: #888;">                                    Thanks for your efforts in ML and AI.</span>

<span style="color: #0ff;">──</span> Anil B., Founder @ Catalpinar IT Solutions
<span style="color: #0ff;">──</span> <a href="https://catalpinar.solutions/" target="_blank" style="color: #0ff; text-decoration: underline;">https://catalpinar.solutions</a>
        </pre>
    design:
      spacing:
        padding: ["2rem", 0, "3rem", 0]
---
