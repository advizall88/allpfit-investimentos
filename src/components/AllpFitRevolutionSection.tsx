
import React, { useEffect } from 'react';
import { Baby, Waves, Sparkles, Briefcase, Pill, Smartphone } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, CarouselApi } from '@/components/ui/carousel';

const AllpFitRevolutionSection = () => {
  const [api, setApi] = React.useState<CarouselApi>();

  useEffect(() => {
    if (!api) {
      return;
    }

    let autoPlayInterval: NodeJS.Timeout;

    const startAutoPlay = () => {
      autoPlayInterval = setInterval(() => {
        if (api.canScrollNext()) {
          api.scrollNext();
        } else {
          api.scrollTo(0);
        }
      }, 5000); // 5 segundos
    };

    const stopAutoPlay = () => {
      if (autoPlayInterval) {
        clearInterval(autoPlayInterval);
      }
    };

    // Inicia o autoplay após 3 segundos
    const initialDelay = setTimeout(() => {
      startAutoPlay();
    }, 3000);

    // Para o autoplay quando o usuário interage
    const handleSelect = () => {
      stopAutoPlay();
      
      // Reinicia o autoplay após 8 segundos de inatividade
      setTimeout(() => {
        startAutoPlay();
      }, 8000);
    };

    api.on("select", handleSelect);

    // Limpa os intervalos quando o componente é desmontado
    return () => {
      clearTimeout(initialDelay);
      stopAutoPlay();
      api.off("select", handleSelect);
    };
  }, [api]);

  const features = [
    {
      icon: <Baby className="h-8 w-8 text-white" />,
      title: "ESPAÇO KIDS",
      gradient: "from-allpOrange to-orange-500",
      image: "/lovable-uploads/b561ce33-4af9-49d6-8240-1418f15c7201.png"
    },
    {
      icon: <Waves className="h-8 w-8 text-white" />,
      title: "SAUNA",
      gradient: "from-allpPurple to-purple-600",
      image: "/lovable-uploads/312efa3a-d39c-4144-acdf-9c60375d444c.png"
    },
    {
      icon: <Sparkles className="h-8 w-8 text-white" />,
      title: "SPA",
      gradient: "from-allpOrange via-orange-500 to-allpPurple",
      image: "/lovable-uploads/405eea49-a442-4204-a803-32c1563e7fa9.png"
    },
    {
      icon: <Briefcase className="h-8 w-8 text-white" />,
      title: "SALA VIP PARA TRABALHO",
      gradient: "from-allpPurple to-purple-700",
      image: "/lovable-uploads/190bf71c-c2fd-427d-a51b-52d34257d3a8.png"
    },
    {
      icon: <Pill className="h-8 w-8 text-white" />,
      title: "PORÇÃO DE SUPLEMENTOS",
      gradient: "from-allpOrange to-red-500",
      image: "/lovable-uploads/78a9d90a-845e-4aa6-8381-40a49d2fae3d.png"
    },
    {
      icon: <Smartphone className="h-8 w-8 text-white" />,
      title: "APLICATIVO PARA TREINO",
      gradient: "from-allpPurple via-purple-600 to-allpOrange",
      image: "/lovable-uploads/cbeddab1-80a3-4323-b7cf-7bbd88cadd01.png"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-allpPurple text-white relative overflow-hidden">
      {/* Background overlay pattern with enhanced effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-allpPurple/90 via-allpPurple to-allpBlack/20"></div>
      
      {/* Animated background elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-allpOrange/10 rounded-full blur-2xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-allpOrange/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-allpPurple/20 rounded-full blur-xl animate-bounce"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-poppins font-bold mb-6">
            A <span className="text-allpOrange">ALLP FIT</span> REPRESENTA<br />
            UMA <span className="text-allpOrange">REVOLUÇÃO</span> NO MERCADO<br />
            <span className="text-allpOrange">DE ACADEMIAS</span> NO BRASIL.
          </h2>
          <p className="text-lg md:text-xl font-poppins font-medium max-w-3xl mx-auto">
            Com o conceito <span className="text-allpOrange font-bold">TOP TO ALL</span>, estamos empenhados em oferecer <span className="text-allpOrange font-bold">o melhor para todos</span>, em uma experiência 360° de saúde e bem-estar.
          </p>
        </div>

        <div className="mb-8">
          <Carousel
            setApi={setApi}
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full max-w-6xl mx-auto"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {features.map((feature, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3">
                  <div className="bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-lg border border-white/20 rounded-2xl overflow-hidden text-center hover:bg-gradient-to-br hover:from-white/20 hover:via-white/10 hover:to-white/5 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-allpOrange/20 group min-h-[350px] relative">
                    
                    {/* Background image */}
                    <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity duration-500">
                      <img 
                        src={feature.image} 
                        alt={feature.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-allpBlack/80 via-allpBlack/20 to-transparent"></div>
                    </div>

                    {/* Animated gradient background */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-500`}></div>
                    
                    {/* Glowing border effect */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-allpOrange/20 via-transparent to-allpPurple/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>
                    
                    <div className="relative z-10 p-8 flex flex-col justify-center h-full">
                      <div className="flex justify-center mb-6">
                        <div className={`p-4 bg-gradient-to-br ${feature.gradient} rounded-full group-hover:scale-110 transition-all duration-500 shadow-lg group-hover:shadow-xl`}>
                          {feature.icon}
                        </div>
                      </div>
                      <h3 className="text-white font-poppins font-bold text-sm md:text-base leading-tight group-hover:text-allpOrange transition-colors duration-300">
                        {feature.title}
                      </h3>
                    </div>

                    {/* Sparkle effect on hover */}
                    <div className="absolute top-4 right-4 w-2 h-2 bg-allpOrange rounded-full opacity-0 group-hover:opacity-100 animate-ping"></div>
                    <div className="absolute bottom-4 left-4 w-1.5 h-1.5 bg-allpPurple rounded-full opacity-0 group-hover:opacity-100 animate-ping delay-300"></div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-12 border-allpOrange bg-gradient-to-r from-allpOrange/20 to-allpPurple/20 hover:from-allpOrange/30 hover:to-allpPurple/30 text-white backdrop-blur-sm" />
            <CarouselNext className="hidden md:flex -right-12 border-allpOrange bg-gradient-to-r from-allpPurple/20 to-allpOrange/20 hover:from-allpPurple/30 hover:to-allpOrange/30 text-white backdrop-blur-sm" />
          </Carousel>
        </div>

        {/* Indicators */}
        <div className="flex justify-center space-x-2 mt-8">
          {Array.from({ length: Math.ceil(features.length / 3) }).map((_, index) => (
            <div
              key={index}
              className="w-2 h-2 rounded-full bg-white/30 hover:bg-allpOrange/60 transition-colors duration-300 cursor-pointer"
              onClick={() => api?.scrollTo(index * 3)}
            ></div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AllpFitRevolutionSection;
