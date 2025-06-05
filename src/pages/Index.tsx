
import HeroSection from '@/components/HeroSection';
import OurStructureSection from '@/components/OurStructureSection';
import AllpFitRevolutionSection from '@/components/AllpFitRevolutionSection';
import WhyInvestSection from '@/components/WhyInvestSection';
import ReturnOnInvestmentSection from '@/components/ReturnOnInvestmentSection';
import VideoSection from '@/components/VideoSection';
import SuccessCaseSection from '@/components/SuccessCaseSection';
// import ValoresSection from '@/components/ValoresSection'; // Removido
// import FeasibilityStudySection from '@/components/FeasibilityStudySection'; // Removido
// import MarketPotentialSection from '@/components/MarketPotentialSection'; // Removido
import WhoWeAreSection from '@/components/WhoWeAreSection';
import SupportProcessesSection from '@/components/SupportProcessesSection';
// import InvestmentOpportunitySection from '@/components/InvestmentOpportunitySection'; // Removido
import FaqSection from '@/components/FaqSection';
import ContactFormSection from '@/components/ContactFormSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen bg-allpBlack">
      <main className="flex-grow">
        <HeroSection />
        <OurStructureSection />
        <AllpFitRevolutionSection />
        <WhyInvestSection />
        <ReturnOnInvestmentSection />
        <VideoSection />
        <SuccessCaseSection />
        {/* <ValoresSection /> */} {/* Removido */}
        {/* <FeasibilityStudySection /> */} {/* Removido */}
        {/* <MarketPotentialSection /> */} {/* Removido */}
        <WhoWeAreSection />
        <SupportProcessesSection />
        {/* <InvestmentOpportunitySection /> */} {/* Removido */}
        <FaqSection />
        <ContactFormSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
