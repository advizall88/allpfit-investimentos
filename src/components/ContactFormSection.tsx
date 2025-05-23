
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from "@/hooks/use-toast";
import { Send } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const ContactFormSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    city: '',
    quotePotential: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSelectChange = (value: string) => {
    setFormData({ ...formData, quotePotential: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    console.log("Investment form data submitted:", formData);
    
    toast({
      title: "Interesse Registrado com Sucesso!",
      description: "Obrigado por seu interesse! Nossa equipe de investimentos entrará em contato em breve para apresentar os detalhes da oportunidade.",
      variant: "default",
    });
    
    setFormData({
      name: '',
      phone: '',
      email: '',
      city: '',
      quotePotential: ''
    });
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-allpBlack text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-4">
            Pronto para <span className="text-allpOrange">Investir</span>?
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Preencha o formulário abaixo e nossa equipe entrará em contato para apresentar todos os detalhes dessa oportunidade exclusiva.
          </p>
        </div>
        
        <Card className="max-w-2xl mx-auto bg-allpPurple border-2 border-allpOrange">
          <CardContent className="pt-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="contact-name" className="block text-sm font-medium text-white font-poppins">
                  Nome Completo *
                </Label>
                <Input 
                  type="text" 
                  name="name" 
                  id="contact-name" 
                  value={formData.name}
                  onChange={handleChange}
                  required 
                  className="mt-1 bg-gray-800 border-gray-700 text-white rounded-md focus:ring-allpOrange focus:border-allpOrange placeholder-gray-400"
                  placeholder="Seu nome completo"
                />
              </div>

              <div>
                <Label htmlFor="contact-phone" className="block text-sm font-medium text-white font-poppins">
                  Telefone (WhatsApp) *
                </Label>
                <Input 
                  type="tel" 
                  name="phone" 
                  id="contact-phone" 
                  value={formData.phone}
                  onChange={handleChange}
                  required 
                  className="mt-1 bg-gray-800 border-gray-700 text-white rounded-md focus:ring-allpOrange focus:border-allpOrange placeholder-gray-400"
                  placeholder="(XX) XXXXX-XXXX"
                />
              </div>

              <div>
                <Label htmlFor="contact-email" className="block text-sm font-medium text-white font-poppins">
                  E-mail *
                </Label>
                <Input 
                  type="email" 
                  name="email" 
                  id="contact-email" 
                  value={formData.email}
                  onChange={handleChange}
                  required 
                  className="mt-1 bg-gray-800 border-gray-700 text-white rounded-md focus:ring-allpOrange focus:border-allpOrange placeholder-gray-400"
                  placeholder="seuemail@exemplo.com"
                />
              </div>

              <div>
                <Label htmlFor="contact-city" className="block text-sm font-medium text-white font-poppins">
                  Cidade *
                </Label>
                <Input 
                  type="text" 
                  name="city" 
                  id="contact-city" 
                  value={formData.city}
                  onChange={handleChange}
                  required 
                  className="mt-1 bg-gray-800 border-gray-700 text-white rounded-md focus:ring-allpOrange focus:border-allpOrange placeholder-gray-400"
                  placeholder="Sua cidade"
                />
              </div>

              <div>
                <Label className="block text-sm font-medium text-white font-poppins mb-2">
                  Potencial de Cotas *
                </Label>
                <Select onValueChange={handleSelectChange} value={formData.quotePotential}>
                  <SelectTrigger className="bg-gray-800 border-gray-700 text-white focus:ring-allpOrange focus:border-allpOrange">
                    <SelectValue placeholder="Selecione o valor de investimento" />
                  </SelectTrigger>
                  <SelectContent className="bg-gray-800 border-gray-700">
                    <SelectItem value="50-100k" className="text-white hover:bg-gray-700">R$ 50.000 - R$ 100.000</SelectItem>
                    <SelectItem value="100-200k" className="text-white hover:bg-gray-700">R$ 100.000 - R$ 200.000</SelectItem>
                    <SelectItem value="200-500k" className="text-white hover:bg-gray-700">R$ 200.000 - R$ 500.000</SelectItem>
                    <SelectItem value="500k+" className="text-white hover:bg-gray-700">Acima de R$ 500.000</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-allpOrange hover:bg-orange-700 text-white font-poppins font-semibold text-lg py-3 rounded-lg shadow-md transition-transform transform hover:scale-105 disabled:opacity-75"
              >
                {isSubmitting ? 'Enviando...' : (
                  <>
                    Quero Investir <Send className="ml-2 h-5 w-5" />
                  </>
                )}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ContactFormSection;
