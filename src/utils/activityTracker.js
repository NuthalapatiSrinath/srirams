// src/utils/activityTracker.js
import { v4 as uuidv4 } from "uuid";
import api from "../api/axiosInstance";

/**
 * Session management
 */
const SESSION_KEY = "user_session_id";

export const getSessionId = () => {
  let sessionId = sessionStorage.getItem(SESSION_KEY);
  if (!sessionId) {
    sessionId = uuidv4();
    sessionStorage.setItem(SESSION_KEY, sessionId);
  }
  return sessionId;
};

/**
 * Get device information
 */
export const getDeviceInfo = () => {
  return {
    platform: navigator.platform || "unknown",
    isMobile: /Mobile|Android|iPhone/i.test(navigator.userAgent),
    screenWidth: window.screen.width,
    screenHeight: window.screen.height,
  };
};

/**
 * Activity queue for batch sending
 */
class ActivityQueue {
  constructor() {
    this.queue = [];
    this.flushInterval = 30000; // Flush every 30 seconds (backup only)
    this.maxQueueSize = 50; // Or when queue reaches 50 items (backup only)
    this.enableRealtimeTracking = true; // Send immediately for real-time updates
    this.startAutoFlush();
  }

  add(activity) {
    const activityData = {
      ...activity,
      sessionId: getSessionId(),
      device: getDeviceInfo(),
      timestamp: new Date().toISOString(),
    };

    // Send immediately for real-time tracking
    if (this.enableRealtimeTracking) {
      const token = localStorage.getItem("token");
      if (token) {
        api
          .post("/user/activity/track", activityData)
          .then(() => {
            console.log(
              `✅ Real-time activity tracked: ${activity.activityType}`,
            );
          })
          .catch((error) => {
            // If immediate send fails, add to queue for retry
            if (error.response?.status !== 401) {
              this.queue.push(activityData);
            }
          });
      }
    } else {
      // Fallback: add to queue for batch processing
      this.queue.push(activityData);
    }

    // Auto-flush if queue gets too large (backup mechanism)
    if (this.queue.length >= this.maxQueueSize) {
      this.flush();
    }
  }

  async flush() {
    if (this.queue.length === 0) return;

    const token = localStorage.getItem("token");
    if (!token) {
      console.log("⚠️ No token found - skipping activity tracking");
      this.queue = []; // Clear queue if not authenticated
      return;
    }

    const activities = [...this.queue];
    this.queue = [];

    try {
      console.log(`📤 Flushing ${activities.length} activities to backend...`);
      // Use axios instance which handles token refresh automatically
      const response = await api.post("/user/activity/batch", { activities });
      console.log(`✅ Tracked ${activities.length} activities successfully`);
      return response;
    } catch (error) {
      console.error(
        "❌ Failed to flush activities:",
        error.response?.status,
        error.response?.data || error.message,
      );
      // Don't retry on auth errors (user will be redirected to login by axios interceptor)
      if (error.response?.status !== 401 && error.response?.status !== 403) {
        // Put failed activities back in queue for retry (only for network errors, not auth)
        console.log("↩️ Re-queuing failed activities for retry");
        this.queue = [...activities, ...this.queue];
      } else {
        console.log("🚫 Auth error - not re-queuing activities");
      }
    }
  }

  startAutoFlush() {
    setInterval(() => {
      this.flush();
    }, this.flushInterval);

    // Flush on page unload - Force flush with axios
    window.addEventListener("beforeunload", () => {
      if (this.queue.length > 0) {
        // Synchronous flush before unload
        this.flush();
      }
    });
  }
}

const activityQueue = new ActivityQueue();

/**
 * Track page view
 */
export const trackPageView = (pathname, title) => {
  const token = localStorage.getItem("token");
  if (!token) {
    console.warn("⚠️ Not tracking - user not logged in");
    return;
  }

  console.log(`📊 Tracking page view: ${pathname}`);

  activityQueue.add({
    activityType: "page_view",
    page: {
      path: pathname,
      title: title || document.title,
      referrer: document.referrer,
    },
  });
};

/**
 * Track scroll depth
 */
