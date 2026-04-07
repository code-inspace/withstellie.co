import { defineType, defineField } from 'sanity';

export const homeHero = defineType({
  name: 'homeHero', title: 'Home - Hero', type: 'document',
  fields: [
    defineField({ name: 'visible', type: 'boolean', title: 'Visible', initialValue: true }),
    defineField({ name: 'title_fr', type: 'string', title: 'Title (FR)' }),
    defineField({ name: 'title_en', type: 'string', title: 'Title (EN)' }),
    defineField({ name: 'eyebrow_fr', type: 'string', title: 'Eyebrow (FR)' }),
    defineField({ name: 'eyebrow_en', type: 'string', title: 'Eyebrow (EN)' }),
    defineField({ name: 'subtitle_fr', type: 'text', title: 'Subtitle (FR)' }),
    defineField({ name: 'subtitle_en', type: 'text', title: 'Subtitle (EN)' }),
    defineField({ name: 'cta_fr', type: 'string', title: 'Cta (FR)' }),
    defineField({ name: 'cta_en', type: 'string', title: 'Cta (EN)' }),
    defineField({ name: 'backgroundImage', type: 'image', title: 'Background Image', options: { hotspot: true } }),
  ],
  preview: { prepare: () => ({ title: 'Home — Hero' }) }
});

export const homeHook = defineType({
  name: 'homeHook', title: 'Home - Hook', type: 'document',
  fields: [
    defineField({ name: 'visible', type: 'boolean', title: 'Visible', initialValue: true }),
    defineField({ name: 'quote_fr', type: 'text', title: 'Quote (FR)' }),
    defineField({ name: 'quote_en', type: 'text', title: 'Quote (EN)' }),
    defineField({ name: 'author_fr', type: 'string', title: 'Author (FR)' }),
    defineField({ name: 'author_en', type: 'string', title: 'Author (EN)' }),
  ],
  preview: { prepare: () => ({ title: 'Home — Hook' }) }
});

export const homePresentation = defineType({
  name: 'homePresentation', title: 'Home - Presentation', type: 'document',
  fields: [
    defineField({ name: 'visible', type: 'boolean', title: 'Visible', initialValue: true }),
    defineField({ name: 'title_fr', type: 'string', title: 'Title (FR)' }),
    defineField({ name: 'title_en', type: 'string', title: 'Title (EN)' }),
    defineField({ name: 'text1_fr', type: 'text', title: 'Text1 (FR)' }),
    defineField({ name: 'text1_en', type: 'text', title: 'Text1 (EN)' }),
    defineField({ name: 'text2_fr', type: 'text', title: 'Text2 (FR)' }),
    defineField({ name: 'text2_en', type: 'text', title: 'Text2 (EN)' }),
  ],
  preview: { prepare: () => ({ title: 'Home — Presentation' }) }
});

export const homeFocus = defineType({
  name: 'homeFocus', title: 'Home - Focus', type: 'document',
  fields: [
    defineField({ name: 'visible', type: 'boolean', title: 'Visible', initialValue: true }),
    defineField({ name: 'title_fr', type: 'string', title: 'Title (FR)' }),
    defineField({ name: 'title_en', type: 'string', title: 'Title (EN)' }),
  ],
  preview: { prepare: () => ({ title: 'Home — Focus' }) }
});

export const homeMethod = defineType({
  name: 'homeMethod', title: 'Home - Method', type: 'document',
  fields: [
    defineField({ name: 'visible', type: 'boolean', title: 'Visible', initialValue: true }),
    defineField({ name: 'title_fr', type: 'string', title: 'Title (FR)' }),
    defineField({ name: 'title_en', type: 'string', title: 'Title (EN)' }),
    defineField({ name: 'subtitle_fr', type: 'text', title: 'Subtitle CTA link (FR)' }),
    defineField({ name: 'subtitle_en', type: 'text', title: 'Subtitle CTA link (EN)' }),
    defineField({
      name: 'cards', type: 'array', title: 'Cartes Mind / Body / Soul',
      of: [defineField({ name: 'methodCard', type: 'object', fields: [
        defineField({ name: 'title', type: 'string', title: 'Titre (invariable)' }),
        defineField({ name: 'letter', type: 'string', title: 'Lettre (M/B/S)' }),
        defineField({ name: 'desc_fr', type: 'text', title: 'Description (FR)' }),
        defineField({ name: 'desc_en', type: 'text', title: 'Description (EN)' }),
      ]})]
    }),
  ],
  preview: { prepare: () => ({ title: 'Home — Method' }) }
});

