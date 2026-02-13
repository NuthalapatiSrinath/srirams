import {
  motion,
  useMotionValue,
  useTransform,
  useSpring,
  useInView,
} from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useState, useRef, memo, useMemo } from "react";
import {
  Rocket,
  Target,
  BookMarked,
  Brain,
  GraduationCap,
  Zap,
  Clock,
  CheckCircle,
  ArrowRight,
  Star,
  Award,
  TrendingUp,
  Users,
  BookOpen,
  Sparkles,
  Crown,
  Trophy,
  Medal,
  ChevronRight,
} from "lucide-react";

// Animation constants to prevent recreation
const backgroundPatternAnimation = {
  backgroundPosition: ["0px 0px", "20px 20px"],
};
const backgroundPatternTransition = {
  duration: 10,
  repeat: Infinity,
  ease: "linear",
};

const emojiAnimation = {
  rotate: [0, 10, -10, 0],
  scale: [1, 1.1, 1],
};
const emojiTransition = {
  duration: 2,
  repeat: Infinity,
  ease: "easeInOut",
};

const arrowAnimation = {
  x: [0, 5, 0],
};
const arrowTransition = {
  duration: 1.5,
  repeat: Infinity,
};

const shineAnimation = {
  x: ["-100%", "100%"],
};
const shineTransition = {
  duration: 1,
  repeat: Infinity,
  repeatDelay: 1,
};

