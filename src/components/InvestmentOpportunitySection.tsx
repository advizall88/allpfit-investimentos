
import React from 'react';
import { Button } from '@/components/ui/button';
import { DollarSign, TrendingUp, CalendarCheck } from 'lucide-react';

const InvestmentOpportunitySection = () => {
  const handleWhatsAppRedirect = () => {
    window.open('https://wa.me/5567998184460?text=Ol%C3%A1!%20Acabei%20de%20vir%20da%20landing%20page%20e%20quero%20saber%20mais%20sobre%20o%20lan%C3%A7amento!', '_blank');
  };

  const stats = [
    {
      icon: <TrendingUp className="h-8 w-8 text-allpOrange mr-3 flex-shrink-0" />,
      value: "26% a 40%",
      label: "de lucratividade média",
    },
    {
      icon: <DollarSign className="h-8 w-8 text-allpOrange mr-3 flex-shrink-0" />,
      value: "R$ 50 MIL",
      label: "valor da cota",
    },
    {
      icon: <CalendarCheck className="h-8 w-8 text-allpOrange mr-3 flex-shrink-0" />,
      value: "24 a 36 MESES",
      label: "para retorno do investimento",
    },
  ];

  return (
    <section id="investment-opportunity" className="py-16 md:py-24 bg-allpPurple text-white">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="text-center md:text-left">
            <img 
              src="/lovable-uploads/b8dda80f-0102-46ad-8caf-93a071a61134.png" 
              alt="Pessoa malhando na academia Allp Fit" 
              className="rounded-lg shadow-xl mx-auto md:mx-0 w-full max-w-md h-auto object-cover"
            />
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl font-poppins font-bold mb-6 leading-tight">
              A <span className="text-allpOrange">ALLP FIT</span> SURGIU COM UM PASSO E UMA VISÃO <span className="text-allpOrange">OUSADA.</span>
            </h2>
            
            <div className="space-y-6 mb-8">
              {stats.map((stat, index) => (
                <div key={index} className="flex items-start">
                  {stat.icon}
                  <div>
                    <p className="text-2xl font-poppins font-bold text-allpOrange">{stat.value}</p>
                    <p className="text-gray-300">{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>

            <Button 
              size="lg" 
              className="bg-allpOrange text-white hover:bg-allpOrange/90 font-poppins font-semibold px-10 py-4 text-xl w-full md:w-auto animate-pulse-orange"
              onClick={handleWhatsAppRedirect}
            >
              AGORA É SUA VEZ
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvestmentOpportunitySection;
