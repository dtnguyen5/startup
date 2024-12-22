// src/app/contact/layout.tsx
import Footer from "../../components/Footer"; // Import Footer komponenty
import Navbar from "../../components/Navbar"; // Import Navbar komponenty

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Navbar /> {/* Zobrazí Navbar pro /contact */}
      <h2>Contact Page Layout</h2>
      <div>{children}</div> {/* Zobrazí obsah stránky */}
      <Footer /> {/* Zobrazí Footer pro /contact */}
    </div>
  );
}
