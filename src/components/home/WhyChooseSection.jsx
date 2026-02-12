import { motion } from "framer-motion";

const WhyChooseSection = () => {
  const features = [
    {
      title: "Expert Faculty",
      description:
        "Learn from IAS officers and subject matter experts with years of teaching experience",
      icon: "👨‍🏫",
    },
    {
      title: "Comprehensive Material",
      description:
        "Well-researched and updated study material covering all aspects of UPSC syllabus",
      icon: "📚",
    },
    {
      title: "Personalized Guidance",
      description:
        "Individual attention and mentorship to help you achieve your IAS dream",
      icon: "🎯",
    },
    {
      title: "Test Series",
      description:
        "Regular mock tests and evaluations to track your progress and improve",
      icon: "📝",
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
          Why Choose <span className="text-blue-600">Sriram's IAS</span>?
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          45 years of excellence in UPSC coaching with proven track record of
          success
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            whileHover={{ y: -10 }}
            className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all"
          >
            <div className="text-5xl mb-4">{feature.icon}</div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">
              {feature.title}
            </h3>
            <p className="text-gray-600">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseSection;
