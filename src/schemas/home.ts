import { defineType, defineField } from 'sanity';

export const homeHero = defineType({
  name: 'homeHero',
  title: 'Home - Hero',
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

export const homeHook = defineType({
  name: 'homeHook',
  title: 'Home - Hook',
  type: 'object',
  fields: [
    defineField({ name: 'visible', type: 'boolean', title: 'Visible', initialValue: true }),
    defineField({ name: 'quote_fr', type: 'text', title: 'Quote (FR)' }),
    defineField({ name: 'quote_en', type: 'text', title: 'Quote (EN)' }),
    defineField({ name: 'author_fr', type: 'string', title: 'Author (FR)' }),
    defineField({ name: 'author_en', type: 'string', title: 'Author (EN)' }),
  ]
});

export const homePresentation = defineType({
  name: 'homePresentation',
  title: 'Home - Presentation',
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

export const homeFocus = defineType({
  name: 'homeFocus',
  title: 'Home - Focus',
  type: 'object',
  fields: [
    defineField({ name: 'visible', type: 'boolean', title: 'Visible', initialValue: true }),
    defineField({ name: 'title_fr', type: 'string', title: 'Title (FR)' }),
    defineField({ name: 'title_en', type: 'string', title: 'Title (EN)' }),
  ]
});

export const homeMethod = defineType({
  name: 'homeMethod',
  title: 'Home - Method',
  type: 'object',
  fields: [
    defineField({ name: 'visible', type: 'boolean', title: 'Visible', initialValue: true }),
    defineField({ name: 'title_fr', type: 'string', title: 'Title (FR)' }),
    defineField({ name: 'title_en', type: 'string', title: 'Title (EN)' }),
    defineField({ name: 'subtitle_fr', type: 'text', title: 'Subtitle (FR)' }),
    defineField({ name: 'subtitle_en', type: 'text', title: 'Subtitle (EN)' }),
  ]
});

export const homeTestimonials = defineType({
  name: 'homeTestimonials',
  title: 'Home - Testimonials',
  type: 'object',
  fields: [
    defineField({ name: 'visible', type: 'boolean', title: 'Visible', initialValue: true }),
    defineField({ name: 'title_fr', type: 'string', title: 'Title (FR)' }),
    defineField({ name: 'title_en', type: 'string', title: 'Title (EN)' }),
    defineField({
      name: 'list',
      type: 'array',
      title: 'Testimonials List',
      of: [
        defineField({
          name: 'testimonialItem',
          type: 'object',
          fields: [
            defineField({ name: 'quote_fr', type: 'text', title: 'Quote (FR)' }),
            defineField({ name: 'quote_en', type: 'text', title: 'Quote (EN)' }),
            defineField({ name: 'author', type: 'string', title: 'Author Name' }),
            defineField({ name: 'age_fr', type: 'string', title: 'Age (FR)' }),
            defineField({ name: 'age_en', type: 'string', title: 'Age (EN)' }),
            defineField({ name: 'role_fr', type: 'string', title: 'Role (FR)' }),
            defineField({ name: 'role_en', type: 'string', title: 'Role (EN)' }),
          ]
        })
      ]
    })
  ]
});

export const homeCTA = defineType({
  name: 'homeCTA',
  title: 'Home - CTA',
  type: 'object',
  fields: [
    defineField({ name: 'visible', type: 'boolean', title: 'Visible', initialValue: true }),
    defineField({ name: 'title_fr', type: 'string', title: 'Title (FR)' }),
    defineField({ name: 'title_en', type: 'string', title: 'Title (EN)' }),
    defineField({ name: 'cta_fr', type: 'string', title: 'Cta (FR)' }),
    defineField({ name: 'cta_en', type: 'string', title: 'Cta (EN)' }),
  ]
});

export const homePricing = defineType({
  name: 'homePricing',
  title: 'Home - Pricing',
  type: 'object',
  fields: [
    defineField({ name: 'visible', type: 'boolean', title: 'Visible', initialValue: true }),
    defineField({ name: 'title_fr', type: 'string', title: 'Title (FR)' }),
    defineField({ name: 'title_en', type: 'string', title: 'Title (EN)' }),
  ]
});

export const homeFAQ = defineType({
  name: 'homeFAQ',
  title: 'Home - FAQ',
  type: 'object',
  fields: [
    defineField({ name: 'visible', type: 'boolean', title: 'Visible', initialValue: true }),
    defineField({ name: 'title_fr', type: 'string', title: 'Title (FR)' }),
    defineField({ name: 'title_en', type: 'string', title: 'Title (EN)' }),
  ]
});

export const homeCTA2 = defineType({
  name: 'homeCTA2',
  title: 'Home - CTA2',
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

export const homeAbout = defineType({
  name: 'homeAbout',
  title: 'Home - About',
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

export const pageHome = defineType({
  name: 'pageHome',
  title: 'Page: Home',
  type: 'document',
  fields: [
    defineField({ name: 'homeHero', type: 'homeHero', title: 'homeHero' }),
    defineField({ name: 'homeHook', type: 'homeHook', title: 'homeHook' }),
    defineField({ name: 'homePresentation', type: 'homePresentation', title: 'homePresentation' }),
    defineField({ name: 'homeFocus', type: 'homeFocus', title: 'homeFocus' }),
    defineField({ name: 'homeMethod', type: 'homeMethod', title: 'homeMethod' }),
    defineField({ name: 'homeTestimonials', type: 'homeTestimonials', title: 'homeTestimonials' }),
    defineField({ name: 'homeCTA', type: 'homeCTA', title: 'homeCTA' }),
    defineField({ name: 'homePricing', type: 'homePricing', title: 'homePricing' }),
    defineField({ name: 'homeFAQ', type: 'homeFAQ', title: 'homeFAQ' }),
    defineField({ name: 'homeCTA2', type: 'homeCTA2', title: 'homeCTA2' }),
    defineField({ name: 'homeAbout', type: 'homeAbout', title: 'homeAbout' }),
  ],
  preview: {
    prepare: () => ({ title: 'HomeHero' })
  }
});
