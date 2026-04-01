// src/animations/basic.js
import { createIntersectionAnimation } from './index.js';

// Initialize basic animations on page load
export function initBasicAnimations() {
  // Fade-in-up animations
  const fadeElements = document.querySelectorAll('.animate-fade-in-up');
  if (fadeElements.length > 0) {
    createIntersectionAnimation(fadeElements, {
      translateY: [20, 0],
      opacity: [0, 1],
      duration: 600,
      easing: 'easeOutCubic'
    }, 0.1);
  }

  // Stagger animations for groups
  const staggerGroups = document.querySelectorAll('[data-animate-stagger]');
  staggerGroups.forEach(group => {
    const children = group.querySelectorAll('.animate-fade-in-up');
    if (children.length > 0) {
      createIntersectionAnimation(children, {
        translateY: [20, 0],
        opacity: [0, 1],
        duration: 600,
        easing: 'easeOutCubic',
        delay: (el, i) => i * 100
      }, 0.1);
    }
  });
}

// Initialize on DOM ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initBasicAnimations);
} else {
  initBasicAnimations();
}