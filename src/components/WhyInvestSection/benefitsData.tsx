
import React from 'react';
import {
  TrendingUp,
  Star,
  Award,
  CheckSquare,
  DollarSign,
  User,
} from 'lucide-react';

export const createBenefitsData = (animatedStats: {
  marketRank: number;
  healthPlans: number;
  currentUnits: number;
  targetUnits: number;
  students: number;
}) => [
  {
    icon: TrendingUp,
    title: 'Setor em Crescimento',
    description: `Brasil: ${animatedStats.marketRank}º maior mercado de academias. ${animatedStats.healthPlans}% dos brasileiros planejam cuidar mais da saúde em 2024.`,
    expandedContent: (
      <div className="mt-4 space-y-4 transition-all duration-300">
        <div className="bg-gray-800 p-4 rounded-lg">
          <h4 className="font-semibold mb-2">Crescimento do Mercado Fitness</h4>
          <div className="h-6 bg-gray-700 rounded-full overflow-hidden">
            <div className="h-full bg-allpOrange rounded-full" style={{ width: '65%' }}></div>
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
    )
  },
  {
    icon: Star,
    title: 'Reputação Sólida',
    description: `+${animatedStats.currentUnits} unidades (+60 mil alunos). Expansão para ${animatedStats.targetUnits} unidades e ${(animatedStats.students / 1000000).toFixed(1)} milhões de alunos até 2026.`,
    expandedContent: (
      <div className="mt-4 space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-gray-800 p-4 rounded-lg text-center">
            <div className="text-3xl font-bold text-allpOrange">98%</div>
            <div className="text-sm text-gray-300">Taxa de sucesso das franquias</div>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg text-center">
            <div className="text-3xl font-bold text-allpOrange">4.8/5</div>
            <div className="text-sm text-gray-300">Avaliação média dos clientes</div>
          </div>
        </div>
        <div className="bg-gray-800 p-4 rounded-lg">
          <h4 className="font-semibold mb-2">Crescimento de Unidades</h4>
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
    )
  },
  {
    icon: Award,
    title: 'Tecnologia de Ponta',
    description: 'Equipamentos de fitness de última linha (Matrix®) para eficiência, segurança e conforto.',
    expandedContent: (
      <div className="mt-4 space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-gray-800 p-4 rounded-lg flex flex-col items-center">
            <div className="text-allpOrange mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <div className="text-sm text-center">Sistema de segurança avançado</div>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg flex flex-col items-center">
            <div className="text-allpOrange mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <div className="text-sm text-center">Monitoramento de desempenho</div>
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
    )
  },
  {
    icon: User,
    title: 'Suporte Estratégico',
    description: 'Processo de franquia transparente, suporte em todas as etapas e treinamento contínuo.',
    expandedContent: (
      <div className="mt-4 space-y-4">
        <div className="bg-gray-800 p-4 rounded-lg">
          <h4 className="font-semibold mb-2">Jornada do Franqueado</h4>
          <div className="relative">
            <div className="absolute left-4 h-full w-0.5 bg-allpOrange"></div>
            <div className="space-y-6 relative">
              <div className="ml-10 relative">
                <div className="absolute -left-10 mt-1.5 h-3 w-3 rounded-full bg-allpOrange"></div>
                <h5 className="font-medium">Seleção e Aprovação</h5>
                <p className="text-sm text-gray-400">Processo seletivo cuidadoso para garantir o alinhamento com a marca</p>
              </div>
              <div className="ml-10 relative">
                <div className="absolute -left-10 mt-1.5 h-3 w-3 rounded-full bg-allpOrange"></div>
                <h5 className="font-medium">Treinamento Inicial</h5>
                <p className="text-sm text-gray-400">Programa intensivo de 4 semanas para prepará-lo para o sucesso</p>
              </div>
              <div className="ml-10 relative">
                <div className="absolute -left-10 mt-1.5 h-3 w-3 rounded-full bg-allpOrange"></div>
                <h5 className="font-medium">Suporte Contínuo</h5>
                <p className="text-sm text-gray-400">Consultoria permanente e atualizações regulares</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    icon: CheckSquare,
    title: 'Infraestrutura Moderna',
    description: 'Local com estacionamento, acessibilidade e design inovador.',
    expandedContent: (
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
          <h4 className="font-semibold mb-2">Características do Espaço</h4>
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
    )
  },
  {
    icon: DollarSign,
    title: 'Ticket Médio Atrativo',
    description: 'R$ 146,60, otimizando a rentabilidade por aluno.',
    expandedContent: (
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
                <div className="h-full bg-allpOrange rounded-full" style={{ width: '100%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span>Faturamento Mensal Médio</span>
                <span>R$ 73.300</span>
              </div>
              <div className="h-2 bg-gray-700 rounded-full">
                <div className="h-full bg-allpOrange rounded-full" style={{ width: '75%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span>Retorno do Investimento</span>
                <span>~24 meses</span>
              </div>
              <div className="h-2 bg-gray-700 rounded-full">
                <div className="h-full bg-allpOrange rounded-full" style={{ width: '50%' }}></div>
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
    )
  }
];
