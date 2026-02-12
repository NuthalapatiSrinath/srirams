import { useState } from "react";
import { motion } from "framer-motion";
import { LogIn, Mail, Lock, Eye, EyeOff, User, GraduationCap, Shield } from "lucide-react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const StudentLogin = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
    phone: "",
  });
  const navigate = useNavigate();

  // Static credentials for demo
  const DEMO_CREDENTIALS = {
    email: "student@sriramsias.com",
    password: "demo123",
    name: "Demo Student",
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (isLogin) {
      // Static login validation
      if (
        formData.email === DEMO_CREDENTIALS.email &&
        formData.password === DEMO_CREDENTIALS.password
      ) {
        toast.success(`Welcome back, ${DEMO_CREDENTIALS.name}!`);
        // Store auth status in localStorage
        localStorage.setItem("isAuthenticated", "true");
        localStorage.setItem("userName", DEMO_CREDENTIALS.name);
        localStorage.setItem("userEmail", DEMO_CREDENTIALS.email);
        
        // Redirect to dashboard or portal
        setTimeout(() => {
          navigate("/portal");
        }, 1500);
      } else {
        toast.error("Invalid credentials! Use: student@sriramsias.com / demo123");
      }
    } else {
      // Static signup - just show success
      if (formData.email && formData.password && formData.name && formData.phone) {
        toast.success("Registration successful! Please login.");
        setIsLogin(true);
        setFormData({ email: "", password: "", name: "", phone: "" });
      } else {
        toast.error("Please fill all fields");
      }
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex items-center justify-center py-12 px-4">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="max-w-6xl w-full grid lg:grid-cols-2 gap-8 items-center relative z-10">
        {/* Left Side - Info Panel */}
        <motion.div
          className="hidden lg:block"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 rounded-3xl p-12 text-white shadow-2xl">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, type: "spring" }}
            >
              <GraduationCap className="w-20 h-20 mb-6" />
            </motion.div>
            
            <h2 className="text-4xl font-bold mb-4">
              Welcome to Sriram's IAS
            </h2>
            <p className="text-blue-100 text-lg mb-8">
              Join thousands of successful UPSC aspirants who achieved their dreams with us
            </p>

            <div className="space-y-6">
              {[
                { icon: Shield, title: "Secure Access", desc: "Your data is protected with industry-standard encryption" },
                { icon: GraduationCap, title: "Personalized Learning", desc: "Access your courses, tests, and progress reports" },
                { icon: User, title: "Expert Guidance", desc: "Connect with mentors and faculty directly" },
              ].map((feature, idx) => (
                <motion.div
                  key={idx}
                  className="flex items-start gap-4"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + idx * 0.1 }}
                >
                  <div className="bg-white/20 backdrop-blur-sm p-3 rounded-lg">
                    <feature.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">{feature.title}</h3>
                    <p className="text-blue-100 text-sm">{feature.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              className="mt-12 p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20"
              whileHover={{ scale: 1.02 }}
            >
              <p className="text-sm text-blue-100 mb-2">Demo Credentials:</p>
              <p className="font-mono text-sm">Email: student@sriramsias.com</p>
              <p className="font-mono text-sm">Password: demo123</p>
            </motion.div>
          </div>
        </motion.div>

        {/* Right Side - Login Form */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="bg-white rounded-3xl shadow-2xl p-8 md:p-12"
        >
          <motion.div variants={itemVariants} className="text-center mb-8">
            <motion.div
              className="inline-block p-4 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl mb-4"
              whileHover={{ rotate: [0, -10, 10, -10, 0] }}
              transition={{ duration: 0.5 }}
            >
              <LogIn className="w-10 h-10 text-white" />
            </motion.div>
            <h1 className="text-3xl font-bold text-gray-800 mb-2">
              {isLogin ? "Welcome Back!" : "Create Account"}
            </h1>
            <p className="text-gray-600">
              {isLogin
                ? "Login to access your student portal"
                : "Register to start your UPSC journey"}
            </p>
          </motion.div>

          <form onSubmit={handleSubmit} className="space-y-5">
            {!isLogin && (
              <>
                <motion.div variants={itemVariants}>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name
                  </label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                      className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all outline-none"
                    />
                  </div>
                </motion.div>

                <motion.div variants={itemVariants}>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                      📱
                    </span>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Enter your phone number"
                      className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all outline-none"
                    />
                  </div>
                </motion.div>
              </>
            )}

            <motion.div variants={itemVariants}>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all outline-none"
                  required
                />
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Enter your password"
                  className="w-full pl-12 pr-12 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all outline-none"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? (
                    <EyeOff className="w-5 h-5" />
                  ) : (
                    <Eye className="w-5 h-5" />
                  )}
                </button>
              </div>
            </motion.div>

            {isLogin && (
              <motion.div
                variants={itemVariants}
                className="flex items-center justify-between text-sm"
              >
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                  />
                  <span className="text-gray-600">Remember me</span>
                </label>
                <button
                  type="button"
                  className="text-blue-600 hover:text-blue-700 font-semibold"
                >
                  Forgot password?
                </button>
              </motion.div>
            )}

            <motion.button
              variants={itemVariants}
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white py-3 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {isLogin ? "Login Now" : "Create Account"}
            </motion.button>
          </form>

          <motion.div
            variants={itemVariants}
            className="mt-6 text-center"
          >
            <p className="text-gray-600">
              {isLogin ? "Don't have an account? " : "Already have an account? "}
              <button
                onClick={() => {
                  setIsLogin(!isLogin);
                  setFormData({ email: "", password: "", name: "", phone: "" });
                }}
                className="text-blue-600 hover:text-blue-700 font-bold"
              >
                {isLogin ? "Sign Up" : "Login"}
              </button>
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="mt-6 p-4 bg-blue-50 rounded-xl border border-blue-200 lg:hidden"
          >
            <p className="text-xs text-gray-600 mb-1">Demo Credentials:</p>
            <p className="font-mono text-xs text-gray-700">student@sriramsias.com</p>
            <p className="font-mono text-xs text-gray-700">demo123</p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="mt-8 text-center"
          >
            <p className="text-sm text-gray-500 mb-3">Or continue with</p>
            <div className="flex gap-3 justify-center">
              {["Google", "Facebook", "Apple"].map((provider) => (
                <motion.button
                  key={provider}
                  className="px-6 py-2 border-2 border-gray-200 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-all text-sm font-semibold text-gray-700"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {provider}
                </motion.button>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default StudentLogin;
