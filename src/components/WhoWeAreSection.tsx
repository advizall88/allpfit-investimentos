
import React from 'react';
import AllpFitLogo from './AllpFitLogo'; // Reutilizando o logo

const WhoWeAreSection = () => {
  return (
    <section id="who-we-are" className="py-16 md:py-24 bg-allpPurple text-white">
      <div className="container mx-auto px-6 text-center">
        <AllpFitLogo className="mb-8 mx-auto" variant="light" />
        <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-6">
          Quem <span className="text-allpOrange">Somos</span>
        </h2>
        <div className="max-w-3xl mx-auto bg-allpBlack p-8 rounded-lg shadow-xl">
          <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
            A <span className="text-allpOrange font-semibold">Allp Fit</span> é mais que uma academia: é um <span className="font-semibold">ecossistema de saúde e performance</span>, com experiência completa para o aluno e modelo de negócio escalável para investidores. Combinamos tecnologia, metodologia de treino exclusiva e uma gestão focada em resultados para transformar o mercado fitness.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAreSection;
