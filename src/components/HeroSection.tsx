
import React from 'react';
import ScrollReveal from './ScrollReveal';
import AnimatedButton from './AnimatedButton';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-allpBlack via-allpPurple/20 to-allpBlack">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-allpOrange/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-allpPurple/15 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-allpOrange/5 rounded-full blur-2xl animate-bounce" />
      </div>

      {/* Glassmorphism overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-allpBlack/10 to-allpBlack/30" 
           style={{ backdropFilter: 'blur(1px)' }} />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          
          {/* Main Headline - Staggered Animation */}
          <ScrollReveal delay={200} direction="up">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-poppins font-black mb-6 leading-tight">
              <span className="bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent drop-shadow-2xl">
                INVISTA NA
              </span>
              <br />
              <span className="bg-gradient-to-r from-allpOrange via-orange-400 to-allpOrange bg-clip-text text-transparent animate-glow">
                ALLP FIT
              </span>
            </h1>
          </ScrollReveal>

          {/* Subtitle */}
          <ScrollReveal delay={400} direction="up">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-poppins font-semibold text-gray-200 mb-6">
              A Oportunidade de Investimento que Você Estava Esperando
            </h2>
          </ScrollReveal>

          {/* Description Box with Glassmorphism */}
          <ScrollReveal delay={600} direction="scale">
            <div className="relative">
              <div 
                className="bg-gradient-to-r from-allpOrange/30 via-allpPurple/20 to-allpOrange/30 backdrop-blur-xl border border-white/20 rounded-2xl px-8 py-6 max-w-3xl mx-auto mb-8 shadow-2xl shadow-allpPurple/20"
                style={{ backdropFilter: 'blur(20px) saturate(180%)' }}
              >
                <p className="text-lg lg:text-xl font-poppins font-medium text-white leading-relaxed">
                  <span className="bg-gradient-to-r from-allpOrange to-orange-300 bg-clip-text text-transparent font-bold">
                    Com gestão profissional e lucros recorrentes, sem precisar operar.
                  </span>
                </p>
              </div>
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-allpOrange/10 to-allpPurple/10 rounded-2xl blur-xl -z-10" />
            </div>
          </ScrollReveal>

          {/* Key Benefits */}
          <ScrollReveal delay={800} direction="up">
            <div className="grid md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
              {[
                { icon: "💰", title: "ROI de até 7,1%", desc: "ao mês com 4.000 alunos" },
                { icon: "🏋️", title: "Setor em Crescimento", desc: "2º maior mercado mundial" },
                { icon: "🤝", title: "Gestão Profissional", desc: "Sem necessidade de operação" }
              ].map((benefit, index) => (
                <ScrollReveal key={index} delay={1000 + (index * 200)} direction="up">
                  <div 
                    className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-6 text-center hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-allpOrange/20 group"
                    style={{ backdropFilter: 'blur(15px)' }}
                  >
                    <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">
                      {benefit.icon}
                    </div>
                    <h3 className="font-poppins font-bold text-allpOrange mb-2 group-hover:text-orange-300 transition-colors">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-300 text-sm group-hover:text-white transition-colors">
                      {benefit.desc}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </ScrollReveal>

          {/* CTA Buttons */}
          <ScrollReveal delay={1600} direction="scale">
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-8">
              <AnimatedButton 
                className="bg-gradient-to-r from-allpOrange to-orange-600 hover:from-orange-600 hover:to-allpOrange text-white font-poppins font-bold text-lg px-8 py-4 rounded-full shadow-2xl shadow-allpOrange/40" 
                pulse={true}
                glow={true}
              >
                QUERO SER INVESTIDOR
              </AnimatedButton>
              
              <AnimatedButton 
                variant="outline"
                className="border-2 border-allpPurple text-allpPurple hover:bg-allpPurple hover:text-white font-poppins font-semibold text-lg px-8 py-4 rounded-full backdrop-blur-sm"
              >
                SAIBA MAIS
              </AnimatedButton>
            </div>
          </ScrollReveal>

          {/* Trust Indicators */}
          <ScrollReveal delay={1800} direction="fade">
            <div className="text-center text-gray-400 text-sm">
              <p className="mb-2">✓ +25 unidades ativas • ✓ +60 mil alunos • ✓ Expansão para 400 unidades até 2026</p>
              <p>Investimento aprovado por especialistas do mercado fitness</p>
            </div>
          </ScrollReveal>

        </div>
      </div>

      {/* Scroll indicator */}
      <ScrollReveal delay={2000} direction="fade">
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="animate-bounce">
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse" />
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
};

export default HeroSection;
