import { type RefObject } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from '../lib/gsap';

interface FadeTarget {
  selector: string;
  vars?: gsap.TweenVars;
  stagger?: number;
  delay?: number;
}

/**
 * Reusable scroll-triggered fade-in hook.
 * Replaces the repeated gsap.timeline + ScrollTrigger pattern across ~40 components.
 *
 * @example
 * const container = useRef<HTMLElement>(null);
 * useScrollFade(container, [{ selector: '.my-elem', stagger: 0.15 }]);
 */
export function useScrollFade(
  container: RefObject<HTMLElement | null>,
  targets: FadeTarget[],
  triggerStart = 'top 75%'
) {
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: triggerStart,
        toggleActions: 'play none none reverse',
      },
    });

    for (const { selector, vars, stagger = 0, delay = 0 } of targets) {
      tl.fromTo(
        selector,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, ease: 'power3.out', stagger, delay, ...vars },
        delay > 0 ? `-=${1 - delay}` : undefined
      );
    }
  }, { scope: container });
}
