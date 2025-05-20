
import React from 'react';
import { CheckCircle, Gift, AlertTriangle, TrendingUp } from 'lucide-react';

const OfferDetailsSection = () => {
  return (
    <section id="offer" className="py-16 md:py-24 bg-allpBlack text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-poppins font-bold text-center mb-12">
          Detalhes da <span className="text-allpOrange">Oferta Exclusiva</span>
        </h2>
        <div className="max-w-3xl mx-auto bg-gray-800 p-8 md:p-12 rounded-xl shadow-2xl">
          <div className="text-center mb-8">
            <AlertTriangle className="h-12 w-12 text-allpOrange mx-auto mb-4"/>
            <h3 className="text-2xl font-poppins font-semibold text-allpOrange">Número Limitado de Cotas!</h3>
            <p className="text-lg">Esta é uma oportunidade única para um grupo seleto de investidores.</p>
          </div>
          
          <div className="space-y-6">
            <div className="flex items-start p-4 bg-gray-700 rounded-lg">
              <CheckCircle className="h-7 w-7 text-green-400 mr-4 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-xl mb-1">Segurança e Transparência</h4>
                <p className="text-gray-300">Processo de investimento claro, com todas as garantias contratuais para sua tranquilidade.</p>
              </div>
            </div>
            <div className="flex items-start p-4 bg-gray-700 rounded-lg">
              <Gift className="h-7 w-7 text-allpOrange mr-4 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-xl mb-1">Benefícios Exclusivos para Pioneiros</h4>
                <p className="text-gray-300">Os primeiros investidores terão acesso a vantagens especiais, como bônus de participação e acesso VIP a eventos da Allp Fit.</p>
              </div>
            </div>
             <div className="flex items-start p-4 bg-gray-700 rounded-lg">
              <TrendingUp className="h-7 w-7 text-blue-400 mr-4 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-xl mb-1">Potencial de Valorização</h4>
                <p className="text-gray-300">Além da participação nos lucros, sua cota tem potencial de valorização à medida que a Allp Fit expande sua marca e operações.</p>
              </div>
            </div>
          </div>

          {/* Placeholder for countdown timer */}
          <div className="mt-10 text-center">
            <p className="text-lg font-semibold text-allpOrange">Não perca tempo! As cotas são limitadas.</p>
            {/* Example: <p className="text-4xl font-poppins font-bold mt-2">05<span className="text-lg">d</span> 12<span className="text-lg">h</span> 30<span className="text-lg">m</span></p> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfferDetailsSection;

