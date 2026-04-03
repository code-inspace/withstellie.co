import { defineType, defineField } from 'sanity';

export const accompagnementHeadline = defineType({
  name: 'accompagnementHeadline',
  title: 'Accompagnement - Headline',
  type: 'object',
  fields: [
    defineField({ name: 'visible', type: 'boolean', title: 'Visible', initialValue: true }),
    defineField({ name: 'eyebrow_fr', type: 'string', title: 'Eyebrow (FR)' }),
    defineField({ name: 'eyebrow_en', type: 'string', title: 'Eyebrow (EN)' }),
    defineField({ name: 'title_fr', type: 'string', title: 'Title (FR)' }),
    defineField({ name: 'title_en', type: 'string', title: 'Title (EN)' }),
    defineField({ name: 'subtitle_fr', type: 'text', title: 'Subtitle (FR)' }),
    defineField({ name: 'subtitle_en', type: 'text', title: 'Subtitle (EN)' }),
  ]
});

export const accompagnementMethodMBS = defineType({
  name: 'accompagnementMethodMBS',
  title: 'Accompagnement - MethodMBS',
  type: 'object',
  fields: [
    defineField({ name: 'visible', type: 'boolean', title: 'Visible', initialValue: true }),
    defineField({ name: 'title_fr', type: 'string', title: 'Title (FR)' }),
    defineField({ name: 'title_en', type: 'string', title: 'Title (EN)' }),
    defineField({ name: 'subtitle_fr', type: 'text', title: 'Subtitle (FR)' }),
    defineField({ name: 'subtitle_en', type: 'text', title: 'Subtitle (EN)' }),
  ]
});

export const accompagnementForWho = defineType({
  name: 'accompagnementForWho',
  title: 'Accompagnement - ForWho',
  type: 'object',
  fields: [
    defineField({ name: 'visible', type: 'boolean', title: 'Visible', initialValue: true }),
    defineField({ name: 'title_fr', type: 'string', title: 'Title (FR)' }),
    defineField({ name: 'title_en', type: 'string', title: 'Title (EN)' }),
    defineField({ name: 'subtitle_fr', type: 'string', title: 'Subtitle (FR)' }),
    defineField({ name: 'subtitle_en', type: 'string', title: 'Subtitle (EN)' }),
    defineField({ name: 'desc_fr', type: 'text', title: 'Desc (FR)' }),
    defineField({ name: 'desc_en', type: 'text', title: 'Desc (EN)' }),
  ]
});

export const accompagnementTestimonials = defineType({
  name: 'accompagnementTestimonials',
  title: 'Accompagnement - Testimonials',
  type: 'object',
  fields: [
    defineField({ name: 'visible', type: 'boolean', title: 'Visible', initialValue: true }),
    defineField({ name: 'title_fr', type: 'string', title: 'Title (FR)' }),
    defineField({ name: 'title_en', type: 'string', title: 'Title (EN)' }),
  ]
});

export const accompagnementOffers = defineType({
  name: 'accompagnementOffers',
  title: 'Accompagnement - Offers',
  type: 'object',
  fields: [
    defineField({ name: 'visible', type: 'boolean', title: 'Visible', initialValue: true }),
    defineField({ name: 'title_fr', type: 'string', title: 'Title (FR)' }),
    defineField({ name: 'title_en', type: 'string', title: 'Title (EN)' }),
    defineField({ name: 'subtitle_fr', type: 'text', title: 'Subtitle (FR)' }),
    defineField({ name: 'subtitle_en', type: 'text', title: 'Subtitle (EN)' }),
  ]
});

export const accompagnementFAQ = defineType({
  name: 'accompagnementFAQ',
  title: 'Accompagnement - FAQ',
  type: 'object',
  fields: [
    defineField({ name: 'visible', type: 'boolean', title: 'Visible', initialValue: true }),
    defineField({ name: 'title_fr', type: 'string', title: 'Title (FR)' }),
    defineField({ name: 'title_en', type: 'string', title: 'Title (EN)' }),
  ]
});

export const accompagnementDiscoveryCall = defineType({
  name: 'accompagnementDiscoveryCall',
  title: 'Accompagnement - DiscoveryCall',
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

export const pageAccompagnement = defineType({
  name: 'pageAccompagnement',
  title: 'Page: Accompagnement',
  type: 'document',
  fields: [
    defineField({ name: 'accompagnementHeadline', type: 'accompagnementHeadline', title: 'accompagnementHeadline' }),
    defineField({ name: 'accompagnementMethodMBS', type: 'accompagnementMethodMBS', title: 'accompagnementMethodMBS' }),
    defineField({ name: 'accompagnementForWho', type: 'accompagnementForWho', title: 'accompagnementForWho' }),
    defineField({ name: 'accompagnementTestimonials', type: 'accompagnementTestimonials', title: 'accompagnementTestimonials' }),
    defineField({ name: 'accompagnementOffers', type: 'accompagnementOffers', title: 'accompagnementOffers' }),
    defineField({ name: 'accompagnementFAQ', type: 'accompagnementFAQ', title: 'accompagnementFAQ' }),
    defineField({ name: 'accompagnementDiscoveryCall', type: 'accompagnementDiscoveryCall', title: 'accompagnementDiscoveryCall' }),
  ]
});
