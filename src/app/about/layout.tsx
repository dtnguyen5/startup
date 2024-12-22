// src/app/about/layout.tsx
import "../globals.css";  // Import globálních stylů
import Footer from "../../components/Footer";

export const metadata = {
  title: "About Us - My Next.js App",
  description: "Learn more about our application and team",
};

export default function AboutLayout({
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
