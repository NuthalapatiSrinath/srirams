import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const AlumniNetworkSection = () => {
  const navigate = useNavigate();

  const alumniStats = [
    { count: "500+", label: "IAS Officers" },
    { count: "300+", label: "IPS Officers" },
    { count: "200+", label: "IFS Officers" },
  ];

  return (
    <section className="container mx-auto px-6 mb-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        onClick={() => navigate("/about/results")}
        className="bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 rounded-3xl p-12 text-white text-center shadow-2xl cursor-pointer"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          🌟 Join Our Alumni Network
        </h2>
        <p className="text-xl mb-8 max-w-3xl mx-auto">
          Connect with 2500+ successful IAS/IPS/IFS officers who started their
          journey at Sriram's IAS
        </p>
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {alumniStats.map((alumni, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
              whileHover={{ scale: 1.1 }}
              className="bg-white/20 backdrop-blur-lg rounded-xl p-6"
            >
              <h3 className="text-4xl font-bold mb-2">{alumni.count}</h3>
              <p className="text-lg">{alumni.label}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default AlumniNetworkSection;
