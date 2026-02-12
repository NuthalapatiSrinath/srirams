import { motion } from "framer-motion";
import { Award, Users, BookOpen, TrendingUp } from "lucide-react";

const StatsSection = () => {
  const stats = [
    {
      icon: Award,
      value: "2500+",
      label: "Selections",
      color: "text-blue-600",
    },
    {
      icon: Users,
      value: "50,000+",
      label: "Students Trained",
      color: "text-green-600",
    },
    {
      icon: BookOpen,
      value: "100+",
      label: "Expert Faculty",
      color: "text-purple-600",
    },
    {
      icon: TrendingUp,
      value: "45+",
      label: "Years of Excellence",
      color: "text-orange-600",
    },
  ];

  return (
    <section className="bg-gradient-to-r from-blue-50 to-indigo-50 py-6 mb-6">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="text-center bg-white rounded-xl p-6 shadow-lg"
            >
              <stat.icon className={`w-12 h-12 ${stat.color} mx-auto mb-3`} />
              <h3 className="text-4xl font-bold text-gray-800 mb-2">
                {stat.value}
              </h3>
              <p className="text-gray-600 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default StatsSection;
