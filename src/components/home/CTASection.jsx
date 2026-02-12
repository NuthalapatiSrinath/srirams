import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const CTASection = () => {
  const navigate = useNavigate();

  return (
    <section className="container mx-auto px-6 mb-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="bg-gradient-to-r from-orange-500 to-red-600 rounded-2xl p-12 text-center text-white shadow-2xl"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Start Your UPSC Journey Today
        </h2>
        <p className="text-xl mb-8 text-white/90">
          Join thousands of successful aspirants who trusted Sriram's IAS
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate("/contact")}
            className="bg-white text-orange-600 px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all"
          >
            Book Free Counselling
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-orange-600 transition-all"
          >
            Download Brochure
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
};

export default CTASection;
