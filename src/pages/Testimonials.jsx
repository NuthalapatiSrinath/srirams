import { motion } from "framer-motion";
import { Quote, Star, Award } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Priya Sharma",
      rank: "AIR 12, CSE 2025",
      image: null,
      text: "Sriram's IAS transformed my preparation journey. The personalized mentorship and comprehensive study materials were instrumental in my success. The faculty's dedication and the test series helped me identify my weak areas and improve continuously.",
      rating: 5,
    },
    {
      name: "Rajesh Kumar",
      rank: "AIR 28, CSE 2025",
      image: null,
      text: "The Stride Mentorship Program was a game-changer for me. Regular feedback, answer writing practice, and current affairs coverage were exceptional. I'm grateful to the entire team for their unwavering support.",
      rating: 5,
    },
    {
      name: "Ananya Singh",
      rank: "AIR 45, CSE 2025",
      image: null,
      text: "After two unsuccessful attempts, I joined Sriram's IAS and it completely changed my approach. The faculty's expertise in simplifying complex topics and the mock interview sessions gave me the confidence I needed.",
      rating: 5,
    },
    {
      name: "Vikram Malhotra",
      rank: "AIR 67, CSE 2024",
      image: null,
      text: "The foundation course provided a solid base for my preparation. The structured approach, regular tests, and detailed feedback helped me stay on track. The study material was comprehensive and easy to understand.",
      rating: 5,
    },
    {
      name: "Meera Desai",
      rank: "AIR 89, CSE 2024",
      image: null,
      text: "Being a working professional, I needed flexible learning options. Sriram's IAS provided exactly that with recorded lectures, weekend batches, and online doubt clearing. The personalized attention made all the difference.",
      rating: 5,
    },
    {
      name: "Arjun Reddy",
      rank: "AIR 103, CSE 2024",
      image: null,
      text: "The optional subject guidance was outstanding. My faculty mentor helped me choose the right optional and provided detailed coverage of the syllabus. The answer writing practice for optional was particularly helpful.",
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <motion.section
        className="bg-gradient-to-r from-teal-600 to-cyan-700 text-white py-20"
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
            <Quote className="w-12 h-12" />
            <h1 className="text-5xl font-bold">Student Testimonials</h1>
          </motion.div>
          <motion.p
            className="text-xl text-teal-100 text-center max-w-3xl mx-auto"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Real stories from real achievers - hear from students who made it to
            the civil services
          </motion.p>
        </div>
      </motion.section>

      {/* Testimonials Grid */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow relative"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                {/* Quote Icon */}
                <div className="absolute top-6 right-6 text-teal-200">
                  <Quote className="w-12 h-12" />
                </div>

                {/* Profile Section */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-full flex items-center justify-center">
                    <Award className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">
                      {testimonial.name}
                    </h3>
                    <p className="text-teal-600 font-semibold text-sm">
                      {testimonial.rank}
                    </p>
                  </div>
                </div>

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-yellow-400"
                    />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-gray-600 leading-relaxed italic">
                  "{testimonial.text}"
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Testimonials Placeholder */}
      <section className="py-16 bg-gradient-to-br from-teal-50 to-cyan-50">
        <div className="container mx-auto px-6">
          <motion.h2
            className="text-3xl font-bold text-center mb-12 text-gray-800"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Video Testimonials
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="aspect-video bg-gradient-to-br from-teal-400 to-cyan-500 flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-3">
                      <svg
                        className="w-10 h-10"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                      </svg>
                    </div>
                    <p className="font-semibold">Watch Success Story</p>
                  </div>
                </div>
                <div className="p-4">
                  <p className="font-semibold text-gray-800">
                    Success Story #{item}
                  </p>
                  <p className="text-sm text-gray-600">
                    From aspirant to achiever
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-teal-600 to-cyan-700">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Write Your Success Story?
          </h2>
          <p className="text-teal-100 mb-8 max-w-2xl mx-auto">
            Join the ranks of successful civil servants who trusted Sriram's IAS
            for their UPSC preparation
          </p>
          <motion.button
            className="bg-white text-teal-600 hover:bg-gray-100 px-8 py-3 rounded-full font-bold text-lg shadow-xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Begin Your Journey
          </motion.button>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
