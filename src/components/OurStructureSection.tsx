
import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Expand } from 'lucide-react';

const galleryImages = [
  {
    src: "/lovable-uploads/3f584794-c581-42bc-b2e0-9da1d5a427fc.png",
    alt: "Área de pesos livres da academia Allp Fit",
  },
  {
    src: "/lovable-uploads/bfc0248d-a5f1-4bc8-a263-dd57c986d9a4.png",
    alt: "Fachada da academia Allp Fit",
  },
  {
    src: "/lovable-uploads/b561ce33-4af9-49d6-8240-1418f15c7201.png",
    alt: "Vista ampla da área de musculação da Allp Fit",
  },
  {
    src: "/lovable-uploads/81e99406-3e8b-4e1b-95d0-c0d91441b129.png",
    alt: "Equipamentos de cardio na academia Allp Fit",
  },
  {
    src: "/lovable-uploads/02b01a54-2477-4e8d-8b53-f5e023427ea9.png",
    alt: "Fileira de esteiras modernas na Allp Fit",
  },
  {
    src: "/lovable-uploads/d2a7015c-3cec-44fb-8f2c-8c6333e49404.png",
    alt: "Vista aérea da academia Allp Fit com estacionamento",
  },
  {
    src: "/lovable-uploads/190bf71c-c2fd-427d-a51b-52d34257d3a8.png",
    alt: "Área de equipamentos de musculação com iluminação moderna",
  }
];

const OurStructureSection = () => {
  return (
    <section id="our-structure" className="py-16 md:py-24 bg-allpBlack text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-poppins font-bold text-center mb-12">
          Conheça Nossa <span className="text-allpOrange">Estrutura Completa</span>
        </h2>
        
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-4xl mx-auto"
        >
          <CarouselContent>
            {galleryImages.map((image, index) => (
              <CarouselItem key={index} className="md:basis-full lg:basis-2/3">
                <div className="p-1">
                  <Dialog>
                    <DialogTrigger asChild>
                      <div className="aspect-video bg-gray-800 rounded-lg overflow-hidden shadow-lg cursor-pointer relative group">
                        <img
                          src={image.src}
                          alt={image.alt}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <Expand className="h-12 w-12 text-white" />
                        </div>
                      </div>
                    </DialogTrigger>
                    <DialogContent className="bg-allpBlack border-allpPurple max-w-5xl p-0">
                      <DialogHeader className="p-4 absolute top-0 right-0 z-10">
                        <DialogTitle className="sr-only">Imagem da estrutura</DialogTitle>
                      </DialogHeader>
                      <div className="p-2 md:p-4">
                        <img 
                          src={image.src} 
                          alt={image.alt} 
                          className="w-full h-auto rounded-md object-contain max-h-[85vh]" 
                        />
                      </div>
                      <p className="text-center text-sm text-gray-400 pb-4">{image.alt}</p>
                    </DialogContent>
                  </Dialog>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="text-allpOrange border-allpOrange hover:bg-allpOrange hover:text-white disabled:text-gray-500 disabled:border-gray-500" />
          <CarouselNext className="text-allpOrange border-allpOrange hover:bg-allpOrange hover:text-white disabled:text-gray-500 disabled:border-gray-500" />
        </Carousel>
        <p className="text-center text-gray-400 mt-6 text-sm">
          Clique nas imagens para ampliar. Arraste para ver mais.
        </p>
      </div>
    </section>
  );
};

export default OurStructureSection;
