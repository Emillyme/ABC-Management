"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { LucideIcon, X } from "lucide-react";
import { usePathname } from "next/navigation";
import useStore from "../../store"; // Importando a store do Zustand
import { Home } from "lucide-react";

const SideBar = () => {
  const [showProjects, setShowProjects] = useState(true); // Para mostrar ou não os projetos
  const [showPriority, setShowPriority] = useState(true); // Para mostrar ou não as prioridades

  const { isSidebarCollapsed, toggleSidebar } = useStore((state) => ({
    isSidebarCollapsed: state.isSidebarCollapsed,
    toggleSidebar: state.toggleSidebar,
  }));

  // Para a sidebar ficar em coluna e fixada no canto esquerdo
  const sidebarClassNames = `fixed flex flex-col h-[100%] justify-between shadow-xl transition-all duration-300 h-full z-40 dark:bg-black overflow-y-auto bg-white ${isSidebarCollapsed ? "w-0 hidden" : "w-64"}`;

  return (
    <div className={sidebarClassNames}>
      <div className="flex h-[100%] w-full flex-col justify-start">
        <div className="z-50 flex min-h-[56px] w-64 items-center justify-between bg-white px-6 pt-3 dark:bg-black">
          <div className="text-left text-xl font-bold text-gray-800 dark:text-white">
            Menu
          </div>
          {!isSidebarCollapsed && (
            <button className="py-3" onClick={toggleSidebar}>
              <X className="h-6 w-6 text-gray-800 hover:text-gray-500 dark:text-white" />
            </button>
          )}
        </div>

        {/* navbar links */}
        <nav className="z-10 w-full">
          <SidebarLink icon={Home} label="Home" href="/" />
        </nav>
      </div>
    </div>
  );
};

interface SidebarLinkProps {
  href: string;
  icon: LucideIcon;
  label: string;
}

const SidebarLink = ({ href, icon: Icon, label }: SidebarLinkProps) => {
  const pathname = usePathname();
  const isActive =
    pathname === href || (pathname === "/" && href === "/dashboard");

  return (
    <Link href={href} className="w-full">
      <div
        className={`relative flex cursor-pointer items-center gap-3 transition-colors hover:bg-gray-100 dark:bg-black dark:hover:bg-gray-700 ${
          isActive ? "bg-gray-100 text-white dark:bg-gray-600" : ""
        } justify-start px-8 py-3`}
      >
        {isActive && (
          <div className="absolute left-0 top-0 h-[100%] w-[5px] bg-blue-200" />
        )}
        <Icon className="h-6 w-6 text-gray-800 dark:text-gray-100" />
        <span className={`font-medium text-gray-800 dark:text-gray-100`}>
          {label}
        </span>
      </div>
    </Link>
  );
};

export default SideBar;
