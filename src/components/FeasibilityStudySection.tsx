
import React from 'react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ExternalLink } from 'lucide-react'; // Icon for the button

const studyImages = [
  {
    src: "/lovable-uploads/ac899a66-eea6-4586-83e3-ffe78a42f885.png",
    alt: "Estudo de Viabilidade: Localização em Belo Horizonte, Minas Gerais",
    title: "Localização e Endereço",
  },
  {
    src: "/lovable-uploads/f28bcae0-8a94-4fae-9cda-52ea82498bf4.png",
    alt: "Estudo de Viabilidade: Dados demográficos a 10 minutos a pé - Renda e Faixa Etária",
    title: "Dados Demográficos (10 min a pé)",
  },
  {
    src: "/lovable-uploads/cdaf3308-1996-4b2e-807e-27c6a75d6256.png",
    alt: "Estudo de Viabilidade: Dados demográficos a 10 minutos de carro - Renda e Faixa Etária",
    title: "Dados Demográficos (10 min de carro)",
  },
  {
    src: "/lovable-uploads/53f6dd3d-99c3-40b4-b943-5e0ac715c52c.png",
    alt: "Estudo de Viabilidade: Quantidade de academias de rede na região",
    title: "Concorrência: Academias de Rede",
  },
  {
    src: "/lovable-uploads/23efbd7c-5003-4300-8b9b-6186bac7fa29.png",
    alt: "Estudo de Viabilidade: População em raio de 2km e estimativa de alunos",
    title: "Potencial de Alunos (Raio 2km)",
  },
  {
    src: "/lovable-uploads/b3714263-c169-4d0d-98de-324b9d143e08.png",
    alt: "Estudo de Viabilidade: Mapa de população por gênero e condição de urbanização",
    title: "Análise Populacional Detalhada",
  },
  {
    src: "/lovable-uploads/78a9d90a-845e-4aa6-8381-40a49d2fae3d.png",
    alt: "Estudo de Viabilidade: Mapa de concorrência e densidade de consumo",
    title: "Mapa de Concorrência e Consumo",
  }
];

const FeasibilityStudySection = () => {
  return (
    <section id="feasibility-study" className="py-16 md:py-24 bg-allpBlack text-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-4">
          Análise de Mercado e <span className="text-allpOrange">Viabilidade</span>
        </h2>
        <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
          Confira os dados detalhados que comprovam o potencial de investimento na nova unidade Allp Fit.
        </p>
        
        <Dialog>
          <DialogTrigger asChild>
            <Button
              size="lg"
              className="bg-allpOrange hover:bg-orange-700 text-white font-poppins font-semibold text-lg px-10 py-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 animate-pulse-orange"
            >
              Ver Estudo de Viabilidade <ExternalLink className="ml-2 h-5 w-5" />
            </Button>
          </DialogTrigger>
          <DialogContent className="bg-allpBlack border-allpPurple max-w-3xl md:max-w-4xl lg:max-w-5xl p-0 max-h-[90vh] flex flex-col">
            <DialogHeader className="p-4 border-b border-allpPurple/50">
              <DialogTitle className="text-allpOrange font-poppins text-xl md:text-2xl text-left">
                Estudo de Viabilidade Detalhado
              </DialogTitle>
            </DialogHeader>
            <div className="p-1 md:p-4 flex-grow overflow-y-auto">
              <Carousel
                opts={{
                  align: "start",
                  loop: false, // Pode ser true se preferir loop
                }}
                className="w-full"
              >
                <CarouselContent>
                  {studyImages.map((image, index) => (
                    <CarouselItem key={index} className="flex flex-col items-center justify-center">
                      <div className="p-1 w-full">
                        <h3 className="text-lg font-poppins font-semibold text-allpOrange mb-2 text-center">{image.title}</h3>
                        <div className="bg-allpPurple/10 rounded-lg overflow-hidden shadow-lg">
                          <img
                            src={image.src}
                            alt={image.alt}
                            className="w-full h-auto object-contain max-h-[65vh] md:max-h-[70vh] rounded-md"
                          />
                        </div>
                        <p className="text-xs text-gray-400 mt-2 text-center px-4">{image.alt}</p>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="text-allpOrange border-allpOrange hover:bg-allpOrange hover:text-white disabled:text-gray-500 disabled:border-gray-500 left-2 md:-left-8" />
                <CarouselNext className="text-allpOrange border-allpOrange hover:bg-allpOrange hover:text-white disabled:text-gray-500 disabled:border-gray-500 right-2 md:-right-8" />
              </Carousel>
            </div>
             <p className="text-center text-xs text-gray-500 p-2 border-t border-allpPurple/50">
              Arraste para navegar entre as imagens do estudo.
            </p>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default FeasibilityStudySection;
