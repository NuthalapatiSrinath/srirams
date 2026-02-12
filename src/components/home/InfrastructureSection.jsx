import { motion } from "framer-motion";

const InfrastructureSection = () => {
  const facilities = [
    {
      icon: "🏢",
      title: "Modern Classrooms",
      desc: "Air-conditioned rooms with latest technology",
    },
    {
      icon: "📚",
      title: "Digital Library",
      desc: "Access to 10,000+ books and journals",
    },
    {
      icon: "💻",
      title: "Computer Lab",
      desc: "High-speed internet and latest software",
    },
    { icon: "☕", title: "Cafeteria", desc: "Healthy meals and refreshments" },
    {
      icon: "🎯",
      title: "Discussion Rooms",
      desc: "Group study and peer learning spaces",
    },
    {
      icon: "🏋️",
      title: "Recreation Area",
      desc: "Destress and maintain work-life balance",
    },
  ];

  return (
    <section className="bg-gradient-to-br from-gray-100 to-gray-200 py-8 mb-6">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            World-Class <span className="text-blue-600">Infrastructure</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            State-of-the-art facilities for optimal learning
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {facilities.map((facility, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, type: "spring", stiffness: 100 }}
              whileHover={{ scale: 1.05, rotate: [0, 1, -1, 0] }}
              className="bg-white rounded-2xl p-8 shadow-lg text-center"
            >
              <div className="text-6xl mb-4">{facility.icon}</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                {facility.title}
              </h3>
              <p className="text-gray-600">{facility.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InfrastructureSection;
