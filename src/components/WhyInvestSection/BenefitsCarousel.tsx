
import React from 'react';
import { Carousel, CarouselContent, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
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
  return (
    <div className="mb-16 px-4">
      <Carousel
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