export const trackScroll = (pathname, scrollDepth, maxScrollDepth) => {
  activityQueue.add({
    activityType: "scroll",
    page: {
      path: pathname,
      title: document.title,
    },
    scroll: {
      depth: scrollDepth,
      maxDepth: maxScrollDepth,
    },
  });
};

/**
 * Track button click
 */
export const trackButtonClick = (elementId, elementText, metadata = {}) => {
  activityQueue.add({
    activityType: "button_click",
    page: {
      path: window.location.pathname,
      title: document.title,
    },
    action: {
      element: elementId,
      value: elementText,
      metadata,
    },
  });
};

/**
 * Track form submission
 */
export const trackFormSubmit = (formName, formData) => {
  activityQueue.add({
    activityType: "form_submit",
    page: {
      path: window.location.pathname,
      title: document.title,
    },
    action: {
      element: formName,
      metadata: formData,
    },
  });
};

/**
 * Track course interaction
 */
export const trackCourseView = (courseId, courseName, metadata = {}) => {
  activityQueue.add({
    activityType: "course_view",
    page: {
      path: window.location.pathname,
      title: document.title,
    },
    course: {
      courseId,
      courseName,
      ...metadata,
    },
  });
};

/**
 * Track search
 */
export const trackSearch = (query, resultsCount) => {
  activityQueue.add({
    activityType: "search",
    page: {
      path: window.location.pathname,
      title: document.title,
    },
    action: {
      value: query,
      metadata: { resultsCount },
    },
  });
};

/**
 * Track filter application
 */
export const trackFilter = (filterType, filterValue) => {
  activityQueue.add({
    activityType: "filter",
    page: {
      path: window.location.pathname,
      title: document.title,
    },
    action: {
      element: filterType,
      value: filterValue,
    },
  });
};

/**
 * Track download
 */
export const trackDownload = (fileName, fileType, fileUrl) => {
  activityQueue.add({
    activityType: "download",
    page: {
      path: window.location.pathname,
      title: document.title,
    },
    action: {
      element: fileName,
      value: fileType,
      metadata: { url: fileUrl },
    },
  });
};

/**
 * Track mouse movement
 */
export const trackMouseMovement = (x, y, movementCount) => {
  activityQueue.add({
    activityType: "mouse_move",
    page: {
      path: window.location.pathname,
      title: document.title,
    },
    mouse: {
      x,
      y,
      movementCount,
    },
  });
};

/**
 * Track user registration
 */
export const trackRegistration = (email, name) => {
  activityQueue.add({
    activityType: "register",
    page: {
      path: window.location.pathname,
      title: document.title,
    },
    action: {
      element: "registration_form",
      metadata: { email, name },
    },
  });
};

/**
 * Track user login
 */
export const trackLogin = (email) => {
  activityQueue.add({
    activityType: "login",
    page: {
      path: window.location.pathname,
      title: document.title,
    },
    action: {
      element: "login_form",
      metadata: { email },
    },
  });
};

/**
 * Track navigation menu clicks
 */
export const trackNavigation = (menuItem, menuType, destination) => {
  activityQueue.add({
    activityType: "navigation_click",
    page: {
      path: window.location.pathname,
      title: document.title,
    },
    action: {
      element: menuItem,
      value: menuType, // 'topbar', 'sidebar', 'footer', etc.
      metadata: { destination },
    },
  });
};

/**
 * Track dropdown interactions
 */
export const trackDropdown = (dropdownName, action, selectedItem = null) => {
  activityQueue.add({
    activityType: "dropdown_interaction",
    page: {
      path: window.location.pathname,
      title: document.title,
    },
    action: {
      element: dropdownName,
      value: action, // 'open', 'close', 'select'
      metadata: { selectedItem },
    },
  });
};

/**
 * Track link clicks
 */
export const trackLinkClick = (linkText, linkUrl, linkType) => {
  activityQueue.add({
    activityType: "link_click",
    page: {
      path: window.location.pathname,
      title: document.title,
    },
    action: {
      element: linkText,
      value: linkUrl,
      metadata: { linkType }, // 'internal', 'external', 'social', etc.
    },
  });
};

/**
 * Track hover events (for important elements)
 */
