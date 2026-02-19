import axios from "axios";

// Create axios instance pointing to your backend
const api = axios.create({
  baseURL: "https://demosriram.vercel.app/api", // Backend running on port 3000
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

// Track if we're currently refreshing to avoid multiple refresh calls
let isRefreshing = false;
let failedQueue = [];

const processQueue = (error, token = null) => {
  failedQueue.forEach((prom) => {
    if (error) {
      prom.reject(error);
    } else {
      prom.resolve(token);
    }
  });
  failedQueue = [];
  console.log(`📋 Processed queued requests`);
};

// Response Interceptor: Handle 401 (Token Expired) with automatic refresh
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    console.log(
      `❌ Request failed: ${originalRequest?.method?.toUpperCase()} ${originalRequest?.url} - Status: ${error.response?.status}`,
    );

    // If error is 401 and we haven't tried to refresh yet
    if (error.response?.status === 401 && !originalRequest._retry) {
      if (isRefreshing) {
        console.log("⏳ Already refreshing, queueing request...");
        // If already refreshing, queue this request
        return new Promise((resolve, reject) => {
          failedQueue.push({ resolve, reject });
        })
          .then((token) => {
            console.log("✅ Queue processed, retrying with new token");
            // Don't manually set the header, let the request interceptor do it
            delete originalRequest.headers.Authorization;
            return api(originalRequest);
          })
          .catch((err) => Promise.reject(err));
      }

      originalRequest._retry = true;
      isRefreshing = true;
      console.log("🔄 Token expired, attempting refresh...");

      try {
        // Try to refresh the token
        const response = await axios.post(
          "http://localhost:3000/api/user/auth/refresh-token",
          {},
          { withCredentials: true },
        );

        if (response.data.success && response.data.data.accessToken) {
          const newToken = response.data.data.accessToken;
          console.log("✅ Token refreshed successfully");
          console.log(
            `   New token (first 20 chars): ${newToken.substring(0, 20)}...`,
          );
          console.log(`   Saving to localStorage...`);
          localStorage.setItem("token", newToken);
          console.log(
            `   Saved! Token in localStorage (first 20 chars): ${localStorage.getItem("token").substring(0, 20)}...`,
          );

          // Process all queued requests
          processQueue(null, newToken);
          isRefreshing = false;

          // Remove the old Authorization header so the request interceptor adds the new one
          delete originalRequest.headers.Authorization;
          console.log(
            `   Deleted old Authorization header from original request`,
          );

          // Retry the original request
          console.log(
            `🔁 Retrying original request: ${originalRequest.method?.toUpperCase()} ${originalRequest.url}`,
          );
          return api(originalRequest);
        } else {
          throw new Error("Token refresh failed - no access token in response");
        }
      } catch (refreshError) {
        console.error(
          "❌ Token refresh failed:",
          refreshError.response?.data || refreshError.message,
        );
        // Refresh failed, logout user
        processQueue(refreshError, null);
        isRefreshing = false;
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        window.location.href = "/login";
        return Promise.reject(refreshError);
      }
    }

    // For other errors, just reject
    return Promise.reject(error);
  },
);

export default api;
