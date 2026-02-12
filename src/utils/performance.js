// Performance optimizations and best practices

/**
 * Preload critical resources
 */
export const preloadImage = (src) => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = src;
  });
};

/**
 * Debounce function for scroll events
 */
export const debounce = (func, wait) => {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

/**
 * Throttle function for frequent events
 */
export const throttle = (func, limit) => {
  let inThrottle;
  return function (...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
};

/**
 * Check if reduced motion is preferred
 */
export const prefersReducedMotion = () => {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
};

/**
 * Lazy load images with intersection observer
 */
export const lazyLoadImage = (imageElement) => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target;
          const src = img.dataset.src;
          if (src) {
            img.src = src;
            img.removeAttribute("data-src");
            observer.unobserve(img);
          }
        }
      });
    },
    {
      rootMargin: "50px",
    },
  );

  observer.observe(imageElement);
};
