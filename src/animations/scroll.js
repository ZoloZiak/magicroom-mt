// src/animations/scroll.js
import { createAnimation } from './index.js';

// Scroll progress indicator
export function initScrollProgress() {
  const progressBar = document.querySelector('.scroll-progress');
  if (!progressBar) return;

  let ticking = false;

  function updateProgress() {
    const scrollTop = window.pageYOffset;
    const docHeight = document.body.offsetHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;

    createAnimation(progressBar, {
      width: `${scrollPercent}%`,
      duration: 100,
      easing: 'linear'
    });

    ticking = false;
  }

  function onScroll() {
    if (!ticking) {
      requestAnimationFrame(updateProgress);
      ticking = true;
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });
}

// Initialize on DOM ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initScrollProgress);
} else {
  initScrollProgress();
}