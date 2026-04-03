import { defineType, defineField } from 'sanity';

export const home3Hero = defineType({
  name: 'home3Hero',
  title: 'Home3 - Hero',
  type: 'object',
  fields: [
    defineField({ name: 'visible', type: 'boolean', title: 'Visible', initialValue: true }),
    defineField({ name: 'title_fr', type: 'string', title: 'Title (FR)' }),
    defineField({ name: 'title_en', type: 'string', title: 'Title (EN)' }),
    defineField({ name: 'subtitle_fr', type: 'text', title: 'Subtitle (FR)' }),
    defineField({ name: 'subtitle_en', type: 'text', title: 'Subtitle (EN)' }),
    defineField({ name: 'cta_fr', type: 'string', title: 'Cta (FR)' }),
    defineField({ name: 'cta_en', type: 'string', title: 'Cta (EN)' }),
    defineField({ name: 'backgroundImage', type: 'image', title: 'Backgroundimage', options: { hotspot: true } }),
  ]
});

export const home3Hook = defineType({
  name: 'home3Hook',
  title: 'Home3 - Hook',
  type: 'object',
  fields: [
    defineField({ name: 'visible', type: 'boolean', title: 'Visible', initialValue: true }),
    defineField({ name: 'quote_fr', type: 'text', title: 'Quote (FR)' }),
    defineField({ name: 'quote_en', type: 'text', title: 'Quote (EN)' }),
    defineField({ name: 'author_fr', type: 'string', title: 'Author (FR)' }),
    defineField({ name: 'author_en', type: 'string', title: 'Author (EN)' }),
  ]
});

export const home3Presentation = defineType({
  name: 'home3Presentation',
  title: 'Home3 - Presentation',
  type: 'object',
  fields: [
    defineField({ name: 'visible', type: 'boolean', title: 'Visible', initialValue: true }),
    defineField({ name: 'title_fr', type: 'string', title: 'Title (FR)' }),
    defineField({ name: 'title_en', type: 'string', title: 'Title (EN)' }),
    defineField({ name: 'text1_fr', type: 'text', title: 'Text1 (FR)' }),
    defineField({ name: 'text1_en', type: 'text', title: 'Text1 (EN)' }),
    defineField({ name: 'text2_fr', type: 'text', title: 'Text2 (FR)' }),
    defineField({ name: 'text2_en', type: 'text', title: 'Text2 (EN)' }),
  ]
});

export const home3Focus = defineType({
  name: 'home3Focus',
  title: 'Home3 - Focus',
  type: 'object',
  fields: [
    defineField({ name: 'visible', type: 'boolean', title: 'Visible', initialValue: true }),
    defineField({ name: 'title_fr', type: 'string', title: 'Title (FR)' }),
    defineField({ name: 'title_en', type: 'string', title: 'Title (EN)' }),
  ]
});

export const home3Method = defineType({
  name: 'home3Method',
  title: 'Home3 - Method',
  type: 'object',
  fields: [
    defineField({ name: 'visible', type: 'boolean', title: 'Visible', initialValue: true }),
    defineField({ name: 'title_fr', type: 'string', title: 'Title (FR)' }),
    defineField({ name: 'title_en', type: 'string', title: 'Title (EN)' }),
    defineField({ name: 'subtitle_fr', type: 'text', title: 'Subtitle (FR)' }),
    defineField({ name: 'subtitle_en', type: 'text', title: 'Subtitle (EN)' }),
  ]
});

export const home3Testimonials = defineType({
  name: 'home3Testimonials',
  title: 'Home3 - Testimonials',
  type: 'object',
  fields: [
    defineField({ name: 'visible', type: 'boolean', title: 'Visible', initialValue: true }),
    defineField({ name: 'title_fr', type: 'string', title: 'Title (FR)' }),
    defineField({ name: 'title_en', type: 'string', title: 'Title (EN)' }),
  ]
});

