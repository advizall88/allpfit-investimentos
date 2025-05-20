
import React from 'react';
import { Button } from '@/components/ui/button';
import AllpFitLogo from './AllpFitLogo';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="bg-allpBlack text-white py-20 md:py-32">
      <div className="container mx-auto px-6 text-center">
        <AllpFitLogo className="mb-8 mx-auto" variant="light" />
        <h1 className="text-4xl md:text-6xl font-poppins font-black mb-6 leading-tight">
          Invista no <span className="text-allpOrange">Futuro do Fitness</span> com a Allp Fit
        </h1>
        <p className="text-xl md:text-2xl font-light mb-10 max-w-3xl mx-auto">
          Participe do crescimento da academia mais inovadora do Brasil.
        </p>
        <Button
          size="lg"
          className="bg-allpOrange hover:bg-orange-700 text-white font-poppins font-semibold text-lg px-10 py-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 animate-pulse-orange"
          onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
        >
          Quero Saber Mais <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;
