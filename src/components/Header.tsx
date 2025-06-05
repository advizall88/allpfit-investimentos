
import React from 'react';
import AllpFitLogo from './AllpFitLogo';

const Header = () => {
  return (
    <header className="bg-allpBlack py-4 px-6">
      <div className="container mx-auto">
        <AllpFitLogo className="h-12" alt="Allp Fit Logo" />
      </div>
    </header>
  );
};

export default Header;
