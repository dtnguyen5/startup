// src/components/Button.tsx
import React from "react";

interface FeatureProps {
    number: string; // Typ pro číslo (např. "01") jako string
    title: string;  
  }

  const Feature: React.FC<FeatureProps> = ({ number, title }) => {
    return (
        
      <div className="flex flex-row items-center gap-5">

        <h2 className="text-[2rem] text-[#0F294F] font-inter font-bold">{number}</h2>
        <hr className="h-[3px] w-8 bg-[#0F294F]" />
        <h2 className="text-[1.4rem] text-[#0F294F] font-inter font-bold">{title}</h2>

      </div>
    );
  };
  export default Feature;