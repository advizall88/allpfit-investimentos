
import React from 'react';

const WhoWeAreSection = () => {
  return (
    <section 
      id="who-we-are" 
      className="relative py-20 md:py-32 text-white bg-gradient-to-br from-allpBlack via-gray-900 to-allpBlack overflow-hidden"
    >
      {/* Efeitos de fundo animados */}
      <div className="absolute inset-0">
        {/* Gradiente principal */}
        <div className="absolute inset-0 bg-gradient-to-r from-allpPurple/10 via-transparent to-allpOrange/5" />
        
        {/* Efeitos de luz ambiente */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-allpPurple/20 to-allpOrange/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-l from-allpOrange/15 to-allpPurple/20 rounded-full blur-3xl animate-pulse delay-1000" />
        
        {/* Padrão de pontos decorativo */}
        <div className="absolute top-10 right-10 w-2 h-2 bg-allpOrange rounded-full animate-ping" />
        <div className="absolute bottom-20 left-20 w-2 h-2 bg-allpPurple rounded-full animate-ping delay-500" />
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-allpOrange rounded-full animate-pulse" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-16">
          
          {/* Coluna da Imagem */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
            <div className="text-center group">
              {/* Container da imagem com efeitos */}
              <div className="relative inline-block">
                {/* Moldura decorativa de fundo */}
                <div className="absolute -inset-4 bg-gradient-to-r from-allpOrange via-allpPurple to-allpOrange rounded-2xl blur-lg opacity-30 group-hover:opacity-50 transition-all duration-500 animate-pulse" />
                
                {/* Moldura principal */}
                <div className="relative bg-gradient-to-br from-allpPurple/30 to-allpOrange/20 p-1 rounded-2xl backdrop-blur-sm border border-allpOrange/30 shadow-2xl">
                  <img 
                    src="/lovable-uploads/2a9ae914-9e92-46b4-b9fe-1c01a35a5b2a.png" 
                    alt="Vinicius Rezende - Diretor de Expansão Allp Fit" 
                    className="rounded-xl shadow-2xl object-cover w-full max-w-md h-auto md:max-h-[500px] transition-all duration-700 group-hover:scale-105 group-hover:shadow-allpOrange/30"
                  />
                  
                  {/* Overlay com gradiente sutil */}
                  <div className="absolute inset-1 rounded-xl bg-gradient-to-t from-allpBlack/20 via-transparent to-transparent pointer-events-none" />
                </div>
                
                {/* Efeitos de brilho */}
                <div className="absolute top-4 left-4 w-8 h-8 bg-gradient-to-br from-allpOrange to-transparent rounded-full opacity-60 blur-sm" />
                <div className="absolute bottom-4 right-4 w-6 h-6 bg-gradient-to-tl from-allpPurple to-transparent rounded-full opacity-40 blur-sm" />
              </div>
              
              {/* Nome com animação */}
              <div className="mt-8 animate-fade-in-delay-1">
                <h2 className="text-3xl md:text-4xl font-poppins font-bold bg-gradient-to-r from-allpOrange via-orange-400 to-allpOrange bg-clip-text text-transparent animate-glow">
                  Vínicius Rezende
                </h2>
                <div className="mt-2 h-1 w-32 bg-gradient-to-r from-transparent via-allpOrange to-transparent mx-auto rounded-full" />
              </div>
            </div>
          </div>
          
          {/* Coluna do Texto */}
          <div className="w-full lg:w-1/2 text-left">
            <div className="relative">
              {/* Fundo do cartão com efeitos */}
              <div className="absolute -inset-2 bg-gradient-to-r from-allpPurple/20 to-allpOrange/10 rounded-2xl blur-lg" />
              
              <div className="relative bg-gradient-to-br from-allpPurple/40 via-allpPurple/30 to-allpPurple/20 p-8 md:p-10 rounded-2xl backdrop-blur-sm border border-allpPurple/30 shadow-2xl hover:shadow-allpPurple/20 transition-all duration-500">
                
                {/* Quote decorativo */}
                <div className="absolute -top-4 -left-4 text-6xl text-allpOrange/30 font-serif leading-none">"</div>
                
                <div className="space-y-6">
                  {/* Primeira citação */}
                  <p className="text-xl md:text-2xl text-gray-100 leading-relaxed font-light italic relative pl-4 border-l-2 border-allpOrange/50 animate-fade-in">
                    "Sou empresário e Diretor de Expansão da Allp Fit, uma das redes fitness que mais cresce no país."
                  </p>
                  
                  {/* Parágrafos principais */}
                  <div className="space-y-5 animate-fade-in-delay-1">
                    <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
                      Após anos liderando projetos de sucesso no setor, decidi abrir uma oportunidade única: a venda de cotas da nossa nova unidade — um investimento{' '}
                      <span className="text-allpOrange font-semibold bg-allpOrange/10 px-2 py-1 rounded-lg border border-allpOrange/20">
                        acessível, lucrativo e com gestão profissional
                      </span>.
                    </p>
                    
                    <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
                      Não é só uma academia. É um{' '}
                      <span className="text-allpOrange font-semibold bg-allpOrange/10 px-2 py-1 rounded-lg border border-allpOrange/20">
                        negócio inteligente
                      </span>, em um mercado sólido e em expansão.
                    </p>
                    
                    <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
                      Se você busca investir com propósito e retorno real,{' '}
                      <span className="text-allpOrange font-semibold bg-allpOrange/10 px-2 py-1 rounded-lg border border-allpOrange/20">
                        essa é a hora
                      </span>.
                    </p>
                  </div>
                  
                  {/* Mensagem final destacada */}
                  <div className="relative mt-8 animate-fade-in-delay-2">
                    <div className="absolute inset-0 bg-gradient-to-r from-allpOrange/20 to-allpPurple/20 rounded-xl blur-sm" />
                    <div className="relative bg-gradient-to-r from-allpOrange/10 to-allpPurple/10 p-6 rounded-xl border border-allpOrange/30 text-center">
                      <p className="text-2xl md:text-3xl text-allpOrange leading-relaxed font-bold">
                        Vamos crescer juntos.
                      </p>
                      
                      {/* Linha decorativa */}
                      <div className="mt-4 flex justify-center">
                        <div className="h-1 w-24 bg-gradient-to-r from-allpOrange to-allpPurple rounded-full" />
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Quote decorativo de fechamento */}
                <div className="absolute -bottom-4 -right-4 text-6xl text-allpOrange/30 font-serif leading-none rotate-180">"</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAreSection;
