import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  Phone,
  Mail,
  Menu,
  X,
  ChevronDown,
  GraduationCap,
  BookOpen,
  Users,
  Award,
  Calendar,
  MessageCircle,
  LogIn,
  Sparkles,
  User,
  LogOut,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../store/slices/authSlice";
import toast from "react-hot-toast";
import {
  trackNavigation,
  trackDropdown,
  trackButtonClick,
  trackSearch,
  flushActivities,
} from "../utils/activityTracker";

const ModernTopbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isAuthenticated, user } = useSelector((state) => state.auth);

  const handleLogout = async () => {
    trackButtonClick("logout_button", "Logout", { source: "topbar" });
    await flushActivities(); // Ensure tracking is sent before logout
    dispatch(logout());
    toast.success("Logged out successfully");
    navigate("/");
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const topCourses = [
    { icon: "🎓", text: "New Batch Starting Feb 2026" },
    { icon: "🏆", text: "500+ Selections in UPSC 2025" },
    { icon: "📚", text: "Free Test Series for New Students" },
    { icon: "⭐", text: "Limited Seats - Enroll Now!" },
  ];

  const menuItems = [
    {
      label: "COURSES",
      icon: BookOpen,
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
      icon: Users,
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
      icon: Award,
      hasDropdown: true,
      dropdown: [
        { name: "Prelims Test Series", path: "/test-series" },
        { name: "Mains Test Series", path: "/test-series" },
        { name: "CSAT Tests", path: "/test-series" },
      ],
    },
    {
      label: "RESOURCES",
      icon: GraduationCap,
      hasDropdown: true,
      dropdown: [
        { name: "Current Affairs", path: "/current-affairs" },
        { name: "Free Resources", path: "/free-resources" },
        { name: "Study Materials", path: "/free-resources" },
      ],
    },
  ];

  const quickActions = [
    { label: "Upcoming Batches", path: "/upcoming-batches", icon: Calendar },
    { label: "Blog", path: "/blog", icon: BookOpen },
    { label: "Contact Us", path: "/contact", icon: MessageCircle },
  ];

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 backdrop-blur-lg shadow-2xl"
          : "bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600"
      }`}
    >
      {/* Top Announcement Bar */}
      <div
        className={`${scrolled ? "hidden" : "block"} bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 text-gray-900 overflow-hidden py-0.5`}
      >
        <motion.div
          className="flex gap-16"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {[...topCourses, ...topCourses, ...topCourses].map((course, idx) => (
            <div
              key={idx}
              className="flex items-center gap-2 whitespace-nowrap"
            >
              <span className="text-xl">{course.icon}</span>
              <span className="text-sm font-bold tracking-wide">
                {course.text}
              </span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Main Navigation */}
      <div className={`${scrolled ? "text-gray-800" : "text-white"}`}>
        <div className="container mx-auto px-4 lg:px-20 py-1">
          <div className="flex items-center justify-between py-0">
            {/* Logo - Very Large */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex-shrink-0 cursor-pointer mr-2 lg:mr-9 order-first lg:order-none"
              onClick={() => {
                trackNavigation("Logo", "topbar", "/");
                navigate("/");
              }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex items-center gap-3">
                <img
                  src="/SriramIAS.png"
                  alt="Sriram's IAS"
                  className="h-12 md:h-16 w-auto object-contain drop-shadow-lg"
                />
              </div>
            </motion.div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-2 flex-1 justify-end">
              {/* Menu Items */}
              <div className="flex items-center gap-0.5">
                {menuItems.map((item, idx) => {
                  const IconComponent = item.icon;
                  return (
                    <motion.div
                      key={idx}
                      className="relative"
                      onHoverStart={() => {
                        setActiveDropdown(idx);
                        trackDropdown(item.label, "open");
                      }}
                      onHoverEnd={() => {
                        setActiveDropdown(null);
                        trackDropdown(item.label, "close");
                      }}
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 + idx * 0.05 }}
                    >
                      <motion.button
                        className={`flex items-center gap-1 px-2.5 py-1 rounded-lg font-bold text-xs whitespace-nowrap transition-all text-white ${
                          scrolled
                            ? "hover:bg-white/20 backdrop-blur-sm"
                            : "hover:bg-white/20 backdrop-blur-sm"
                        }`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <IconComponent className="w-4 h-4" />
                        <span>{item.label}</span>
                        {item.hasDropdown && (
                          <motion.div
                            animate={{
                              rotate: activeDropdown === idx ? 180 : 0,
                            }}
                            transition={{ duration: 0.2 }}
                          >
                            <ChevronDown className="w-4 h-4" />
                          </motion.div>
                        )}
                      </motion.button>

                      {/* Innovative Dropdown */}
                      <AnimatePresence>
                        {activeDropdown === idx && item.dropdown && (
                          <motion.div
                            className="absolute top-full left-0 mt-3 bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-2xl overflow-hidden min-w-[260px] border-2 border-transparent z-50"
                            style={{
                              background:
                                "linear-gradient(white, white) padding-box, linear-gradient(135deg, #6366f1, #a855f7, #ec4899) border-box",
                            }}
                            initial={{ opacity: 0, y: -15, scale: 0.9 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -15, scale: 0.9 }}
                            transition={{
                              type: "spring",
                              stiffness: 300,
                              damping: 25,
                            }}
                          >
                            <div className="p-2">
                              {item.dropdown.map((subItem, subIdx) => (
                                <motion.button
                                  key={subIdx}
                                  onClick={() => {
                                    trackDropdown(
                                      item.label,
                                      "select",
                                      subItem.name,
                                    );
                                    trackNavigation(
                                      subItem.name,
                                      "dropdown",
                                      subItem.path,
                                    );
                                    navigate(subItem.path);
                                    setActiveDropdown(null);
                                  }}
                                  className="w-full text-left group relative overflow-hidden px-4 py-3 rounded-lg text-gray-700 font-medium text-sm transition-all"
                                  whileHover={{ scale: 1.02 }}
                                  whileTap={{ scale: 0.98 }}
                                  initial={{ opacity: 0, x: -20 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: subIdx * 0.08 }}
                                >
                                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-10 transition-opacity" />
                                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500 transform -translate-x-full group-hover:translate-x-0 transition-transform" />
                                  <span className="relative z-10 group-hover:text-purple-700 transition-colors">
                                    {subItem.name}
                                  </span>
                                </motion.button>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  );
                })}
              </div>

              {/* Quick Actions */}
              <div className="flex items-center gap-1">
                {quickActions.map((action, idx) => {
                  const IconComponent = action.icon;
                  return (
                    <motion.button
                      key={idx}
                      onClick={() => {
                        trackNavigation(
                          action.label,
                          "quick_action",
                          action.path,
                        );
                        trackButtonClick(
                          `quick_action_${action.label}`,
                          action.label,
                        );
                        navigate(action.path);
                      }}
                      className={`flex items-center gap-1 px-2.5 py-1 rounded-lg font-semibold text-xs whitespace-nowrap transition-all ${
                        scrolled
                          ? "bg-white/20 backdrop-blur-sm text-white hover:bg-white/30"
                          : "bg-white/20 backdrop-blur-sm hover:bg-white/30"
                      }`}
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 + idx * 0.1 }}
                    >
                      <IconComponent className="w-4 h-4" />
                      <span>{action.label}</span>
                    </motion.button>
                  );
                })}
              </div>

              {/* Student Login / Profile */}
              {isAuthenticated ? (
                <div className="flex items-center gap-2">
                  <motion.button
                    onClick={() => {
                      trackNavigation("Profile", "topbar", "/profile");
                      trackButtonClick("profile_button", "Profile");
                      navigate("/profile");
                    }}
                    className={`flex items-center gap-1 px-4 py-1 rounded-full font-bold text-xs shadow-lg whitespace-nowrap transition-all ${
                      scrolled
                        ? "bg-gradient-to-r from-blue-400 to-indigo-500 text-white hover:shadow-xl"
                        : "bg-white text-blue-600 hover:bg-blue-50"
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <User className="w-4 h-4" />
                    <span>{user?.name || "Profile"}</span>
                  </motion.button>
                  <motion.button
                    onClick={handleLogout}
                    className={`flex items-center gap-1 px-4 py-1 rounded-full font-bold text-xs shadow-lg whitespace-nowrap transition-all ${
                      scrolled
                        ? "bg-gradient-to-r from-red-400 to-pink-500 text-white hover:shadow-xl"
                        : "bg-white text-red-600 hover:bg-red-50"
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <LogOut className="w-4 h-4" />
                    <span>Logout</span>
                  </motion.button>
                </div>
              ) : (
                <motion.button
                  onClick={() => {
                    trackNavigation(
                      "Student Login",
                      "topbar",
                      "/login",
                    );
                    trackButtonClick("student_login_button", "Student Login");
                    navigate("/login");
                  }}
                  className={`flex items-center gap-1 px-4 py-1 rounded-full font-bold text-xs shadow-lg whitespace-nowrap transition-all ${
                    scrolled
                      ? "bg-gradient-to-r from-green-400 to-emerald-500 text-gray-900 hover:shadow-xl"
                      : "bg-white text-blue-600 hover:bg-blue-50"
                  }`}
                  whileHover={{ scale: 1.05, rotate: [0, -1, 1, 0] }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  <LogIn className="w-4 h-4" />
                  <span>Student Login</span>
                  <Sparkles className="w-4 h-4" />
                </motion.button>
              )}
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              className="lg:hidden p-2 rounded-lg text-white order-last"
              onClick={() => {
                const newState = !isMobileMenuOpen;
                setIsMobileMenuOpen(newState);
                trackButtonClick(
                  "mobile_menu_toggle",
                  newState ? "Open" : "Close",
                  {
                    menuState: newState ? "opened" : "closed",
                  },
                );
              }}
              whileTap={{ scale: 0.95 }}
            >
              {isMobileMenuOpen ? (
                <X className="w-7 h-7" />
              ) : (
                <Menu className="w-7 h-7" />
              )}
            </motion.button>
          </div>
        </div>

        {/* Contact Bar - Desktop Only */}
        <div
          className={`hidden lg:block border-t ${scrolled ? "border-white/20" : "border-white/20"}`}
        >
          <div className="container mx-auto px-4 py-1">
            <div className="flex items-center justify-between text-sm">
              <motion.div
                className="flex items-center gap-6"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
              >
                <a
                  href="tel:8686818384"
                  className={`flex items-center gap-2 font-semibold transition-colors ${
                    scrolled
                      ? "text-white hover:text-blue-200"
                      : "hover:text-blue-200"
                  }`}
                >
                  <Phone className="w-4 h-4" />
                  <span>8686818384/9963917712</span>
                </a>
                <a
                  href="mailto:enquiry@sriramsias.com"
                  className={`flex items-center gap-2 font-semibold transition-colors ${
                    scrolled
                      ? "text-white hover:text-blue-200"
                      : "hover:text-blue-200"
                  }`}
                >
                  <Mail className="w-4 h-4" />
                  <span>enquiry@sriramsias.com</span>
                </a>
              </motion.div>

              <motion.button
                onClick={() => navigate("/contact")}
                className="bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 px-6 py-0.5 rounded-full font-bold hover:shadow-lg transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
              >
                📞 Book FREE Mentorship
              </motion.button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="lg:hidden bg-white border-t border-gray-200"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="container mx-auto px-4 py-4 max-h-[70vh] overflow-y-auto">
              {menuItems.map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    className="border-b border-gray-200 last:border-0"
                  >
                    <button
                      className="w-full flex items-center justify-between px-4 py-3 text-gray-700 font-semibold text-left"
                      onClick={() =>
                        setActiveDropdown(activeDropdown === idx ? null : idx)
                      }
                    >
                      <div className="flex items-center gap-3">
                        <IconComponent className="w-5 h-5 text-purple-600" />
                        <span>{item.label}</span>
                      </div>
                      {item.hasDropdown && (
                        <motion.div
                          animate={{ rotate: activeDropdown === idx ? 180 : 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <ChevronDown className="w-5 h-5" />
                        </motion.div>
                      )}
                    </button>
                    <AnimatePresence>
                      {activeDropdown === idx && item.dropdown && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50"
                        >
                          {item.dropdown.map((subItem, subIdx) => (
                            <motion.button
                              key={subIdx}
                              onClick={() => {
                                navigate(subItem.path);
                                setIsMobileMenuOpen(false);
                                setActiveDropdown(null);
                              }}
                              className="w-full text-left px-8 py-3 text-gray-700 hover:text-purple-700 text-sm font-medium border-l-4 border-transparent hover:border-purple-500 hover:bg-white/50 transition-all"
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
                );
              })}

              <div className="mt-4 space-y-2">
                {isAuthenticated ? (
                  <>
                    <motion.button
                      onClick={() => {
                        navigate("/profile");
                        setIsMobileMenuOpen(false);
                      }}
                      className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-4 py-3 rounded-lg font-bold flex items-center justify-center gap-2"
                      whileTap={{ scale: 0.98 }}
                    >
                      <User className="w-5 h-5" />
                      {user?.name || "Profile"}
                    </motion.button>
                    <motion.button
                      onClick={() => {
                        handleLogout();
                        setIsMobileMenuOpen(false);
                      }}
                      className="w-full bg-gradient-to-r from-red-500 to-pink-600 text-white px-4 py-3 rounded-lg font-bold flex items-center justify-center gap-2"
                      whileTap={{ scale: 0.98 }}
                    >
                      <LogOut className="w-5 h-5" />
                      Logout
                    </motion.button>
                  </>
                ) : (
                  <motion.button
                    onClick={() => {
                      navigate("/login");
                      setIsMobileMenuOpen(false);
                    }}
                    className="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 py-3 rounded-lg font-bold flex items-center justify-center gap-2"
                    whileTap={{ scale: 0.98 }}
                  >
                    <LogIn className="w-5 h-5" />
                    Student Login
                  </motion.button>
                )}
                <motion.button
                  onClick={() => {
                    navigate("/contact");
                    setIsMobileMenuOpen(false);
                  }}
                  className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 px-4 py-3 rounded-lg font-bold"
                  whileTap={{ scale: 0.98 }}
                >
                  📞 Book FREE Mentorship
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default ModernTopbar;
