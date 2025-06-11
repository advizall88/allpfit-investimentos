
import React from 'react';
import AllpFitLogo from '../AllpFitLogo';

const SectionHeader = () => {
  return (
    <div className="text-center mb-16">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-poppins font-bold mb-2">
        Por que investir na{' '}
        <AllpFitLogo className="inline-block h-8 md:h-10 w-auto mx-1 align-middle" alt="Allp Fit Logo" />
        ?
      </h2>
      <p className="text-gray-300 max-w-2xl mx-auto mt-4">
        Descubra por que somos a escolha ideal para o seu próximo
        investimento no mercado fitness em crescimento no Brasil
      </p>
    </div>
  );
};

export default SectionHeader;
