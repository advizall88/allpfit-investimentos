
import React from 'react';
import AllpFitLogo from './AllpFitLogo';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-allpBlack text-gray-400 py-8">
      <div className="container mx-auto px-6 text-center">
        <AllpFitLogo className="mb-4 mx-auto" alt="Allp Fit Logo Principal do Rodapé" />
        <p className="text-sm flex items-center justify-center">
          &copy; {currentYear}&nbsp;<AllpFitLogo className="inline-block h-4 w-auto mx-1 align-middle" alt="Allp Fit Logo" />. Todos os direitos reservados.
        </p>
        <p className="text-xs mt-2">
          Este material tem caráter meramente informativo e não constitui uma oferta de investimento.
        </p>
        {/* Add social media links if available */}
      </div>
    </footer>
  );
};

export default Footer;
