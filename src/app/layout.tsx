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
    
      <body>
        
       {children}
        
      </body>
    </html>
  );
}
