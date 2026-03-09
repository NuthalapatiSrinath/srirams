import React from "react";
import { Outlet } from "react-router-dom";
import ModernTopbar from "./ModernTopbar";
import Footer from "./Footer";

const MainLayout = () => {
  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans flex flex-col">
      <ModernTopbar />

      <main className="flex-1 w-full">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default MainLayout;
