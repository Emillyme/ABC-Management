"use client";

import React, { useEffect } from 'react';
import Navbar from "./components/Navbar";
import Sidebar from "./components/SideBar";
import useStore from './store';


const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const { isDarkMode, isSidebarCollapsed } = useStore((state) => ({
    isDarkMode: state.isDarkMode,
    isSidebarCollapsed: state.isSidebarCollapsed,
  }));

  useEffect(() => {
    const html = document.documentElement;
    if (isDarkMode && !html.classList.contains("dark")) {
      html.classList.add("dark");
    } else if (!isDarkMode && html.classList.contains("dark")) {
      html.classList.remove("dark");
    }
  }, [isDarkMode]); 
   

  return (
    <div className="flex min-h-screen w-full bg-gray-50 text-gray-900">
      <Sidebar /> {/* Passando estado para Sidebar, se necessário */}
      <main
        className={`flex w-full flex-col bg-gray-50 dark:bg-dark-bg ${
          isSidebarCollapsed ? "" : "md:pl-64"
        }`}
      >
        <Navbar />
        {children}
      </main>
    </div>
  );
};

const DashboardWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <DashboardLayout>
      {children}
    </DashboardLayout>
  );
};
 
export default DashboardWrapper;
