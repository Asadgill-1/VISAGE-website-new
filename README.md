# VESAGE

Portfolio site for VESAGE — an independent creative practice working across
film, advertising, brands and digital.

Built from `Prompt.md.txt` (the creative brief). Where the brief and the
supplied assets disagreed, the resolution is recorded in
[Decisions](#decisions) below.

---

## Running it

```bash
npm install
npm run dev
```

`npm run build` outputs a static site to `dist/`. There is no server
component — any static host will serve it.

---

## Stack

| Choice | Why |
| --- | --- |
| Astro 5 | Static output, ships **zero JavaScript** unless a page asks for it. §35 makes performance a hard requirement and thirteen films is a lot of weight to start from. |
| Plain CSS + custom properties | The design is four colours and two typefaces driving very large editorial type. A utility framework would be more configuration than CSS. |
| Native `@view-transition` | The thumbnail-expands-into-project interaction (§13) is a CSS feature in Chrome, Edge and Safari. No router, no library, no JS. Firefox falls back to an ordinary navigation. |
| Self-hosted fonts | 75 KB total, no third-party request, no layout shift. |

Total JavaScript on the homepage: scroll reveal, lazy video, the nav, and the
cursor. Everything is progressive — with JS disabled the site is complete,
readable and navigable, and every film still shows its poster frame.

No GSAP, no Lenis, no Tailwind, no React.

---

## Typography

- **Display** — Instrument Serif. High-contrast editorial serif, used for the
  wordmark, statements and the oversized index numerals.
- **Sans** — Archivo (variable, 100–900). Navigation, metadata, categories,
  captions.

---

## Layout

```
src/
  data/
    projects.js     all 13 projects — the only file you edit to add work
    site.js         contact + social placeholders, trademark notice
    lab.js          LAB entries (currently empty, on purpose)
  components/
    Nav.astro       fixed, retreats on scroll down
    Footer.astro    §30 minimal + §17 trademark notice
    MediaFrame.astro   the one place a film or still becomes markup
    ProjectBlock.astro homepage exhibition entry
    Cursor.astro    VIEW / PLAY / NEXT cursor, pointer devices only
  layouts/
    BaseLayout.astro
  pages/
    index.astro         hero → work → lab → about → contact
    work/[slug].astro   project template, one per entry in projects.js
scripts/
  build-media.sh    Assets/ → public/media/
Assets/             source masters, git-ignored (~460 MB)
public/media/       web deliverables, committed
```

### Adding a project

Append an object to `projects` in `src/data/projects.js`. The homepage block
and the `/work/<slug>` page are both generated from it. Give it a `layout` and
`align` that don't match its neighbours — that alternation is the exhibition
rhythm.

---

## Media pipeline

`npm run media` transcodes `Assets/` into `public/media/`. It never modifies a
source file, and it wipes its own output first so a partial run can't leave
stale files behind.

Three outputs per film:

| Output | Spec | Used by |
| --- | --- | --- |
| `loop/` | silent, ≤1080px long edge, CRF 30 | homepage cards |
| `full/` | AAC 128k, ≤1920px long edge, CRF 22 | project page hero |
| `poster/` | JPEG, ≤1600px long edge | both, as the `poster` attribute |

Homepage loops are silent by construction, so §26 ("no video autoplays with
sound") cannot be violated by accident. The `full` encode keeps its audio and
starts muted behind a sound toggle.

Poster timestamps are chosen per film in the script. They are not frame 0:
`brunello-hyper-motion` opens on an editing artefact, so its poster is taken at
6.0s.

### Loading behaviour

No `<video>` element carries a `src` in the HTML. `BaseLayout.astro` attaches
one when a clip comes within 150% of the viewport, plays it when it is 20%
visible, and pauses it the moment it leaves. Under `prefers-reduced-motion`
nothing autoplays and every film rests on its poster.

---

## Decisions

Recorded because they resolve real conflicts between the brief and the assets.

**1 — Aura Royale.** The brief specifies it for projects 09 and 10 and no
files existed at first pass; they were supplied afterwards and are now in place.

**2 — Ember House (11) and Noor & Bean (12).** Neither brand appears in the
brief. Both were in the asset folder and are included as instructed. Each is
one project with a gallery, not one project per file.

**3 — A thirteenth project.** The asset folder holds four UNIQLO films but §32
has three UNIQLO slots. The fourth (beach, linen, labelled `PRODUCT FILM`) is
project 13, appended rather than inserted so the confirmed 01–12 order is
untouched. Move it by reordering the array.

**4 — The red UNIQLO bars.** All four UNIQLO films carry a red sidebar burned
into every frame naming the ad type (`UGC AD — INDOOR`, `PRODUCT FILM`, and so
on), 12–16% of frame width. Kept, on instruction — they carry real
information. UNIQLO's project theme is set to `#e31d1f`, sampled from the bar
itself, so the overlay reads as part of the art direction rather than against
it.

**5 — "NOOR & BEAN".** The filenames read *Nour*; the logo and bottle label
read *Noor*. The logo wins (§16, consistent spelling).

**6 — Ember House text artefacts.** The hyper-motion film has `SCULTED` burned
in mid-clip and an end card reading `EMER HOUSE`. Shipped as supplied, on
instruction. The static Ember House images spell the name correctly. Fixing it
needs a re-render, not a code change.

---

## What is deliberately absent

The brief forbids invention (§40, §41) and these were never supplied, so
nothing stands in for them:

- **Years.** No project carries a date.
- **Credits.** `projects.js` accepts a `credits` array and the project page
  renders it when present. Every project currently omits it.
- **Campaign objectives, results, statistics, testimonials, awards.** None.
- **Contact address and social URLs.** `src/data/site.js` holds obvious
  placeholders. The contact block shows a visible "pending" state until
  `emailIsReal` is set to `true`; the footer renders no social links while
  `socials` is empty.
- **LAB content.** `src/data/lab.js` is an empty array and the section says so
  plainly rather than borrowing client work to fill itself.

Project copy describes only what is visibly on screen in the supplied footage.

---

## Accessibility

Semantic landmarks, a skip link, visible focus rings, labelled controls, alt
text on every still, and full `prefers-reduced-motion` support — reveals,
autoplay, the cursor and view transitions all stand down. The site is fully
usable with motion disabled and with JavaScript off.

---

## Trademark notice

`src/data/site.js` carries the §17 notice rendered quietly in the footer.
Delete the `trademarkNotice` string to remove it.
