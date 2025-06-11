
import React from 'react';
import { Button } from '@/components/ui/button';

interface CallToActionProps {
  onWhatsAppRedirect: () => void;
}

const CallToAction = ({ onWhatsAppRedirect }: CallToActionProps) => {
  return (
    <div className="text-center">
      <Button 
        size="lg" 
        className="bg-gradient-to-r from-allpOrange to-allpPurple hover:from-orange-600 hover:to-[#411e81] text-white font-poppins font-bold py-3 px-8 text-lg transition-all duration-300 transform hover:scale-105"
        onClick={onWhatsAppRedirect}
      >
        QUERO FAZER PARTE
      </Button>
      <p className="mt-4 text-gray-300">
        Junte-se a mais de 60 mil alunos e 25 unidades de sucesso
      </p>
    </div>
  );
};

export default CallToAction;
