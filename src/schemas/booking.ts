import { defineType, defineField } from 'sanity';

export const bookingHeadline = defineType({
  name: 'bookingHeadline',
  title: 'Booking - Headline',
  type: 'object',
  fields: [
    defineField({ name: 'visible', type: 'boolean', title: 'Visible', initialValue: true }),
    defineField({ name: 'title_fr', type: 'string', title: 'Title (FR)' }),
    defineField({ name: 'title_en', type: 'string', title: 'Title (EN)' }),
    defineField({ name: 'subtitle_fr', type: 'string', title: 'Subtitle (FR)' }),
    defineField({ name: 'subtitle_en', type: 'string', title: 'Subtitle (EN)' }),
    defineField({ name: 'text_fr', type: 'text', title: 'Text (FR)' }),
    defineField({ name: 'text_en', type: 'text', title: 'Text (EN)' }),
  ]
});

export const bookingProgram = defineType({
  name: 'bookingProgram',
  title: 'Booking - Program',
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
    defineField({ name: 'subline_fr', type: 'string', title: 'Subline (FR)' }),
    defineField({ name: 'subline_en', type: 'string', title: 'Subline (EN)' }),
  ]
});

export const bookingCalWidget = defineType({
  name: 'bookingCalWidget',
  title: 'Booking - CalWidget',
  type: 'object',
  fields: [
    defineField({ name: 'visible', type: 'boolean', title: 'Visible', initialValue: true }),
    defineField({ name: 'title_fr', type: 'string', title: 'Title (FR)' }),
    defineField({ name: 'title_en', type: 'string', title: 'Title (EN)' }),
  ]
});

export const bookingContactAlt = defineType({
  name: 'bookingContactAlt',
  title: 'Booking - ContactAlt',
  type: 'object',
  fields: [
    defineField({ name: 'visible', type: 'boolean', title: 'Visible', initialValue: true }),
    defineField({ name: 'title_fr', type: 'string', title: 'Title (FR)' }),
    defineField({ name: 'title_en', type: 'string', title: 'Title (EN)' }),
    defineField({ name: 'email_fr', type: 'string', title: 'Email (FR)' }),
    defineField({ name: 'email_en', type: 'string', title: 'Email (EN)' }),
    defineField({ name: 'instagram_fr', type: 'string', title: 'Instagram (FR)' }),
    defineField({ name: 'instagram_en', type: 'string', title: 'Instagram (EN)' }),
  ]
});

export const pageBooking = defineType({
  name: 'pageBooking',
  title: 'Page: Booking',
  type: 'document',
  fields: [
    defineField({ name: 'bookingHeadline', type: 'bookingHeadline', title: 'bookingHeadline' }),
    defineField({ name: 'bookingProgram', type: 'bookingProgram', title: 'bookingProgram' }),
    defineField({ name: 'bookingCalWidget', type: 'bookingCalWidget', title: 'bookingCalWidget' }),
    defineField({ name: 'bookingContactAlt', type: 'bookingContactAlt', title: 'bookingContactAlt' }),
  ]
});
