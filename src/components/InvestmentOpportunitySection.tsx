
import React from 'react';
import { DollarSign, TrendingUp, Shield } from 'lucide-react';

const InvestmentOpportunitySection = () => {
  return (
    <section id="investment" className="py-16 md:py-24 bg-allpPurple text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-poppins font-bold text-center mb-12">
          Sua Oportunidade de <span className="text-allpOrange">Investir e Crescer</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h3 className="text-2xl font-poppins font-semibold mb-4 text-allpOrange">O que são as Cotas Allp Fit?</h3>
            <p className="text-lg mb-4">
              As cotas de investimento da Allp Fit representam uma participação em nosso sucesso. Cada cota, no valor de R$ 50.000,00, torna você um parceiro em uma das academias mais promissoras do país.
            </p>
            <p className="text-lg mb-6">
              Ao investir, você não apenas apoia um negócio inovador, mas também se posiciona para colher os frutos de um mercado fitness em constante expansão.
            </p>
            <div className="space-y-4">
              <div className="flex items-start">
                <DollarSign className="h-8 w-8 text-allpOrange mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-lg">Valor da Cota</h4>
                  <p>R$ 50.000,00 por cota.</p>
                </div>
              </div>
              <div className="flex items-start">
                <TrendingUp className="h-8 w-8 text-allpOrange mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-lg">Potencial de Retorno</h4>
                  <p>Participe dos lucros e da valorização da marca Allp Fit.</p>
                </div>
              </div>
              <div className="flex items-start">
                <Shield className="h-8 w-8 text-allpOrange mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-lg">Mercado em Crescimento</h4>
                  <p>O setor de fitness e bem-estar é um dos que mais crescem no Brasil e no mundo.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center">
            <img 
              src="/lovable-uploads/b8dda80f-0102-46ad-8caf-93a071a61134.png" 
              alt="Pessoas treinando na academia Allp Fit" 
              className="rounded-lg shadow-xl mx-auto w-full max-w-md h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvestmentOpportunitySection;

