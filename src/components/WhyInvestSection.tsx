import React, { useEffect, useState } from 'react';
import { TrendingUp, Award, Users, Handshake, Check, DollarSign, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import AllpFitLogo from './AllpFitLogo';
import { useIsMobile } from '@/hooks/use-mobile';
const features = [{
  icon: <TrendingUp className="h-10 w-10 text-allpOrange mb-3" />,
  title: "Setor em Crescimento",
  description: "Brasil: 2º maior mercado de academias. 65% dos brasileiros planejam cuidar mais da saúde em 2024."
}, {
  icon: <Star className="h-10 w-10 text-allpOrange mb-3" />,
  title: "Reputação Sólida",
  description: "+25 unidades (+60 mil alunos). Expansão para 400 unidades e 800 mil alunos até 2026."
}, {
  icon: <Award className="h-10 w-10 text-allpOrange mb-3" />,
  title: "Tecnologia de Ponta",
  description: "Equipamentos de fitness de última linha (Matrix®) para eficiência, segurança e conforto."
}, {
  icon: <Handshake className="h-10 w-10 text-allpOrange mb-3" />,
  title: "Suporte Estratégico",
  description: "Processo de franquia transparente, suporte em todas as etapas e treinamento contínuo."
}, {
  icon: <Check className="h-10 w-10 text-allpOrange mb-3" />,
  title: "Infraestrutura Moderna",
  description: "Local com estacionamento, acessibilidade e design inovador."
}, {
  icon: <DollarSign className="h-10 w-10 text-allpOrange mb-3" />,
  title: "Ticket Médio Atrativo",
  description: "R$ 146,60, otimizando a rentabilidade por aluno."
}];
const WhyInvestSection = () => {
  const isMobile = useIsMobile();
  const [currentSlide, setCurrentSlide] = useState(0);
  const handleWhatsAppRedirect = () => {
    window.open('https://wa.me/5567998184460?text=Ol%C3%A1!%20Acabei%20de%20vir%20da%20landing%20page%20e%20quero%20saber%20mais%20sobre%20o%20lan%C3%A7amento!', '_blank');
  };

  // Carrossel automático para mobile
  useEffect(() => {
    if (isMobile) {
      const interval = setInterval(() => {
        setCurrentSlide(prev => (prev + 1) % features.length);
      }, 7000);
      return () => clearInterval(interval);
    }
  }, [isMobile]);
  return <section id="why-invest" className="py-16 md:py-24 text-white bg-purple-700 bg-[470e75]">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-poppins font-bold text-center mb-12 flex items-center justify-center flex-wrap">
          Por que investir na&nbsp;<AllpFitLogo className="inline-block h-8 md:h-10 w-auto mx-1 align-middle" alt="Allp Fit Logo" />?
        </h2>
        
        {/* Layout para desktop */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => <div key={index} className="p-6 rounded-lg shadow-lg flex flex-col items-center text-center transform transition-transform hover:scale-105 bg-slate-950">
              {feature.icon}
              <h3 className="text-xl font-poppins font-semibold mb-2 text-allpOrange">{feature.title}</h3>
              <p className="text-gray-300 text-sm">{feature.description}</p>
            </div>)}
        </div>

        {/* Carrossel para mobile */}
        <div className="md:hidden relative overflow-hidden">
          <div className="flex transition-transform duration-500 ease-in-out" style={{
          transform: `translateX(-${currentSlide * 100}%)`
        }}>
            {features.map((feature, index) => <div key={index} className="w-full flex-shrink-0 px-4">
                <div className="bg-allpPurple p-6 rounded-lg shadow-lg flex flex-col items-center text-center">
                  {feature.icon}
                  <h3 className="text-xl font-poppins font-semibold mb-2 text-allpOrange">{feature.title}</h3>
                  <p className="text-gray-300 text-sm">{feature.description}</p>
                </div>
              </div>)}
          </div>
          
          {/* Indicadores do carrossel */}
          <div className="flex justify-center mt-6 space-x-2">
            {features.map((_, index) => <button key={index} className={`w-3 h-3 rounded-full transition-colors ${index === currentSlide ? 'bg-allpOrange' : 'bg-gray-500'}`} onClick={() => setCurrentSlide(index)} />)}
          </div>
        </div>

        <div className="text-center mt-12">
          <Button size="lg" className="bg-allpOrange text-white hover:bg-allpOrange/90 font-poppins font-semibold px-8 py-3 text-lg animate-pulse-orange" onClick={handleWhatsAppRedirect}>
            QUERO FAZER PARTE
          </Button>
        </div>
      </div>
    </section>;
};
export default WhyInvestSection;