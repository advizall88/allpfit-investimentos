
import React from 'react';
import { Button } from '@/components/ui/button';
import AllpFitLogo from './AllpFitLogo';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section 
      style={{ backgroundImage: 'url(/lovable-uploads/312efa3a-d39c-4144-acdf-9c60375d444c.png)' }}
      className="bg-cover bg-center text-white py-20 md:py-32 relative"
    >
      {/* Overlay para melhorar a legibilidade do texto */}
      <div className="absolute inset-0 bg-allpBlack bg-opacity-75"></div>
      
      {/* Conteúdo da Hero Section */}
      <div className="container mx-auto px-6 text-center relative z-10 flex flex-col items-center justify-center min-h-[calc(100vh-160px)] md:min-h-[calc(100vh-256px)]"> {/* Ajuste de altura e centralização */}
        <AllpFitLogo className="mb-8 mx-auto" variant="light" />
        {/* Título e parágrafo removidos conforme solicitado */}
        <Button
          size="lg"
          className="bg-allpOrange hover:bg-orange-700 text-white font-poppins font-semibold text-lg px-10 py-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 animate-pulse-orange mt-8" // Adicionado mt-8 para espaçamento
          onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
        >
          Quero Saber Mais <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;
