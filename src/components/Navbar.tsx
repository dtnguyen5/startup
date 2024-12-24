"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import "../styles/navbar.css";

const Navbar = () => {
  const navLinks: { label: string; href: string }[] = [
    { label: "Domů", href: "/" },
    { label: "O nás", href: "/about" },
    { label: "Kontakty", href: "/contacts" },
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
                width={80} // Nastavení šířky
                height={100} // Nastavení výšky
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

              {navLinks.map((link) => (  // Mapovací funkce iteruje přes každou položku pole `navLinks`. `link` je aktuální objekt z pole (např. { label: "Domů", href: "/" }).
                <li key={link.label}>
                   {/* Každá položka seznamu má unikátní klíč `key`. Zde používáme `label` jako unikátní identifikátor. */}
                   
                  <Link href={link.href}>{link.label}</Link> {/* Komponenta `<Link>` z Next.js vytváří odkaz.
                                                                `href` je URL (např. "/", "/about"), která pochází z `link.href`.
                                                                `{link.label}` je text odkazu (např. "Domů", "O nás"). */}
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
