
import React from 'react';
import { Zap, Award, BarChart } from 'lucide-react'; // Example icons

const AboutAllpFitSection = () => {
  const features = [
    {
      icon: <Zap className="h-10 w-10 text-allpOrange mb-4" />,
      title: "Tecnologia de Ponta",
      description: "Equipamentos modernos e sistemas inteligentes para otimizar seus treinos e resultados.",
    },
    {
      icon: <Award className="h-10 w-10 text-allpOrange mb-4" />,
      title: "Metodologia Exclusiva",
      description: "Programas de treino desenvolvidos por especialistas, focados em performance e bem-estar.",
    },
    {
      icon: <BarChart className="h-10 w-10 text-allpOrange mb-4" />,
      title: "Resultados Comprovados",
      description: "Nossos membros alcançam seus objetivos de forma consistente e sustentável.",
    },
  ];

  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-poppins font-bold text-center mb-4 text-allpPurple">
          Conheça a Allp Fit
        </h2>
        <p className="text-lg text-gray-700 text-center mb-12 max-w-2xl mx-auto">
          A Allp Fit não é apenas uma academia, é um centro de transformação. Combinamos tecnologia, metodologia e uma comunidade vibrante para você alcançar sua melhor versão.
        </p>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          {features.map((feature, index) => (
            <div key={index} className="bg-gray-50 p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <div className="flex justify-center">{feature.icon}</div>
              <h3 className="text-xl font-poppins font-semibold text-allpPurple mt-4 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
        {/* Placeholder for images of facilities */}
        <div className="mt-12 grid md:grid-cols-2 gap-4">
            <img src="https://images.unsplash.com/photo-1581009137052-c40978504edf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z3ltJTIwZXF1aXBtZW50fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="Instalações Allp Fit 1" className="rounded-lg shadow-lg w-full h-64 object-cover"/>
            <img src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Z3ltfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="Aulas na Allp Fit" className="rounded-lg shadow-lg w-full h-64 object-cover"/>
        </div>
      </div>
    </section>
  );
};

export default AboutAllpFitSection;
