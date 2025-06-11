
import React, { useEffect, useState } from 'react';
import {
  TrendingUp,
  Star,
  Award,
  CheckSquare,
  DollarSign,
  MapPin,
  ChevronDown,
  ChevronUp,
  User,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import AllpFitLogo from './AllpFitLogo';

const WhyInvestSection = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [expandedCard, setExpandedCard] = useState<number | null>(null);
  const [animatedStats, setAnimatedStats] = useState({
    marketRank: 0,
    healthPlans: 0,
    currentUnits: 0,
    targetUnits: 0,
    students: 0,
  });

  // Animate stats when component mounts
  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedStats({
        marketRank: 2,
        healthPlans: 65,
        currentUnits: 25,
        targetUnits: 400,
        students: 800000,
      });
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  // Testimonial data
  const testimonials = [
    {
      name: 'Carlos Silva',
      location: 'São Paulo',
      text: 'Investir na allp fit foi a melhor decisão que tomei. O suporte da equipe é excepcional e os resultados superaram minhas expectativas.',
      role: 'Franqueado desde 2021',
    },
    {
      name: 'Ana Oliveira',
      location: 'Rio de Janeiro',
      text: 'A estrutura e tecnologia oferecidas pela allp fit são incomparáveis. Minha academia está sempre lotada e os clientes adoram.',
      role: 'Franqueada desde 2022',
    },
    {
      name: 'Marcos Santos',
      location: 'Belo Horizonte',
      text: 'O retorno sobre o investimento foi muito mais rápido do que eu esperava. A marca é forte e o modelo de negócio é sólido.',
      role: 'Franqueado desde 2020',
    },
  ];

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const toggleCard = (index: number) => {
    if (expandedCard === index) {
      setExpandedCard(null);
    } else {
      setExpandedCard(index);
    }
  };

  const handleWhatsAppRedirect = () => {
    window.open('https://wa.me/5567998184460?text=Ol%C3%A1!%20Acabei%20de%20vir%20da%20landing%20page%20e%20quero%20saber%20mais%20sobre%20o%20lan%C3%A7amento!', '_blank');
  };

  return (
    <section id="why-invest" className="bg-[#411e81] bg-opacity-10 text-white min-h-screen w-full py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-poppins font-bold mb-2">
            Por que investir na{' '}
            <AllpFitLogo className="inline-block h-8 md:h-10 w-auto mx-1 align-middle" alt="Allp Fit Logo" />
            ?
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto mt-4">
            Descubra por que somos a escolha ideal para o seu próximo
            investimento no mercado fitness em crescimento no Brasil
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {/* Card 1 - Setor em Crescimento */}
          <div
            className={`bg-gray-900 rounded-lg p-6 transition-all duration-300 hover:bg-[#411e81] hover:bg-opacity-20 cursor-pointer ${
              expandedCard === 0 ? 'md:col-span-2 md:row-span-2' : ''
            }`}
            onClick={() => toggleCard(0)}
          >
            <div className="flex justify-between items-start">
              <div className="bg-allpOrange p-3 rounded-lg mb-4">
                <TrendingUp className="text-black h-6 w-6" />
              </div>
              {expandedCard !== 0 && (
                <ChevronDown className="h-5 w-5 text-allpOrange" />
              )}
              {expandedCard === 0 && (
                <ChevronUp className="h-5 w-5 text-allpOrange" />
              )}
            </div>
            <h3 className="text-xl font-poppins font-semibold mb-2 text-allpOrange">
              Setor em Crescimento
            </h3>
            <p className="mb-4">
              Brasil:{' '}
              <span className="font-bold">{animatedStats.marketRank}º</span>{' '}
              maior mercado de academias.{' '}
              <span className="font-bold">{animatedStats.healthPlans}%</span>{' '}
              dos brasileiros planejam cuidar mais da saúde em 2024.
            </p>
            {expandedCard === 0 && (
              <div className="mt-4 space-y-4 transition-all duration-300">
                <div className="bg-gray-800 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">
                    Crescimento do Mercado Fitness
                  </h4>
                  <div className="h-6 bg-gray-700 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-allpOrange rounded-full"
                      style={{
                        width: '65%',
                      }}
                    ></div>
                  </div>
                  <div className="flex justify-between text-sm mt-1">
                    <span>2022</span>
                    <span>2024 (+65%)</span>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Projeções para 2025</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-300">
                    <li>Aumento de 30% no número de academias</li>
                    <li>Crescimento do ticket médio em 15%</li>
                    <li>Expansão para novas regiões do país</li>
                  </ul>
                </div>
              </div>
            )}
          </div>

          {/* Card 2 - Reputação Sólida */}
          <div
            className={`bg-gray-900 rounded-lg p-6 transition-all duration-300 hover:bg-[#411e81] hover:bg-opacity-20 cursor-pointer ${
              expandedCard === 1 ? 'md:col-span-2 md:row-span-2' : ''
            }`}
            onClick={() => toggleCard(1)}
          >
            <div className="flex justify-between items-start">
              <div className="bg-allpOrange p-3 rounded-lg mb-4">
                <Star className="text-black h-6 w-6" />
              </div>
              {expandedCard !== 1 && (
                <ChevronDown className="h-5 w-5 text-allpOrange" />
              )}
              {expandedCard === 1 && (
                <ChevronUp className="h-5 w-5 text-allpOrange" />
              )}
            </div>
            <h3 className="text-xl font-poppins font-semibold mb-2 text-allpOrange">
              Reputação Sólida
            </h3>
            <p className="mb-4">
              +<span className="font-bold">{animatedStats.currentUnits}</span>{' '}
              unidades (+60 mil alunos). Expansão para{' '}
              <span className="font-bold">{animatedStats.targetUnits}</span>{' '}
              unidades e{' '}
              <span className="font-bold">
                {(animatedStats.students / 1000000).toFixed(1)}
              </span>{' '}
              milhões de alunos até 2026.
            </p>
            {expandedCard === 1 && (
              <div className="mt-4 space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-800 p-4 rounded-lg text-center">
                    <div className="text-3xl font-bold text-allpOrange">
                      98%
                    </div>
                    <div className="text-sm text-gray-300">
                      Taxa de sucesso das franquias
                    </div>
                  </div>
                  <div className="bg-gray-800 p-4 rounded-lg text-center">
                    <div className="text-3xl font-bold text-allpOrange">
                      4.8/5
                    </div>
                    <div className="text-sm text-gray-300">
                      Avaliação média dos clientes
                    </div>
                  </div>
                </div>
                <div className="bg-gray-800 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">
                    Crescimento de Unidades
                  </h4>
                  <div className="flex items-end h-20 space-x-2">
                    <div className="bg-allpOrange h-1/3 w-1/4 rounded-t-md"></div>
                    <div className="bg-allpOrange h-1/2 w-1/4 rounded-t-md"></div>
                    <div className="bg-allpOrange h-2/3 w-1/4 rounded-t-md"></div>
                    <div className="bg-allpOrange h-full w-1/4 rounded-t-md"></div>
                  </div>
                  <div className="flex justify-between text-xs mt-1">
                    <span>2021</span>
                    <span>2022</span>
                    <span>2023</span>
                    <span>2024</span>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Card 3 - Tecnologia de Ponta */}
          <div
            className={`bg-gray-900 rounded-lg p-6 transition-all duration-300 hover:bg-[#411e81] hover:bg-opacity-20 cursor-pointer ${
              expandedCard === 2 ? 'md:col-span-2 md:row-span-2' : ''
            }`}
            onClick={() => toggleCard(2)}
          >
            <div className="flex justify-between items-start">
              <div className="bg-allpOrange p-3 rounded-lg mb-4">
                <Award className="text-black h-6 w-6" />
              </div>
              {expandedCard !== 2 && (
                <ChevronDown className="h-5 w-5 text-allpOrange" />
              )}
              {expandedCard === 2 && (
                <ChevronUp className="h-5 w-5 text-allpOrange" />
              )}
            </div>
            <h3 className="text-xl font-poppins font-semibold mb-2 text-allpOrange">
              Tecnologia de Ponta
            </h3>
            <p className="mb-4">
              Equipamentos de fitness de última linha (Matrix®) para
              eficiência, segurança e conforto.
            </p>
            {expandedCard === 2 && (
              <div className="mt-4 space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-800 p-4 rounded-lg flex flex-col items-center">
                    <div className="text-allpOrange mb-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-10 w-10"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                        />
                      </svg>
                    </div>
                    <div className="text-sm text-center">
                      Sistema de segurança avançado
                    </div>
                  </div>
                  <div className="bg-gray-800 p-4 rounded-lg flex flex-col items-center">
                    <div className="text-allpOrange mb-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-10 w-10"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                        />
                      </svg>
                    </div>
                    <div className="text-sm text-center">
                      Monitoramento de desempenho
                    </div>
                  </div>
                </div>
                <div className="bg-gray-800 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Vantagens Tecnológicas</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <CheckSquare className="h-4 w-4 text-allpOrange mr-2" />
                      <span>Aplicativo exclusivo para alunos</span>
                    </li>
                    <li className="flex items-center">
                      <CheckSquare className="h-4 w-4 text-allpOrange mr-2" />
                      <span>Sistema de gestão integrado</span>
                    </li>
                    <li className="flex items-center">
                      <CheckSquare className="h-4 w-4 text-allpOrange mr-2" />
                      <span>Controle de acesso biométrico</span>
                    </li>
                  </ul>
                </div>
              </div>
            )}
          </div>

          {/* Card 4 - Suporte Estratégico */}
          <div
            className={`bg-gray-900 rounded-lg p-6 transition-all duration-300 hover:bg-[#411e81] hover:bg-opacity-20 cursor-pointer ${
              expandedCard === 3 ? 'md:col-span-2 md:row-span-2' : ''
            }`}
            onClick={() => toggleCard(3)}
          >
            <div className="flex justify-between items-start">
              <div className="bg-allpOrange p-3 rounded-lg mb-4">
                <User className="text-black h-6 w-6" />
              </div>
              {expandedCard !== 3 && (
                <ChevronDown className="h-5 w-5 text-allpOrange" />
              )}
              {expandedCard === 3 && (
                <ChevronUp className="h-5 w-5 text-allpOrange" />
              )}
            </div>
            <h3 className="text-xl font-poppins font-semibold mb-2 text-allpOrange">
              Suporte Estratégico
            </h3>
            <p className="mb-4">
              Processo de franquia transparente, suporte em todas as etapas e
              treinamento contínuo.
            </p>
            {expandedCard === 3 && (
              <div className="mt-4 space-y-4">
                <div className="bg-gray-800 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Jornada do Franqueado</h4>
                  <div className="relative">
                    <div className="absolute left-4 h-full w-0.5 bg-allpOrange"></div>
                    <div className="space-y-6 relative">
                      <div className="ml-10 relative">
                        <div className="absolute -left-10 mt-1.5 h-3 w-3 rounded-full bg-allpOrange"></div>
                        <h5 className="font-medium">Seleção e Aprovação</h5>
                        <p className="text-sm text-gray-400">
                          Processo seletivo cuidadoso para garantir o
                          alinhamento com a marca
                        </p>
                      </div>
                      <div className="ml-10 relative">
                        <div className="absolute -left-10 mt-1.5 h-3 w-3 rounded-full bg-allpOrange"></div>
                        <h5 className="font-medium">Treinamento Inicial</h5>
                        <p className="text-sm text-gray-400">
                          Programa intensivo de 4 semanas para prepará-lo para o
                          sucesso
                        </p>
                      </div>
                      <div className="ml-10 relative">
                        <div className="absolute -left-10 mt-1.5 h-3 w-3 rounded-full bg-allpOrange"></div>
                        <h5 className="font-medium">Suporte Contínuo</h5>
                        <p className="text-sm text-gray-400">
                          Consultoria permanente e atualizações regulares
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Card 5 - Infraestrutura Moderna */}
          <div
            className={`bg-gray-900 rounded-lg p-6 transition-all duration-300 hover:bg-[#411e81] hover:bg-opacity-20 cursor-pointer ${
              expandedCard === 4 ? 'md:col-span-2 md:row-span-2' : ''
            }`}
            onClick={() => toggleCard(4)}
          >
            <div className="flex justify-between items-start">
              <div className="bg-allpOrange p-3 rounded-lg mb-4">
                <CheckSquare className="text-black h-6 w-6" />
              </div>
              {expandedCard !== 4 && (
                <ChevronDown className="h-5 w-5 text-allpOrange" />
              )}
              {expandedCard === 4 && (
                <ChevronUp className="h-5 w-5 text-allpOrange" />
              )}
            </div>
            <h3 className="text-xl font-poppins font-semibold mb-2 text-allpOrange">
              Infraestrutura Moderna
            </h3>
            <p className="mb-4">
              Local com estacionamento, acessibilidade e design inovador.
            </p>
            {expandedCard === 4 && (
              <div className="mt-4 space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <img
                    src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z3ltJTIwaW50ZXJpb3J8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
                    alt="Interior da academia"
                    className="rounded-lg object-cover h-32"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1570829460005-c840387bb1ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGd5bSUyMGludGVyaW9yfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
                    alt="Área de musculação"
                    className="rounded-lg object-cover h-32"
                  />
                </div>
                <div className="bg-gray-800 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">
                    Características do Espaço
                  </h4>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <CheckSquare className="h-4 w-4 text-allpOrange mr-2" />
                      <span>Áreas amplas e bem ventiladas</span>
                    </li>
                    <li className="flex items-center">
                      <CheckSquare className="h-4 w-4 text-allpOrange mr-2" />
                      <span>Iluminação LED econômica</span>
                    </li>
                    <li className="flex items-center">
                      <CheckSquare className="h-4 w-4 text-allpOrange mr-2" />
                      <span>Vestiários modernos e confortáveis</span>
                    </li>
                    <li className="flex items-center">
                      <CheckSquare className="h-4 w-4 text-allpOrange mr-2" />
                      <span>Projeto arquitetônico exclusivo</span>
                    </li>
                  </ul>
                </div>
              </div>
            )}
          </div>

          {/* Card 6 - Ticket Médio Atrativo */}
          <div
            className={`bg-gray-900 rounded-lg p-6 transition-all duration-300 hover:bg-[#411e81] hover:bg-opacity-20 cursor-pointer ${
              expandedCard === 5 ? 'md:col-span-2 md:row-span-2' : ''
            }`}
            onClick={() => toggleCard(5)}
          >
            <div className="flex justify-between items-start">
              <div className="bg-allpOrange p-3 rounded-lg mb-4">
                <DollarSign className="text-black h-6 w-6" />
              </div>
              {expandedCard !== 5 && (
                <ChevronDown className="h-5 w-5 text-allpOrange" />
              )}
              {expandedCard === 5 && (
                <ChevronUp className="h-5 w-5 text-allpOrange" />
              )}
            </div>
            <h3 className="text-xl font-poppins font-semibold mb-2 text-allpOrange">
              Ticket Médio Atrativo
            </h3>
            <p className="mb-4">
              R$ 146,60, otimizando a rentabilidade por aluno.
            </p>
            {expandedCard === 5 && (
              <div className="mt-4 space-y-4">
                <div className="bg-gray-800 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Simulador de Retorno</h4>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Investimento Inicial</span>
                        <span>R$ 500.000</span>
                      </div>
                      <div className="h-2 bg-gray-700 rounded-full">
                        <div
                          className="h-full bg-allpOrange rounded-full"
                          style={{
                            width: '100%',
                          }}
                        ></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Faturamento Mensal Médio</span>
                        <span>R$ 73.300</span>
                      </div>
                      <div className="h-2 bg-gray-700 rounded-full">
                        <div
                          className="h-full bg-allpOrange rounded-full"
                          style={{
                            width: '75%',
                          }}
                        ></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Retorno do Investimento</span>
                        <span>~24 meses</span>
                      </div>
                      <div className="h-2 bg-gray-700 rounded-full">
                        <div
                          className="h-full bg-allpOrange rounded-full"
                          style={{
                            width: '50%',
                          }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-800 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Comparativo do Mercado</h4>
                  <div className="flex items-end h-20 space-x-2">
                    <div className="flex flex-col items-center">
                      <div className="bg-gray-600 h-12 w-12 rounded-t-md"></div>
                      <div className="text-xs mt-1">Concorrente A</div>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="bg-gray-600 h-14 w-12 rounded-t-md"></div>
                      <div className="text-xs mt-1">Concorrente B</div>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="bg-allpOrange h-20 w-12 rounded-t-md"></div>
                      <div className="text-xs mt-1 font-bold">allp fit</div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-allpOrange to-allpPurple hover:from-orange-600 hover:to-[#411e81] text-white font-poppins font-bold py-3 px-8 text-lg transition-all duration-300 transform hover:scale-105"
            onClick={handleWhatsAppRedirect}
          >
            QUERO FAZER PARTE
          </Button>
          <p className="mt-4 text-gray-300">
            Junte-se a mais de 60 mil alunos e 25 unidades de sucesso
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyInvestSection;
