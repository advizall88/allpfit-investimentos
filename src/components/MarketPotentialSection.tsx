
import React from 'react';
import { BarChart, Users } from 'lucide-react'; // Usando BarChart para mercado e Users para população

const marketData = [
  {
    icon: <BarChart className="h-12 w-12 text-allpOrange mb-4" />,
    fact: "2º Maior Mercado Mundial",
    description: "O Brasil possui o segundo maior mercado de academias em número de estabelecimentos."
  },
  {
    icon: <Users className="h-12 w-12 text-allpOrange mb-4" />,
    fact: "4ª Maior População Fitness",
    description: "Somos a quarta nação com mais frequentadores de academias no planeta."
  },
];

const MarketPotentialSection = () => {
  return (
    <section id="market-potential" className="py-16 md:py-24 bg-allpBlack text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-poppins font-bold text-center mb-12">
          Potencial de Mercado <span className="text-allpOrange">Explosivo</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-8 mb-10">
          {marketData.map((data, index) => (
            <div key={index} className="bg-allpPurple p-8 rounded-lg shadow-xl text-center flex flex-col items-center">
              {data.icon}
              <h3 className="text-2xl font-poppins font-semibold mb-2 text-allpOrange">{data.fact}</h3>
              <p className="text-gray-300">{data.description}</p>
            </div>
          ))}
        </div>
        <p className="text-xl text-center text-gray-300 max-w-3xl mx-auto">
          O mercado fitness no Brasil apresenta uma demanda crescente por saúde, bem-estar e performance, abrindo um vasto campo para investimentos lucrativos e de impacto.
        </p>
      </div>
    </section>
  );
};

export default MarketPotentialSection;
