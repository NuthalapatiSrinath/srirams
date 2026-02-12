import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Users } from "lucide-react";

const FacultySection = () => {
  const navigate = useNavigate();

  const faculty = [
    {
      name: "Dr. Rajesh Kumar",
      subject: "History & Culture",
      exp: "20+ Years",
    },
    { name: "Prof. Anita Singh", subject: "Geography", exp: "15+ Years" },
    {
      name: "Mr. Vikram Sharma",
      subject: "Polity & Governance",
      exp: "18+ Years",
    },
    { name: "Dr. Meera Patel", subject: "Economics", exp: "12+ Years" },
    {
      name: "Mr. Arun Mathur",
      subject: "Science & Technology",
      exp: "16+ Years",
    },
    {
      name: "Ms. Priya Reddy",
      subject: "International Relations",
      exp: "14+ Years",
    },
    {
      name: "Dr. Sunil Gupta",
      subject: "Environment & Ecology",
      exp: "10+ Years",
    },
    { name: "Prof. Kavita Joshi", subject: "Ethics & Essay", exp: "22+ Years" },
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
          Meet Our <span className="text-pink-600">Expert Faculty</span>
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Learn from the best minds in UPSC coaching
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-8">
        {faculty.map((member, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.08 }}
            whileHover={{ y: -10, scale: 1.05 }}
            onClick={() => navigate("/about/faculty")}
            className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all text-center cursor-pointer"
          >
            <div className="w-24 h-24 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center">
              <Users className="w-12 h-12 text-white" />
            </div>
            <h3 className="text-lg font-bold text-gray-800 mb-1">
              {member.name}
            </h3>
            <p className="text-sm text-purple-600 font-semibold mb-2">
              {member.subject}
            </p>
            <p className="text-xs text-gray-500">{member.exp} Experience</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FacultySection;
