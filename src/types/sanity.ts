/**
 * TypeScript interfaces for all Sanity document types.
 * Use these instead of `any` when consuming Sanity data in components.
 */

// ─── Shared ──────────────────────────────────────────────────────────────────

export interface SanityImageAsset {
  url: string;
}

export interface SanityImage {
  asset: SanityImageAsset;
}

export interface BilingualString {
  fr: string;
  en: string;
}

// ─── Global ──────────────────────────────────────────────────────────────────

export interface GlobalNav {
  link1_fr: string; link1_en: string;
  link2_fr: string; link2_en: string;
  link3_fr: string; link3_en: string;
  link4_fr: string; link4_en: string;
}

export interface GlobalBanner {
  visible: boolean;
  label_fr: string;  label_en: string;
  text_fr: string;   text_en: string;
  cta_fr: string;    cta_en: string;
  link: string;
  expiry?: string;
}

// ─── Home ────────────────────────────────────────────────────────────────────

export interface HomeHero {
  visible: boolean;
  title_fr: string;    title_en: string;
  subtitle_fr: string; subtitle_en: string;
  cta_fr: string;      cta_en: string;
  backgroundImage?: SanityImage;
}

export interface HomeHook {
  visible: boolean;
  quote_fr: string;  quote_en: string;
  author_fr: string; author_en: string;
}

export interface HomePresentation {
  visible: boolean;
  title_fr: string; title_en: string;
  text1_fr: string; text1_en: string;
  text2_fr: string; text2_en: string;
}

export interface HomeTestimonialItem {
  quote_fr: string;  quote_en: string;
  author: string;
  age_fr: string;    age_en: string;
  role_fr: string;   role_en: string;
}

export interface HomeTestimonials {
  visible: boolean;
  title_fr: string; title_en: string;
  list: HomeTestimonialItem[];
}

export interface HomeCTA {
  visible: boolean;
  title_fr: string; title_en: string;
  cta_fr: string;   cta_en: string;
}

export interface HomeAbout {
  visible: boolean;
  title_fr: string; title_en: string;
  desc_fr: string;  desc_en: string;
  cta_fr: string;   cta_en: string;
}

export interface HomeMethod {
  visible: boolean;
  title_fr: string;    title_en: string;
  subtitle_fr: string; subtitle_en: string;
  cards?: MethodCard[];
}

export interface MethodCard {
  letter: string;
  title: string;
  desc_fr: string; desc_en: string;
}

// ─── About ───────────────────────────────────────────────────────────────────

export interface AboutHeadline {
  visible: boolean;
  title_fr: string;        title_en: string;
  subtitle_fr: string;     subtitle_en: string;
  warningTitle_fr: string; warningTitle_en: string;
  warningText_fr: string;  warningText_en: string;
  backgroundImage?: SanityImage;
}

export interface AboutBefore {
  visible: boolean;
  title_fr: string; title_en: string;
  text1_fr: string; text1_en: string;
  text2_fr: string; text2_en: string;
  text3_fr: string; text3_en: string;
}

export interface AboutTurningPoint {
  visible: boolean;
  title_fr: string;  title_en: string;
  text1_fr: string;  text1_en: string;
  text2_fr: string;  text2_en: string;
  text3_fr: string;  text3_en: string;
  quote_fr: string;  quote_en: string;
  backgroundImage?: SanityImage;
}

export interface AboutReconstruction {
  visible: boolean;
  title_fr: string;    title_en: string;
  subtitle_fr: string; subtitle_en: string;
  text1_fr: string; text1_en: string;
  text2_fr: string; text2_en: string;
  text3_fr: string; text3_en: string;
  text4_fr: string; text4_en: string;
}

export interface AboutWhy {
  visible: boolean;
  title_fr: string;    title_en: string;
  subtitle_fr: string; subtitle_en: string;
  text1_fr: string;    text1_en: string;
  text2_fr: string;    text2_en: string;
}

export interface AboutQuote {
  visible: boolean;
  text1_fr: string; text1_en: string;
  text2_fr: string; text2_en: string;
  backgroundImage?: SanityImage;
}

export interface AboutMethod {
  visible: boolean;
  title_fr: string;    title_en: string;
  subtitle_fr: string; subtitle_en: string;
  desc_fr: string;     desc_en: string;
  cta_fr: string;      cta_en: string;
}

export interface AboutCTA {
  visible: boolean;
  title_fr: string;  title_en: string;
  text1_fr: string;  text1_en: string;
  text2_fr: string;  text2_en: string;
  text3_fr: string;  text3_en: string;
  cta_fr: string;    cta_en: string;
  subline_fr: string; subline_en: string;
}

// ─── Coaching ─────────────────────────────────────────────────────────────────

export interface CoachingHeadline {
  visible: boolean;
  title_fr: string;    title_en: string;
  eyebrow_fr: string;  eyebrow_en: string;
  subtitle_fr: string; subtitle_en: string;
}

export interface CoachingDimension {
  title: string;
  desc_fr: string; desc_en: string;
}

export interface CoachingMethodMBS {
  visible: boolean;
  title_fr: string;    title_en: string;
  subtitle_fr: string; subtitle_en: string;
  labels_fr: string;   labels_en: string;
  dimensions: CoachingDimension[];
  backgroundImage?: SanityImage;
}

export interface CoachingForWho {
  visible: boolean;
  title_fr: string;    title_en: string;
  subtitle_fr: string; subtitle_en: string;
  items_fr: string[];  items_en: string[];
  backgroundImage?: SanityImage;
}

