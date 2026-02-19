import React from "react";
import { Routes, Route } from "react-router-dom";

// Layouts
import MainLayout from "../layouts/MainLayout";

// Pages
import Home from "../pages/Home";
import CourseDetail from "../pages/CourseDetail";
import Dashboard from "../pages/Dashboard";
import NotFound from "../pages/NotFound";

// Course Pages
import FoundationCourses from "../pages/FoundationCourses";
import PrelimsCourses from "../pages/PrelimsCourses";
import MainsCourses from "../pages/MainsCourses";
import OptionalCourses from "../pages/OptionalCourses";

// About Us Pages
import OurStory from "../pages/OurStory";
import Faculty from "../pages/Faculty";
import Results from "../pages/Results";
import Testimonials from "../pages/Testimonials";

// Test Series & Current Affairs
import TestSeries from "../pages/TestSeries";
import CurrentAffairs from "../pages/CurrentAffairs";
import FreeResources from "../pages/FreeResources";

// Utility Pages
import UpcomingBatches from "../pages/UpcomingBatches";
import Blog from "../pages/Blog";
import Portal from "../pages/Portal";
import Contact from "../pages/Contact";

// Auth Pages
import NewLogin from "../pages/auth/NewLogin";
import SignUp from "../pages/SignUp";
import Register from "../pages/auth/Register";
import ForgotPassword from "../pages/auth/ForgotPassword";
import ResetPassword from "../pages/auth/ResetPassword";
import VerifyEmail from "../pages/auth/VerifyEmail";
import Profile from "../pages/auth/Profile";
import Settings from "../pages/auth/Settings";

// Auth Guard
import AuthGuard from "../components/AuthGuard";

// --- 1. DEFINE ROUTES & TITLES HERE ---
export const appRoutes = [
  // Main Pages
  { path: "/", element: <Home />, title: "Sriram's IAS - Home" },
  { path: "/login", element: <NewLogin />, title: "Login" },
  {
    path: "/courses/:slug",
    element: <CourseDetail />,
    title: "Course Details",
  },

  // Course Category Pages
  {
    path: "/courses/category/foundation",
    element: <FoundationCourses />,
    title: "Foundation Courses",
  },
  {
    path: "/courses/category/prelims",
    element: <PrelimsCourses />,
    title: "Prelims Courses",
  },
  {
    path: "/courses/category/mains",
    element: <MainsCourses />,
    title: "Mains Courses",
  },
  {
    path: "/courses/category/optional",
    element: <OptionalCourses />,
    title: "Optional Courses",
  },

  // About Us Pages
  { path: "/about/our-story", element: <OurStory />, title: "Our Story" },
  { path: "/about/faculty", element: <Faculty />, title: "Our Faculty" },
  { path: "/about/results", element: <Results />, title: "Our Results" },
  {
    path: "/about/testimonials",
    element: <Testimonials />,
    title: "Student Testimonials",
  },

  // Test Series & Resources
  { path: "/test-series", element: <TestSeries />, title: "Test Series" },
  {
    path: "/current-affairs",
    element: <CurrentAffairs />,
    title: "Current Affairs",
  },
  {
    path: "/free-resources",
    element: <FreeResources />,
    title: "Free Resources",
  },

  // Utility Pages
  {
    path: "/upcoming-batches",
    element: <UpcomingBatches />,
    title: "Upcoming Batches",
  },
  { path: "/blog", element: <Blog />, title: "Blog" },
  { path: "/portal", element: <Portal />, title: "Student Portal" },
  { path: "/contact", element: <Contact />, title: "Contact Us" },

  // Auth Pages
  { path: "/signup", element: <SignUp />, title: "Sign Up" },
  { path: "/register", element: <Register />, title: "Register" },
  { path: "/login", element: <NewLogin />, title: "Login" },
  {
    path: "/forgot-password",
    element: <ForgotPassword />,
    title: "Forgot Password",
  },
  {
    path: "/reset-password",
    element: <ResetPassword />,
    title: "Reset Password",
  },
  {
    path: "/verify-email",
    element: <VerifyEmail />,
    title: "Verify Email",
  },
  { path: "/profile", element: <Profile />, title: "My Profile" },
  { path: "/settings", element: <Settings />, title: "Account Settings" },

  // Dashboard (Admin)
  { path: "/dashboard", element: <Dashboard />, title: "Dashboard Overview" },
];

// --- 2. ROUTE COMPONENTS ---

const AppRoutes = () => {
  // Auth routes that should NOT have MainLayout (no header/footer)
  const authRoutes = [
    "/login",
    "/signup",
    "/register",
    "/forgot-password",
    "/reset-password",
    "/verify-email",
  ];

  return (
    <Routes>
      {/* Auth Routes (No MainLayout - standalone pages) */}
      <Route path="/login" element={<NewLogin />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/register" element={<Register />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/reset-password" element={<ResetPassword />} />
      <Route path="/verify-email" element={<VerifyEmail />} />

      {/* All Other Routes use MainLayout (Topbar + Footer) */}
      <Route path="/" element={<MainLayout />}>
        {/* Public Pages */}
        <Route index element={<Home />} />
        <Route path="courses/:slug" element={<CourseDetail />} />

        {/* Dashboard/Admin Pages */}
        <Route
          path="dashboard"
          element={
            <AuthGuard>
              <Dashboard />
            </AuthGuard>
          }
        />

        {/* Profile & Settings (need auth but have layout) */}
        <Route
          path="profile"
          element={
            <AuthGuard>
              <Profile />
            </AuthGuard>
          }
        />
        <Route
          path="settings"
          element={
            <AuthGuard>
              <Settings />
            </AuthGuard>
          }
        />

        {/* Other Public Routes */}
        {appRoutes
          .filter(
            (route) =>
              !authRoutes.includes(route.path) &&
              route.path !== "/" &&
              route.path !== "/courses/:slug" &&
              route.path !== "/dashboard" &&
              route.path !== "/profile" &&
              route.path !== "/settings",
          )
          .map((route, index) => (
            <Route
              key={index}
              path={route.path.replace(/^\//, "")}
              element={route.element}
            />
          ))}
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
