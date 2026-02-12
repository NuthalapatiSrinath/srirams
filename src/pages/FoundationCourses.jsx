import { motion } from "framer-motion";
import { BookOpen, Clock, Users, Award } from "lucide-react";

const FoundationCourses = () => {
  const courses = [
    {
      title: "2 Year General Studies Foundation Course",
      duration: "24 Months",
      students: "2500+",
      rating: "4.9/5",
      description:
        "Comprehensive foundation course covering all aspects of UPSC CSE preparation with dedicated mentorship and guidance.",
      features: [
        "Complete GS Coverage",
        "Daily Live Classes",
        "Personal Mentorship",
        "Study Material",
        "Test Series Included",
      ],
      slug: "foundation-course",
    },
    {
      title: "1 Year Foundation Course",
      duration: "12 Months",
      students: "1800+",
      rating: "4.8/5",
      description:
        "Intensive one-year program designed for focused preparation with expert faculty and comprehensive study materials.",
      features: [
        "Intensive Curriculum",
        "Expert Faculty",
        "Weekly Tests",
        "Doubt Clearing Sessions",
        "Current Affairs",
      ],
      slug: "one-year-foundation",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <motion.section
        className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20"
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
            Foundation Courses
          </motion.h1>
          <motion.p
            className="text-xl text-blue-100"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Build a strong foundation for your UPSC journey
          </motion.p>
        </div>
      </motion.section>

      {/* Courses Grid */}
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
                <div className="flex items-start justify-between mb-4">
                  <h2 className="text-2xl font-bold text-gray-800">
                    {course.title}
                  </h2>
                  <div className="flex items-center gap-1 bg-yellow-100 px-3 py-1 rounded-full">
                    <Award className="w-4 h-4 text-yellow-600" />
                    <span className="text-sm font-semibold text-yellow-700">
                      {course.rating}
                    </span>
                  </div>
                </div>

                <p className="text-gray-600 mb-6">{course.description}</p>

                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="flex items-center gap-2">
                    <Clock className="w-5 h-5 text-blue-600" />
                    <div>
                      <p className="text-xs text-gray-500">Duration</p>
                      <p className="font-semibold text-gray-800">
                        {course.duration}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-5 h-5 text-green-600" />
                    <div>
                      <p className="text-xs text-gray-500">Students</p>
                      <p className="font-semibold text-gray-800">
                        {course.students}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-purple-600" />
                    <div>
                      <p className="text-xs text-gray-500">Type</p>
                      <p className="font-semibold text-gray-800">Foundation</p>
                    </div>
                  </div>
                </div>

                <div className="mb-6">
                  <h3 className="font-semibold text-gray-800 mb-3">
                    Course Features:
                  </h3>
                  <ul className="space-y-2">
                    {course.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-center gap-2 text-gray-600"
                      >
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex gap-3">
                  <motion.button
                    className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-colors"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Enroll Now
                  </motion.button>
                  <motion.button
                    className="px-6 border-2 border-blue-600 text-blue-600 hover:bg-blue-50 py-3 rounded-lg font-semibold transition-colors"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Learn More
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="container mx-auto px-6">
          <motion.h2
            className="text-3xl font-bold text-center mb-12 text-gray-800"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Why Choose Our Foundation Courses?
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Expert Faculty",
                description:
                  "Learn from experienced educators with proven track records",
              },
              {
                title: "Comprehensive Coverage",
                description:
                  "Complete syllabus coverage with depth and clarity",
              },
              {
                title: "Personal Mentorship",
                description:
                  "One-on-one guidance to address your specific needs",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <h3 className="text-xl font-bold mb-3 text-gray-800">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default FoundationCourses;
