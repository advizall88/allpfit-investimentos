
import React from 'react';
import AllpFitLogo from './AllpFitLogo'; // Reutilizando o logo

const WhoWeAreSection = () => {
  return (
    <section 
      id="who-we-are" 
      className="relative py-16 md:py-24 text-white bg-cover bg-center"
      style={{ backgroundImage: "url('/lovable-uploads/931d54da-3dda-4c62-92f7-3c5167b6b58c.png')" }}
    >
      {/* Overlay escuro para melhorar a legibilidade do texto */}
      <div className="absolute inset-0 bg-allpBlack opacity-60"></div>
      
      {/* Conteúdo da seção - precisa ser relativo para ficar acima do overlay */}
      <div className="relative container mx-auto px-6 text-center">
        <AllpFitLogo className="mb-8 mx-auto" alt="Allp Fit Logo Principal Quem Somos" />
        <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-6">
          Quem <span className="text-allpOrange">Somos</span>
        </h2>
        <div className="max-w-3xl mx-auto bg-allpBlack/80 p-8 rounded-lg shadow-xl">
          <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
            A&nbsp;<AllpFitLogo className="inline-block h-5 w-auto mx-1 align-middle" alt="Allp Fit Logo" />&nbsp;é mais que uma academia: é um <span className="font-semibold">ecossistema de saúde e performance</span>, com experiência completa para o aluno e modelo de negócio escalável para investidores. Combinamos tecnologia, metodologia de treino exclusiva e uma gestão focada em resultados para transformar o mercado fitness.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAreSection;
