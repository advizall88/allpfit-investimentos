
import React from 'react';
import AllpFitLogo from './AllpFitLogo';

const Header = () => {
  return (
    <header className="py-4 px-6">
      <div className="container mx-auto flex justify-center">
        <AllpFitLogo className="h-12" alt="Allp Fit Logo" />
      </div>
    </header>
  );
};

export default Header;
