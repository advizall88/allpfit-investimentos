import HeroSection from '@/components/HeroSection';
import VideoSection from '@/components/VideoSection';
import WhyInvestSection from '@/components/WhyInvestSection';
import ReturnOnInvestmentSection from '@/components/ReturnOnInvestmentSection';
import MarketPotentialSection from '@/components/MarketPotentialSection';
import WhoWeAreSection from '@/components/WhoWeAreSection';
import OurStructureSection from '@/components/OurStructureSection';
import SupportProcessesSection from '@/components/SupportProcessesSection'; // Nova seção importada
import InvestmentOpportunitySection from '@/components/InvestmentOpportunitySection'; // Nova seção importada
import FaqSection from '@/components/FaqSection';
import ContactFormSection from '@/components/ContactFormSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen bg-allpBlack">
      <main className="flex-grow">
        <HeroSection />
        <VideoSection />
        <WhyInvestSection />
        <ReturnOnInvestmentSection />
        <MarketPotentialSection />
        <WhoWeAreSection />
        <OurStructureSection />
        <SupportProcessesSection />
        <InvestmentOpportunitySection /> {/* Nova seção adicionada aqui */}
        <FaqSection />
        <ContactFormSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