export const homeTestimonials = defineType({
  name: 'homeTestimonials', title: 'Home - Testimonials', type: 'document',
  fields: [
    defineField({ name: 'visible', type: 'boolean', title: 'Visible', initialValue: true }),
    defineField({ name: 'title_fr', type: 'string', title: 'Title (FR)' }),
    defineField({ name: 'title_en', type: 'string', title: 'Title (EN)' }),
    defineField({
      name: 'list', type: 'array', title: 'Testimonials List',
      of: [defineField({ name: 'testimonialItem', type: 'object', fields: [
        defineField({ name: 'quote_fr', type: 'text', title: 'Quote (FR)' }),
        defineField({ name: 'quote_en', type: 'text', title: 'Quote (EN)' }),
        defineField({ name: 'author', type: 'string', title: 'Author Name' }),
        defineField({ name: 'age_fr', type: 'string', title: 'Age (FR)' }),
        defineField({ name: 'age_en', type: 'string', title: 'Age (EN)' }),
        defineField({ name: 'role_fr', type: 'string', title: 'Role (FR)' }),
        defineField({ name: 'role_en', type: 'string', title: 'Role (EN)' }),
      ]})]
    })
  ],
  preview: { prepare: () => ({ title: 'Home — Testimonials' }) }
});

export const homeCTA = defineType({
  name: 'homeCTA', title: 'Home - CTA', type: 'document',
  fields: [
    defineField({ name: 'visible', type: 'boolean', title: 'Visible', initialValue: true }),
    defineField({ name: 'title_fr', type: 'string', title: 'Title (FR)' }),
    defineField({ name: 'title_en', type: 'string', title: 'Title (EN)' }),
    defineField({ name: 'body_fr', type: 'text', title: 'Body text (FR)' }),
    defineField({ name: 'body_en', type: 'text', title: 'Body text (EN)' }),
    defineField({ name: 'cta_fr', type: 'string', title: 'Cta (FR)' }),
    defineField({ name: 'cta_en', type: 'string', title: 'Cta (EN)' }),
    defineField({ name: 'subline_fr', type: 'string', title: 'Subline (FR)' }),
    defineField({ name: 'subline_en', type: 'string', title: 'Subline (EN)' }),
    defineField({ name: 'backgroundImage', type: 'image', title: 'Background Image', options: { hotspot: true } }),
  ],
  preview: { prepare: () => ({ title: 'Home — CTA' }) }
});

export const homePricing = defineType({
  name: 'homePricing', title: 'Home - Pricing', type: 'document',
  fields: [
    defineField({ name: 'visible', type: 'boolean', title: 'Visible', initialValue: true }),
    defineField({ name: 'title_fr', type: 'string', title: 'Title (FR)' }),
    defineField({ name: 'title_en', type: 'string', title: 'Title (EN)' }),
  ],
  preview: { prepare: () => ({ title: 'Home — Pricing' }) }
});

export const homeFAQ = defineType({
  name: 'homeFAQ', title: 'Home - FAQ', type: 'document',
  fields: [
    defineField({ name: 'visible', type: 'boolean', title: 'Visible', initialValue: true }),
    defineField({ name: 'title_fr', type: 'string', title: 'Title (FR)' }),
    defineField({ name: 'title_en', type: 'string', title: 'Title (EN)' }),
  ],
  preview: { prepare: () => ({ title: 'Home — FAQ' }) }
});

export const homeCTA2 = defineType({
  name: 'homeCTA2', title: 'Home - CTA2', type: 'document',
  fields: [
    defineField({ name: 'visible', type: 'boolean', title: 'Visible', initialValue: true }),
    defineField({ name: 'title_fr', type: 'string', title: 'Title (FR)' }),
    defineField({ name: 'title_en', type: 'string', title: 'Title (EN)' }),
    defineField({ name: 'subtitle_fr', type: 'string', title: 'Subtitle (FR)' }),
    defineField({ name: 'subtitle_en', type: 'string', title: 'Subtitle (EN)' }),
    defineField({ name: 'cta_fr', type: 'string', title: 'Cta (FR)' }),
    defineField({ name: 'cta_en', type: 'string', title: 'Cta (EN)' }),
  ],
  preview: { prepare: () => ({ title: 'Home — CTA2' }) }
});

export const homeAbout = defineType({
  name: 'homeAbout', title: 'Home - About', type: 'document',
  fields: [
    defineField({ name: 'visible', type: 'boolean', title: 'Visible', initialValue: true }),
    defineField({ name: 'title_fr', type: 'string', title: 'Title (FR)' }),
    defineField({ name: 'title_en', type: 'string', title: 'Title (EN)' }),
    defineField({ name: 'desc_fr', type: 'text', title: 'Desc (FR)' }),
    defineField({ name: 'desc_en', type: 'text', title: 'Desc (EN)' }),
    defineField({ name: 'cta_fr', type: 'string', title: 'Cta (FR)' }),
    defineField({ name: 'cta_en', type: 'string', title: 'Cta (EN)' }),
  ],
  preview: { prepare: () => ({ title: 'Home — About' }) }
});
