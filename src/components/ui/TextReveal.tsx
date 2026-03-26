import React from 'react';
import { cn } from '../../lib/utils';

interface TextRevealProps {
  children: string;
  className?: string;
  as?: React.ElementType;
}

// A custom alternative to GSAP SplitText to maintain robustness natively.
export const TextReveal: React.FC<TextRevealProps> = ({ children, className, as: Component = 'div' }) => {
  const words = children.split(' ');

  return (
    <Component className={cn("inline-block", className)}>
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden pb-1 -mb-1 mr-[0.3em]">
          <span className="inline-block reveal-word translate-y-[120%] rotate-[2deg] opacity-0 transform-gpu">
            {word}
          </span>
        </span>
      ))}
    </Component>
  );
};
