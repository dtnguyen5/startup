// src/app/layout.tsx
import "./globals.css"; // Import globálních stylů
import Navbar from "../components/Navbar"; // Import Navbar
import Footer from "../components/Footer"; // Import Footer
import Image from "next/image";

export const metadata = {
  title: "My Next.js App",
  description: "Web vytvořený pomocí Next.js",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>

      <link
            href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap"
            rel="stylesheet"
          />

      </head>
      <body>
        
       {children}
        
      </body>
    </html>
  );
}
