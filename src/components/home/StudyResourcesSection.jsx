import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Globe, Lightbulb, Shield } from "lucide-react";

const StudyResourcesSection = () => {
  const navigate = useNavigate();

  const resources = [
    {
      icon: Globe,
      title: "Current Affairs",
      desc: "Daily news analysis and monthly magazines",
      color: "from-blue-500 to-cyan-500",
      path: "/current-affairs",
    },
    {
      icon: Lightbulb,
      title: "Previous Year Papers",
      desc: "Last 10 years solved papers with explanations",
      color: "from-yellow-500 to-orange-500",
      path: "/free-resources",
    },
    {
      icon: Shield,
      title: "Study Notes",
      desc: "Topic-wise comprehensive notes for all subjects",
      color: "from-green-500 to-emerald-500",
      path: "/free-resources",
    },
  ];

  return (
    <section className="container mx-auto px-6 mb-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          Free <span className="text-cyan-600">Study Resources</span>
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Access quality content to kickstart your preparation
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8">
        {resources.map((resource, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.2 }}
            whileHover={{ y: -15 }}
            onClick={() => navigate(resource.path)}
            className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all cursor-pointer"
          >
            <div
              className={`bg-gradient-to-br ${resource.color} p-8 text-white text-center`}
            >
              <resource.icon className="w-16 h-16 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">{resource.title}</h3>
            </div>
            <div className="p-6">
              <p className="text-gray-600 mb-4">{resource.desc}</p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`w-full bg-gradient-to-r ${resource.color} text-white px-6 py-3 rounded-xl font-bold shadow-lg`}
              >
                Access Now
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default StudyResourcesSection;
