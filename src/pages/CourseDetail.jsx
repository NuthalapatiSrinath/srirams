import { motion } from "framer-motion";
import { useParams, useNavigate } from "react-router-dom";
import {
  Clock,
  Users,
  Calendar,
  BookOpen,
  CheckCircle,
  Award,
  TrendingUp,
  Download,
  Phone,
  Mail,
  ArrowLeft,
  Video,
  FileText,
  MessageCircle,
  Target,
} from "lucide-react";

const CourseDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  const courseData = {
    "foundation-course": {
      title: "2 Year General Studies Foundation Course",
      subtitle: "Build your UPSC foundation from scratch",
      description:
        "Our comprehensive 2-year foundation course is designed for aspirants who want to build a strong base for UPSC CSE. With systematic coverage of all GS papers, current affairs integration, and regular assessments, this course ensures you are well-prepared for both Prelims and Mains.",
      image:
        "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1200&h=400&fit=crop",
      bgGradient: "from-blue-600 to-indigo-700",
      duration: "2 Years",
      students: "5000+ enrolled",
      batch: "Starting March 2026",
      price: "₹1,50,000",
      features: [
        "Complete GS Papers 1-4 Coverage",
        "Daily Current Affairs Classes",
        "Weekly Test Series",
        "Comprehensive Study Material",
        "Essay Writing Practice",
        "Answer Writing Sessions",
        "Doubt Clearing Classes",
        "Personal Mentorship",
        "Online + Offline Mode",
        "Recorded Lectures Access",
      ],
      syllabus: [
        {
          module: "General Studies Paper 1",
          topics: [
            "Indian Heritage & Culture",
            "Modern Indian History",
            "Geography",
            "Society",
            "World History",
          ],
        },
        {
          module: "General Studies Paper 2",
          topics: [
            "Indian Polity",
            "Governance",
            "Social Justice",
            "International Relations",
          ],
        },
        {
          module: "General Studies Paper 3",
          topics: [
            "Economy",
            "Environment",
            "Science & Technology",
            "Internal Security",
            "Disaster Management",
          ],
        },
        {
          module: "General Studies Paper 4",
          topics: [
            "Ethics",
            "Integrity",
            "Aptitude",
            "Case Studies",
            "Administrative Values",
          ],
        },
      ],
      faculty: [
        {
          name: "Dr. Rajesh Kumar",
          expertise: "History & Culture",
          experience: "15 years",
          image: "https://randomuser.me/api/portraits/men/32.jpg",
        },
        {
          name: "Prof. Anita Sharma",
          expertise: "Polity & Governance",
          experience: "12 years",
          image: "https://randomuser.me/api/portraits/women/30.jpg",
        },
        {
          name: "Mr. Vikram Singh",
          expertise: "Economy & Development",
          experience: "10 years",
          image: "https://randomuser.me/api/portraits/men/45.jpg",
        },
      ],
      testimonials: [
        {
          name: "Amit Verma",
          rank: "AIR 56",
          text: "The foundation course gave me clarity on every topic. The faculty is outstanding!",
        },
        {
          name: "Sneha Patel",
          rank: "AIR 189",
          text: "Best decision I made was joining this course. Comprehensive and well-structured.",
        },
      ],
    },
    "csat-course": {
      title: "CSAT Course for UPSC CSE Prelims",
      subtitle: "Master the qualifying paper with confidence",
      description:
        "CSAT (Paper-2) can be a game-changer in your UPSC journey. Our specialized CSAT course focuses on building speed, accuracy, and problem-solving skills. With extensive practice sessions and mock tests, we ensure you qualify CSAT with a comfortable margin.",
      image:
        "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=1200&h=400&fit=crop",
      bgGradient: "from-purple-600 to-pink-600",
      duration: "4 Months",
      students: "3000+ enrolled",
      batch: "Batch starts Feb 20, 2026",
      price: "₹25,000",
      features: [
        "Comprehensive Coverage",
        "Daily Practice Sets",
        "50+ Mock Tests",
        "Speed Building Techniques",
        "Shortcut Methods",
        "Previous Year Analysis",
        "Doubt Sessions",
        "Performance Analytics",
        "Mobile App Access",
        "Study Material PDF",
      ],
      syllabus: [
        {
          module: "Comprehension",
          topics: [
            "Reading Comprehension",
            "Passage Analysis",
            "Inference Questions",
            "Critical Reasoning",
          ],
        },
        {
          module: "Logical Reasoning",
          topics: [
            "Analytical Reasoning",
            "Data Interpretation",
            "Logical Puzzles",
            "Statement Assumptions",
          ],
        },
        {
          module: "Quantitative Aptitude",
          topics: [
            "Arithmetic",
            "Algebra",
            "Geometry",
            "Data Sufficiency",
            "Number System",
          ],
        },
        {
          module: "Decision Making",
          topics: [
            "Problem Solving",
            "Data Analysis",
            "Graphical Interpretation",
          ],
        },
      ],
      faculty: [
        {
          name: "Mr. Suresh Reddy",
          expertise: "Quantitative Aptitude",
          experience: "18 years",
          image: "https://randomuser.me/api/portraits/men/50.jpg",
        },
        {
          name: "Ms. Priya Gupta",
          expertise: "Logical Reasoning",
          experience: "14 years",
          image: "https://randomuser.me/api/portraits/women/28.jpg",
        },
      ],
      testimonials: [
        {
          name: "Rohit Singh",
          rank: "AIR 234",
          text: "CSAT was my weakness. This course turned it into my strength!",
        },
        {
          name: "Kavya Reddy",
          rank: "AIR 412",
          text: "Excellent teaching methodology. The mock tests were extremely helpful.",
        },
      ],
    },
    "mentorship-program": {
      title: "Stride Mentorship Program 2026",
      subtitle: "Personal guidance for your UPSC journey",
      description:
        "Our exclusive mentorship program connects you with successful IAS officers and subject experts who provide personalized guidance throughout your UPSC preparation. Get strategy sessions, answer writing evaluation, and motivation to stay on track.",
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&h=400&fit=crop",
      bgGradient: "from-green-600 to-teal-600",
      duration: "1 Year",
      students: "500+ enrolled",
      batch: "Limited Slots Available",
      price: "₹75,000",
      features: [
        "1-on-1 Mentorship Sessions",
        "Personalized Study Plan",
        "Weekly Strategy Meetings",
        "Answer Writing Evaluation",
        "Mock Interview Practice",
        "Psychology Support",
        "Performance Tracking",
        "Resource Recommendations",
        "Peer Group Discussions",
        "Direct Mentor Access",
      ],
      syllabus: [
        {
          module: "Foundation Phase",
          topics: [
            "Goal Setting",
            "Study Plan Creation",
            "Resource Identification",
            "Time Management",
          ],
        },
        {
          module: "Preparation Phase",
          topics: [
            "Subject-wise Guidance",
            "Note Making",
            "Revision Strategy",
            "Test Analysis",
          ],
        },
        {
          module: "Testing Phase",
          topics: [
            "Mock Test Strategy",
            "Answer Writing",
            "Time Management",
            "Exam Psychology",
          ],
        },
        {
          module: "Interview Phase",
          topics: [
            "DAF Analysis",
            "Current Affairs Discussion",
            "Mock Interviews",
            "Personality Development",
          ],
        },
      ],
      faculty: [
        {
          name: "IAS Ravi Sharma",
          expertise: "UPSC CSE 2018 - AIR 12",
          experience: "Active IAS Officer",
          image: "https://randomuser.me/api/portraits/men/38.jpg",
        },
        {
          name: "IAS Meera Patel",
          expertise: "UPSC CSE 2019 - AIR 45",
          experience: "Active IAS Officer",
          image: "https://randomuser.me/api/portraits/women/42.jpg",
        },
      ],
      testimonials: [
        {
          name: "Aditya Kumar",
          rank: "AIR 67",
          text: "My mentor guided me through every phase. The personalized attention made all the difference.",
        },
        {
          name: "Pooja Sharma",
          rank: "AIR 143",
          text: "Best investment for UPSC preparation. The mentorship kept me motivated and focused.",
        },
      ],
    },
    "mains-test-series": {
      title: "Mains Test Series 2026",
      subtitle: "Practice with UPSC standard questions",
      description:
        "Our comprehensive Mains Test Series covers all GS papers with UPSC-standard questions. Each answer is evaluated by subject experts with detailed feedback. Get All India Rank and compare your performance with thousands of aspirants.",
      image:
        "https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?w=1200&h=400&fit=crop",
      bgGradient: "from-orange-600 to-red-600",
      duration: "6 Months",
      students: "Unlimited enrollment",
      batch: "Enrollments Open",
      price: "₹15,000",
      features: [
        "25+ Full Length Tests",
        "All GS Papers Covered",
        "Essay Test Series",
        "Detailed Evaluation",
        "Personalized Feedback",
        "All India Ranking",
        "Model Answers",
        "Performance Analytics",
        "Online Platform",
        "Mobile App Access",
      ],
      syllabus: [
        {
          module: "GS Paper 1 Tests",
          topics: [
            "6 Full Length Tests",
            "Topic-wise Tests",
            "Current Affairs Integration",
          ],
        },
        {
          module: "GS Paper 2 Tests",
          topics: [
            "6 Full Length Tests",
            "Polity Focus",
            "Governance Questions",
          ],
        },
        {
          module: "GS Paper 3 Tests",
          topics: [
            "6 Full Length Tests",
            "Economy & Environment",
            "Security Questions",
          ],
        },
        {
          module: "GS Paper 4 & Essay",
          topics: ["5 Ethics Tests", "5 Essay Tests", "Case Study Practice"],
        },
      ],
      faculty: [
        {
          name: "Dr. Manjeet Singh",
          expertise: "Answer Writing Expert",
          experience: "20 years",
          image: "https://randomuser.me/api/portraits/men/55.jpg",
        },
        {
          name: "Prof. Sunita Rao",
          expertise: "Ethics & Essay",
          experience: "16 years",
          image: "https://randomuser.me/api/portraits/women/48.jpg",
        },
      ],
      testimonials: [
        {
          name: "Vikram Nair",
          rank: "AIR 89",
          text: "The test series helped me improve my answer writing significantly. The feedback was invaluable.",
        },
        {
          name: "Anjali Singh",
          rank: "AIR 267",
          text: "Regular practice with quality evaluation. This test series is a must for Mains preparation.",
        },
      ],
    },
    "optional-courses": {
      title: "Optional Subject Courses",
      subtitle: "Score high with expert optional coaching",
      description:
        "Choose from 10+ optional subjects taught by subject matter experts. Our optional courses are designed to help you score 300+ marks with comprehensive coverage, test series, and answer writing practice.",
      image:
        "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=1200&h=400&fit=crop",
      bgGradient: "from-cyan-600 to-blue-700",
      duration: "12-18 Months",
      students: "4000+ enrolled",
      batch: "Multiple batches available",
      price: "₹60,000 - ₹80,000",
      features: [
        "10+ Optional Subjects",
        "Subject Expert Faculty",
        "Complete Syllabus Coverage",
        "Previous Year Analysis",
        "Answer Writing Practice",
        "Test Series Included",
        "Study Material",
        "Online + Offline",
        "Recorded Lectures",
        "Doubt Clearing Sessions",
      ],
      syllabus: [
        {
          module: "Available Subjects",
          topics: [
            "Geography",
            "History",
            "Political Science",
            "Public Administration",
            "Sociology",
            "Anthropology",
            "Psychology",
            "Philosophy",
            "Economics",
            "Law",
            "PSIR",
          ],
        },
        {
          module: "Course Structure",
          topics: [
            "Foundation Phase",
            "Advanced Phase",
            "Answer Writing",
            "Test Series",
            "Revision",
          ],
        },
      ],
      faculty: [
        {
          name: "Dr. Ramesh Gupta",
          expertise: "Geography Optional",
          experience: "22 years",
          image: "https://randomuser.me/api/portraits/men/62.jpg",
        },
        {
          name: "Prof. Lakshmi Iyer",
          expertise: "Sociology Optional",
          experience: "18 years",
          image: "https://randomuser.me/api/portraits/women/52.jpg",
        },
        {
          name: "Dr. Ashok Kumar",
          expertise: "Public Administration",
          experience: "20 years",
          image: "https://randomuser.me/api/portraits/men/58.jpg",
        },
      ],
      testimonials: [
        {
          name: "Sanjay Mehra",
          rank: "AIR 45",
          text: "Scored 330+ in Geography optional. The faculty and study material were excellent.",
        },
        {
          name: "Nisha Kapoor",
          rank: "AIR 178",
          text: "Public Administration coaching was top-notch. Highly recommended!",
        },
      ],
    },
  };

  const course = courseData[slug];

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-[220px]">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Course Not Found
          </h1>
          <button
            onClick={() => navigate("/")}
            className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold"
          >
            Go Back Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pb-12">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative h-[350px] mb-12"
      >
        <div className="absolute inset-0">
          <img
            src={course.image}
            alt={course.title}
            className="w-full h-full object-cover"
          />
          <div
            className={`absolute inset-0 bg-gradient-to-r ${course.bgGradient} opacity-90`}
          />
        </div>
        <div className="relative h-full flex items-center">
          <div className="container mx-auto px-6">
            <motion.button
              onClick={() => navigate("/")}
              className="flex items-center gap-2 text-white mb-6 hover:text-white/80 transition-colors"
              whileHover={{ x: -5 }}
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="font-semibold">Back to Home</span>
            </motion.button>
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-5xl md:text-6xl font-bold text-white mb-4"
            >
              {course.title}
            </motion.h1>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-2xl text-white/90 mb-6"
            >
              {course.subtitle}
            </motion.p>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap gap-4"
            >
              <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full flex items-center gap-2">
                <Clock className="w-5 h-5" />
                <span className="font-semibold">{course.duration}</span>
              </div>
              <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full flex items-center gap-2">
                <Users className="w-5 h-5" />
                <span className="font-semibold">{course.students}</span>
              </div>
              <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                <span className="font-semibold">{course.batch}</span>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Overview */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg p-8 mb-8"
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-4 flex items-center gap-3">
                <BookOpen className="w-8 h-8 text-blue-600" />
                Course Overview
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                {course.description}
              </p>
            </motion.section>

            {/* Features */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg p-8 mb-8"
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                <Target className="w-8 h-8 text-blue-600" />
                What You'll Get
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {course.features.map((feature, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.05 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                    <span className="text-gray-700 font-medium">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            {/* Syllabus */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg p-8 mb-8"
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                <FileText className="w-8 h-8 text-blue-600" />
                Course Syllabus
              </h2>
              <div className="space-y-6">
                {course.syllabus.map((module, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="border-l-4 border-blue-500 pl-6 py-2"
                  >
                    <h3 className="text-xl font-bold text-gray-800 mb-3">
                      {module.module}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {module.topics.map((topic, topicIdx) => (
                        <span
                          key={topicIdx}
                          className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium"
                        >
                          {topic}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            {/* Faculty */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg p-8 mb-8"
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                <Award className="w-8 h-8 text-blue-600" />
                Expert Faculty
              </h2>
              <div className="space-y-6">
                {course.faculty.map((member, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl"
                  >
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-20 h-20 rounded-full object-cover"
                    />
                    <div>
                      <h3 className="text-xl font-bold text-gray-800">
                        {member.name}
                      </h3>
                      <p className="text-blue-600 font-semibold">
                        {member.expertise}
                      </p>
                      <p className="text-gray-600">{member.experience}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            {/* Testimonials */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg p-8"
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                <MessageCircle className="w-8 h-8 text-blue-600" />
                Student Success Stories
              </h2>
              <div className="space-y-6">
                {course.testimonials.map((testimonial, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl"
                  >
                    <p className="text-gray-700 italic mb-4">
                      "{testimonial.text}"
                    </p>
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-bold text-gray-800">
                          {testimonial.name}
                        </h4>
                        <p className="text-blue-600 font-semibold">
                          {testimonial.rank}
                        </p>
                      </div>
                      <Award className="w-8 h-8 text-yellow-500" />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="sticky top-[20px] space-y-6"
            >
              {/* Pricing Card */}
              <div className="bg-white rounded-xl shadow-xl p-8 border-2 border-blue-500">
                <div className="text-center mb-6">
                  <p className="text-gray-600 mb-2">Course Fee</p>
                  <h3 className="text-4xl font-bold text-gray-800">
                    {course.price}
                  </h3>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all mb-4"
                >
                  Enroll Now
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-white border-2 border-blue-600 text-blue-600 py-4 rounded-full font-bold text-lg hover:bg-blue-50 transition-all flex items-center justify-center gap-2"
                >
                  <Download className="w-5 h-5" />
                  Download Brochure
                </motion.button>
              </div>

              {/* Contact Card */}
              <div className="bg-gradient-to-r from-orange-500 to-red-600 rounded-xl shadow-xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Need Help?</h3>
                <p className="mb-6">Our counselors are here to assist you</p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5" />
                    <span className="font-semibold">8686818384</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5" />
                    <span className="font-semibold">
                      enquiry@sriramsias.com
                    </span>
                  </div>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-white text-orange-600 py-3 rounded-full font-bold mt-6 hover:shadow-xl transition-all"
                >
                  Request Callback
                </motion.button>
              </div>

              {/* Features List */}
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  Why Choose This Course?
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Video className="w-5 h-5 text-blue-600" />
                    <span className="text-gray-700">
                      Live + Recorded Classes
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <FileText className="w-5 h-5 text-blue-600" />
                    <span className="text-gray-700">
                      Comprehensive Material
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <TrendingUp className="w-5 h-5 text-blue-600" />
                    <span className="text-gray-700">Regular Assessments</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Award className="w-5 h-5 text-blue-600" />
                    <span className="text-gray-700">Expert Faculty</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;
