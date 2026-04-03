import { defineType, defineField } from 'sanity';

export const globalNav = defineType({
  name: 'globalNav',
  title: 'Global - Navbar',
  type: 'document',
  fields: [
    defineField({ name: 'link1_fr', type: 'string', title: 'Link 1 (FR)', initialValue: 'À propos' }),
    defineField({ name: 'link1_en', type: 'string', title: 'Link 1 (EN)', initialValue: 'About' }),
    defineField({ name: 'link2_fr', type: 'string', title: 'Link 2 (FR)', initialValue: "L'accompagnement" }),
    defineField({ name: 'link2_en', type: 'string', title: 'Link 2 (EN)', initialValue: 'Work with me' }),
    defineField({ name: 'link3_fr', type: 'string', title: 'Link 3 (FR)', initialValue: 'Réserver' }),
    defineField({ name: 'link3_en', type: 'string', title: 'Link 3 (EN)', initialValue: 'Book' }),
    defineField({ name: 'link4_fr', type: 'string', title: 'Link 4 (FR)', initialValue: 'Contact' }),
    defineField({ name: 'link4_en', type: 'string', title: 'Link 4 (EN)', initialValue: 'Contact' }),
  ],
  preview: {
    prepare: () => ({ title: 'GlobalNav' })
  }
});



export const globalFooter = defineType({
  name: 'globalFooter',
  title: 'Global - Footer',
  type: 'document',
  fields: [
    defineField({ name: 'subtitle_fr', type: 'string', title: 'Subtitle (FR)', initialValue: 'Coaching de shift identitaire' }),
    defineField({ name: 'subtitle_en', type: 'string', title: 'Subtitle (EN)', initialValue: 'Identity shift coaching' }),
    defineField({ name: 'email', type: 'string', title: 'Email de contact' }),
    defineField({ name: 'instagram', type: 'string', title: 'Lien Instagram' }),
    defineField({ name: 'tiktok', type: 'string', title: 'Lien TikTok' }),
    defineField({ name: 'legal1_fr', type: 'string', title: 'Legal Link 1 (FR)', initialValue: 'Mentions légales' }),
    defineField({ name: 'legal1_en', type: 'string', title: 'Legal Link 1 (EN)', initialValue: 'Legal Notice' }),
    defineField({ name: 'legal2_fr', type: 'string', title: 'Legal Link 2 (FR)', initialValue: 'Politique de confidentialité' }),
    defineField({ name: 'legal2_en', type: 'string', title: 'Legal Link 2 (EN)', initialValue: 'Privacy Policy' }),
    defineField({ name: 'madeBy_fr', type: 'string', title: 'Made By (FR)', initialValue: 'Fait par Axel Coudair' }),
    defineField({ name: 'madeBy_en', type: 'string', title: 'Made By (EN)', initialValue: 'Made by Axel Coudair' }),
  ],
  preview: {
    prepare: () => ({ title: 'GlobalFooter' })
  }
});
