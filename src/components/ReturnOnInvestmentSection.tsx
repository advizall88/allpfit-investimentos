
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import AllpFitLogo from './AllpFitLogo';

const roiData = [
  { students: "3.000 alunos", rate: "3,2% ao mês" },
  { students: "3.500 alunos", rate: "5,1% ao mês" },
  { students: "4.000 alunos", rate: "7,1% ao mês" },
];

const traditionalInvestments = [
  { name: "Poupança", rate: "0,68% ao mês" },
  { name: "CDI", rate: "0,93% ao mês" },
  { name: "Bolsa (média)", rate: "1 a 1,5% ao mês" },
];

const ReturnOnInvestmentSection = () => {
  return (
    <section id="roi" className="py-16 md:py-24 bg-allpPurple text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-poppins font-bold text-center mb-4 flex items-center justify-center flex-wrap">
          Seu dinheiro rende mais com a&nbsp;<AllpFitLogo className="inline-block h-8 md:h-10 w-auto mx-2 align-middle" alt="Allp Fit Logo" />
        </h2>
        <p className="text-center text-gray-300 mb-12 text-lg">Projeções de ROI com base no número de alunos e comparativo com o mercado.</p>
        
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <Card className="bg-allpBlack border-allpOrange shadow-xl">
            <CardHeader>
              <CardTitle className="text-allpOrange text-2xl font-poppins font-semibold text-center">Projeção de Retorno Allp Fit</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {roiData.map((item, index) => (
                <div key={index} className="flex justify-between items-center p-3 bg-gray-800 rounded-md">
                  <span className="font-poppins text-white">{item.students}</span>
                  <span className="font-poppins font-bold text-allpOrange text-lg">{item.rate}</span>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="bg-allpBlack border-gray-700 shadow-xl">
            <CardHeader>
              <CardTitle className="text-white text-2xl font-poppins font-semibold text-center">Aplicações Tradicionais</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {traditionalInvestments.map((item, index) => (
                <div key={index} className="flex justify-between items-center p-3 bg-gray-800 rounded-md">
                  <span className="font-poppins text-white">{item.name}</span>
                  <span className="font-poppins font-bold text-gray-400 text-lg">{item.rate}</span>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ReturnOnInvestmentSection;
