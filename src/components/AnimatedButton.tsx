
import React, { useState } from 'react';
import { Button } from './ui/button';

interface AnimatedButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link';
  size?: 'default' | 'sm' | 'lg' | 'icon';
  className?: string;
  pulse?: boolean;
  glow?: boolean;
}

const AnimatedButton: React.FC<AnimatedButtonProps> = ({
  children,
  onClick,
  variant = 'default',
  size = 'default',
  className = '',
  pulse = false,
  glow = false
}) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
    setTimeout(() => setIsClicked(false), 300);
    onClick?.();
  };

  const baseClasses = `
    relative overflow-hidden transform transition-all duration-300 ease-out
    hover:scale-105 hover:-translate-y-1 active:scale-95 active:translate-y-0
    ${pulse ? 'animate-pulse-orange' : ''}
    ${glow ? 'shadow-lg shadow-allpOrange/30 hover:shadow-xl hover:shadow-allpOrange/50' : ''}
  `;

  const rippleClasses = isClicked 
    ? 'absolute inset-0 bg-white/20 rounded-full animate-ping'
    : 'hidden';

  return (
    <Button
      variant={variant}
      size={size}
      onClick={handleClick}
      className={`${baseClasses} ${className} group`}
    >
      <span className={rippleClasses} />
      <span className="relative z-10 transition-all duration-200 group-hover:text-white">
        {children}
      </span>
      
      {/* Gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-r from-allpOrange/0 via-allpOrange/10 to-allpPurple/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </Button>
  );
};

export default AnimatedButton;