const CourseProgramsSection = () => {
  const navigate = useNavigate();
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const courses = [
    {
      icon: Rocket,
      title: "Foundation Course",
      duration: "1 Year",
      color: "from-blue-500 to-cyan-500",
      bgColor: "from-blue-50 to-cyan-50",
      path: "/courses/category/foundation",
      emoji: "🚀",
      features: [
        "Basic to Advanced Coverage",
        "Conceptual Clarity",
        "Weekly Tests",
        "Personal Mentorship",
      ],
      price: "₹1,99,000",
      students: "2.5K+",
      rating: 4.9,
      highlights: ["Beginner Friendly", "Complete Syllabus", "Live Classes"],
      subBadge: "Most Popular",
      particles: ["🎯", "📚", "✨", "💡"],
    },
    {
      icon: Target,
      title: "Prelims Course",
      duration: "6 Months",
      color: "from-green-500 to-emerald-500",
      bgColor: "from-green-50 to-emerald-50",
      path: "/courses/category/prelims",
      emoji: "🎯",
      features: [
        "MCQ Practice",
        "Current Affairs",
        "Mock Tests",
        "CSAT Preparation",
      ],
      price: "₹79,000",
      students: "3.2K+",
      rating: 4.8,
      highlights: ["Intensive", "CSAT Focus", "MCQ Bank"],
      subBadge: "Best Seller",
      particles: ["📝", "💯", "⚡", "🎖️"],
    },
    {
      icon: BookMarked,
      title: "Mains Course",
      duration: "6 Months",
      color: "from-purple-500 to-pink-500",
      bgColor: "from-purple-50 to-pink-50",
      path: "/courses/category/mains",
      emoji: "📖",
      features: [
        "Answer Writing",
        "GS Papers 1-4",
        "Essay Guidance",
        "Expert Review",
      ],
      price: "₹89,000",
      students: "1.8K+",
      rating: 4.9,
      highlights: ["Answer Writing", "Essay", "GS 1-4"],
      subBadge: "Top Rated",
      particles: ["✍️", "📄", "🏆", "⭐"],
    },
    {
      icon: Brain,
      title: "Optional Subject",
      duration: "4 Months",
      color: "from-orange-500 to-red-500",
      bgColor: "from-orange-50 to-red-50",
      path: "/courses/category/optional",
      emoji: "🧠",
      features: [
        "Expert Faculty",
        "Comprehensive Notes",
        "Practice Papers",
        "Mock Tests",
      ],
      price: "₹69,000",
      students: "1.2K+",
      rating: 4.7,
      highlights: ["20+ Options", "Expert Faculty", "Practice Papers"],
      subBadge: "Specialized",
      particles: ["💡", "📚", "🎓", "🔬"],
    },
    {
      icon: GraduationCap,
      title: "Interview Guidance",
      duration: "1 Month",
      color: "from-indigo-500 to-purple-500",
      bgColor: "from-indigo-50 to-purple-50",
      path: "/test-series",
      emoji: "🎓",
      features: [
        "Mock Interviews",
        "Personality Development",
        "Expert Panel",
        "DAF Analysis",
      ],
      price: "₹29,000",
      students: "890+",
      rating: 5.0,
      highlights: ["Mock Panels", "DAF Based", "Personality Dev"],
      subBadge: "Premium",
      particles: ["👔", "💼", "🎤", "👨‍💼"],
    },
    {
      icon: Zap,
      title: "Test Series",
      duration: "Ongoing",
      color: "from-yellow-500 to-orange-500",
      bgColor: "from-yellow-50 to-orange-50",
      path: "/test-series",
      emoji: "⚡",
      features: [
        "All India Ranking",
        "Detailed Analysis",
        "Performance Report",
        "200+ Tests",
      ],
      price: "₹15,000",
      students: "5K+",
      rating: 4.8,
      highlights: ["AIR", "200+ Tests", "Analytics"],
      subBadge: "Value Pick",
      particles: ["📊", "📈", "🏅", "💯"],
    },
  ];

  const FloatingParticle = memo(({ emoji, delay, index }) => {
    const particleAnimation = useMemo(
      () => ({
        y: [-10, -50, -90],
        opacity: [0, 1, 0],
        scale: [0.5, 1.2, 0.5],
        x: [0, index % 2 === 0 ? 20 : -20, 0],
      }),
      [index],
    );

    const particleTransition = useMemo(
      () => ({
        duration: 3,
        delay: delay,
        repeat: Infinity,
        repeatDelay: 2,
        ease: "easeOut",
      }),
      [delay],
    );

    const particleStyle = useMemo(
      () => ({
        left: `${15 + index * 18}%`,
        top: `${30 + (index % 3) * 20}%`,
      }),
      [index],
    );

    return (
      <motion.div
        className="absolute text-lg pointer-events-none z-10"
        initial={{ y: 0, opacity: 0, scale: 0 }}
        animate={particleAnimation}
        transition={particleTransition}
        style={particleStyle}
      >
        {emoji}
      </motion.div>
    );
  });

  const CourseCard3D = memo(({ course, index }) => {
    const cardRef = useRef(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const [isHovered, setIsHovered] = useState(false);

    const rotateX = useTransform(y, [-100, 100], [10, -10]);
    const rotateY = useTransform(x, [-100, 100], [-10, 10]);

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
      setIsHovered(false);
    };

    const handleMouseEnter = () => {
      setIsHovered(true);
    };

    const IconComponent = course.icon;

    return (
      <motion.div
        ref={cardRef}
        className="relative perspective-1000 group"
        initial={{ opacity: 0, y: 60, scale: 0.9, rotateY: 20 }}
        animate={isInView ? { opacity: 1, y: 0, scale: 1, rotateY: 0 } : {}}
        transition={{
          delay: index * 0.12,
          duration: 0.8,
          type: "spring",
          stiffness: 90,
        }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onMouseEnter={handleMouseEnter}
      >
        <motion.div
          className="relative bg-white rounded-3xl overflow-hidden shadow-2xl cursor-pointer border-2 border-gray-100"
          style={{
            rotateX: cardRotateX,
            rotateY: cardRotateY,
            transformStyle: "preserve-3d",
          }}
          whileHover={{
            scale: 1.05,
            boxShadow: "0 30px 60px -15px rgba(0,0,0,0.3)",
          }}
          onClick={() => navigate(course.path)}
        >
          {/* Header Section with Gradient */}
          <div
            className={`relative bg-gradient-to-br ${course.color} p-8 text-white overflow-hidden`}
            style={{ translateZ: 20 }}
          >
            {/* Animated Background Pattern */}
            <div className="absolute inset-0 opacity-20">
              <motion.div
                className="absolute inset-0"
                style={{
                  backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)`,
                  backgroundSize: "20px 20px",
                }}
                animate={backgroundPatternAnimation}
                transition={backgroundPatternTransition}
              />
            </div>

            {/* Floating Particles */}
            {isHovered &&
              course.particles.map((emoji, idx) => (
                <FloatingParticle
                  key={idx}
                  emoji={emoji}
                  delay={idx * 0.15}
                  index={idx}
                />
              ))}

            {/* Badge */}
            <motion.div
              className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm px-4 py-1.5 rounded-full text-xs font-bold shadow-lg border border-white/30"
              initial={{ scale: 0, rotate: -90 }}
              animate={isInView ? { scale: 1, rotate: 0 } : {}}
              transition={{ delay: index * 0.12 + 0.3, type: "spring" }}
            >
              {course.subBadge}
            </motion.div>

            {/* Icon & Title */}
            <motion.div
              className="relative z-10 flex items-center gap-4 mb-4"
              style={{ translateZ: 30 }}
            >
              <motion.div
                className="p-4 bg-white/20 backdrop-blur-sm rounded-2xl border border-white/30 shadow-lg"
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
              >
                <IconComponent className="w-10 h-10" strokeWidth={2.5} />
              </motion.div>
              <motion.div
                className="text-5xl"
                animate={emojiAnimation}
                transition={emojiTransition}
              >
                {course.emoji}
              </motion.div>
            </motion.div>

            <motion.h3
              className="text-3xl font-black mb-2 relative z-10"
              style={{ translateZ: 25 }}
            >
              {course.title}
            </motion.h3>

            {/* Duration & Students */}
            <motion.div
              className="flex items-center gap-4 relative z-10"
              style={{ translateZ: 20 }}
            >
              <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-3 py-1.5 rounded-full border border-white/30">
                <Clock className="w-4 h-4" />
                <span className="text-sm font-semibold">{course.duration}</span>
              </div>
              <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-3 py-1.5 rounded-full border border-white/30">
                <Users className="w-4 h-4" />
                <span className="text-sm font-semibold">{course.students}</span>
              </div>
            </motion.div>

            {/* Waves Effect */}
            <div className="absolute bottom-0 left-0 right-0">
              <svg
                viewBox="0 0 1200 120"
                preserveAspectRatio="none"
                className="w-full h-8"
              >
                <motion.path
                  d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                  fill="white"
                  opacity="0.3"
                  animate={{
                    d: [
                      "M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z",
                      "M321.39,70c58-8,114.16-25,172-35,82.39-14,168.19-15,250.45,0C823.78,45,906.67,80,985.66,100c70.05,16,146.53,22,214.34,0V0H0V40A600.21,600.21,0,0,0,321.39,70Z",
                      "M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z",
                    ],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </svg>
            </div>
          </div>

          {/* Content Section */}
          <div className="p-8 relative">
            {/* Rating & Price */}
            <motion.div
              className="flex items-center justify-between mb-6"
              style={{ translateZ: 15 }}
            >
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: index * 0.12 + 0.4 + i * 0.05 }}
                    >
                      <Star
                        className={`w-4 h-4 ${
                          i < Math.floor(course.rating)
                            ? "fill-yellow-400 text-yellow-400"
                            : "text-gray-300"
                        }`}
                      />
                    </motion.div>
                  ))}
                </div>
                <span className="text-sm font-bold text-gray-700">
                  {course.rating}
                </span>
              </div>
              <motion.div
                className={`text-2xl font-black bg-gradient-to-r ${course.color} bg-clip-text text-transparent`}
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ delay: index * 0.12 + 0.5, type: "spring" }}
              >
                {course.price}
              </motion.div>
            </motion.div>

            {/* Highlights */}
            <motion.div
              className="flex flex-wrap gap-2 mb-6"
              style={{ translateZ: 10 }}
            >
              {course.highlights.map((highlight, idx) => (
                <motion.span
                  key={idx}
                  className={`text-xs font-semibold px-3 py-1.5 rounded-full bg-gradient-to-r ${course.bgColor} border border-gray-200`}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: index * 0.12 + 0.6 + idx * 0.08 }}
                  whileHover={{ scale: 1.1, y: -2 }}
                >
                  {highlight}
                </motion.span>
              ))}
            </motion.div>

            {/* Features List */}
            <motion.ul className="space-y-3 mb-6" style={{ translateZ: 5 }}>
              {course.features.map((feature, i) => (
                <motion.li
                  key={i}
                  className="flex items-start gap-3 text-gray-700"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: index * 0.12 + 0.7 + i * 0.08 }}
                  whileHover={{ x: 5 }}
                >
                  <motion.div
                    animate={{
                      scale: [1, 1.2, 1],
                      rotate: [0, 360],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.2,
                    }}
                  >
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  </motion.div>
                  <span className="text-sm font-medium">{feature}</span>
                </motion.li>
              ))}
            </motion.ul>

            {/* Enroll Button */}
            <motion.button
              className={`w-full bg-gradient-to-r ${course.color} text-white px-6 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-2xl transition-all flex items-center justify-center gap-3 relative overflow-hidden group`}
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.12 + 1 }}
            >
              <span className="relative z-10">Enroll Now</span>
              <motion.div
                className="relative z-10"
                animate={arrowAnimation}
                transition={arrowTransition}
              >
                <ArrowRight className="w-5 h-5" />
              </motion.div>

              {/* Shine Effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-30"
                animate={shineAnimation}
                transition={shineTransition}
                style={{ skewX: -20 }}
              />
            </motion.button>
          </div>

          {/* Hover Glow */}
          <motion.div
            className={`absolute -inset-0.5 bg-gradient-to-r ${course.color} rounded-3xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`}
            style={{ translateZ: -10 }}
          />
        </motion.div>
      </motion.div>
    );
  });

  return (
    <section
      ref={sectionRef}
      className="relative py-20 overflow-hidden bg-gradient-to-b from-white via-gray-50 to-white"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -top-40 -left-40 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, 80, 0],
            y: [0, 40, 0],
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/2 -right-40 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
          animate={{
            scale: [1, 1.4, 1],
            x: [0, -80, 0],
            y: [0, -40, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute -bottom-40 left-1/3 w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
          animate={{
            scale: [1, 1.5, 1],
            x: [-40, 40, -40],
            y: [0, -60, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
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
            <span className="px-6 py-3 bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 text-white rounded-full text-sm font-bold uppercase tracking-wider shadow-2xl flex items-center gap-2">
              <BookOpen className="w-4 h-4" />
              Course Programs
              <Sparkles className="w-4 h-4" />
            </span>
          </motion.div>

          <motion.h2
            className="text-5xl md:text-6xl font-black mb-6 leading-tight"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Our{" "}
            <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 bg-clip-text text-transparent">
              Course Programs
            </span>
          </motion.h2>

          <motion.p
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Tailored courses for every stage of your UPSC preparation journey
            with expert guidance
          </motion.p>

          {/* Decorative Icons */}
          <motion.div
            className="flex justify-center gap-6 mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6 }}
          >
            {[Trophy, Crown, Medal, Award].map((Icon, idx) => (
              <motion.div
                key={idx}
                className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-lg"
                animate={{
                  y: [0, -8, 0],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 2.5 + idx * 0.3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: idx * 0.2,
                }}
                whileHover={{ scale: 1.2 }}
              >
                <Icon className="w-5 h-5 text-white" />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <CourseCard3D key={index} course={course} index={index} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.2 }}
        >
          <motion.button
            className="px-10 py-4 bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 text-white rounded-full font-bold text-lg shadow-2xl flex items-center gap-3 mx-auto"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 25px 50px -12px rgba(139,92,246,0.5)",
            }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate("/contact")}
          >
            <Sparkles className="w-6 h-6" />
            View All Courses
            <ChevronRight className="w-6 h-6" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default CourseProgramsSection;
