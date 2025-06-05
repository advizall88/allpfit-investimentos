
import HeroSection from '@/components/HeroSection';
import OurStructureSection from '@/components/OurStructureSection';
import AllpFitRevolutionSection from '@/components/AllpFitRevolutionSection';
import WhyInvestSection from '@/components/WhyInvestSection';
import ReturnOnInvestmentSection from '@/components/ReturnOnInvestmentSection';
import VideoSection from '@/components/VideoSection';
import SuccessCaseSection from '@/components/SuccessCaseSection';
import WhoWeAreSection from '@/components/WhoWeAreSection';
import SupportProcessesSection from '@/components/SupportProcessesSection';
import FaqSection from '@/components/FaqSection';
import ContactFormSection from '@/components/ContactFormSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen bg-allpBlack">
      <main className="flex-grow">
        <HeroSection />
        <WhyInvestSection />
        <OurStructureSection />
        <AllpFitRevolutionSection />
        <ReturnOnInvestmentSection />
        <VideoSection />
        <SuccessCaseSection />
        <WhoWeAreSection />
        <SupportProcessesSection />
        <FaqSection />
        <ContactFormSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
