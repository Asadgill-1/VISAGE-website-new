/**
 * Everything VESAGE has not supplied yet lives here, so filling it in is one
 * file and not a search across the site.
 *
 * `email` and every entry in `socials` is a PLACEHOLDER. Brief §29/§30 forbids
 * inventing contact details, so nothing here is presented as real: the contact
 * block renders a visible "add address" state until `emailIsReal` is true, and
 * `socials` renders nothing while it is empty.
 */

export const site = {
  name: 'VESAGE',
  positioning: 'An independent creative practice making films, campaigns, brands and digital experiences with an artist’s eye.',

  // Replace with the real address, then flip emailIsReal to true.
  email: 'hello@example.com',
  emailIsReal: false,

  // Add { label, href } once real URLs exist. Empty renders no links at all.
  socials: [],

  // §17 — required while the portfolio shows brands VESAGE does not own.
  // Delete this string to remove the notice entirely.
  trademarkNotice:
    'Brands shown are presented as examples of work. VESAGE claims no ownership of, or affiliation with, the trademarks displayed.',
};
