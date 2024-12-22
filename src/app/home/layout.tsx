// src/app/home/layout.tsx
import "../globals.css";  // Import globálních stylů // Import Navbar komponenty
import Footer from "../../components/Footer"; // Import Footer komponenty

export const metadata = {
  title: "Home - My Next.js App",
  description: "Welcome to our homepage",
};

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <main>{children}</main> {/* Zobrazí obsah pro tuto konkrétní stránku */}
     
    </>
  );
}
