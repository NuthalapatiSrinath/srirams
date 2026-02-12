import { motion } from "framer-motion";
import { Star } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Priya Sharma",
      rank: "AIR 47, CSE 2024",
      image: "https://randomuser.me/api/portraits/women/32.jpg",
      text: "Sriram's IAS provided me with the perfect foundation and guidance. The faculty and study material were exceptional.",
    },
    {
      name: "Rajesh Kumar",
      rank: "AIR 125, CSE 2024",
      image: "https://randomuser.me/api/portraits/men/54.jpg",
      text: "The mentorship program helped me stay focused and motivated throughout my preparation journey.",
    },
    {
      name: "Anjali Verma",
      rank: "AIR 203, CSE 2024",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      text: "Best coaching institute for UPSC preparation. The test series and answer writing practice were game changers.",
    },
  ];

  return (
    <section className="bg-gradient-to-r from-blue-600 to-indigo-700 py-8 mb-6">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Success Stories
          </h2>
          <p className="text-xl text-white/90">
            Hear from our successful students who cracked UPSC CSE
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-xl p-6 shadow-xl"
            >
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic">"{testimonial.text}"</p>
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-bold text-gray-800">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-blue-600 font-semibold">
                    {testimonial.rank}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
