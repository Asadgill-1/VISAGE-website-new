/**
 * VESAGE — project data.
 *
 * One entry per project, consumed by the homepage exhibition and by the
 * /work/[slug] template. Adding a project is adding an object here.
 *
 * HOUSE RULE (brief §40/§41): every field below is either supplied by the
 * client or describes something visibly present in the footage. No years,
 * credits, agencies, directors, objectives, results or statistics are
 * recorded, because none were provided. Leave them absent rather than guess.
 *
 * layout + align drive the homepage composition. Nothing repeats back to
 * back — that alternation is the exhibition rhythm (§06, §32, §34).
 *   inset  small, deeply indented, surrounded by air
 *   edge   media pushed to one margin, type in the opposing column
 *   split  media and type share the width
 *   stack  type above, media below and offset
 *   full   full-bleed, type overlaid
 */

/** @type {Array<Object>} */
export const projects = [
  {
    number: '01',
    slug: 'uniqlo-ugc-indoor',
    client: 'UNIQLO',
    category: 'UGC / Fashion',
    variant: 'Indoor',
    statement: 'A fitting room, a mirror,\nand the clothes.',
    media: { kind: 'video', name: 'uniqlo-ugc-indoor', w: 1440, h: 2228, seconds: 11 },
    gallery: [],
    theme: '#e31d1f',
    layout: 'inset',
    align: 'left',
    featured: false,
  },
  {
    number: '02',
    slug: 'uniqlo-ugc-outdoor',
    client: 'UNIQLO',
    category: 'UGC / Fashion',
    variant: 'Outdoor',
    statement: 'The same idea,\ntaken outside.',
    media: { kind: 'video', name: 'uniqlo-ugc-outdoor', w: 1440, h: 2252, seconds: 18 },
    gallery: [],
    theme: '#e31d1f',
    layout: 'edge',
    align: 'right',
    featured: false,
  },
  {
    number: '03',
    slug: 'brunello-cinematic',
    client: 'Brunello Cucinelli',
    category: 'Cinematic Commercial',
    statement: 'Lake light, cypress,\nand cloth that moves\nlike it weighs something.',
    media: { kind: 'video', name: 'brunello-cinematic', w: 2528, h: 1440, seconds: 29 },
    gallery: [],
    theme: '#8a7d64',
    layout: 'full',
    align: 'left',
    featured: true,
  },
  {
    number: '04',
    slug: 'uniqlo-catalogue',
    client: 'UNIQLO',
    category: 'Fashion / Catalogue',
    statement: 'White cyclorama.\nNothing to hide behind.',
    media: { kind: 'video', name: 'uniqlo-catalogue', w: 1440, h: 2266, seconds: 11 },
    gallery: [],
    theme: '#e31d1f',
    layout: 'split',
    align: 'left',
    featured: false,
  },
  {
    number: '05',
    slug: 'cloud-nine-splash-pops',
    client: 'Cloud Nine',
    category: 'UGC / Fragrance',
    variant: 'Splash Pops',
    statement: 'Pink on pink on pink.\nA fragrance film that\nrefuses to be serious.',
    media: { kind: 'video', name: 'cloud-nine-splash-pops', w: 1440, h: 2580, seconds: 44 },
    gallery: [],
    theme: '#e8a0b4',
    layout: 'edge',
    align: 'left',
    featured: false,
  },
  {
    number: '06',
    slug: 'brunello-hyper-motion',
    client: 'Brunello Cucinelli',
    category: 'Product / Hyper-Motion',
    statement: 'Macro on thread, bead\nand sequin. The garment\nat the scale of a fibre.',
    media: { kind: 'video', name: 'brunello-hyper-motion', w: 3090, h: 1440, seconds: 18 },
    gallery: [],
    theme: '#8a6a3a',
    layout: 'full',
    align: 'right',
    featured: false,
  },
  {
    number: '07',
    slug: 'tiffany-product-story',
    client: 'Tiffany',
    category: 'Jewelry / Product Story',
    statement: 'Water, colonnade, stone.\nThe necklace arrives last.',
    media: { kind: 'video', name: 'tiffany-product-story', w: 2542, h: 1440, seconds: 47 },
    gallery: [],
    theme: '#0d2b4a',
    layout: 'stack',
    align: 'right',
    featured: false,
  },
  {
    number: '08',
    slug: 'tiffany-brand-cinematic',
    client: 'Tiffany',
    category: 'Brand / Cinematic',
    statement: 'It starts as a drawing\non blue paper.',
    media: { kind: 'video', name: 'tiffany-brand-cinematic', w: 3090, h: 1440, seconds: 15 },
    gallery: [],
    theme: '#0d2b4a',
    layout: 'full',
    align: 'left',
    featured: true,
  },
  {
    number: '09',
    slug: 'aura-royale-hyper-motion',
    client: 'Aura Royale',
    category: 'Perfume / Hyper-Motion',
    statement: 'Black glass, hard rim light,\nand almost no\nother information.',
    media: { kind: 'video', name: 'aura-royale-hyper-motion', w: 1440, h: 2560, seconds: 7 },
    gallery: [{ name: 'aura-royale-product', w: 1600, h: 1600, alt: 'Aura Royale bottle and box, rim-lit on stone' }],
    theme: '#2a2c30',
    layout: 'split',
    align: 'right',
    dark: true,
    featured: true,
  },
  {
    number: '10',
    slug: 'aura-royale-product',
    client: 'Aura Royale',
    category: 'Perfume / Product Photography',
    statement: 'One bottle. One box.\nOne light.',
    media: { kind: 'image', name: 'aura-royale-product', w: 1600, h: 1600, alt: 'Aura Royale eau de parfum beside its box on a stone plinth' },
    gallery: [],
    theme: '#2a2c30',
    layout: 'inset',
    align: 'right',
    dark: true,
    featured: false,
  },
  {
    number: '11',
    slug: 'ember-house',
    client: 'Ember House',
    category: 'Brand / Product',
    statement: 'A plum vessel, a brass lid,\nand a room built\naround one flame.',
    media: { kind: 'video', name: 'ember-house-hyper-motion', w: 960, h: 960, seconds: 15 },
    gallery: [
      { name: 'ember-house-logo', w: 2048, h: 2048, alt: 'Ember House wordmark with flame monogram' },
      { name: 'ember-house-packaging', w: 2048, h: 2048, alt: 'Ember House candle beside its boxed packaging' },
      { name: 'ember-house-social', w: 2048, h: 2048, alt: 'Lit Ember House candle on a marble table' },
      { name: 'ember-house-listing', w: 2048, h: 2048, alt: 'Ember House candle and brass lid beside a fireplace' },
    ],
    theme: '#4a2731',
    layout: 'stack',
    align: 'left',
    featured: false,
  },
  {
    number: '12',
    slug: 'noor-and-bean',
    client: 'Noor & Bean',
    category: 'Brand / Product',
    statement: 'Single-origin cold brew,\nshot like still life\nthat learned to pour.',
    media: { kind: 'video', name: 'noor-bean-cinematic', w: 1280, h: 720, seconds: 15 },
    gallery: [
      { name: 'noor-bean-logo', w: 2048, h: 2048, alt: 'Noor & Bean wordmark with sun and droplet monogram' },
      { name: 'noor-bean-product', w: 2048, h: 1360, alt: 'Noor & Bean cold brew bottle beside a filled glass' },
      { name: 'noor-bean-social', w: 1744, h: 2336, alt: 'Noor & Bean poster reading Make Time For The Pour' },
    ],
    extraVideo: { name: 'noor-bean-hyper-motion', w: 1280, h: 720, seconds: 15, label: 'Hyper-Motion' },
    theme: '#b5623c',
    layout: 'split',
    align: 'left',
    featured: false,
  },
  {
    number: '13',
    slug: 'uniqlo-product-film',
    client: 'UNIQLO',
    category: 'Fashion / Product Film',
    statement: "Linen, sand, and\npeople who won't\nstand still.",
    media: { kind: 'video', name: 'uniqlo-product-film', w: 1440, h: 2170, seconds: 14 },
    gallery: [],
    theme: '#e31d1f',
    layout: 'edge',
    align: 'right',
    featured: false,
  },
];

export const bySlug = (slug) => projects.find((p) => p.slug === slug);

/** Media path helpers — keeps /public/media layout in exactly one place. */
export const loopSrc = (name) => `/media/loop/${name}.mp4`;
export const fullSrc = (name) => `/media/full/${name}.mp4`;
export const posterSrc = (name) => `/media/poster/${name}.jpg`;
export const imageSrc = (name) => `/media/image/${name}.jpg`;

/** Poster for either media kind. */
export const coverSrc = (m) => (m.kind === 'image' ? imageSrc(m.name) : posterSrc(m.name));
