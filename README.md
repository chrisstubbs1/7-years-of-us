# The Story of Us

A mobile-first Next.js tribute — seven lilac-colored chapters of a seven-year relationship. Soft blooms, honest regrets, and the symbols that matter: flowers, purple, Diet Coke, Chester, Franny.

This is not a request. It is a keepsake.

## Quick start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Add your 7 photos

Replace the placeholders in `public/images/`:

| File | Chapter |
|------|---------|
| `year-1.jpg` (or `.webp` / `.png`) | The Unexpected Beginning |
| `year-2.jpg` | Love Through Chaos |
| `year-3.jpg` | Healing & Rebuilding |
| `year-4.jpg` | Becoming Us |
| `year-5.jpg` | Memory & Meaning |
| `year-6.jpg` | Loss & Support |
| `year-7.jpg` | The Drift |

Then update the `image` paths in `src/data/chapters.ts` (they currently point at `.svg` placeholders):

```ts
image: "/images/year-1.jpg",
```

Tips: portrait photos work best (roughly 3:4). Keep files under ~500KB each for smooth mobile loading.

## Edit the writing

All chapter copy, truth notes, and the closing promise live in:

- `src/data/chapters.ts`

Change titles, narratives, regrets, symbols, and memory cards anytime — no CMS required.

## Optional ambient piano

Add a gentle looping track at:

```
public/audio/ambient.mp3
```

The sound toggle appears automatically when the file is available. It stays muted until she chooses to play it.

## Deploy to Vercel

1. Push this repo to GitHub.
2. Import the project in [Vercel](https://vercel.com/new).
3. Deploy — no special env vars needed.

Or from the CLI:

```bash
npx vercel
```

## Structure

```
src/
  app/                  # Home, /chapters/[year], /promise
  components/           # Bloom, swipe cards, press-hold truths, timeline, audio
  data/chapters.ts      # All personal content
  lib/types.ts
public/
  images/               # Your 7 photos
  audio/                # Optional ambient.mp3
```

## Interactions

- **Lilac bloom** — soft petal animation on each chapter
- **Swipe memory cards** — micro-memories per year
- **Press & hold** — hidden truths you wish you'd said sooner
- **Heartbeat timeline** — pulsing path through seven years
- **Promise page** — handwritten-style closing message
- **Ambient sound** — optional piano toggle

## Tone reminder

Keep pressure out of the copy. The goal is for her to feel seen — understood, remembered, and reminded that the love you built was imperfect, human, and uniquely yours.
