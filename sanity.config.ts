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
              .child(S.document().schemaType('pageHome').documentId('pageHome')),
            S.listItem()
              .title('About')
              .child(S.document().schemaType('pageAbout').documentId('pageAbout')),
            S.listItem()
              .title('Coaching')
              .child(
                S.list()
                  .title('Coaching — Sections')
                  .items([
                    S.listItem()
                      .title('Headline')
                      .child(S.document().schemaType('pageCoaching').documentId('pageCoaching').views([S.view.form()])),
                    S.listItem()
                      .title('Méthode (Mind · Body · Soul)')
                      .child(S.document().schemaType('pageCoaching').documentId('pageCoaching').views([S.view.form()])),
                    S.listItem()
                      .title('Pour qui ?')
                      .child(S.document().schemaType('pageCoaching').documentId('pageCoaching').views([S.view.form()])),
                    S.listItem()
                      .title('Témoignages')
                      .child(S.document().schemaType('pageCoaching').documentId('pageCoaching').views([S.view.form()])),
                    S.listItem()
                      .title('Offres')
                      .child(S.document().schemaType('pageCoaching').documentId('pageCoaching').views([S.view.form()])),
                    S.listItem()
                      .title('FAQ')
                      .child(S.document().schemaType('pageCoaching').documentId('pageCoaching').views([S.view.form()])),
                    S.listItem()
                      .title('Appel découverte')
                      .child(S.document().schemaType('pageCoaching').documentId('pageCoaching').views([S.view.form()])),
                  ])
              ),
            S.listItem()
              .title('Contact')
              .child(S.document().schemaType('pageContact').documentId('pageContact')),
            S.listItem()
              .title('Booking')
              .child(S.document().schemaType('pageBooking').documentId('pageBooking')),
            S.listItem()
              .title('Home 2')
              .child(S.document().schemaType('pageHome2').documentId('pageHome2')),
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
            S.listItem()
              .title('Banner (Global)')
              .child(S.document().schemaType('globalBanner').documentId('globalBanner')),
          ]),
    }),
  ],

  schema: {
    types: schemaTypes,
  },
});
