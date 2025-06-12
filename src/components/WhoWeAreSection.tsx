
import React from 'react';

const WhoWeAreSection = () => {
  return (
    <section 
      id="who-we-are" 
      className="py-16 md:py-24 text-white bg-allpBlack relative overflow-hidden"
    >
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-allpPurple/10 via-transparent to-allpOrange/5"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Column */}
          <div className="order-2 lg:order-1">
            <div className="relative group">
              {/* Main image container with modern styling */}
              <div className="relative overflow-hidden rounded-2xl shadow-2xl transform transition-all duration-300 group-hover:scale-105">
                <div className="aspect-[4/5] relative">
                  <img 
                    src="/lovable-uploads/2a9ae914-9e92-46b4-b9fe-1c01a35a5b2a.png" 
                    alt="Vinicius Rezende - Diretor de Expansão Allp Fit" 
                    className="w-full h-full object-cover object-center"
                  />
                  {/* Gradient overlay for better text contrast */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                </div>
                
                {/* Floating name card */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20 shadow-lg">
                    <h3 className="text-xl md:text-2xl font-poppins font-bold text-white mb-1">
                      Vínicius Rezende
                    </h3>
                    <p className="text-allpOrange font-medium text-sm">
                      Diretor de Expansão Allp Fit
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-allpOrange/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-allpPurple/20 rounded-full blur-xl"></div>
            </div>
          </div>
          
          {/* Content Column */}
          <div className="order-1 lg:order-2">
            <div className="space-y-6">
              {/* Section title */}
              <div className="mb-8">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-poppins font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  Quem Somos
                </h2>
                <div className="w-20 h-1 bg-gradient-to-r from-allpOrange to-allpPurple rounded-full"></div>
              </div>

              {/* Quote */}
              <div className="relative">
                <div className="absolute -top-2 -left-2 text-6xl text-allpOrange/30 font-serif">"</div>
                <p className="text-lg md:text-xl text-gray-200 leading-relaxed mb-6 font-light italic pl-8">
                  Sou empresário e Diretor de Expansão da Allp Fit, uma das redes fitness que mais cresce no país.
                </p>
              </div>
              
              {/* Main content */}
              <div className="space-y-4">
                <p className="text-base md:text-lg text-gray-300 leading-relaxed">
                  Após anos liderando projetos de sucesso no setor, decidi abrir uma oportunidade única: a venda de cotas da nossa nova unidade — um investimento <span className="text-allpOrange font-semibold">acessível, lucrativo e com gestão profissional</span>.
                </p>
                
                <p className="text-base md:text-lg text-gray-300 leading-relaxed">
                  Não é só uma academia. É um <span className="text-allpOrange font-semibold">negócio inteligente</span>, em um mercado sólido e em expansão.
                </p>
                
                <p className="text-base md:text-lg text-gray-300 leading-relaxed">
                  Se você busca investir com propósito e retorno real, <span className="text-allpOrange font-semibold">essa é a hora</span>.
                </p>
              </div>
              
              {/* Call to action */}
              <div className="pt-6">
                <div className="bg-gradient-to-r from-allpPurple/20 to-allpOrange/20 rounded-xl p-6 border border-allpOrange/30">
                  <p className="text-xl md:text-2xl text-center font-poppins font-bold bg-gradient-to-r from-allpOrange to-white bg-clip-text text-transparent">
                    Vamos crescer juntos.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAreSection;
