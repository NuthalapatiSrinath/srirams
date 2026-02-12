import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const AchievementsSection = () => {
  const navigate = useNavigate();

  const achievers = [
    { rank: "AIR 3", name: "Amit Sharma", optional: "Geography" },
    { rank: "AIR 7", name: "Neha Kapoor", optional: "Public Admin" },
    { rank: "AIR 15", name: "Rahul Verma", optional: "History" },
    { rank: "AIR 22", name: "Priya Nair", optional: "Sociology" },
    { rank: "AIR 35", name: "Karan Singh", optional: "PSIR" },
    { rank: "AIR 48", name: "Divya Rastogi", optional: "Anthropology" },
    { rank: "AIR 56", name: "Anil Kumar", optional: "Economics" },
    { rank: "AIR 67", name: "Sneha Reddy", optional: "Psychology" },
  ];

  return (
    <section className="bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 py-8 mb-6">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            🏆 Latest Achievements (2025)
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Our students continue to set new benchmarks
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievers.map((achiever, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08, type: "spring" }}
              whileHover={{ scale: 1.08, rotate: [0, -3, 3, 0] }}
              onClick={() => navigate("/about/results")}
              className="bg-white rounded-2xl p-6 shadow-xl text-center cursor-pointer"
            >
              <div className="text-4xl mb-3">🎖️</div>
              <h3 className="text-2xl font-bold text-orange-600 mb-2">
                {achiever.rank}
              </h3>
              <p className="font-bold text-gray-800 mb-1">{achiever.name}</p>
              <p className="text-sm text-gray-600">{achiever.optional}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
