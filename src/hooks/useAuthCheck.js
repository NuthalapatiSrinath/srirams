// src/hooks/useAuthCheck.js
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import toast from "react-hot-toast";

/**
 * Hook to check authentication status
 * Redirects to login if not authenticated
 */
export const useAuthCheck = (requireAuth = true) => {
  const navigate = useNavigate();
  const { isAuthenticated } = useSelector((state) => state.auth);
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (requireAuth && (!token || !isAuthenticated)) {
      toast.error("Please login to continue");
      navigate("/login", { replace: true });
    }
  }, [requireAuth, token, isAuthenticated, navigate]);

  const checkAuth = (callback) => {
    return (...args) => {
      const currentToken = localStorage.getItem("token");
      if (!currentToken) {
        toast.error("Session expired. Please login again.");
        navigate("/login", { replace: true });
        return;
      }
      if (callback) {
        return callback(...args);
      }
    };
  };

  return { checkAuth, isAuthenticated: !!token };
};

export default useAuthCheck;
