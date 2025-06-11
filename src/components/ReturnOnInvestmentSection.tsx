
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { TrendingUp, DollarSign, PiggyBank, BarChart3 } from 'lucide-react';

const roiData = [{
  students: "3.000 alunos",
  rate: "3,2% ao mês",
  icon: <BarChart3 className="h-6 w-6" />
}, {
  students: "3.500 alunos", 
  rate: "5,1% ao mês",
  icon: <TrendingUp className="h-6 w-6" />
}, {
  students: "4.000 alunos",
  rate: "7,1% ao mês",
  icon: <DollarSign className="h-6 w-6" />
}];

const traditionalInvestments = [{
  name: "Poupança",
  rate: "0,68% ao mês",
  icon: <PiggyBank className="h-5 w-5" />
}, {
  name: "CDI", 
  rate: "0,93% ao mês",
  icon: <BarChart3 className="h-5 w-5" />
}, {
  name: "Bolsa (média)",
  rate: "1 a 1,5% ao mês",
  icon: <TrendingUp className="h-5 w-5" />
}];

const ReturnOnInvestmentSection = () => {
  return (
    <section id="roi" className="py-20 md:py-32 bg-gradient-to-br from-gray-50 via-white to-gray-100 text-allpPurple relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,102,0,0.05)_0%,transparent_50%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(71,14,117,0.05)_0%,transparent_50%)] pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Header with enhanced typography */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-allpOrange to-orange-500 text-white px-6 py-2 rounded-full text-sm font-semibold mb-6 shadow-lg">
            <TrendingUp className="h-4 w-4" />
            <span>Comparativo de Investimentos</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-poppins font-bold mb-6 bg-gradient-to-r from-allpPurple via-purple-700 to-allpOrange bg-clip-text text-transparent">
            Seu investimento rende mais aqui
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto font-light">
            Projeções de ROI com base no número de alunos e comparativo com o mercado tradicional
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
          {/* Card Allp Fit com design aprimorado */}
          <Card className="bg-gradient-to-br from-allpBlack via-gray-900 to-allpPurple border-2 border-allpOrange shadow-2xl shadow-allpOrange/20 hover:shadow-allpOrange/30 transition-all duration-500 transform hover:scale-105 animate-slide-up">
            <CardHeader className="text-center pb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-allpOrange to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <TrendingUp className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-allpOrange text-3xl font-poppins font-bold">
                Projeção Allp Fit
              </CardTitle>
              <p className="text-gray-300 text-sm">Retornos baseados em performance real</p>
            </CardHeader>
            <CardContent className="space-y-6 p-8">
              {roiData.map((item, index) => (
                <div 
                  key={index} 
                  className="group flex justify-between items-center p-6 bg-gradient-to-r from-gray-800 to-gray-700 rounded-xl hover:from-gray-700 hover:to-gray-600 transition-all duration-300 transform hover:scale-102 hover:shadow-lg border border-gray-600 hover:border-allpOrange/50"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="flex items-center gap-4">
                    <div className="text-allpOrange group-hover:scale-110 transition-transform duration-300">
                      {item.icon}
                    </div>
                    <span className="font-poppins text-white text-lg font-medium">{item.students}</span>
                  </div>
                  <div className="text-right">
                    <span className="font-poppins font-bold text-allpOrange text-2xl block leading-none">
                      {item.rate}
                    </span>
                    <span className="text-gray-400 text-xs">retorno mensal</span>
                  </div>
                </div>
              ))}
              
              {/* Badge de destaque */}
              <div className="mt-8 p-4 bg-gradient-to-r from-allpOrange/20 to-orange-500/20 rounded-lg border border-allpOrange/30 backdrop-blur-sm">
                <p className="text-center text-allpOrange font-semibold text-sm">
                  ✨ Até 10x mais rentável que investimentos tradicionais
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Card Investimentos Tradicionais redesenhado */}
          <Card className="bg-white border-2 border-gray-200 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 animate-slide-up-delay">
            <CardHeader className="text-center pb-8 bg-gradient-to-r from-gray-50 to-gray-100 rounded-t-lg">
              <div className="w-16 h-16 bg-gradient-to-br from-gray-400 to-gray-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <PiggyBank className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-2xl font-poppins font-bold text-gray-700">
                Aplicações Tradicionais
              </CardTitle>
              <p className="text-gray-500 text-sm">Mercado financeiro convencional</p>
            </CardHeader>
            <CardContent className="space-y-6 p-8">
              {traditionalInvestments.map((item, index) => (
                <div 
                  key={index} 
                  className="group flex justify-between items-center p-6 bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl hover:from-gray-100 hover:to-gray-150 transition-all duration-300 transform hover:scale-102 border border-gray-200 hover:border-gray-300"
                  style={{ animationDelay: `${(index + 3) * 200}ms` }}
                >
                  <div className="flex items-center gap-4">
                    <div className="text-gray-500 group-hover:scale-110 transition-transform duration-300">
                      {item.icon}
                    </div>
                    <span className="font-poppins text-gray-700 text-lg font-medium">{item.name}</span>
                  </div>
                  <div className="text-right">
                    <span className="font-poppins font-bold text-gray-600 text-xl block leading-none">
                      {item.rate}
                    </span>
                    <span className="text-gray-400 text-xs">retorno mensal</span>
                  </div>
                </div>
              ))}
              
              {/* Comparação visual */}
              <div className="mt-8 p-4 bg-red-50 rounded-lg border border-red-200">
                <p className="text-center text-red-600 font-semibold text-sm">
                  📉 Rentabilidade limitada do mercado tradicional
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Seção de comparação visual */}
        <div className="mt-16 max-w-4xl mx-auto animate-fade-in-delay">
          <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-200">
            <h3 className="text-2xl font-poppins font-bold text-center mb-8 text-allpPurple">
              Vantagem Competitiva Comprovada
            </h3>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-xl border border-green-200">
                <div className="text-3xl font-bold text-green-600 mb-2">7,1%</div>
                <div className="text-sm font-medium text-green-700 mb-1">Allp Fit (4k alunos)</div>
                <div className="text-xs text-green-600">ao mês</div>
              </div>
              <div className="p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl border border-blue-200">
                <div className="text-3xl font-bold text-blue-600 mb-2">1,5%</div>
                <div className="text-sm font-medium text-blue-700 mb-1">Bolsa (média alta)</div>
                <div className="text-xs text-blue-600">ao mês</div>
              </div>
              <div className="p-6 bg-gradient-to-br from-red-50 to-red-100 rounded-xl border border-red-200">
                <div className="text-3xl font-bold text-red-600 mb-2">0,68%</div>
                <div className="text-sm font-medium text-red-700 mb-1">Poupança</div>
                <div className="text-xs text-red-600">ao mês</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReturnOnInvestmentSection;
