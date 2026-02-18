// src/hooks/useActivityTracking.js
import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import {
  trackPageView,
  trackTimeOnPage,
  trackScroll,
  trackTouch,
  trackSwipe,
} from "../utils/activityTracker";

/**
 * Global activity tracking hook
 * Automatically tracks page views, time on page, scroll depth, and mobile interactions
 */
export const useActivityTracking = () => {
  const location = useLocation();
  const pageStartTime = useRef(Date.now());
  const maxScrollDepth = useRef(0);
  const touchStartX = useRef(0);
  const touchStartY = useRef(0);
  const touchStartTime = useRef(0);

  useEffect(() => {
    // Track page view
    trackPageView(location.pathname, document.title);
    pageStartTime.current = Date.now();
    maxScrollDepth.current = 0;

    // Track scroll depth
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      const scrollPercentage = Math.round(
        (scrollTop / (documentHeight - windowHeight)) * 100,
      );

      if (scrollPercentage > maxScrollDepth.current) {
        maxScrollDepth.current = scrollPercentage;

        // Track scroll milestones (25%, 50%, 75%, 100%)
        if (
          scrollPercentage === 25 ||
          scrollPercentage === 50 ||
          scrollPercentage === 75 ||
          scrollPercentage === 100
        ) {
          trackScroll(
            location.pathname,
            scrollPercentage,
            maxScrollDepth.current,
          );
        }
      }
    };

    // Track mobile touch events
    const handleTouchStart = (e) => {
      touchStartX.current = e.touches[0].clientX;
      touchStartY.current = e.touches[0].clientY;
      touchStartTime.current = Date.now();
    };

    const handleTouchEnd = (e) => {
      const touchEndX = e.changedTouches[0].clientX;
      const touchEndY = e.changedTouches[0].clientY;
      const touchDuration = Date.now() - touchStartTime.current;

      const deltaX = touchEndX - touchStartX.current;
      const deltaY = touchEndY - touchStartY.current;

      // Long press detection (> 500ms)
      if (
        touchDuration > 500 &&
        Math.abs(deltaX) < 10 &&
        Math.abs(deltaY) < 10
      ) {
        const target = e.target;
        trackTouch("long_press", target.id || target.className, {
          x: touchEndX,
          y: touchEndY,
        });
      }

      // Swipe detection (movement > 50px)
      if (Math.abs(deltaX) > 50 || Math.abs(deltaY) > 50) {
        let direction;
        if (Math.abs(deltaX) > Math.abs(deltaY)) {
          direction = deltaX > 0 ? "right" : "left";
        } else {
          direction = deltaY > 0 ? "down" : "up";
        }
        trackSwipe(direction, e.target.id || "page");
      }
    };

    // Track copy events
    const handleCopy = (e) => {
      const selection = window.getSelection().toString();
      if (selection) {
        // We'll import and use trackCopyPaste if needed
        console.log("Copy event tracked:", selection.substring(0, 50));
      }
    };

    // Add event listeners
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("touchstart", handleTouchStart);
    window.addEventListener("touchend", handleTouchEnd);
    document.addEventListener("copy", handleCopy);

    // Cleanup: Track time on page when leaving
    return () => {
      const timeSpent = Math.round((Date.now() - pageStartTime.current) / 1000); // in seconds
      trackTimeOnPage(location.pathname, timeSpent);

      // Remove event listeners
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
      document.removeEventListener("copy", handleCopy);
    };
  }, [location.pathname]);
};

export default useActivityTracking;
