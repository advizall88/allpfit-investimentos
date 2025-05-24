
import React from 'react';

const WhoWeAreSection = () => {
  return (
    <section 
      id="who-we-are" 
      className="py-16 md:py-24 text-white bg-allpBlack"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-12 text-center">
          Quem <span className="text-allpOrange">Somos</span>
        </h2>
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12">
          {/* Coluna da Imagem */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-end">
            <img 
              src="/lovable-uploads/51602010-f450-4603-849c-3dade939353d.png" 
              alt="Vinicius Rezende - Diretor de Expansão Allp Fit" 
              className="rounded-lg shadow-xl object-cover w-full max-w-md h-auto md:max-h-[500px]"
            />
          </div>
          
          {/* Coluna do Texto */}
          <div className="w-full md:w-1/2 text-left">
            <p className="text-lg md:text-xl text-gray-200 leading-relaxed mb-4">
              Sou Vinicius Rezende, empresário e Diretor de Expansão da Allp Fit, uma das redes fitness que mais cresce no país.
            </p>
            <p className="text-lg md:text-xl text-gray-200 leading-relaxed mb-4">
              Após anos liderando projetos de sucesso no setor, decidi abrir uma oportunidade única: a venda de cotas da nossa nova unidade — um investimento acessível, lucrativo e com gestão profissional.
            </p>
            <p className="text-lg md:text-xl text-gray-200 leading-relaxed mb-4">
              Não é só uma academia. É um negócio inteligente, em um mercado sólido e em expansão.
            </p>
            <p className="text-lg md:text-xl text-gray-200 leading-relaxed font-semibold">
              Se você busca investir com propósito e retorno real, essa é a hora.
            </p>
            <p className="text-lg md:text-xl text-gray-200 leading-relaxed font-semibold">
              Vamos crescer juntos.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAreSection;
