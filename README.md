# utus-demo

A tiny Vite site for trying Utus Git deploys.

1. dashboard.glianalabs.com → **Utus Hosting** → **+ Situs baru** → **Impor dari GitHub**
2. Pick this repo → **Buat & bangun**

Utus detects Vite + npm, runs `npm ci && npm run build`, and publishes `dist/`.
Push to `main` to redeploy; push any other branch for a preview at
`<branch>--<site>.utus.dev`. The order form posts to the site's Formulir inbox.
