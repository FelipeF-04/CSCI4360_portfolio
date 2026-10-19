# React + Vite Portfolio

This is my personal portfolio website created for CSCI 4360/5360: Web Technologies.


**[Live Site](https://felipef-04.github.io/CSCI4360_portfolio/)**

## Technologies

- React
- Vite
- JavaScript
- HTML/CSS

## Pages

- **Home** — Introduction and interests
- **Experience** — Education, skills, and relevant coursework
- **Projects** — Projects displayed from an array with filtering
- **Project Details** — Individual details for each project
- **Contact** — Email, LinkedIn, and GitHub links

## React Features

The website uses:

- Function components
- Reusable `Layout` and `ProjectCard` components
- Props
- Controlled project filter
- Stable list keys
- `NavLink` for navigation
- `useParams` for project detail pages


## Deployment

The website is deployed using GitHub Pages and GitHub Actions.

The deployment workflow runs the linter and creates a production build before deploying the `dist` directory.

## Running Locally

Install the dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

## Project Structure

```text
src/
├── components/
│   ├── Layout.jsx
│   └── ProjectCard.jsx
├── data/
│   └── projects.js
├── pages/
│   ├── BasicPages.jsx
│   ├── Projects.jsx
│   └── ProjectDetail.jsx
├── App.jsx
├── index.css
└── main.jsx

.github/
└── workflows/
    └── deploy.yml
```

## Course

CSCI 4360/5360 — Web Technologies  
Fall 2026