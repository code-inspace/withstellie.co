import { defineType, defineField } from 'sanity';

export const pageLegalNotice = defineType({
  name: 'pageLegalNotice',
  title: 'Page: Mentions Légales',
  type: 'document',
  fields: [
    defineField({ name: 'topLabel_fr', type: 'string', initialValue: 'Légal' }),
    defineField({ name: 'topLabel_en', type: 'string', initialValue: 'Legal' }),
    defineField({ name: 'title_fr', type: 'string', initialValue: 'Mentions légales.' }),
    defineField({ name: 'title_en', type: 'string', initialValue: 'Legal Notice.' }),
    defineField({ name: 'section1Title_fr', type: 'string', initialValue: 'Éditeur du site' }),
    defineField({ name: 'section1Title_en', type: 'string', initialValue: 'Site Editor' }),
    defineField({ name: 'section1Text_fr', type: 'text', initialValue: 'Le site withstellie.co est édité par :\nChrystel Bruce\nActivité de coaching, auto-entrepreneur\nEmail : chrystelbrc.pro@gmail.com' }),
    defineField({ name: 'section1Text_en', type: 'text', initialValue: 'The withstellie.co site is edited by:\nChrystel Bruce\nCoaching activity, self-employed\nEmail: chrystelbrc.pro@gmail.com' }),
    
    defineField({ name: 'section2Title_fr', type: 'string', initialValue: 'Hébergement' }),
    defineField({ name: 'section2Title_en', type: 'string', initialValue: 'Hosting' }),
    defineField({ name: 'section2Text_fr', type: 'text', initialValue: 'Ce site est hébergé par :\nVercel Inc.\n440 N Barranca Ave #4133, Covina, CA 91723, États-Unis\nvercel.com' }),
    defineField({ name: 'section2Text_en', type: 'text', initialValue: 'This site is hosted by:\nVercel Inc.\n440 N Barranca Ave #4133, Covina, CA 91723, United States\nvercel.com' }),

    defineField({ name: 'section3Title_fr', type: 'string', initialValue: 'Propriété intellectuelle' }),
    defineField({ name: 'section3Title_en', type: 'string', initialValue: 'Intellectual Property' }),
    defineField({ name: 'section3Text_fr', type: 'text', initialValue: "L'ensemble du contenu de ce site (textes, images, visuels, identité visuelle) est la propriété exclusive de withstellie.co, sauf mention contraire. Toute reproduction, représentation ou diffusion, totale ou partielle, sans autorisation préalable est interdite." }),
    defineField({ name: 'section3Text_en', type: 'text', initialValue: "All content on this site (texts, images, visuals, visual identity) is the exclusive property of withstellie.co, unless otherwise stated. Any reproduction, representation, or distribution, in whole or in part, without prior authorization is prohibited." }),

    defineField({ name: 'section4Title_fr', type: 'string', initialValue: 'Données personnelles' }),
    defineField({ name: 'section4Title_en', type: 'string', initialValue: 'Personal Data' }),
    defineField({ name: 'section4Text_fr', type: 'text', initialValue: "Ce site ne collecte aucune donnée personnelle sans votre consentement. Pour toute demande relative à vos données, vous pouvez contacter : chrystelbrc.pro@gmail.com" }),
    defineField({ name: 'section4Text_en', type: 'text', initialValue: "This site does not collect any personal data without your consent. For any request regarding your data, you can contact: chrystelbrc.pro@gmail.com" }),

    defineField({ name: 'section5Title_fr', type: 'string', initialValue: 'Cookies et stockage local' }),
    defineField({ name: 'section5Title_en', type: 'string', initialValue: 'Cookies and Local Storage' }),
    defineField({ name: 'section5Text_fr', type: 'text', initialValue: "Ce site n'utilise pas de cookies de traçage ou publicitaires. Le stockage local (localStorage) du navigateur est utilisé uniquement pour mémoriser la fermeture du bandeau promotionnel. Aucune donnée personnelle n'est concernée." }),
    defineField({ name: 'section5Text_en', type: 'text', initialValue: "This site does not use tracking or advertising cookies. The browser's local storage (localStorage) is strictly used to remember the closing of the promotional banner. No personal data is involved." }),

    defineField({ name: 'section6Title_fr', type: 'string', initialValue: 'Conception & développement' }),
    defineField({ name: 'section6Title_en', type: 'string', initialValue: 'Design & Development' }),
    defineField({ name: 'section6Text_fr', type: 'text', initialValue: 'Site conçu et développé par Axel Coudair.' }),
    defineField({ name: 'section6Text_en', type: 'text', initialValue: 'Site designed and developed by Axel Coudair.' }),
  ]
});

