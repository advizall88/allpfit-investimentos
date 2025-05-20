import React from 'react';
import { TrendingUp, Award, Users, Handshake, Check, DollarSign } from 'lucide-react';
import { Button } from '@/components/ui/button';

const features = [
  {
    icon: <TrendingUp className="h-10 w-10 text-allpOrange mb-3" />,
    title: "Mercado em Expansão",
    description: "R$ 8 bilhões/ano no Brasil. O setor fitness não para de crescer."
  },
  {
    icon: <Award className="h-10 w-10 text-allpOrange mb-3" />,
    title: "Estrutura Premium",
    description: "Equipamentos de ponta Matrix® para a melhor experiência."
  },
  {
    icon: <Users className="h-10 w-10 text-allpOrange mb-3" />,
    title: "Conceito Top to All",
    description: "O melhor do fitness, acessível a todos os públicos."
  },
  {
    icon: <Handshake className="h-10 w-10 text-allpOrange mb-3" />,
    title: "Suporte Completo",
    description: "Acompanhamento em todas as fases do seu investimento e do negócio."
  },
  {
    icon: <Check className="h-10 w-10 text-allpOrange mb-3" />,
    title: "Infraestrutura Moderna",
    description: "Local com estacionamento, acessibilidade e design inovador."
  },
  {
    icon: <DollarSign className="h-10 w-10 text-allpOrange mb-3" />,
    title: "Ticket Médio Atrativo",
    description: "R$ 146,60, otimizando a rentabilidade por aluno."
  }
];

const WhyInvestSection = () => {
  return (
    <section id="why-invest" className="py-16 md:py-24 bg-allpBlack text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-poppins font-bold text-center mb-12">
          Por que investir na <span className="text-allpOrange">Allp Fit</span>?
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-allpPurple p-6 rounded-lg shadow-lg flex flex-col items-center text-center transform transition-transform hover:scale-105">
              {feature.icon}
              <h3 className="text-xl font-poppins font-semibold mb-2 text-allpOrange">{feature.title}</h3>
              <p className="text-gray-300 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Button 
            size="lg" 
            className="bg-allpOrange text-white hover:bg-allpOrange/90 font-poppins font-semibold px-8 py-3 text-lg animate-pulse-orange"
            // Adicionar um onClick apropriado quando a funcionalidade for definida
            // onClick={() => console.log('Botão "quero fazer parte" clicado!')}
          >
            QUERO FAZER PARTE
          </Button>
        </div>
      </div>
    </section>
  );
};

export default WhyInvestSection;
