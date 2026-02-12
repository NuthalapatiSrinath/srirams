import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import AppRoutes from "./routes/AppRoutes";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            background: "#333",
            color: "#fff",
          },
        }}
      />
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
