import { defineType, defineField } from 'sanity';

export const accueil2Hero = defineType({
  name: 'accueil2Hero',
  title: 'Accueil2 - Hero',
  type: 'object',
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
    defineField({ name: 'backgroundImage', type: 'image', title: 'Backgroundimage', options: { hotspot: true } }),
  ]
});

export const accueil2StellieIntro = defineType({
  name: 'accueil2StellieIntro',
  title: 'Accueil2 - StellieIntro',
  type: 'object',
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
  ]
});

export const accueil2Method = defineType({
  name: 'accueil2Method',
  title: 'Accueil2 - Method',
  type: 'object',
  fields: [
    defineField({ name: 'visible', type: 'boolean', title: 'Visible', initialValue: true }),
    defineField({ name: 'title_fr', type: 'string', title: 'Title (FR)' }),
    defineField({ name: 'title_en', type: 'string', title: 'Title (EN)' }),
    defineField({ name: 'subtitle_fr', type: 'text', title: 'Subtitle (FR)' }),
    defineField({ name: 'subtitle_en', type: 'text', title: 'Subtitle (EN)' }),
    defineField({ name: 'cta_fr', type: 'string', title: 'Cta (FR)' }),
    defineField({ name: 'cta_en', type: 'string', title: 'Cta (EN)' }),
  ]
});

export const accueil2Testimonials = defineType({
  name: 'accueil2Testimonials',
  title: 'Accueil2 - Testimonials',
  type: 'object',
  fields: [
    defineField({ name: 'visible', type: 'boolean', title: 'Visible', initialValue: true }),
    defineField({ name: 'title_fr', type: 'string', title: 'Title (FR)' }),
    defineField({ name: 'title_en', type: 'string', title: 'Title (EN)' }),
  ]
});

export const accueil2CTA = defineType({
  name: 'accueil2CTA',
  title: 'Accueil2 - CTA',
  type: 'object',
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
  ]
});

export const pageAccueil2 = defineType({
  name: 'pageAccueil2',
  title: 'Page: Accueil2',
  type: 'document',
  fields: [
    defineField({ name: 'accueil2Hero', type: 'accueil2Hero', title: 'accueil2Hero' }),
    defineField({ name: 'accueil2StellieIntro', type: 'accueil2StellieIntro', title: 'accueil2StellieIntro' }),
    defineField({ name: 'accueil2Method', type: 'accueil2Method', title: 'accueil2Method' }),
    defineField({ name: 'accueil2Testimonials', type: 'accueil2Testimonials', title: 'accueil2Testimonials' }),
    defineField({ name: 'accueil2CTA', type: 'accueil2CTA', title: 'accueil2CTA' }),
  ]
});
