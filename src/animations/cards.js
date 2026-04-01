// src/animations/cards.js
import { createIntersectionAnimation } from './index.js';

// Service cards stagger animation
export function initCardAnimations() {
  const serviceCards = document.querySelectorAll('.service-card');
  if (serviceCards.length > 0) {
    createIntersectionAnimation(serviceCards, {
      translateY: [30, 0],
      opacity: [0, 1],
      scale: [0.95, 1],
      duration: 500,
      easing: 'easeOutQuart',
      delay: (el, i) => i * 150
    }, 0.1);
  }
}

// Initialize on DOM ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initCardAnimations);
} else {
  initCardAnimations();
}