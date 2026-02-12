import { motion } from "framer-motion";
import { Award, Users, BookOpen, TrendingUp } from "lucide-react";

const OurStory = () => {
  const milestones = [
    { year: "2011", event: "Sriram's IAS founded in Delhi", icon: BookOpen },
    {
      year: "2015",
      event: "Expanded to 5 branches across India",
      icon: TrendingUp,
    },
    { year: "2018", event: "Achieved 500+ selections", icon: Award },
    { year: "2025", event: "2500+ successful candidates", icon: Users },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <motion.section
        className="bg-gradient-to-r from-blue-800 to-indigo-900 text-white py-20"
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
            Our Story
          </motion.h1>
          <motion.p
            className="text-xl text-blue-100 max-w-3xl"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            A journey of excellence in UPSC preparation, empowering aspirants to
            achieve their dreams since 2011
          </motion.p>
        </div>
      </motion.section>

      {/* Story Content */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              className="bg-white rounded-2xl shadow-xl p-8 mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                The Beginning
              </h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Sriram's IAS was founded in 2011 with a vision to provide
                quality education and mentorship to UPSC aspirants. What started
                as a small coaching center in Delhi has now grown into one of
                India's most trusted names in civil services preparation.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Our founder, recognizing the need for personalized guidance and
                comprehensive study materials, established an institution that
                would bridge the gap between aspiration and achievement. Today,
                we continue this legacy with the same passion and dedication.
              </p>
            </motion.div>

            {/* Milestones */}
            <div className="space-y-6 mb-12">
              {milestones.map((milestone, index) => {
                const Icon = milestone.icon;
                return (
                  <motion.div
                    key={index}
                    className="flex items-start gap-6 bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="flex-shrink-0 w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-blue-600 mb-2">
                        {milestone.year}
                      </h3>
                      <p className="text-gray-700 text-lg">{milestone.event}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Vision & Mission */}
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white p-8 rounded-2xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                <p className="text-blue-100">
                  To be the leading institution in civil services preparation,
                  nurturing future leaders who will serve the nation with
                  integrity and excellence.
                </p>
              </motion.div>
              <motion.div
                className="bg-gradient-to-br from-purple-600 to-pink-600 text-white p-8 rounded-2xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                <p className="text-purple-100">
                  To provide comprehensive, personalized, and result-oriented
                  guidance to every aspirant, making their UPSC journey
                  successful and enriching.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-700">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { number: "2500+", label: "Successful Candidates" },
              { number: "50,000+", label: "Students Trained" },
              { number: "15+", label: "Years of Excellence" },
              { number: "100+", label: "Expert Faculty" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <h3 className="text-5xl font-bold text-white mb-2">
                  {stat.number}
                </h3>
                <p className="text-blue-100 text-lg">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurStory;
