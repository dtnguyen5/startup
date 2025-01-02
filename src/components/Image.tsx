import Image from "next/image"; // Import Image komponenty z Next.js
import React from "react";
import "../styles/background.css";

export default function HomePage() {
  return (
    <div>
      <Image
        src="/background.jpg"
        alt="Pozadí obrázku"
        width={1000}  // Můžeš nastavit šířku podle potřeby
        height={500}  // Můžeš nastavit výšku podle potřeby
      />
    </div>
  );
}
