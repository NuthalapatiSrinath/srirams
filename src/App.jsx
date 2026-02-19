import React, { useEffect } from "react";
import { BrowserRouter, useNavigate } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import toast from "react-hot-toast";
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

// Global Auth Check Component
function GlobalAuthChecker() {
  const navigate = useNavigate();

  useEffect(() => {
    // Global click handler to check authentication on button/link clicks
    const handleClick = (e) => {
      // Check if clicked element is a button, anchor, or has role="button"
      const target = e.target.closest('button, a, [role="button"]');

      if (target) {
        // Skip for login/signup/forgot-password related buttons
        const skipPaths = [
          "/login",
          "/signup",
          "/register",
          "/forgot-password",
          "/reset-password",
          "/verify-email",
        ];
        const href = target.getAttribute("href");
        const isAuthButton = skipPaths.some(
          (path) =>
            href?.includes(path) ||
            target.textContent?.toLowerCase().includes("login") ||
            target.textContent?.toLowerCase().includes("sign up") ||
            target.textContent?.toLowerCase().includes("register"),
        );

        // Check if it's a protected action (not on auth pages)
        const currentPath = window.location.pathname;
        const isOnAuthPage = skipPaths.some((path) =>
          currentPath.includes(path),
        );

        if (!isOnAuthPage && !isAuthButton) {
          const token = localStorage.getItem("token");

          if (!token) {
            e.preventDefault();
            e.stopPropagation();
            toast.error("Please login to continue");
            navigate("/login", { replace: true });
          }
        }
      }
    };

    // Add global click listener
    document.addEventListener("click", handleClick, true);

    return () => {
      document.removeEventListener("click", handleClick, true);
    };
  }, [navigate]);

  return null;
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <ActivityTrackerWrapper />
      <GlobalAuthChecker />
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
