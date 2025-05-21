
import React from 'react';

interface AllpFitLogoProps {
  className?: string;
  alt?: string;
}

const AllpFitLogo = ({ className = "", alt = "Allp Fit Logo" }: AllpFitLogoProps) => {
  return (
    <img
      src="/lovable-uploads/cf090e6b-34ea-4780-b44c-c7f724003627.png"
      alt={alt}
      // Definindo um tamanho padrão que pode ser sobrescrito pela prop className
      // block é para garantir que mx-auto funcione corretamente para centralização
      className={`block w-auto h-12 ${className}`} 
    />
  );
};

export default AllpFitLogo;
