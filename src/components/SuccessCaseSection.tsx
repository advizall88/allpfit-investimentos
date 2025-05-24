
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, TrendingUp, BarChart3 } from 'lucide-react';

const SuccessCaseSection = () => {
  return (
    <section id="success-case" className="py-16 md:py-24 bg-gray-50 text-allpBlack">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-poppins font-bold text-center mb-12 text-allpPurple">
          Case de <span className="text-allpOrange">Sucesso</span>
        </h2>
        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow flex flex-col">
            <CardHeader className="pb-4">
              <div className="flex items-center justify-center mb-4">
                <div className="p-3 bg-allpOrange rounded-full">
                  <Users className="h-8 w-8 text-white" />
                </div>
              </div>
              <CardTitle className="text-xl font-poppins font-semibold text-allpPurple text-center">Alta Taxa de Ocupação</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-gray-700 text-center">
                Uma das unidades Allp Fit superou todas as expectativas: hoje conta com mais de 4.000 alunos ativos, mantendo uma taxa de ocupação elevada e recorrente.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow flex flex-col">
            <CardHeader className="pb-4">
              <div className="flex items-center justify-center mb-4">
                <div className="p-3 bg-allpOrange rounded-full">
                  <TrendingUp className="h-8 w-8 text-white" />
                </div>
              </div>
              <CardTitle className="text-xl font-poppins font-semibold text-allpPurple text-center">ROI Expressivo</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-gray-700 text-center">
                Os investidores desta unidade estão alcançando um ROI de 8% ao mês, com distribuição periódica de lucros e acompanhamento através de relatórios financeiros transparentes.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow flex flex-col">
            <CardHeader className="pb-4">
              <div className="flex items-center justify-center mb-4">
                <div className="p-3 bg-allpOrange rounded-full">
                  <BarChart3 className="h-8 w-8 text-white" />
                </div>
              </div>
              <CardTitle className="text-xl font-poppins font-semibold text-allpPurple text-center">Modelo Sólido</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-gray-700 text-center">
                Esse desempenho reforça a solidez do modelo Allp Fit: gestão profissional, diferenciais estruturais e uma proposta que atrai e fideliza milhares de alunos.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SuccessCaseSection;
