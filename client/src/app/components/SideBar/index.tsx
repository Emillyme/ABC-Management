"use client";

import React, { useState } from 'react'
import Image from 'next/image';
import Link from 'next/link';

const SideBar = () => {
    const [showProjects, setShowProjects] = useState(true); // Para mostrar ou não os projetos
    const [showPriority, setShowPriority] = useState(true); // Para mostrar ou não as prioridades

    // Para a sideabar ficar em coluna e fixada no canto esquerdo
    const sidebarClassNames = 'fixed flex flex-col h-[100%] justify-between shadow-xl transition-all duration-300 h-full z-40 dark:bg-black overflow-y-auto bg-white w-64'; 

  return (
    <div className={sidebarClassNames}>
        <div className="flex h-[100%] flex-col w-full justify-start">
            <div className="z-50 flex min-h-[56px] w-64 items-center justify-start bg-white px-6 pt-3 dark:bg-black">
                <div className="text-xl font-bold text-gray-800 dark:text-white text-left">
                    Menu
                </div>
            </div>
            {/* nnavbar links */}
            
        </div>
    </div>
  )
}

export default SideBar;