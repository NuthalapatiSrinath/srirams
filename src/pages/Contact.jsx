import { motion, AnimatePresence } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  Sparkles,
  Loader2,
} from "lucide-react";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { contactAPI } from "../api/contactAPI";
import toast from "react-hot-toast";

const Contact = () => {
  const { user, isAuthenticated } = useSelector((state) => state.auth);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    center: "",
    subject: "",
    message: "",
  });

  const [focusedField, setFocusedField] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Auto-fill form if user is logged in
  useEffect(() => {
    if (isAuthenticated && user) {
      setFormData((prev) => ({
        ...prev,
        name: user.name || "",
        email: user.email || "",
        phone: user.phone || "",
        center: user.centerName || "",
      }));
    }
  }, [isAuthenticated, user]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Map frontend fields to backend expected fields
      const contactData = {
        fullName: formData.name,
        email: formData.email,
        phoneNumber: formData.phone,
        selectedCenter: formData.center,
        message: formData.message,
      };

      await contactAPI.submitContact(contactData);
      toast.success("Message sent successfully! We'll get back to you soon.");
      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        center: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          "Failed to send message. Please try again.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const centers = [
    {
      city: "Delhi (Head Office)",
      address: "15A/40, WEA, Karol Bagh, New Delhi - 110005",
      phone: "8686818384, 9963917712",
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
              className="bg-white rounded-2xl shadow-xl p-8 relative overflow-hidden border border-gray-100"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              {/* Subtle Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-teal-50/30 via-cyan-50/20 to-blue-50/30 pointer-events-none" />

              {/* Floating Sparkles */}
              <motion.div
                className="absolute top-8 right-8"
                animate={{
                  y: [0, -15, 0],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Sparkles className="w-5 h-5 text-teal-300 opacity-50" />
              </motion.div>

              <div className="relative z-10">
                <h2 className="text-3xl font-bold text-gray-800 mb-1">
                  Send us a Message
                </h2>
                <div className="flex items-center gap-2 mb-8">
                  <span className="w-12 h-1 bg-gradient-to-r from-teal-500 to-cyan-500 rounded"></span>
                  <p className="text-sm text-gray-600">
                    We'll get back to you within 24 hours
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Full Name Input */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                  >
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      onFocus={() => setFocusedField("name")}
                      onBlur={() => setFocusedField(null)}
                      className="w-full px-4 py-3.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all duration-200 bg-white text-gray-800 placeholder:text-gray-400 hover:border-gray-400"
                      placeholder="Enter your name"
                      required
                    />
                  </motion.div>

                  {/* Email Input */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      onFocus={() => setFocusedField("email")}
                      onBlur={() => setFocusedField(null)}
                      className="w-full px-4 py-3.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all duration-200 bg-white text-gray-800 placeholder:text-gray-400 hover:border-gray-400"
                      placeholder="Enter your email"
                      required
                    />
                  </motion.div>

                  {/* Phone Input */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      onFocus={() => setFocusedField("phone")}
                      onBlur={() => setFocusedField(null)}
                      className="w-full px-4 py-3.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all duration-200 bg-white text-gray-800 placeholder:text-gray-400 hover:border-gray-400"
                      placeholder="Enter your phone number"
                      required
                    />
                  </motion.div>

                  {/* Select Center Dropdown */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Select Center
                    </label>
                    <div className="relative group">
                      <MapPin className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                      <select
                        name="center"
                        value={formData.center}
                        onChange={handleChange}
                        onFocus={() => setFocusedField("center")}
                        onBlur={() => setFocusedField(null)}
                        className="w-full pl-10 pr-10 py-3.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all duration-200 bg-white text-gray-800 cursor-pointer appearance-none hover:border-gray-400"
                        required
                        style={{
                          backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`,
                          backgroundPosition: "right 0.75rem center",
                          backgroundRepeat: "no-repeat",
                          backgroundSize: "1.5em 1.5em",
                        }}
                      >
                        <option value="" disabled>
                          Choose your preferred center
                        </option>
                        <option value="All Centers">All Centers</option>
                        <option value="Delhi Center">Delhi Center</option>
                        <option value="Mumbai Center">Mumbai Center</option>
                        <option value="Bangalore Center">
                          Bangalore Center
                        </option>
                        <option value="Hyderabad Center">
                          Hyderabad Center
                        </option>
                      </select>
                    </div>
                  </motion.div>

                  {/* Subject Input */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      onFocus={() => setFocusedField("subject")}
                      onBlur={() => setFocusedField(null)}
                      className="w-full px-4 py-3.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all duration-200 bg-white text-gray-800 placeholder:text-gray-400 hover:border-gray-400"
                      placeholder="What's this about?"
                    />
                  </motion.div>

                  {/* Message Textarea */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                  >
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      onFocus={() => setFocusedField("message")}
                      onBlur={() => setFocusedField(null)}
                      rows="4"
                      className="w-full px-4 py-3.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all duration-200 bg-white resize-none text-gray-800 placeholder:text-gray-400 hover:border-gray-400"
                      placeholder="Tell us more..."
                    />
                  </motion.div>

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-teal-600 to-cyan-600 text-white py-3.5 rounded-lg font-bold shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 }}
                    whileHover={{ scale: isSubmitting ? 1 : 1.01 }}
                    whileTap={{ scale: isSubmitting ? 1 : 0.99 }}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Send Message
                      </>
                    )}
                  </motion.button>

                  {/* Trust Badges */}
                  <motion.div
                    className="flex items-center justify-center gap-6 pt-4 border-t border-gray-200"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                  >
                    <div className="flex items-center gap-2 text-xs text-gray-600">
                      <div className="w-7 h-7 bg-green-100 rounded-full flex items-center justify-center">
                        <span className="text-green-600 text-sm font-bold">
                          ✓
                        </span>
                      </div>
                      <span className="font-medium">Secure & Private</span>
                    </div>
                    <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
                    <div className="flex items-center gap-2 text-xs text-gray-600">
                      <div className="w-7 h-7 bg-blue-100 rounded-full flex items-center justify-center">
                        <span className="text-blue-600 text-sm font-bold">
                          ⚡
                        </span>
                      </div>
                      <span className="font-medium">Quick Response</span>
                    </div>
                  </motion.div>
                </form>
              </div>
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
                      <p className="text-gray-600">8686818384</p>
                      <p className="text-gray-600">9963917712</p>
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
