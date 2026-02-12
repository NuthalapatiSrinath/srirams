import { motion } from "framer-motion";
import { Award, BookOpen, GraduationCap, Star } from "lucide-react";

const Faculty = () => {
  const facultyMembers = [
    {
      name: "Dr. Rajesh Kumar",
      subject: "History & Indian Culture",
      experience: "20+ years",
      qualification: "PhD in History, JNU",
      specialization: "Ancient & Medieval History",
      rating: "4.9/5",
    },
    {
      name: "Prof. Anita Sharma",
      subject: "Geography & Environment",
      experience: "18+ years",
      qualification: "M.Sc Geography, DU",
      specialization: "Physical & Human Geography",
      rating: "4.8/5",
    },
    {
      name: "Dr. Vikram Singh",
      subject: "Polity & Governance",
      experience: "15+ years",
      qualification: "PhD Political Science",
      specialization: "Indian Constitution & Governance",
      rating: "4.9/5",
    },
    {
      name: "Prof. Meera Desai",
      subject: "Economics & Social Issues",
      experience: "17+ years",
      qualification: "M.A Economics, DSE",
      specialization: "Indian Economy & Development",
      rating: "4.8/5",
    },
    {
      name: "Dr. Amit Patel",
      subject: "Science & Technology",
      experience: "12+ years",
      qualification: "PhD Physics, IIT Delhi",
      specialization: "Emerging Technologies",
      rating: "4.7/5",
    },
    {
      name: "Prof. Sanjay Reddy",
      subject: "Ethics & Essay",
      experience: "16+ years",
      qualification: "M.A Philosophy",
      specialization: "Ethics, Integrity & Aptitude",
      rating: "4.9/5",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <motion.section
        className="bg-gradient-to-r from-indigo-600 to-purple-700 text-white py-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <div className="container mx-auto px-6">
          <motion.h1
            className="text-5xl font-bold mb-6"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Our Faculty
          </motion.h1>
          <motion.p
            className="text-xl text-indigo-100 max-w-3xl"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Learn from the best minds in UPSC preparation - experienced
            educators dedicated to your success
          </motion.p>
        </div>
      </motion.section>

      {/* Faculty Grid */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {facultyMembers.map((faculty, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center">
                    <GraduationCap className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex items-center gap-1 bg-yellow-100 px-3 py-1 rounded-full">
                    <Star className="w-4 h-4 text-yellow-600 fill-yellow-600" />
                    <span className="text-sm font-semibold text-yellow-700">
                      {faculty.rating}
                    </span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-800 mb-1">
                  {faculty.name}
                </h3>
                <p className="text-indigo-600 font-semibold mb-3">
                  {faculty.subject}
                </p>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Award className="w-4 h-4 text-indigo-600" />
                    <span>{faculty.qualification}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <BookOpen className="w-4 h-4 text-indigo-600" />
                    <span>{faculty.experience} experience</span>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-3 rounded-lg">
                  <p className="text-xs text-gray-600 font-medium">
                    Specialization:
                  </p>
                  <p className="text-sm text-gray-800 font-semibold">
                    {faculty.specialization}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Our Faculty Section */}
      <section className="py-16 bg-gradient-to-br from-indigo-50 to-purple-50">
        <div className="container mx-auto px-6">
          <motion.h2
            className="text-3xl font-bold text-center mb-12 text-gray-800"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Why Our Faculty is the Best
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: "Expert Knowledge",
                description:
                  "Deep understanding of UPSC syllabus and examination patterns",
              },
              {
                title: "Proven Track Record",
                description:
                  "Hundreds of successful students under their guidance",
              },
              {
                title: "Personalized Approach",
                description:
                  "Individual attention to each student's learning needs",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <h3 className="text-xl font-bold mb-3 text-indigo-600">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-indigo-600 to-purple-700">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Learn from the Best?
          </h2>
          <p className="text-indigo-100 mb-8 max-w-2xl mx-auto">
            Join our courses and experience world-class teaching that has helped
            thousands achieve their UPSC dreams
          </p>
          <motion.button
            className="bg-white text-indigo-600 hover:bg-gray-100 px-8 py-3 rounded-full font-bold text-lg shadow-xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View All Courses
          </motion.button>
        </div>
      </section>
    </div>
  );
};

export default Faculty;
