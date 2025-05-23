
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from "@/hooks/use-toast";
import { Send } from 'lucide-react';

interface InvestmentFormPopupProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const InvestmentFormPopup = ({ open, onOpenChange }: InvestmentFormPopupProps) => {
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
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md mx-auto bg-allpPurple border-2 border-allpOrange">
        <DialogHeader>
          <DialogTitle className="text-white text-xl font-poppins font-bold text-center">
            Quero ser <span className="text-allpOrange">Investidor</span>
          </DialogTitle>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div>
            <Label htmlFor="name" className="block text-sm font-medium text-white font-poppins">
              Nome Completo *
            </Label>
            <Input 
              type="text" 
              name="name" 
              id="name" 
              value={formData.name}
              onChange={handleChange}
              required 
              className="mt-1 bg-gray-800 border-gray-700 text-white rounded-md focus:ring-allpOrange focus:border-allpOrange placeholder-gray-400"
              placeholder="Seu nome completo"
            />
          </div>

          <div>
            <Label htmlFor="phone" className="block text-sm font-medium text-white font-poppins">
              Telefone (WhatsApp) *
            </Label>
            <Input 
              type="tel" 
              name="phone" 
              id="phone" 
              value={formData.phone}
              onChange={handleChange}
              required 
              className="mt-1 bg-gray-800 border-gray-700 text-white rounded-md focus:ring-allpOrange focus:border-allpOrange placeholder-gray-400"
              placeholder="(XX) XXXXX-XXXX"
            />
          </div>

          <div>
            <Label htmlFor="email" className="block text-sm font-medium text-white font-poppins">
              E-mail *
            </Label>
            <Input 
              type="email" 
              name="email" 
              id="email" 
              value={formData.email}
              onChange={handleChange}
              required 
              className="mt-1 bg-gray-800 border-gray-700 text-white rounded-md focus:ring-allpOrange focus:border-allpOrange placeholder-gray-400"
              placeholder="seuemail@exemplo.com"
            />
          </div>

          <div>
            <Label htmlFor="city" className="block text-sm font-medium text-white font-poppins">
              Cidade *
            </Label>
            <Input 
              type="text" 
              name="city" 
              id="city" 
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
      </DialogContent>
    </Dialog>
  );
};

export default InvestmentFormPopup;
