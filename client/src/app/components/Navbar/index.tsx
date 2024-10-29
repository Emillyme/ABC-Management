import React from 'react';
import { Settings, Search } from 'lucide-react';
import Image from 'next/image';
import Logo from '../../assets/abc.svg';
import Link from 'next/link';

const Index = () => {
  return (
    <div className="flex items-center justify-between bg-white px-4 py-3 dark:bg-black">
      {/* Logo */}
      <Link
        href="/"
      >
      <div className="flex items-center">
        <Image src={Logo} alt="Logo" width={150} height={150} className="mr-[30px]" />
      </div>
      </Link>
      {/* Search Bar */}
      <div className="flex items-center gap-8">
        <div className="relative flex h-min w-[200px]">
          <Search className="absolute left-[4px] top-1/2 -translate-y-1/2 mr-2 h-5 w-5 transform cursor-pointer dark:text-white" />
          <input
            className="w-full rounded border-none bg-gray-100 p-2 pl-8 placeholder-gray-500 focus:border-transparent focus:outline-none dark:bg-gray-700 dark:text-white dark:placeholder-white"
            type="search"
            placeholder="Pesquise aqui..."
          />
        </div>
      </div>

      {/* Icons para o usuario*/}
      <div className="flex items-center ml-auto">
        <Link href="/settings" className="h-min w-min rounded p-2 hover:bg-gray-100">
          <Settings className="h-5 w-6 cursor-pointer dark:text-white" />
        </Link>
        <div className="ml-2 min-h-[2em] w-[0.1rem] bg-gray-200 hidden md:inline-block"></div>
      </div>
    </div>
  );
};

export default Index;
