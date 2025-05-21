
import React from 'react';

interface AllpFitLogoProps {
  className?: string;
  alt?: string;
}

const AllpFitLogo = ({ className = "", alt = "Allp Fit Logo" }: AllpFitLogoProps) => {
  return (
    <img
      src="/lovable-uploads/5d9478dc-17fb-4bf4-818f-29ae3601532c.png" // Nova imagem da logo
      alt={alt}
      // Definindo um tamanho padrão que pode ser sobrescrito pela prop className
      // block é para garantir que mx-auto funcione corretamente para centralização
      className={`block w-auto h-12 ${className}`} 
    />
  );
};

export default AllpFitLogo;
