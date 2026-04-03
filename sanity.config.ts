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
              .title('Home 3')
              .child(S.document().schemaType('pageHome').documentId('pageHome')),
            S.listItem()
              .title('À propos (About)')
              .child(S.document().schemaType('pageAbout').documentId('pageAbout')),
            S.listItem()
              .title('Coaching')
              .child(S.document().schemaType('pageCoaching').documentId('pageCoaching')),
            S.listItem()
              .title('Contact')
              .child(S.document().schemaType('pageContact').documentId('pageContact')),
            S.listItem()
              .title('Réserver')
              .child(S.document().schemaType('pageBooking').documentId('pageBooking')),
            S.listItem()
              .title('Accueil 2')
              .child(S.document().schemaType('pageHome2').documentId('pageHome2')),
            S.listItem()
              .title('Mentions légales')
              .child(S.document().schemaType('pageLegalNotice').documentId('pageLegalNotice')),
            S.listItem()
              .title('Confidentialité')
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
