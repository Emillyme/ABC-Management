import React from "react";
import { Menu, Moon, Search, Settings, Sun, User } from "lucide-react";
import  useStore  from "@/app/hooks/useStore";
// import { useAppDispatch, useAppSelector } from "@/app/redux";
// import { setIsDarkMode, setIsSidebarCollapsed } from "@/state";
// import { useGetAuthUserQuery } from "@/state/api";
// import { signOut } from "aws-amplify/auth";
// import Image from "next/image";
import Image from "next/image";
import Link from "next/link";
import LogoWhite from '../../../../public/abcWhite.svg';
import Logo from '../../../../public/abc.svg';

const Navbar = () => {
    const { isSidebarCollapsed, toggleSidebar, isDarkMode, toggleDarkMode } = useStore();  // Acessa Zustand

    return (
    <div className="flex items-center justify-between bg-white px-4 py-3 dark:bg-black">
        <div className="flex items-center gap-8">
            {!isSidebarCollapsed ? null : (
                <button onClick={toggleSidebar}>
                    <Menu className="h-8 w-8 ml-3 dark:text-white" />
                </button>
            )}
            {/* LOGO */}
            <Link href="/">
            <Image
                src={isDarkMode ? LogoWhite : Logo}
                alt="Logo"
                width={150}
                height={150}
                className="mr-[10px]"
            />
            </Link>
            <div className="relative flex h-min w-[200px]">
                <Search className="absolute left-[4px] top-1/2 mr-2 h-5 w-5 -translate-y-1/2 transform cursor-pointer dark:text-white" />
                <input
                    className="w-full rounded border-none bg-gray-100 p-2 pl-8 placeholder-gray-500 focus:border-transparent focus:outline-none dark:bg-gray-700 dark:text-white dark:placeholder-white"
                    type="search"
                    placeholder="Pesquisar..."
                />
            </div>
        </div>

        {/* Icons */}
        <div className="flex items-center">
            <button onClick={toggleDarkMode} className={isDarkMode ? 'rounded p-2 dark:hover:bg-gray-700' : 'rounded p-2 hover:bg-gray-100'}>
                {isDarkMode ? <Sun className="h-6 w-6 cursor-pointer dark:text-white" /> : <Moon className="h-6 w-6 cursor-pointer dark:text-white" />}
            </button>
            <Link
            href="/settings"
            className={isDarkMode ? 'h-min w-min rounded p-2 dark:hover:bg-gray-700' : 'h-min w-min rounded p-2 hover:bg-gray-100'}
            >
                <Settings className="h-6 w-6 cursor-pointer dark:text-white" />
            </Link>
            <div className="ml-2 mr-5 hidden min-h-[2em] w-[0.1rem] bg-gray-200 md:inline-block"></div>
        </div>

        
    </div>
  )
}

export default Navbar