import { createClient } from '@sanity/client';
import dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });

const client = createClient({
  projectId: process.env.VITE_SANITY_PROJECT_ID || 'wls4qthn',
  dataset: process.env.VITE_SANITY_DATASET || 'production',
  useCdn: false,
  apiVersion: '2023-01-01',
  token: 'skPtkQ0tpu1VJduC0KAmBPDIyonn8R0y6hv09ckH0lzRlqkj60nMfxumww4ILF09pUulqHx9JybhcZ2M4'
});

async function run() {
  console.log("Patching Coaching arrays and subtrees...");

  try {
    const patchData: any = {};

    // MethodMBS string
    patchData['coachingMethodMBS.labels_fr'] = 'Neurosciences · PNL · Somatique · EFT · Yoga';
    patchData['coachingMethodMBS.labels_en'] = 'Neuroscience · NLP · Somatic · EFT · Yoga';

    // ForWho array items
    patchData['coachingForWho.items_fr'] = [
      "Tu fais tout bien, mais tu te sens étrangère à ta propre vie.",
      "Tu es en pleine transition et tu ne sais plus qui tu es dans tout ça.",
      "Tu portes une version de toi construite pour les autres, et tu commences à en avoir assez.",
      "Tu as déjà essayé de comprendre par toi-même, et tu sens qu'il te manque quelque chose pour vraiment avancer."
    ];
    patchData['coachingForWho.items_en'] = [
      "You do everything right, yet you feel like a stranger in your own life.",
      "You are in full transition and no longer know who you are in all of this.",
      "You carry a version of yourself built for others, and you're starting to get tired of it.",
      "You've already tried to figure it out yourself, but you feel something is missing to truly move forward."
    ];

    // FAQ arrays
    patchData['coachingFAQ.list'] = [
      {
        _key: 'faq1',
        q_fr: "C'est quoi la différence avec une psy ?",
        q_en: "What is the difference with therapy?",
        a_fr: "La thérapie explore le passé pour le comprendre. Le coaching travaille à partir de là où tu en es aujourd'hui, vers là où tu veux aller. Je ne diagnostique rien. Je t'accompagne à construire quelque chose de nouveau. Les deux peuvent coexister, et souvent se complètent très bien.",
        a_en: "Therapy explores the past to understand it. Coaching works from where you are today, towards where you want to go. I don't diagnose anything. I guide you in building something new. Both can coexist, and often complement each other very well.",
      },
      {
        _key: 'faq2',
        q_fr: "En combien de temps je verrai des résultats ?",
        q_en: "How long until I see results?",
        a_fr: "Ça dépend de toi, de ce que tu traverses, et du format qu'on choisit ensemble. Ce qui est certain : on ne travaille pas sur des symptômes. On travaille sur les fondations. Les effets sont plus lents à venir, et beaucoup plus durables.",
        a_en: "It depends on you, what you're going through, and the format we pick together. One thing is certain: we don't work on symptoms. We work on the foundation. The effects may take longer to surface, but they are far more lasting.",
      },
      {
        _key: 'faq3',
        q_fr: "Et si je ne suis pas prête ?",
        q_en: "What if I'm not ready?",
        a_fr: "Le fait que tu lises cette page, c'est déjà une information. Tu n'as pas besoin d'être prête à 100%. Tu as juste besoin d'être honnête avec toi-même sur le fait que quelque chose doit changer. Le reste, on le construit ensemble.",
        a_en: "The fact that you're reading this page is already information yourself. You don't need to be 100% ready. You just need to be honest with yourself that something has to change. We build the rest together.",
      },
      {
        _key: 'faq4',
        q_fr: "Comment se passe concrètement une session ?",
        q_en: "How does a session practically work?",
        a_fr: "En visio, depuis chez toi, à l'heure qui te convient. Chaque session est différente selon où tu en es ce jour-là. Il y a de l'espace pour parler, pour explorer, et des outils concrets à chaque fois. Tu repars toujours avec quelque chose à faire ou à observer.",
        a_en: "Via video call, from your home, at the time that suits you. Each session is different depending on where you're at that day. There is space to talk, to explore, and concrete tools every time. You always leave with something to do or reflect upon.",
      }
    ];

    // DiscoveryCall missing texts
    patchData['coachingDiscoveryCall.subtitle_fr'] = "C'est ok. Tu n'as pas besoin de savoir tout de suite.";
    patchData['coachingDiscoveryCall.subtitle_en'] = "It's ok. You don't need to know right away.";
    patchData['coachingDiscoveryCall.subline_fr'] = "Appel de 30 minutes · Gratuit · Sans engagement";
    patchData['coachingDiscoveryCall.subline_en'] = "30-minute call · Free · No strings attached";

    // Offers array
    patchData['coachingOffers.list'] = [
      {
        _key: 'offer1',
        name: 'SPARK',
        duration_fr: '1 mois',
        duration_en: '1 month',
        price: '400€',
        subtitle_fr: 'Pour celle prête à faire le premier pas.',
        subtitle_en: 'For the one ready to take the first step.',
        description_fr: '',
        description_en: '',
        features_fr: [
          '4 appels vidéo 1:1 de 60 minutes',
          'Suivi asynchrone entre les appels, réponse sous 24h',
          'Exercices personnalisés à ton rythme',
          'Bilan final et guide post-coaching'
        ],
        features_en: [
          '4 video calls (1:1), 60 minutes each',
          'Asynchronous support between calls, response within 24h',
          'Customized exercises at your own pace',
          'Final assessment and post-coaching guide'
        ],
        cta_fr: 'Commencer mon shift',
        cta_en: 'Start my shift',
        highlighted: false
      },
      {
        _key: 'offer2',
        name: 'SHIFT',
        duration_fr: '3 mois',
        duration_en: '3 months',
        price: '990€',
        subtitle_fr: 'Pour celle prête à changer la façon dont elle se perçoit.',
        subtitle_en: 'For the one ready to alter how she perceives herself.',
        description_fr: '3 mois, parce que la science le confirme : il faut environ 66 jours pour ancrer une nouvelle habitude durablement. Ce programme est conçu pour qu\'à la fin, ta nouvelle identité soit ancrée, et qu\'elle continue à se déployer bien après notre travail ensemble.',
        description_en: '3 months, because science confirms it: it takes roughly 66 days to anchor a new habit effectively. This program is built so that by the end, your new identity is strongly cemented and continues to unfold long after our work together.',
        features_fr: [
          '12 appels vidéo 1:1 de 60 à 75 minutes',
          'Suivi asynchrone continu, réponse sous 24h',
          'Outils et contenus construits pour toi',
          'Bilan mensuel structuré',
          'Accès entre les appels'
        ],
        features_en: [
          '12 video calls (1:1) from 60 to 75 minutes',
          'Continuous asynchronous support, response within 24h',
          'Tools and contents tailored for you',
          'Structured monthly assessments',
          'Direct access between calls'
        ],
        cta_fr: 'Commencer ma transformation',
        cta_en: 'Begin my transformation',
        highlighted: true
      },
      {
        _key: 'offer3',
        name: 'TRANSFORM',
        duration_fr: '6 mois',
        duration_en: '6 months',
        price: '2000€',
        subtitle_fr: 'Pour celle prête pour un changement profond et durable.',
        subtitle_en: 'For the one ready for a deep and permanent change.',
        description_fr: 'Pas juste un changement. Une réinvention complète.',
        description_en: 'Not just a change. A complete reinvention.',
        features_fr: [
          '24 appels vidéo 1:1',
          'Suivi prioritaire, réponse sous 12h',
          'Protocole et contenu entièrement sur mesure',
          'Bilans mensuels et plans d\'évolution',
          'Accès d\'urgence entre les appels',
          'Bilan final et plan post-coaching autonome'
        ],
        features_en: [
          '24 video calls (1:1)',
          'Priority support, response within 12h',
          'Fully tailored protocol and content',
          'Monthly assessments and evolution plans',
          'Emergency access between calls',
          'Final evaluation and autonomous post-coaching roadmap'
        ],
        cta_fr: 'Réserver ma place',
        cta_en: 'Reserve my spot',
        highlighted: false
      }
    ];

    await client
      .patch('pageCoaching')
      .setIfMissing({ 
        coachingMethodMBS: {},
        coachingForWho: {},
        coachingFAQ: {},
        coachingDiscoveryCall: {},
        coachingOffers: {}
      })
      .set(patchData)
      .commit();
    
    console.log("Patched pageCoaching matrices successfully!");
  } catch(e) {
    console.error("Error patching pageCoaching:", e);
  }
}

run();
