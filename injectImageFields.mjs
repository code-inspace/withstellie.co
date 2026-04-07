import fs from 'fs';
import path from 'path';

const injections = {
  'home2.ts': ['Home2 — Method'],
  'home.ts': ['Home — Hero'],
  'coaching.ts': ['Coaching — Testimonials', 'Coaching — For Who', 'Coaching — Method MBS'],
  'about.ts': ['About — Headline', 'About — Turning Point', 'About — Quote'],
  'booking.ts': ['Booking — Programme'],
  'contact.ts': ['Contact — Headline']
};

const newField = `    defineField({ name: 'backgroundImage', type: 'image', title: 'Background Image', options: { hotspot: true } }),\n`;

for (const [file, names] of Object.entries(injections)) {
  const filePath = path.join(process.cwd(), 'src/schemas', file);
  if (!fs.existsSync(filePath)) continue;
  
  let content = fs.readFileSync(filePath, 'utf-8');
  let updated = content;
  
  for (const name of names) {
    // We look for '  preview: { prepare: () => ({ title: 'Name' }) }'
    // and inject the new field right before the '],' that precedes it.
    
    // SafestRegex: matches the closing bracket array `  ],\n  preview: { prepare: () => ({ title: 'Name' }) }`
    const escapedName = name.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
    const regex = new RegExp(`  \\](,\\n)*  preview: \\{ prepare: \\(\\) => \\(\\{ title: '${escapedName}' \\}\\) \\}`, 'g');
    
    updated = updated.replace(regex, (match) => {
      // match contains `  ],\n  preview: ...`
      return newField + match;
    });
  }
  
  if (content !== updated) {
    fs.writeFileSync(filePath, updated, 'utf-8');
    console.log(`Updated ${file}`);
  } else {
    console.log(`Failed or not found in ${file}`);
  }
}
