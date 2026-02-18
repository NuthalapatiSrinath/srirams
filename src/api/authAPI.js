// src/api/authAPI.js
import api from "./axiosInstance";

/**
 * User Authentication API
 */
export const authAPI = {
  // Register new user
  register: async (userData) => {
    const response = await api.post("/user/auth/register", userData);
    return response.data;
  },

  // Login user
  login: async (credentials) => {
    const response = await api.post("/user/auth/login", credentials);
    if (response.data.success && response.data.data.accessToken) {
      // Store token and user in localStorage
      localStorage.setItem("token", response.data.data.accessToken);
      localStorage.setItem("user", JSON.stringify(response.data.data.user));
    }
    return response.data;
  },

  // Logout user
  logout: async () => {
    const response = await api.post("/user/auth/logout");
    // Clear localStorage
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    return response.data;
  },

  // Get current user profile
  getProfile: async () => {
    const response = await api.get("/user/auth/me");
    return response.data;
  },

  // Change password
  changePassword: async (passwordData) => {
    const response = await api.post("/user/auth/change-password", passwordData);
    return response.data;
  },

  // Forgot password
  forgotPassword: async (email) => {
    const response = await api.post("/user/auth/forgot-password", { email });
    return response.data;
  },

  // Reset password
  resetPassword: async (resetData) => {
    const response = await api.post("/user/auth/reset-password", resetData);
    return response.data;
  },

  // Verify email
  verifyEmail: async (token) => {
    const response = await api.post("/user/auth/verify-email", { token });
    return response.data;
  },

  // Refresh access token
  refreshToken: async () => {
    const response = await api.post("/user/auth/refresh-token");
    if (response.data.success && response.data.data.accessToken) {
      localStorage.setItem("token", response.data.data.accessToken);
    }
    return response.data;
  },
};

export default authAPI;
