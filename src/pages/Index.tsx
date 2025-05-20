
import HeroSection from '@/components/HeroSection';
import VideoSection from '@/components/VideoSection'; // Importar a nova seção de vídeo
import WhyInvestSection from '@/components/WhyInvestSection';
import ReturnOnInvestmentSection from '@/components/ReturnOnInvestmentSection';
import MarketPotentialSection from '@/components/MarketPotentialSection';
import WhoWeAreSection from '@/components/WhoWeAreSection';
import FaqSection from '@/components/FaqSection';
import ContactFormSection from '@/components/ContactFormSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen bg-allpBlack">
      <main className="flex-grow">
        <HeroSection />
        <VideoSection /> {/* Adicionar a nova seção de vídeo aqui */}
        <WhyInvestSection />
        <ReturnOnInvestmentSection />
        <MarketPotentialSection />
        <WhoWeAreSection />
        <FaqSection />
        <ContactFormSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
