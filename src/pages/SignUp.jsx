import { motion } from "framer-motion";
import { UserPlus, Mail, Phone, MapPin } from "lucide-react";

const SignUp = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <motion.section
        className="bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 text-white py-20"
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
            <UserPlus className="w-12 h-12" />
            <h1 className="text-5xl font-bold">Sign Up</h1>
          </motion.div>
          <motion.p
            className="text-xl text-purple-100 max-w-3xl mx-auto"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Join thousands of successful UPSC aspirants at Sriram's IAS
          </motion.p>
        </div>
      </motion.section>

      {/* Registration Form */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto">
            <motion.div
              className="bg-white rounded-2xl shadow-2xl p-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
                Create Your Account
              </h2>
              <form className="space-y-6">
                {/* Personal Information */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">
                    Personal Information
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        First Name *
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        placeholder="Enter first name"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        placeholder="Enter last name"
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Contact Information */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">
                    Contact Information
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        placeholder="Enter email address"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        placeholder="Enter phone number"
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* UPSC Details */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">
                    UPSC Preparation Details
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Current Stage
                      </label>
                      <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent">
                        <option>Select your current stage</option>
                        <option>Beginner - Just Starting</option>
                        <option>Preparing for Prelims</option>
                        <option>Preparing for Mains</option>
                        <option>Preparing for Interview</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Interested Course
                      </label>
                      <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent">
                        <option>Select course of interest</option>
                        <option>Foundation Course</option>
                        <option>Prelims Course</option>
                        <option>Mains Course</option>
                        <option>Optional Course</option>
                        <option>Test Series</option>
                        <option>Mentorship Program</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Password */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">
                    Account Security
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Password *
                      </label>
                      <input
                        type="password"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        placeholder="Create password"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Confirm Password *
                      </label>
                      <input
                        type="password"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        placeholder="Confirm password"
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Terms and Conditions */}
                <div className="flex items-start gap-2">
                  <input
                    type="checkbox"
                    className="w-4 h-4 mt-1 text-purple-600 rounded"
                    required
                  />
                  <label className="text-sm text-gray-600">
                    I agree to the{" "}
                    <a
                      href="#"
                      className="text-purple-600 hover:text-purple-700 font-semibold"
                    >
                      Terms and Conditions
                    </a>{" "}
                    and{" "}
                    <a
                      href="#"
                      className="text-purple-600 hover:text-purple-700 font-semibold"
                    >
                      Privacy Policy
                    </a>
                  </label>
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-4 rounded-lg font-semibold shadow-md text-lg"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Create Account
                </motion.button>

                <div className="text-center pt-4">
                  <p className="text-gray-600">
                    Already have an account?{" "}
                    <a
                      href="#"
                      className="text-purple-600 hover:text-purple-700 font-semibold"
                    >
                      Login Here
                    </a>
                  </p>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="container mx-auto px-6">
          <motion.h2
            className="text-3xl font-bold text-center mb-12 text-gray-800"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Why Register with Us?
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Expert Guidance",
                description: "Learn from India's best UPSC educators",
              },
              {
                title: "Proven Results",
                description: "2500+ successful selections in UPSC",
              },
              {
                title: "Complete Support",
                description: "End-to-end preparation support and mentorship",
              },
            ].map((benefit, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <h3 className="text-xl font-bold mb-3 text-purple-600">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default SignUp;
