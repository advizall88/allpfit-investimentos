
import React, { useEffect } from 'react';
import { Carousel, CarouselContent, CarouselNext, CarouselPrevious, CarouselApi } from '@/components/ui/carousel';
import BenefitCard from './BenefitCard';

interface BenefitsCarouselProps {
  benefitsCards: Array<{
    icon: React.ComponentType<any>;
    title: string;
    description: string;
    expandedContent: React.ReactNode;
  }>;
  expandedCard: number | null;
  onToggleCard: (index: number) => void;
}

const BenefitsCarousel = ({ benefitsCards, expandedCard, onToggleCard }: BenefitsCarouselProps) => {
  const [api, setApi] = React.useState<CarouselApi>();

  useEffect(() => {
    if (!api) {
      return;
    }

    let autoPlayInterval: NodeJS.Timeout;

    const startAutoPlay = () => {
      autoPlayInterval = setInterval(() => {
        api.scrollNext();
      }, 5000); // Aumentei para 5 segundos
    };

    const stopAutoPlay = () => {
      if (autoPlayInterval) {
        clearInterval(autoPlayInterval);
      }
    };

    // Inicia o autoplay após um delay inicial
    const initialDelay = setTimeout(() => {
      startAutoPlay();
    }, 2000);

    // Para o autoplay quando o usuário interage
    const handleSelect = () => {
      stopAutoPlay();
      
      // Reinicia o autoplay após 8 segundos de inatividade
      setTimeout(() => {
        startAutoPlay();
      }, 8000);
    };

    api.on("select", handleSelect);

    // Limpa os intervalos quando o componente é desmontado
    return () => {
      clearTimeout(initialDelay);
      stopAutoPlay();
      api.off("select", handleSelect);
    };
  }, [api]);

  return (
    <div className="mb-16 px-4">
      <Carousel
        setApi={setApi}
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-2 md:-ml-4">
          {benefitsCards.map((card, index) => (
            <BenefitCard
              key={index}
              card={card}
              index={index}
              expandedCard={expandedCard}
              onToggleCard={onToggleCard}
            />
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden md:flex -left-12 border-allpOrange bg-allpOrange/10 hover:bg-allpOrange/20 text-allpOrange" />
        <CarouselNext className="hidden md:flex -right-12 border-allpOrange bg-allpOrange/10 hover:bg-allpOrange/20 text-allpOrange" />
      </Carousel>
    </div>
  );
};

export default BenefitsCarousel;
