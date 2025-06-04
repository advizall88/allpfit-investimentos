
import React from 'react';

const WhoWeAreSection = () => {
  return (
    <section 
      id="who-we-are" 
      className="py-16 md:py-24 text-white bg-allpBlack"
    >
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12">
          {/* Coluna da Imagem */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-end">
            <div className="text-center">
              <img 
                src="/lovable-uploads/2a9ae914-9e92-46b4-b9fe-1c01a35a5b2a.png" 
                alt="Vinicius Rezende - Diretor de Expansão Allp Fit" 
                className="rounded-lg shadow-xl object-cover w-full max-w-md h-auto md:max-h-[500px] mb-4"
              />
              <h2 className="text-2xl md:text-3xl font-poppins font-bold text-allpOrange">
                Sou Vínicius Rezende
              </h2>
            </div>
          </div>
          
          {/* Coluna do Texto */}
          <div className="w-full md:w-1/2 text-left break-words">
            <div className="bg-allpPurple p-8 rounded-lg shadow-xl">
              <p className="text-lg md:text-xl text-gray-200 leading-relaxed mb-6 font-light italic">
                "Sou empresário e Diretor de Expansão da Allp Fit, uma das redes fitness que mais cresce no país."
              </p>
              
              <p className="text-lg md:text-xl text-gray-200 leading-relaxed mb-6">
                Após anos liderando projetos de sucesso no setor, decidi abrir uma oportunidade única: a venda de cotas da nossa nova unidade — um investimento <span className="text-allpOrange font-semibold">acessível, lucrativo e com gestão profissional</span>.
              </p>
              
              <p className="text-lg md:text-xl text-gray-200 leading-relaxed mb-6">
                Não é só uma academia. É um <span className="text-allpOrange font-semibold">negócio inteligente</span>, em um mercado sólido e em expansão.
              </p>
              
              <p className="text-lg md:text-xl text-gray-200 leading-relaxed mb-6">
                Se você busca investir com propósito e retorno real, <span className="text-allpOrange font-semibold">essa é a hora</span>.
              </p>
              
              <p className="text-xl md:text-2xl text-allpOrange leading-relaxed font-bold text-center">
                Vamos crescer juntos.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAreSection;
