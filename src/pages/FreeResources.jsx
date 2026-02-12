import { motion } from "framer-motion";
import { Download, FileText, Video, BookOpen } from "lucide-react";

const FreeResources = () => {
  const resources = [
    {
      title: "Study Materials",
      description: "Download free study materials for all UPSC subjects",
      icon: BookOpen,
      items: [
        "Polity Notes",
        "History Handouts",
        "Geography Maps",
        "Economy Concepts",
      ],
      color: "from-blue-600 to-indigo-600",
    },
    {
      title: "Previous Year Papers",
      description: "Access question papers from last 10 years with solutions",
      icon: FileText,
      items: [
        "Prelims 2015-2025",
        "Mains 2015-2025",
        "Interview Transcripts",
        "Topic-wise Papers",
      ],
      color: "from-green-600 to-teal-600",
    },
    {
      title: "Video Lectures",
      description: "Watch free video lectures by expert faculty",
      icon: Video,
      items: [
        "Concept Videos",
        "Strategy Sessions",
        "Current Affairs",
        "Answer Writing",
      ],
      color: "from-purple-600 to-pink-600",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <motion.section
        className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white py-20"
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
            <Download className="w-12 h-12" />
            <h1 className="text-5xl font-bold">Free Resources</h1>
          </motion.div>
          <motion.p
            className="text-xl text-purple-100 text-center max-w-3xl mx-auto"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Access high-quality study materials, papers, and video lectures
            absolutely free
          </motion.p>
        </div>
      </motion.section>

      {/* Resources Grid */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {resources.map((resource, index) => {
              const Icon = resource.icon;
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
                    className={`bg-gradient-to-r ${resource.color} text-white p-6`}
                  >
                    <Icon className="w-12 h-12 mb-3" />
                    <h3 className="text-2xl font-bold mb-2">
                      {resource.title}
                    </h3>
                    <p className="text-sm opacity-90">{resource.description}</p>
                  </div>

                  <div className="p-6">
                    <ul className="space-y-3 mb-6">
                      {resource.items.map((item, idx) => (
                        <li
                          key={idx}
                          className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer"
                        >
                          <span className="text-gray-700">{item}</span>
                          <Download className="w-4 h-4 text-gray-400" />
                        </li>
                      ))}
                    </ul>

                    <motion.button
                      className={`w-full bg-gradient-to-r ${resource.color} text-white py-3 rounded-lg font-semibold shadow-md`}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Browse All
                    </motion.button>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-indigo-600 to-purple-700">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Want More Premium Content?
          </h2>
          <p className="text-indigo-100 mb-8 max-w-2xl mx-auto">
            Unlock exclusive study materials, detailed notes, and personalized
            guidance with our premium courses
          </p>
          <motion.button
            className="bg-white text-indigo-600 hover:bg-gray-100 px-8 py-3 rounded-full font-bold text-lg shadow-xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore Premium Courses
          </motion.button>
        </div>
      </section>
    </div>
  );
};

export default FreeResources;
