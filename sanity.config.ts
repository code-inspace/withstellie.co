import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { schemaTypes } from './src/schemas';

export default defineConfig({
  name: 'default',
  title: 'With Stellie CMS',
  
  projectId: import.meta.env.VITE_SANITY_PROJECT_ID || 'dummy-project-id',
  dataset: import.meta.env.VITE_SANITY_DATASET || 'production',
  
  basePath: '/studio',

  plugins: [structureTool()],

  schema: {
    types: schemaTypes,
  },
});
