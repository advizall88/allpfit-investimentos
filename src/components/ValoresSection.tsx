
import React from 'react';
import AllpFitLogo from './AllpFitLogo'; // Importando o componente do logo

const ValoresSection = () => {
  return (
    <section id="valores" className="py-16 md:py-24 bg-allpBlack text-white">
      <div className="container mx-auto px-6 flex flex-col items-center text-center">
        <AllpFitLogo className="h-16 md:h-20 mb-8" alt="Allp Fit Logo Valores" />
        
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-poppins font-black text-allpOrange mb-4">
          R$50.000
        </h2>
        <p className="text-lg md:text-xl font-poppins text-gray-300">
          ou 5x de R$10.000
        </p>
        {/* Adicionar um botão de CTA aqui pode ser uma boa ideia no futuro */}
      </div>
    </section>
  );
};

export default ValoresSection;
