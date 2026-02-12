import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  Rocket,
  Target,
  BookMarked,
  Brain,
  GraduationCap,
  Zap,
  Clock,
  CheckCircle,
} from "lucide-react";

const CourseProgramsSection = () => {
  const navigate = useNavigate();

  const courses = [
    {
      icon: Rocket,
      title: "Foundation Course",
      duration: "1 Year",
      color: "from-blue-500 to-cyan-500",
      path: "/courses/category/foundation",
      features: [
        "Basic to Advanced Coverage",
        "Conceptual Clarity",
        "Weekly Tests",
      ],
    },
    {
      icon: Target,
      title: "Prelims Course",
      duration: "6 Months",
      color: "from-green-500 to-emerald-500",
      path: "/courses/category/prelims",
      features: ["MCQ Practice", "Current Affairs", "Mock Tests"],
    },
    {
      icon: BookMarked,
      title: "Mains Course",
      duration: "6 Months",
      color: "from-purple-500 to-pink-500",
      path: "/courses/category/mains",
      features: ["Answer Writing", "GS Papers 1-4", "Essay Guidance"],
    },
    {
      icon: Brain,
      title: "Optional Subject",
      duration: "4 Months",
      color: "from-orange-500 to-red-500",
      path: "/courses/category/optional",
      features: ["Expert Faculty", "Comprehensive Notes", "Practice Papers"],
    },
    {
      icon: GraduationCap,
      title: "Interview Guidance",
      duration: "1 Month",
      color: "from-indigo-500 to-purple-500",
      path: "/test-series",
      features: ["Mock Interviews", "Personality Development", "Expert Panel"],
    },
    {
      icon: Zap,
      title: "Test Series",
      duration: "Ongoing",
      color: "from-yellow-500 to-orange-500",
      path: "/test-series",
      features: [
        "All India Ranking",
        "Detailed Analysis",
        "Performance Report",
      ],
    },
  ];

  return (
    <section className="container mx-auto px-6 mb-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          Our <span className="text-purple-600">Course Programs</span>
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Tailored courses for every stage of your UPSC preparation journey
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {courses.map((course, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            whileHover={{ y: -10, scale: 1.02 }}
            className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all cursor-pointer"
            onClick={() => navigate(course.path)}
          >
            <div className={`bg-gradient-to-r ${course.color} p-6 text-white`}>
              <course.icon className="w-12 h-12 mb-3" />
              <h3 className="text-2xl font-bold mb-2">{course.title}</h3>
              <p className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                {course.duration}
              </p>
            </div>
            <div className="p-6">
              <ul className="space-y-3">
                {course.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`w-full mt-6 bg-gradient-to-r ${course.color} text-white px-6 py-3 rounded-xl font-bold shadow-lg hover:shadow-xl transition-all`}
              >
                Enroll Now
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default CourseProgramsSection;
