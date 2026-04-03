import { createClient } from '@sanity/client';

const client = createClient({
  projectId: 'wls4qthn',
  dataset: 'production',
  apiVersion: '2024-01-01',
  token: process.env.SANITY_TOKEN,
  useCdn: false,
});

async function migrate() {
  // Fetch all old page documents
  const [pageHome, pageAbout, pageContact, pageBooking, pageHome2] = await Promise.all([
    client.fetch(`*[_type == "pageHome"][0]`),
    client.fetch(`*[_type == "pageAbout"][0]`),
    client.fetch(`*[_type == "pageContact"][0]`),
    client.fetch(`*[_type == "pageBooking"][0]`),
    client.fetch(`*[_type == "pageHome2"][0]`),
  ]);

  const docs = [];

  // Home sections
  if (pageHome) {
    const h = pageHome;
    if (h.homeHero)          docs.push({ _id: 'homeHero',          _type: 'homeHero',          ...h.homeHero });
    if (h.homeHook)          docs.push({ _id: 'homeHook',          _type: 'homeHook',          ...h.homeHook });
    if (h.homePresentation)  docs.push({ _id: 'homePresentation',  _type: 'homePresentation',  ...h.homePresentation });
    if (h.homeFocus)         docs.push({ _id: 'homeFocus',         _type: 'homeFocus',         ...h.homeFocus });
    if (h.homeMethod)        docs.push({ _id: 'homeMethod',        _type: 'homeMethod',        ...h.homeMethod });
    if (h.homeTestimonials)  docs.push({ _id: 'homeTestimonials',  _type: 'homeTestimonials',  ...h.homeTestimonials });
    if (h.homeCTA)           docs.push({ _id: 'homeCTA',           _type: 'homeCTA',           ...h.homeCTA });
    if (h.homePricing)       docs.push({ _id: 'homePricing',       _type: 'homePricing',       ...h.homePricing });
    if (h.homeFAQ)           docs.push({ _id: 'homeFAQ',           _type: 'homeFAQ',           ...h.homeFAQ });
    if (h.homeCTA2)          docs.push({ _id: 'homeCTA2',          _type: 'homeCTA2',          ...h.homeCTA2 });
    if (h.homeAbout)         docs.push({ _id: 'homeAbout',         _type: 'homeAbout',         ...h.homeAbout });
  }

  // About sections
  if (pageAbout) {
    const a = pageAbout;
    if (a.aboutHeadline)      docs.push({ _id: 'aboutHeadline',      _type: 'aboutHeadline',      ...a.aboutHeadline });
    if (a.aboutBefore)        docs.push({ _id: 'aboutBefore',        _type: 'aboutBefore',        ...a.aboutBefore });
    if (a.aboutTurningPoint)  docs.push({ _id: 'aboutTurningPoint',  _type: 'aboutTurningPoint',  ...a.aboutTurningPoint });
    if (a.aboutReconstruction)docs.push({ _id: 'aboutReconstruction',_type: 'aboutReconstruction',...a.aboutReconstruction });
    if (a.aboutWhy)           docs.push({ _id: 'aboutWhy',           _type: 'aboutWhy',           ...a.aboutWhy });
    if (a.aboutQuote)         docs.push({ _id: 'aboutQuote',         _type: 'aboutQuote',         ...a.aboutQuote });
    if (a.aboutMethod)        docs.push({ _id: 'aboutMethod',        _type: 'aboutMethod',        ...a.aboutMethod });
    if (a.aboutCTA)           docs.push({ _id: 'aboutCTA',           _type: 'aboutCTA',           ...a.aboutCTA });
  }

  // Contact sections
  if (pageContact) {
    const c = pageContact;
    if (c.contactHeadline)      docs.push({ _id: 'contactHeadline',      _type: 'contactHeadline',      ...c.contactHeadline });
    if (c.contactContactForm)   docs.push({ _id: 'contactContactForm',   _type: 'contactContactForm',   ...c.contactContactForm });
    if (c.contactAlternatives)  docs.push({ _id: 'contactAlternatives',  _type: 'contactAlternatives',  ...c.contactAlternatives });
    if (c.contactRedirection)   docs.push({ _id: 'contactRedirection',   _type: 'contactRedirection',   ...c.contactRedirection });
  }

  // Booking sections
  if (pageBooking) {
    const b = pageBooking;
    if (b.bookingHeadline)   docs.push({ _id: 'bookingHeadline',   _type: 'bookingHeadline',   ...b.bookingHeadline });
    if (b.bookingProgram)    docs.push({ _id: 'bookingProgram',    _type: 'bookingProgram',    ...b.bookingProgram });
    if (b.bookingCalWidget)  docs.push({ _id: 'bookingCalWidget',  _type: 'bookingCalWidget',  ...b.bookingCalWidget });
    if (b.bookingContactAlt) docs.push({ _id: 'bookingContactAlt', _type: 'bookingContactAlt', ...b.bookingContactAlt });
  }

  // Home2 sections
  if (pageHome2) {
    const h2 = pageHome2;
    if (h2.home2Hero)         docs.push({ _id: 'home2Hero',         _type: 'home2Hero',         ...h2.home2Hero });
    if (h2.home2StellieIntro) docs.push({ _id: 'home2StellieIntro', _type: 'home2StellieIntro', ...h2.home2StellieIntro });
    if (h2.home2Method)       docs.push({ _id: 'home2Method',       _type: 'home2Method',       ...h2.home2Method });
    if (h2.home2Testimonials) docs.push({ _id: 'home2Testimonials', _type: 'home2Testimonials', ...h2.home2Testimonials });
    if (h2.home2CTA)          docs.push({ _id: 'home2CTA',          _type: 'home2CTA',          ...h2.home2CTA });
  }

  if (docs.length === 0) {
    console.log('No source data found — nothing to migrate.');
    return;
  }

  console.log(`Migrating ${docs.length} documents...`);

  const tx = client.transaction();
  for (const doc of docs) {
    // Remove internal Sanity fields that shouldn't be copied
    const { _key, _weak, ...clean } = doc;
    tx.createOrReplace(clean);
  }
  await tx.commit();

  console.log('Migration complete.');
}

migrate().catch((err) => {
  console.error(err);
  process.exit(1);
});
