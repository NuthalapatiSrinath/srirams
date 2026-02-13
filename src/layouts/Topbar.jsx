import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  Phone,
  Mail,
  Menu,
  X,
  ChevronDown,
  User,
  Lock,
  LogIn,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

const Topbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [loginCredentials, setLoginCredentials] = useState({
    email: "student@sriramsias.com",
    password: "demo123456",
  });
  const navigate = useNavigate();

  const topCourses = [
    "2 Year General Studies Foundation Course",
    "CSAT Course for UPSC CSE Prelims",
    "Stride Mentorship Program 2026",
    "Mains Test Series",
  ];

  const handleLogin = (e) => {
    e.preventDefault();
    toast.success("🎉 Welcome back, Student! Login Successful", {
      duration: 4000,
      position: "top-center",
      style: {
        background: "#10b981",
        color: "#fff",
        padding: "16px",
        borderRadius: "10px",
        fontSize: "16px",
        fontWeight: "bold",
      },
      icon: "✅",
    });
    setIsLoginModalOpen(false);
    setTimeout(() => {
      navigate("/portal");
    }, 1500);
  };

  const menuItems = [
    {
      label: "COURSES",
      hasDropdown: true,
      dropdown: [
        { name: "Foundation Courses", path: "/courses/category/foundation" },
        { name: "Prelims Courses", path: "/courses/category/prelims" },
        { name: "Mains Courses", path: "/courses/category/mains" },
        { name: "Optional Courses", path: "/courses/category/optional" },
      ],
    },
    {
      label: "ABOUT US",
      hasDropdown: true,
      dropdown: [
        { name: "Our Story", path: "/about/our-story" },
        { name: "Faculty", path: "/about/faculty" },
        { name: "Results", path: "/about/results" },
        { name: "Testimonials", path: "/about/testimonials" },
      ],
    },
    {
      label: "TEST SERIES",
      hasDropdown: true,
      dropdown: [
        { name: "Prelims Test Series", path: "/test-series" },
        { name: "Mains Test Series", path: "/test-series" },
        { name: "CSAT Tests", path: "/test-series" },
      ],
    },
    {
      label: "CURRENT AFFAIRS",
      hasDropdown: true,
      dropdown: [
        { name: "Daily Updates", path: "/current-affairs" },
        { name: "Weekly Magazine", path: "/current-affairs" },
        { name: "Monthly Compilation", path: "/current-affairs" },
      ],
    },
    {
      label: "FREE RESOURCES",
      hasDropdown: true,
      dropdown: [
        { name: "Study Materials", path: "/free-resources" },
        { name: "Previous Papers", path: "/free-resources" },
        { name: "Video Lectures", path: "/free-resources" },
      ],
    },
  ];

  return (
    <>
      <Toaster />
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-50 shadow-2xl backdrop-blur-sm"
      >
        {/* Top Announcement Bar - Vibrant Gradient */}
        <div className="bg-gradient-to-r from-purple-700 via-fuchsia-600 to-pink-600 text-white overflow-hidden py-2">
          <motion.div
            className="flex gap-12"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {[...topCourses, ...topCourses, ...topCourses].map(
              (course, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 whitespace-nowrap"
                >
                  <svg
                    className="w-4 h-4 text-yellow-300"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                  </svg>
                  <span className="text-sm font-semibold">{course}</span>
                </div>
              ),
            )}
          </motion.div>
        </div>

        {/* Contact Bar - Complementary Gradient */}
        <div className="hidden lg:block bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-700 text-white py-3 shadow-lg">
          <div className="container mx-auto px-6 flex items-center justify-between">
            <motion.a
              href="tel:8686818384"
              className="flex items-center gap-3 hover:text-yellow-300 transition-all duration-300 group"
              whileHover={{ scale: 1.05, x: 5 }}
            >
              <div className="bg-white rounded-full p-2 shadow-lg group-hover:shadow-yellow-300/50 transition-all">
                <Phone className="w-5 h-5 text-purple-600" />
              </div>
              <span className="font-bold text-base">
                8686818384/ 9963917712
              </span>
            </motion.a>

            <motion.button
              className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-gray-900 px-8 py-3 rounded-full font-black shadow-xl text-base hover:shadow-2xl hover:shadow-orange-500/50 transition-all duration-300"
              whileHover={{ scale: 1.08, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Book <span className="text-white">FREE</span> 1:1 Mentorship for
              UPSC CSE
            </motion.button>

            <motion.a
              href="mailto:enquiry@sriramsias.com"
              className="flex items-center gap-3 hover:text-yellow-300 transition-all duration-300 group"
              whileHover={{ scale: 1.05, x: -5 }}
            >
              <span className="font-bold text-base">
                enquiry@sriramsias.com
              </span>
              <div className="bg-white rounded-full p-2 shadow-lg group-hover:shadow-yellow-300/50 transition-all">
                <Mail className="w-5 h-5 text-purple-600" />
              </div>
            </motion.a>
          </div>
        </div>

        {/* Main Navigation Bar - Premium Gradient Design */}
        <div className="hidden lg:block bg-gradient-to-r from-purple-600 via-violet-600 to-fuchsia-600 shadow-2xl">
          <div className="container mx-auto px-8">
            <div className="flex items-center justify-between py-4 gap-6">
              {/* Logo - Bigger & Clean */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex-shrink-0 cursor-pointer bg-white p-3 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300"
                onClick={() => navigate("/")}
                whileHover={{ scale: 1.08, y: -2 }}
              >
                <img
                  src="/SriramIAS.png"
                  alt="Sriram's IAS"
                  className="h-20 w-auto object-contain"
                />
              </motion.div>

              {/* Action Buttons - Sleek White Design */}
              <div className="hidden lg:flex items-center gap-4">
                <motion.button
                  onClick={() => navigate("/upcoming-batches")}
                  className="bg-white/95 hover:bg-white text-purple-700 px-5 py-3 rounded-lg font-bold text-sm shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 border-2 border-white/50"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3z" />
                  </svg>
                  Upcoming Batches
                </motion.button>

                <motion.button
                  onClick={() => navigate("/blog")}
                  className="bg-white/95 hover:bg-white text-purple-700 px-5 py-3 rounded-lg font-bold text-sm shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-white/50"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  Blog
                </motion.button>

                <motion.button
                  onClick={() => navigate("/contact")}
                  className="bg-white/95 hover:bg-white text-purple-700 px-5 py-3 rounded-lg font-bold text-sm shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-white/50"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  Contact Us
                </motion.button>

                <motion.button
                  onClick={() => setIsLoginModalOpen(true)}
                  className="bg-gradient-to-r from-yellow-400 via-orange-500 to-pink-500 hover:from-yellow-500 hover:via-orange-600 hover:to-pink-600 text-white px-6 py-3 rounded-lg font-black text-sm shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center gap-2 border-2 border-white/30"
                  whileHover={{ scale: 1.08, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <LogIn className="w-5 h-5" />
                  Student Login
                </motion.button>
              </div>

              {/* Search Bar - Clean White Design */}
              <motion.div
                className="hidden md:flex items-center"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
              >
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search courses..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-72 pl-5 pr-12 py-3 bg-white/95 border-2 border-white/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-white focus:border-white text-sm font-medium text-gray-700 placeholder:text-gray-500 shadow-xl transition-all duration-300"
                  />
                  <motion.button
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white p-2 rounded-lg transition-all duration-300 shadow-lg"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Search className="w-4 h-4" />
                  </motion.button>
                </div>
              </motion.div>

              {/* Mobile Menu Button */}
              <motion.button
                className="lg:hidden text-white bg-white/20 p-2 rounded-lg backdrop-blur-sm"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                whileTap={{ scale: 0.95 }}
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </motion.button>
            </div>
          </div>
        </div>

        {/* Bottom Menu Bar - Enhanced with Beautiful Gradient */}
        <div className="bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50 border-t-2 border-purple-200 shadow-lg">
          <div className="container mx-auto px-6">
            {/* Mobile Menu Toggle */}
            <div className="lg:hidden flex items-center justify-between py-3">
              <div className="bg-white p-2 rounded-xl shadow-lg">
                <img
                  src="/SriramIAS.png"
                  alt="Sriram's IAS"
                  className="h-14 w-auto object-contain cursor-pointer"
                  onClick={() => navigate("/")}
                />
              </div>
              <motion.button
                className="text-gray-700 p-2"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                whileTap={{ scale: 0.95 }}
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </motion.button>
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center justify-center py-3">
              <div className="flex items-center gap-2 bg-gradient-to-r from-purple-50/80 to-pink-50/80 px-4 py-2 rounded-full shadow-lg backdrop-blur-sm">
                {menuItems.map((item, idx) => (
                  <motion.div
                    key={idx}
                    className="relative"
                    onHoverStart={() => setActiveDropdown(idx)}
                    onHoverEnd={() => setActiveDropdown(null)}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + idx * 0.05 }}
                  >
                    <motion.button
                      className="flex items-center gap-2 px-5 py-2.5 text-gray-800 font-extrabold text-sm hover:text-purple-700 hover:bg-white rounded-full transition-all duration-300 shadow-sm hover:shadow-md"
                      whileHover={{ scale: 1.05 }}
                    >
                      <span>{item.label}</span>
                      {item.hasDropdown && (
                        <motion.div
                          animate={{ rotate: activeDropdown === idx ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <ChevronDown className="w-4 h-4" />
                        </motion.div>
                      )}
                    </motion.button>

                    {/* Dropdown - Enhanced Design */}
                    <AnimatePresence>
                      {activeDropdown === idx && item.dropdown && (
                        <motion.div
                          className="absolute top-full left-0 mt-2 bg-white rounded-2xl shadow-2xl py-3 min-w-[240px] border-2 border-purple-100 z-50"
                          initial={{ opacity: 0, y: -10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: -10, scale: 0.95 }}
                          transition={{ duration: 0.2 }}
                        >
                          {item.dropdown.map((subItem, subIdx) => (
                            <motion.button
                              key={subIdx}
                              onClick={() => {
                                navigate(subItem.path);
                                setActiveDropdown(null);
                              }}
                              className="w-full text-left block px-5 py-3 text-gray-700 hover:bg-gradient-to-r hover:from-purple-50 hover:to-pink-50 hover:text-purple-700 transition-all duration-300 text-sm font-semibold rounded-lg mx-1"
                              whileHover={{ x: 5 }}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: subIdx * 0.03 }}
                            >
                              {subItem.name}
                            </motion.button>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
              {isMobileMenuOpen && (
                <motion.div
                  className="lg:hidden py-3 border-t border-gray-200"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {menuItems.map((item, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.05 }}
                      className="border-b border-gray-200 last:border-0"
                    >
                      <button
                        className="w-full flex items-center justify-between px-4 py-2 text-gray-700 font-semibold text-left text-sm"
                        onClick={() =>
                          setActiveDropdown(activeDropdown === idx ? null : idx)
                        }
                      >
                        <span>{item.label}</span>
                        {item.hasDropdown && (
                          <motion.div
                            animate={{
                              rotate: activeDropdown === idx ? 180 : 0,
                            }}
                            transition={{ duration: 0.2 }}
                          >
                            <ChevronDown className="w-3.5 h-3.5" />
                          </motion.div>
                        )}
                      </button>
                      <AnimatePresence>
                        {activeDropdown === idx && item.dropdown && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="bg-gray-50 overflow-hidden"
                          >
                            {item.dropdown.map((subItem, subIdx) => (
                              <motion.button
                                key={subIdx}
                                onClick={() => {
                                  navigate(subItem.path);
                                  setIsMobileMenuOpen(false);
                                  setActiveDropdown(null);
                                }}
                                className="w-full text-left block px-6 py-1.5 text-gray-600 hover:text-purple-600 text-xs"
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: subIdx * 0.03 }}
                              >
                                {subItem.name}
                              </motion.button>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  ))}
                  <motion.button
                    onClick={() => {
                      setIsLoginModalOpen(true);
                      setIsMobileMenuOpen(false);
                    }}
                    className="w-full bg-gradient-to-r from-purple-600 to-fuchsia-600 hover:from-purple-700 hover:to-fuchsia-700 text-white px-4 py-3 rounded-lg font-bold mt-3 transition-all duration-300 text-sm flex items-center justify-center gap-2"
                    whileTap={{ scale: 0.98 }}
                  >
                    <LogIn className="w-5 h-5" />
                    Student Login
                  </motion.button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </motion.header>

      {/* Student Login Modal */}
      <AnimatePresence>
        {isLoginModalOpen && (
          <motion.div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-[100]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsLoginModalOpen(false)}
          >
            <motion.div
              className="bg-white rounded-3xl shadow-2xl w-full max-w-md mx-4 overflow-hidden"
              initial={{ scale: 0.8, y: 50, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.8, y: 50, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="bg-gradient-to-r from-purple-600 via-fuchsia-600 to-pink-600 text-white p-6 relative">
                <motion.button
                  className="absolute top-4 right-4 text-white hover:text-gray-200 transition-colors"
                  onClick={() => setIsLoginModalOpen(false)}
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <X className="w-6 h-6" />
                </motion.button>
                <div className="text-center">
                  <motion.div
                    className="mx-auto w-20 h-20 bg-white rounded-full flex items-center justify-center mb-4 shadow-xl"
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: 0.2, type: "spring", damping: 10 }}
                  >
                    <LogIn className="w-10 h-10 text-purple-600" />
                  </motion.div>
                  <h2 className="text-3xl font-black mb-2">Student Login</h2>
                  <p className="text-purple-100 text-sm">
                    Welcome back to your learning journey!
                  </p>
                </div>
              </div>

              {/* Modal Body */}
              <form onSubmit={handleLogin} className="p-8 space-y-6">
                {/* Email Field */}
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2 flex items-center gap-2">
                    <User className="w-4 h-4 text-purple-600" />
                    Email Address
                  </label>
                  <motion.input
                    type="email"
                    value={loginCredentials.email}
                    onChange={(e) =>
                      setLoginCredentials({
                        ...loginCredentials,
                        email: e.target.value,
                      })
                    }
                    placeholder="student@sriramsias.com"
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-300 text-sm font-medium"
                    whileFocus={{ scale: 1.02 }}
                  />
                  <p className="mt-2 text-xs text-gray-500 italic">
                    Demo credentials pre-filled for testing
                  </p>
                </div>

                {/* Password Field */}
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2 flex items-center gap-2">
                    <Lock className="w-4 h-4 text-purple-600" />
                    Password
                  </label>
                  <motion.input
                    type="password"
                    value={loginCredentials.password}
                    onChange={(e) =>
                      setLoginCredentials({
                        ...loginCredentials,
                        password: e.target.value,
                      })
                    }
                    placeholder="demo123456"
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-300 text-sm font-medium"
                    whileFocus={{ scale: 1.02 }}
                  />
                </div>

                {/* Info Box */}
                <motion.div
                  className="bg-gradient-to-r from-purple-50 to-pink-50 border-2 border-purple-200 rounded-xl p-4"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <p className="text-sm text-gray-700 font-semibold text-center">
                    🎓 Click "Login" to access the Student Portal
                  </p>
                </motion.div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-600 via-fuchsia-600 to-pink-600 hover:from-purple-700 hover:via-fuchsia-700 hover:to-pink-700 text-white py-4 rounded-xl font-black text-lg shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-3"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <LogIn className="w-6 h-6" />
                  Login to Portal
                </motion.button>

                {/* Footer Links */}
                <div className="text-center space-y-2">
                  <p className="text-sm text-gray-600">
                    Don't have an account?{" "}
                    <button
                      type="button"
                      onClick={() => {
                        setIsLoginModalOpen(false);
                        navigate("/signup");
                      }}
                      className="text-purple-600 hover:text-purple-700 font-bold underline"
                    >
                      Sign Up
                    </button>
                  </p>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Topbar;
