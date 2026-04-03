import { defineType, defineField } from 'sanity';

export const coachingHeadline = defineType({
  name: 'coachingHeadline',
  title: 'Coaching - Headline',
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

export const coachingMethodMBS = defineType({
  name: 'coachingMethodMBS',
  title: 'Coaching - MethodMBS',
  type: 'object',
  fields: [
    defineField({ name: 'visible', type: 'boolean', title: 'Visible', initialValue: true }),
    defineField({ name: 'title_fr', type: 'string', title: 'Title (FR)' }),
    defineField({ name: 'title_en', type: 'string', title: 'Title (EN)' }),
    defineField({ name: 'subtitle_fr', type: 'text', title: 'Subtitle (FR)' }),
    defineField({ name: 'subtitle_en', type: 'text', title: 'Subtitle (EN)' }),
  ]
});

export const coachingForWho = defineType({
  name: 'coachingForWho',
  title: 'Coaching - ForWho',
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

export const coachingTestimonials = defineType({
  name: 'coachingTestimonials',
  title: 'Coaching - Testimonials',
  type: 'object',
  fields: [
    defineField({ name: 'visible', type: 'boolean', title: 'Visible', initialValue: true }),
    defineField({ name: 'title_fr', type: 'string', title: 'Title (FR)' }),
    defineField({ name: 'title_en', type: 'string', title: 'Title (EN)' }),
  ]
});

export const coachingOffers = defineType({
  name: 'coachingOffers',
  title: 'Coaching - Offers',
  type: 'object',
  fields: [
    defineField({ name: 'visible', type: 'boolean', title: 'Visible', initialValue: true }),
    defineField({ name: 'title_fr', type: 'string', title: 'Title (FR)' }),
    defineField({ name: 'title_en', type: 'string', title: 'Title (EN)' }),
    defineField({ name: 'subtitle_fr', type: 'text', title: 'Subtitle (FR)' }),
    defineField({ name: 'subtitle_en', type: 'text', title: 'Subtitle (EN)' }),
  ]
});

export const coachingFAQ = defineType({
  name: 'coachingFAQ',
  title: 'Coaching - FAQ',
  type: 'object',
  fields: [
    defineField({ name: 'visible', type: 'boolean', title: 'Visible', initialValue: true }),
    defineField({ name: 'title_fr', type: 'string', title: 'Title (FR)' }),
    defineField({ name: 'title_en', type: 'string', title: 'Title (EN)' }),
  ]
});

export const coachingDiscoveryCall = defineType({
  name: 'coachingDiscoveryCall',
  title: 'Coaching - DiscoveryCall',
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

export const pageCoaching = defineType({
  name: 'pageCoaching',
  title: 'Page: Coaching',
  type: 'document',
  fields: [
    defineField({ name: 'coachingHeadline', type: 'coachingHeadline', title: 'coachingHeadline' }),
    defineField({ name: 'coachingMethodMBS', type: 'coachingMethodMBS', title: 'coachingMethodMBS' }),
    defineField({ name: 'coachingForWho', type: 'coachingForWho', title: 'coachingForWho' }),
    defineField({ name: 'coachingTestimonials', type: 'coachingTestimonials', title: 'coachingTestimonials' }),
    defineField({ name: 'coachingOffers', type: 'coachingOffers', title: 'coachingOffers' }),
    defineField({ name: 'coachingFAQ', type: 'coachingFAQ', title: 'coachingFAQ' }),
    defineField({ name: 'coachingDiscoveryCall', type: 'coachingDiscoveryCall', title: 'coachingDiscoveryCall' }),
  ],
  preview: {
    prepare: () => ({ title: 'CoachingHeadline' })
  }
});