export const pagePrivacyPolicy = defineType({
  name: 'pagePrivacyPolicy',
  title: 'Page: Confidentialité',
  type: 'document',
  fields: [
    defineField({ name: 'topLabel_fr', type: 'string', initialValue: 'Légal' }),
    defineField({ name: 'topLabel_en', type: 'string', initialValue: 'Legal' }),
    defineField({ name: 'title_fr', type: 'string', initialValue: 'Politique de confidentialité.' }),
    defineField({ name: 'title_en', type: 'string', initialValue: 'Privacy Policy.' }),

    defineField({ name: 'section1Title_fr', type: 'string', initialValue: 'Responsable du traitement' }),
    defineField({ name: 'section1Title_en', type: 'string', initialValue: 'Data Controller' }),
    defineField({ name: 'section1Text_fr', type: 'text', initialValue: 'Chrystel Bruce, withstellie.co\nEmail : chrystelbrc.pro@gmail.com' }),
    defineField({ name: 'section1Text_en', type: 'text', initialValue: 'Chrystel Bruce, withstellie.co\nEmail: chrystelbrc.pro@gmail.com' }),

    defineField({ name: 'section2Title_fr', type: 'string', initialValue: 'Données collectées' }),
    defineField({ name: 'section2Title_en', type: 'string', initialValue: 'Data Collected' }),
    defineField({ name: 'section2Text_fr', type: 'text', initialValue: "Ce site ne collecte aucune donnée personnelle de manière automatique. Les seules données susceptibles d'être recueillies sont celles que vous transmettez volontairement via les formulaires de contact ou de réservation (nom, adresse email, message)." }),
    defineField({ name: 'section2Text_en', type: 'text', initialValue: 'This site does not automatically collect any personal data. The only data that may be collected is what you voluntarily submit via the contact or booking forms (name, email address, message).' }),

    defineField({ name: 'section3Title_fr', type: 'string', initialValue: 'Finalité du traitement' }),
    defineField({ name: 'section3Title_en', type: 'string', initialValue: 'Purpose of Processing' }),
    defineField({ name: 'section3Text_fr', type: 'text', initialValue: "Les données collectées sont utilisées exclusivement pour :\n- Répondre à vos demandes de contact ou de réservation\n- Vous envoyer des informations relatives à l'accompagnement, si vous y avez consenti" }),
    defineField({ name: 'section3Text_en', type: 'text', initialValue: "The collected data is used exclusively to:\n- Respond to your contact or booking requests\n- Send you information regarding coaching, if you have consented to it" }),

    defineField({ name: 'section4Title_fr', type: 'string', initialValue: 'Durée de conservation' }),
    defineField({ name: 'section4Title_en', type: 'string', initialValue: 'Retention Period' }),
    defineField({ name: 'section4Text_fr', type: 'text', initialValue: "Vos données sont conservées le temps nécessaire à la gestion de votre demande, et supprimées dès qu'elles ne sont plus utiles, dans un délai maximum de 3 ans après le dernier contact." }),
    defineField({ name: 'section4Text_en', type: 'text', initialValue: "Your data is kept for the time necessary to manage your request, and deleted as soon as it is no longer useful, within a maximum of 3 years after the last contact." }),

    defineField({ name: 'section5Title_fr', type: 'string', initialValue: 'Cookies et stockage local' }),
    defineField({ name: 'section5Title_en', type: 'string', initialValue: 'Cookies and Local Storage' }),
    defineField({ name: 'section5Text_fr', type: 'text', initialValue: "Ce site n'utilise pas de cookies de traçage, de publicité ou d'analyse comportementale. Aucune donnée de navigation n'est transmise à des tiers.\nLe site utilise le stockage local (localStorage) de votre navigateur uniquement pour mémoriser votre préférence de fermeture du bandeau promotionnel. Cette donnée est purement fonctionnelle, reste sur votre appareil et ne contient aucune information personnelle." }),
    defineField({ name: 'section5Text_en', type: 'text', initialValue: "This site does not use tracking, advertising, or behavioral analysis cookies. No browsing data is transmitted to third parties.\nThe site uses your browser's local storage (localStorage) solely to remember your preference for closing the promotional banner. This data is purely functional, remains on your device, and contains no personal information." }),

    defineField({ name: 'section6Title_fr', type: 'string', initialValue: 'Partage des données' }),
    defineField({ name: 'section6Title_en', type: 'string', initialValue: 'Data Sharing' }),
    defineField({ name: 'section6Text_fr', type: 'text', initialValue: "Vos données personnelles ne sont jamais vendues, louées ou cédées à des tiers. Elles peuvent être transmises à des prestataires techniques (hébergement, messagerie) dans le strict respect de la réglementation en vigueur." }),
    defineField({ name: 'section6Text_en', type: 'text', initialValue: "Your personal data is never sold, rented, or transferred to third parties. It may be transmitted to technical service providers (hosting, messaging) in strict compliance with current regulations." }),

    defineField({ name: 'section7Title_fr', type: 'string', initialValue: 'Vos droits' }),
    defineField({ name: 'section7Title_en', type: 'string', initialValue: 'Your Rights' }),
    defineField({ name: 'section7Text_fr', type: 'text', initialValue: "Conformément au RGPD, vous disposez des droits suivants :\n- Droit d'accès à vos données\n- Droit de rectification\n- Droit à l'effacement\n- Droit d'opposition au traitement\n- Droit à la portabilité\nPour exercer ces droits, contactez-nous à : chrystelbrc.pro@gmail.com" }),
    defineField({ name: 'section7Text_en', type: 'text', initialValue: "In accordance with the GDPR, you have the following rights:\n- Right of access to your data\n- Right to rectification\n- Right to erasure\n- Right to object to processing\n- Right to data portability\nTo exercise these rights, contact us at: chrystelbrc.pro@gmail.com" }),

    defineField({ name: 'section8Title_fr', type: 'string', initialValue: 'Réclamation' }),
    defineField({ name: 'section8Title_en', type: 'string', initialValue: 'Complaints' }),
    defineField({ name: 'section8Text_fr', type: 'text', initialValue: "Si vous estimez que vos droits ne sont pas respectés, vous pouvez adresser une réclamation à la CNIL." }),
    defineField({ name: 'section8Text_en', type: 'text', initialValue: "If you believe your rights are not respected, you can file a complaint with the relevant data protection authority." }),

    defineField({ name: 'section9Title_fr', type: 'string', initialValue: 'Mise à jour' }),
    defineField({ name: 'section9Title_en', type: 'string', initialValue: 'Updates' }),
    defineField({ name: 'section9Text_fr', type: 'text', initialValue: "Cette politique de confidentialité peut être mise à jour à tout moment. La date de dernière révision est indiquée ci-dessous.\nDernière mise à jour : avril 2026" }),
    defineField({ name: 'section9Text_en', type: 'text', initialValue: "This privacy policy may be updated at any time. The date of the last revision is indicated below.\nLast updated: April 2026" })
  ]
});
