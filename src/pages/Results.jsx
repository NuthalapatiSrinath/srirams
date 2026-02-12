import { motion } from "framer-motion";
import { Trophy, TrendingUp, Award, Star } from "lucide-react";

const Results = () => {
  const toppers = [
    {
      name: "Priya Sharma",
      rank: "AIR 12",
      year: "2025",
      course: "2 Year Foundation Course",
      attempts: "2nd Attempt",
    },
    {
      name: "Rajesh Kumar",
      rank: "AIR 28",
      year: "2025",
      course: "Stride Mentorship Program",
      attempts: "1st Attempt",
    },
    {
      name: "Ananya Singh",
      rank: "AIR 45",
      year: "2025",
      course: "Foundation + Mains Program",
      attempts: "3rd Attempt",
    },
    {
      name: "Vikram Malhotra",
      rank: "AIR 67",
      year: "2024",
      course: "Complete UPSC Package",
      attempts: "2nd Attempt",
    },
    {
      name: "Meera Desai",
      rank: "AIR 89",
      year: "2024",
      course: "Mentorship Program",
      attempts: "1st Attempt",
    },
    {
      name: "Arjun Reddy",
      rank: "AIR 103",
      year: "2024",
      course: "Foundation Course",
      attempts: "2nd Attempt",
    },
  ];

  const yearlyStats = [
    { year: "2025", selections: "287", topRank: "AIR 12" },
    { year: "2024", selections: "312", topRank: "AIR 15" },
    { year: "2023", selections: "268", topRank: "AIR 8" },
    { year: "2022", selections: "245", topRank: "AIR 11" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <motion.section
        className="bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 text-white py-20"
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
            <Trophy className="w-16 h-16" />
            <h1 className="text-5xl font-bold">Our Results</h1>
          </motion.div>
          <motion.p
            className="text-xl text-yellow-100 text-center max-w-3xl mx-auto"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Celebrating success stories of 2500+ students who cracked UPSC with
            Sriram's IAS
          </motion.p>
        </div>
      </motion.section>

      {/* Overall Stats */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-700 -mt-8">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { icon: Award, number: "2500+", label: "Total Selections" },
              { icon: Trophy, number: "287", label: "Selections 2025" },
              { icon: Star, number: "AIR 12", label: "Top Rank 2025" },
              { icon: TrendingUp, number: "78%", label: "Success Rate" },
            ].map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={index}
                  className="bg-white/10 backdrop-blur-lg p-6 rounded-xl text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <Icon className="w-12 h-12 text-yellow-300 mx-auto mb-3" />
                  <h3 className="text-4xl font-bold text-white mb-2">
                    {stat.number}
                  </h3>
                  <p className="text-blue-100">{stat.label}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Year-wise Results */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <motion.h2
            className="text-3xl font-bold text-center mb-12 text-gray-800"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Year-wise Performance
          </motion.h2>
          <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {yearlyStats.map((stat, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-orange-50 to-yellow-50 p-6 rounded-xl border-2 border-orange-200"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <h3 className="text-2xl font-bold text-orange-600 mb-4">
                  {stat.year}
                </h3>
                <div className="space-y-2">
                  <div>
                    <p className="text-sm text-gray-600">Selections</p>
                    <p className="text-3xl font-bold text-gray-800">
                      {stat.selections}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Top Rank</p>
                    <p className="text-xl font-bold text-orange-600">
                      {stat.topRank}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Toppers Section */}
      <section className="py-16 bg-gradient-to-br from-orange-50 to-yellow-50">
        <div className="container mx-auto px-6">
          <motion.h2
            className="text-3xl font-bold text-center mb-12 text-gray-800"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Recent Toppers
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {toppers.map((topper, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                    <Trophy className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">
                      {topper.name}
                    </h3>
                    <p className="text-2xl font-bold text-orange-600">
                      {topper.rank}
                    </p>
                  </div>
                </div>

                <div className="space-y-2 bg-gradient-to-br from-orange-50 to-yellow-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-600">
                    <span className="font-semibold text-gray-800">Year:</span>{" "}
                    {topper.year}
                  </p>
                  <p className="text-sm text-gray-600">
                    <span className="font-semibold text-gray-800">Course:</span>{" "}
                    {topper.course}
                  </p>
                  <p className="text-sm text-gray-600">
                    <span className="font-semibold text-gray-800">
                      Attempts:
                    </span>{" "}
                    {topper.attempts}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-orange-600 to-red-600">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Be the Next Success Story
          </h2>
          <p className="text-orange-100 mb-8 max-w-2xl mx-auto">
            Join thousands of successful candidates who achieved their dreams
            with Sriram's IAS
          </p>
          <motion.button
            className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-3 rounded-full font-bold text-lg shadow-xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Start Your Journey Today
          </motion.button>
        </div>
      </section>
    </div>
  );
};

export default Results;
