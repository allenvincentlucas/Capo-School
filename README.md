# Capo School 🎸

A free, single-page interactive lesson that teaches beginner guitarists how to choose, apply, and use a capo — built as a static site with no build step, ready to deploy on GitHub Pages.

**[View the live site →](#)** *(update this link once GitHub Pages is enabled — see below)*

![Capo School screenshot placeholder](assets/img/social-preview.png)

## What's inside

- **Live fretboard demo** — click a fret and watch the capo move, with the resulting "effective tuning" updating in real time.
- **Transposition calculator** — pick a chord shape and a capo fret to see the sounding chord, or work backward from a target chord to the shape you should play.
- **5 lesson modules** covering what a capo does, the gear you need, how to choose one for your guitar, step-by-step application, and transposition theory.
- **Worship-song video examples** — five real, embedded YouTube tutorials (What A Beautiful Name, Good Good Father, Build My Life, Way Maker, Worthy), each tagged with its actual capo fret so it maps straight back to the theory section.
- **Song case studies** — four additional well-known songs that use a capo to swap barre chords for open ones.

No frameworks, no build tools, no dependencies beyond a Google Fonts CDN link — just HTML, CSS, and vanilla JS.

## Project structure

```
.
├── index.html              # the whole site — sections, content, and markup
├── assets/
│   ├── css/
│   │   └── style.css       # all styling (design tokens live at the top as CSS variables)
│   ├── js/
│   │   └── main.js         # fretboard widget + transposition calculator logic
│   └── img/
│       ├── favicon.svg
│       └── social-preview.png   # add your own — used for link previews (see below)
├── robots.txt
├── LICENSE
└── README.md
```

## Deploying on GitHub Pages

1. Push this repo to GitHub.
2. Go to **Settings → Pages**.
3. Under **Build and deployment**, set **Source** to `Deploy from a branch`.
4. Choose the `main` branch and the `/ (root)` folder, then **Save**.
5. GitHub will publish the site at `https://<your-username>.github.io/<repo-name>/` within a minute or two.

If you're using a custom domain, add a `CNAME` file at the repo root with your domain name and configure the DNS records GitHub gives you.

## Editing content

Everything content-wise lives in `index.html` — each lesson module is a clearly commented `<section>`. To add or swap a video, copy an existing `.video-card` block and update the embed ID, title, caption, and the "Watch on YouTube" fallback link.

Design tokens (colors, fonts, spacing) are declared as CSS custom properties at the top of `assets/css/style.css` under `:root` — change them there to re-theme the whole site.

## Attribution

- Video lessons are embedded from their original YouTube channels via the standard YouTube `iframe` embed — all rights to that video content belong to their respective creators. Embedding does not imply endorsement by those creators.
- Song titles, artists, and chord/capo information referenced in the lesson content are used for educational commentary only.

## License

The code and original written lesson content in this repository are available under the [MIT License](LICENSE). This license does **not** extend to third-party video content, song titles, or any brand names referenced on the site.
