import { defineType, defineField } from 'sanity';

export const coachingHeadline = defineType({
  name: 'coachingHeadline',
  title: 'Coaching - Headline',
  type: 'document',
  fields: [
    defineField({ name: 'visible', type: 'boolean', title: 'Visible', initialValue: true }),
    defineField({ name: 'eyebrow_fr', type: 'string', title: 'Eyebrow (FR)' }),
    defineField({ name: 'eyebrow_en', type: 'string', title: 'Eyebrow (EN)' }),
    defineField({ name: 'title_fr', type: 'string', title: 'Title (FR)' }),
    defineField({ name: 'title_en', type: 'string', title: 'Title (EN)' }),
    defineField({ name: 'subtitle_fr', type: 'text', title: 'Subtitle (FR)' }),
    defineField({ name: 'subtitle_en', type: 'text', title: 'Subtitle (EN)' }),
  ],
  preview: { prepare: () => ({ title: 'Coaching — Headline' }) }
});

export const coachingMethodMBS = defineType({
  name: 'coachingMethodMBS',
  title: 'Coaching - Méthode MBS',
  type: 'document',
  fields: [
    defineField({ name: 'visible', type: 'boolean', title: 'Visible', initialValue: true }),
    defineField({ name: 'title_fr', type: 'string', title: 'Title (FR)' }),
    defineField({ name: 'title_en', type: 'string', title: 'Title (EN)' }),
    defineField({ name: 'subtitle_fr', type: 'text', title: 'Subtitle (FR)' }),
    defineField({ name: 'subtitle_en', type: 'text', title: 'Subtitle (EN)' }),
    defineField({ name: 'labels_fr', type: 'string', title: 'Labels string (FR)' }),
    defineField({ name: 'labels_en', type: 'string', title: 'Labels string (EN)' }),
    defineField({
      name: 'dimensions',
      type: 'array',
      title: 'Dimensions (Mind / Body / Soul)',
      of: [
        defineField({
          name: 'dimensionItem',
          type: 'object',
          fields: [
            defineField({ name: 'title', type: 'string', title: 'Title' }),
            defineField({ name: 'desc_fr', type: 'text', title: 'Description (FR)' }),
            defineField({ name: 'desc_en', type: 'text', title: 'Description (EN)' }),
          ]
        })
      ]
    }),
    defineField({ name: 'backgroundImage', type: 'image', title: 'Background Image', options: { hotspot: true } }),
  ],
  preview: { prepare: () => ({ title: 'Coaching — Méthode MBS' }) }
});

export const coachingForWho = defineType({
  name: 'coachingForWho',
  title: 'Coaching - Pour qui ?',
  type: 'document',
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
    defineField({ name: 'backgroundImage', type: 'image', title: 'Background Image', options: { hotspot: true } }),
  ],
  preview: { prepare: () => ({ title: 'Coaching — Pour qui ?' }) }
});

export const coachingTestimonials = defineType({
  name: 'coachingTestimonials',
  title: 'Coaching - Témoignages',
  type: 'document',
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
            defineField({ name: 'author_fr', type: 'string', title: 'Author (FR)' }),
            defineField({ name: 'author_en', type: 'string', title: 'Author (EN)' }),
            defineField({ name: 'role_fr', type: 'string', title: 'Role (FR)' }),
            defineField({ name: 'role_en', type: 'string', title: 'Role (EN)' }),
          ]
        })
      ]
    }),
    defineField({ name: 'backgroundImage', type: 'image', title: 'Background Image', options: { hotspot: true } }),
  ],
  preview: { prepare: () => ({ title: 'Coaching — Témoignages' }) }
});

export const coachingOffers = defineType({
  name: 'coachingOffers',
  title: 'Coaching - Offres',
  type: 'document',
  fields: [
    defineField({ name: 'visible', type: 'boolean', title: 'Visible', initialValue: true }),
    defineField({ name: 'title_fr', type: 'string', title: 'Title (FR)' }),
    defineField({ name: 'title_en', type: 'string', title: 'Title (EN)' }),
    defineField({ name: 'subtitle_fr', type: 'text', title: 'Subtitle (FR)' }),
    defineField({ name: 'subtitle_en', type: 'text', title: 'Subtitle (EN)' }),
    defineField({ name: 'featuresLabel_fr', type: 'string', title: 'Features Label (FR)' }),
    defineField({ name: 'featuresLabel_en', type: 'string', title: 'Features Label (EN)' }),
    defineField({ name: 'startingAt_fr', type: 'string', title: 'Starting At Label (FR)' }),
    defineField({ name: 'startingAt_en', type: 'string', title: 'Starting At Label (EN)' }),
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
  ],
  preview: { prepare: () => ({ title: 'Coaching — Offres' }) }
});

export const coachingFAQ = defineType({
  name: 'coachingFAQ',
  title: 'Coaching - FAQ',
  type: 'document',
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
  ],
  preview: { prepare: () => ({ title: 'Coaching — FAQ' }) }
});

export const coachingDiscoveryCall = defineType({
  name: 'coachingDiscoveryCall',
  title: 'Coaching - Appel découverte',
  type: 'document',
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
  ],
  preview: { prepare: () => ({ title: 'Coaching — Appel découverte' }) }
});
