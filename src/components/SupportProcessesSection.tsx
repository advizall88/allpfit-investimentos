
import React from 'react';
import { Check } from 'lucide-react';

const supportItemsCol1 = [
  "BUSCA DE IMÓVEIS",
  "SELEÇÃO DE EQUIPAMENTOS",
  "PROJETO ARQUITETÔNICO",
  "TREINAMENTO FRANQUEADO",
  "TREINAMENTO DA EQUIPE",
  "SISTEMA DE GESTÃO",
  "APOIO MARKETING",
];

const supportItemsCol2 = [
  "SISTEMA DE B.I",
  "APOIO FISCAL E DOCUMENTAL",
  "APOIO JURÍDICO (20% salário min)",
  "ASSESSORIA SEMANAL",
];

const SupportProcessesSection = () => {
  return (
    <section id="support-processes" className="py-16 md:py-24 bg-allpBlack text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-poppins font-bold text-center mb-12 uppercase">
          Time Pronto Para Dar <span className="text-allpOrange">Suporte em Todos os Processos</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-x-8 gap-y-6 max-w-4xl mx-auto">
          {/* Coluna 1 */}
          <div className="space-y-4">
            {supportItemsCol1.map((item, index) => (
              <div key={`col1-${index}`} className="flex items-center">
                <Check className="h-6 w-6 text-allpOrange mr-3 shrink-0" />
                <span className="font-poppins text-lg">{item}</span>
              </div>
            ))}
          </div>
          {/* Coluna 2 */}
          <div className="space-y-4">
            {supportItemsCol2.map((item, index) => (
              <div key={`col2-${index}`} className="flex items-center">
                <Check className="h-6 w-6 text-allpOrange mr-3 shrink-0" />
                <span className="font-poppins text-lg">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupportProcessesSection;
