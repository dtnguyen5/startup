"use client"
// src/components/Button.tsx
import React from "react";
import "../styles/button.css";
import { useRouter } from "next/navigation"; 

interface ButtonProps {
  label: React.ReactNode;  // Umožní předávat jakýkoli React obsah
}

const Button: React.FC<ButtonProps> = ({ label }) => {
  const router = useRouter(); // Tento řádek získá přístup k routeru Next.js, který umožňuje manipulaci s URL a navigací (např. přesměrování na jinou stránku pomocí router.push('/url')).

  // Funkce pro přesměrování na jinou stránku
  const handleClick = () => {
    router.push("/about");  // Přesměrování na stránku /about
  };

  return <button onClick={handleClick}>{label}</button>;  // Použijeme handleClick pro přesměrování
};

export default Button;
