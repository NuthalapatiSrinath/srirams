import axios from "axios";

// Create axios instance pointing to your backend
const api = axios.create({
  baseURL: "https://demosriram.vercel.app/api", // Your Vercel backend URL
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true, // Enable cookies for refresh token
});

// Request Interceptor: Attach Token
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
      console.log(
        `🔑 Attaching token to ${config.method?.toUpperCase()} ${config.url}`,
      );
      console.log(`   Token (first 20 chars): ${token.substring(0, 20)}...`);
    } else {
      console.warn(
        `⚠️ No token found for ${config.method?.toUpperCase()} ${config.url}`,
      );
    }
    return config;
  },
  (error) => Promise.reject(error),
);

// Response Interceptor: Handle 401 (Token Expired) - Simple redirect to login
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      // Don't redirect if this is a login request failing (wrong credentials)
      const isLoginRequest = error.config?.url?.includes("/auth/login");

      if (!isLoginRequest) {
        // Token expired or invalid - clear storage and redirect to login
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        window.location.href = "/login";
      }
    }
    return Promise.reject(error);
  },
);

export default api;
