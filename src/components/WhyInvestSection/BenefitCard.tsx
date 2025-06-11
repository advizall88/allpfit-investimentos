
import React from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { CarouselItem } from '@/components/ui/carousel';

interface BenefitCardProps {
  card: {
    icon: React.ComponentType<any>;
    title: string;
    description: string;
    expandedContent: React.ReactNode;
  };
  index: number;
  expandedCard: number | null;
  onToggleCard: (index: number) => void;
}

const BenefitCard = ({ card, index, expandedCard, onToggleCard }: BenefitCardProps) => {
  const IconComponent = card.icon;
  
  return (
    <CarouselItem className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/3">
      <div
        className={`bg-gray-900 rounded-lg p-6 h-auto min-h-[320px] transition-all duration-300 hover:bg-[#411e81] hover:bg-opacity-20 cursor-pointer ${
          expandedCard === index ? 'lg:col-span-2 lg:row-span-2' : ''
        }`}
        onClick={() => onToggleCard(index)}
      >
        <div className="flex justify-between items-start">
          <div className="bg-allpOrange p-3 rounded-lg mb-4">
            <IconComponent className="text-black h-6 w-6" />
          </div>
          {expandedCard !== index && (
            <ChevronDown className="h-5 w-5 text-allpOrange" />
          )}
          {expandedCard === index && (
            <ChevronUp className="h-5 w-5 text-allpOrange" />
          )}
        </div>
        <h3 className="text-xl font-poppins font-semibold mb-2 text-allpOrange">
          {card.title}
        </h3>
        <p className="mb-4">
          {card.description}
        </p>
        {expandedCard === index && card.expandedContent}
      </div>
    </CarouselItem>
  );
};

export default BenefitCard;
