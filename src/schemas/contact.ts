import { defineType, defineField } from 'sanity';

export const contactHeadline = defineType({
  name: 'contactHeadline',
  title: 'Contact - Headline',
  type: 'object',
  fields: [
    defineField({ name: 'visible', type: 'boolean', title: 'Visible', initialValue: true }),
    defineField({ name: 'title_fr', type: 'string', title: 'Title (FR)' }),
    defineField({ name: 'title_en', type: 'string', title: 'Title (EN)' }),
    defineField({ name: 'subtitle_fr', type: 'text', title: 'Subtitle (FR)' }),
    defineField({ name: 'subtitle_en', type: 'text', title: 'Subtitle (EN)' }),
    defineField({ name: 'subline_fr', type: 'string', title: 'Subline (FR)' }),
    defineField({ name: 'subline_en', type: 'string', title: 'Subline (EN)' }),
  ]
});

export const contactContactForm = defineType({
  name: 'contactContactForm',
  title: 'Contact - ContactForm',
  type: 'object',
  fields: [
    defineField({ name: 'visible', type: 'boolean', title: 'Visible', initialValue: true }),
    defineField({ name: 'firstNameLabel_fr', type: 'string', title: 'Firstnamelabel (FR)' }),
    defineField({ name: 'firstNameLabel_en', type: 'string', title: 'Firstnamelabel (EN)' }),
    defineField({ name: 'emailLabel_fr', type: 'string', title: 'Emaillabel (FR)' }),
    defineField({ name: 'emailLabel_en', type: 'string', title: 'Emaillabel (EN)' }),
    defineField({ name: 'subjectLabel_fr', type: 'string', title: 'Subjectlabel (FR)' }),
    defineField({ name: 'subjectLabel_en', type: 'string', title: 'Subjectlabel (EN)' }),
    defineField({ name: 'messageLabel_fr', type: 'string', title: 'Messagelabel (FR)' }),
    defineField({ name: 'messageLabel_en', type: 'string', title: 'Messagelabel (EN)' }),
    defineField({ name: 'submitBtn_fr', type: 'string', title: 'Submitbtn (FR)' }),
    defineField({ name: 'submitBtn_en', type: 'string', title: 'Submitbtn (EN)' }),
    defineField({ name: 'privacyText_fr', type: 'text', title: 'Privacytext (FR)' }),
    defineField({ name: 'privacyText_en', type: 'text', title: 'Privacytext (EN)' }),
  ]
});

export const contactAlternatives = defineType({
  name: 'contactAlternatives',
  title: 'Contact - Alternatives',
  type: 'object',
  fields: [
    defineField({ name: 'visible', type: 'boolean', title: 'Visible', initialValue: true }),
    defineField({ name: 'title_fr', type: 'string', title: 'Title (FR)' }),
    defineField({ name: 'title_en', type: 'string', title: 'Title (EN)' }),
    defineField({ name: 'instagram_fr', type: 'string', title: 'Instagram (FR)' }),
    defineField({ name: 'instagram_en', type: 'string', title: 'Instagram (EN)' }),
    defineField({ name: 'email_fr', type: 'string', title: 'Email (FR)' }),
    defineField({ name: 'email_en', type: 'string', title: 'Email (EN)' }),
  ]
});

export const contactRedirection = defineType({
  name: 'contactRedirection',
  title: 'Contact - Redirection',
  type: 'object',
  fields: [
    defineField({ name: 'visible', type: 'boolean', title: 'Visible', initialValue: true }),
    defineField({ name: 'title_fr', type: 'string', title: 'Title (FR)' }),
    defineField({ name: 'title_en', type: 'string', title: 'Title (EN)' }),
    defineField({ name: 'cta_fr', type: 'string', title: 'Cta (FR)' }),
    defineField({ name: 'cta_en', type: 'string', title: 'Cta (EN)' }),
  ]
});

export const pageContact = defineType({
  name: 'pageContact',
  title: 'Page: Contact',
  type: 'document',
  fields: [
    defineField({ name: 'contactHeadline', type: 'contactHeadline', title: 'contactHeadline' }),
    defineField({ name: 'contactContactForm', type: 'contactContactForm', title: 'contactContactForm' }),
    defineField({ name: 'contactAlternatives', type: 'contactAlternatives', title: 'contactAlternatives' }),
    defineField({ name: 'contactRedirection', type: 'contactRedirection', title: 'contactRedirection' }),
  ],
  preview: {
    prepare: () => ({ title: 'ContactHeadline' })
  }
});
