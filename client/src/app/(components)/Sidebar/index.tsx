"use client";

import {
  AlertCircle,
  AlertOctagon,
  AlertTriangle,
  Briefcase,
  ChevronDown,
  ChevronUp,
  Home,
  Layers3,
  LockIcon,
  LucideIcon,
  Search,
  Settings,
  ShieldAlert,
  User,
  Users,
  X,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import LogoWhite from '../../../../public/abcWhite.svg';
import Logo from '../../../../public/abc.svg';
import React, { useState } from "react";
import useStore from '../../hooks/useStore';

const Sidebar = ({ collapsed, toggleSidebar }: { collapsed: boolean, toggleSidebar: () => void }) => {
  const { isDarkMode, toggleDarkMode } = useStore();  // Acessa Zustand
  const [showProjects, setShowProjects] = useState(true)

  const sidebarClassNames = `fixed flex flex-col h-[100%] justify-between shadow-xl
  transition-all duration-300 h-full z-40 dark:bg-black overflow-y-auto bg-white ${collapsed ? "w-0 hidden" : "w-64"}`;  

  return (
    <div className={sidebarClassNames}>
      <div className="flex h-[100%] w-full flex-col justify-start">
        <div className="z-50 flex min-h-[56px] w-64 items-center justify-between bg-white px-6 pt-3 mb-2 dark:bg-black">
        <div className="text-xl font-bold text-gray-800 dark:text-white">
            Menu
          </div>
          {collapsed ? null : (
            <button className="py-3" onClick={toggleSidebar}>
              <X className="h-8 w-8 dark:text-white" />
            </button>
          )}
        </div>
        <div className="flex items-center gap-5 border-t-[1.5px] border-gray-200 px-8 dark:border-gray-700"/>
        
        {/* NAVBAR LINKS */}
        <nav className="z-10 w-full">
          <SidebarLink icon={Home} label="Inicio" href="/" />
          <SidebarLink icon={Search} label="Pesquisar" href="/search" />
          <SidebarLink icon={Settings} label="Configurações" href="/settings" />
          <SidebarLink icon={User} label="Usuarios" href="/users" />
          <SidebarLink icon={Users} label="Times" href="/teams" />
        </nav>

        <button onClick={() => setShowProjects((prev) => !prev)} className="flex w-full items-center justify-between px-8 py-3 text-gray-500">
          <span className="">Eventos</span>
          {showProjects ? (
            <ChevronUp className="h-5 w-5"/>
          ):
            <ChevronDown className="h-5 w-5"/>
          }
        </button>
        {/* LISTA DE PROJETOS/EVENTOS */}

      </div>
    </div>
  )
}

// PROPS
interface SidebarLinkProps {
  href: string;
  icon: LucideIcon;
  label: string;
  // isCollapsed: boolean;
}

const SidebarLink = ({
  href,
  icon: Icon,
  label,
  // isCollapsed,
}: SidebarLinkProps) => {
  const pathname = usePathname();
  const isActive = pathname === href || (pathname === "/" && href === "/dashboard");
  // const screenWidth = window.innerWidth;

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

export default Sidebar