
import HeroSection from '@/components/HeroSection';
import WhyInvestSection from '@/components/WhyInvestSection';
import ReturnOnInvestmentSection from '@/components/ReturnOnInvestmentSection';
import MarketPotentialSection from '@/components/MarketPotentialSection';
import WhoWeAreSection from '@/components/WhoWeAreSection';
import FaqSection from '@/components/FaqSection'; // Importar a nova seção
import ContactFormSection from '@/components/ContactFormSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen bg-allpBlack">
      <main className="flex-grow">
        <HeroSection />
        <WhyInvestSection />
        <ReturnOnInvestmentSection />
        <MarketPotentialSection />
        <WhoWeAreSection />
        <FaqSection /> {/* Adicionar a nova seção aqui */}
        <ContactFormSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
