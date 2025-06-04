
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from 'lucide-react';

const faqData = [
  {
    question: "Qual o valor mínimo para investir na Allp Fit?",
    answer: "A cota de investimento na Allp Fit é de R$ 50.000. Este valor garante sua participação nos lucros e no crescimento da rede."
  },
  {
    question: "Como funciona o retorno sobre o investimento (ROI)?",
    answer: "O ROI é projetado com base no número de alunos ativos. Por exemplo, com 3.000 alunos, a projeção é de 3,2% ao mês. Com 4.000 alunos, sobe para 7,1% ao mês. Estes valores são significativamente superiores a investimentos tradicionais como poupança ou CDI."
  },
  {
    question: "Quais são os diferenciais da Allp Fit no mercado?",
    answer: "A Allp Fit se destaca pela estrutura premium com equipamentos Matrix®, metodologia de treino exclusiva, conceito 'Top to All' (o melhor para todos), e suporte completo ao investidor. Além disso, estamos em um mercado em franca expansão."
  },
  {
    question: "Preciso ter experiência no mercado fitness para investir?",
    answer: "Não é necessário. A Allp Fit oferece suporte completo em todas as fases do negócio, desde a implantação até a gestão diária. Nosso modelo é desenhado para ser rentável e escalável, mesmo para quem não é do ramo."
  },
  {
    question: "Como posso obter mais informações ou agendar uma conversa?",
    answer: "Você pode preencher o formulário de contato no final desta página ou clicar no botão 'Quero ser investidor'. Nossa equipe entrará em contato para fornecer todos os detalhes e agendar uma apresentação."
  }
];

const FaqSection = () => {
  return (
    <section id="faq" className="py-16 md:py-24 bg-allpBlack text-white">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-4">
            Perguntas <span className="text-allpOrange">Frequentes</span>
          </h2>
        </div>
        <div className="max-w-2xl mx-auto">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqData.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-allpPurple border-allpOrange border-opacity-50 rounded-lg shadow-lg">
                <AccordionTrigger className="text-left font-poppins font-semibold text-lg p-6 hover:no-underline focus:outline-none focus-visible:ring-2 focus-visible:ring-allpOrange focus-visible:ring-opacity-75 rounded-t-lg [&[data-state=open]>svg]:text-allpOrange">
                  <div className="flex items-center">
                    <HelpCircle className="mr-3 h-6 w-6 text-allpOrange flex-shrink-0" />
                    {item.question}
                  </div>
                </AccordionTrigger>
                <AccordionContent className="p-6 pt-0 text-gray-200 font-poppins text-base leading-relaxed">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
