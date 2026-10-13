# digital-schreiner.ch

Blog über Verbesserung und Digitalisierung im Schreinerhandwerk in der Schweiz. Gebaut mit [Astro](https://astro.build), gehostet kostenlos auf GitHub Pages.

## Neuen Beitrag schreiben

1. Neue Datei in `src/content/blog/` anlegen, z.B. `cnc-einstieg.md` (Dateiname = URL)
2. Bilder nach `public/images/` legen und mit `/images/datei.jpg` einbinden
3. Committen & pushen auf `main` → Webseite aktualisiert sich automatisch (ca. 1–2 Min.)

```markdown
---
title: "Titel"
description: "Kurzbeschreibung für Übersicht & Google"
date: 2026-10-20
image: "/images/titelbild.jpg"   # optional
tags: ["CNC", "Lean"]
draft: false                      # true = nicht veröffentlichen
---

Text in Markdown ...

![Bildbeschreibung](/images/foto.jpg)
```

## Lokal ansehen

```
npm install
npm run dev
```
→ http://localhost:4321
