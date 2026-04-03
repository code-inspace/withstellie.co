import { defineType, defineField } from 'sanity';

export const pageOffer = defineType({
  name: 'pageOffer',
  title: 'Page: Offre',
  type: 'document',
  groups: [
    { name: 'meta',        title: '⚙️ Général',         default: true },
    { name: 'headline',    title: '01 · Headline' },
    { name: 'included',    title: '02 · Ce que tu reçois' },
    { name: 'forWho',      title: '03 · Pour qui' },
    { name: 'form',        title: '04 · Formulaire' },
    { name: 'reassurance', title: '05 · Réassurance & Footer' },
    { name: 'banner',      title: '🎀 Banner' },
  ],
  fields: [
    // ── Meta ──
    defineField({ name: 'slug',      type: 'slug',    title: 'Slug (URL)',  group: 'meta', options: { source: 'headline_fr', maxLength: 96 } }),
    defineField({ name: 'visible',   type: 'boolean', title: 'Visible',    group: 'meta', initialValue: true }),
    defineField({ name: 'formEmail', type: 'string',  title: 'Email de destination du formulaire', group: 'meta', description: 'Ex: withstellie.co@gmail.com' }),

    // ── 01 Headline ──
    defineField({ name: 'eyebrow_fr',          type: 'string', title: 'Date / Eyebrow (FR)', group: 'headline', description: 'Ex: Disponible du 7 au 30 avril 2026' }),
    defineField({ name: 'eyebrow_en',          type: 'string', title: 'Date / Eyebrow (EN)', group: 'headline' }),
    defineField({ name: 'headline_fr',         type: 'string', title: 'Titre principal (FR)', group: 'headline' }),
    defineField({ name: 'headline_en',         type: 'string', title: 'Titre principal (EN)', group: 'headline' }),
    defineField({ name: 'headlineSubtitle_fr', type: 'text',   title: 'Sous-titre (FR)',      group: 'headline' }),
    defineField({ name: 'headlineSubtitle_en', type: 'text',   title: 'Sous-titre (EN)',      group: 'headline' }),

    // ── 02 Ce que tu reçois ──
    defineField({ name: 'includedLabel_fr', type: 'string', title: 'Label section (FR)', group: 'included', initialValue: 'Ce que tu reçois' }),
    defineField({ name: 'includedLabel_en', type: 'string', title: 'Label section (EN)', group: 'included', initialValue: 'What you get' }),
    defineField({
      name: 'includedItems',
      type: 'array',
      title: "Contenu de l'offre (lignes)",
      group: 'included',
      of: [
        defineField({
          name: 'includedItem',
          type: 'object',
          fields: [
            defineField({ name: 'label_fr', type: 'string', title: 'Label (FR)' }),
            defineField({ name: 'label_en', type: 'string', title: 'Label (EN)' }),
            defineField({ name: 'value_fr', type: 'string', title: 'Valeur (FR)' }),
            defineField({ name: 'value_en', type: 'string', title: 'Valeur (EN)' }),
          ]
        })
      ]
    }),

    // ── 03 Pour qui ──
    defineField({ name: 'forWhoLabel_fr', type: 'string', title: 'Label section (FR)', group: 'forWho', initialValue: "Cette offre est faite pour toi si" }),
    defineField({ name: 'forWhoLabel_en', type: 'string', title: 'Label section (EN)', group: 'forWho', initialValue: "This offer is for you if" }),
    defineField({ name: 'forWho_fr',      type: 'text',   title: 'Texte (FR)',         group: 'forWho' }),
    defineField({ name: 'forWho_en',      type: 'text',   title: 'Texte (EN)',         group: 'forWho' }),

    // ── 04 Formulaire ──
    defineField({ name: 'formLabel_fr',           type: 'string', title: 'Label bouton section (FR)',  group: 'form', initialValue: 'Réserver ma place' }),
    defineField({ name: 'formLabel_en',           type: 'string', title: 'Label bouton section (EN)',  group: 'form', initialValue: 'Reserve my spot' }),
    defineField({ name: 'firstNameLabel_fr',      type: 'string', title: 'Label prénom (FR)',           group: 'form', initialValue: 'Prénom' }),
    defineField({ name: 'firstNameLabel_en',      type: 'string', title: 'Label prénom (EN)',           group: 'form', initialValue: 'First name' }),
    defineField({ name: 'firstNamePlaceholder_fr',type: 'string', title: 'Placeholder prénom (FR)',     group: 'form', initialValue: 'Ton prénom' }),
    defineField({ name: 'firstNamePlaceholder_en',type: 'string', title: 'Placeholder prénom (EN)',     group: 'form', initialValue: 'Your first name' }),
    defineField({ name: 'messageLabel_fr',        type: 'string', title: 'Label message (FR)',          group: 'form', initialValue: 'Dis-moi en quelques mots où tu en es' }),
    defineField({ name: 'messageLabel_en',        type: 'string', title: 'Label message (EN)',          group: 'form', initialValue: 'Tell me briefly where you are right now' }),
    defineField({ name: 'messagePlaceholder_fr',  type: 'string', title: 'Placeholder message (FR)',    group: 'form', initialValue: "Ce n'est pas un formulaire de candidature. Juste un premier contact." }),
    defineField({ name: 'messagePlaceholder_en',  type: 'string', title: 'Placeholder message (EN)',    group: 'form', initialValue: "This isn't an application form. Just a first contact." }),
    defineField({ name: 'messageOptional_fr',     type: 'string', title: 'Mention "(facultatif)" (FR)', group: 'form', initialValue: '(facultatif)' }),
    defineField({ name: 'messageOptional_en',     type: 'string', title: 'Mention "(optional)" (EN)',   group: 'form', initialValue: '(optional)' }),
    defineField({ name: 'submitBtn_fr',           type: 'string', title: 'Bouton envoi (FR)',           group: 'form', initialValue: 'Je veux cette place' }),
    defineField({ name: 'submitBtn_en',           type: 'string', title: 'Bouton envoi (EN)',           group: 'form', initialValue: 'I want this spot' }),
    defineField({ name: 'confirmedTitle_fr',      type: 'string', title: 'Titre confirmation (FR)',     group: 'form', initialValue: "C'est noté." }),
    defineField({ name: 'confirmedTitle_en',      type: 'string', title: 'Titre confirmation (EN)',     group: 'form', initialValue: "Noted." }),
    defineField({ name: 'confirmedText_fr',       type: 'text',   title: 'Texte confirmation (FR)',     group: 'form', initialValue: "Stellie te contacte sous 48 h pour confirmer ta place." }),
    defineField({ name: 'confirmedText_en',       type: 'text',   title: 'Texte confirmation (EN)',     group: 'form', initialValue: "Stellie will contact you within 48h to confirm your spot." }),

    // ── 05 Réassurance & Footer ──
    defineField({ name: 'reassurance_fr',  type: 'text',   title: 'Texte réassurance (FR)',      group: 'reassurance', initialValue: "Tu peux poser toutes tes questions avant de t'engager." }),
    defineField({ name: 'reassurance_en',  type: 'text',   title: 'Texte réassurance (EN)',      group: 'reassurance', initialValue: "You can ask all your questions before committing." }),
    defineField({ name: 'footerLegal_fr',  type: 'string', title: 'Lien mentions légales (FR)', group: 'reassurance', initialValue: 'Mentions légales' }),
    defineField({ name: 'footerLegal_en',  type: 'string', title: 'Lien mentions légales (EN)', group: 'reassurance', initialValue: 'Legal Notice' }),
    defineField({ name: 'footerPrivacy_fr',type: 'string', title: 'Lien confidentialité (FR)',  group: 'reassurance', initialValue: 'Confidentialité' }),
    defineField({ name: 'footerPrivacy_en',type: 'string', title: 'Lien confidentialité (EN)',  group: 'reassurance', initialValue: 'Privacy Policy' }),

    // ── Banner (promo bar) ──
    defineField({ name: 'bannerVisible',  type: 'boolean', title: 'Afficher le banner',   group: 'banner', initialValue: false }),
    defineField({ name: 'bannerLabel_fr', type: 'string',  title: 'Label (FR)',            group: 'banner', description: "Ex: 🎁 Offre d'avril" }),
    defineField({ name: 'bannerLabel_en', type: 'string',  title: 'Label (EN)',            group: 'banner' }),
    defineField({ name: 'bannerText_fr',  type: 'string',  title: 'Texte (FR)',            group: 'banner' }),
    defineField({ name: 'bannerText_en',  type: 'string',  title: 'Texte (EN)',            group: 'banner' }),
    defineField({ name: 'bannerCta_fr',   type: 'string',  title: 'CTA bouton (FR)',       group: 'banner', description: 'Ex: Réserver ma place' }),
    defineField({ name: 'bannerCta_en',   type: 'string',  title: 'CTA bouton (EN)',       group: 'banner' }),
    defineField({ name: 'bannerExpiry',   type: 'date',    title: "Date d'expiration",    group: 'banner', description: 'Laisse vide pour pas de limite' }),
  ],
  preview: {
    select: { title: 'headline_fr', subtitle: 'slug.current' },
    prepare: ({ title, subtitle }: { title?: string; subtitle?: string }) => ({
      title: title || 'Nouvelle offre',
      subtitle: subtitle ? `/${subtitle}` : 'Sans slug',
    })
  }
});
