import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import AppRoutes from "./routes/AppRoutes";
import ScrollToTop from "./components/ScrollToTop";
import useActivityTracking from "./hooks/useActivityTracker";

// Activity Tracker Component
function ActivityTrackerWrapper() {
  // Enable comprehensive tracking globally: page views, scrolls, mouse movements, time on page, and mobile touch events
  useActivityTracking({
    trackPageViews: true,
    trackScrolls: true,
    trackMouse: true,
    trackTime: true,
    trackTouch: true,
    scrollThrottle: 2000,
    mouseThrottle: 5000,
  });
  return null;
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <ActivityTrackerWrapper />
      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            background: "#333",
            color: "#fff",
          },
        }}
      />
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
