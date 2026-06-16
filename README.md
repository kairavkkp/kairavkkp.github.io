# kairavkkp.github.io

A clean, minimal developer portfolio built with React + Vite, served at the root
of your GitHub user site.

## Run locally

```bash
npm install
npm run dev
```

Open the URL it prints (usually http://localhost:5173).

## Edit your content

All the editable content lives at the top of `src/Portfolio.jsx` in the
`PROFILE`, `STACK`, `PROJECTS`, and `EXPERIENCE` constants. Change those and the
whole site updates. Also update the `<title>` and description in `index.html`.

## Deploy to GitHub Pages

Because this is a user site (`kairavkkp.github.io`), it serves from the root and
`base` in `vite.config.js` is already set to `"/"` — nothing to change there.

### One-time setup

1. Push this project to your `kairavkkp.github.io` repo:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/kairavkkp/kairavkkp.github.io.git
   git push -u origin main
   ```

2. In the repo on GitHub: **Settings → Pages → Build and deployment →
   Source → "GitHub Actions".**

### Every deploy after that

Just push to `main`. The included workflow (`.github/workflows/deploy.yml`)
builds and publishes automatically. Your site will be live at:

```
https://kairavkkp.github.io/
```

### Alternative: manual deploy

If you prefer not to use Actions, the `gh-pages` package is also included:

```bash
npm run deploy
```

Then set **Settings → Pages → Source → "Deploy from a branch" → gh-pages**.
(Use one method or the other, not both.)
