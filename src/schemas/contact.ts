import { defineType, defineField } from 'sanity';

export const contactHeadline = defineType({
  name: 'contactHeadline', title: 'Contact - Headline', type: 'document',
  fields: [
    defineField({ name: 'visible', type: 'boolean', title: 'Visible', initialValue: true }),
    defineField({ name: 'title_fr', type: 'string', title: 'Title (FR)' }),
    defineField({ name: 'title_en', type: 'string', title: 'Title (EN)' }),
    defineField({ name: 'subtitle_fr', type: 'text', title: 'Subtitle (FR)' }),
    defineField({ name: 'subtitle_en', type: 'text', title: 'Subtitle (EN)' }),
    defineField({ name: 'subline_fr', type: 'string', title: 'Subline (FR)' }),
    defineField({ name: 'subline_en', type: 'string', title: 'Subline (EN)' }),
    defineField({ name: 'backgroundImage', type: 'image', title: 'Background Image', options: { hotspot: true } }),
  ],
  preview: { prepare: () => ({ title: 'Contact — Headline' }) }
});

export const contactContactForm = defineType({
  name: 'contactContactForm', title: 'Contact - Formulaire', type: 'document',
  fields: [
    defineField({ name: 'visible', type: 'boolean', title: 'Visible', initialValue: true }),
    defineField({ name: 'firstNameLabel_fr', type: 'string', title: 'Prénom label (FR)' }),
    defineField({ name: 'firstNameLabel_en', type: 'string', title: 'Prénom label (EN)' }),
    defineField({ name: 'emailLabel_fr', type: 'string', title: 'Email label (FR)' }),
    defineField({ name: 'emailLabel_en', type: 'string', title: 'Email label (EN)' }),
    defineField({ name: 'subjectLabel_fr', type: 'string', title: 'Sujet label (FR)' }),
    defineField({ name: 'subjectLabel_en', type: 'string', title: 'Sujet label (EN)' }),
    defineField({ name: 'messageLabel_fr', type: 'string', title: 'Message label (FR)' }),
    defineField({ name: 'messageLabel_en', type: 'string', title: 'Message label (EN)' }),
    defineField({ name: 'firstNamePlaceholder_fr', type: 'string', title: 'Prénom placeholder (FR)' }),
    defineField({ name: 'firstNamePlaceholder_en', type: 'string', title: 'Prénom placeholder (EN)' }),
    defineField({ name: 'emailPlaceholder_fr', type: 'string', title: 'Email placeholder (FR)' }),
    defineField({ name: 'emailPlaceholder_en', type: 'string', title: 'Email placeholder (EN)' }),
    defineField({ name: 'subjectPlaceholder_fr', type: 'string', title: 'Sujet placeholder (FR)' }),
    defineField({ name: 'subjectPlaceholder_en', type: 'string', title: 'Sujet placeholder (EN)' }),
    defineField({ name: 'subjectOpt1_fr', type: 'string', title: 'Sujet opt 1 (FR)' }),
    defineField({ name: 'subjectOpt1_en', type: 'string', title: 'Sujet opt 1 (EN)' }),
    defineField({ name: 'subjectOpt2_fr', type: 'string', title: 'Sujet opt 2 (FR)' }),
    defineField({ name: 'subjectOpt2_en', type: 'string', title: 'Sujet opt 2 (EN)' }),
    defineField({ name: 'subjectOpt3_fr', type: 'string', title: 'Sujet opt 3 (FR)' }),
    defineField({ name: 'subjectOpt3_en', type: 'string', title: 'Sujet opt 3 (EN)' }),
    defineField({ name: 'messagePlaceholder_fr', type: 'string', title: 'Message placeholder (FR)' }),
    defineField({ name: 'messagePlaceholder_en', type: 'string', title: 'Message placeholder (EN)' }),
    defineField({ name: 'submitBtn_fr', type: 'string', title: 'Bouton envoyer (FR)' }),
    defineField({ name: 'submitBtn_en', type: 'string', title: 'Bouton envoyer (EN)' }),
    defineField({ name: 'privacyText_fr', type: 'text', title: 'Texte confidentialité (FR)' }),
    defineField({ name: 'privacyText_en', type: 'text', title: 'Texte confidentialité (EN)' }),
  ],
  preview: { prepare: () => ({ title: 'Contact — Formulaire' }) }
});

export const contactAlternatives = defineType({
  name: 'contactAlternatives', title: 'Contact - Alternatives', type: 'document',
  fields: [
    defineField({ name: 'visible', type: 'boolean', title: 'Visible', initialValue: true }),
    defineField({ name: 'title_fr', type: 'string', title: 'Title (FR)' }),
    defineField({ name: 'title_en', type: 'string', title: 'Title (EN)' }),
    defineField({ name: 'instagram_fr', type: 'string', title: 'Instagram (FR)' }),
    defineField({ name: 'instagram_en', type: 'string', title: 'Instagram (EN)' }),
    defineField({ name: 'email_fr', type: 'string', title: 'Email (FR)' }),
    defineField({ name: 'email_en', type: 'string', title: 'Email (EN)' }),
  ],
  preview: { prepare: () => ({ title: 'Contact — Alternatives' }) }
});

export const contactRedirection = defineType({
  name: 'contactRedirection', title: 'Contact - Redirection', type: 'document',
  fields: [
    defineField({ name: 'visible', type: 'boolean', title: 'Visible', initialValue: true }),
    defineField({ name: 'title_fr', type: 'string', title: 'Title (FR)' }),
    defineField({ name: 'title_en', type: 'string', title: 'Title (EN)' }),
    defineField({ name: 'cta_fr', type: 'string', title: 'Cta (FR)' }),
    defineField({ name: 'cta_en', type: 'string', title: 'Cta (EN)' }),
  ],
  preview: { prepare: () => ({ title: 'Contact — Redirection' }) }
});
