"use client"
import React from "react";
import { useApiStore } from "@/app/state/api";

// Supondo que você tenha o nome do projeto já disponível
type Props = {
  buttonComponent?: React.ReactNode;
  isSmallText?: boolean;
  name: string; // Nome do projeto
};

const Header = ({ buttonComponent, isSmallText = false, name }: Props) => {
  return (
    <div className="mb-5 flex w-full items-center justify-between">
      <h1
        className={`${isSmallText ? "text-lg" : "text-2xl"} font-semibold dark:text-white`}
      >
        {name} {/* Exibindo o nome do projeto aqui */}
      </h1>
      {buttonComponent}
    </div>
  );
};

export default Header;
