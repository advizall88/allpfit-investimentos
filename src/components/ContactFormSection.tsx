
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from "@/hooks/use-toast"; // Corrected import path
import { Send } from 'lucide-react';

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
      title: "Mensagem Enviada!",
      description: "Obrigado pelo seu interesse! Entraremos em contato em breve.",
      variant: "default", // "default" should be black with white text as per shadcn defaults
    });
    setFormData({ name: '', email: '', phone: '' });
    setIsSubmitting(false);
  };

  return (
    <section id="contact-form" className="py-16 md:py-24 bg-allpPurple">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-poppins font-bold text-white mb-4">
            Pronto para <span className="text-allpOrange">Transformar o Futuro</span> do Fitness?
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Preencha o formulário abaixo e nossa equipe entrará em contato para fornecer todos os detalhes sobre como garantir sua cota na Allp Fit.
          </p>
        </div>
        <Card className="max-w-xl mx-auto bg-white p-6 md:p-8 rounded-xl shadow-2xl">
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name" className="block text-sm font-medium text-gray-700 font-poppins">Nome Completo</Label>
                <Input 
                  type="text" 
                  name="name" 
                  id="name" 
                  value={formData.name}
                  onChange={handleChange}
                  required 
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-allpOrange focus:border-allpOrange sm:text-sm p-3"
                  placeholder="Seu nome aqui"
                />
              </div>
              <div>
                <Label htmlFor="email" className="block text-sm font-medium text-gray-700 font-poppins">E-mail</Label>
                <Input 
                  type="email" 
                  name="email" 
                  id="email" 
                  value={formData.email}
                  onChange={handleChange}
                  required 
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-allpOrange focus:border-allpOrange sm:text-sm p-3"
                  placeholder="seuemail@exemplo.com"
                />
              </div>
              <div>
                <Label htmlFor="phone" className="block text-sm font-medium text-gray-700 font-poppins">Telefone (WhatsApp)</Label>
                <Input 
                  type="tel" 
                  name="phone" 
                  id="phone" 
                  value={formData.phone}
                  onChange={handleChange}
                  required 
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-allpOrange focus:border-allpOrange sm:text-sm p-3"
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

// Dummy Card and CardContent components if not using shadcn/ui Card
const Card = ({ className, children }: { className?: string, children: React.ReactNode }) => (
  <div className={className}>{children}</div>
);
const CardContent = ({ children }: { children: React.ReactNode }) => (
  <div>{children}</div>
);


export default ContactFormSection;
