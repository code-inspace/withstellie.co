import { defineType, defineField } from 'sanity';

export const aboutHeadline = defineType({
  name: 'aboutHeadline',
  title: 'About - Headline',
  type: 'object',
  fields: [
    defineField({ name: 'visible', type: 'boolean', title: 'Visible', initialValue: true }),
    defineField({ name: 'title_fr', type: 'string', title: 'Title (FR)' }),
    defineField({ name: 'title_en', type: 'string', title: 'Title (EN)' }),
    defineField({ name: 'subtitle_fr', type: 'string', title: 'Subtitle (FR)' }),
    defineField({ name: 'subtitle_en', type: 'string', title: 'Subtitle (EN)' }),
    defineField({ name: 'warningTitle_fr', type: 'string', title: 'Warningtitle (FR)' }),
    defineField({ name: 'warningTitle_en', type: 'string', title: 'Warningtitle (EN)' }),
    defineField({ name: 'warningText_fr', type: 'text', title: 'Warningtext (FR)' }),
    defineField({ name: 'warningText_en', type: 'text', title: 'Warningtext (EN)' }),
  ]
});

export const aboutBefore = defineType({
  name: 'aboutBefore',
  title: 'About - Before',
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
  ]
});

export const aboutTurningPoint = defineType({
  name: 'aboutTurningPoint',
  title: 'About - TurningPoint',
  type: 'object',
  fields: [
    defineField({ name: 'visible', type: 'boolean', title: 'Visible', initialValue: true }),
    defineField({ name: 'title_fr', type: 'string', title: 'Title (FR)' }),
    defineField({ name: 'title_en', type: 'string', title: 'Title (EN)' }),
    defineField({ name: 'text1_fr', type: 'string', title: 'Text1 (FR)' }),
    defineField({ name: 'text1_en', type: 'string', title: 'Text1 (EN)' }),
    defineField({ name: 'text2_fr', type: 'text', title: 'Text2 (FR)' }),
    defineField({ name: 'text2_en', type: 'text', title: 'Text2 (EN)' }),
    defineField({ name: 'text3_fr', type: 'text', title: 'Text3 (FR)' }),
    defineField({ name: 'text3_en', type: 'text', title: 'Text3 (EN)' }),
    defineField({ name: 'quote_fr', type: 'string', title: 'Quote (FR)' }),
    defineField({ name: 'quote_en', type: 'string', title: 'Quote (EN)' }),
  ]
});

export const aboutReconstruction = defineType({
  name: 'aboutReconstruction',
  title: 'About - Reconstruction',
  type: 'object',
  fields: [
    defineField({ name: 'visible', type: 'boolean', title: 'Visible', initialValue: true }),
    defineField({ name: 'title_fr', type: 'string', title: 'Title (FR)' }),
    defineField({ name: 'title_en', type: 'string', title: 'Title (EN)' }),
    defineField({ name: 'subtitle_fr', type: 'string', title: 'Subtitle (FR)' }),
    defineField({ name: 'subtitle_en', type: 'string', title: 'Subtitle (EN)' }),
    defineField({ name: 'text1_fr', type: 'text', title: 'Text1 (FR)' }),
    defineField({ name: 'text1_en', type: 'text', title: 'Text1 (EN)' }),
    defineField({ name: 'text2_fr', type: 'text', title: 'Text2 (FR)' }),
    defineField({ name: 'text2_en', type: 'text', title: 'Text2 (EN)' }),
    defineField({ name: 'text3_fr', type: 'text', title: 'Text3 (FR)' }),
    defineField({ name: 'text3_en', type: 'text', title: 'Text3 (EN)' }),
    defineField({ name: 'text4_fr', type: 'text', title: 'Text4 (FR)' }),
    defineField({ name: 'text4_en', type: 'text', title: 'Text4 (EN)' }),
  ]
});

export const aboutWhy = defineType({
  name: 'aboutWhy',
  title: 'About - Why',
  type: 'object',
  fields: [
    defineField({ name: 'visible', type: 'boolean', title: 'Visible', initialValue: true }),
    defineField({ name: 'title_fr', type: 'string', title: 'Title (FR)' }),
    defineField({ name: 'title_en', type: 'string', title: 'Title (EN)' }),
    defineField({ name: 'subtitle_fr', type: 'text', title: 'Subtitle (FR)' }),
    defineField({ name: 'subtitle_en', type: 'text', title: 'Subtitle (EN)' }),
    defineField({ name: 'text1_fr', type: 'text', title: 'Text1 (FR)' }),
    defineField({ name: 'text1_en', type: 'text', title: 'Text1 (EN)' }),
    defineField({ name: 'text2_fr', type: 'text', title: 'Text2 (FR)' }),
    defineField({ name: 'text2_en', type: 'text', title: 'Text2 (EN)' }),
  ]
});

export const aboutQuote = defineType({
  name: 'aboutQuote',
  title: 'About - Quote',
  type: 'object',
  fields: [
    defineField({ name: 'visible', type: 'boolean', title: 'Visible', initialValue: true }),
    defineField({ name: 'text1_fr', type: 'string', title: 'Text1 (FR)' }),
    defineField({ name: 'text1_en', type: 'string', title: 'Text1 (EN)' }),
    defineField({ name: 'text2_fr', type: 'string', title: 'Text2 (FR)' }),
    defineField({ name: 'text2_en', type: 'string', title: 'Text2 (EN)' }),
  ]
});

export const aboutMethod = defineType({
  name: 'aboutMethod',
  title: 'About - Method',
  type: 'object',
  fields: [
    defineField({ name: 'visible', type: 'boolean', title: 'Visible', initialValue: true }),
    defineField({ name: 'title_fr', type: 'string', title: 'Title (FR)' }),
    defineField({ name: 'title_en', type: 'string', title: 'Title (EN)' }),
    defineField({ name: 'subtitle_fr', type: 'string', title: 'Subtitle (FR)' }),
    defineField({ name: 'subtitle_en', type: 'string', title: 'Subtitle (EN)' }),
    defineField({ name: 'desc_fr', type: 'text', title: 'Desc (FR)' }),
    defineField({ name: 'desc_en', type: 'text', title: 'Desc (EN)' }),
    defineField({ name: 'cta_fr', type: 'string', title: 'Cta (FR)' }),
    defineField({ name: 'cta_en', type: 'string', title: 'Cta (EN)' }),
  ]
});

export const aboutCTA = defineType({
  name: 'aboutCTA',
  title: 'About - CTA',
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

export const pageAbout = defineType({
  name: 'pageAbout',
  title: 'Page: About',
  type: 'document',
  fields: [
    defineField({ name: 'aboutHeadline', type: 'aboutHeadline', title: 'aboutHeadline' }),
    defineField({ name: 'aboutBefore', type: 'aboutBefore', title: 'aboutBefore' }),
    defineField({ name: 'aboutTurningPoint', type: 'aboutTurningPoint', title: 'aboutTurningPoint' }),
    defineField({ name: 'aboutReconstruction', type: 'aboutReconstruction', title: 'aboutReconstruction' }),
    defineField({ name: 'aboutWhy', type: 'aboutWhy', title: 'aboutWhy' }),
    defineField({ name: 'aboutQuote', type: 'aboutQuote', title: 'aboutQuote' }),
    defineField({ name: 'aboutMethod', type: 'aboutMethod', title: 'aboutMethod' }),
    defineField({ name: 'aboutCTA', type: 'aboutCTA', title: 'aboutCTA' }),
  ],
  preview: {
    prepare: () => ({ title: 'AboutHeadline' })
  }
});
