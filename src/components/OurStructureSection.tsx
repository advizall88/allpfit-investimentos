
import React from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Expand } from 'lucide-react';

const galleryImages = [{
  src: "/lovable-uploads/3f584794-c581-42bc-b2e0-9da1d5a427fc.png",
  alt: "Área de pesos livres da academia Allp Fit"
}, {
  src: "/lovable-uploads/bfc0248d-a5f1-4bc8-a263-dd57c986d9a4.png",
  alt: "Fachada da academia Allp Fit"
}, {
  src: "/lovable-uploads/b561ce33-4af9-49d6-8240-1418f15c7201.png",
  alt: "Vista ampla da área de musculação da Allp Fit"
}, {
  src: "/lovable-uploads/81e99406-3e8b-4e1b-95d0-c0d91441b129.png",
  alt: "Equipamentos de cardio na academia Allp Fit"
}, {
  src: "/lovable-uploads/02b01a54-2477-4e8d-8b53-f5e023427ea9.png",
  alt: "Fileira de esteiras modernas na Allp Fit"
}, {
  src: "/lovable-uploads/d2a7015c-3cec-44fb-8f2c-8c6333e49404.png",
  alt: "Vista aérea da academia Allp Fit com estacionamento"
}, {
  src: "/lovable-uploads/190bf71c-c2fd-427d-a51b-52d34257d3a8.png",
  alt: "Área de equipamentos de musculação com iluminação moderna"
}];

const OurStructureSection = () => {
  return (
    <section className="bg-allpBlack text-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white font-poppins">
            Nossa <span className="text-allpOrange">Estrutura</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-poppins">
            Conheça as modernas instalações da AllpFit, projetadas para oferecer a melhor experiência em fitness.
          </p>
        </div>

        <div className="relative">
          <Carousel className="w-full max-w-5xl mx-auto">
            <CarouselContent>
              {galleryImages.map((image, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-2">
                    <Dialog>
                      <DialogTrigger asChild>
                        <div className="relative group cursor-pointer overflow-hidden rounded-lg">
                          <img
                            src={image.src}
                            alt={image.alt}
                            className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                            <Expand className="text-white w-8 h-8" />
                          </div>
                        </div>
                      </DialogTrigger>
                      <DialogContent className="max-w-4xl bg-allpBlack border-allpOrange/30">
                        <DialogHeader>
                          <DialogTitle className="text-white font-poppins">
                            {image.alt}
                          </DialogTitle>
                        </DialogHeader>
                        <div className="mt-4">
                          <img
                            src={image.src}
                            alt={image.alt}
                            className="w-full h-auto rounded-lg"
                          />
                        </div>
                      </DialogContent>
                    </Dialog>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="border-allpOrange text-allpOrange hover:bg-allpOrange hover:text-white" />
            <CarouselNext className="border-allpOrange text-allpOrange hover:bg-allpOrange hover:text-white" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default OurStructureSection;
