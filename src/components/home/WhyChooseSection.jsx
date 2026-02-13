import {
  motion,
  useMotionValue,
  useTransform,
  useSpring,
  useInView,
} from "framer-motion";
import { useState, useRef, memo, useMemo } from "react";
import {
  GraduationCap,
  BookOpen,
  Target,
  FileText,
  Users,
  TrendingUp,
  Award,
  CheckCircle2,
  Star,
  Zap,
  Crown,
  Heart,
  Shield,
  Sparkles,
  Rocket,
  Brain,
  Trophy,
} from "lucide-react";

// Animation constants
const iconAnimation = {
  rotate: [0, 360],
  scale: [1, 1.1, 1],
};
const iconTransition = {
  duration: 20,
  repeat: Infinity,
  ease: "linear",
};

const emojiAnimation = {
  y: [0, -10, 0],
  rotate: [0, 10, -10, 0],
};
const emojiTransition = {
  duration: 3,
  repeat: Infinity,
  ease: "easeInOut",
};

const backgroundGradientAnimation = {
  scale: [1, 1.2, 1],
  rotate: [0, 90, 180],
};
const backgroundGradientTransition = {
  duration: 15,
  repeat: Infinity,
  ease: "linear",
};

const shineAnimation = {
  x: ["-100%", "100%"],
};
const shineTransition = {
  duration: 1.5,
  repeat: Infinity,
  repeatDelay: 2,
  ease: "easeInOut",
};

const checkmarkAnimation = {
  scale: [1, 1.2, 1],
};

const WhyChooseSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const features = [
    {
      title: "Expert Faculty",
      description:
        "Learn from IAS officers and subject matter experts with years of teaching experience",
      icon: GraduationCap,
      emoji: "👨‍🏫",
      gradient: "from-blue-500 via-indigo-500 to-purple-500",
      bgColor: "bg-blue-50",
      iconBg: "bg-blue-100",
      highlights: [
        "Former IAS & IPS Officers",
        "15+ Years Experience",
        "PhD Holders",
        "Subject Experts",
      ],
      stats: { value: "100+", label: "Experts" },
      particles: ["⭐", "💫", "✨", "🎓"],
    },
    {
      title: "Comprehensive Material",
      description:
        "Well-researched and updated study material covering all aspects of UPSC syllabus",
      icon: BookOpen,
      emoji: "📚",
      gradient: "from-green-500 via-emerald-500 to-teal-500",
      bgColor: "bg-green-50",
      iconBg: "bg-green-100",
      highlights: [
        "Updated Content",
        "Bilingual Material",
        "Digital Resources",
        "Weekly Updates",
      ],
      stats: { value: "500+", label: "Books" },
      particles: ["📖", "📝", "📊", "📑"],
    },
    {
      title: "Personalized Guidance",
      description:
        "Individual attention and mentorship to help you achieve your IAS dream",
      icon: Target,
      emoji: "🎯",
      gradient: "from-purple-500 via-pink-500 to-rose-500",
      bgColor: "bg-purple-50",
      iconBg: "bg-purple-100",
      highlights: [
        "1-on-1 Sessions",
        "Custom Study Plans",
        "Progress Tracking",
        "Career Counseling",
      ],
      stats: { value: "50:1", label: "Ratio" },
      particles: ["🎯", "💝", "🌟", "💪"],
    },
    {
      title: "Test Series",
      description:
        "Regular mock tests and evaluations to track your progress and improve",
      icon: FileText,
      emoji: "📝",
      gradient: "from-orange-500 via-red-500 to-pink-500",
      bgColor: "bg-orange-50",
      iconBg: "bg-orange-100",
      highlights: [
        "200+ Mock Tests",
        "Detailed Analysis",
        "All India Rank",
        "Performance Insights",
      ],
      stats: { value: "200+", label: "Tests" },
      particles: ["📊", "📈", "🏆", "💯"],
    },
    {
      title: "Success Rate",
      description:
        "Highest conversion rate with consistent toppers year after year",
      icon: TrendingUp,
      emoji: "📈",
      gradient: "from-cyan-500 via-blue-500 to-indigo-500",
      bgColor: "bg-cyan-50",
      iconBg: "bg-cyan-100",
      highlights: [
        "95% Success Rate",
        "500+ AIR Holders",
        "Multiple Toppers",
        "Proven Track Record",
      ],
      stats: { value: "95%", label: "Success" },
      particles: ["🚀", "⚡", "🎯", "👑"],
    },
    {
      title: "Infrastructure",
      description:
        "State-of-the-art facilities with modern classrooms and library",
      icon: Shield,
      emoji: "🏢",
      gradient: "from-yellow-500 via-amber-500 to-orange-500",
      bgColor: "bg-yellow-50",
      iconBg: "bg-yellow-100",
      highlights: [
        "AC Classrooms",
        "Digital Library",
        "Study Halls",
        "Cafeteria",
      ],
      stats: { value: "68+", label: "Centers" },
      particles: ["🏛️", "📚", "💻", "☕"],
    },
    {
      title: "Alumni Network",
      description:
        "Strong community of successful officers guiding current aspirants",
      icon: Users,
      emoji: "👥",
      gradient: "from-pink-500 via-rose-500 to-red-500",
      bgColor: "bg-pink-50",
      iconBg: "bg-pink-100",
      highlights: [
        "5000+ Alumni",
        "Networking Events",
        "Mentorship Program",
        "Career Support",
      ],
      stats: { value: "5000+", label: "Alumni" },
      particles: ["👨‍💼", "👩‍💼", "🤝", "💼"],
    },
    {
      title: "Smart Learning",
      description:
        "Adaptive learning technology with AI-powered study recommendations",
      icon: Brain,
      emoji: "🧠",
      gradient: "from-violet-500 via-purple-500 to-fuchsia-500",
      bgColor: "bg-violet-50",
      iconBg: "bg-violet-100",
      highlights: [
        "AI-Powered Platform",
        "Mobile App",
        "Live Classes",
        "Recorded Sessions",
      ],
      stats: { value: "24/7", label: "Access" },
      particles: ["💡", "🤖", "📱", "💻"],
    },
  ];

  const FloatingParticle = memo(({ emoji, delay, position }) => {
    const particleAnimation = useMemo(
      () => ({
        y: [-10, -40, -70],
        opacity: [0, 1, 0],
        scale: [0.5, 1, 0.5],
        rotate: [0, 180, 360],
      }),
      [],
    );

    const particleTransition = useMemo(
      () => ({
        duration: 2.5,
        delay: delay,
        repeat: Infinity,
        repeatDelay: 3,
        ease: "easeOut",
      }),
      [delay],
    );

    return (
      <motion.div
        className="absolute text-lg pointer-events-none z-10"
        initial={{ y: 0, opacity: 0, scale: 0 }}
        animate={particleAnimation}
        transition={particleTransition}
        style={{ left: position.x, top: position.y }}
      >
        {emoji}
      </motion.div>
    );
  });

  const Feature3DCard = memo(({ feature, index }) => {
    const cardRef = useRef(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const [isHovered, setIsHovered] = useState(false);

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
      setIsHovered(false);
    };

    const handleMouseEnter = () => {
      setIsHovered(true);
    };

    const IconComponent = feature.icon;

    return (
      <motion.div
        ref={cardRef}
        className="relative perspective-1000 group"
        initial={{ opacity: 0, y: 50, scale: 0.9, rotateY: -30 }}
        animate={isInView ? { opacity: 1, y: 0, scale: 1, rotateY: 0 } : {}}
        transition={{
          delay: index * 0.1,
          duration: 0.8,
          type: "spring",
          stiffness: 80,
        }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onMouseEnter={handleMouseEnter}
      >
        <motion.div
          className={`relative overflow-hidden ${feature.bgColor} rounded-2xl p-8 shadow-xl border-2 border-white/80 backdrop-blur-sm`}
          style={{
            rotateX: cardRotateX,
            rotateY: cardRotateY,
            transformStyle: "preserve-3d",
          }}
          whileHover={{
            scale: 1.05,
            boxShadow: "0 25px 50px -12px rgba(0,0,0,0.25)",
          }}
        >
          {/* Animated Gradient Background */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500">
            <motion.div
              className={`absolute inset-0 bg-gradient-to-br ${feature.gradient}`}
              animate={backgroundGradientAnimation}
              transition={backgroundGradientTransition}
            />
          </div>

          {/* Floating Particles on Hover */}
          {isHovered &&
            feature.particles.map((emoji, idx) => (
              <FloatingParticle
                key={idx}
                emoji={emoji}
                delay={idx * 0.15}
                position={{
                  x: `${20 + idx * 20}%`,
                  y: `${20 + (idx % 2) * 30}%`,
                }}
              />
            ))}

          {/* Outer Glow */}
          <motion.div
            className={`absolute -inset-0.5 bg-gradient-to-r ${feature.gradient} rounded-2xl blur-lg opacity-0 group-hover:opacity-40 transition-opacity duration-500`}
            style={{ translateZ: -10 }}
          />

          {/* Icon Container with 3D Effect */}
          <motion.div
            className="relative z-10 mb-6"
            style={{ translateZ: 40 }}
            animate={
              isHovered
                ? {
                    rotate: [0, 10, -10, 0],
                    scale: [1, 1.15, 1],
                  }
                : {}
            }
            transition={{ duration: 0.6 }}
          >
            <div
              className={`inline-flex p-5 ${feature.iconBg} rounded-xl shadow-lg relative hover:rotate-180 hover:scale-110 transition-transform duration-500`}
            >
              <IconComponent
                className="w-10 h-10 text-gray-700"
                strokeWidth={2}
              />
              <motion.div
                className="absolute -top-1 -right-1 text-3xl"
                animate={emojiAnimation}
                transition={emojiTransition}
              >
                {feature.emoji}
              </motion.div>
            </div>

            {/* Stats Badge */}
            <motion.div
              className={`absolute -top-2 -right-2 bg-gradient-to-r ${feature.gradient} text-white px-3 py-1.5 rounded-full shadow-lg`}
              initial={{ scale: 0, rotate: -90 }}
              animate={isInView ? { scale: 1, rotate: 0 } : {}}
              transition={{ delay: index * 0.1 + 0.3, type: "spring" }}
            >
              <div className="text-xs font-bold">{feature.stats.value}</div>
              <div className="text-[8px] opacity-90">{feature.stats.label}</div>
            </motion.div>
          </motion.div>

          {/* Title & Description */}
          <motion.div className="relative z-10 mb-4" style={{ translateZ: 30 }}>
            <h3
              className={`text-2xl font-black mb-3 bg-gradient-to-r ${feature.gradient} bg-clip-text text-transparent`}
            >
              {feature.title}
            </h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              {feature.description}
            </p>
          </motion.div>

          {/* Highlights with Animated Checkmarks */}
          <motion.div
            className="space-y-2 relative z-10"
            initial={{ opacity: 0, y: 20 }}
            animate={isHovered ? { opacity: 1, y: 0 } : { opacity: 0.8, y: 0 }}
            transition={{ duration: 0.3 }}
            style={{ translateZ: 20 }}
          >
            {feature.highlights.map((highlight, idx) => (
              <motion.div
                key={idx}
                className="flex items-center gap-2 text-xs text-gray-700 bg-white/60 backdrop-blur-sm rounded-lg p-2 px-3 hover:scale-105 hover:translate-x-1 transition-all"
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: index * 0.1 + 0.4 + idx * 0.08 }}
              >
                <CheckCircle2 className="w-4 h-4 text-green-600" />
                <span className="font-semibold">{highlight}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* Shine Effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-30"
            animate={shineAnimation}
            transition={shineTransition}
            style={{ skewX: -20 }}
          />

          {/* Bottom Glow */}
          <div
            className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${feature.gradient}`}
          />
        </motion.div>
      </motion.div>
    );
  });

  return (
    <section
      ref={sectionRef}
      className="relative py-20 overflow-hidden bg-gradient-to-b from-gray-50 via-white to-gray-50"
    >
      {/* Animated Background Decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
        <motion.div
          className="absolute -top-20 -left-20 w-64 h-64 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/2 -right-20 w-64 h-64 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl"
          animate={{
            scale: [1, 1.4, 1],
            x: [0, -50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute -bottom-20 left-1/3 w-64 h-64 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl"
          animate={{
            scale: [1, 1.5, 1],
            x: [-30, 30, -30],
            y: [0, -40, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -50 }}
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
            <span className="px-6 py-3 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white rounded-full text-sm font-bold uppercase tracking-wider shadow-2xl flex items-center gap-2">
              <Star className="w-4 h-4" />
              Why Choose Us
              <Sparkles className="w-4 h-4" />
            </span>
          </motion.div>

          <motion.h2
            className="text-5xl md:text-6xl font-black mb-6 leading-tight"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Why Choose{" "}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Sriram's IAS
            </span>
            ?
          </motion.h2>

          <motion.p
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            45 years of excellence in UPSC coaching with proven track record of
            success and unmatched commitment to your dreams
          </motion.p>

          {/* Decorative Icons */}
          <motion.div
            className="flex justify-center gap-6 mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            {[Crown, Award, Trophy, Rocket].map((Icon, idx) => (
              <motion.div
                key={idx}
                className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg"
                animate={{
                  y: [0, -8, 0],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 2 + idx * 0.3,
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

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Feature3DCard key={index} feature={feature} index={index} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1, duration: 0.6 }}
        >
          <motion.button
            className="px-10 py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white rounded-full font-bold text-lg shadow-2xl flex items-center gap-3 mx-auto"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            <Zap className="w-6 h-6" />
            Start Your Journey Today
            <Rocket className="w-6 h-6" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
