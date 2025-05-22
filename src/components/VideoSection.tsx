
import React from 'react';
import { PlayCircle } from 'lucide-react'; // Usando um ícone relacionado a vídeo

const VideoSection = () => {
  // TODO: Substitua este URL pelo link do seu vídeo embed (ex: YouTube, Vimeo)
  const videoEmbedUrl = "https://www.youtube.com/embed/d9hL2TKv9aA"; // Link atualizado

  return (
    <section id="presentation-video" className="py-16 md:py-24 bg-allpBlack text-white">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-4">
            Assista Nossa <span className="text-allpOrange">Apresentação</span>
          </h2>
          <p className="text-lg text-gray-300">
            Veja em detalhes como a Allp Fit pode ser o seu próximo grande investimento.
          </p>
        </div>
        <div className="max-w-3xl mx-auto aspect-video shadow-2xl rounded-lg overflow-hidden border-2 border-allpOrange">
          {/* 
            Opção 1: Iframe para YouTube/Vimeo (recomendado)
            Substitua o src pelo link de embed do seu vídeo.
            Para YouTube, use o formato: https://www.youtube.com/embed/SEU_VIDEO_ID
            Para Vimeo, use o formato: https://player.vimeo.com/video/SEU_VIDEO_ID
          */}
          <iframe
            width="100%"
            height="100%"
            src={videoEmbedUrl}
            title="Vídeo de Apresentação Allp Fit"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="bg-gray-800"
          ></iframe>

          {/* 
            Opção 2: Tag <video> para arquivos MP4 diretos (menos recomendado para vídeos longos)
            Se você for usar um arquivo de vídeo hospedado diretamente:
            <video
              controls
              width="100%"
              className="rounded-lg"
              poster="/lovable-uploads/seu-thumbnail.png" // Opcional: adicione um thumbnail
            >
              <source src="/lovable-uploads/seu-video.mp4" type="video/mp4" />
              Seu navegador não suporta a tag de vídeo.
            </video>
          */}
        </div>
        <div className="text-center mt-8">
          <p className="text-gray-400 font-poppins">
            <PlayCircle className="inline-block mr-2 h-5 w-5 text-allpOrange" />
            Clique no play para conhecer mais sobre a oportunidade Allp Fit!
          </p>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
