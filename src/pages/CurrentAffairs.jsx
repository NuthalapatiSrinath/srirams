import { motion } from "framer-motion";
import { Newspaper, Calendar, BookOpen, Download } from "lucide-react";

const CurrentAffairs = () => {
  const offerings = [
    {
      title: "Daily Current Affairs",
      description:
        "Get comprehensive daily updates on national and international events",
      icon: Newspaper,
      features: [
        "Curated news analysis",
        "UPSC relevance highlighted",
        "PDF downloads",
        "Mobile app access",
      ],
      color: "from-red-500 to-orange-500",
    },
    {
      title: "Weekly Magazine",
      description:
        "In-depth weekly compilation with analysis and practice questions",
      icon: Calendar,
      features: [
        "7-day comprehensive coverage",
        "Mind maps & infographics",
        "Practice MCQs",
        "Answer writing topics",
      ],
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Monthly Compilation",
      description:
        "Complete monthly magazine with editorials and topic-wise coverage",
      icon: BookOpen,
      features: [
        "Topic-wise categorization",
        "Editorial analysis",
        "Prelims & Mains focused",
        "Previous year integration",
      ],
      color: "from-purple-500 to-pink-500",
    },
  ];

  const recentUpdates = [
    {
      date: "Feb 12, 2026",
      title: "Union Budget 2026 Analysis",
      category: "Economy",
    },
    {
      date: "Feb 11, 2026",
      title: "New Environmental Protection Act",
      category: "Environment",
    },
    {
      date: "Feb 10, 2026",
      title: "India-US Defence Partnership",
      category: "International Relations",
    },
    {
      date: "Feb 09, 2026",
      title: "Digital India Mission Updates",
      category: "Governance",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <motion.section
        className="bg-gradient-to-r from-red-600 via-orange-600 to-yellow-600 text-white py-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <div className="container mx-auto px-6">
          <motion.div
            className="flex items-center justify-center gap-3 mb-6"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <Newspaper className="w-12 h-12" />
            <h1 className="text-5xl font-bold">Current Affairs</h1>
          </motion.div>
          <motion.p
            className="text-xl text-orange-100 text-center max-w-3xl mx-auto"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Stay updated with comprehensive current affairs coverage tailored
            for UPSC preparation
          </motion.p>
        </div>
      </motion.section>

      {/* Offerings Grid */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {offerings.map((offering, index) => {
              const Icon = offering.icon;
              return (
                <motion.div
                  key={index}
                  className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <div
                    className={`bg-gradient-to-r ${offering.color} text-white p-6`}
                  >
                    <Icon className="w-12 h-12 mb-3" />
                    <h3 className="text-2xl font-bold mb-2">
                      {offering.title}
                    </h3>
                    <p className="text-sm opacity-90">{offering.description}</p>
                  </div>

                  <div className="p-6">
                    <ul className="space-y-3 mb-6">
                      {offering.features.map((feature, idx) => (
                        <li
                          key={idx}
                          className="flex items-center gap-2 text-gray-700"
                        >
                          <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <motion.button
                      className={`w-full bg-gradient-to-r ${offering.color} text-white py-3 rounded-lg font-semibold shadow-md`}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Subscribe Now
                    </motion.button>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Recent Updates */}
      <section className="py-16 bg-gradient-to-br from-orange-50 to-yellow-50">
        <div className="container mx-auto px-6">
          <motion.h2
            className="text-3xl font-bold text-center mb-12 text-gray-800"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Recent Updates
          </motion.h2>
          <div className="max-w-4xl mx-auto space-y-4">
            {recentUpdates.map((update, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ x: 5 }}
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-sm text-gray-500">
                        {update.date}
                      </span>
                      <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-xs font-semibold">
                        {update.category}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-gray-800">
                      {update.title}
                    </h3>
                  </div>
                  <Download className="w-5 h-5 text-gray-400 hover:text-orange-600 cursor-pointer" />
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-8">
            <motion.button
              className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-lg font-semibold"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              View All Updates
            </motion.button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <motion.h2
            className="text-3xl font-bold text-center mb-12 text-gray-800"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            What Makes Our Current Affairs Special?
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "UPSC Focused",
                description:
                  "Every update filtered through UPSC relevance lens",
              },
              {
                title: "Expert Analysis",
                description: "Detailed analysis by subject matter experts",
              },
              {
                title: "Multi-format",
                description: "Available in PDF, app, and video formats",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-orange-50 to-yellow-50 p-6 rounded-xl shadow-lg text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <h3 className="text-xl font-bold mb-3 text-orange-600">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-orange-600 to-red-600">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Never Miss an Important Update
          </h2>
          <p className="text-orange-100 mb-8 max-w-2xl mx-auto">
            Subscribe to our complete current affairs package and stay ahead in
            your UPSC preparation
          </p>
          <motion.button
            className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-3 rounded-full font-bold text-lg shadow-xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Subscribe Now - ₹2,999/year
          </motion.button>
        </div>
      </section>
    </div>
  );
};

export default CurrentAffairs;
