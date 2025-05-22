
import React from 'react';
import { Button } from '@/components/ui/button';
import AllpFitLogo from './AllpFitLogo';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section 
      style={{ backgroundImage: 'url(/lovable-uploads/ac8e6c96-9d03-47ff-bcbb-103a228876b1.png)' }}
      className="bg-cover bg-center text-white py-20 md:py-32 relative"
    >
      {/* Overlay para melhorar a legibilidade do texto */}
      <div className="absolute inset-0 bg-allpBlack bg-opacity-60"></div>
      
      {/* Conteúdo da Hero Section */}
      <div className="container mx-auto px-6 text-left relative z-10 flex flex-col items-start justify-center min-h-[calc(100vh-160px)] md:min-h-[calc(100vh-256px)]">
        <AllpFitLogo className="mb-8" alt="Allp Fit Logo Principal Hero" />
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-poppins font-black mb-6 leading-tight max-w-4xl">
          Invista na primeira rede de academias top to all do Brasil
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl font-poppins font-light mb-10 max-w-3xl">
          Torne-se sócio de uma academia de alto padrão com equipamentos Matrix, metodologia exclusiva e retorno real sobre seu capital.
        </p>
        <Button
          size="lg"
          className="bg-allpOrange hover:bg-orange-700 text-white font-poppins font-semibold text-lg px-10 py-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 animate-pulse-orange"
          onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
        >
          Quero ser investidor <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;

