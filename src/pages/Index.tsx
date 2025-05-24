
import HeroSection from '@/components/HeroSection';
import VideoSection from '@/components/VideoSection';
import WhyInvestSection from '@/components/WhyInvestSection';
import ReturnOnInvestmentSection from '@/components/ReturnOnInvestmentSection';
// import FeasibilityStudySection from '@/components/FeasibilityStudySection'; // Removido
// import MarketPotentialSection from '@/components/MarketPotentialSection'; // Removido
import WhoWeAreSection from '@/components/WhoWeAreSection';
import OurStructureSection from '@/components/OurStructureSection';
import SupportProcessesSection from '@/components/SupportProcessesSection';
import InvestmentOpportunitySection from '@/components/InvestmentOpportunitySection';
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
        {/* <FeasibilityStudySection /> */} {/* Removido */}
        {/* <MarketPotentialSection /> */} {/* Removido */}
        <WhoWeAreSection />
        <OurStructureSection />
        <SupportProcessesSection />
        <InvestmentOpportunitySection />
        <FaqSection />
        <ContactFormSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
