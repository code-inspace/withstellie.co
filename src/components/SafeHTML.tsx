import React from 'react';
import DOMPurify from 'dompurify';

interface SafeHTMLProps {
  html?: string;
  tag?: keyof React.JSX.IntrinsicElements;
  className?: string;
}

/**
 * Renders CMS-provided HTML safely via DOMPurify.
 * Replaces all dangerouslySetInnerHTML usages.
 */
export const SafeHTML: React.FC<SafeHTMLProps> = ({ html = '', tag: Tag = 'span', className }) => {
  const clean = DOMPurify.sanitize(html, { USE_PROFILES: { html: true } });
  return <Tag className={className} dangerouslySetInnerHTML={{ __html: clean }} />;
};
