// src/api/contactAPI.js
import api from "./axiosInstance";

/**
 * Contact Form API
 */
export const contactAPI = {
  // Submit contact form
  submitContact: async (contactData) => {
    const response = await api.post("/user/contact", contactData);
    return response.data;
  },
};

export default contactAPI;
