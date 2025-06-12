
import React from 'react';

const WhoWeAreSection = () => {
  return (
    <section 
      id="who-we-are" 
      className="py-16 md:py-24 text-white bg-allpBlack relative overflow-hidden"
    >
      {/* Efeitos de fundo aprimorados */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-allpPurple/10 via-transparent to-allpOrange/5" />
        <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-allpPurple/20 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '8s' }} />
        <div className="absolute bottom-1/3 -right-1/4 w-80 h-80 bg-allpOrange/15 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '4s', animationDuration: '10s' }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-stretch gap-8 md:gap-12">
          {/* Coluna da Imagem */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
            <div className="relative group">
              {/* Container da imagem com bordas estilizadas */}
              <div className="relative bg-gradient-to-br from-allpPurple/30 to-allpOrange/20 p-1 rounded-2xl shadow-2xl">
                <div className="bg-allpBlack rounded-xl overflow-hidden">
                  <img 
                    src="/lovable-uploads/2a9ae914-9e92-46b4-b9fe-1c01a35a5b2a.png" 
                    alt="Vinicius Rezende - Diretor de Expansão Allp Fit" 
                    className="w-full h-[500px] object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  
                  {/* Overlay com gradiente */}
                  <div className="absolute inset-0 bg-gradient-to-t from-allpBlack/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                
                {/* Efeito de brilho animado */}
                <div className="absolute -inset-1 bg-gradient-to-r from-allpOrange via-allpPurple to-allpOrange rounded-2xl blur opacity-20 group-hover:opacity-40 transition-opacity duration-300 animate-pulse" />
              </div>
              
              {/* Nome estilizado */}
              <div className="mt-6 text-center">
                <h3 className="text-2xl md:text-3xl font-poppins font-bold bg-gradient-to-r from-allpOrange to-orange-400 bg-clip-text text-transparent">
                  Vínicius Rezende
                </h3>
                <p className="text-gray-300 font-poppins mt-2">Diretor de Expansão</p>
              </div>
            </div>
          </div>
          
          {/* Coluna do Texto */}
          <div className="w-full lg:w-1/2 flex items-center">
            <div className="relative">
              {/* Caixa de texto principal */}
              <div className="bg-gradient-to-br from-allpPurple/40 to-allpPurple/20 backdrop-blur-sm border border-allpOrange/30 p-8 md:p-10 rounded-2xl shadow-2xl h-[500px] flex flex-col justify-center relative overflow-hidden">
                {/* Efeito de brilho de fundo */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-allpOrange/10 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-40 h-40 bg-allpPurple/15 rounded-full blur-3xl" />
                
                <div className="relative z-10">
                  <p className="text-lg md:text-xl text-gray-100 leading-relaxed mb-6 font-light italic relative">
                    <span className="text-allpOrange text-4xl absolute -top-2 -left-4">"</span>
                    Sou empresário e Diretor de Expansão da Allp Fit, uma das redes fitness que mais cresce no país.
                    <span className="text-allpOrange text-4xl absolute -bottom-4 -right-2">"</span>
                  </p>
                  
                  <p className="text-lg md:text-xl text-gray-100 leading-relaxed mb-6">
                    Após anos liderando projetos de sucesso no setor, decidi abrir uma oportunidade única: a venda de cotas da nossa nova unidade — um investimento <span className="text-allpOrange font-semibold bg-allpOrange/10 px-2 py-1 rounded">acessível, lucrativo e com gestão profissional</span>.
                  </p>
                  
                  <p className="text-lg md:text-xl text-gray-100 leading-relaxed mb-6">
                    Não é só uma academia. É um <span className="text-allpOrange font-semibold bg-gradient-to-r from-allpOrange/20 to-transparent px-2 py-1 rounded">negócio inteligente</span>, em um mercado sólido e em expansão.
                  </p>
                  
                  <p className="text-lg md:text-xl text-gray-100 leading-relaxed mb-6">
                    Se você busca investir com propósito e retorno real, <span className="text-allpOrange font-semibold animate-pulse">essa é a hora</span>.
                  </p>
                  
                  <div className="text-center mt-8">
                    <p className="text-xl md:text-2xl font-poppins font-bold bg-gradient-to-r from-allpOrange via-orange-400 to-allpOrange bg-clip-text text-transparent animate-glow">
                      Vamos crescer juntos.
                    </p>
                    
                    {/* Linha decorativa */}
                    <div className="flex items-center justify-center mt-4">
                      <div className="h-0.5 w-16 bg-gradient-to-r from-transparent to-allpOrange"></div>
                      <div className="h-2 w-2 bg-allpOrange rounded-full mx-3 animate-pulse"></div>
                      <div className="h-0.5 w-16 bg-gradient-to-l from-transparent to-allpOrange"></div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Sombra decorativa */}
              <div className="absolute -inset-1 bg-gradient-to-r from-allpOrange/30 via-allpPurple/30 to-allpOrange/30 rounded-2xl blur opacity-30" />
            </div>
          </div>
        </div>
        
        {/* Elementos decorativos flutuantes */}
        <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-allpOrange rounded-full animate-bounce opacity-60" style={{ animationDelay: '0s', animationDuration: '3s' }} />
        <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-allpPurple rounded-full animate-bounce opacity-40" style={{ animationDelay: '1s', animationDuration: '4s' }} />
        <div className="absolute bottom-1/4 left-1/6 w-2 h-2 bg-allpOrange rounded-full animate-pulse opacity-50" />
      </div>
    </section>
  );
};

export default WhoWeAreSection;
