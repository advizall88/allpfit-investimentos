
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
        className={`bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-6 h-auto min-h-[320px] transition-all duration-300 hover:bg-gradient-to-br hover:from-[#411e81]/20 hover:to-gray-800 cursor-pointer border border-gray-700 hover:border-allpOrange/50 shadow-lg hover:shadow-allpOrange/10 ${
          expandedCard === index ? 'lg:col-span-2 lg:row-span-2 border-allpOrange/50' : ''
        }`}
        onClick={() => onToggleCard(index)}
      >
        <div className="flex justify-between items-start">
          <div className="bg-gradient-to-br from-allpOrange to-orange-600 p-3 rounded-lg mb-4 shadow-lg">
            <IconComponent className="text-white h-6 w-6" />
          </div>
          {expandedCard !== index && (
            <ChevronDown className="h-5 w-5 text-allpOrange transition-transform duration-200" />
          )}
          {expandedCard === index && (
            <ChevronUp className="h-5 w-5 text-allpOrange transition-transform duration-200" />
          )}
        </div>
        <h3 className="text-xl font-poppins font-semibold mb-3 text-white">
          {card.title}
        </h3>
        <p className="mb-4 text-gray-200 leading-relaxed">
          {card.description}
        </p>
        {expandedCard === index && card.expandedContent}
      </div>
    </CarouselItem>
  );
};

export default BenefitCard;
