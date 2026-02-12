import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Instagram,
  Youtube,
  Facebook,
  Linkedin,
  MessageCircle,
  Phone,
  Mail,
  MapPin,
  X,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full bg-[#0a0e27] relative z-10 mt-auto block font-sans">
      {/* Orange accent line */}
      <div className="h-1 w-full bg-gradient-to-r from-orange-500 to-orange-600" />

      {/* Still Have Questions Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative mx-auto px-5 py-12 md:px-10 lg:px-20"
      >
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 max-w-7xl mx-auto">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-3"
          >
            <Link to="/">
              <img
                src="/SriramIAS.png"
                alt="SRIRAM's IAS - of Excellence"
                className="h-16 md:h-20 w-auto object-contain drop-shadow-2xl cursor-pointer hover:drop-shadow-[0_0_15px_rgba(249,115,22,0.5)] transition-all duration-300"
              />
            </Link>
          </motion.div>

          {/* Question Section */}
          <div className="text-center md:text-left">
            <h2 className="text-white text-3xl md:text-4xl font-bold mb-4">
              Still Have Questions?
            </h2>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold flex items-center gap-2 mx-auto md:mx-0 transition-colors"
            >
              <Phone className="w-5 h-5" />
              Request a Call from Our Expert
            </motion.button>
          </div>

          {/* Social Media Icons */}
          <div className="flex gap-3">
            {[
              { Icon: Instagram, href: "#" },
              { Icon: Youtube, href: "#" },
              { Icon: X, href: "#" },
              { Icon: Facebook, href: "#" },
              { Icon: Linkedin, href: "#" },
            ].map(({ Icon, href }, index) => (
              <motion.a
                key={index}
                href={href}
                whileHover={{ scale: 1.15, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 flex items-center justify-center text-white shadow-lg transition-all"
              >
                <Icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Main Footer Content */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-5 py-12 md:px-10 lg:px-20">
          {/* About Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-12 text-center md:text-left"
          >
            <p className="text-gray-300 text-base leading-relaxed max-w-2xl">
              SRIRAM's IAS serving the nation since 1985, achieving over 3,500+
              UPSC CSE selections. Founded by SRIRAM Sir, we focus on quality
              education and provide the best UPSC coaching for the GS Foundation
              course and Optional Courses.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="mt-4 text-orange-400 hover:text-orange-300 font-semibold transition-colors"
            >
              View more
            </motion.button>
          </motion.div>

          {/* Links Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Website Links Column 1 */}
            <FooterColumn title="Website Links" delay={0.3}>
              <FooterLink>Home</FooterLink>
              <FooterLink>About Us</FooterLink>
              <FooterLink>Director's Message</FooterLink>
              <FooterLink>Why Choose Us</FooterLink>
              <FooterLink>Contact Us</FooterLink>
              <FooterLink>Our Branches</FooterLink>
              <FooterLink>Referal Policy</FooterLink>
            </FooterColumn>

            {/* Website Links Column 2 */}
            <FooterColumn title="Website Links" delay={0.4}>
              <FooterLink>UPSC Articles</FooterLink>
              <FooterLink>UPSC Blog</FooterLink>
              <FooterLink>Exploration</FooterLink>
              <FooterLink>Interview Guidance</FooterLink>
              <FooterLink>Daily Quiz</FooterLink>
              <FooterLink>FAQ's</FooterLink>
              <FooterLink>Career</FooterLink>
              <FooterLink>Student Login</FooterLink>
              <FooterLink>Enroll Now</FooterLink>
            </FooterColumn>

            {/* Course Details */}
            <FooterColumn title="Course Details" delay={0.5}>
              <FooterLink>All Courses</FooterLink>
              <FooterLink>
                PSIR Test Series and Mentorship - Target 2025
              </FooterLink>
              <FooterLink>PSIR Optional Foundation Course</FooterLink>
              <FooterLink>Geography Optional Foundation Course</FooterLink>
              <FooterLink>Mains Enrichment Program 2025</FooterLink>
              <FooterLink>Mains Test Series CSE 2025</FooterLink>
              <FooterLink>Essay Test Series 2025</FooterLink>
              <FooterLink>Mains Test Series CSE 2026</FooterLink>
            </FooterColumn>

            {/* Contact Info */}
            <FooterColumn title="Contact Info" delay={0.6}>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-orange-400 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-sm font-semibold text-white mb-1">
                      Address:
                    </p>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      SRIRAM's IAS TOWERS, 10-B, Pusa Road
                      <br />
                      Bada Bazaar Marg Old Rajinder Nagar
                      <br />
                      New Delhi - 110060
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-orange-400 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-white mb-1">
                      Contact Us:
                    </p>
                    <p className="text-gray-400 text-sm">011-42437002</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-orange-400 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-white mb-1">
                      Email Id:
                    </p>
                    <p className="text-gray-400 text-sm">
                      sriramsias@gmail.com
                    </p>
                  </div>
                </div>

                {/* App Store Buttons */}
                <div className="flex flex-col gap-3 mt-6">
                  <motion.a
                    href="#"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="block"
                  >
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                      alt="Get it on Google Play"
                      className="h-12 w-auto"
                    />
                  </motion.a>
                  <motion.a
                    href="#"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="block"
                  >
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg"
                      alt="Download on App Store"
                      className="h-12 w-auto"
                    />
                  </motion.a>
                </div>
              </div>
            </FooterColumn>
          </div>

          {/* Bottom Section */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="border-t border-white/10 pt-6"
          >
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-sm text-gray-400">
              <p>
                © 2025{" "}
                <span className="text-white font-semibold">SRIRAM's IAS</span>
              </p>
              <span className="hidden md:inline">|</span>
              <div className="flex gap-4">
                <a href="#" className="hover:text-orange-400 transition-colors">
                  Privacy Policy
                </a>
                <span>|</span>
                <a href="#" className="hover:text-orange-400 transition-colors">
                  Refund & Cancellation
                </a>
                <span>|</span>
                <a href="#" className="hover:text-orange-400 transition-colors">
                  Terms & Conditions
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* WhatsApp Floating Button */}
      <motion.a
        href="https://wa.me/9346532339"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-6 right-6 w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center text-white shadow-2xl z-50 transition-colors"
      >
        <MessageCircle className="w-7 h-7" />
      </motion.a>
    </footer>
  );
};

// Footer Column Component with animation
const FooterColumn = ({ title, children, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay }}
    className="flex flex-col"
  >
    <h4 className="text-white text-lg font-semibold mb-4 border-b-2 border-orange-500 pb-2 inline-block">
      {title}
    </h4>
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{
        visible: {
          transition: {
            staggerChildren: 0.05,
          },
        },
      }}
      className="space-y-2"
    >
      {children}
    </motion.div>
  </motion.div>
);

// Footer Link Component with hover animation
const FooterLink = ({ children, href = "#" }) => (
  <motion.a
    href={href}
    variants={{
      hidden: { opacity: 0, x: -10 },
      visible: { opacity: 1, x: 0 },
    }}
    whileHover={{ x: 5, color: "#fb923c" }}
    className="text-gray-400 text-sm hover:text-orange-400 transition-all cursor-pointer block"
  >
    {children}
  </motion.a>
);

export default Footer;
