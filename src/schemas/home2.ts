import { defineType, defineField } from 'sanity';

export const home2Hero = defineType({
  name: 'home2Hero',
  title: 'Home2 - Hero',
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

export const home2StellieIntro = defineType({
  name: 'home2StellieIntro',
  title: 'Home2 - StellieIntro',
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

export const home2Method = defineType({
  name: 'home2Method',
  title: 'Home2 - Method',
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

export const home2Testimonials = defineType({
  name: 'home2Testimonials',
  title: 'Home2 - Testimonials',
  type: 'object',
  fields: [
    defineField({ name: 'visible', type: 'boolean', title: 'Visible', initialValue: true }),
    defineField({ name: 'title_fr', type: 'string', title: 'Title (FR)' }),
    defineField({ name: 'title_en', type: 'string', title: 'Title (EN)' }),
  ]
});

export const home2CTA = defineType({
  name: 'home2CTA',
  title: 'Home2 - CTA',
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

export const pageHome2 = defineType({
  name: 'pageHome2',
  title: 'Page: Home2',
  type: 'document',
  fields: [
    defineField({ name: 'home2Hero', type: 'home2Hero', title: 'home2Hero' }),
    defineField({ name: 'home2StellieIntro', type: 'home2StellieIntro', title: 'home2StellieIntro' }),
    defineField({ name: 'home2Method', type: 'home2Method', title: 'home2Method' }),
    defineField({ name: 'home2Testimonials', type: 'home2Testimonials', title: 'home2Testimonials' }),
    defineField({ name: 'home2CTA', type: 'home2CTA', title: 'home2CTA' }),
  ]
});
