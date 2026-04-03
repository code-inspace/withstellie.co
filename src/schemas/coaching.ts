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
    defineField({ name: 'labels_fr', type: 'string', title: 'Labels string (FR)' }),
    defineField({ name: 'labels_en', type: 'string', title: 'Labels string (EN)' }),
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
    defineField({ name: 'items_fr', type: 'array', title: 'Items (FR)', of: [{ type: 'string' }] }),
    defineField({ name: 'items_en', type: 'array', title: 'Items (EN)', of: [{ type: 'string' }] }),
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
    defineField({
      name: 'list',
      type: 'array',
      title: 'Offers List',
      of: [
        defineField({
          name: 'offerItem',
          type: 'object',
          fields: [
            defineField({ name: 'name', type: 'string', title: 'Name' }),
            defineField({ name: 'duration_fr', type: 'string', title: 'Duration (FR)' }),
            defineField({ name: 'duration_en', type: 'string', title: 'Duration (EN)' }),
            defineField({ name: 'price', type: 'string', title: 'Price' }),
            defineField({ name: 'subtitle_fr', type: 'string', title: 'Subtitle (FR)' }),
            defineField({ name: 'subtitle_en', type: 'string', title: 'Subtitle (EN)' }),
            defineField({ name: 'description_fr', type: 'text', title: 'Description (FR)' }),
            defineField({ name: 'description_en', type: 'text', title: 'Description (EN)' }),
            defineField({ name: 'features_fr', type: 'array', title: 'Features (FR)', of: [{ type: 'string' }] }),
            defineField({ name: 'features_en', type: 'array', title: 'Features (EN)', of: [{ type: 'string' }] }),
            defineField({ name: 'cta_fr', type: 'string', title: 'Cta (FR)' }),
            defineField({ name: 'cta_en', type: 'string', title: 'Cta (EN)' }),
            defineField({ name: 'highlighted', type: 'boolean', title: 'Highlighted', initialValue: false }),
          ]
        })
      ]
    })
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
    defineField({
      name: 'list',
      type: 'array',
      title: 'FAQ List',
      of: [
        defineField({
          name: 'faqItem',
          type: 'object',
          fields: [
            defineField({ name: 'q_fr', type: 'string', title: 'Question (FR)' }),
            defineField({ name: 'q_en', type: 'string', title: 'Question (EN)' }),
            defineField({ name: 'a_fr', type: 'text', title: 'Answer (FR)' }),
            defineField({ name: 'a_en', type: 'text', title: 'Answer (EN)' }),
          ]
        })
      ]
    })
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
    defineField({ name: 'subtitle_fr', type: 'string', title: 'Subtitle (FR)' }),
    defineField({ name: 'subtitle_en', type: 'string', title: 'Subtitle (EN)' }),
    defineField({ name: 'subline_fr', type: 'string', title: 'Subline (FR)' }),
    defineField({ name: 'subline_en', type: 'string', title: 'Subline (EN)' }),
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
