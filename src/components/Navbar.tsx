"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import "../styles/navbar.css";

const Navbar = () => {
  const navLinks: { label: string; href: string }[] = [
    { label: "Domů", href: "/" },
    { label: "O nás", href: "/about" },
    { label: "Kontakty", href: "/contact" },
  ];

  return (
    <div className="Main_navbar">
      <div className="Navbar">
        <div className="Navbar_Space">
          {/* Logo nebo obrázek */}
          <div className="Navbar_obsah flex items-center">
            <div>
              {/* Použití Image komponenty s absolutní cestou */}
              <Image
                src="/Images/TagifyLogo.svg" // Cesta k obrázku ve složce public
                alt="Logo"
                width={50} // Nastavení šířky
                height={50} // Nastavení výšky
                className="TagifyLogo"
              />
            </div>
            <div>
              <h1 className="Nazev">Tagify</h1>
            </div>
          </div>

          {/* Navigační menu */}
          <nav>
            <ul>
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
