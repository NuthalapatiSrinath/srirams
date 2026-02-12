import { motion } from "framer-motion";

const SuccessRateSection = () => {
  const stats = [
    { value: "78%", label: "Students Clear Prelims" },
    { value: "65%", label: "Students Clear Mains" },
    { value: "45%", label: "Final Selection Rate" },
    { value: "12", label: "Top 100 Ranks (2025)" },
  ];

  return (
    <section className="bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 py-8 mb-6">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-center text-white"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            📊 Our Success Rate Speaks for Itself
          </h2>
          <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15 }}
                whileHover={{ scale: 1.1, rotate: [0, 5, -5, 0] }}
                className="bg-white/20 backdrop-blur-lg rounded-2xl p-6"
              >
                <h3 className="text-5xl font-bold mb-2">{stat.value}</h3>
                <p className="text-lg">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SuccessRateSection;
