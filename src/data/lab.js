/**
 * LAB — §18. Experimental work that is not client work.
 *
 * Every entry here is generated rather than filmed, so every entry carries
 * `generated: true` and the section labels it on the page. §20 is strict about
 * this: AI work must never be mistaken for a commissioned project, and the
 * label is what keeps LAB honest while it sits on the same site as real client
 * films.
 *
 * Notes describe only what is visibly on screen — no invented process, no
 * claimed brief, no client.
 *
 * Add entries shaped like:
 *   { slug, title, note, generated, media: { kind, name, w, h, alt } }
 * where `name` is a file in /public/media/{loop,poster,image}.
 */

/** @type {Array<Object>} */
export const lab = [
  {
    slug: 'bloom',
    title: 'Bloom',
    note: 'Ink, still water, one overhead source.',
    generated: true,
    media: {
      kind: 'video',
      name: 'lab-ink',
      w: 1248,
      h: 1664,
      alt: 'A strand of black ink sinking into clear water and blooming outward',
    },
  },
  {
    slug: 'fold',
    title: 'Fold',
    note: 'Cotton paper under a raking light.',
    generated: true,
    media: {
      kind: 'video',
      name: 'lab-fold',
      w: 1248,
      h: 1664,
      alt: 'A heavy sheet of paper creasing and standing into a ridge',
    },
  },
  {
    slug: 'passage',
    title: 'Passage',
    note: 'Daylight crossing hand-troweled plaster.',
    generated: true,
    media: {
      kind: 'video',
      name: 'lab-passage',
      w: 1248,
      h: 1664,
      alt: 'A rectangle of daylight travelling slowly across a plaster wall',
    },
  },
  {
    slug: 'tension',
    title: 'Tension',
    note: 'One thread, drawn until it moves.',
    generated: true,
    media: {
      kind: 'video',
      name: 'lab-thread',
      w: 1248,
      h: 1664,
      alt: 'A single black thread pulled taut until it vibrates',
    },
  },
];
