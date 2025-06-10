
import React from 'react';
import { Baby, Waves, Sparkles, Briefcase, Pill, Smartphone } from 'lucide-react';

const AllpFitRevolutionSection = () => {
  const features = [
    {
      icon: <Baby className="h-8 w-8 text-allpOrange" />,
      title: "ESPAÇO KIDS"
    },
    {
      icon: <Waves className="h-8 w-8 text-allpOrange" />,
      title: "SAUNA"
    },
    {
      icon: <Sparkles className="h-8 w-8 text-allpOrange" />,
      title: "SPA"
    },
    {
      icon: <Briefcase className="h-8 w-8 text-allpOrange" />,
      title: "SALA VIP PARA TRABALHO"
    },
    {
      icon: <Pill className="h-8 w-8 text-allpOrange" />,
      title: "PORÇÃO DE SUPLEMENTOS"
    },
    {
      icon: <Smartphone className="h-8 w-8 text-allpOrange" />,
      title: "APLICATIVO PARA TREINO"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-allpPurple text-white relative overflow-hidden">
      {/* Background overlay pattern */}
      <div className="absolute inset-0 bg-opacity-30 bg-[502a91] bg-transparent"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-poppins font-bold mb-6">
            A <span className="text-allpOrange">ALLP FIT</span> REPRESENTA<br />
            UMA <span className="text-allpOrange">REVOLUÇÃO</span> NO MERCADO<br />
            <span className="text-allpOrange">DE ACADEMIAS</span> NO BRASIL.
          </h2>
          <p className="text-lg md:text-xl font-poppins font-medium max-w-3xl mx-auto">
            Com o conceito <span className="text-allpOrange font-bold">TOP TO ALL</span>, estamos empenhados em oferecer <span className="text-allpOrange font-bold">o melhor para todos</span>, em uma experiência 360° de saúde e bem-estar.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-8 text-center hover:bg-white/15 transition-all duration-300 hover:scale-105 hover:shadow-2xl group"
            >
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-white/10 rounded-full group-hover:bg-white/20 transition-all duration-300">
                  {feature.icon}
                </div>
              </div>
              <h3 className="text-white font-poppins font-bold text-sm md:text-base leading-tight">
                {feature.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AllpFitRevolutionSection;
