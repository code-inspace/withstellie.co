import { defineType, defineField } from 'sanity';

export const aboutHeadline = defineType({
  name: 'aboutHeadline', title: 'About - Headline', type: 'document',
  fields: [
    defineField({ name: 'visible', type: 'boolean', title: 'Visible', initialValue: true }),
    defineField({ name: 'title_fr', type: 'string', title: 'Title (FR)' }),
    defineField({ name: 'title_en', type: 'string', title: 'Title (EN)' }),
    defineField({ name: 'subtitle_fr', type: 'string', title: 'Subtitle (FR)' }),
    defineField({ name: 'subtitle_en', type: 'string', title: 'Subtitle (EN)' }),
    defineField({ name: 'warningTitle_fr', type: 'string', title: 'Warning Title (FR)' }),
    defineField({ name: 'warningTitle_en', type: 'string', title: 'Warning Title (EN)' }),
    defineField({ name: 'warningText_fr', type: 'text', title: 'Warning Text (FR)' }),
    defineField({ name: 'warningText_en', type: 'text', title: 'Warning Text (EN)' }),
    defineField({ name: 'backgroundImage', type: 'image', title: 'Background Image', options: { hotspot: true } }),
  ],
  preview: { prepare: () => ({ title: 'About — Headline' }) }
});

export const aboutBefore = defineType({
  name: 'aboutBefore', title: 'About - Before', type: 'document',
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
  ],
  preview: { prepare: () => ({ title: 'About — Before' }) }
});

export const aboutTurningPoint = defineType({
  name: 'aboutTurningPoint', title: 'About - Turning Point', type: 'document',
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
    defineField({ name: 'backgroundImage', type: 'image', title: 'Background Image', options: { hotspot: true } }),
  ],
  preview: { prepare: () => ({ title: 'About — Turning Point' }) }
});

export const aboutReconstruction = defineType({
  name: 'aboutReconstruction', title: 'About - Reconstruction', type: 'document',
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
  ],
  preview: { prepare: () => ({ title: 'About — Reconstruction' }) }
});

export const aboutWhy = defineType({
  name: 'aboutWhy', title: 'About - Why', type: 'document',
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
  ],
  preview: { prepare: () => ({ title: 'About — Why' }) }
});

export const aboutQuote = defineType({
  name: 'aboutQuote', title: 'About - Quote', type: 'document',
  fields: [
    defineField({ name: 'visible', type: 'boolean', title: 'Visible', initialValue: true }),
    defineField({ name: 'text1_fr', type: 'string', title: 'Text1 (FR)' }),
    defineField({ name: 'text1_en', type: 'string', title: 'Text1 (EN)' }),
    defineField({ name: 'text2_fr', type: 'string', title: 'Text2 (FR)' }),
    defineField({ name: 'text2_en', type: 'string', title: 'Text2 (EN)' }),
    defineField({ name: 'backgroundImage', type: 'image', title: 'Background Image', options: { hotspot: true } }),
  ],
  preview: { prepare: () => ({ title: 'About — Quote' }) }
});

export const aboutMethod = defineType({
  name: 'aboutMethod', title: 'About - Method', type: 'document',
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
  ],
  preview: { prepare: () => ({ title: 'About — Method' }) }
});

export const aboutCTA = defineType({
  name: 'aboutCTA', title: 'About - CTA', type: 'document',
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
  preview: { prepare: () => ({ title: 'About — CTA' }) }
});
