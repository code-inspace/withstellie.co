import { Helmet } from 'react-helmet-async';

const BASE_URL = 'https://withstellie.co';
const DEFAULT_IMAGE = `${BASE_URL}/hero.jpg`;

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  lang?: string;
  noindex?: boolean;
}

export const SEO: React.FC<SEOProps> = ({
  title = 'Stellie | Coaching de shift identitaire',
  description = 'Coaching individuel de shift identitaire pour les femmes et personnes queer prêtes à réécrire leur histoire. Méthode MBS — Mind · Body · Soul.',
  canonical,
  lang = 'fr',
  noindex = false,
}) => {
  const fullTitle = title.includes('Stellie') ? title : `${title} | With Stellie`;
  const url = canonical ? `${BASE_URL}${canonical}` : BASE_URL;

  return (
    <Helmet>
      <html lang={lang} />
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      {noindex && <meta name="robots" content="noindex, nofollow" />}

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="With Stellie" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={DEFAULT_IMAGE} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:locale" content={lang === 'en' ? 'en_US' : 'fr_FR'} />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={DEFAULT_IMAGE} />
    </Helmet>
  );
};
