import { motion } from "framer-motion";
import { Book, Layers, Star } from "lucide-react";

const OptionalCourses = () => {
  const optionals = [
    {
      title: "Public Administration",
      students: "800+",
      rating: "4.9/5",
      description: "Most popular optional with high scoring potential",
    },
    {
      title: "Sociology",
      students: "650+",
      rating: "4.8/5",
      description: "Dynamic optional with contemporary relevance",
    },
    {
      title: "Geography",
      students: "500+",
      rating: "4.7/5",
      description: "Analytical optional with overlap with GS",
    },
    {
      title: "Political Science",
      students: "450+",
      rating: "4.8/5",
      description: "Traditional optional with vast literature",
    },
    {
      title: "History",
      students: "400+",
      rating: "4.7/5",
      description: "Rich optional with factual content",
    },
    {
      title: "Anthropology",
      students: "350+",
      rating: "4.8/5",
      description: "Compact optional with scientific approach",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <motion.section
        className="bg-gradient-to-r from-orange-600 to-red-600 text-white py-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <div className="container mx-auto px-6">
          <motion.h1
            className="text-5xl font-bold mb-4"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Optional Courses
          </motion.h1>
          <motion.p
            className="text-xl text-orange-100"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Choose your optional subject and excel in UPSC Mains
          </motion.p>
        </div>
      </motion.section>

      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {optionals.map((optional, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-orange-100 rounded-lg">
                    <Book className="w-6 h-6 text-orange-600" />
                  </div>
                  <div className="flex items-center gap-1 bg-yellow-100 px-2 py-1 rounded-full">
                    <Star className="w-3 h-3 text-yellow-600 fill-yellow-600" />
                    <span className="text-xs font-semibold text-yellow-700">
                      {optional.rating}
                    </span>
                  </div>
                </div>
                <h2 className="text-xl font-bold text-gray-800 mb-2">
                  {optional.title}
                </h2>
                <p className="text-sm text-gray-600 mb-4">
                  {optional.description}
                </p>
                <div className="flex items-center gap-2 mb-4 text-sm text-gray-500">
                  <Layers className="w-4 h-4" />
                  <span>{optional.students} enrolled</span>
                </div>
                <motion.button
                  className="w-full bg-orange-600 hover:bg-orange-700 text-white py-2 rounded-lg font-semibold"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  View Details
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-orange-50 to-red-50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">
            Not Sure Which Optional to Choose?
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Book a free consultation session with our experts to find the best
            optional subject based on your background and interests
          </p>
          <motion.button
            className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-full font-bold text-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Book Free Consultation
          </motion.button>
        </div>
      </section>
    </div>
  );
};

export default OptionalCourses;
