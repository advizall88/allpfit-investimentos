
import React from 'react';

const AllpFitLogo = ({ className = "", variant = "dark" }: { className?: string; variant?: "light" | "dark" }) => {
  const textColor = variant === "light" ? "text-white" : "text-allpBlack";
  return (
    <div className={`font-poppins font-black text-3xl ${textColor} ${className}`}>
      <span className="text-allpOrange">ALLP</span> FIT
    </div>
  );
};

export default AllpFitLogo;
