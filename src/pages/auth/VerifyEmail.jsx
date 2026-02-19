import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";
import api from "../../api/axiosInstance";

const VerifyEmail = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [status, setStatus] = useState("verifying"); // verifying, success, error
  const [message, setMessage] = useState("Verifying your email...");

  useEffect(() => {
    const verifyEmail = async () => {
      const token = searchParams.get("token");

      if (!token) {
        setStatus("error");
        setMessage(
          "Invalid verification link. Please check your email or request a new verification email.",
        );
        return;
      }

      try {
        const response = await api.post("/user/auth/verify-email", { token });

        if (response.data.success) {
          setStatus("success");
          setMessage("Email verified successfully! Redirecting to login...");

          // Redirect to login after 3 seconds
          setTimeout(() => {
            navigate("/student-login", {
              state: { message: "Email verified! You can now login." },
            });
          }, 3000);
        } else {
          setStatus("error");
          setMessage(
            response.data.message || "Verification failed. Please try again.",
          );
        }
      } catch (error) {
        console.error("Email verification error:", error);
        setStatus("error");

        if (error.response?.data?.message) {
          setMessage(error.response.data.message);
        } else if (error.response?.status === 400) {
          setMessage(
            "Invalid or expired verification token. Please request a new verification email.",
          );
        } else {
          setMessage("Failed to verify email. Please try again later.");
        }
      }
    };

    verifyEmail();
  }, [searchParams, navigate]);

  const handleBackToLogin = () => {
    navigate("/student-login");
  };

  const handleResendVerification = () => {
    navigate("/student-login", {
      state: { showResendVerification: true },
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-md w-full bg-white rounded-2xl shadow-2xl p-8"
      >
        <div className="text-center">
          {/* Icon */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="mx-auto w-20 h-20 flex items-center justify-center rounded-full mb-6"
            style={{
              background:
                status === "success"
                  ? "linear-gradient(135deg, #10b981 0%, #059669 100%)"
                  : status === "error"
                    ? "linear-gradient(135deg, #ef4444 0%, #dc2626 100%)"
                    : "linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)",
            }}
          >
            {status === "verifying" && (
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                className="w-10 h-10 border-4 border-white border-t-transparent rounded-full"
              />
            )}
            {status === "success" && (
              <motion.svg
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="w-10 h-10 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={3}
                  d="M5 13l4 4L19 7"
                />
              </motion.svg>
            )}
            {status === "error" && (
              <motion.svg
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.3, type: "spring" }}
                className="w-10 h-10 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={3}
                  d="M6 18L18 6M6 6l12 12"
                />
              </motion.svg>
            )}
          </motion.div>

          {/* Title */}
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-2xl font-bold mb-4"
            style={{
              background:
                status === "success"
                  ? "linear-gradient(135deg, #10b981 0%, #059669 100%)"
                  : status === "error"
                    ? "linear-gradient(135deg, #ef4444 0%, #dc2626 100%)"
                    : "linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            {status === "verifying" && "Verifying Email"}
            {status === "success" && "Email Verified!"}
            {status === "error" && "Verification Failed"}
          </motion.h2>

          {/* Message */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-gray-600 mb-8"
          >
            {message}
          </motion.p>

          {/* Buttons */}
          {status !== "verifying" && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="space-y-3"
            >
              {status === "success" ? (
                <button
                  onClick={handleBackToLogin}
                  className="w-full py-3 px-4 rounded-lg font-semibold text-white transition-all duration-200 transform hover:scale-[1.02]"
                  style={{
                    background:
                      "linear-gradient(135deg, #10b981 0%, #059669 100%)",
                  }}
                >
                  Go to Login
                </button>
              ) : (
                <>
                  <button
                    onClick={handleResendVerification}
                    className="w-full py-3 px-4 rounded-lg font-semibold text-white transition-all duration-200 transform hover:scale-[1.02]"
                    style={{
                      background:
                        "linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)",
                    }}
                  >
                    Resend Verification Email
                  </button>
                  <button
                    onClick={handleBackToLogin}
                    className="w-full py-3 px-4 rounded-lg font-semibold text-gray-700 bg-gray-100 hover:bg-gray-200 transition-all duration-200"
                  >
                    Back to Login
                  </button>
                </>
              )}
            </motion.div>
          )}

          {/* Auto-redirect countdown for success */}
          {status === "success" && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="text-sm text-gray-500 mt-4"
            >
              Redirecting in 3 seconds...
            </motion.p>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default VerifyEmail;
