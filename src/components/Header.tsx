
import React, { useEffect, useState } from 'react';
import AllpFitLogo from './AllpFitLogo';
import LoginButton from './LoginButton';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollDirection, setScrollDirection] = useState('up');
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      
      // Detect scroll direction
      if (scrollPosition > lastScrollY) {
        setScrollDirection('down');
      } else {
        setScrollDirection('up');
      }
      setLastScrollY(scrollPosition);
      
      // Set scrolled state
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
        isScrolled 
          ? `bg-gradient-to-r from-allpBlack/80 via-allpPurple/20 to-allpBlack/80 backdrop-blur-xl border-b border-white/10 shadow-2xl shadow-allpPurple/20 ${
              scrollDirection === 'down' ? 'py-2' : 'py-3'
            }`
          : 'bg-transparent py-4'
      }`}
      style={{
        backdropFilter: isScrolled ? 'blur(20px) saturate(180%)' : 'none',
      }}
    >
      <div className="container mx-auto flex justify-between items-center px-6">
        <div className="flex-1 flex justify-center">
          <div className={`transition-all duration-500 transform hover:scale-105 ${
            isScrolled && scrollDirection === 'down' ? 'scale-75' : 'scale-100'
          }`}>
            <AllpFitLogo 
              className={`transition-all duration-500 ${
                isScrolled && scrollDirection === 'down' ? 'h-8' : 'h-12'
              }`} 
              alt="Allp Fit Logo" 
            />
          </div>
        </div>
        <div className="absolute right-6">
          <LoginButton />
        </div>
      </div>
      
      {/* Glassmorphism glow effect */}
      {isScrolled && (
        <div className="absolute inset-0 bg-gradient-to-r from-allpOrange/5 via-transparent to-allpPurple/5 pointer-events-none" />
      )}
    </header>
  );
};

export default Header;
