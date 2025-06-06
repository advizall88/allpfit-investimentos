
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from "@/hooks/use-toast";
import { Send } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { supabase } from '@/integrations/supabase/client';

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
  const [errors, setErrors] = useState({
    phone: '',
    email: ''
  });

  const formatPhoneNumber = (value: string) => {
    const numbers = value.replace(/\D/g, '');
    if (numbers.length <= 11) {
      return numbers.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
    }
    return value;
  };

  const validatePhone = (phone: string) => {
    const numbers = phone.replace(/\D/g, '');
    if (numbers.length !== 11) {
      return 'Telefone deve ter 11 dígitos (DDD + número)';
    }
    if (!numbers.startsWith('11') && !numbers.startsWith('12') && !numbers.startsWith('13') && 
        !numbers.startsWith('14') && !numbers.startsWith('15') && !numbers.startsWith('16') && 
        !numbers.startsWith('17') && !numbers.startsWith('18') && !numbers.startsWith('19') &&
        !numbers.startsWith('21') && !numbers.startsWith('22') && !numbers.startsWith('24') &&
        !numbers.startsWith('27') && !numbers.startsWith('28') && !numbers.startsWith('31') &&
        !numbers.startsWith('32') && !numbers.startsWith('33') && !numbers.startsWith('34') &&
        !numbers.startsWith('35') && !numbers.startsWith('37') && !numbers.startsWith('38') &&
        !numbers.startsWith('41') && !numbers.startsWith('42') && !numbers.startsWith('43') &&
        !numbers.startsWith('44') && !numbers.startsWith('45') && !numbers.startsWith('46') &&
        !numbers.startsWith('47') && !numbers.startsWith('48') && !numbers.startsWith('49') &&
        !numbers.startsWith('51') && !numbers.startsWith('53') && !numbers.startsWith('54') &&
        !numbers.startsWith('55') && !numbers.startsWith('61') && !numbers.startsWith('62') &&
        !numbers.startsWith('63') && !numbers.startsWith('64') && !numbers.startsWith('65') &&
        !numbers.startsWith('66') && !numbers.startsWith('67') && !numbers.startsWith('68') &&
        !numbers.startsWith('69') && !numbers.startsWith('71') && !numbers.startsWith('73') &&
        !numbers.startsWith('74') && !numbers.startsWith('75') && !numbers.startsWith('77') &&
        !numbers.startsWith('79') && !numbers.startsWith('81') && !numbers.startsWith('82') &&
        !numbers.startsWith('83') && !numbers.startsWith('84') && !numbers.startsWith('85') &&
        !numbers.startsWith('86') && !numbers.startsWith('87') && !numbers.startsWith('88') &&
        !numbers.startsWith('89') && !numbers.startsWith('91') && !numbers.startsWith('92') &&
        !numbers.startsWith('93') && !numbers.startsWith('94') && !numbers.startsWith('95') &&
        !numbers.startsWith('96') && !numbers.startsWith('97') && !numbers.startsWith('98') &&
        !numbers.startsWith('99')) {
      return 'DDD inválido';
    }
    return '';
  };

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return 'Email inválido';
    }
    return '';
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    
    if (name === 'phone') {
      const formattedPhone = formatPhoneNumber(value);
      setFormData({ ...formData, [name]: formattedPhone });
      
      const phoneError = validatePhone(formattedPhone);
      setErrors({ ...errors, phone: phoneError });
    } else if (name === 'email') {
      setFormData({ ...formData, [name]: value });
      
      const emailError = validateEmail(value);
      setErrors({ ...errors, email: emailError });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSelectChange = (value: string) => {
    setFormData({ ...formData, quotePotential: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Validar todos os campos
    const phoneError = validatePhone(formData.phone);
    const emailError = validateEmail(formData.email);
    
    if (phoneError || emailError || !formData.name || !formData.city || !formData.quotePotential) {
      setErrors({ phone: phoneError, email: emailError });
      toast({
        title: "Erro no formulário",
        description: "Por favor, corrija os erros e preencha todos os campos obrigatórios.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    try {
      const { error } = await supabase
        .from('allpfit_formulario')
        .insert({
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          city: formData.city,
          quote_potential: formData.quotePotential
        });

      if (error) {
        console.error('Erro ao salvar no banco:', error);
        toast({
          title: "Erro ao enviar",
          description: "Ocorreu um erro ao enviar seu formulário. Tente novamente.",
          variant: "destructive",
        });
      } else {
        console.log("Formulário de investimento salvo com sucesso");
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
        setErrors({ phone: '', email: '' });
      }
    } catch (error) {
      console.error('Erro inesperado:', error);
      toast({
        title: "Erro inesperado",
        description: "Ocorreu um erro inesperado. Tente novamente.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
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
                  maxLength={15}
                  className={`mt-1 bg-gray-800 border-gray-700 text-white rounded-md focus:ring-allpOrange focus:border-allpOrange placeholder-gray-400 ${
                    errors.phone ? 'border-red-500' : ''
                  }`}
                  placeholder="(XX) XXXXX-XXXX"
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                )}
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
                  className={`mt-1 bg-gray-800 border-gray-700 text-white rounded-md focus:ring-allpOrange focus:border-allpOrange placeholder-gray-400 ${
                    errors.email ? 'border-red-500' : ''
                  }`}
                  placeholder="seuemail@exemplo.com"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                )}
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
                <Select onValueChange={handleSelectChange} value={formData.quotePotential} required>
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
