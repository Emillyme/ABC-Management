"use client";
import { useEffect, useState } from 'react';
import Navbar from "@/app/(components)/Navbar";
import Sidebar from "@/app/(components)/Sidebar";
import LoadingSpinner from "@/app/(components)/LoadingSpinner";
import useStore from '@/app/state/useStore';

const DashboardWrapper = ({ children }: { children: React.ReactNode }) => {
  const { isDarkMode, isSidebarCollapsed, toggleDarkMode, toggleSidebar } = useStore();
  const [isLoading, setIsLoading] = useState(true);

  // UseEffect para aplicar a classe 'dark' no document
  useEffect(() => {
    if (typeof document !== 'undefined') {
      const htmlElement = document.documentElement;
      if (isDarkMode) {
        htmlElement.classList.add('dark');
      } else {
        htmlElement.classList.remove('dark');
      }
    }
  }, [isDarkMode]); // Aplica ou remove a classe 'dark' sempre que o estado de isDarkMode mudar

  useEffect(() => {
    const loadData = async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000)); 
      setIsLoading(false);
    };
    loadData();
  }, []);

  // Se ainda estiver carregando, exibe o LoadingSpinner
  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <div className={`flex min-h-screen w-full ${isDarkMode ? 'bg-dark-bg' : 'bg-gray-50'} text-gray-900`}>
      <Sidebar collapsed={isSidebarCollapsed} toggleSidebar={toggleSidebar} />
      <main className={`flex w-full flex-col ${isDarkMode ? 'dark:bg-dark-bg' : 'bg-gray-50'} ${isSidebarCollapsed ? "" : "md:pl-64"}`}>
        <Navbar />
        {children}
      </main>
    </div>
  );
};

export default DashboardWrapper;
