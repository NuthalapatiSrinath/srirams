import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { useState, useRef, memo, useMemo } from "react";
import {
  MapPin,
  Building2,
  Users,
  TrendingUp,
  Phone,
  Mail,
  Navigation,
  Clock,
  Award,
  BookOpen,
  GraduationCap,
  Star,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  MapPinned,
} from "lucide-react";

// Animation constants outside component to prevent recreation
const sparkleAnimation = {
  scale: [1, 1.2, 1],
  rotate: [0, 180, 360],
};
const sparkleTransition = {
  duration: 3,
  repeat: Infinity,
  ease: "easeInOut",
};

const backgroundAnimation = {
  scale: [1, 1.2, 1],
  rotate: [0, 90, 0],
};
const backgroundTransition = {
  duration: 20,
  repeat: Infinity,
  ease: "linear",
};

const trophyAnimation = {
  rotate: [0, 15, -15, 0],
};
const trophyTransition = {
  duration: 2,
  repeat: Infinity,
};

const OfflineCentersSection = () => {
  const [selectedCenter, setSelectedCenter] = useState(null);
  const [activeFilter, setActiveFilter] = useState("all");

  const centers = [
    {
      id: 1,
      name: "Patna",
      icon: "🏛️",
      location: "Gandhi Maidan, Patna",
      address: "Gandhi Maidan, Bailey Road, Patna - 800001",
      students: 890,
      branches: 18,
      fees: "₹58K",
      rating: 4.8,
      established: "2015",
      successRate: "92%",
      toppers: 45,
      facilities: ["Library", "Cafeteria", "Smart Classes", "Test Center"],
      contact: {
        phone: "+91 9876543210",
        email: "patna@sriramsias.com",
      },
      gradient: "from-orange-500 via-red-500 to-pink-500",
      bgPattern: "bg-gradient-to-br from-orange-50 to-red-50",
      shadow: "shadow-orange-200",
      border: "border-orange-300",
    },
    {
      id: 2,
      name: "Delhi",
      icon: "🕌",
      location: "Connaught Place, Delhi",
      address: "15A/40, WEA, Karol Bagh, New Delhi - 110005",
      students: 3527,
      branches: 68,
      fees: "₹2.48L",
      rating: 4.9,
      established: "2008",
      successRate: "95%",
      toppers: 156,
      facilities: [
        "Library",
        "Cafeteria",
        "Smart Classes",
        "Test Center",
        "Hostel",
        "Gym",
      ],
      contact: {
        phone: "+91 9811489560",
        email: "delhi@sriramsias.com",
      },
      gradient: "from-blue-500 via-indigo-500 to-purple-500",
      bgPattern: "bg-gradient-to-br from-blue-50 to-indigo-50",
      shadow: "shadow-blue-200",
      border: "border-blue-300",
    },
    {
      id: 3,
      name: "Prayagraj",
      icon: "🕌",
      location: "Civil Lines, Prayagraj",
      address: "Civil Lines, Near High Court, Prayagraj - 211001",
      students: 756,
      branches: 12,
      fees: "₹52K",
      rating: 4.7,
      established: "2017",
      successRate: "89%",
      toppers: 38,
      facilities: ["Library", "Cafeteria", "Smart Classes", "Test Center"],
      contact: {
        phone: "+91 9876543211",
        email: "prayagraj@sriramsias.com",
      },
      gradient: "from-teal-500 via-cyan-500 to-blue-500",
      bgPattern: "bg-gradient-to-br from-teal-50 to-cyan-50",
      shadow: "shadow-teal-200",
      border: "border-teal-300",
    },
    {
      id: 4,
      name: "Lucknow",
      icon: "🏰",
      location: "Hazratganj, Lucknow",
      address: "Hazratganj, Opposite GPO, Lucknow - 226001",
      students: 1234,
      branches: 25,
      fees: "₹65K",
      rating: 4.8,
      established: "2012",
      successRate: "91%",
      toppers: 67,
      facilities: [
        "Library",
        "Cafeteria",
        "Smart Classes",
        "Test Center",
        "Hostel",
      ],
      contact: {
        phone: "+91 9876543212",
        email: "lucknow@sriramsias.com",
      },
      gradient: "from-purple-500 via-pink-500 to-rose-500",
      bgPattern: "bg-gradient-to-br from-purple-50 to-pink-50",
      shadow: "shadow-purple-200",
      border: "border-purple-300",
    },
    {
      id: 5,
      name: "Guwahati",
      icon: "⛪",
      location: "Andheri West, Guwahati",
      address: "Paltan Bazaar, GS Road, Guwahati - 781008",
      students: 950,
      branches: 20,
      fees: "₹65K",
      rating: 4.6,
      established: "2016",
      successRate: "88%",
      toppers: 42,
      facilities: ["Library", "Cafeteria", "Smart Classes", "Test Center"],
      contact: {
        phone: "+91 9876543213",
        email: "guwahati@sriramsias.com",
      },
      gradient: "from-green-500 via-emerald-500 to-teal-500",
      bgPattern: "bg-gradient-to-br from-green-50 to-emerald-50",
      shadow: "shadow-green-200",
      border: "border-green-300",
    },
    {
      id: 6,
      name: "Indore",
      icon: "🏛️",
      location: "Koramangala, Indore",
      address: "Rajwada, Near Sarafa Bazaar, Indore - 452001",
      students: 1089,
      branches: 22,
      fees: "₹70K",
      rating: 4.7,
      established: "2013",
      successRate: "90%",
      toppers: 58,
      facilities: [
        "Library",
        "Cafeteria",
        "Smart Classes",
        "Test Center",
        "Parking",
      ],
      contact: {
        phone: "+91 9876543214",
        email: "indore@sriramsias.com",
      },
      gradient: "from-yellow-500 via-orange-500 to-red-500",
      bgPattern: "bg-gradient-to-br from-yellow-50 to-orange-50",
      shadow: "shadow-yellow-200",
      border: "border-yellow-300",
    },
  ];

  const filters = [
    { id: "all", label: "All Centers", icon: MapPinned },
    { id: "north", label: "North India", icon: Navigation },
    { id: "east", label: "East India", icon: TrendingUp },
    { id: "top", label: "Top Rated", icon: Star },
  ];

  // Filter logic
  const filteredCenters = centers.filter((center) => {
    if (activeFilter === "all") return true;
    if (activeFilter === "north") {
      return ["Delhi", "Lucknow"].includes(center.name);
    }
    if (activeFilter === "east") {
      return ["Patna", "Prayagraj", "Guwahati"].includes(center.name);
    }
    if (activeFilter === "top") {
      return center.rating >= 4.8;
    }
    return true;
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const centerCardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  const CenterCard3D = memo(({ center, index }) => {
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

    return (
      <motion.div
        ref={cardRef}
        variants={centerCardVariants}
        className="relative group perspective-1000"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onMouseEnter={handleMouseEnter}
        style={{
          transformStyle: "preserve-3d",
        }}
      >
        <motion.div
          className={`relative overflow-hidden rounded-2xl ${center.bgPattern} border-2 ${center.border} ${center.shadow} shadow-2xl cursor-pointer`}
          style={{
            rotateX: cardRotateX,
            rotateY: cardRotateY,
            transformStyle: "preserve-3d",
          }}
          whileHover={{ scale: 1.05 }}
          onClick={() => setSelectedCenter(center)}
        >
          {/* Animated Background Pattern */}
          <div className="absolute inset-0 opacity-20">
            <motion.div
              className={`absolute inset-0 bg-gradient-to-br ${center.gradient}`}
              animate={backgroundAnimation}
              transition={backgroundTransition}
            />
          </div>

          {/* Sparkle Effect */}
          <motion.div
            className="absolute top-4 right-4 z-10"
            animate={sparkleAnimation}
            transition={sparkleTransition}
          >
            <Sparkles className="w-6 h-6 text-yellow-500" />
          </motion.div>

          {/* Card Content */}
          <div className="relative z-10 p-6">
            {/* Icon and Header */}
            <div className="flex items-center justify-between mb-4">
              <motion.div
                className="flex items-center gap-4"
                style={{ translateZ: 20 }}
              >
                <motion.div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${center.gradient} flex items-center justify-center text-3xl shadow-lg`}
                  whileHover={{ rotateY: 180, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  {center.icon}
                </motion.div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
                    {center.name}
                    {center.rating >= 4.8 && (
                      <motion.span
                        animate={trophyAnimation}
                        transition={trophyTransition}
                      >
                        🏆
                      </motion.span>
                    )}
                  </h3>
                  <p className="text-sm text-gray-600 flex items-center gap-1 mt-1">
                    <MapPin className="w-4 h-4" />
                    {center.location}
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-3 gap-3 mb-4">
              <div className="bg-white/70 backdrop-blur-sm rounded-lg p-3 text-center border border-gray-200 hover:scale-110 hover:bg-white/90 transition-all">
                <Users className="w-5 h-5 mx-auto mb-1 text-blue-600" />
                <p className="text-lg font-bold text-gray-800">
                  {center.students}
                </p>
                <p className="text-xs text-gray-600">Students</p>
              </div>
              <div className="bg-white/70 backdrop-blur-sm rounded-lg p-3 text-center border border-gray-200 hover:scale-110 hover:bg-white/90 transition-all">
                <Building2 className="w-5 h-5 mx-auto mb-1 text-green-600" />
                <p className="text-lg font-bold text-gray-800">
                  {center.branches}
                </p>
                <p className="text-xs text-gray-600">Branches</p>
              </div>
              <div className="bg-white/70 backdrop-blur-sm rounded-lg p-3 text-center border border-gray-200 hover:scale-110 hover:bg-white/90 transition-all">
                <TrendingUp className="w-5 h-5 mx-auto mb-1 text-purple-600" />
                <p className="text-lg font-bold text-gray-800">{center.fees}</p>
                <p className="text-xs text-gray-600">Avg Fees</p>
              </div>
            </div>

            {/* Rating and Success Rate */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.1 }}
                    >
                      <Star
                        className={`w-4 h-4 ${
                          i < Math.floor(center.rating)
                            ? "fill-yellow-400 text-yellow-400"
                            : "text-gray-300"
                        }`}
                      />
                    </motion.div>
                  ))}
                </div>
                <span className="text-sm font-bold text-gray-700">
                  {center.rating}
                </span>
              </div>
              <div className="bg-green-100 px-3 py-1 rounded-full">
                <p className="text-xs font-bold text-green-700">
                  {center.successRate} Success Rate
                </p>
              </div>
            </div>

            {/* Facilities */}
            <div className="mb-4">
              <div className="flex flex-wrap gap-2">
                {center.facilities.slice(0, 3).map((facility, idx) => (
                  <span
                    key={idx}
                    className="text-xs bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full border border-gray-300 text-gray-700 font-medium hover:scale-110 hover:bg-white transition-all"
                  >
                    <CheckCircle2 className="w-3 h-3 inline mr-1 text-green-500" />
                    {facility}
                  </span>
                ))}
                {center.facilities.length > 3 && (
                  <span className="text-xs bg-gray-200 px-3 py-1 rounded-full text-gray-600 font-medium">
                    +{center.facilities.length - 3} more
                  </span>
                )}
              </div>
            </div>

            {/* Footer Actions */}
            <motion.div
              className={`flex items-center justify-between pt-4 border-t-2 ${center.border}`}
            >
              <div className="flex items-center gap-3">
                <motion.a
                  href={`tel:${center.contact.phone}`}
                  className={`p-2 rounded-lg bg-gradient-to-r ${center.gradient} text-white`}
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Phone className="w-4 h-4" />
                </motion.a>
                <motion.a
                  href={`mailto:${center.contact.email}`}
                  className={`p-2 rounded-lg bg-gradient-to-r ${center.gradient} text-white`}
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Mail className="w-4 h-4" />
                </motion.a>
              </div>
              <motion.button
                className={`flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r ${center.gradient} text-white font-semibold shadow-lg text-sm`}
                whileHover={{ scale: 1.05, x: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                View Details
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </motion.div>
          </div>

          {/* Hover Glow Effect */}
          <motion.div
            className={`absolute inset-0 bg-gradient-to-br ${center.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-2xl`}
            style={{ translateZ: -10 }}
          />
        </motion.div>
      </motion.div>
    );
  });

  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-b from-gray-50 via-white to-gray-50">
      {/* Animated Background Decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -top-40 -left-40 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute -bottom-40 -right-40 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 w-80 h-80 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
          animate={{
            scale: [1, 1.4, 1],
            x: [-100, 100, -100],
            y: [-50, 50, -50],
          }}
          transition={{
            duration: 12,
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
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
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
            <span className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full text-sm font-bold uppercase tracking-wider shadow-lg">
              🌍 OFFLINE CENTERS
            </span>
          </motion.div>

          <motion.h2
            className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-800 via-gray-900 to-black bg-clip-text text-transparent"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Find our{" "}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Offline Centers
            </span>
          </motion.h2>

          <motion.p
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            Experience world-class UPSC preparation at our premium centers
            across India
          </motion.p>
        </motion.div>

        {/* Filters */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {filters.map((filter, index) => {
            const IconComponent = filter.icon;
            return (
              <motion.button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all shadow-lg ${
                  activeFilter === filter.id
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white scale-105"
                    : "bg-white text-gray-700 hover:shadow-xl"
                }`}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <IconComponent className="w-5 h-5" />
                {filter.label}
              </motion.button>
            );
          })}
        </motion.div>

        {/* Centers Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          key={activeFilter}
        >
          {filteredCenters.map((center, index) => (
            <CenterCard3D key={center.id} center={center} index={index} />
          ))}
        </motion.div>

        {/* No Results Message */}
        {filteredCenters.length === 0 && (
          <motion.div
            className="text-center py-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <p className="text-xl text-gray-600">
              No centers found for this filter.
            </p>
          </motion.div>
        )}

        {/* Bottom CTA */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <motion.button
            className="px-8 py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white rounded-full font-bold text-lg shadow-2xl hover:shadow-3xl flex items-center gap-3 mx-auto"
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            <MapPinned className="w-6 h-6" />
            Find Nearest Center
            <ArrowRight className="w-6 h-6" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default OfflineCentersSection;
