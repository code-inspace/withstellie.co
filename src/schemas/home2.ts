import { defineType, defineField } from 'sanity';



export const home2Method = defineType({
  name: 'home2Method', title: 'Home2 - Method', type: 'document',
  fields: [
    defineField({ name: 'visible', type: 'boolean', title: 'Visible', initialValue: true }),
    defineField({ name: 'title_fr', type: 'string', title: 'Title (FR)' }),
    defineField({ name: 'title_en', type: 'string', title: 'Title (EN)' }),
    defineField({ name: 'subtitle_fr', type: 'text', title: 'Subtitle (FR)' }),
    defineField({ name: 'subtitle_en', type: 'text', title: 'Subtitle (EN)' }),
    defineField({ name: 'cta_fr', type: 'string', title: 'Cta (FR)' }),
    defineField({ name: 'cta_en', type: 'string', title: 'Cta (EN)' }),
    defineField({
      name: 'cards', type: 'array', title: 'Cartes M/B/S',
      of: [defineField({ name: 'methodCard', type: 'object', fields: [
        defineField({ name: 'letter', type: 'string', title: 'Lettre' }),
        defineField({ name: 'title', type: 'string', title: 'Titre' }),
        defineField({ name: 'desc_fr', type: 'text', title: 'Description (FR)' }),
        defineField({ name: 'desc_en', type: 'text', title: 'Description (EN)' }),
      ]})]
    }),
    defineField({ name: 'backgroundImage', type: 'image', title: 'Background Image', options: { hotspot: true } }),
  ],
  preview: { prepare: () => ({ title: 'Home2 — Method' }) }
});

export const home2Testimonials = defineType({
  name: 'home2Testimonials', title: 'Home2 - Testimonials', type: 'document',
  fields: [
    defineField({ name: 'visible', type: 'boolean', title: 'Visible', initialValue: true }),
    defineField({ name: 'title_fr', type: 'string', title: 'Title (FR)' }),
    defineField({ name: 'title_en', type: 'string', title: 'Title (EN)' }),
    defineField({
      name: 'list', type: 'array', title: 'Testimonials List',
      of: [defineField({
        name: 'testimonialItem', type: 'object', fields: [
          defineField({ name: 'quote_fr', type: 'text', title: 'Quote (FR)' }),
          defineField({ name: 'quote_en', type: 'text', title: 'Quote (EN)' }),
          defineField({ name: 'author_fr', type: 'string', title: 'Author (FR)' }),
          defineField({ name: 'author_en', type: 'string', title: 'Author (EN)' }),
          defineField({ name: 'role_fr', type: 'string', title: 'Role (FR)' }),
          defineField({ name: 'role_en', type: 'string', title: 'Role (EN)' }),
        ]
      })]
    }),
  ],
  preview: { prepare: () => ({ title: 'Home2 — Testimonials' }) }
});

