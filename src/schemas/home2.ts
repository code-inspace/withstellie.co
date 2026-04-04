import { defineType, defineField } from 'sanity';

export const home2Hero = defineType({
  name: 'home2Hero', title: 'Home2 - Hero', type: 'document',
  fields: [
    defineField({ name: 'visible', type: 'boolean', title: 'Visible', initialValue: true }),
    defineField({ name: 'eyebrow_fr', type: 'string', title: 'Eyebrow (FR)' }),
    defineField({ name: 'eyebrow_en', type: 'string', title: 'Eyebrow (EN)' }),
    defineField({ name: 'h1_fr', type: 'string', title: 'H1 (FR)' }),
    defineField({ name: 'h1_en', type: 'string', title: 'H1 (EN)' }),
    defineField({ name: 'subtitle_fr', type: 'text', title: 'Subtitle (FR)' }),
    defineField({ name: 'subtitle_en', type: 'text', title: 'Subtitle (EN)' }),
    defineField({ name: 'cta_fr', type: 'string', title: 'Cta (FR)' }),
    defineField({ name: 'cta_en', type: 'string', title: 'Cta (EN)' }),
    defineField({ name: 'backgroundImage', type: 'image', title: 'Background Image', options: { hotspot: true } }),
  ],
  preview: { prepare: () => ({ title: 'Home2 — Hero' }) }
});

export const home2StellieIntro = defineType({
  name: 'home2StellieIntro', title: 'Home2 - StellieIntro', type: 'document',
  fields: [
    defineField({ name: 'visible', type: 'boolean', title: 'Visible', initialValue: true }),
    defineField({ name: 'title_fr', type: 'string', title: 'Title (FR)' }),
    defineField({ name: 'title_en', type: 'string', title: 'Title (EN)' }),
    defineField({ name: 'text1_fr', type: 'text', title: 'Text1 (FR)' }),
    defineField({ name: 'text1_en', type: 'text', title: 'Text1 (EN)' }),
    defineField({ name: 'text2_fr', type: 'text', title: 'Text2 (FR)' }),
    defineField({ name: 'text2_en', type: 'text', title: 'Text2 (EN)' }),
    defineField({ name: 'text3_fr', type: 'text', title: 'Text3 (FR)' }),
    defineField({ name: 'text3_en', type: 'text', title: 'Text3 (EN)' }),
    defineField({ name: 'cta_fr', type: 'string', title: 'Cta (FR)' }),
    defineField({ name: 'cta_en', type: 'string', title: 'Cta (EN)' }),
    defineField({ name: 'image', type: 'image', title: 'Photo de Stellie', options: { hotspot: true } }),
  ],
  preview: { prepare: () => ({ title: 'Home2 — Stellie Intro' }) }
});

export const home2Method = defineType({
  name: 'home2Method', title: 'Home2 - Method', type: 'document',
  fields: [
    defineField({ name: 'visible', type: 'boolean', title: 'Visible', initialValue: true }),
    defineField({ name: 'title_fr', type: 'string', title: 'Title (FR)' }),
    defineField({ name: 'title_en', type: 'string', title: 'Title (EN)' }),
    defineField({ name: 'subtitle_fr', type: 'text', title: 'Subtitle (FR)' }),
    defineField({ name: 'subtitle_en', type: 'text', title: 'Subtitle (EN)' }),
    defineField({ name: 'cta_fr', type: 'string', title: 'Cta (FR)' }),
    defineField({ name: 'cta_en', type: 'string', title: 'Cta (EN)' }),
    defineField({
      name: 'cards', type: 'array', title: 'Cartes M/B/S',
      of: [defineField({ name: 'methodCard', type: 'object', fields: [
        defineField({ name: 'letter', type: 'string', title: 'Lettre' }),
        defineField({ name: 'title', type: 'string', title: 'Titre' }),
        defineField({ name: 'desc_fr', type: 'text', title: 'Description (FR)' }),
        defineField({ name: 'desc_en', type: 'text', title: 'Description (EN)' }),
      ]})]
    }),
  ],
  preview: { prepare: () => ({ title: 'Home2 — Method' }) }
});

export const home2Testimonials = defineType({
  name: 'home2Testimonials', title: 'Home2 - Testimonials', type: 'document',
  fields: [
    defineField({ name: 'visible', type: 'boolean', title: 'Visible', initialValue: true }),
    defineField({ name: 'title_fr', type: 'string', title: 'Title (FR)' }),
    defineField({ name: 'title_en', type: 'string', title: 'Title (EN)' }),
  ],
  preview: { prepare: () => ({ title: 'Home2 — Testimonials' }) }
});

export const home2CTA = defineType({
  name: 'home2CTA', title: 'Home2 - CTA', type: 'document',
  fields: [
    defineField({ name: 'visible', type: 'boolean', title: 'Visible', initialValue: true }),
    defineField({ name: 'title_fr', type: 'string', title: 'Title (FR)' }),
    defineField({ name: 'title_en', type: 'string', title: 'Title (EN)' }),
    defineField({ name: 'text1_fr', type: 'string', title: 'Text1 (FR)' }),
    defineField({ name: 'text1_en', type: 'string', title: 'Text1 (EN)' }),
    defineField({ name: 'text2_fr', type: 'string', title: 'Text2 (FR)' }),
    defineField({ name: 'text2_en', type: 'string', title: 'Text2 (EN)' }),
    defineField({ name: 'text3_fr', type: 'string', title: 'Text3 (FR)' }),
    defineField({ name: 'text3_en', type: 'string', title: 'Text3 (EN)' }),
    defineField({ name: 'cta_fr', type: 'string', title: 'Cta (FR)' }),
    defineField({ name: 'cta_en', type: 'string', title: 'Cta (EN)' }),
    defineField({ name: 'subline_fr', type: 'string', title: 'Subline (FR)' }),
    defineField({ name: 'subline_en', type: 'string', title: 'Subline (EN)' }),
  ],
  preview: { prepare: () => ({ title: 'Home2 — CTA' }) }
});
