# Personal Portfolio Design

## Goal

Build a polished personal portfolio for xiaou that presents vibe-coding projects, public repositories, live products, and direct contact channels.

## Direction

The page uses a dark technical cockpit aesthetic: product screenshots, crisp metric chips, project cards, and an animated code-grid atmosphere. It should feel like a builder's control room rather than a standard resume page.

## Content

- Hero: xiaou / vibe coding portfolio positioning, contact shortcuts, and headline metrics.
- Featured projects: Code-Nest, 2026-bs, and the graduation-design promotion website.
- Capability sections: full-stack product delivery, AI-enabled engineering, community/content systems, and launch/deployment experience.
- Contact section: QQ, phone, GitHub, and email.

## Implementation Plan

- Create a Vite + React + TypeScript single-page app.
- Keep project metadata in `src/App.tsx` so new projects can be added by appending to one array.
- Put the full visual system in `src/styles.css`.
- Use public URLs for existing product screenshots and GitHub repository preview images.
- Add copy-to-clipboard interactions for QQ, phone, and email.
- Verify with `npm run build` and a local browser screenshot.

