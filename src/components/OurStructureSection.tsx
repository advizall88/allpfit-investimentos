
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
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
import { Button } from "@/components/ui/button";
import { Image as LucideImage, MapPinned } from 'lucide-react'; // Icons for tabs

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z3ltJTIwaW50ZXJpb3J8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=1000&q=80",
    alt: "Interior moderno da academia com equipamentos de cardio",
  },
  {
    src: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Z3ltJTIwaW50ZXJpb3J8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=1000&q=80",
    alt: "Área de musculação com diversos equipamentos",
  },
  {
    src: "https://images.unsplash.com/photo-1593079831268-3381b0db4a77?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Z3ltJTIwaW50ZXJpb3J8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=1000&q=80",
    alt: "Halteres e equipamentos de peso livre",
  },
  {
    src: "https://images.unsplash.com/photo-1540496905036-5937c3760482?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGd5bSUyMGludGVyaW9yfGVufDB8fDB8fHww&auto=format&fit=crop&w=1000&q=80",
    alt: "Visão ampla da academia com iluminação ambiente",
  }
];

const floorPlanImage = {
  src: "https://placehold.co/1200x800?text=Planta+Baixa+Allp+Fit&font=poppins",
  alt: "Planta baixa da academia Allp Fit",
};

const OurStructureSection = () => {
  return (
    <section id="our-structure" className="py-16 md:py-24 bg-allpBlack text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-poppins font-bold text-center mb-12">
          Conheça Nossa <span className="text-allpOrange">Estrutura Completa</span>
        </h2>
        <Tabs defaultValue="gallery" className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:w-1/2 mx-auto bg-allpPurple/20 p-2 rounded-lg mb-8">
            <TabsTrigger value="gallery" className="py-2.5 text-sm md:text-base font-poppins font-medium data-[state=active]:bg-allpOrange data-[state=active]:text-white data-[state=active]:shadow-md rounded-md transition-all flex items-center justify-center gap-2">
              <LucideImage className="h-5 w-5" /> Galeria de Fotos
            </TabsTrigger>
            <TabsTrigger value="floor-plan" className="py-2.5 text-sm md:text-base font-poppins font-medium data-[state=active]:bg-allpOrange data-[state=active]:text-white data-[state=active]:shadow-md rounded-md transition-all flex items-center justify-center gap-2">
              <MapPinned className="h-5 w-5" /> Planta Baixa
            </TabsTrigger>
          </TabsList>

          <TabsContent value="gallery">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full max-w-4xl mx-auto"
            >
              <CarouselContent>
                {galleryImages.map((image, index) => (
                  <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                    <div className="p-1">
                      <div className="aspect-video bg-gray-800 rounded-lg overflow-hidden shadow-lg">
                        <img
                          src={image.src}
                          alt={image.alt}
                          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                        />
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="text-allpOrange border-allpOrange hover:bg-allpOrange hover:text-white disabled:text-gray-500 disabled:border-gray-500" />
              <CarouselNext className="text-allpOrange border-allpOrange hover:bg-allpOrange hover:text-white disabled:text-gray-500 disabled:border-gray-500" />
            </Carousel>
            <p className="text-center text-gray-400 mt-6 text-sm">
              Arraste para ver mais imagens da nossa estrutura.
            </p>
          </TabsContent>

          <TabsContent value="floor-plan">
            <div className="max-w-3xl mx-auto text-center bg-allpPurple/30 p-8 rounded-lg shadow-xl">
              <h3 className="text-2xl font-poppins font-semibold text-allpOrange mb-4">
                Nossa Planta Baixa Detalhada
              </h3>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                Visualize a disposição inteligente dos nossos espaços, incluindo áreas de treino, vestiários, recepção e muito mais. Cada detalhe foi pensado para proporcionar a melhor experiência e otimizar seus resultados.
              </p>
              <Dialog>
                <DialogTrigger asChild>
                  <Button size="lg" className="bg-allpOrange text-white hover:bg-allpOrange/90 font-poppins font-semibold px-8 py-3 text-lg animate-pulse-orange">
                    VER PLANTA BAIXA
                  </Button>
                </DialogTrigger>
                <DialogContent className="bg-allpBlack border-allpPurple max-w-4xl p-0">
                  <DialogHeader className="p-6">
                    <DialogTitle className="text-allpOrange font-poppins text-2xl">Planta Baixa - Allp Fit</DialogTitle>
                  </DialogHeader>
                  <div className="p-2 md:p-6">
                    <img 
                      src={floorPlanImage.src} 
                      alt={floorPlanImage.alt} 
                      className="w-full h-auto rounded-md object-contain max-h-[70vh]" 
                    />
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default OurStructureSection;

