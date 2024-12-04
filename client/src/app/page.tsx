"use client";
import { usePathname } from "next/navigation";
import React, { useState, useEffect } from "react";
import { useApiStore } from "@/app/state/api";
import Link from "next/link";

function Home() {
  const { projects, fetchProjects, isLoading, error } = useApiStore();

  return (
    <main className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 p-10">
      {projects?.map((project) => (
        <ProjectsLink
          key={project.id}
          name={project.name}
          description={project.description}
          href={`/projects/${project.id}`}
        />
      ))}
    </main>
  );
}

interface ProjectsProps {
  name: string;
  description?: string;
  href: string;
}

const ProjectsLink = ({ name, description, href }: ProjectsProps) => {
  const pathname = usePathname();
  const isActive = pathname === href || (pathname === "/" && href === "/dashboard");

  return (
    <Link href={href} className="w-full">
      <div className="p-[10px]">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl duration-300 ease-out cursor-pointer w-[290px] h-[200px] dark:bg-black dark:text-white">
          {/* Parte superior roxa */}
          <div className="bg-blue-400 h-[90px]"></div>
          {/* Conteúdo do projeto */}
          <div className="p-4">
            <h3 className="text-xl font-medium">{name}</h3>
            <h5 className="text-slate-400">{description}</h5>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Home;
