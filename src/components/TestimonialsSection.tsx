
import React from 'react';
import { Star } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'; // Assuming you have shadcn Card

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Carlos Silva",
      role: "Aluno Satisfeito",
      quote: "A Allp Fit transformou minha relação com os treinos. Resultados incríveis e uma equipe fantástica!",
      stars: 5,
      // videoUrl: "https://www.youtube.com/embed/VIDEO_ID_1" // Placeholder
    },
    {
      name: "Ana Pereira",
      role: "Investidora Visionária",
      quote: "Investir na Allp Fit foi a melhor decisão. Um negócio com propósito e grande potencial de crescimento.",
      stars: 5,
      // videoUrl: "https://www.youtube.com/embed/VIDEO_ID_2" // Placeholder
    },
    {
      name: "João Mendes",
      role: "Aluno Dedicado",
      quote: "Infraestrutura de ponta e os melhores profissionais. Recomendo de olhos fechados!",
      stars: 5,
    }
  ];

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-poppins font-bold text-center mb-12 text-allpPurple">
          O Que Dizem Nossos <span className="text-allpOrange">Clientes e Investidores</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                {/* Placeholder for video thumbnail or image */}
                {/* testimonial.videoUrl ? (
                  <div className="aspect-video mb-4">
                    <iframe width="100%" height="100%" src={testimonial.videoUrl} title={testimonial.name} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen className="rounded-t-md"></iframe>
                  </div>
                ) : (
                  <img src={`https://source.unsplash.com/random/400x225?portrait&sig=${index}`} alt={testimonial.name} className="w-full h-48 object-cover rounded-t-md mb-4"/>
                )*/}
                <img src={`https://source.unsplash.com/random/400x225?portrait,person&sig=${index}`} alt={testimonial.name} className="w-full h-48 object-cover rounded-t-md mb-4"/>
                <CardTitle className="text-allpPurple font-poppins">{testimonial.name}</CardTitle>
                <p className="text-sm text-allpOrange">{testimonial.role}</p>
              </CardHeader>
              <CardContent>
                <div className="flex mb-2">
                  {Array(testimonial.stars).fill(0).map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 italic">"{testimonial.quote}"</p>
              </CardContent>
            </Card>
          ))}
        </div>
        {/* Placeholder for statistics */}
        <div className="mt-16 text-center">
            <h3 className="text-2xl font-poppins font-semibold text-allpPurple mb-4">Resultados que Inspiram</h3>
            <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <p className="text-4xl font-bold text-allpOrange">95%</p>
                    <p className="text-gray-700">Taxa de Satisfação dos Alunos</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <p className="text-4xl font-bold text-allpOrange">30%</p>
                    <p className="text-gray-700">Crescimento Anual da Academia</p>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
