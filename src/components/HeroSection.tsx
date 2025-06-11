import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import CustomVideoPlayer from './CustomVideoPlayer';
const HeroSection = () => {
  const handleWhatsAppRedirect = () => {
    window.open('https://wa.me/5567998184460?text=Ol%C3%A1!%20Acabei%20de%20vir%20da%20landing%20page%20e%20quero%20saber%20mais%20sobre%20o%20lan%C3%A7amento!', '_blank');
  };
  return <section style={{
    backgroundImage: 'url(/lovable-uploads/1b95c159-aec2-42ae-8270-00b256ef4ae0.png)'
  }} className="bg-cover bg-center text-white py-14 md:py-22 relative min-h-screen overflow-hidden">
      {/* Overlay com gradiente mais suave */}
      <div className="absolute inset-0 bg-gradient-to-b from-allpBlack/70 via-allpBlack/50 to-allpBlack/70" />
      
      {/* Efeitos de luz ambiente */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-allpOrange/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-allpPurple/10 rounded-full blur-3xl animate-pulse delay-1000" />
      
      {/* Conteúdo da Hero Section */}
      <div className="container mx-auto px-6 text-center relative z-10 flex flex-col items-center justify-center min-h-[calc(100vh-112px)] md:min-h-[calc(100vh-179px)] pt-24">
        
        {/* Título principal com animação de entrada */}
        <div className="animate-fade-in mb-6">
          <h1 className="font-poppins leading-tight max-w-3xl text-2xl lg:text-3xl font-semibold animate-slide-up animate-glow md:text-3xl">
            Invista a partir de R$ 50 mil e torne-se sócio da rede de academias que mais cresce no Brasil!
          </h1>
          
          {/* Subtítulo destacado */}
          <div className="mt-4 animate-fade-in-delay-1">
            <p className="text-lg lg:text-xl font-poppins font-medium bg-gradient-to-r from-allpOrange/20 to-allpPurple/20 backdrop-blur-sm border border-allpOrange/30 rounded-lg px-6 py-3 max-w-2xl mx-auto">
              <span className="bg-gradient-to-r from-allpOrange to-orange-400 bg-clip-text text-transparent">
                Com gestão profissional e lucros recorrentes, sem precisar operar.
              </span>
            </p>
          </div>
        </div>
        
        {/* Player de vídeo customizado com animação */}
        <div className="mb-8 w-full max-w-3xl animate-scale-in-delay">
          <CustomVideoPlayer videoId="d9hL2TKv9aA" thumbnailUrl="/lovable-uploads/1b95c159-aec2-42ae-8270-00b256ef4ae0.png" title="Descubra a Oportunidade de Investimento AllpFit" />
        </div>

        {/* Botão de ação com animação */}
        <div className="animate-fade-in-delay-cta">
          <Button size="lg" className="bg-gradient-to-r from-allpOrange via-orange-600 to-allpOrange hover:from-orange-700 hover:via-orange-800 hover:to-orange-700 text-white font-poppins font-bold text-xl px-12 py-8 rounded-2xl shadow-2xl shadow-allpOrange/30 transition-all duration-500 transform hover:scale-110 hover:shadow-allpOrange/50 active:scale-95 group relative overflow-hidden" onClick={handleWhatsAppRedirect}>
            {/* Efeito de brilho animado */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
            
            <span className="relative z-10 flex items-center">
              Quero ser investidor 
              <ArrowRight className="ml-3 h-6 w-6 transition-transform duration-300 group-hover:translate-x-2" />
            </span>
          </Button>
        </div>

        {/* Indicador de confiança */}
        <div className="mt-8 animate-fade-in-delay-trust">
          <p className="text-gray-300 font-poppins text-lg">
            + de <span className="text-allpOrange font-bold">60 mil alunos</span> e{' '}
            <span className="text-allpOrange font-bold">25 unidades</span> de sucesso
          </p>
        </div>
      </div>
    </section>;
};
export default HeroSection;