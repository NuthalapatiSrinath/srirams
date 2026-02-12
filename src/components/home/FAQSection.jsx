import { motion } from "framer-motion";
import { MessageSquare } from "lucide-react";

const FAQSection = () => {
  const faqs = [
    {
      q: "What is the duration of the foundation course?",
      a: "Our comprehensive foundation course runs for 12 months with daily classes and includes all subjects.",
    },
    {
      q: "Do you provide study material?",
      a: "Yes, we provide comprehensive printed and digital study material covering the entire UPSC syllabus.",
    },
    {
      q: "Are mock tests included in the course?",
      a: "Absolutely! Regular mock tests and answer writing practice are integral parts of all our courses.",
    },
    {
      q: "Can I join mid-session?",
      a: "Yes, we have flexible batches starting every month. You can join at any time and access recorded classes.",
    },
    {
      q: "Is online coaching as effective as offline?",
      a: "Our online classes are interactive with live doubt clearing, making them equally effective as offline coaching.",
    },
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
          Frequently Asked <span className="text-indigo-600">Questions</span>
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Get answers to common queries about UPSC preparation
        </p>
      </motion.div>

      <div className="max-w-4xl mx-auto space-y-4">
        {faqs.map((faq, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            whileHover={{ scale: 1.02 }}
            className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all"
          >
            <h3 className="text-lg font-bold text-gray-800 mb-2 flex items-center gap-2">
              <MessageSquare className="w-5 h-5 text-indigo-600" />
              {faq.q}
            </h3>
            <p className="text-gray-600 pl-7">{faq.a}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
