
import React from 'react';
import ScrollReveal from './ScrollReveal';

const WhoWeAreSection = () => {
  return (
    <section 
      id="who-we-are" 
      className="py-16 md:py-24 text-white bg-gradient-to-br from-allpBlack via-allpPurple/10 to-allpBlack relative overflow-hidden"
    >
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-10 right-10 w-64 h-64 bg-allpOrange/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-allpPurple/15 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          
          {/* Image Column with Glassmorphism */}
          <ScrollReveal delay={200} direction="left" className="w-full lg:w-1/2">
            <div className="relative group">
              {/* Glassmorphism frame */}
              <div 
                className="relative bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-xl border border-white/20 rounded-3xl p-6 shadow-2xl shadow-allpPurple/20 hover:shadow-allpOrange/30 transition-all duration-500"
                style={{ backdropFilter: 'blur(20px) saturate(180%)' }}
              >
                <div className="relative overflow-hidden rounded-2xl">
                  <img 
                    src="/lovable-uploads/2a9ae914-9e92-46b4-b9fe-1c01a35a5b2a.png" 
                    alt="Vinicius Rezende - Diretor de Expansão Allp Fit" 
                    className="w-full h-[400px] lg:h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-allpBlack/30 via-transparent to-transparent" />
                </div>
                
                {/* Name badge with glassmorphism */}
                <div 
                  className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-allpOrange/80 to-orange-600/80 backdrop-blur-xl border border-white/20 rounded-2xl px-6 py-3 shadow-xl"
                  style={{ backdropFilter: 'blur(15px)' }}
                >
                  <h3 className="text-xl lg:text-2xl font-poppins font-bold text-white text-center whitespace-nowrap">
                    Vínicius Rezende
                  </h3>
                  <p className="text-sm text-white/90 text-center">Diretor de Expansão</p>
                </div>
              </div>
              
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-allpOrange/20 to-allpPurple/20 rounded-3xl blur-2xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          </ScrollReveal>
          
          {/* Text Column with Enhanced Glassmorphism */}
          <ScrollReveal delay={400} direction="right" className="w-full lg:w-1/2">
            <div className="relative">
              <div 
                className="bg-gradient-to-br from-allpPurple/30 via-allpPurple/20 to-allpOrange/10 backdrop-blur-2xl border border-white/20 rounded-3xl p-8 lg:p-10 shadow-2xl shadow-allpPurple/30 hover:shadow-allpOrange/20 transition-all duration-500 group"
                style={{ backdropFilter: 'blur(25px) saturate(200%)' }}
              >
                {/* Quote marks */}
                <div className="absolute -top-6 -left-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-allpOrange to-orange-600 rounded-full flex items-center justify-center shadow-xl">
                    <span className="text-white text-2xl font-bold">"</span>
                  </div>
                </div>

                <div className="space-y-6">
                  <ScrollReveal delay={600} direction="up">
                    <p className="text-lg lg:text-xl text-gray-200 italic font-light leading-relaxed group-hover:text-white transition-colors duration-300">
                      "Sou empresário e Diretor de Expansão da Allp Fit, uma das redes fitness que mais cresce no país."
                    </p>
                  </ScrollReveal>
                  
                  <ScrollReveal delay={800} direction="up">
                    <p className="text-lg lg:text-xl text-gray-200 leading-relaxed group-hover:text-white transition-colors duration-300">
                      Após anos liderando projetos de sucesso no setor, decidi abrir uma oportunidade única: a venda de cotas da nossa nova unidade — um investimento{' '}
                      <strong className="bg-gradient-to-r from-allpOrange to-orange-300 bg-clip-text text-transparent font-bold">
                        acessível, lucrativo e com gestão profissional
                      </strong>.
                    </p>
                  </ScrollReveal>
                  
                  <ScrollReveal delay={1000} direction="up">
                    <p className="text-lg lg:text-xl text-gray-200 leading-relaxed group-hover:text-white transition-colors duration-300">
                      Não é só uma academia. É um{' '}
                      <strong className="bg-gradient-to-r from-allpOrange to-orange-300 bg-clip-text text-transparent font-bold">
                        negócio inteligente
                      </strong>, em um mercado sólido e em expansão.
                    </p>
                  </ScrollReveal>
                  
                  <ScrollReveal delay={1200} direction="up">
                    <p className="text-lg lg:text-xl text-gray-200 leading-relaxed group-hover:text-white transition-colors duration-300">
                      Se você busca investir com propósito e retorno real,{' '}
                      <strong className="bg-gradient-to-r from-allpOrange to-orange-300 bg-clip-text text-transparent font-bold">
                        essa é a hora
                      </strong>.
                    </p>
                  </ScrollReveal>
                  
                  <ScrollReveal delay={1400} direction="scale">
                    <div className="text-center pt-4">
                      <p className="text-xl lg:text-2xl font-poppins font-bold bg-gradient-to-r from-allpOrange via-orange-400 to-allpOrange bg-clip-text text-transparent animate-glow">
                        Vamos crescer juntos.
                      </p>
                    </div>
                  </ScrollReveal>
                </div>

                {/* Decorative elements */}
                <div className="absolute top-4 right-4 w-2 h-2 bg-allpOrange rounded-full opacity-60 animate-ping" />
                <div className="absolute bottom-6 left-6 w-1.5 h-1.5 bg-allpPurple rounded-full opacity-60 animate-ping delay-1000" />
              </div>
              
              {/* Enhanced glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-allpPurple/30 via-transparent to-allpOrange/20 rounded-3xl blur-2xl -z-10 opacity-50 group-hover:opacity-100 transition-opacity duration-700" />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAreSection;
