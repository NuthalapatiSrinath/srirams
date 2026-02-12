import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Calendar,
  Users,
  Clock,
  ArrowRight,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const BannerCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const navigate = useNavigate();

  const banners = [
    {
      id: 1,
      title: "2 Year General Studies Foundation Course",
      subtitle: "Build your UPSC foundation from scratch",
      description:
        "Comprehensive coverage of all GS papers with expert faculty guidance",
      image:
        "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1200&h=600&fit=crop",
      bgGradient: "from-blue-600 to-indigo-700",
      features: ["Live Classes", "Study Material", "Test Series"],
      slug: "foundation-course",
      batch: "Starting March 2026",
      seats: "150 seats left",
    },
    {
      id: 2,
      title: "CSAT Course for UPSC CSE Prelims",
      subtitle: "Master the qualifying paper with confidence",
      description: "Structured approach to crack CSAT with proven strategies",
      image:
        "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=1200&h=600&fit=crop",
      bgGradient: "from-purple-600 to-pink-600",
      features: ["Mock Tests", "Speed Building", "Doubt Sessions"],
      slug: "csat-course",
      batch: "Batch starts Feb 20, 2026",
      seats: "200 seats left",
    },
    {
      id: 3,
      title: "Stride Mentorship Program 2026",
      subtitle: "Personal guidance for your UPSC journey",
      description: "1-on-1 mentorship with successful IAS officers and experts",
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&h=600&fit=crop",
      bgGradient: "from-green-600 to-teal-600",
      features: ["Personal Mentor", "Strategy Sessions", "Answer Writing"],
      slug: "mentorship-program",
      batch: "Limited Slots Available",
      seats: "50 seats only",
    },
    {
      id: 4,
      title: "Mains Test Series 2026",
      subtitle: "Practice with UPSC standard questions",
      description:
        "Comprehensive test series covering all papers with detailed evaluation",
      image:
        "https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?w=1200&h=600&fit=crop",
      bgGradient: "from-orange-600 to-red-600",
      features: ["20+ Tests", "Personalized Feedback", "All India Rank"],
      slug: "mains-test-series",
      batch: "Enrollments Open",
      seats: "Unlimited access",
    },
    {
      id: 5,
      title: "Optional Subject Courses",
      subtitle: "Score high with expert optional coaching",
      description:
        "Choose from 10+ optional subjects taught by subject matter experts",
      image:
        "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=1200&h=600&fit=crop",
      bgGradient: "from-cyan-600 to-blue-700",
      features: ["Multiple Subjects", "Expert Faculty", "Study Material"],
      slug: "optional-courses",
      batch: "Multiple batches",
      seats: "Register now",
    },
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % banners.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, banners.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % banners.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + banners.length) % banners.length);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  const handleBannerClick = (slug) => {
    navigate(`/courses/${slug}`);
  };

  return (
    <div className="relative w-full h-[500px] overflow-hidden shadow-2xl group">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0 cursor-pointer"
          onClick={() => handleBannerClick(banners[currentSlide].slug)}
        >
          {/* Background Image with Overlay */}
          <div className="absolute inset-0">
            <img
              src={banners[currentSlide].image}
              alt={banners[currentSlide].title}
              className="w-full h-full object-cover"
            />
            <div
              className={`absolute inset-0 bg-gradient-to-r ${banners[currentSlide].bgGradient} opacity-30`}
            />
          </div>

          {/* Content */}
          <div className="relative h-full flex items-center">
            <div className="container mx-auto px-8 md:px-16">
              <div className="max-w-3xl text-white">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="flex items-center gap-2 mb-3"
                >
                  <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" />
                    {banners[currentSlide].batch}
                  </span>
                  <span className="bg-yellow-400 text-gray-900 px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1.5">
                    <Users className="w-3.5 h-3.5" />
                    {banners[currentSlide].seats}
                  </span>
                </motion.div>

                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-3xl md:text-4xl font-bold mb-2 leading-tight"
                >
                  {banners[currentSlide].title}
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-lg md:text-xl mb-2 text-white/90 font-medium"
                >
                  {banners[currentSlide].subtitle}
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="text-base mb-4 text-white/80"
                >
                  {banners[currentSlide].description}
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="flex flex-wrap gap-2 mb-6"
                >
                  {banners[currentSlide].features.map((feature, idx) => (
                    <span
                      key={idx}
                      className="bg-white/10 backdrop-blur-sm border border-white/30 px-3 py-1.5 rounded-lg text-xs font-medium"
                    >
                      ✓ {feature}
                    </span>
                  ))}
                </motion.div>

                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                  whileHover={{ scale: 1.05, x: 5 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-gray-900 px-6 py-3 rounded-full font-bold text-base shadow-xl flex items-center gap-2 hover:shadow-2xl transition-all"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleBannerClick(banners[currentSlide].slug);
                  }}
                >
                  Explore Course Details
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows */}
      <motion.button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-md hover:bg-white/30 text-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity z-10"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <ChevronLeft className="w-6 h-6" />
      </motion.button>

      <motion.button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-md hover:bg-white/30 text-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity z-10"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <ChevronRight className="w-6 h-6" />
      </motion.button>

      {/* Dots Navigation */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {banners.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2 rounded-full transition-all ${
              index === currentSlide
                ? "bg-white w-8"
                : "bg-white/50 w-2 hover:bg-white/75"
            }`}
            whileHover={{ scale: 1.2 }}
          />
        ))}
      </div>

      {/* Progress Bar */}
      <motion.div
        className="absolute bottom-0 left-0 h-1 bg-yellow-400"
        initial={{ width: "0%" }}
        animate={{ width: isAutoPlaying ? "100%" : "0%" }}
        transition={{ duration: 5, ease: "linear" }}
        key={currentSlide}
      />
    </div>
  );
};

export default BannerCarousel;
