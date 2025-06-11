
import React, { useState } from 'react';
import { Play } from 'lucide-react';

interface CustomVideoPlayerProps {
  videoId: string;
  thumbnailUrl: string;
  title?: string;
}

const CustomVideoPlayer = ({ videoId, thumbnailUrl, title }: CustomVideoPlayerProps) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayClick = () => {
    setIsPlaying(true);
  };

  if (isPlaying) {
    return (
      <div className="aspect-video shadow-2xl rounded-lg overflow-hidden border-2 border-allpOrange animate-fade-in">
        <iframe
          width="100%"
          height="100%"
          src={`https://www.youtube.com/embed/${videoId}?controls=0&rel=0&modestbranding=1&showinfo=0&autoplay=1&mute=0`}
          title={title || "Vídeo Apresentação Allp Fit"}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="bg-gray-800"
        />
      </div>
    );
  }

  return (
    <div 
      className="relative aspect-video shadow-2xl rounded-lg overflow-hidden border-2 border-allpOrange cursor-pointer group animate-scale-in"
      onClick={handlePlayClick}
    >
      {/* Thumbnail Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
        style={{ 
          backgroundImage: `url(${thumbnailUrl})`,
        }}
      />
      
      {/* Overlay gradiente */}
      <div className="absolute inset-0 bg-gradient-to-t from-allpBlack/60 via-transparent to-allpBlack/30" />
      
      {/* Play Button */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative">
          {/* Anel pulsante de fundo */}
          <div className="absolute inset-0 bg-allpOrange/20 rounded-full animate-ping scale-150" />
          <div className="absolute inset-0 bg-allpOrange/10 rounded-full animate-pulse scale-125" />
          
          {/* Botão principal */}
          <button className="relative bg-gradient-to-br from-allpOrange to-orange-700 hover:from-orange-600 hover:to-orange-800 text-white rounded-full p-6 transition-all duration-300 transform hover:scale-110 active:scale-95 shadow-2xl shadow-allpOrange/50 group-hover:shadow-allpOrange/70">
            <Play 
              className="h-12 w-12 ml-1 drop-shadow-lg" 
              fill="currentColor" 
            />
          </button>
        </div>
      </div>
      
      {/* Título do vídeo (opcional) */}
      {title && (
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="text-white text-lg font-poppins font-semibold drop-shadow-lg">
            {title}
          </h3>
        </div>
      )}
      
      {/* Indicador de reprodução */}
      <div className="absolute top-4 right-4">
        <div className="bg-allpBlack/70 backdrop-blur-sm rounded-full px-3 py-1">
          <span className="text-white text-sm font-poppins">▶ Clique para assistir</span>
        </div>
      </div>
    </div>
  );
};

export default CustomVideoPlayer;
