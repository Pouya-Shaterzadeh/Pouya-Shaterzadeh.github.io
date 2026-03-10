---
title: 'Portfolio'
date: 2026-03-10
type: landing

design:
  spacing: "5rem"

sections:
  - block: hero
    content:
      title: Pouya Shaterzadeh
      text: |
        **AI Engineering · Robotics · Infrastructure**

        A showcase of my professional projects spanning secure system infrastructure, robotics software, and AI-driven solutions.
      primary_action:
        text: View Docs
        url: /docs/
        icon: document-text
      secondary_action:
        text: LinkedIn
        url: https://www.linkedin.com/in/pouya-shaterzadeh-b88426284/
    design:
      spacing:
        padding: ["3rem", 0, "3rem", 0]
        margin: [0, 0, 0, 0]
      css_class: ""
      background:
        color: ""
        image:
          filename: ""
          filters:
            brightness: 0.5

  - block: collection
    id: projects
    content:
      title: Projects
      subtitle: A selection of professional and open-source work
      text: ""
      page_type: project
      count: 10
      filters:
        folders:
          - project
      sort_by: 'Weight'
      sort_ascending: true
    design:
      view: card
      columns: 2

  - block: markdown
    id: testimonials
    content:
      title: Trusted By
      subtitle: What collaborators say
      text: |
        <div style="max-width: 520px; margin: 2rem auto; background: linear-gradient(135deg, rgba(99,102,241,0.08), rgba(168,85,247,0.08)); border-left: 4px solid #6366f1; border-radius: 12px; padding: 2rem 2.5rem; box-shadow: 0 4px 24px rgba(0,0,0,0.06);">
          <div style="font-size: 2.5rem; color: #6366f1; line-height: 1; margin-bottom: 0.5rem;">❝</div>
          <p style="font-size: 1.1rem; font-style: italic; color: inherit; margin: 0 0 0.5rem 0; line-height: 1.6;">
            Thank you Pouya, you are valuable fellow!<br>
            Thanks for your efforts in ML and AI.
          </p>
          <div style="margin-top: 1.25rem; display: flex; align-items: center; gap: 0.75rem;">
            <div style="width: 3px; height: 32px; background: #6366f1; border-radius: 2px;"></div>
            <div>
              <div style="font-weight: 600; font-size: 0.95rem;">Anil B., Founder</div>
              <a href="https://catalpinar.solutions/" target="_blank" rel="noopener" style="font-size: 0.85rem; color: #6366f1; text-decoration: none;">Catalpinar IT Solutions</a>
            </div>
          </div>
        </div>
    design:
      css_class: ""
      spacing:
        padding: ["2rem", 0, "2rem", 0]
---
