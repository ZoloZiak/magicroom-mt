// src/animations/hover.js
import { createAnimation } from './index.js';

// Spring hover effects
export function initHoverAnimations() {
  const springHoverElements = document.querySelectorAll('.spring-hover');

  springHoverElements.forEach(element => {
    let animation;

    element.addEventListener('mouseenter', () => {
      if (animation) animation.pause();
      animation = createAnimation(element, {
        translateY: [0, -2],
        boxShadow: ['0 4px 20px rgba(45,36,33,0.09)', '0 8px 40px rgba(45,36,33,0.15)'],
        duration: 350,
        easing: 'cubicBezier(0.34, 1.56, 0.64, 1)'
      });
    });

    element.addEventListener('mouseleave', () => {
      if (animation) animation.pause();
      animation = createAnimation(element, {
        translateY: [-2, 0],
        boxShadow: ['0 8px 40px rgba(45,36,33,0.15)', '0 4px 20px rgba(45,36,33,0.09)'],
        duration: 350,
        easing: 'cubicBezier(0.34, 1.56, 0.64, 1)'
      });
    });
  });
}

// Initialize on DOM ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initHoverAnimations);
} else {
  initHoverAnimations();
}