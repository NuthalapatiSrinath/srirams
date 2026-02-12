import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Contact = () => {
  const centers = [
    {
      city: "Delhi (Head Office)",
      address: "15A/40, WEA, Karol Bagh, New Delhi - 110005",
      phone: "9811489560, 011-42437002",
      email: "delhi@sriramsias.com",
    },
    {
      city: "Mumbai",
      address: "3rd Floor, Times Square, Andheri West, Mumbai - 400058",
      phone: "9876543210",
      email: "mumbai@sriramsias.com",
    },
    {
      city: "Bangalore",
      address: "45, Residency Road, Bangalore - 560025",
      phone: "9876543211",
      email: "bangalore@sriramsias.com",
    },
    {
      city: "Hyderabad",
      address: "Plot No. 78, Himayat Nagar, Hyderabad - 500029",
      phone: "9876543212",
      email: "hyderabad@sriramsias.com",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <motion.section
        className="bg-gradient-to-r from-teal-600 to-cyan-700 text-white py-20"
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
            Contact Us
          </motion.h1>
          <motion.p
            className="text-xl text-teal-100 text-center max-w-3xl mx-auto"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            We're here to help you start your UPSC journey. Reach out to us for
            any queries or guidance
          </motion.p>
        </div>
      </motion.section>

      {/* Contact Form and Info */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              className="bg-white rounded-2xl shadow-xl p-8"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Send us a Message
              </h2>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    placeholder="Enter your email"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    placeholder="Enter your phone number"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    placeholder="What's this about?"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    rows="4"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    placeholder="Tell us more..."
                  ></textarea>
                </div>
                <motion.button
                  type="submit"
                  className="w-full bg-gradient-to-r from-teal-600 to-cyan-700 text-white py-3 rounded-lg font-semibold shadow-md"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Send Message
                </motion.button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-6"
            >
              <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-2xl shadow-lg p-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">
                  Get in Touch
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-teal-100 rounded-lg">
                      <Phone className="w-6 h-6 text-teal-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-1">
                        Phone
                      </h3>
                      <p className="text-gray-600">9811489560</p>
                      <p className="text-gray-600">011-42437002</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-teal-100 rounded-lg">
                      <Mail className="w-6 h-6 text-teal-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-1">
                        Email
                      </h3>
                      <p className="text-gray-600">enquiry@sriramsias.com</p>
                      <p className="text-gray-600">support@sriramsias.com</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-teal-100 rounded-lg">
                      <Clock className="w-6 h-6 text-teal-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-1">
                        Office Hours
                      </h3>
                      <p className="text-gray-600">
                        Mon - Sat: 9:00 AM - 7:00 PM
                      </p>
                      <p className="text-gray-600">
                        Sunday: 10:00 AM - 4:00 PM
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <motion.div
                className="bg-gradient-to-r from-teal-600 to-cyan-700 text-white rounded-2xl shadow-lg p-8"
                whileHover={{ scale: 1.02 }}
              >
                <h3 className="text-xl font-bold mb-3">Book a Free Session</h3>
                <p className="text-teal-100 mb-4">
                  Schedule a one-on-one counseling session with our experts
                </p>
                <button className="bg-white text-teal-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Book Now
                </button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Centers Section */}
      <section className="py-16 bg-gradient-to-br from-teal-50 to-cyan-50">
        <div className="container mx-auto px-6">
          <motion.h2
            className="text-3xl font-bold text-center mb-12 text-gray-800"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Our Centers
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-6">
            {centers.map((center, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex items-start gap-3 mb-4">
                  <MapPin className="w-6 h-6 text-teal-600 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                      {center.city}
                    </h3>
                    <p className="text-gray-600 text-sm">{center.address}</p>
                  </div>
                </div>
                <div className="space-y-2 pt-4 border-t">
                  <p className="text-sm text-gray-600">
                    <span className="font-semibold">Phone:</span> {center.phone}
                  </p>
                  <p className="text-sm text-gray-600">
                    <span className="font-semibold">Email:</span> {center.email}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
