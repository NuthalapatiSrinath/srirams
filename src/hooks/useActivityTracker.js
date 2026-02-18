// src/hooks/useActivityTracker.js
import { useEffect, useRef, useCallback } from "react";
import { useLocation } from "react-router-dom";
import {
  trackPageView,
  trackScroll,
  trackButtonClick,
  trackCourseView,
  trackFormSubmit,
  trackMouseMovement,
  trackTimeOnPage,
  trackTouch,
  trackSwipe,
} from "../utils/activityTracker";

/**
 * Hook to track page views automatically
 */
export const usePageViewTracking = () => {
  const location = useLocation();
  const previousPath = useRef(location.pathname);

  useEffect(() => {
    if (location.pathname !== previousPath.current) {
      trackPageView(location.pathname, document.title);
      previousPath.current = location.pathname;
    }
  }, [location.pathname]);
};

/**
 * Hook to track scroll depth
 */
export const useScrollTracking = (throttleMs = 2000) => {
  const location = useLocation();
  const maxScrollDepth = useRef(0);
  const lastTracked = useRef(0);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;
      const scrollDepth = Math.round(
        ((scrollTop + windowHeight) / documentHeight) * 100,
      );

      // Update max scroll depth
      if (scrollDepth > maxScrollDepth.current) {
        maxScrollDepth.current = scrollDepth;
      }

      // Throttle tracking
      const now = Date.now();
      if (now - lastTracked.current < throttleMs) {
        // Clear existing timeout
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
        }

        // Set new timeout to track after throttle period
        timeoutRef.current = setTimeout(() => {
          trackScroll(location.pathname, scrollDepth, maxScrollDepth.current);
          lastTracked.current = Date.now();
        }, throttleMs);

        return;
      }

      // Track immediately if throttle period has passed
      trackScroll(location.pathname, scrollDepth, maxScrollDepth.current);
      lastTracked.current = now;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [location.pathname, throttleMs]);

  // Reset max scroll depth when path changes
  useEffect(() => {
    maxScrollDepth.current = 0;
  }, [location.pathname]);
};

/**
 * Hook to track button clicks
 */
export const useClickTracking = () => {
  return useCallback((elementId, elementText, metadata = {}) => {
    trackButtonClick(elementId, elementText, metadata);
  }, []);
};

/**
 * Hook to track form submissions
 */
export const useFormTracking = () => {
  return useCallback((formName, formData) => {
    trackFormSubmit(formName, formData);
  }, []);
};

/**
 * Hook to track course interactions
 */
export const useCourseTracking = () => {
  return useCallback((courseId, courseName, metadata = {}) => {
    trackCourseView(courseId, courseName, metadata);
  }, []);
};

/**
 * Hook to track time spent on page
 */
export const useTimeTracking = () => {
  const location = useLocation();
  const startTime = useRef(Date.now());

  useEffect(() => {
    startTime.current = Date.now();

    return () => {
      const timeSpent = Math.round((Date.now() - startTime.current) / 1000); // in seconds
      trackTimeOnPage(location.pathname, timeSpent);
    };
  }, [location.pathname]);

  return {
    getTimeSpent: () => Date.now() - startTime.current,
    resetTimer: () => {
      startTime.current = Date.now();
    },
  };
};

/**
 * Hook to track mouse movements
 */
export const useMouseTracking = (throttleMs = 5000) => {
  const location = useLocation();
  const mouseDataRef = useRef({ movements: 0, lastX: 0, lastY: 0 });
  const lastTrackedRef = useRef(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const distance = Math.sqrt(
        Math.pow(e.clientX - mouseDataRef.current.lastX, 2) +
          Math.pow(e.clientY - mouseDataRef.current.lastY, 2),
      );

      if (distance > 50) {
        mouseDataRef.current.movements++;
        mouseDataRef.current.lastX = e.clientX;
        mouseDataRef.current.lastY = e.clientY;

        // Track every 10 significant movements or after throttle period
        const now = Date.now();
        if (
          mouseDataRef.current.movements % 10 === 0 ||
          now - lastTrackedRef.current > throttleMs
        ) {
          trackMouseMovement(
            e.clientX,
            e.clientY,
            mouseDataRef.current.movements,
          );
          lastTrackedRef.current = now;
        }
      }
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [location.pathname, throttleMs]);

  // Reset movement count when path changes
  useEffect(() => {
    mouseDataRef.current = { movements: 0, lastX: 0, lastY: 0 };
  }, [location.pathname]);
};

/**
 * Hook to track mobile touch interactions
 */
export const useTouchTracking = () => {
  const location = useLocation();
  const touchStartRef = useRef({ x: 0, y: 0, time: 0 });

  useEffect(() => {
    // Only track on mobile devices
    if (!/Mobile|Android|iPhone|iPad/i.test(navigator.userAgent)) {
      return;
    }

    const handleTouchStart = (e) => {
      touchStartRef.current = {
        x: e.touches[0].clientX,
        y: e.touches[0].clientY,
        time: Date.now(),
      };
    };

    const handleTouchEnd = (e) => {
      if (!touchStartRef.current.time) return;

      const touchEndX = e.changedTouches[0].clientX;
      const touchEndY = e.changedTouches[0].clientY;
      const touchDuration = Date.now() - touchStartRef.current.time;

      const deltaX = touchEndX - touchStartRef.current.x;
      const deltaY = touchEndY - touchStartRef.current.y;

      // Long press detection (> 500ms with minimal movement)
      if (
        touchDuration > 500 &&
        Math.abs(deltaX) < 10 &&
        Math.abs(deltaY) < 10
      ) {
        const target = e.target;
        trackTouch("long_press", target.id || target.className, {
          x: touchEndX,
          y: touchEndY,
          duration: touchDuration,
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
        trackSwipe(direction, e.target.id || e.target.className);
      }

      // Double tap detection
      if (
        touchDuration < 200 &&
        Math.abs(deltaX) < 10 &&
        Math.abs(deltaY) < 10
      ) {
        const target = e.target;
        trackTouch("tap", target.id || target.className, {
          x: touchEndX,
          y: touchEndY,
        });
      }
    };

    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchend", handleTouchEnd, { passive: true });

    return () => {
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [location.pathname]);
};

/**
 * Combined hook for comprehensive tracking
 */
export const useActivityTracking = (options = {}) => {
  const {
    trackPageViews = true,
    trackScrolls = true,
    trackMouse = true,
    trackTime = true,
    trackTouch = true,
    scrollThrottle = 2000,
    mouseThrottle = 5000,
  } = options;

  if (trackPageViews) {
    usePageViewTracking();
  }

  if (trackScrolls) {
    useScrollTracking(scrollThrottle);
  }

  if (trackMouse) {
    useMouseTracking(mouseThrottle);
  }

  if (trackTime) {
    useTimeTracking();
  }

  if (trackTouch) {
    useTouchTracking();
  }

  const trackClick = useClickTracking();
  const trackForm = useFormTracking();
  const trackCourse = useCourseTracking();

  return {
    trackClick,
    trackForm,
    trackCourse,
  };
};

export default useActivityTracking;
