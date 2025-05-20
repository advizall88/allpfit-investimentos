
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from "@/hooks/use-toast";
import { Send } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card'; // Importando Card e CardContent de shadcn/ui

const ContactFormSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: '', email: '', phone: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    console.log("Form data submitted:", formData);
    toast({
      title: "Mensagem Enviada com Sucesso!",
      description: "Obrigado por seu interesse! Nossa equipe entrará em contato com os próximos passos para você se tornar sócio da Allp Fit.",
      variant: "default",
    });
    setFormData({ name: '', email: '', phone: '' });
    setIsSubmitting(false);
  };

  return (
    <section id="contact-form" className="py-16 md:py-24 bg-allpBlack"> {/* Mudado para allpBlack para contraste com o card roxo */}
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-poppins font-bold text-white mb-4">
            Faça parte do <span className="text-allpOrange">futuro do fitness</span>.
          </h2>
          <p className="text-xl text-allpOrange font-semibold mb-8">
            Rentável. Inovador. Acessível.
          </p>
          <p className="text-lg text-gray-300">
            Preencha o formulário abaixo e nossa equipe entrará em contato para fornecer todos os detalhes sobre como garantir sua cota na Allp Fit.
          </p>
        </div>
        <Card className="max-w-xl mx-auto bg-allpPurple p-6 md:p-8 rounded-xl shadow-2xl border-2 border-allpOrange"> {/* Card roxo com borda laranja */}
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name" className="block text-sm font-medium text-white font-poppins">Nome Completo</Label>
                <Input 
                  type="text" 
                  name="name" 
                  id="name" 
                  value={formData.name}
                  onChange={handleChange}
                  required 
                  className="mt-1 block w-full bg-gray-800 border-gray-700 text-white rounded-md shadow-sm focus:ring-allpOrange focus:border-allpOrange sm:text-sm p-3 placeholder-gray-400"
                  placeholder="Seu nome aqui"
                />
              </div>
              <div>
                <Label htmlFor="email" className="block text-sm font-medium text-white font-poppins">E-mail</Label>
                <Input 
                  type="email" 
                  name="email" 
                  id="email" 
                  value={formData.email}
                  onChange={handleChange}
                  required 
                  className="mt-1 block w-full bg-gray-800 border-gray-700 text-white rounded-md shadow-sm focus:ring-allpOrange focus:border-allpOrange sm:text-sm p-3 placeholder-gray-400"
                  placeholder="seuemail@exemplo.com"
                />
              </div>
              <div>
                <Label htmlFor="phone" className="block text-sm font-medium text-white font-poppins">Telefone (WhatsApp)</Label>
                <Input 
                  type="tel" 
                  name="phone" 
                  id="phone" 
                  value={formData.phone}
                  onChange={handleChange}
                  required 
                  className="mt-1 block w-full bg-gray-800 border-gray-700 text-white rounded-md shadow-sm focus:ring-allpOrange focus:border-allpOrange sm:text-sm p-3 placeholder-gray-400"
                  placeholder="(XX) XXXXX-XXXX"
                />
              </div>
              <div>
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-allpOrange hover:bg-orange-700 text-white font-poppins font-semibold text-lg py-3 px-6 rounded-lg shadow-md transition-transform transform hover:scale-105 disabled:opacity-75"
                >
                  {isSubmitting ? 'Enviando...' : (
                    <>
                      Garanta Sua Cota Agora <Send className="ml-2 h-5 w-5" />
                    </>
                  )}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ContactFormSection;
