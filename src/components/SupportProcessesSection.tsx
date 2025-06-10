
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
    <section id="support-processes" className="py-16 md:py-24 bg-gradient-to-b from-allpBlack to-gray-900 text-white relative">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-poppins font-bold mb-6 leading-tight">
            TIME PRONTO PARA DAR{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-allpOrange to-orange-400">
              SUPORTE EM
              <br />
              TODOS OS PROCESSOS
            </span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed font-poppins">
            Nossa equipe especializada oferece suporte completo para o sucesso do seu
            negócio, desde a implantação até a operação contínua.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {serviceCategories.map((category, index) => (
            <div
              key={index}
              className="group bg-gray-900/70 backdrop-blur-sm rounded-xl p-8 border-l-4 border-allpOrange 
                         hover:transform hover:scale-102 transition-all duration-300 
                         hover:shadow-xl hover:shadow-allpOrange/10"
            >
              <h3 className="text-2xl font-poppins font-bold mb-6 text-allpOrange group-hover:text-orange-300 transition-colors">
                {category.title}
              </h3>
              <ul className="space-y-5">
                {category.services.map((service, idx) => (
                  <li
                    key={idx}
                    className="flex items-center group/item hover:transform hover:translate-x-2 transition-all duration-300"
                  >
                    <div
                      className="bg-gradient-to-br from-allpOrange to-orange-600 rounded-full p-2 mr-4 flex-shrink-0
                                  shadow-lg group-hover/item:shadow-allpOrange/50 transition-all duration-300"
                    >
                      {service.icon}
                    </div>
                    <span className="font-poppins font-medium text-gray-100 group-hover/item:text-white transition-colors">
                      {service.name}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button
            className="bg-gradient-to-r from-allpOrange to-orange-600 text-white 
                       font-poppins font-bold py-4 px-10 rounded-full transition-all duration-300 
                       transform hover:scale-105 hover:shadow-xl hover:shadow-allpOrange/20
                       active:scale-95"
          >
            FALE COM NOSSA EQUIPE
          </button>
        </div>
      </div>
    </section>
  );
};

export default SupportProcessesSection;
