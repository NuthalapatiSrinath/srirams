import { motion } from "framer-motion";
import { FileText, CheckCircle, TrendingUp, Users } from "lucide-react";

const TestSeries = () => {
  const testSeries = [
    {
      title: "Prelims Test Series 2026",
      description:
        "Comprehensive test series covering entire Prelims syllabus with AI-powered analytics",
      tests: "20+ Full Length Tests",
      students: "15,000+",
      features: [
        "UPSC pattern questions",
        "Detailed solutions",
        "Performance analytics",
        "All India ranking",
      ],
      price: "₹5,999",
      color: "from-green-600 to-teal-600",
    },
    {
      title: "Mains Test Series 2026",
      description:
        "Answer writing practice with manual evaluation by expert faculty",
      tests: "15+ Answer Writing Tests",
      students: "8,000+",
      features: [
        "Manual evaluation",
        "Personalized feedback",
        "Model answers",
        "One-on-one guidance",
      ],
      price: "₹12,999",
      color: "from-purple-600 to-pink-600",
    },
    {
      title: "CSAT Test Series",
      description: "Focused preparation for CSAT Paper-II with concept clarity",
      tests: "10+ Mock Tests",
      students: "12,000+",
      features: [
        "Conceptual clarity",
        "Time management",
        "Shortcut techniques",
        "Practice questions",
      ],
      price: "₹3,999",
      color: "from-blue-600 to-indigo-600",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <motion.section
        className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white py-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <div className="container mx-auto px-6">
          <motion.h1
            className="text-5xl font-bold mb-6 text-center"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            UPSC Test Series
          </motion.h1>
          <motion.p
            className="text-xl text-purple-100 text-center max-w-3xl mx-auto"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Practice with India's most comprehensive test series designed by
            UPSC experts
          </motion.p>
        </div>
      </motion.section>

      {/* Test Series Cards */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {testSeries.map((series, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div
                  className={`bg-gradient-to-r ${series.color} text-white p-6`}
                >
                  <FileText className="w-12 h-12 mb-3" />
                  <h3 className="text-2xl font-bold mb-2">{series.title}</h3>
                  <p className="text-sm opacity-90">{series.description}</p>
                </div>

                <div className="p-6">
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="text-center p-3 bg-gray-50 rounded-lg">
                      <FileText className="w-5 h-5 text-gray-600 mx-auto mb-1" />
                      <p className="text-xs text-gray-600">Tests</p>
                      <p className="font-bold text-gray-800">{series.tests}</p>
                    </div>
                    <div className="text-center p-3 bg-gray-50 rounded-lg">
                      <Users className="w-5 h-5 text-gray-600 mx-auto mb-1" />
                      <p className="text-xs text-gray-600">Enrolled</p>
                      <p className="font-bold text-gray-800">
                        {series.students}
                      </p>
                    </div>
                  </div>

                  <ul className="space-y-3 mb-6">
                    {series.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="border-t pt-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-3xl font-bold text-gray-800">
                        {series.price}
                      </span>
                      <span className="text-sm text-gray-500">+ GST</span>
                    </div>
                    <motion.button
                      className={`w-full bg-gradient-to-r ${series.color} text-white py-3 rounded-lg font-semibold shadow-md`}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Enroll Now
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto px-6">
          <motion.h2
            className="text-3xl font-bold text-center mb-12 text-gray-800"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Why Choose Our Test Series?
          </motion.h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                icon: FileText,
                title: "UPSC Pattern",
                description: "Questions designed as per latest UPSC trends",
              },
              {
                icon: TrendingUp,
                title: "Performance Analytics",
                description: "Detailed analysis to track your progress",
              },
              {
                icon: CheckCircle,
                title: "Expert Evaluation",
                description: "Answers evaluated by experienced faculty",
              },
              {
                icon: Users,
                title: "All India Ranking",
                description: "Compare with thousands of aspirants",
              },
            ].map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-lg text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Icon className="w-12 h-12 text-blue-600 mx-auto mb-3" />
                  <h3 className="text-lg font-bold mb-2 text-gray-800">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-700">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Get All Test Series in One Package
          </h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Subscribe to our Complete Test Series Package and save up to 40%
          </p>
          <div className="flex items-center justify-center gap-8 mb-8">
            <div>
              <p className="text-blue-200 text-sm mb-1">Individual Price</p>
              <p className="text-3xl font-bold text-white line-through">
                ₹22,997
              </p>
            </div>
            <div className="text-4xl text-yellow-300">→</div>
            <div>
              <p className="text-yellow-200 text-sm mb-1">Package Price</p>
              <p className="text-5xl font-bold text-yellow-300">₹13,999</p>
            </div>
          </div>
          <motion.button
            className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 px-8 py-3 rounded-full font-bold text-lg shadow-xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Complete Package
          </motion.button>
        </div>
      </section>
    </div>
  );
};

export default TestSeries;
