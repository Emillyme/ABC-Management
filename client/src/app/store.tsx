import React, { useEffect } from 'react';
import useStore from './store'; // sua store Zustand

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
    const { isDarkMode, isSidebarCollapsed } = useStore((state) => ({
    isDarkMode: state.isDarkMode,
    isSidebarCollapsed: state.isSidebarCollapsed,
    }));

  useEffect(() => {
    // Somente altera o DOM se realmente houver uma mudança no modo escuro
    const htmlElement = document.documentElement;
    if (isDarkMode && !htmlElement.classList.contains("dark")) {
      htmlElement.classList.add("dark");
    } else if (!isDarkMode && htmlElement.classList.contains("dark")) {
      htmlElement.classList.remove("dark");
    }
  }, [isDarkMode]); // Dependência no isDarkMode, o que evita loops infinitos

  return (
    <div className="flex min-h-screen w-full bg-gray-50 text-gray-900">
      <Sidebar /> 
      <main
        className={`flex w-full flex-col bg-gray-50 dark:bg-dark-bg ${isSidebarCollapsed ? "" : "md:pl-64"}`}
      >
        <Navbar />
        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;
