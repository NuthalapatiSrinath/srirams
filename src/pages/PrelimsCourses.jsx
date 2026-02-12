import { motion } from "framer-motion";
import { Target, BookOpen, CheckCircle } from "lucide-react";

const PrelimsCourses = () => {
  const courses = [
    {
      title: "CSAT Course for UPSC CSE Prelims",
      description:
        "Master the CSAT paper with focused preparation and practice",
      features: [
        "Comprehensive Coverage",
        "Practice Questions",
        "Mock Tests",
        "Strategy Sessions",
      ],
      slug: "csat-course",
    },
    {
      title: "Prelims Test Series 2026",
      description: "Extensive test series with detailed analysis and feedback",
      features: [
        "20+ Full Length Tests",
        "Detailed Solutions",
        "Performance Analysis",
        "All India Ranking",
      ],
      slug: "prelims-test-series",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <motion.section
        className="bg-gradient-to-r from-green-600 to-teal-700 text-white py-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <div className="container mx-auto px-6">
          <motion.h1
            className="text-5xl font-bold mb-4"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Prelims Courses
          </motion.h1>
          <motion.p
            className="text-xl text-green-100"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Ace your UPSC Prelims with our specialized courses
          </motion.p>
        </div>
      </motion.section>

      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            {courses.map((course, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <Target className="w-8 h-8 text-green-600" />
                  <h2 className="text-2xl font-bold text-gray-800">
                    {course.title}
                  </h2>
                </div>
                <p className="text-gray-600 mb-6">{course.description}</p>
                <ul className="space-y-3 mb-6">
                  {course.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <motion.button
                  className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Enroll Now
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrelimsCourses;
