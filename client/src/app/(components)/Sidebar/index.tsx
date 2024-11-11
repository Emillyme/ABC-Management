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
  const [showPriority, setShowPriority] = useState(true)

  const sidebarClassNames = `fixed flex flex-col h-[100%] justify-between shadow-xl
  transition-all duration-300 h-full z-40 dark:bg-black overflow-y-auto bg-white`;  

  return (
    <div className={sidebarClassNames}>
      <div className="flex h-[100%] w-full flex-col justify-start">
        <div className="z-50 flex min-h-[56px] w-64 items-center justify-between bg-white px-6 pt-3 dark:bg-black">
        <Link href="/">
          <Image
            src={isDarkMode ? LogoWhite : Logo}
            alt="Logo"
            width={150}
            height={150}
            className="mr-[13px]"
          />
        </Link>
                      {/* <div className={`w-${collapsed ? '16' : '64'} bg-gray-800`}>
                    <button onClick={toggleSidebar}>Toggle Sidebar</button>
                  </div> */}
        </div>
      </div>
    </div>
  )
}

export default Sidebar