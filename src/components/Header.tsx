import React from 'react';
import AllpFitLogo from './AllpFitLogo';
const Header = () => {
  return <header className="py-4 px-6 bg-purple-900 bg-[470e75]">
      <div className="container mx-auto flex justify-center">
        <AllpFitLogo className="h-12" alt="Allp Fit Logo" />
      </div>
    </header>;
};
export default Header;