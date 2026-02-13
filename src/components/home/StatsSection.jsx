import {
  motion,
  useMotionValue,
  useTransform,
  useSpring,
  useInView,
} from "framer-motion";
import { useState, useEffect, useRef, memo, useMemo } from "react";
import {
  Award,
  Users,
  BookOpen,
  TrendingUp,
  Target,
  Globe,
  Zap,
  Star,
  Trophy,
  Sparkles,
  Crown,
  Flame,
  Heart,
  ThumbsUp,
  Rocket,
  Brain,
} from "lucide-react";

// Animation constants
const backgroundGradientAnimation = {
  scale: [1, 1.2, 1],
  rotate: [0, 90, 0],
};
const backgroundGradientTransition = {
  duration: 20,
  repeat: Infinity,
  ease: "linear",
};

const iconRotateAnimation = {
  rotate: [0, 360],
};
const iconRotateTransition = {
  duration: 20,
  repeat: Infinity,
  ease: "linear",
};

const trendAnimation = {
  y: [0, -5, 0],
  scale: [1, 1.05, 1],
};
const trendTransition = {
  duration: 2,
  repeat: Infinity,
  ease: "easeInOut",
};

const shineAnimation = {
  x: ["-100%", "100%"],
};
const shineTransition = {
  duration: 1.5,
  repeat: Infinity,
  repeatDelay: 3,
  ease: "easeInOut",
};

const StatsSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const stats = [
    {
      icon: Award,
      value: 2500,
      suffix: "+",
      label: "Selections",
      description: "Successful candidates across all services",
      color: "blue",
      gradient: "from-blue-500 via-blue-600 to-indigo-600",
      bgGradient: "from-blue-50 to-indigo-50",
      shadowColor: "shadow-blue-500/50",
      iconBg: "bg-blue-100",
      particles: ["🎯", "🏆", "⭐", "💫"],
      trend: "+15%",
      subStats: [
        { label: "IAS Officers", value: "450+" },
        { label: "IPS Officers", value: "320+" },
        { label: "IFS Officers", value: "280+" },
      ],
    },
    {
      icon: Users,
      value: 50000,
      suffix: "+",
      label: "Students Trained",
      description: "Mentored towards their dream careers",
      color: "green",
      gradient: "from-green-500 via-emerald-600 to-teal-600",
      bgGradient: "from-green-50 to-emerald-50",
      shadowColor: "shadow-green-500/50",
      iconBg: "bg-green-100",
      particles: ["👨‍🎓", "📚", "✨", "💡"],
      trend: "+25%",
      subStats: [
        { label: "Active Students", value: "12,000+" },
        { label: "Alumni Network", value: "38,000+" },
        { label: "Success Stories", value: "5,000+" },
      ],
    },
    {
      icon: BookOpen,
      value: 100,
      suffix: "+",
      label: "Expert Faculty",
      description: "Experienced mentors and subject experts",
      color: "purple",
      gradient: "from-purple-500 via-violet-600 to-indigo-600",
      bgGradient: "from-purple-50 to-violet-50",
      shadowColor: "shadow-purple-500/50",
      iconBg: "bg-purple-100",
      particles: ["👨‍🏫", "📖", "🎓", "🔬"],
      trend: "+8%",
      subStats: [
        { label: "PhD Holders", value: "45+" },
        { label: "Ex-Bureaucrats", value: "20+" },
        { label: "Subject Experts", value: "35+" },
      ],
    },
    {
      icon: TrendingUp,
      value: 45,
      suffix: "+",
      label: "Years of Excellence",
      description: "Legacy of shaping civil servants",
      color: "orange",
      gradient: "from-orange-500 via-red-500 to-pink-500",
      bgGradient: "from-orange-50 to-red-50",
      shadowColor: "shadow-orange-500/50",
      iconBg: "bg-orange-100",
      particles: ["🌟", "💪", "🎖️", "🔥"],
      trend: "Est. 1979",
      subStats: [
        { label: "Centers Nationwide", value: "68+" },
        { label: "Study Materials", value: "500+" },
        { label: "Test Series", value: "200+" },
      ],
    },
  ];

  const AnimatedCounter = ({ end, duration = 2, suffix = "" }) => {
    const [count, setCount] = useState(0);
    const nodeRef = useRef(null);
    const inView = useInView(nodeRef, { once: true });

    useEffect(() => {
      if (!inView) return;

      let startTime;
      let animationFrame;

      const animate = (currentTime) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min(
          (currentTime - startTime) / (duration * 1000),
          1,
        );

        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        setCount(Math.floor(easeOutQuart * end));

        if (progress < 1) {
          animationFrame = requestAnimationFrame(animate);
        }
      };

      animationFrame = requestAnimationFrame(animate);

      return () => {
        if (animationFrame) {
          cancelAnimationFrame(animationFrame);
        }
      };
    }, [end, duration, inView]);

    return (
      <span ref={nodeRef}>
        {count.toLocaleString()}
        {suffix}
      </span>
    );
  };

  const FloatingParticle = memo(({ emoji, delay, duration, position }) => {
    const particleAnimation = useMemo(
      () => ({
        y: [-20, -60, -100],
        opacity: [0, 1, 0],
        scale: [0.5, 1, 0.5],
        rotate: [0, 360],
      }),
      [],
    );

    const particleTransition = useMemo(
      () => ({
        duration: duration,
        delay: delay,
        repeat: Infinity,
        repeatDelay: 2,
        ease: "easeOut",
      }),
      [duration, delay],
    );

    return (
      <motion.div
        className="absolute text-2xl pointer-events-none"
        initial={{ y: 0, opacity: 0, scale: 0 }}
        animate={particleAnimation}
        transition={particleTransition}
        style={{ left: position.x, top: position.y }}
      >
        {emoji}
      </motion.div>
    );
  });

  const StatCard = memo(({ stat, index }) => {
    const cardRef = useRef(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const [isHovered, setIsHovered] = useState(false);

    const rotateX = useTransform(y, [-100, 100], [5, -5]);
    const rotateY = useTransform(x, [-100, 100], [-5, 5]);

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

    const IconComponent = stat.icon;

    return (
      <motion.div
        ref={cardRef}
        className="relative perspective-1000 group"
        initial={{ opacity: 0, y: 50, scale: 0.9 }}
        animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
        transition={{
          delay: index * 0.15,
          duration: 0.6,
          type: "spring",
          stiffness: 100,
        }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onMouseEnter={handleMouseEnter}
      >
        <motion.div
          className={`relative overflow-hidden bg-gradient-to-br ${stat.bgGradient} rounded-3xl p-4 sm:p-6 shadow-2xl border-2 border-white/50 backdrop-blur-sm`}
          style={{
            rotateX: cardRotateX,
            rotateY: cardRotateY,
            transformStyle: "preserve-3d",
          }}
          whileHover={{
            scale: 1.05,
            boxShadow: `0 25px 50px -12px ${
              stat.color === "blue"
                ? "rgba(59, 130, 246, 0.5)"
                : stat.color === "green"
                  ? "rgba(34, 197, 94, 0.5)"
                  : stat.color === "purple"
                    ? "rgba(168, 85, 247, 0.5)"
                    : "rgba(249, 115, 22, 0.5)"
            }`,
          }}
        >
          {/* Animated Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <motion.div
              className={`absolute inset-0 bg-gradient-to-br ${stat.gradient}`}
              animate={backgroundGradientAnimation}
              transition={backgroundGradientTransition}
            />
          </div>

          {/* Floating Particles */}
          {isHovered &&
            stat.particles.map((emoji, idx) => (
              <FloatingParticle
                key={idx}
                emoji={emoji}
                delay={idx * 0.2}
                duration={2 + idx * 0.3}
                position={{
                  x: `${20 + idx * 20}%`,
                  y: `${30 + (idx % 2) * 20}%`,
                }}
              />
            ))}

          {/* Glow Effect */}
          <motion.div
            className={`absolute -inset-1 bg-gradient-to-r ${stat.gradient} rounded-3xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`}
            style={{ translateZ: -20 }}
          />

          {/* Icon Container */}
          <motion.div
            className="relative z-10 mb-4"
            animate={
              isHovered
                ? {
                    rotate: [0, -10, 10, -10, 0],
                    scale: [1, 1.1, 1],
                  }
                : {}
            }
            transition={{ duration: 0.5 }}
          >
            <div
              className={`inline-flex p-3 sm:p-4 ${stat.iconBg} rounded-2xl shadow-lg hover:rotate-360 hover:scale-110 transition-transform duration-600`}
            >
              <IconComponent
                className={`w-8 h-8 sm:w-10 sm:h-10 text-${stat.color}-600`}
                strokeWidth={2.5}
              />
            </div>

            {/* Badge */}
            <motion.div
              className={`absolute -top-2 -right-2 bg-gradient-to-r ${stat.gradient} text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg`}
              initial={{ scale: 0, rotate: -180 }}
              animate={isInView ? { scale: 1, rotate: 0 } : {}}
              transition={{ delay: index * 0.15 + 0.3, type: "spring" }}
            >
              {stat.trend}
            </motion.div>
          </motion.div>

          {/* Counter */}
          <motion.div className="relative z-10 mb-2" style={{ translateZ: 30 }}>
            <h3
              className={`text-3xl sm:text-4xl lg:text-5xl font-black bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-1 leading-tight break-words overflow-visible`}
            >
              <AnimatedCounter
                end={stat.value}
                suffix={stat.suffix}
                duration={2.5}
              />
            </h3>
            <p className="text-lg sm:text-xl font-bold text-gray-800 mb-2 break-words">
              {stat.label}
            </p>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              {stat.description}
            </p>
          </motion.div>

          {/* Divider */}
          <motion.div
            className={`h-1 bg-gradient-to-r ${stat.gradient} rounded-full mb-3`}
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ delay: index * 0.15 + 0.5, duration: 0.8 }}
          />

          {/* Sub Stats */}
          <motion.div
            className="space-y-1.5 relative z-10"
            initial={{ opacity: 0, y: 20 }}
            animate={isHovered ? { opacity: 1, y: 0 } : { opacity: 0.7, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            {stat.subStats.map((subStat, idx) => (
              <motion.div
                key={idx}
                className="flex items-center justify-between bg-white/60 backdrop-blur-sm rounded-lg p-1.5 px-2 hover:scale-105 hover:translate-x-1 transition-all"
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: index * 0.15 + 0.6 + idx * 0.1 }}
              >
                <span className="text-[10px] sm:text-xs font-semibold text-gray-700 flex items-center gap-1">
                  <motion.span
                    animate={iconRotateAnimation}
                    transition={iconRotateTransition}
                  >
                    {idx === 0 ? "🎯" : idx === 1 ? "⭐" : "💫"}
                  </motion.span>
                  {subStat.label}
                </span>
                <span className="text-xs sm:text-sm font-black text-gray-800">
                  {subStat.value}
                </span>
              </motion.div>
            ))}
          </motion.div>

          {/* Shine Effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20"
            animate={shineAnimation}
            transition={shineTransition}
            style={{ skewX: -20 }}
          />
        </motion.div>
      </motion.div>
    );
  });

  return (
    <section
      ref={sectionRef}
      className="relative py-12 sm:py-16 lg:py-20 overflow-hidden bg-gradient-to-b from-white via-gray-50 to-white"
    >
      {/* Animated Background Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -top-40 -left-40 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
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
          className="absolute top-1/2 -right-40 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
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
          className="absolute -bottom-40 left-1/2 w-96 h-96 bg-green-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
          animate={{
            scale: [1, 1.5, 1],
            x: [-50, 50, -50],
            y: [0, -100, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1600px] relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-8 sm:mb-10 lg:mb-12"
          initial={{ opacity: 0, y: -30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-block mb-4"
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <span className="px-4 py-2 sm:px-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider shadow-xl">
              📊 Our Achievements
            </span>
          </motion.div>

          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl font-black mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <span className="bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 bg-clip-text text-transparent">
              Numbers That{" "}
            </span>
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Speak Volumes
            </span>
          </motion.h2>

          <motion.p
            className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto px-4"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Decades of excellence, thousands of success stories, and counting...
          </motion.p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-4 lg:gap-6">
          {stats.map((stat, index) => (
            <StatCard key={index} stat={stat} index={index} />
          ))}
        </div>

        {/* Bottom Decoration */}
        <motion.div
          className="mt-8 sm:mt-12 flex justify-center gap-3 sm:gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1, duration: 0.6 }}
        >
          {[Trophy, Crown, Star, Rocket].map((Icon, idx) => (
            <motion.div
              key={idx}
              className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg"
              animate={{
                y: [0, -10, 0],
                rotate: [0, 360],
              }}
              transition={{
                duration: 2 + idx * 0.2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: idx * 0.2,
              }}
            >
              <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default StatsSection;