export const home3CTA = defineType({
  name: 'home3CTA',
  title: 'Home3 - CTA',
  type: 'object',
  fields: [
    defineField({ name: 'visible', type: 'boolean', title: 'Visible', initialValue: true }),
    defineField({ name: 'title_fr', type: 'string', title: 'Title (FR)' }),
    defineField({ name: 'title_en', type: 'string', title: 'Title (EN)' }),
    defineField({ name: 'cta_fr', type: 'string', title: 'Cta (FR)' }),
    defineField({ name: 'cta_en', type: 'string', title: 'Cta (EN)' }),
  ]
});

export const home3Pricing = defineType({
  name: 'home3Pricing',
  title: 'Home3 - Pricing',
  type: 'object',
  fields: [
    defineField({ name: 'visible', type: 'boolean', title: 'Visible', initialValue: true }),
    defineField({ name: 'title_fr', type: 'string', title: 'Title (FR)' }),
    defineField({ name: 'title_en', type: 'string', title: 'Title (EN)' }),
  ]
});

export const home3FAQ = defineType({
  name: 'home3FAQ',
  title: 'Home3 - FAQ',
  type: 'object',
  fields: [
    defineField({ name: 'visible', type: 'boolean', title: 'Visible', initialValue: true }),
    defineField({ name: 'title_fr', type: 'string', title: 'Title (FR)' }),
    defineField({ name: 'title_en', type: 'string', title: 'Title (EN)' }),
  ]
});

export const home3CTA2 = defineType({
  name: 'home3CTA2',
  title: 'Home3 - CTA2',
  type: 'object',
  fields: [
    defineField({ name: 'visible', type: 'boolean', title: 'Visible', initialValue: true }),
    defineField({ name: 'title_fr', type: 'string', title: 'Title (FR)' }),
    defineField({ name: 'title_en', type: 'string', title: 'Title (EN)' }),
    defineField({ name: 'subtitle_fr', type: 'string', title: 'Subtitle (FR)' }),
    defineField({ name: 'subtitle_en', type: 'string', title: 'Subtitle (EN)' }),
    defineField({ name: 'cta_fr', type: 'string', title: 'Cta (FR)' }),
    defineField({ name: 'cta_en', type: 'string', title: 'Cta (EN)' }),
  ]
});

export const home3About = defineType({
  name: 'home3About',
  title: 'Home3 - About',
  type: 'object',
  fields: [
    defineField({ name: 'visible', type: 'boolean', title: 'Visible', initialValue: true }),
    defineField({ name: 'title_fr', type: 'string', title: 'Title (FR)' }),
    defineField({ name: 'title_en', type: 'string', title: 'Title (EN)' }),
    defineField({ name: 'desc_fr', type: 'text', title: 'Desc (FR)' }),
    defineField({ name: 'desc_en', type: 'text', title: 'Desc (EN)' }),
    defineField({ name: 'cta_fr', type: 'string', title: 'Cta (FR)' }),
    defineField({ name: 'cta_en', type: 'string', title: 'Cta (EN)' }),
  ]
});

export const pageHome3 = defineType({
  name: 'pageHome3',
  title: 'Page: Home3',
  type: 'document',
  fields: [
    defineField({ name: 'home3Hero', type: 'home3Hero', title: 'home3Hero' }),
    defineField({ name: 'home3Hook', type: 'home3Hook', title: 'home3Hook' }),
    defineField({ name: 'home3Presentation', type: 'home3Presentation', title: 'home3Presentation' }),
    defineField({ name: 'home3Focus', type: 'home3Focus', title: 'home3Focus' }),
    defineField({ name: 'home3Method', type: 'home3Method', title: 'home3Method' }),
    defineField({ name: 'home3Testimonials', type: 'home3Testimonials', title: 'home3Testimonials' }),
    defineField({ name: 'home3CTA', type: 'home3CTA', title: 'home3CTA' }),
    defineField({ name: 'home3Pricing', type: 'home3Pricing', title: 'home3Pricing' }),
    defineField({ name: 'home3FAQ', type: 'home3FAQ', title: 'home3FAQ' }),
    defineField({ name: 'home3CTA2', type: 'home3CTA2', title: 'home3CTA2' }),
    defineField({ name: 'home3About', type: 'home3About', title: 'home3About' }),
  ]
});
