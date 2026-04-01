// src/animations/index.js
import { animate, timeline } from 'animejs';

// Check for reduced motion preference
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// Utility function to create animations only if motion is allowed
function createAnimation(target, options) {
  if (prefersReducedMotion) return null;
  return animate(target, options);
}

// Utility for Intersection Observer animations
function createIntersectionAnimation(target, options, threshold = 0.1) {
  if (prefersReducedMotion) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        createAnimation(entry.target, options);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold });

  if (target) {
    if (NodeList.prototype.isPrototypeOf(target)) {
      target.forEach(el => observer.observe(el));
    } else {
      observer.observe(target);
    }
  }
}

// Export functions for use in components
export { createAnimation, createIntersectionAnimation, timeline };