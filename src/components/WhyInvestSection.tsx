
import React, { useEffect, useState } from 'react';
import SectionHeader from './WhyInvestSection/SectionHeader';
import BenefitsCarousel from './WhyInvestSection/BenefitsCarousel';
import CallToAction from './WhyInvestSection/CallToAction';
import { createBenefitsData } from './WhyInvestSection/benefitsData';

const WhyInvestSection = () => {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);
  const [animatedStats, setAnimatedStats] = useState({
    marketRank: 0,
    healthPlans: 0,
    currentUnits: 0,
    targetUnits: 0,
    students: 0,
  });

  // Animate stats when component mounts
  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedStats({
        marketRank: 2,
        healthPlans: 65,
        currentUnits: 25,
        targetUnits: 400,
        students: 800000,
      });
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const toggleCard = (index: number) => {
    if (expandedCard === index) {
      setExpandedCard(null);
    } else {
      setExpandedCard(index);
    }
  };

  const handleWhatsAppRedirect = () => {
    window.open('https://wa.me/5567998184460?text=Ol%C3%A1!%20Acabei%20de%20vir%20da%20landing%20page%20e%20quero%20saber%20mais%20sobre%20o%20lan%C3%A7amento!', '_blank');
  };

  const benefitsCards = createBenefitsData(animatedStats);

  return (
    <section id="why-invest" className="bg-[#411e81] bg-opacity-10 text-white min-h-screen w-full py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4">
        <SectionHeader />
        
        <BenefitsCarousel 
          benefitsCards={benefitsCards}
          expandedCard={expandedCard}
          onToggleCard={toggleCard}
        />

        <CallToAction onWhatsAppRedirect={handleWhatsAppRedirect} />
      </div>
    </section>
  );
};

export default WhyInvestSection;
