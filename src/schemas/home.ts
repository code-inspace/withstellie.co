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

export const homeAbout = defineType({
  name: 'homeAbout', title: 'Home - About', type: 'document',
  fields: [
    defineField({ name: 'visible', type: 'boolean', title: 'Visible', initialValue: true }),
    defineField({ name: 'title_fr', type: 'string', title: 'Title (FR)' }),
    defineField({ name: 'title_en', type: 'string', title: 'Title (EN)' }),
    defineField({ name: 'desc_fr', type: 'text', title: 'Desc (FR)' }),
    defineField({ name: 'desc_en', type: 'text', title: 'Desc (EN)' }),
    defineField({ name: 'image', type: 'image', title: 'Portrait Image', options: { hotspot: true } }),
    defineField({ name: 'cta_fr', type: 'string', title: 'Cta (FR)' }),
    defineField({ name: 'cta_en', type: 'string', title: 'Cta (EN)' }),
  ],
  preview: { prepare: () => ({ title: 'Home — About' }) }
});

export const homeReprogrammation = defineType({
  name: 'homeReprogrammation', title: 'Home - Reprogrammation', type: 'document',
  fields: [
    defineField({ name: 'visible', type: 'boolean', title: 'Visible', initialValue: true }),
    defineField({ name: 'title_fr', type: 'string', title: 'Title (FR)' }),
    defineField({ name: 'title_en', type: 'string', title: 'Title (EN)' }),
    defineField({ name: 'subtitle_fr', type: 'string', title: 'Subtitle (FR)' }),
    defineField({ name: 'subtitle_en', type: 'string', title: 'Subtitle (EN)' }),
    defineField({ name: 'text1_fr', type: 'text', title: 'Text 1 (FR)' }),
    defineField({ name: 'text1_en', type: 'text', title: 'Text 1 (EN)' }),
    defineField({ name: 'text2_fr', type: 'text', title: 'Text 2 (FR)' }),
    defineField({ name: 'text2_en', type: 'text', title: 'Text 2 (EN)' }),
    defineField({ name: 'text3_fr', type: 'text', title: 'Text 3 (FR)' }),
    defineField({ name: 'text3_en', type: 'text', title: 'Text 3 (EN)' }),
  ],
  preview: { prepare: () => ({ title: 'Home — Reprogrammation' }) }
});
