import { useState, useEffect, useMemo } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Menu,
  X,
  ChevronDown,
  BookOpen,
  Users,
  Award,
  GraduationCap,
  Calendar,
  MessageCircle,
  LogIn,
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
  flushActivities,
} from "../utils/activityTracker";

const ModernTopbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [scrollY, setScrollY] = useState(0);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isAuthenticated, user } = useSelector((state) => state.auth);

  const handleLogout = async () => {
    trackButtonClick("logout_button", "Logout", { source: "topbar" });
    await flushActivities();
    dispatch(logout());
    toast.success("Logged out successfully");
    navigate("/");
  };

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ─── scroll-driven values ─── */
  // ALL pages: start full-width transparent → shrinks into floating gradient capsule
  // Optimized scroll distance for smooth, responsive transformation
  const rawProgress = scrollY / 350; // 0-350px scroll range for balanced speed
  const progress = Math.min(rawProgress, 1);
  // Apply easing for more natural movement (ease-out curve)
  const easedProgress = progress < 0.5 
    ? 2 * progress * progress 
    : 1 - Math.pow(-2 * progress + 2, 2) / 2;

  // capsule style computed from progress with optimized easing
  const capsuleStyle = useMemo(() => {
    const bgAlpha = easedProgress * 0.92; // 0 → 0.92
    const blur = easedProgress * 16; // 0 → 16px
    const radius = easedProgress * 50; // 0 → 50px
    const hMargin = easedProgress * 6; // 0% → 6% each side (dramatic shrinking)
    const vMargin = easedProgress * 12; // 0 → 12px top gap
    const shadowSpread = easedProgress * 40;
    const shadowAlpha = easedProgress * 0.35; // Richer shadow

    return {
      background:
        bgAlpha > 0.02
          ? `linear-gradient(135deg, rgba(30, 27, 46, ${bgAlpha}), rgba(42, 36, 56, ${bgAlpha * 0.95}), rgba(55, 40, 60, ${bgAlpha * 0.9}))`
          : "transparent",
      backdropFilter: blur > 0.5 ? `blur(${blur}px)` : "none",
      WebkitBackdropFilter: blur > 0.5 ? `blur(${blur}px)` : "none",
      borderRadius: `${radius}px`,
      marginLeft: `${hMargin}%`,
      marginRight: `${hMargin}%`,
      marginTop: `${vMargin}px`,
      boxShadow:
        easedProgress > 0.05
          ? `0 ${8 * easedProgress}px ${shadowSpread}px rgba(0, 0, 0, ${shadowAlpha}), 
             0 ${4 * easedProgress}px ${12 * easedProgress}px rgba(0, 0, 0, ${easedProgress * 0.2}),
             0 ${2 * easedProgress}px ${6 * easedProgress}px rgba(0, 0, 0, ${easedProgress * 0.15})`
          : "none",
      willChange: scrollY < 360 ? "transform, opacity, box-shadow" : "auto",
      transition: "background 0.3s ease-out, backdrop-filter 0.3s ease-out, border-radius 0.4s ease-out, margin 0.4s ease-out, box-shadow 0.35s ease-out",
    };
  }, [easedProgress, scrollY]);

  // Gap between nav items shrinks as they come together with easing
  const navGap = useMemo(() => {
    // Start at 2rem, shrink to 0.5rem when scrolled (more dramatic pull together)
    return `${2 - (easedProgress * 1.5)}rem`;
  }, [easedProgress]);

  const authGap = useMemo(() => {
    // Start at 1.5rem, shrink to 0.5rem when scrolled
    return `${1.5 - (easedProgress * 1)}rem`;
  }, [easedProgress]);

  const brandGap = useMemo(() => {
    // Start at 0.75rem, shrink to 0.25rem when scrolled
    return `${0.75 - (easedProgress * 0.5)}rem`;
  }, [easedProgress]);

  // Text stays white on dark gradient background
  const textColor = "text-white/90";
  const textHover = "hover:text-white";
  const hoverBg = "hover:bg-white/10";

  const menuItems = [
    {
      label: "Courses",
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
      label: "About Us",
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
      label: "Test Series",
      icon: Award,
      hasDropdown: true,
      dropdown: [
        { name: "Prelims Test Series", path: "/test-series" },
        { name: "Mains Test Series", path: "/test-series" },
        { name: "CSAT Tests", path: "/test-series" },
      ],
    },
    {
      label: "Resources",
      icon: GraduationCap,
      hasDropdown: true,
      dropdown: [
        { name: "Current Affairs", path: "/current-affairs" },
        { name: "Free Resources", path: "/free-resources" },
        { name: "Study Materials", path: "/free-resources" },
      ],
    },
    {
      label: "Contact",
      icon: MessageCircle,
      hasDropdown: false,
      path: "/contact",
    },
  ];

  return (
    <>
      {/* Fixed positioning wrapper */}
      <div
        className="fixed top-0 left-0 right-0 z-50 pointer-events-none"
        style={{ fontFamily: "Inter, system-ui, -apple-system, sans-serif" }}
      >
        {/* The capsule */}
        <nav className="pointer-events-auto" style={capsuleStyle}>
          <div 
            className="flex items-center justify-between h-[58px] px-8 lg:px-12"
          >
              {/* ── Brand ── */}
              <div
                className="flex-shrink-0 cursor-pointer flex items-center"
                style={{ gap: brandGap, transition: 'gap 0.35s ease-out' }}
                onClick={() => {
                  trackNavigation("Logo", "topbar", "/");
                  navigate("/");
                }}
              >
                <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-orange-500 rounded-xl flex items-center justify-center shadow-lg">
                  <GraduationCap
                    className="w-6 h-6 text-zinc-900"
                    strokeWidth={2.5}
                  />
                </div>
                <span className="text-xl font-bold text-white tracking-tight">
                  Sriram's IAS
                </span>
              </div>

              {/* ── Desktop Navigation ── */}
              <div 
                className="hidden lg:flex items-center"
                style={{ gap: navGap, transition: 'gap 0.35s ease-out' }}
              >
                {menuItems.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={idx}
                      className="relative"
                      onMouseEnter={() => {
                        setActiveDropdown(idx);
                        trackDropdown(item.label, "open");
                      }}
                      onMouseLeave={() => {
                        setActiveDropdown(null);
                        trackDropdown(item.label, "close");
                      }}
                    >
                      <button
                        onClick={() => {
                          if (!item.hasDropdown && item.path) {
                            trackNavigation(item.label, "topbar", item.path);
                            navigate(item.path);
                          }
                        }}
                        className={`group flex items-center gap-1.5 px-4 py-2 text-[15px] font-medium ${textColor} ${textHover} transition-all duration-200 relative`}
                      >
                        <span className="relative">
                          {item.label}
                          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white rounded-full group-hover:w-full transition-all duration-300"></span>
                        </span>
                        {item.hasDropdown && (
                          <ChevronDown
                            className={`w-3.5 h-3.5 opacity-60 transition-transform duration-200 ${
                              activeDropdown === idx ? "rotate-180" : ""
                            }`}
                          />
                        )}
                      </button>

                      {/* Dropdown */}
                      <AnimatePresence>
                        {activeDropdown === idx && item.dropdown && (
                          <motion.div
                            className={`absolute top-full left-1/2 -translate-x-1/2 mt-3 bg-zinc-900/95 backdrop-blur-xl rounded-2xl shadow-2xl overflow-hidden min-w-[220px] border border-white/10`}
                            initial={{ opacity: 0, y: -6, scale: 0.97 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -6, scale: 0.97 }}
                            transition={{ duration: 0.15, ease: "easeOut" }}
                          >
                            <div className="py-2 px-2">
                              {item.dropdown.map((sub, subIdx) => (
                                <button
                                  key={subIdx}
                                  onClick={() => {
                                    trackDropdown(
                                      item.label,
                                      "select",
                                      sub.name,
                                    );
                                    trackNavigation(
                                      sub.name,
                                      "dropdown",
                                      sub.path,
                                    );
                                    navigate(sub.path);
                                    setActiveDropdown(null);
                                  }}
                                  className="w-full text-left px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-150 text-white/70 hover:text-white hover:bg-white/10"
                                >
                                  {sub.name}
                                </button>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>

              {/* ── Right side: Auth ── */}
              <div 
                className="hidden lg:flex items-center flex-shrink-0"
                style={{ gap: authGap, transition: 'gap 0.35s ease-out' }}
              >
                {isAuthenticated ? (
                  <>
                    <button
                      onClick={() => {
                        trackNavigation("Profile", "topbar", "/profile");
                        trackButtonClick("profile_button", "Profile");
                        navigate("/profile");
                      }}
                      className={`group text-[15px] font-medium ${textColor} ${textHover} transition-colors px-2 py-1 relative`}
                    >
                      <span className="relative">
                        {user?.name || "Profile"}
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white rounded-full group-hover:w-full transition-all duration-300"></span>
                      </span>
                    </button>
                    <button
                      onClick={handleLogout}
                      className="flex items-center gap-1.5 bg-gradient-to-r from-amber-400 to-orange-500 text-zinc-900 px-6 py-2.5 rounded-full text-[15px] font-bold hover:shadow-lg hover:shadow-amber-500/30 transition-all duration-300 hover:scale-105 active:scale-95"
                    >
                      <LogOut className="w-4 h-4" />
                      Logout
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      onClick={() => {
                        trackNavigation("Student Login", "topbar", "/login");
                        trackButtonClick(
                          "student_login_button",
                          "Student Login",
                        );
                        navigate("/login");
                      }}
                      className={`group text-[15px] font-medium ${textColor} ${textHover} transition-colors px-2 py-1 relative`}
                    >
                      <span className="relative">
                        Log in
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white rounded-full group-hover:w-full transition-all duration-300"></span>
                      </span>
                    </button>
                    <button
                      onClick={() => {
                        trackNavigation("Register", "topbar", "/signup");
                        trackButtonClick("register_button", "Register");
                        navigate("/signup");
                      }}
                      className="bg-gradient-to-r from-amber-400 to-orange-500 text-zinc-900 px-7 py-2.5 rounded-full text-[15px] font-bold hover:shadow-lg hover:shadow-amber-500/30 transition-all duration-300 hover:scale-105 active:scale-95"
                    >
                      Register
                    </button>
                  </>
                )}
              </div>

              {/* ── Mobile Menu Button ── */}
              <button
                className={`lg:hidden p-2 rounded-xl ${textColor} ${hoverBg} transition-colors`}
                onClick={() => {
                  const newState = !isMobileMenuOpen;
                  setIsMobileMenuOpen(newState);
                  trackButtonClick(
                    "mobile_menu_toggle",
                    newState ? "Open" : "Close",
                    { menuState: newState ? "opened" : "closed" },
                  );
                }}
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>

          {/* ── Subtle bottom border line (visible when capsule is formed) ── */}
          {progress > 0.3 && (
            <div
              className="mx-6 h-px"
              style={{
                background: `linear-gradient(90deg, transparent, rgba(255,255,255,${0.08 * progress}), transparent)`,
              }}
            />
          )}

          {/* ── Mobile Menu ── */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                className="lg:hidden border-t border-white/10"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.25 }}
              >
                <div className="max-h-[70vh] overflow-y-auto px-5 py-3">
                  {menuItems.map((item, idx) => {
                    const Icon = item.icon;
                    return (
                      <div
                        key={idx}
                        className="border-b border-white/5 last:border-0"
                      >
                        <button
                          className="w-full flex items-center justify-between px-3 py-3 font-medium text-sm transition-colors text-white/80 hover:text-white"
                          onClick={() => {
                            if (!item.hasDropdown && item.path) {
                              navigate(item.path);
                              setIsMobileMenuOpen(false);
                            } else {
                              setActiveDropdown(
                                activeDropdown === idx ? null : idx,
                              );
                            }
                          }}
                        >
                          <div className="flex items-center gap-2.5">
                            <Icon className="w-4 h-4 text-amber-400" />
                            <span>{item.label}</span>
                          </div>
                          {item.hasDropdown && (
                            <ChevronDown
                              className={`w-4 h-4 transition-transform duration-200 text-white/40 ${
                                activeDropdown === idx ? "rotate-180" : ""
                              }`}
                            />
                          )}
                        </button>
                        <AnimatePresence>
                          {activeDropdown === idx && item.dropdown && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              className="bg-white/5 rounded-xl mb-1"
                            >
                              {item.dropdown.map((sub, subIdx) => (
                                <button
                                  key={subIdx}
                                  onClick={() => {
                                    navigate(sub.path);
                                    setIsMobileMenuOpen(false);
                                    setActiveDropdown(null);
                                  }}
                                  className="w-full text-left px-8 py-2.5 text-sm font-medium transition-colors text-white/60 hover:text-white"
                                >
                                  {sub.name}
                                </button>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  })}

                  {/* Mobile Auth */}
                  <div className="mt-3 pt-3 border-t border-white/10 space-y-2">
                    {isAuthenticated ? (
                      <>
                        <button
                          onClick={() => {
                            navigate("/profile");
                            setIsMobileMenuOpen(false);
                          }}
                          className="w-full bg-white/10 text-white px-4 py-2.5 rounded-xl font-bold text-sm flex items-center justify-center gap-2"
                        >
                          <User className="w-4 h-4" />
                          {user?.name || "Profile"}
                        </button>
                        <button
                          onClick={() => {
                            handleLogout();
                            setIsMobileMenuOpen(false);
                          }}
                          className="w-full bg-red-500/20 text-red-300 px-4 py-2.5 rounded-xl font-bold text-sm flex items-center justify-center gap-2"
                        >
                          <LogOut className="w-4 h-4" />
                          Logout
                        </button>
                      </>
                    ) : (
                      <>
                        <button
                          onClick={() => {
                            navigate("/login");
                            setIsMobileMenuOpen(false);
                          }}
                          className="w-full bg-white/10 text-white px-4 py-2.5 rounded-xl font-bold text-sm flex items-center justify-center gap-2"
                        >
                          <LogIn className="w-4 h-4" />
                          Log in
                        </button>
                        <button
                          onClick={() => {
                            navigate("/signup");
                            setIsMobileMenuOpen(false);
                          }}
                          className="w-full bg-gradient-to-r from-amber-400 to-orange-500 text-zinc-900 px-4 py-2.5 rounded-xl font-bold text-sm flex items-center justify-center gap-2"
                        >
                          Register
                        </button>
                      </>
                    )}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </div>
    </>
  );
};

export default ModernTopbar;
