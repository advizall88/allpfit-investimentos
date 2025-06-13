
import React from 'react';
import { Quote, PlayCircle, Star } from 'lucide-react';

const VideoSection = () => {
  // Vídeo do depoimento do franqueado
  const videoEmbedUrl = "https://www.youtube.com/embed/itofJyoIcLE";

  return (
    <section id="franchisee-testimonial" className="py-16 md:py-24 bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-hidden">
      {/* Elementos decorativos sutis */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-allpPurple/20 to-allpOrange/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-allpOrange/10 to-allpPurple/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-12">
          {/* Ícone de quote */}
          <div className="flex justify-center mb-6">
            <div className="bg-gradient-to-br from-allpPurple to-allpBlack rounded-full p-4 shadow-lg">
              <Quote className="w-8 h-8 text-white" />
            </div>
          </div>

          <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-6 text-allpBlack">
            Depoimento de{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-allpPurple to-allpOrange">
              Franqueado de Sucesso
            </span>
          </h2>
          
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed font-poppins">
            Conheça a história real de transformação e sucesso de um dos nossos franqueados. 
            Veja como a Allp Fit mudou sua vida profissional e financeira.
          </p>
        </div>

        {/* Container do vídeo com design mais elegante */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="relative group">
            {/* Sombra decorativa */}
            <div className="absolute -inset-4 bg-gradient-to-r from-allpPurple/20 via-allpOrange/20 to-allpPurple/20 rounded-2xl blur-xl opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
            
            {/* Container do vídeo */}
            <div className="relative aspect-video shadow-2xl rounded-xl overflow-hidden border border-gray-200/50 bg-white p-2">
              <iframe
                width="100%"
                height="100%"
                src={videoEmbedUrl}
                title="Depoimento Franqueado Allp Fit"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="bg-gray-800 rounded-lg"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Informações do franqueado */}
        <div className="max-w-3xl mx-auto bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-gray-200/50">
          <div className="text-center">
            {/* Avaliação com estrelas */}
            <div className="flex justify-center mb-4">
              {Array(5).fill(0).map((_, i) => (
                <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
              ))}
            </div>
            
            <blockquote className="text-xl md:text-2xl font-poppins text-gray-700 italic mb-6 leading-relaxed">
              "A Allp Fit transformou completamente minha vida. Nunca imaginei que seria possível 
              ter um negócio tão próspero e bem estruturado."
            </blockquote>
            
            <div className="border-t border-gray-200 pt-6">
              <p className="font-poppins font-semibold text-lg text-allpBlack mb-1">
                Franqueado Allp Fit
              </p>
              <p className="text-gray-600 font-poppins">
                Empreendedor de Sucesso
              </p>
            </div>
          </div>
        </div>

        {/* Call to action */}
        <div className="text-center mt-12">
          <div className="flex items-center justify-center mb-4">
            <PlayCircle className="h-6 w-6 text-allpOrange mr-3" />
            <p className="text-gray-600 font-poppins text-lg">
              Assista ao depoimento completo e inspire-se!
            </p>
          </div>
          
          <button
            className="bg-gradient-to-r from-allpPurple to-allpBlack hover:from-allpOrange hover:to-allpPurple 
                       text-white font-poppins font-semibold py-4 px-8 rounded-xl 
                       transition-all duration-300 transform hover:scale-105 
                       hover:shadow-xl hover:shadow-purple-400/20 active:scale-95
                       border border-allpPurple/20"
          >
            QUERO SER O PRÓXIMO FRANQUEADO
          </button>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