export interface CoachingTestimonialItem {
  quote_fr: string;  quote_en: string;
  author_fr: string; author_en: string;
  role_fr: string;   role_en: string;
}

export interface CoachingTestimonials {
  visible: boolean;
  title_fr: string; title_en: string;
  list: CoachingTestimonialItem[];
  backgroundImage?: SanityImage;
}

export interface CoachingOfferItem {
  name: string;
  highlighted: boolean;
  duration_fr: string;    duration_en: string;
  price: string;
  subtitle_fr: string;    subtitle_en: string;
  description_fr: string; description_en: string;
  features_fr: string[];  features_en: string[];
  cta_fr: string;         cta_en: string;
}

export interface CoachingOffers {
  visible: boolean;
  title_fr: string;       title_en: string;
  subtitle_fr: string;    subtitle_en: string;
  featuresLabel_fr: string; featuresLabel_en: string;
  startingAt_fr: string;  startingAt_en: string;
  list: CoachingOfferItem[];
}

export interface CoachingFAQItem {
  q_fr: string; q_en: string;
  a_fr: string; a_en: string;
}

export interface CoachingFAQ {
  visible: boolean;
  title_fr: string; title_en: string;
  list: CoachingFAQItem[];
}

export interface CoachingDiscoveryCall {
  visible: boolean;
  title_fr: string;    title_en: string;
  subtitle_fr: string; subtitle_en: string;
  desc_fr: string;     desc_en: string;
  cta_fr: string;      cta_en: string;
  subline_fr: string;  subline_en: string;
}

// ─── Contact ──────────────────────────────────────────────────────────────────

export interface ContactHeadline {
  visible: boolean;
  title_fr: string;    title_en: string;
  subtitle_fr: string; subtitle_en: string;
  subline_fr: string;  subline_en: string;
  backgroundImage?: SanityImage;
}

export interface ContactForm {
  visible: boolean;
  firstNameLabel_fr: string;       firstNameLabel_en: string;
  firstNamePlaceholder_fr: string; firstNamePlaceholder_en: string;
  emailLabel_fr: string;           emailLabel_en: string;
  emailPlaceholder_fr: string;     emailPlaceholder_en: string;
  subjectLabel_fr: string;         subjectLabel_en: string;
  subjectPlaceholder_fr: string;   subjectPlaceholder_en: string;
  subjectOpt1_fr: string;          subjectOpt1_en: string;
  subjectOpt2_fr: string;          subjectOpt2_en: string;
  subjectOpt3_fr: string;          subjectOpt3_en: string;
  messageLabel_fr: string;         messageLabel_en: string;
  messagePlaceholder_fr: string;   messagePlaceholder_en: string;
  submitBtn_fr: string;            submitBtn_en: string;
  privacyText_fr: string;          privacyText_en: string;
}

export interface ContactAlternatives {
  visible: boolean;
  title_fr: string;     title_en: string;
  instagram_fr: string; instagram_en: string;
  email_fr: string;     email_en: string;
}

export interface ContactRedirection {
  visible: boolean;
  title_fr: string; title_en: string;
  cta_fr: string;   cta_en: string;
}

// ─── Booking ──────────────────────────────────────────────────────────────────

export interface BookingHeadline {
  visible: boolean;
  title_fr: string;    title_en: string;
  subtitle_fr: string; subtitle_en: string;
  text_fr: string;     text_en: string;
}

export interface BookingProgram {
  visible: boolean;
  title_fr: string;   title_en: string;
  text1_fr: string;   text1_en: string;
  text2_fr: string;   text2_en: string;
  text3_fr: string;   text3_en: string;
  subline_fr: string; subline_en: string;
  backgroundImage?: SanityImage;
}

export interface BookingCalWidget {
  visible: boolean;
  title_fr: string; title_en: string;
  info1_fr: string; info1_en: string;
  info2_fr: string; info2_en: string;
}

export interface BookingContactAlt {
  visible: boolean;
  title_fr: string;     title_en: string;
  subtitle_fr: string;  subtitle_en: string;
  instagram_fr: string; instagram_en: string;
  email_fr: string;     email_en: string;
  subline_fr: string;   subline_en: string;
}

// ─── Page sections map (used in index.tsx files) ──────────────────────────────

export interface HomeSections {
  hero?: HomeHero;
  hook?: HomeHook;
  presentation?: HomePresentation;
  method?: HomeMethod;
  testimonials?: HomeTestimonials;
  cta?: HomeCTA;
  about?: HomeAbout;
}

export interface AboutSections {
  headline?: AboutHeadline;
  before?: AboutBefore;
  turningPoint?: AboutTurningPoint;
  reconstruction?: AboutReconstruction;
  why?: AboutWhy;
  quote?: AboutQuote;
  method?: AboutMethod;
  cta?: AboutCTA;
}

export interface CoachingSections {
  headline?: CoachingHeadline;
  methodMBS?: CoachingMethodMBS;
  forWho?: CoachingForWho;
  testimonials?: CoachingTestimonials;
  offers?: CoachingOffers;
  faq?: CoachingFAQ;
  discoveryCall?: CoachingDiscoveryCall;
}

export interface ContactSections {
  headline?: ContactHeadline;
  form?: ContactForm;
  alternatives?: ContactAlternatives;
  redirection?: ContactRedirection;
}

export interface BookingSections {
  headline?: BookingHeadline;
  program?: BookingProgram;
  calWidget?: BookingCalWidget;
  contactAlt?: BookingContactAlt;
}
