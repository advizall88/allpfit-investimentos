
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
    <section id="support-processes" className="py-16 md:py-24 bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-hidden">
      {/* Elementos decorativos sutis com cores da Allp Fit */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-purple-50 to-purple-100 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-orange-50 to-orange-100 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-gray-50 to-purple-50 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-poppins font-bold mb-6 leading-tight text-allpBlack">
            TIME PRONTO PARA DAR{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-allpPurple via-allpPurple to-allpOrange">
              SUPORTE EM
              <br />
              TODOS OS PROCESSOS
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-allpPurple to-allpOrange rounded-full mx-auto mb-6"></div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed font-poppins">
            Nossa equipe especializada oferece suporte completo para o sucesso do seu
            negócio, desde a implantação até a operação contínua.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {serviceCategories.map((category, index) => (
            <div
              key={index}
              className="group relative bg-white/90 backdrop-blur-sm rounded-2xl p-8 
                         border border-gray-200/60 shadow-xl shadow-gray-200/50
                         hover:transform hover:scale-[1.02] transition-all duration-500 
                         hover:shadow-2xl hover:shadow-purple-300/20
                         hover:bg-white/95 hover:border-purple-200/50"
            >
              {/* Borda sutil no hover com cores da Allp Fit */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-50/30 to-orange-50/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>

              {/* Conteúdo */}
              <div className="relative z-10">
                <h3 className="text-2xl font-poppins font-bold mb-6 text-allpBlack group-hover:text-allpPurple transition-colors duration-300">
                  {category.title}
                </h3>
                <ul className="space-y-5">
                  {category.services.map((service, idx) => (
                    <li
                      key={idx}
                      className="flex items-center group/item hover:transform hover:translate-x-2 transition-all duration-300"
                    >
                      <div
                        className="bg-gradient-to-br from-allpPurple to-allpBlack rounded-xl p-3 mr-4 flex-shrink-0
                                    shadow-lg group-hover/item:shadow-purple-400/50 transition-all duration-300
                                    group-hover/item:scale-110 group-hover/item:bg-gradient-to-br group-hover/item:from-allpOrange group-hover/item:to-allpPurple"
                      >
                        <div className="text-white">
                          {service.icon}
                        </div>
                      </div>
                      <span className="font-poppins font-medium text-gray-700 group-hover/item:text-allpBlack group-hover/item:font-semibold transition-all duration-300">
                        {service.name}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Elemento decorativo sutil no card */}
              <div className="absolute top-4 right-4 w-8 h-8 bg-gradient-to-br from-purple-200/30 to-orange-200/30 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button
            className="relative bg-gradient-to-r from-allpPurple via-allpBlack to-allpPurple text-white 
                       font-poppins font-semibold py-4 px-12 rounded-xl transition-all duration-300 
                       transform hover:scale-105 hover:shadow-xl hover:shadow-purple-400/30
                       active:scale-95 overflow-hidden group border border-purple-600/20
                       hover:bg-gradient-to-r hover:from-allpOrange hover:via-allpPurple hover:to-allpBlack"
          >
            {/* Efeito de brilho sutil no botão */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            <span className="relative z-10">FALE COM NOSSA EQUIPE</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default SupportProcessesSection;