export const trackHover = (elementId, elementType, duration) => {
  activityQueue.add({
    activityType: "hover",
    page: {
      path: window.location.pathname,
      title: document.title,
    },
    action: {
      element: elementId,
      value: elementType,
      metadata: { duration }, // in milliseconds
    },
  });
};

/**
 * Track time spent on page
 */
export const trackTimeOnPage = (pathname, timeSpent) => {
  activityQueue.add({
    activityType: "time_on_page",
    page: {
      path: pathname,
      title: document.title,
    },
    duration: timeSpent * 1000, // Convert seconds to milliseconds
    action: {
      metadata: { timeSpent }, // in seconds
    },
  });
};

/**
 * Track mobile touch events
 */
export const trackTouch = (eventType, elementId, coordinates) => {
  activityQueue.add({
    activityType: "touch_event",
    page: {
      path: window.location.pathname,
      title: document.title,
    },
    action: {
      element: elementId,
      value: eventType, // 'tap', 'long_press', 'double_tap'
      metadata: { coordinates },
    },
  });
};

/**
 * Track swipe gestures (mobile)
 */
export const trackSwipe = (direction, elementId) => {
  activityQueue.add({
    activityType: "swipe_gesture",
    page: {
      path: window.location.pathname,
      title: document.title,
    },
    action: {
      element: elementId,
      value: direction, // 'left', 'right', 'up', 'down'
    },
  });
};

/**
 * Track modal/dialog interactions
 */
export const trackModal = (modalName, action, metadata = {}) => {
  activityQueue.add({
    activityType: "modal_interaction",
    page: {
      path: window.location.pathname,
      title: document.title,
    },
    action: {
      element: modalName,
      value: action, // 'open', 'close', 'submit', 'cancel'
      metadata,
    },
  });
};

/**
 * Track video interactions
 */
export const trackVideo = (videoId, action, currentTime = 0) => {
  activityQueue.add({
    activityType: "video_interaction",
    page: {
      path: window.location.pathname,
      title: document.title,
    },
    action: {
      element: videoId,
      value: action, // 'play', 'pause', 'complete', 'seek'
      metadata: { currentTime },
    },
  });
};

/**
 * Track tab/section changes
 */
export const trackTabChange = (tabGroupName, oldTab, newTab) => {
  activityQueue.add({
    activityType: "tab_change",
    page: {
      path: window.location.pathname,
      title: document.title,
    },
    action: {
      element: tabGroupName,
      value: newTab,
      metadata: { oldTab },
    },
  });
};

/**
 * Track carousel/slider interactions
 */
export const trackCarousel = (carouselId, action, slideNumber) => {
  activityQueue.add({
    activityType: "carousel_interaction",
    page: {
      path: window.location.pathname,
      title: document.title,
    },
    action: {
      element: carouselId,
      value: action, // 'next', 'prev', 'auto', 'direct'
      metadata: { slideNumber },
    },
  });
};

/**
 * Track error occurrences
 */
export const trackError = (errorType, errorMessage, metadata = {}) => {
  activityQueue.add({
    activityType: "error",
    page: {
      path: window.location.pathname,
      title: document.title,
    },
    action: {
      element: errorType,
      value: errorMessage,
      metadata,
    },
  });
};

/**
 * Track copy/paste actions
 */
export const trackCopyPaste = (action, content, source) => {
  activityQueue.add({
    activityType: "copy_paste",
    page: {
      path: window.location.pathname,
      title: document.title,
    },
    action: {
      element: source,
      value: action, // 'copy', 'paste'
      metadata: { contentLength: content?.length || 0 },
    },
  });
};

/**
 * Force flush queue (useful for logout or critical actions)
 */
export const flushActivities = () => {
  return activityQueue.flush();
};

export default {
  trackPageView,
  trackScroll,
  trackButtonClick,
  trackFormSubmit,
  trackCourseView,
  trackSearch,
  trackFilter,
  trackDownload,
  trackMouseMovement,
  trackRegistration,
  trackLogin,
  trackNavigation,
  trackDropdown,
  trackLinkClick,
  trackHover,
  trackTimeOnPage,
  trackTouch,
  trackSwipe,
  trackModal,
  trackVideo,
  trackTabChange,
  trackCarousel,
  trackError,
  trackCopyPaste,
  flushActivities,
  getSessionId,
  getDeviceInfo,
};
