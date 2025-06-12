
import React, { useEffect, useState } from 'react';
import AllpFitLogo from './AllpFitLogo';
import LoginButton from './LoginButton';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 py-4 px-6 transition-all duration-500 ease-in-out ${
        isScrolled 
          ? 'bg-allpPurple/20 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-allpPurple/10' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex-1 flex justify-center">
          <div className={`transition-all duration-500 ${isScrolled ? 'scale-90' : 'scale-100'}`}>
            <AllpFitLogo className="h-12" alt="Allp Fit Logo" />
          </div>
        </div>
        <div className="absolute right-6">
          <LoginButton />
        </div>
      </div>
    </header>
  );
};

export default Header;
