// src/animations/blog.js
import { createIntersectionAnimation } from './index.js';

// Blog cards stagger animation
export function initBlogAnimations() {
  const blogCards = document.querySelectorAll('.blog-card');
  if (blogCards.length > 0) {
    createIntersectionAnimation(blogCards, {
      translateY: [20, 0],
      opacity: [0, 1],
      duration: 500,
      easing: 'easeOutQuart',
      delay: (el, i) => i * 150
    }, 0.1);
  }
}

// Article content animations
export function initArticleAnimations() {
  const articleElements = document.querySelectorAll('.article-element');
  if (articleElements.length > 0) {
    createIntersectionAnimation(articleElements, {
      translateX: [-20, 0],
      opacity: [0, 1],
      duration: 600,
      easing: 'easeOutCubic',
      delay: (el, i) => i * 200
    }, 0.2);
  }
}

// Initialize on DOM ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    initBlogAnimations();
    initArticleAnimations();
  });
} else {
  initBlogAnimations();
  initArticleAnimations();
}