// src/animations/form.js
import { createAnimation } from './index.js';

// Form input focus animations
export function initFormAnimations() {
  const formInputs = document.querySelectorAll('.form-input');
  const formLabels = document.querySelectorAll('label[for]');

  formInputs.forEach(input => {
    const label = document.querySelector(`label[for="${input.id}"]`);
    if (!label) return;

    input.addEventListener('focus', () => {
      createAnimation(label, {
        translateY: [0, -20],
        fontSize: ['16px', '14px'],
        duration: 200,
        easing: 'easeOutQuad'
      });
    });

    input.addEventListener('blur', () => {
      if (!input.value) {
        createAnimation(label, {
          translateY: [-20, 0],
          fontSize: ['14px', '16px'],
          duration: 200,
          easing: 'easeOutQuad'
        });
      }
    });
  });
}

// Initialize on DOM ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initFormAnimations);
} else {
  initFormAnimations();
}