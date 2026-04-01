// src/animations/slovakia-culture.js
import { animate, timeline } from 'animejs';

// Animacje inspirowane głęboką kulturą Słowacji - Tatry, folklór, natura

export function initSlovakiaCultureAnimations() {
  // Tatry mountains parallax effect - symbol górskiej kultury
  const mountains = document.querySelectorAll('.tatry-mountain');
  mountains.forEach((mountain, index) => {
    animate(mountain, {
      translateY: [0, -10, 0],
      opacity: [0.8, 1, 0.8],
      duration: 8000 + index * 2000,
      easing: 'easeInOutSine',
      loop: true,
      delay: index * 1000
    });
  });

  // Slovak folk pattern waves - inspirowane tradycyjnymi wzorami
  const folkPatterns = document.querySelectorAll('.folk-pattern');
  folkPatterns.forEach(pattern => {
    animate(pattern, {
      rotate: [0, 2, 0, -2, 0],
      scale: [1, 1.05, 1, 1.02, 1],
      duration: 6000,
      easing: 'easeInOutQuart',
      loop: true
    });
  });

  // Slovak river flow - inspirowane Dunajem i Váhom
  const rivers = document.querySelectorAll('.slovak-river');
  rivers.forEach(river => {
    animate(river, {
      backgroundPosition: ['0% 0%', '100% 100%'],
      duration: 12000,
      easing: 'linear',
      loop: true
    });
  });

  // Slovak flag colors transition - patriotyczne animacje
  const flagElements = document.querySelectorAll('.slovak-flag');
  flagElements.forEach(element => {
    const flagTimeline = timeline({
      loop: true,
      duration: 4000
    });

    flagTimeline
      .add({
        targets: element,
        backgroundColor: '#FFFFFF', // biały
        duration: 1000
      })
      .add({
        targets: element,
        backgroundColor: '#0B4EA2', // niebieski
        duration: 1000
      })
      .add({
        targets: element,
        backgroundColor: '#EE1C25', // czerwony
        duration: 1000
      })
      .add({
        targets: element,
        backgroundColor: '#FFFFFF',
        duration: 1000
      });
  });

  // Slovak crystal morphing - inspirowane słowackimi kryształami
  const crystals = document.querySelectorAll('.slovak-crystal');
  crystals.forEach(crystal => {
    animate(crystal, {
      scale: [1, 1.1, 0.9, 1.05, 1],
      rotate: [0, 45, 90, 135, 180],
      opacity: [0.8, 1, 0.9, 1, 0.8],
      duration: 10000,
      easing: 'easeInOutCubic',
      loop: true
    });
  });

  // Slovak wine swirl - kultura winiarska
  const wineElements = document.querySelectorAll('.slovak-wine');
  wineElements.forEach(wine => {
    animate(wine, {
      rotate: [0, 10, -5, 8, 0],
      scale: [1, 1.02, 0.98, 1.01, 1],
      duration: 5000,
      easing: 'easeInOutSine',
      loop: true
    });
  });

  // Slovak castle towers - historyczne zamki
  const castleTowers = document.querySelectorAll('.castle-tower');
  castleTowers.forEach((tower, index) => {
    animate(tower, {
      translateY: [0, -15, 0],
      scale: [1, 1.1, 1],
      duration: 7000 + index * 1000,
      easing: 'easeInOutQuad',
      loop: true,
      delay: index * 500
    });
  });

  // Slovak folk dance rhythm - tradycyjne tańce
  const danceElements = document.querySelectorAll('.folk-dance');
  danceElements.forEach(dance => {
    const danceTimeline = timeline({
      loop: true,
      duration: 3000
    });

    danceTimeline
      .add({
        targets: dance,
        translateX: [0, 20, 0],
        rotate: [0, 15, 0],
        duration: 750
      })
      .add({
        targets: dance,
        translateX: [0, -20, 0],
        rotate: [0, -15, 0],
        duration: 750
      })
      .add({
        targets: dance,
        translateY: [0, -10, 0],
        scale: [1, 1.1, 1],
        duration: 750
      })
      .add({
        targets: dance,
        translateY: [0, 10, 0],
        scale: [1, 0.9, 1],
        duration: 750
      });
  });

  // Slovak nature seasons - cztery pory roku
  const seasons = document.querySelectorAll('.slovak-seasons');
  seasons.forEach(season => {
    const seasonTimeline = timeline({
      loop: true,
      duration: 16000 // 4 sekundy na porę roku
    });

    // Wiosna - zielony
    seasonTimeline.add({
      targets: season,
      backgroundColor: '#7CB342',
      duration: 4000
    })
    // Lato - złoty
    .add({
      targets: season,
      backgroundColor: '#FFD54F',
      duration: 4000
    })
    // Jesień - pomarańczowy
    .add({
      targets: season,
      backgroundColor: '#FF8A65',
      duration: 4000
    })
    // Zima - biały
    .add({
      targets: season,
      backgroundColor: '#FFFFFF',
      duration: 4000
    });
  });

  // Slovak heart pulse - patriotyzm
  const slovakHearts = document.querySelectorAll('.slovak-heart');
  slovakHearts.forEach(heart => {
    animate(heart, {
      scale: [1, 1.3, 1, 1.2, 1],
      rotate: [0, 10, 0, -10, 0],
      duration: 2000,
      easing: 'easeInOutCubic',
      loop: true
    });
  });
}

// Initialize on DOM ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initSlovakiaCultureAnimations);
} else {
  initSlovakiaCultureAnimations();
}