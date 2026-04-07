/**
 * Central GSAP setup — import this instead of importing gsap + plugins individually.
 * Registers ScrollTrigger once for the entire app.
 */
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export { gsap, ScrollTrigger };
