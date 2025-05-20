
import React from 'react';
import AllpFitLogo from './AllpFitLogo';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-allpBlack text-gray-400 py-8">
      <div className="container mx-auto px-6 text-center">
        <AllpFitLogo className="mb-4 mx-auto" variant="light" />
        <p className="text-sm">
          &copy; {currentYear} Allp Fit. Todos os direitos reservados.
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
