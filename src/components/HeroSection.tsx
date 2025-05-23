
import React from 'react';
import { Button } from '@/components/ui/button';
import AllpFitLogo from './AllpFitLogo';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  const handleWhatsAppRedirect = () => {
    window.open('https://wa.me/5567998184460?text=Ol%C3%A1!%20Acabei%20de%20vir%20da%20landing%20page%20e%20quero%20saber%20mais%20sobre%20o%20lan%C3%A7amento!', '_blank');
  };

  return (
    <section 
      style={{ backgroundImage: 'url(/lovable-uploads/cbeddab1-80a3-4323-b7cf-7bbd88cadd01.png)' }}
      className="bg-cover bg-center text-white py-20 md:py-32 relative"
    >
      {/* Overlay para melhorar a legibilidade do texto */}
      <div className="absolute inset-0 bg-allpBlack bg-opacity-60"></div>
      
      {/* Conteúdo da Hero Section */}
      <div className="container mx-auto px-6 text-center relative z-10 flex flex-col items-center justify-center min-h-[calc(100vh-160px)] md:min-h-[calc(100vh-256px)]">
        <AllpFitLogo className="mb-8" alt="Allp Fit Logo Principal Hero" />
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-poppins font-black mb-6 leading-tight max-w-4xl">
          Participe do maior investimento fitness acessível do país
        </h1>
        <p className="text-xl md:text-2xl lg:text-3xl font-poppins font-medium mb-6 max-w-3xl text-allpOrange">
          Aproveite essa oportunidade, com lucro de 26 a 40%. Cotas a partir de R$50 mil
        </p>
        <p className="text-lg md:text-xl lg:text-2xl font-poppins font-light mb-10 max-w-3xl">
          Aproveite essa oportunidade, com lucro de 26% a 40%, com cotas a partir de R$50 mil
        </p>
        <Button
          size="lg"
          className="bg-allpOrange hover:bg-orange-700 text-white font-poppins font-semibold text-lg px-10 py-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 animate-pulse-orange"
          onClick={handleWhatsAppRedirect}
        >
          Quero ser investidor <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;
