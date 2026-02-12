import { motion } from "framer-motion";
import { Video, FileText, MessageSquare, Trophy } from "lucide-react";

const LearningMethodologySection = () => {
  const methods = [
    {
      icon: Video,
      title: "Live Classes",
      desc: "Interactive online sessions with doubt clearing",
    },
    {
      icon: FileText,
      title: "Study Material",
      desc: "Comprehensive notes and practice questions",
    },
    {
      icon: MessageSquare,
      title: "Mentorship",
      desc: "One-on-one guidance from toppers",
    },
    {
      icon: Trophy,
      title: "Evaluation",
      desc: "Regular assessments and feedback",
    },
  ];

  return (
    <section className="bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 py-8 mb-6">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Our <span className="text-indigo-600">Learning Methodology</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A proven 360-degree approach to UPSC preparation
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {methods.map((method, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15, type: "spring" }}
              whileHover={{ scale: 1.08, rotate: [0, -2, 2, 0] }}
              className="bg-white rounded-2xl p-8 shadow-xl text-center relative overflow-hidden group"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-purple-500 opacity-0 group-hover:opacity-10 transition-opacity"
                initial={false}
              />
              <method.icon className="w-16 h-16 mx-auto mb-4 text-indigo-600" />
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                {method.title}
              </h3>
              <p className="text-gray-600">{method.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LearningMethodologySection;
