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
---
