import React from "react";
import { Outlet } from "react-router-dom";
import ModernTopbar from "./ModernTopbar";
import Footer from "./Footer";

const MainLayout = () => {
  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans flex flex-col">
      <ModernTopbar />

      <main className="flex-1 w-full pt-10 md:pt-12 lg:pt-20">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default MainLayout;
