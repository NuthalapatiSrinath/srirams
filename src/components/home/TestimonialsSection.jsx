import {
  motion,
  useMotionValue,
  useTransform,
  useSpring,
  useInView,
} from "framer-motion";
import { useState, useRef, memo, useMemo } from "react";
import {
  Star,
  Quote,
  ChevronLeft,
  ChevronRight,
  Medal,
  Award,
  Trophy,
  Target,
  TrendingUp,
  CheckCircle,
  Play,
  Sparkles,
  Users,
  Crown,
  MessageCircle,
  ThumbsUp,
  Share2,
  Verified,
} from "lucide-react";

// Animation constants
const quoteRotateAnimation = {
  rotate: [0, 5, -5, 0],
};
const quoteRotateTransition = {
  duration: 4,
  repeat: Infinity,
  ease: "easeInOut",
};

const chevronAnimation = {
  x: [0, 3, 0],
};
const chevronTransition = {
  duration: 1.5,
  repeat: Infinity,
};

const TestimonialsSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [selectedFilter, setSelectedFilter] = useState("All");
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      name: "Priya Sharma",
      rank: "AIR 47",
      year: "CSE 2024",
      service: "IAS",
      marks: "1045/2025",
      image: "https://randomuser.me/api/portraits/women/32.jpg",
      text: "Sriram's IAS provided me with the perfect foundation and guidance. The faculty and study material were exceptional. The personalized mentorship helped me identify my weak areas and work on them systematically.",
      fullText:
        "The journey with Sriram's IAS was transformative. From day one, the faculty made complex topics seem simple. The daily answer writing practice and timely feedback were instrumental in my success. Special thanks to my mentor who believed in me even when I doubted myself.",
      optional: "History",
      achievements: ["State Topper", "Scholar Batch"],
      video: true,
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      name: "Rajesh Kumar",
      rank: "AIR 125",
      year: "CSE 2024",
      service: "IAS",
      marks: "987/2025",
      image: "https://randomuser.me/api/portraits/men/54.jpg",
      text: "The mentorship program helped me stay focused and motivated throughout my preparation journey. The comprehensive test series and detailed analysis after each test were game-changers.",
      fullText:
        "Being a working professional, time management was my biggest challenge. Sriram's IAS flexible batch timings and online resources made it possible for me to prepare alongside my job. The faculty's dedication and the peer group's support created a perfect environment for learning.",
      optional: "Public Administration",
      achievements: ["Working Professional", "2nd Attempt"],
      video: false,
      gradient: "from-purple-500 to-pink-500",
    },
    {
      name: "Anjali Verma",
      rank: "AIR 203",
      year: "CSE 2024",
      service: "IPS",
      marks: "956/2025",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      text: "Best coaching institute for UPSC preparation. The test series and answer writing practice were game changers. The faculty's expertise in making current affairs relevant to the exam was outstanding.",
      fullText:
        "The integrated approach to prelims and mains preparation at Sriram's IAS is what set it apart. The faculty didn't just teach subjects but helped us develop critical thinking and analytical skills. The mock interviews in the final stages boosted my confidence tremendously.",
      optional: "Sociology",
      achievements: ["Women Empowerment", "Rural Background"],
      video: true,
      gradient: "from-orange-500 to-red-500",
    },
    {
      name: "Aditya Singh",
      rank: "AIR 89",
      year: "CSE 2023",
      service: "IAS",
      marks: "1021/2025",
      image: "https://randomuser.me/api/portraits/men/67.jpg",
      text: "The foundation course at Sriram's IAS built a strong conceptual base. The mentors were always available for doubt clearing and guidance. The study material quality was exceptional.",
      fullText:
        "Coming from a non-humanities background, I found initial preparation challenging. The foundation course helped me build fundamentals from scratch. The faculty's patience and detailed explanations made complex concepts accessible. The weekly tests kept me disciplined.",
      optional: "Geography",
      achievements: ["Engineering Background", "First Attempt"],
      video: false,
      gradient: "from-green-500 to-teal-500",
    },
    {
      name: "Meera Patel",
      rank: "AIR 156",
      year: "CSE 2023",
      service: "IFS",
      marks: "968/2025",
      image: "https://randomuser.me/api/portraits/women/68.jpg",
      text: "The optional subject guidance was phenomenal. Faculty provided relevant material and regular tests. The answer writing practice sessions were incredibly beneficial.",
      fullText:
        "Sriram's IAS helped me develop a strategic approach to the exam. The faculty emphasized understanding over rote learning. The test series simulated actual exam conditions perfectly. The personalized feedback after each test was invaluable.",
      optional: "Psychology",
      achievements: ["Optional Topper", "All India Rank"],
      video: true,
      gradient: "from-indigo-500 to-purple-500",
    },
    {
      name: "Karan Mehta",
      rank: "AIR 278",
      year: "CSE 2023",
      service: "IPS",
      marks: "934/2025",
      image: "https://randomuser.me/api/portraits/men/45.jpg",
      text: "The current affairs integration and newspaper analysis sessions were excellent. The faculty made complex policy matters easy to understand. Great infrastructure and learning environment.",
      fullText:
        "The peer learning environment at Sriram's IAS was exceptional. Group discussions after classes helped me gain different perspectives. The library facilities and infrastructure supported intense study sessions. The mock interviews prepared me for the actual personality test.",
      optional: "Political Science",
      achievements: ["Scholar", "3rd Attempt"],
      video: false,
      gradient: "from-pink-500 to-rose-500",
    },
  ];

  const filters = ["All", "IAS", "IPS", "IFS"];

  const filteredTestimonials =
    selectedFilter === "All"
      ? testimonials
      : testimonials.filter((t) => t.service === selectedFilter);

  const FloatingQuote = memo(({ delay, side }) => {
    return (
      <motion.div
        className={`absolute ${side === "left" ? "left-4" : "right-4"} top-1/4 text-9xl pointer-events-none z-0`}
        initial={{ opacity: 0, scale: 0 }}
        animate={isInView ? { opacity: 0.05, scale: 1 } : {}}
        transition={{ delay, duration: 1 }}
      >
        <Quote className="text-gray-900" strokeWidth={1} />
      </motion.div>
    );
  });

  const FloatingEmoji = memo(({ emoji, delay, position }) => {
    const floatAnimation = useMemo(
      () => ({
        opacity: [0, 1, 0],
        y: [20, -50, -100],
        scale: [0, 1.2, 0.8],
        rotate: [0, 180, 360],
      }),
      [],
    );

    const floatTransition = useMemo(
      () => ({
        duration: 4,
        delay,
        repeat: Infinity,
        repeatDelay: 3,
      }),
      [delay],
    );

    return (
      <motion.div
        className="absolute text-3xl pointer-events-none"
        style={{ left: position.x, top: position.y }}
        initial={{ opacity: 0, y: 20, scale: 0 }}
        animate={floatAnimation}
        transition={floatTransition}
      >
        {emoji}
      </motion.div>
    );
  });

  const TestimonialCard3D = memo(({ testimonial, index }) => {
    const cardRef = useRef(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const [isCardHovered, setIsCardHovered] = useState(false);
    const [isExpanded, setIsExpanded] = useState(false);

    const rotateX = useTransform(y, [-100, 100], [8, -8]);
    const rotateY = useTransform(x, [-100, 100], [-8, 8]);

    const cardRotateX = useSpring(rotateX, { stiffness: 300, damping: 30 });
    const cardRotateY = useSpring(rotateY, { stiffness: 300, damping: 30 });

    const handleMouseMove = (e) => {
      if (!cardRef.current) return;
      const rect = cardRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      x.set(e.clientX - centerX);
      y.set(e.clientY - centerY);
    };

    const handleMouseLeave = () => {
      x.set(0);
      y.set(0);
      setIsCardHovered(false);
    };

    const handleMouseEnter = () => {
      setIsCardHovered(true);
    };

    const toggleExpanded = () => {
      setIsExpanded(!isExpanded);
    };

    return (
      <motion.div
        ref={cardRef}
        className="relative perspective-1000 group"
        initial={{ opacity: 0, y: 60, scale: 0.9 }}
        animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
        transition={{
          delay: index * 0.15,
          duration: 0.7,
          type: "spring",
        }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onMouseEnter={handleMouseEnter}
      >
        <motion.div
          className="relative bg-white rounded-3xl overflow-hidden shadow-2xl border-2 border-gray-100"
          style={{
            rotateX: cardRotateX,
            rotateY: cardRotateY,
            transformStyle: "preserve-3d",
          }}
          whileHover={{
            scale: 1.03,
            boxShadow: "0 30px 60px -15px rgba(0,0,0,0.3)",
          }}
          animate={isExpanded ? { scale: 1.05 } : {}}
        >
          {/* Rank Badge */}
          <motion.div
            className={`absolute top-4 right-4 z-20 bg-gradient-to-r ${testimonial.gradient} px-4 py-2 rounded-full shadow-xl border-2 border-white`}
            initial={{ scale: 0, rotate: -180 }}
            animate={isInView ? { scale: 1, rotate: 0 } : {}}
            transition={{ delay: index * 0.15 + 0.3, type: "spring" }}
            style={{ translateZ: 40 }}
          >
            <div className="flex items-center gap-2 text-white">
              <Crown className="w-4 h-4" />
              <span className="font-black text-sm">{testimonial.rank}</span>
            </div>
          </motion.div>

          {/* Video Badge */}
          {testimonial.video && (
            <motion.div
              className="absolute top-4 left-4 z-20 bg-red-500 px-3 py-1.5 rounded-full shadow-xl flex items-center gap-1.5 border-2 border-white"
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : {}}
              transition={{ delay: index * 0.15 + 0.4 }}
              whileHover={{ scale: 1.1 }}
              style={{ translateZ: 40 }}
            >
              <Play className="w-3 h-3 text-white fill-white" />
              <span className="text-xs font-bold text-white">VIDEO</span>
            </motion.div>
          )}

          {/* Floating Particles */}
          {isCardHovered && (
            <>
              {["🎯", "🏆", "⭐", "🎓"].map((emoji, idx) => {
                const particleAnim = {
                  y: [-10, -60],
                  opacity: [0, 1, 0],
                  scale: [0.5, 1.3, 0.5],
                  x: [idx % 2 === 0 ? -10 : 10, idx % 2 === 0 ? 15 : -15],
                };
                const particleTrans = {
                  duration: 2,
                  delay: idx * 0.2,
                  repeat: Infinity,
                  repeatDelay: 1,
                };
                const particleStyle = {
                  left: `${20 + idx * 20}%`,
                  top: `${40 + (idx % 2) * 20}%`,
                };
                return (
                  <motion.div
                    key={idx}
                    className="absolute text-2xl pointer-events-none z-10"
                    initial={{ opacity: 0, y: 20 }}
                    animate={particleAnim}
                    transition={particleTrans}
                    style={particleStyle}
                  >
                    {emoji}
                  </motion.div>
                );
              })}
            </>
          )}

          {/* Content */}
          <div className="p-8" style={{ translateZ: 20 }}>
            {/* Quote Icon */}
            <motion.div
              className={`bg-gradient-to-r ${testimonial.gradient} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-xl`}
              animate={quoteRotateAnimation}
              transition={quoteRotateTransition}
              style={{ translateZ: 30 }}
            >
              <Quote className="w-8 h-8 text-white" strokeWidth={2.5} />
            </motion.div>

            {/* Stars Rating */}
            <motion.div
              className="flex items-center gap-2 mb-4"
              style={{ translateZ: 25 }}
            >
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0, rotate: -180 }}
                    animate={
                      isInView ? { opacity: 1, scale: 1, rotate: 0 } : {}
                    }
                    transition={{
                      delay: index * 0.15 + 0.5 + i * 0.05,
                      type: "spring",
                    }}
                  >
                    <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  </motion.div>
                ))}
              </div>
              <motion.span
                className="text-sm font-bold text-gray-600"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: index * 0.15 + 0.8 }}
              >
                5.0
              </motion.span>
              <Verified className="w-5 h-5 text-blue-500" />
            </motion.div>

            {/* Testimonial Text */}
            <motion.p
              className={`text-gray-700 leading-relaxed mb-6 ${
                isExpanded ? "" : "line-clamp-3"
              }`}
              style={{ translateZ: 15 }}
            >
              "{isExpanded ? testimonial.fullText : testimonial.text}"
            </motion.p>

            {/* Read More Button */}
            <motion.button
              className="text-sm font-bold text-purple-600 hover:text-purple-700 mb-6 flex items-center gap-1"
              onClick={toggleExpanded}
              whileHover={{ x: 5 }}
              style={{ translateZ: 15 }}
            >
              {isExpanded ? "Show Less" : "Read More"}
              <motion.div
                animate={chevronAnimation}
                transition={chevronTransition}
              >
                <ChevronRight className="w-4 h-4" />
              </motion.div>
            </motion.button>

            {/* Profile Section */}
            <motion.div
              className="flex items-center gap-4 mb-6"
              style={{ translateZ: 20 }}
            >
              <motion.div
                className="relative"
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <motion.img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover border-4 border-gray-100 shadow-xl"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: index * 0.15 + 0.6 }}
                />
                <motion.div
                  className={`absolute -bottom-1 -right-1 w-6 h-6 bg-gradient-to-r ${testimonial.gradient} rounded-full flex items-center justify-center border-2 border-white shadow-lg`}
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ delay: index * 0.15 + 0.8 }}
                >
                  <CheckCircle className="w-4 h-4 text-white" />
                </motion.div>
              </motion.div>

              <div className="flex-1">
                <motion.h4
                  className="font-black text-lg text-gray-800"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: index * 0.15 + 0.7 }}
                >
                  {testimonial.name}
                </motion.h4>
                <motion.div
                  className="flex items-center gap-2 flex-wrap"
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ delay: index * 0.15 + 0.8 }}
                >
                  <span
                    className={`text-sm font-bold bg-gradient-to-r ${testimonial.gradient} bg-clip-text text-transparent`}
                  >
                    {testimonial.service}
                  </span>
                  <span className="text-xs text-gray-500">•</span>
                  <span className="text-sm text-gray-600 font-semibold">
                    {testimonial.year}
                  </span>
                </motion.div>
              </div>
            </motion.div>

            {/* Metrics */}
            <motion.div
              className="grid grid-cols-2 gap-3 mb-6"
              style={{ translateZ: 10 }}
            >
              <motion.div
                className="bg-gradient-to-br from-purple-50 to-pink-50 p-3 rounded-xl border border-purple-100"
                whileHover={{ scale: 1.05, y: -2 }}
              >
                <div className="flex items-center gap-2 mb-1">
                  <Target className="w-4 h-4 text-purple-600" />
                  <span className="text-xs font-bold text-gray-600">Marks</span>
                </div>
                <div className="text-lg font-black text-purple-700">
                  {testimonial.marks}
                </div>
              </motion.div>

              <motion.div
                className="bg-gradient-to-br from-blue-50 to-cyan-50 p-3 rounded-xl border border-blue-100"
                whileHover={{ scale: 1.05, y: -2 }}
              >
                <div className="flex items-center gap-2 mb-1">
                  <Award className="w-4 h-4 text-blue-600" />
                  <span className="text-xs font-bold text-gray-600">
                    Optional
                  </span>
                </div>
                <div className="text-sm font-black text-blue-700">
                  {testimonial.optional}
                </div>
              </motion.div>
            </motion.div>

            {/* Achievements */}
            <motion.div
              className="flex flex-wrap gap-2 mb-6"
              style={{ translateZ: 5 }}
            >
              {testimonial.achievements.map((achievement, idx) => (
                <motion.span
                  key={idx}
                  className="text-xs font-semibold px-3 py-1.5 bg-gradient-to-r from-gray-100 to-gray-200 rounded-full border border-gray-300 text-gray-700"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: index * 0.15 + 0.9 + idx * 0.05 }}
                  whileHover={{ scale: 1.1, y: -2 }}
                >
                  {achievement}
                </motion.span>
              ))}
            </motion.div>

            {/* Action Buttons */}
            <motion.div className="flex gap-3" style={{ translateZ: 15 }}>
              <button className="flex-1 bg-gradient-to-r from-gray-100 to-gray-200 px-4 py-2.5 rounded-xl font-bold text-gray-700 text-sm flex items-center justify-center gap-2 shadow-md hover:shadow-xl hover:scale-105 transition-all border border-gray-300">
                <ThumbsUp className="w-4 h-4" />
                Helpful
              </button>

              <button className="flex-1 bg-gradient-to-r from-gray-100 to-gray-200 px-4 py-2.5 rounded-xl font-bold text-gray-700 text-sm flex items-center justify-center gap-2 shadow-md hover:shadow-xl hover:scale-105 transition-all border border-gray-300">
                <Share2 className="w-4 h-4" />
                Share
              </button>
            </motion.div>
          </div>

          {/* Hover Glow */}
          <motion.div
            className={`absolute -inset-0.5 bg-gradient-to-r ${testimonial.gradient} rounded-3xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`}
            style={{ translateZ: -10 }}
          />
        </motion.div>
      </motion.div>
    );
  });

  const nextSlide = () => {
    setCurrentSlide(
      (prev) => (prev + 1) % Math.ceil(filteredTestimonials.length / 3),
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? Math.ceil(filteredTestimonials.length / 3) - 1 : prev - 1,
    );
  };

  return (
    <section
      ref={sectionRef}
      className="relative py-20 overflow-hidden bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating Quotes */}
        <FloatingQuote delay={0.5} side="left" />
        <FloatingQuote delay={0.8} side="right" />

        {/* Animated Blobs */}
        <motion.div
          className="absolute -top-40 -left-40 w-96 h-96 bg-blue-400 rounded-full mix-blend-overlay filter blur-3xl opacity-30"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/2 -right-40 w-96 h-96 bg-purple-400 rounded-full mix-blend-overlay filter blur-3xl opacity-30"
          animate={{
            scale: [1, 1.4, 1],
            x: [0, -100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute -bottom-40 left-1/3 w-96 h-96 bg-pink-400 rounded-full mix-blend-overlay filter blur-3xl opacity-30"
          animate={{
            scale: [1, 1.5, 1],
            x: [-50, 50, -50],
            y: [0, -60, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Floating Emojis */}
        <FloatingEmoji emoji="🎓" delay={0} position={{ x: "10%", y: "20%" }} />
        <FloatingEmoji emoji="⭐" delay={1} position={{ x: "80%", y: "30%" }} />
        <FloatingEmoji emoji="🏆" delay={2} position={{ x: "15%", y: "70%" }} />
        <FloatingEmoji emoji="🎯" delay={3} position={{ x: "85%", y: "65%" }} />
        <FloatingEmoji
          emoji="📚"
          delay={1.5}
          position={{ x: "50%", y: "15%" }}
        />
        <FloatingEmoji
          emoji="✨"
          delay={2.5}
          position={{ x: "45%", y: "85%" }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-block mb-6"
            animate={{
              y: [0, -8, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <span className="px-6 py-3 bg-white/20 backdrop-blur-sm border-2 border-white/30 text-white rounded-full text-sm font-bold uppercase tracking-wider shadow-2xl flex items-center gap-2">
              <MessageCircle className="w-4 h-4" />
              Success Stories
              <Sparkles className="w-4 h-4" />
            </span>
          </motion.div>

          <motion.h2
            className="text-5xl md:text-6xl font-black mb-6 leading-tight text-white"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Our{" "}
            <span className="bg-gradient-to-r from-yellow-300 via-orange-300 to-pink-300 bg-clip-text text-transparent">
              Toppers Speak
            </span>
          </motion.h2>

          <motion.p
            className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed mb-8"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Hear from our successful students who cracked UPSC CSE
          </motion.p>

          {/* Stats */}
          <motion.div
            className="flex flex-wrap justify-center gap-6 mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6 }}
          >
            {[
              {
                icon: Users,
                label: "500+ Selections",
                gradient: "from-blue-400 to-cyan-400",
              },
              {
                icon: Trophy,
                label: "50+ Top 100 Ranks",
                gradient: "from-yellow-400 to-orange-400",
              },
              {
                icon: Medal,
                label: "200+ Top 500",
                gradient: "from-purple-400 to-pink-400",
              },
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                className="bg-white/10 backdrop-blur-sm border border-white/20 px-6 py-3 rounded-2xl flex items-center gap-3 shadow-xl"
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.8 + idx * 0.1, type: "spring" }}
                whileHover={{ scale: 1.05, y: -3 }}
              >
                <motion.div
                  className={`w-10 h-10 bg-gradient-to-r ${stat.gradient} rounded-xl flex items-center justify-center shadow-lg`}
                  animate={{
                    rotate: [0, 5, -5, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: idx * 0.5,
                  }}
                >
                  <stat.icon className="w-5 h-5 text-white" />
                </motion.div>
                <span className="text-white font-bold text-sm">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </motion.div>

          {/* Filter Buttons */}
          <motion.div
            className="flex flex-wrap justify-center gap-3"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1 }}
          >
            {filters.map((filter, idx) => (
              <motion.button
                key={filter}
                onClick={() => {
                  setSelectedFilter(filter);
                  setCurrentSlide(0);
                }}
                className={`px-6 py-2.5 rounded-full font-bold text-sm transition-all shadow-lg ${
                  selectedFilter === filter
                    ? "bg-white text-purple-700 shadow-2xl"
                    : "bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 border border-white/30"
                }`}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 1.1 + idx * 0.05, type: "spring" }}
              >
                {filter}
              </motion.button>
            ))}
          </motion.div>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredTestimonials.map((testimonial, index) => (
            <TestimonialCard3D
              key={index}
              testimonial={testimonial}
              index={index}
            />
          ))}
        </div>

        {/* Carousel Navigation */}
        <motion.div
          className="flex items-center justify-center gap-6"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.5 }}
        >
          <motion.button
            onClick={prevSlide}
            className="w-14 h-14 bg-white/20 backdrop-blur-sm border-2 border-white/30 rounded-full flex items-center justify-center text-white shadow-xl hover:bg-white/30 transition-all"
            whileHover={{ scale: 1.1, x: -3 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronLeft className="w-6 h-6" strokeWidth={3} />
          </motion.button>

          <div className="flex gap-3">
            {[...Array(Math.ceil(filteredTestimonials.length / 3))].map(
              (_, idx) => (
                <motion.button
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  className={`rounded-full transition-all ${
                    currentSlide === idx
                      ? "w-12 h-3 bg-white"
                      : "w-3 h-3 bg-white/40 hover:bg-white/60"
                  }`}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                />
              ),
            )}
          </div>

          <motion.button
            onClick={nextSlide}
            className="w-14 h-14 bg-white/20 backdrop-blur-sm border-2 border-white/30 rounded-full flex items-center justify-center text-white shadow-xl hover:bg-white/30 transition-all"
            whileHover={{ scale: 1.1, x: 3 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronRight className="w-6 h-6" strokeWidth={3} />
          </motion.button>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.7 }}
        >
          <motion.div
            className="inline-block"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="bg-white rounded-2xl p-8 shadow-2xl max-w-2xl mx-auto">
              <motion.div
                className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-xl"
                animate={{
                  rotate: [0, 10, -10, 0],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                }}
              >
                <MessageCircle className="w-8 h-8 text-white" />
              </motion.div>
              <h3 className="text-2xl font-black text-gray-800 mb-3">
                Be the Next Success Story!
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Join our legacy of toppers and achieve your dream rank in UPSC
                CSE
              </p>
              <motion.button
                className="px-8 py-4 bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 text-white rounded-xl font-bold shadow-xl hover:shadow-2xl transition-all flex items-center gap-3 mx-auto"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Sparkles className="w-5 h-5" />
                Start Your Journey Today
                <ChevronRight className="w-5 h-5" />
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
