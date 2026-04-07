import { createClient } from '@sanity/client';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import * as dotenv from 'dotenv';

const __dirname = dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: resolve(__dirname, '.env.local') });

const PROJECT_ID = process.env.VITE_SANITY_PROJECT_ID;
const DATASET   = process.env.VITE_SANITY_DATASET;
const TOKEN     = process.env.SANITY_TOKEN;

if (!PROJECT_ID || !DATASET || !TOKEN) {
  console.error('❌ Missing env vars. Make sure VITE_SANITY_PROJECT_ID, VITE_SANITY_DATASET, and SANITY_TOKEN are set in .env.local');
  process.exit(1);
}

const client = createClient({
  projectId: PROJECT_ID,
  dataset: DATASET,
  apiVersion: '2024-01-01',
  token: TOKEN,
  useCdn: false,
});

async function patchDoc(type, payload) {
  const doc = await client.fetch(`*[_type == $type][0]{ _id }`, { type });
  if (!doc) {
    console.warn(`⚠️ No document found for type "${type}" — creating a draft...`);
    // If doc doesn't exist, Create it
    await client.create({ _type: type, ...payload });
    console.log(`✅ Created ${type} with defaults`);
    return;
  }
  
  await client.patch(doc._id).set(payload).commit();
  console.log(`✅ Patched ${type} (${doc._id}) with texts`);
}

async function main() {
  const contactHeadline = {
    title_fr: "Parlons.",
    title_en: "Let's talk.",
    subtitle_fr: "Que tu aies une question sur l'accompagnement, une hésitation, ou que tu veuilles simplement dire bonjour avant de te lancer, je suis là.",
    subtitle_en: "Whether you have a question about the coaching, a doubt, or you just want to say hello before getting started — I'm here.",
    subline_fr: "Je réponds en général sous 24h.",
    subline_en: "I usually respond within 24 hours.",
  };

  const contactContactForm = {
    firstNameLabel_fr: "Prénom",
    firstNameLabel_en: "First name",
    firstNamePlaceholder_fr: "Ton prénom",
    firstNamePlaceholder_en: "Your first name",
    emailLabel_fr: "Email",
    emailLabel_en: "Email",
    emailPlaceholder_fr: "Ton adresse email",
    emailPlaceholder_en: "Your email address",
    subjectLabel_fr: "Sujet (optionnel)",
    subjectLabel_en: "Subject (optional)",
    subjectPlaceholder_fr: "Sélectionne un sujet",
    subjectPlaceholder_en: "Select a subject",
    subjectOpt1_fr: "Une question sur l'accompagnement",
    subjectOpt1_en: "A question about the coaching",
    subjectOpt2_fr: "Je ne sais pas quelle offre choisir",
    subjectOpt2_en: "I don't know which offer to choose",
    subjectOpt3_fr: "Autre chose",
    subjectOpt3_en: "Something else",
    messageLabel_fr: "Message",
    messageLabel_en: "Message",
    messagePlaceholder_fr: "Ton message...",
    messagePlaceholder_en: "Your message...",
    submitBtn_fr: "Envoyer",
    submitBtn_en: "Send",
    privacyText_fr: "Tes informations restent confidentielles.\\nJe ne les partage avec personne.",
    privacyText_en: "Your information remains confidential.\\nI don't share it with anyone.",
  };

  const contactAlternatives = {
    title_fr: "Tu préfères passer par les réseaux ?",
    title_en: "Prefer to reach out on social media?",
    instagram_fr: "@shift.withstellie",
    instagram_en: "@shift.withstellie",
    email_fr: "chrystelbrc.pro@gmail.com",
    email_en: "chrystelbrc.pro@gmail.com",
  };

  const contactRedirection = {
    title_fr: "Tu veux réserver un appel découverte directement ?",
    title_en: "Want to book a discovery call directly?",
    cta_fr: "Par ici",
    cta_en: "This way",
  };

  await Promise.all([
    patchDoc('contactHeadline', contactHeadline),
    patchDoc('contactContactForm', contactContactForm),
    patchDoc('contactAlternatives', contactAlternatives),
    patchDoc('contactRedirection', contactRedirection),
  ]);

  console.log('\\n🎉 All contact page texts seeded successfully!');
}

main().catch((err) => {
  console.error('❌ Error:', err.message);
  process.exit(1);
});
