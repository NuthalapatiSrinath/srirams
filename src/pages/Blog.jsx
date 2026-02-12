import { motion } from "framer-motion";
import { BookOpen, TrendingUp, Video, Calendar } from "lucide-react";

const Blog = () => {
  const blogPosts = [
    {
      title: "10 Essential Strategies to Crack UPSC in First Attempt",
      excerpt:
        "Learn the proven strategies that helped thousands of students succeed in their very first attempt at UPSC CSE.",
      category: "Strategy",
      date: "Feb 10, 2026",
      readTime: "8 min read",
      image: "from-blue-600 to-indigo-600",
    },
    {
      title: "Complete Guide to UPSC Prelims Preparation 2026",
      excerpt:
        "A comprehensive roadmap covering every aspect of Prelims preparation from basics to advanced concepts.",
      category: "Prelims",
      date: "Feb 08, 2026",
      readTime: "12 min read",
      image: "from-green-600 to-teal-600",
    },
    {
      title: "How to Choose the Right Optional Subject for UPSC",
      excerpt:
        "Detailed analysis of popular optional subjects with selection criteria based on background and interests.",
      category: "Optional",
      date: "Feb 05, 2026",
      readTime: "10 min read",
      image: "from-purple-600 to-pink-600",
    },
    {
      title: "Answer Writing Techniques for UPSC Mains",
      excerpt:
        "Master the art of answer writing with structured approaches and expert tips for scoring high marks.",
      category: "Mains",
      date: "Feb 03, 2026",
      readTime: "15 min read",
      image: "from-orange-600 to-red-600",
    },
    {
      title: "Current Affairs Integration in UPSC Answers",
      excerpt:
        "Learn how to effectively integrate current affairs in your answers to make them more relevant and scoring.",
      category: "Current Affairs",
      date: "Jan 30, 2026",
      readTime: "7 min read",
      image: "from-cyan-600 to-blue-600",
    },
    {
      title: "Time Management Strategies for UPSC Aspirants",
      excerpt:
        "Optimize your preparation with effective time management techniques used by toppers.",
      category: "Study Tips",
      date: "Jan 28, 2026",
      readTime: "9 min read",
      image: "from-pink-600 to-rose-600",
    },
  ];

  const categories = [
    "All Posts",
    "Strategy",
    "Prelims",
    "Mains",
    "Optional",
    "Current Affairs",
    "Study Tips",
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
            <BookOpen className="w-12 h-12" />
            <h1 className="text-5xl font-bold">UPSC Blog</h1>
          </motion.div>
          <motion.p
            className="text-xl text-purple-100 text-center max-w-3xl mx-auto"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Expert insights, preparation strategies, and success stories to
            guide your UPSC journey
          </motion.p>
        </div>
      </motion.section>

      {/* Categories */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-6">
          <div className="flex items-center gap-3 overflow-x-auto">
            {categories.map((category, index) => (
              <motion.button
                key={index}
                className="px-6 py-2 bg-gray-100 hover:bg-indigo-600 hover:text-white rounded-full font-semibold text-sm whitespace-nowrap transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <motion.div
            className="bg-gradient-to-r from-indigo-600 to-purple-700 text-white rounded-3xl overflow-hidden shadow-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="grid md:grid-cols-2 gap-8 p-12">
              <div className="flex flex-col justify-center">
                <span className="inline-block px-4 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold mb-4 w-fit">
                  Featured Post
                </span>
                <h2 className="text-4xl font-bold mb-4">
                  Complete UPSC Strategy Guide 2026
                </h2>
                <p className="text-purple-100 mb-6">
                  Everything you need to know about UPSC preparation from
                  beginner to advanced level. A comprehensive guide by our
                  expert faculty.
                </p>
                <div className="flex items-center gap-6 text-sm mb-6">
                  <span className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    Feb 11, 2026
                  </span>
                  <span className="flex items-center gap-2">
                    <BookOpen className="w-4 h-4" />
                    20 min read
                  </span>
                </div>
                <motion.button
                  className="bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold w-fit hover:bg-gray-100"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Read Full Article
                </motion.button>
              </div>
              <div className="flex items-center justify-center">
                <div className="w-full aspect-square bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                  <TrendingUp className="w-32 h-32 text-white/50" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-6">
          <motion.h2
            className="text-3xl font-bold text-center mb-12 text-gray-800"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Recent Articles
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.article
                key={index}
                className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div
                  className={`h-48 bg-gradient-to-r ${post.image} flex items-center justify-center`}
                >
                  <BookOpen className="w-16 h-16 text-white/80" />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-xs font-semibold">
                      {post.category}
                    </span>
                    <span className="text-xs text-gray-500">{post.date}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between pt-4 border-t">
                    <span className="text-xs text-gray-500">
                      {post.readTime}
                    </span>
                    <motion.button
                      className="text-indigo-600 font-semibold text-sm hover:text-indigo-700"
                      whileHover={{ x: 5 }}
                    >
                      Read More →
                    </motion.button>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Subscribe Section */}
      <section className="py-16 bg-gradient-to-r from-indigo-600 to-purple-700">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Subscribe to Our Newsletter
          </h2>
          <p className="text-indigo-100 mb-8 max-w-2xl mx-auto">
            Get the latest articles, study tips, and UPSC updates delivered
            directly to your inbox
          </p>
          <div className="max-w-md mx-auto flex gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg focus:ring-2 focus:ring-white focus:outline-none"
            />
            <motion.button
              className="bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Subscribe
            </motion.button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
