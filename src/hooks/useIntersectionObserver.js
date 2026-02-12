import { useState, useEffect, useRef } from "react";

/**
 * Custom hook to detect when an element is visible in viewport
 * This helps optimize rendering by only activating content when it's about to be seen
 */
export const useIntersectionObserver = (options = {}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasBeenVisible, setHasBeenVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const visible = entry.isIntersecting;
        setIsVisible(visible);

        // Once visible, keep it mounted
        if (visible && !hasBeenVisible) {
          setHasBeenVisible(true);
        }
      },
      {
        threshold: options.threshold || 0.1,
        rootMargin: options.rootMargin || "50px",
        ...options,
      },
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [hasBeenVisible, options]);

  return { elementRef, isVisible, hasBeenVisible };
};
