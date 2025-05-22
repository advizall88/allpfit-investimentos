
import React from 'react';
import { BarChart as BarChartIcon, Users } from 'lucide-react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Cell,
  ResponsiveContainer, // Though ChartContainer handles this
} from 'recharts';
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from '@/components/ui/chart';

// Dados ilustrativos para os gráficos
const establishmentsData = [
  { name: 'País Líder', value: 100, rank: 1 },
  { name: 'Brasil', value: 85, rank: 2 },
  { name: 'Outro País Relevante', value: 70, rank: 3 },
];

const populationData = [
  { name: 'País A (Top 1)', value: 120, rank: 1 },
  { name: 'País B (Top 2)', value: 110, rank: 2 },
  { name: 'País C (Top 3)', value: 100, rank: 3 },
  { name: 'Brasil', value: 90, rank: 4 },
  { name: 'País D (Top 5)', value: 80, rank: 5 },
];

const chartConfig = {
  "País Líder": { label: "País Líder", color: "hsl(215, 20.2%, 65.1%)" },
  "Brasil": { label: "Brasil", color: "hsl(25, 95%, 48%)" }, // allpOrange
  "Outro País Relevante": { label: "Outro País Relevante", color: "hsl(215, 20.2%, 65.1%)" },
  "País A (Top 1)": { label: "País A", color: "hsl(215, 20.2%, 65.1%)" },
  "País B (Top 2)": { label: "País B", color: "hsl(215, 20.2%, 65.1%)" },
  "País C (Top 3)": { label: "País C", color: "hsl(215, 20.2%, 65.1%)" },
  "País D (Top 5)": { label: "País D", color: "hsl(215, 20.2%, 65.1%)" },
  // Define a fallback or default color if needed, or ensure all 'name' keys are in config
  default: { color: "hsl(215, 20.2%, 65.1%)" }, // Fallback color
} satisfies ChartConfig;

const MarketPotentialSection = () => {
  return (
    <section id="market-potential" className="py-16 md:py-24 bg-allpBlack text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-poppins font-bold text-center mb-12">
          Potencial de Mercado <span className="text-allpOrange">Explosivo</span>
        </h2>
        
        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
          {/* Card para Mercado de Academias */}
          <div className="bg-allpPurple p-6 md:p-8 rounded-lg shadow-xl flex flex-col">
            <div className="flex items-center mb-4">
              <BarChartIcon className="h-10 w-10 text-allpOrange mr-3 flex-shrink-0" />
              <div>
                <h3 className="text-xl md:text-2xl font-poppins font-semibold text-allpOrange">2º Maior Mercado Mundial</h3>
                <p className="text-sm text-gray-300">Nº de estabelecimentos (comparativo)</p>
              </div>
            </div>
            <div className="flex-grow h-[250px] w-full"> {/* Ensure chart has space */}
              <ChartContainer config={chartConfig} className="w-full h-full">
                <BarChart
                  data={establishmentsData}
                  margin={{ top: 5, right: 0, left: -25, bottom: 5 }} // Adjusted left margin for YAxis
                  accessibilityLayer // Recommended by recharts for accessibility
                >
                  <CartesianGrid vertical={false} strokeDasharray="3 3" className="stroke-gray-700" />
                  <XAxis
                    dataKey="name"
                    tickLine={false}
                    axisLine={false}
                    tickMargin={8}
                    tickFormatter={(value) => value.length > 10 ? `${value.slice(0,10)}...` : value}
                    className="text-xs"
                  />
                  <YAxis tickLine={false} axisLine={false} tickMargin={5} width={30} className="text-xs" />
                  <Tooltip
                    cursor={{ fill: 'hsla(0, 0%, 100%, 0.1)' }}
                    content={<ChartTooltipContent indicator="dot" />}
                  />
                  <Bar dataKey="value" radius={4}>
                    {establishmentsData.map((entry) => (
                      <Cell 
                        key={`cell-${entry.name}`} 
                        fill={chartConfig[entry.name as keyof typeof chartConfig]?.color || chartConfig.default.color} 
                      />
                    ))}
                  </Bar>
                </BarChart>
              </ChartContainer>
            </div>
          </div>

          {/* Card para População Fitness */}
          <div className="bg-allpPurple p-6 md:p-8 rounded-lg shadow-xl flex flex-col">
            <div className="flex items-center mb-4">
              <Users className="h-10 w-10 text-allpOrange mr-3 flex-shrink-0" />
              <div>
                <h3 className="text-xl md:text-2xl font-poppins font-semibold text-allpOrange">4ª Maior População Fitness</h3>
                <p className="text-sm text-gray-300">Frequentadores de academia (comparativo)</p>
              </div>
            </div>
            <div className="flex-grow h-[250px] w-full"> {/* Ensure chart has space */}
              <ChartContainer config={chartConfig} className="w-full h-full">
                <BarChart
                  data={populationData}
                  margin={{ top: 5, right: 0, left: -25, bottom: 5 }}
                  accessibilityLayer
                >
                  <CartesianGrid vertical={false} strokeDasharray="3 3" className="stroke-gray-700" />
                  <XAxis
                    dataKey="name"
                    tickLine={false}
                    axisLine={false}
                    tickMargin={8}
                    tickFormatter={(value) => value.length > 10 ? `${value.slice(0,10)}...` : value}
                    className="text-xs"
                  />
                  <YAxis tickLine={false} axisLine={false} tickMargin={5} width={30} className="text-xs" />
                  <Tooltip
                    cursor={{ fill: 'hsla(0, 0%, 100%, 0.1)' }}
                    content={<ChartTooltipContent indicator="dot" />}
                  />
                  <Bar dataKey="value" radius={4}>
                    {populationData.map((entry) => (
                      <Cell 
                        key={`cell-${entry.name}`} 
                        fill={chartConfig[entry.name as keyof typeof chartConfig]?.color || chartConfig.default.color}
                      />
                    ))}
                  </Bar>
                </BarChart>
              </ChartContainer>
            </div>
          </div>
        </div>

        <p className="text-xl text-center text-gray-300 max-w-3xl mx-auto">
          O mercado fitness no Brasil apresenta uma demanda crescente por saúde, bem-estar e performance, abrindo um vasto campo para investimentos lucrativos e de impacto.
        </p>
      </div>
    </section>
  );
};

export default MarketPotentialSection;

