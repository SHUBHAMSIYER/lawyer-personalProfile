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
