import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { schemaTypes } from './src/schemas';

export default defineConfig({
  name: 'default',
  title: 'With Stellie CMS',

  projectId: 'wls4qthn',
  dataset: 'production',

  basePath: '/studio',

  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Pages du site')
          .items([
            S.listItem()
              .title('Home')
              .child(
                S.list()
                  .title('Home — Sections')
                  .items([
                    S.listItem().title('Hero').child(S.document().schemaType('homeHero').documentId('homeHero')),
                    S.listItem().title('Hook').child(S.document().schemaType('homeHook').documentId('homeHook')),
                    S.listItem().title('Présentation').child(S.document().schemaType('homePresentation').documentId('homePresentation')),
                    S.listItem().title('Focus').child(S.document().schemaType('homeFocus').documentId('homeFocus')),
                    S.listItem().title('Méthode').child(S.document().schemaType('home2Method').documentId('home2Method')),
                    S.listItem().title('Témoignages').child(S.document().schemaType('home2Testimonials').documentId('home2Testimonials')),
                    S.listItem().title('CTA').child(S.document().schemaType('homeCTA').documentId('homeCTA')),
                    S.listItem().title('Pricing').child(S.document().schemaType('homePricing').documentId('homePricing')),
                    S.listItem().title('FAQ').child(S.document().schemaType('homeFAQ').documentId('homeFAQ')),
                    S.listItem().title('CTA 2').child(S.document().schemaType('homeCTA2').documentId('homeCTA2')),
                    S.listItem().title('About').child(S.document().schemaType('homeAbout').documentId('homeAbout')),
                  ])
              ),
            S.listItem()
              .title('About')
              .child(
                S.list()
                  .title('About — Sections')
                  .items([
                    S.listItem().title('Headline').child(S.document().schemaType('aboutHeadline').documentId('aboutHeadline')),
                    S.listItem().title('Before').child(S.document().schemaType('aboutBefore').documentId('aboutBefore')),
                    S.listItem().title('Turning Point').child(S.document().schemaType('aboutTurningPoint').documentId('aboutTurningPoint')),
                    S.listItem().title('Reconstruction').child(S.document().schemaType('aboutReconstruction').documentId('aboutReconstruction')),
                    S.listItem().title('Why').child(S.document().schemaType('aboutWhy').documentId('aboutWhy')),
                    S.listItem().title('Quote').child(S.document().schemaType('aboutQuote').documentId('aboutQuote')),
                    S.listItem().title('Method').child(S.document().schemaType('aboutMethod').documentId('aboutMethod')),
                    S.listItem().title('CTA').child(S.document().schemaType('aboutCTA').documentId('aboutCTA')),
                  ])
              ),
            S.listItem()
              .title('Coaching')
              .child(
                S.list()
                  .title('Coaching — Sections')
                  .items([
                    S.listItem().title('Headline').child(S.document().schemaType('coachingHeadline').documentId('coachingHeadline')),
                    S.listItem().title('Méthode (Mind · Body · Soul)').child(S.document().schemaType('coachingMethodMBS').documentId('coachingMethodMBS')),
                    S.listItem().title('Pour qui ?').child(S.document().schemaType('coachingForWho').documentId('coachingForWho')),
                    S.listItem().title('Témoignages').child(S.document().schemaType('coachingTestimonials').documentId('coachingTestimonials')),
                    S.listItem().title('Offres').child(S.document().schemaType('coachingOffers').documentId('coachingOffers')),
                    S.listItem().title('FAQ').child(S.document().schemaType('coachingFAQ').documentId('coachingFAQ')),
                    S.listItem().title('Appel découverte').child(S.document().schemaType('coachingDiscoveryCall').documentId('coachingDiscoveryCall')),
                  ])
              ),
            S.listItem()
              .title('Contact')
              .child(
                S.list()
                  .title('Contact — Sections')
                  .items([
                    S.listItem().title('Headline').child(S.document().schemaType('contactHeadline').documentId('contactHeadline')),
                    S.listItem().title('Formulaire').child(S.document().schemaType('contactContactForm').documentId('contactContactForm')),
                    S.listItem().title('Alternatives').child(S.document().schemaType('contactAlternatives').documentId('contactAlternatives')),
                    S.listItem().title('Redirection').child(S.document().schemaType('contactRedirection').documentId('contactRedirection')),
                  ])
              ),
            S.listItem()
              .title('Booking')
              .child(
                S.list()
                  .title('Booking — Sections')
                  .items([
                    S.listItem().title('Headline').child(S.document().schemaType('bookingHeadline').documentId('bookingHeadline')),
                    S.listItem().title('Programme').child(S.document().schemaType('bookingProgram').documentId('bookingProgram')),
                    S.listItem().title('Calendrier').child(S.document().schemaType('bookingCalWidget').documentId('bookingCalWidget')),
                    S.listItem().title('Contact alternatif').child(S.document().schemaType('bookingContactAlt').documentId('bookingContactAlt')),
                  ])
              ),
            S.listItem()
              .title('Home 2')
              .child(
                S.list()
                  .title('Home 2 — Sections')
                  .items([
                    S.listItem().title('Hero').child(S.document().schemaType('home2Hero').documentId('home2Hero')),
                    S.listItem().title('Stellie Intro').child(S.document().schemaType('home2StellieIntro').documentId('home2StellieIntro')),
                    S.listItem().title('Method').child(S.document().schemaType('home2Method').documentId('home2Method')),
                    S.listItem().title('Testimonials').child(S.document().schemaType('home2Testimonials').documentId('home2Testimonials')),
                    S.listItem().title('CTA').child(S.document().schemaType('home2CTA').documentId('home2CTA')),
                  ])
              ),
            S.listItem()
              .title('Offres')
              .child(
                S.documentTypeList('pageOffer').title('Offres — Toutes les pages')
              ),
            S.listItem()
              .title('Legal Notice')
              .child(S.document().schemaType('pageLegalNotice').documentId('pageLegalNotice')),
            S.listItem()
              .title('Privacy Policy')
              .child(S.document().schemaType('pagePrivacyPolicy').documentId('pagePrivacyPolicy')),
            S.divider(),
            S.listItem()
              .title('Navigation (Global)')
              .child(S.document().schemaType('globalNav').documentId('globalNav')),
            S.listItem()
              .title('Footer (Global)')
              .child(S.document().schemaType('globalFooter').documentId('globalFooter')),
          ]),
    }),
  ],

  schema: {
    types: schemaTypes,
  },
});
