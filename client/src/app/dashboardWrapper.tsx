'use client';
import React, { useEffect } from 'react';
import Navbar from "@/app/(components)/Navbar";
import Sidebar from "@/app/(components)/Sidebar";
import useStore from '@/app/hooks/useStore';

const DashboardWrapper = ({ children }: { children: React.ReactNode }) => {
  const { isDarkMode, isSidebarCollapsed, toggleDarkMode, toggleSidebar } = useStore();

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  return (
    <div className={`flex min-h-screen w-full ${isDarkMode ? 'bg-dark-bg' : 'bg-gray-50'} text-gray-900`}>
      <Sidebar collapsed={isSidebarCollapsed} toggleSidebar={toggleSidebar} />
      <main className={`flex w-full flex-col ${isDarkMode ? 'dark:bg-dark-bg' : 'bg-gray-50'} ${isSidebarCollapsed ? "" : "md:pl-64"}`}>
        <Navbar/>
        {children}
      </main>
    </div>
  );
};

export default DashboardWrapper;
