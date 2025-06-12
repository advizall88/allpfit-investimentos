
import React from 'react';
import { 
  Home, 
  PencilRuler, 
  GraduationCap, 
  Users, 
  BarChart3, 
  LineChart, 
  Database, 
  FileText, 
  Scale, 
  CalendarCheck 
} from 'lucide-react';

const SupportProcessesSection = () => {
  const serviceCategories = [
    {
      title: 'Propriedade & Equipamentos',
      services: [
        {
          name: 'BUSCA DE IMÓVEIS',
          icon: <Home className="w-5 h-5" />,
        },
        {
          name: 'SELEÇÃO DE EQUIPAMENTOS',
          icon: <PencilRuler className="w-5 h-5" />,
        },
        {
          name: 'PROJETO ARQUITETÔNICO',
          icon: <PencilRuler className="w-5 h-5" />,
        },
      ],
    },
    {
      title: 'Treinamento & Equipe',
      services: [
        {
          name: 'TREINAMENTO FRANQUEADO',
          icon: <GraduationCap className="w-5 h-5" />,
        },
        {
          name: 'TREINAMENTO DA EQUIPE',
          icon: <Users className="w-5 h-5" />,
        },
      ],
    },
    {
      title: 'Gestão & Marketing',
      services: [
        {
          name: 'SISTEMA DE GESTÃO',
          icon: <BarChart3 className="w-5 h-5" />,
        },
        {
          name: 'APOIO MARKETING',
          icon: <LineChart className="w-5 h-5" />,
        },
        {
          name: 'SISTEMA DE B.I',
          icon: <Database className="w-5 h-5" />,
        },
      ],
    },
    {
      title: 'Jurídico & Compliance',
      services: [
        {
          name: 'APOIO FISCAL E DOCUMENTAL',
          icon: <FileText className="w-5 h-5" />,
        },
        {
          name: 'APOIO JURÍDICO (20% salário min)',
          icon: <Scale className="w-5 h-5" />,
        },
        {
          name: 'ASSESSORIA SEMANAL',
          icon: <CalendarCheck className="w-5 h-5" />,
        },
      ],
    },
  ];

  return (
    <section id="support-processes" className="py-16 md:py-24 bg-gradient-to-br from-allpBlack via-gray-900 to-allpPurple/20 text-white relative overflow-hidden">
      {/* Elementos decorativos de fundo */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-allpOrange/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-allpPurple/15 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-allpOrange/5 to-allpPurple/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-poppins font-bold mb-6 leading-tight">
            TIME PRONTO PARA DAR{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-allpOrange via-orange-400 to-allpPurple">
              SUPORTE EM
              <br />
              TODOS OS PROCESSOS
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-allpOrange to-allpPurple rounded-full mx-auto mb-6"></div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed font-poppins">
            Nossa equipe especializada oferece suporte completo para o sucesso do seu
            negócio, desde a implantação até a operação contínua.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {serviceCategories.map((category, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-gray-900/80 via-gray-800/60 to-gray-900/80 
                         backdrop-blur-sm rounded-2xl p-8 
                         border border-gradient-to-r from-allpOrange/30 to-allpPurple/30
                         hover:transform hover:scale-[1.02] transition-all duration-500 
                         hover:shadow-2xl hover:shadow-allpOrange/20
                         before:absolute before:inset-0 before:rounded-2xl before:p-[1px] 
                         before:bg-gradient-to-r before:from-allpOrange/40 before:to-allpPurple/40 before:-z-10"
            >
              {/* Borda gradiente */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-allpOrange/20 to-allpPurple/20 p-[1px]">
                <div className="h-full w-full rounded-2xl bg-gradient-to-br from-gray-900/80 via-gray-800/60 to-gray-900/80"></div>
              </div>

              {/* Conteúdo */}
              <div className="relative z-10">
                <h3 className="text-2xl font-poppins font-bold mb-6 bg-gradient-to-r from-allpOrange to-allpPurple bg-clip-text text-transparent group-hover:from-orange-300 group-hover:to-purple-300 transition-all duration-300">
                  {category.title}
                </h3>
                <ul className="space-y-5">
                  {category.services.map((service, idx) => (
                    <li
                      key={idx}
                      className="flex items-center group/item hover:transform hover:translate-x-2 transition-all duration-300"
                    >
                      <div
                        className="bg-gradient-to-br from-allpOrange via-orange-500 to-allpPurple rounded-full p-2.5 mr-4 flex-shrink-0
                                    shadow-lg group-hover/item:shadow-allpOrange/50 transition-all duration-300
                                    group-hover/item:scale-110 group-hover/item:rotate-3"
                      >
                        {service.icon}
                      </div>
                      <span className="font-poppins font-medium text-gray-100 group-hover/item:text-white group-hover/item:font-semibold transition-all duration-300">
                        {service.name}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Elemento decorativo no card */}
              <div className="absolute top-4 right-4 w-12 h-12 bg-gradient-to-br from-allpOrange/20 to-allpPurple/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button
            className="relative bg-gradient-to-r from-allpOrange via-orange-500 to-allpPurple text-white 
                       font-poppins font-bold py-4 px-12 rounded-full transition-all duration-300 
                       transform hover:scale-105 hover:shadow-2xl hover:shadow-allpOrange/30
                       active:scale-95 overflow-hidden group"
          >
            {/* Efeito de brilho no botão */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            <span className="relative z-10">FALE COM NOSSA EQUIPE</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default SupportProcessesSection;
