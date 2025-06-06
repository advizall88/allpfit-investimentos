
import React from 'react';
import AllpFitLogo from './AllpFitLogo';
import LoginButton from './LoginButton';

const Header = () => {
  return (
    <header className="py-4 px-6 bg-purple-900 bg-[470e75]">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex-1 flex justify-center">
          <AllpFitLogo className="h-12" alt="Allp Fit Logo" />
        </div>
        <div className="absolute right-6">
          <LoginButton />
        </div>
      </div>
    </header>
  );
};

export default Header;
