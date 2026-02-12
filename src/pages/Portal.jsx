import { motion } from "framer-motion";
import { LogIn, BookOpen, Video, FileText, Award } from "lucide-react";

const Portal = () => {
  const features = [
    {
      icon: Video,
      title: "Live & Recorded Classes",
      description: "Access all your course videos anytime, anywhere",
    },
    {
      icon: FileText,
      title: "Study Materials",
      description: "Download comprehensive notes and materials",
    },
    {
      icon: BookOpen,
      title: "Test Series",
      description: "Take tests and track your performance",
    },
    {
      icon: Award,
      title: "Progress Tracking",
      description: "Monitor your preparation with detailed analytics",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <motion.section
        className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white py-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <div className="container mx-auto px-6 text-center">
          <motion.div
            className="flex items-center justify-center gap-3 mb-6"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <LogIn className="w-12 h-12" />
            <h1 className="text-5xl font-bold">Student Portal</h1>
          </motion.div>
          <motion.p
            className="text-xl text-blue-100 max-w-3xl mx-auto"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Access your courses, study materials, and track your progress all in
            one place
          </motion.p>
        </div>
      </motion.section>

      {/* Login Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-md mx-auto">
            <motion.div
              className="bg-white rounded-2xl shadow-2xl p-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
                Login to Your Account
              </h2>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email or Student ID
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter your email or student ID"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Password
                  </label>
                  <input
                    type="password"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue- 500 focus:border-transparent"
                    placeholder="Enter your password"
                  />
                </div>
                <div className="flex items-center justify-between text-sm">
                  <label className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      className="w-4 h-4 text-blue-600 rounded"
                    />
                    <span className="text-gray-600">Remember me</span>
                  </label>
                  <a
                    href="#"
                    className="text-blue-600 hover:text-blue-700 font-semibold"
                  >
                    Forgot Password?
                  </a>
                </div>
                <motion.button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 rounded-lg font-semibold shadow-md"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Login
                </motion.button>
              </form>

              <div className="mt-6 text-center">
                <p className="text-gray-600">
                  Don't have an account?{" "}
                  <a
                    href="#"
                    className="text-blue-600 hover:text-blue-700 font-semibold"
                  >
                    Register Now
                  </a>
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="container mx-auto px-6">
          <motion.h2
            className="text-3xl font-bold text-center mb-12 text-gray-800"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            What's Inside the Portal
          </motion.h2>
          <div className="grid md:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-lg text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
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
            New to Sriram's IAS?
          </h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Enroll in our courses to get access to the student portal and start
            your UPSC preparation journey
          </p>
          <motion.button
            className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-full font-bold text-lg shadow-xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore Courses
          </motion.button>
        </div>
      </section>
    </div>
  );
};

export default Portal;
