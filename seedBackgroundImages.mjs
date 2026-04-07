/**
 * seedBackgroundImages.mjs
 * Upload hero images to Sanity and patch all documents with a backgroundImage field.
 * Usage: node seedBackgroundImages.mjs
 */

import { createClient } from '@sanity/client';
import { createReadStream } from 'node:fs';
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

// ── Upload images ────────────────────────────────────────────────────────────

async function uploadImage(filename, label) {
  const stream = createReadStream(resolve(__dirname, 'public', filename));
  console.log(`📤 Uploading ${label} (${filename})…`);
  const asset = await client.assets.upload('image', stream, {
    filename,
    contentType: filename.endsWith('.png') ? 'image/png' : 'image/jpeg',
  });
  console.log(`   ✅ Uploaded → ${asset._id}`);
  return asset._id;
}

// ── Documents to patch ──────────────────────────────────────────────────────
// Each entry: [documentType, imageKey ('a' | 'b')]
// 'a' = hero.jpg (warm, dark)
// 'b' = hero2.png (lighter variant)

const TARGETS = [
  // Home
  { type: 'homeHero',               img: 'a' },
  // Home2
  { type: 'home2Hero',              img: 'a' },
  { type: 'home2Method',            img: 'b' },
  // About
  { type: 'aboutHeadline',          img: 'a' },
  { type: 'aboutTurningPoint',      img: 'b' },
  { type: 'aboutQuote',             img: 'a' },
  // Coaching
  { type: 'coachingMethodMBS',      img: 'b' },
  { type: 'coachingForWho',         img: 'a' },
  { type: 'coachingTestimonials',   img: 'b' },
  // Contact
  { type: 'contactHeadline',        img: 'a' },
  // Booking
  { type: 'bookingHero',            img: 'b' },
];

// ── Main ─────────────────────────────────────────────────────────────────────

async function main() {
  const [assetA, assetB] = await Promise.all([
    uploadImage('hero.jpg',  'Hero A'),
    uploadImage('hero2.png', 'Hero B'),
  ]);

  const assetMap = { a: assetA, b: assetB };

  for (const { type, img } of TARGETS) {
    const assetId = assetMap[img];
    const imageRef = { _type: 'image', asset: { _type: 'reference', _ref: assetId } };

    // Fetch the first (and only) document of this type
    const doc = await client.fetch(`*[_type == $type][0]{ _id }`, { type });

    if (!doc) {
      console.warn(`⚠️  No document found for type "${type}" — skipping.`);
      continue;
    }

    await client.patch(doc._id).set({ backgroundImage: imageRef }).commit();
    console.log(`✅ Patched ${type} (${doc._id}) → ${img === 'a' ? 'hero.jpg' : 'hero2.png'}`);
  }

  console.log('\n🎉 All background images seeded successfully!');
}

main().catch((err) => {
  console.error('❌ Error:', err.message);
  process.exit(1);
});
