import { motion } from "framer-motion";
import { Calendar, MapPin, Users, Clock } from "lucide-react";

const UpcomingBatches = () => {
  const batches = [
    {
      course: "Foundation Course 2027",
      startDate: "March 1, 2026",
      duration: "24 Months",
      mode: "Offline + Online",
      seats: "Limited Seats",
      location: "Delhi, Mumbai, Bangalore",
      timing: "Mon-Sat, 9:00 AM - 5:00 PM",
      color: "from-blue-600 to-indigo-600",
    },
    {
      course: "Prelims 2026 Batch",
      startDate: "February 20, 2026",
      duration: "4 Months",
      mode: "Online",
      seats: "Unlimited",
      location: "Live Online Classes",
      timing: "Evening Batch, 6:00 PM - 9:00 PM",
      color: "from-green-600 to-teal-600",
    },
    {
      course: "Mains 2026 Batch",
      startDate: "July 1, 2026",
      duration: "5 Months",
      mode: "Offline + Online",
      seats: "50 Seats",
      location: "Delhi, Hyderabad",
      timing: "Mon-Fri, 10:00 AM - 6:00 PM",
      color: "from-purple-600 to-pink-600",
    },
    {
      course: "CSAT Crash Course",
      startDate: "April 15, 2026",
      duration: "2 Months",
      mode: "Online",
      seats: "Unlimited",
      location: "Recorded + Live",
      timing: "Flexible Timings",
      color: "from-orange-600 to-red-600",
    },
    {
      course: "Optional - Public Administration",
      startDate: "March 15, 2026",
      duration: "6 Months",
      mode: "Offline",
      seats: "30 Seats",
      location: "Delhi",
      timing: "Weekend Batch, Sat-Sun",
      color: "from-cyan-600 to-blue-600",
    },
    {
      course: "Mentorship Program 2027",
      startDate: "February 25, 2026",
      duration: "18 Months",
      mode: "Hybrid",
      seats: "100 Seats",
      location: "All Centers",
      timing: "Personalized Schedule",
      color: "from-pink-600 to-rose-600",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <motion.section
        className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white py-20"
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
            <Calendar className="w-12 h-12" />
            <h1 className="text-5xl font-bold">Upcoming Batches</h1>
          </motion.div>
          <motion.p
            className="text-xl text-blue-100 text-center max-w-3xl mx-auto"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Join our upcoming batches and start your UPSC journey with expert
            guidance
          </motion.p>
        </div>
      </motion.section>

      {/* Batches Grid */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            {batches.map((batch, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div
                  className={`bg-gradient-to-r ${batch.color} text-white p-6`}
                >
                  <h3 className="text-2xl font-bold mb-2">{batch.course}</h3>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm">Starts: {batch.startDate}</span>
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-start gap-3">
                      <Clock className="w-5 h-5 text-gray-400 mt-0.5" />
                      <div>
                        <p className="text-xs text-gray-500">Duration</p>
                        <p className="font-semibold text-gray-800">
                          {batch.duration}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Users className="w-5 h-5 text-gray-400 mt-0.5" />
                      <div>
                        <p className="text-xs text-gray-500">Seats</p>
                        <p className="font-semibold text-gray-800">
                          {batch.seats}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-gray-400 mt-0.5" />
                    <div>
                      <p className="text-xs text-gray-500">Location</p>
                      <p className="font-semibold text-gray-800">
                        {batch.location}
                      </p>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-3 rounded-lg">
                    <p className="text-xs text-gray-600 mb-1">Mode & Timing</p>
                    <p className="font-semibold text-gray-800">{batch.mode}</p>
                    <p className="text-sm text-gray-600">{batch.timing}</p>
                  </div>

                  <div className="flex gap-3 pt-4">
                    <motion.button
                      className={`flex-1 bg-gradient-to-r ${batch.color} text-white py-3 rounded-lg font-semibold shadow-md`}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Reserve Seat
                    </motion.button>
                    <motion.button
                      className="px-6 border-2 border-gray-300 text-gray-700 hover:bg-gray-50 py-3 rounded-lg font-semibold transition-colors"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Details
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-indigo-600 to-purple-700">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Not Sure Which Batch to Join?
          </h2>
          <p className="text-indigo-100 mb-8 max-w-2xl mx-auto">
            Talk to our counselors and get personalized guidance on selecting
            the right batch for your preparation
          </p>
          <motion.button
            className="bg-white text-indigo-600 hover:bg-gray-100 px-8 py-3 rounded-full font-bold text-lg shadow-xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Talk to Counselor
          </motion.button>
        </div>
      </section>
    </div>
  );
};

export default UpcomingBatches;
