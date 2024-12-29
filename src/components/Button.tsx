"use client"
// src/components/Button.tsx
import React from "react";
import "../styles/button.css";
import { useRouter } from "next/navigation"; 

interface ButtonProps {
  label: React.ReactNode; // Umožní předávat jakýkoli React obsah
  target: string;  // Cílová URL
}

const Button: React.FC<ButtonProps> = ({ label, target }) => {
  const router = useRouter(); // Tento řádek získá přístup k routeru Next.js, který umožňuje manipulaci s URL a navigací (např. přesměrování na jinou stránku pomocí router.push('/url')).

  // Funkce pro přesměrování na jinou stránku
  const handleClick = () => {
    router.push(target);  // TypeScript správně vidí 'target'
  };

  return <button onClick={handleClick}>{label}</button>;  // Použijeme handleClick pro přesměrování
};

export default Button;
