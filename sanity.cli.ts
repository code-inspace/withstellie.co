import { defineCliConfig } from 'sanity/cli'
import dotenv from 'dotenv'

dotenv.config({ path: './.env.local' })

export default defineCliConfig({
  api: {
    projectId: process.env.VITE_SANITY_PROJECT_ID || 'wls4qthn',
    dataset: process.env.VITE_SANITY_DATASET || 'production'
  },
  deployment: {
    appId: 'dfo7bw5bndu42ls21328sbo3'
  }
})
