import { motion } from "framer-motion";
import { PenTool, FileText, Award } from "lucide-react";

const MainsCourses = () => {
  const courses = [
    {
      title: "Mains Test Series 2026",
      description:
        "Comprehensive test series for Mains preparation with answer evaluation",
      icon: FileText,
      features: [
        "15+ Full Length Tests",
        "Manual Evaluation",
        "Personalized Feedback",
        "Model Answers",
      ],
      slug: "mains-test-series",
    },
    {
      title: "Mains Answer Writing Program",
      description: "Master the art of answer writing with expert guidance",
      icon: PenTool,
      features: [
        "Daily Answer Writing",
        "Expert Review",
        "Strategy Sessions",
        "Previous Year Analysis",
      ],
      slug: "mains-answer-writing",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <motion.section
        className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-20"
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
            Mains Courses
          </motion.h1>
          <motion.p
            className="text-xl text-purple-100"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Transform your Mains preparation with expert guidance
          </motion.p>
        </div>
      </motion.section>

      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            {courses.map((course, index) => {
              const Icon = course.icon;
              return (
                <motion.div
                  key={index}
                  className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 bg-purple-100 rounded-lg">
                      <Icon className="w-8 h-8 text-purple-600" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-800">
                      {course.title}
                    </h2>
                  </div>
                  <p className="text-gray-600 mb-6">{course.description}</p>
                  <ul className="space-y-3 mb-6">
                    {course.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-center gap-2 text-gray-700"
                      >
                        <Award className="w-5 h-5 text-purple-600" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <motion.button
                    className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg font-semibold"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Enroll Now
                  </motion.button>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default MainsCourses;
