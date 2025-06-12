
import React from 'react';
import { useCustomCursor } from '../hooks/useCustomCursor';

const CustomCursor = () => {
  const { position, isHovering } = useCustomCursor();

  return (
    <>
      {/* Main cursor */}
      <div
        className={`fixed pointer-events-none z-[9999] transition-all duration-200 ease-out ${
          isHovering ? 'scale-150' : 'scale-100'
        }`}
        style={{
          left: position.x - 8,
          top: position.y - 8,
        }}
      >
        <div 
          className={`w-4 h-4 rounded-full transition-all duration-200 ${
            isHovering 
              ? 'bg-gradient-to-r from-allpOrange to-orange-400 shadow-lg shadow-allpOrange/50' 
              : 'bg-white/80 backdrop-blur-sm'
          }`} 
        />
      </div>
      
      {/* Trail effect */}
      <div
        className="fixed pointer-events-none z-[9998] transition-all duration-500 ease-out"
        style={{
          left: position.x - 16,
          top: position.y - 16,
        }}
      >
        <div 
          className={`w-8 h-8 rounded-full transition-all duration-500 ${
            isHovering 
              ? 'bg-gradient-to-r from-allpOrange/20 to-allpPurple/20 scale-150' 
              : 'bg-white/10 scale-100'
          }`}
          style={{ backdropFilter: 'blur(10px)' }}
        />
      </div>
    </>
  );
};

export default CustomCursor;
