// src/animations/loops.js
import { animate } from 'animejs';

// Continuous loop animations for enhanced fluidity
export function initLoopAnimations() {
  // Pulsing CTA buttons
  const ctaButtons = document.querySelectorAll('[variant="cta"]');
  ctaButtons.forEach(button => {
    animate(button, {
      scale: [1, 1.02, 1],
      duration: 2000,
      easing: 'easeInOutSine',
      loop: true,
      direction: 'alternate'
    });
  });

  // Subtle floating animation for badges
  const badges = document.querySelectorAll('.badge');
  badges.forEach(badge => {
    animate(badge, {
      translateY: [0, -2, 0],
      duration: 3000,
      easing: 'easeInOutSine',
      loop: true,
      delay: Math.random() * 1000
    });
  });

  // Breathing effect for hero images
  const heroImages = document.querySelectorAll('.hero img');
  heroImages.forEach(img => {
    animate(img, {
      scale: [1, 1.005, 1],
      duration: 4000,
      easing: 'easeInOutSine',
      loop: true
    });
  });

  // Gentle morphing for icons (if SVG)
  const icons = document.querySelectorAll('.icon-morph');
  icons.forEach(icon => {
    if (icon.tagName.toLowerCase() === 'svg') {
      animate(icon, {
        rotate: [0, 5, 0],
        duration: 5000,
        easing: 'easeInOutSine',
        loop: true,
        delay: Math.random() * 2000
      });
    }
  });

  // Flowing gradient animation for backgrounds
  const gradientElements = document.querySelectorAll('.gradient-flow');
  gradientElements.forEach(el => {
    animate(el, {
      backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
      duration: 8000,
      easing: 'linear',
      loop: true
    });
  });

  // Ripple effect for interactive elements
  const interactiveElements = document.querySelectorAll('.interactive-ripple');
  interactiveElements.forEach(el => {
    el.addEventListener('mouseenter', () => {
      animate(el, {
        boxShadow: ['0 0 0 0 rgba(201, 168, 108, 0.4)', '0 0 0 10px rgba(201, 168, 108, 0)', '0 0 0 0 rgba(201, 168, 108, 0)'],
        duration: 600,
        easing: 'easeOutQuart',
        loop: false
      });
    });
  });

  // Continuous parallax-like movement for background elements
  const parallaxElements = document.querySelectorAll('.parallax-float');
  parallaxElements.forEach((el, index) => {
    animate(el, {
      translateX: [0, 10, 0],
      translateY: [0, -5, 0],
      duration: 6000 + index * 1000,
      easing: 'easeInOutSine',
      loop: true,
      delay: index * 500
    });
  });
}

// Initialize on DOM ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initLoopAnimations);
} else {
  initLoopAnimations();
}