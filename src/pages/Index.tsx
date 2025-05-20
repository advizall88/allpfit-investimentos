
import HeroSection from '@/components/HeroSection';
import AboutAllpFitSection from '@/components/AboutAllpFitSection';
import InvestmentOpportunitySection from '@/components/InvestmentOpportunitySection';
import TestimonialsSection from '@/components/TestimonialsSection';
import OfferDetailsSection from '@/components/OfferDetailsSection';
import ContactFormSection from '@/components/ContactFormSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen bg-allpBlack">
      <main className="flex-grow">
        <HeroSection />
        <AboutAllpFitSection />
        <InvestmentOpportunitySection />
        <TestimonialsSection />
        <OfferDetailsSection />
        <ContactFormSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
