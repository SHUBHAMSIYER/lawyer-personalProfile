# G.R. Patil — React app (free stack)

| Tool | Cost | Role |
|------|------|------|
| **Node.js** (portable zip) | Free | Runtime & npm |
| **Vite** | Free | Dev server & build |
| **React + TypeScript** | Free | UI |
| **Tailwind CSS v4** | Free | Utility CSS (included; site styles in `site.css`) |
| **Framer Motion** | Free tier | Scroll reveals |
| **Lenis** | Free | Smooth scrolling |

No Git required. Hosting later: **Netlify**, **Vercel**, or **Cloudflare Pages** (free tiers).

## Node on this PC

Node was installed **without admin** to:

`%LOCALAPPDATA%\node-portable\node-v22.14.0-win-x64`

Optional: install [Node.js LTS](https://nodejs.org) system-wide later and delete the portable folder.

## Commands

From PowerShell:

```powershell
cd d:\ToBeSaved\trial\gr-patils-app
.\dev.ps1
```

Or manually:

```powershell
$env:Path = "$env:LOCALAPPDATA\node-portable\node-v22.14.0-win-x64;$env:Path"
npm run dev
```

Open the URL Vite prints (usually **http://localhost:5173**).

```powershell
npm run build    # production files in dist/
npm run preview  # preview production build
```

## Docker (fresh laptop: only Docker Desktop needed)

Install [Docker Desktop](https://www.docker.com/products/docker-desktop/) (free), start it, then:

```powershell
cd d:\ToBeSaved\trial\gr-patils-app
.\run-docker.ps1
```

Or:

```powershell
docker compose up --build
```

Open **http://localhost:5173/**. Stop with **Ctrl+C**, or `docker compose down`.

The first run downloads the Node image and runs `npm ci` inside the container (all project dependencies). Code edits on your machine reload via the mounted volume.

**Production-style static site** (nginx serving `dist/`):

```powershell
docker compose -f docker-compose.prod.yml up --build
```

Open **http://localhost:8080/**.
