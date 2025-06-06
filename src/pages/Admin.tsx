
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Search, Users, MessageSquare, Bot, Calendar, Phone, Mail, User } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import AllpFitLogo from '@/components/AllpFitLogo';

interface GroupedConversation {
  customer: {
    name: string;
    email: string;
    phone: string;
    conversation_id: string;
  };
  messages: any[];
  lastMessageDate: Date;
}

interface N8NMessage {
  id: number;
  session_id: string;
  message: any;
  sender: 'ai' | 'human';
  content: string;
}

const Admin = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [conversations, setConversations] = useState([]);
  const [groupedConversations, setGroupedConversations] = useState<GroupedConversation[]>([]);
  const [formularios, setFormularios] = useState([]);
  const [n8nChats, setN8nChats] = useState<N8NMessage[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCustomer, setSelectedCustomer] = useState<GroupedConversation | null>(null);

  useEffect(() => {
    const adminData = localStorage.getItem('allpfit_admin');
    if (!adminData) {
      navigate('/');
      return;
    }
    loadData();
  }, [navigate]);

  const loadData = async () => {
    setIsLoading(true);
    try {
      // Carregar conversas do chat
      const { data: convData, error: convError } = await supabase
        .from('allpfit_conversation')
        .select('*')
        .order('created_at', { ascending: false });

      if (convError) throw convError;
      setConversations(convData || []);
      groupConversationsByCustomer(convData || []);

      // Carregar formulários
      const { data: formData, error: formError } = await supabase
        .from('allpfit_formulario')
        .select('*')
        .order('created_at', { ascending: false });

      if (formError) throw formError;
      setFormularios(formData || []);

      // Carregar chat do N8N
      const { data: n8nData, error: n8nError } = await supabase
        .from('allpfit_n8n_chat')
        .select('*')
        .order('id', { ascending: false });

      if (n8nError) throw n8nError;
      processN8NMessages(n8nData || []);

    } catch (error) {
      toast({
        title: "Erro",
        description: "Erro ao carregar dados",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const groupConversationsByCustomer = (conversations: any[]) => {
    const grouped: { [key: string]: GroupedConversation } = conversations.reduce((acc, conv) => {
      const key = conv.conversation_id || 'sem_id';
      
      if (!acc[key]) {
        acc[key] = {
          customer: {
            name: conv.name || 'Nome não informado',
            email: conv.email || 'Email não informado',
            phone: conv.phone || 'Telefone não informado',
            conversation_id: conv.conversation_id || 'ID não disponível'
          },
          messages: [],
          lastMessageDate: new Date(conv.created_at)
        };
      }
      
      acc[key].messages.push(conv);
      const messageDate = new Date(conv.created_at);
      if (messageDate > acc[key].lastMessageDate) {
        acc[key].lastMessageDate = messageDate;
      }
      
      return acc;
    }, {} as { [key: string]: GroupedConversation });

    const sortedGroups: GroupedConversation[] = Object.values(grouped).sort((a, b) => 
      b.lastMessageDate.getTime() - a.lastMessageDate.getTime()
    );

    setGroupedConversations(sortedGroups);
  };

  const processN8NMessages = (messages: any[]) => {
    const processed = messages.map(msg => {
      let sender: 'ai' | 'human' = 'human';
      let content = '';

      try {
        const messageData = msg.message;
        sender = messageData.type === 'ai' ? 'ai' : 'human';
        content = messageData.content || JSON.stringify(messageData);
      } catch (e) {
        content = JSON.stringify(msg.message);
      }

      return {
        id: msg.id,
        session_id: msg.session_id,
        message: msg.message,
        sender,
        content
      };
    });

    setN8nChats(processed);
  };

  const handleLogout = () => {
    localStorage.removeItem('allpfit_admin');
    navigate('/');
    toast({
      title: "Logout realizado",
      description: "Até logo!",
    });
  };

  const formatDate = (dateString: string | Date) => {
    const date = typeof dateString === 'string' ? new Date(dateString) : dateString;
    return date.toLocaleString('pt-BR');
  };

  const filteredConversations = groupedConversations.filter(group => {
    if (!searchTerm) return true;
    const term = searchTerm.toLowerCase();
    
    return (
      group.customer.name.toLowerCase().includes(term) ||
      group.customer.email.toLowerCase().includes(term) ||
      group.customer.phone.toLowerCase().includes(term) ||
      group.messages.some(msg => 
        msg.message && msg.message.toLowerCase().includes(term)
      )
    );
  });

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-allpBlack to-gray-900 flex items-center justify-center">
        <div className="text-white text-xl animate-pulse">Carregando...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-allpBlack to-gray-900">
      {/* Header Aprimorado */}
      <header className="py-6 px-6 bg-gradient-to-r from-allpPurple to-purple-800 shadow-2xl">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center gap-4">
            <AllpFitLogo className="h-12" alt="Allp Fit Logo" />
            <div className="text-white">
              <h1 className="text-2xl font-bold">Painel Administrativo</h1>
              <p className="text-purple-200">Gestão completa da plataforma</p>
            </div>
          </div>
          <Button 
            onClick={handleLogout} 
            variant="outline" 
            className="text-white border-white hover:bg-white hover:text-purple-900 transition-all duration-300"
          >
            Sair
          </Button>
        </div>
      </header>

      {/* Conteúdo Principal */}
      <main className="container mx-auto py-8 px-6">
        <Tabs defaultValue="formularios" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8 bg-gray-800 border border-gray-700">
            <TabsTrigger value="formularios" className="data-[state=active]:bg-allpPurple data-[state=active]:text-white">
              <Users className="w-4 h-4 mr-2" />
              Formulários de Investimento
            </TabsTrigger>
            <TabsTrigger value="conversas" className="data-[state=active]:bg-allpPurple data-[state=active]:text-white">
              <MessageSquare className="w-4 h-4 mr-2" />
              Conversas do Chat
            </TabsTrigger>
            <TabsTrigger value="robson" className="data-[state=active]:bg-allpPurple data-[state=active]:text-white">
              <Bot className="w-4 h-4 mr-2" />
              Chat do Robson (N8N)
            </TabsTrigger>
          </TabsList>

          <TabsContent value="formularios">
            <Card className="bg-gray-800 border-gray-700 shadow-2xl">
              <CardHeader className="bg-gradient-to-r from-allpPurple to-purple-700 text-white">
                <CardTitle className="flex items-center gap-2">
                  <Users className="w-6 h-6" />
                  Formulários de Investimento ({formularios.length})
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow className="border-gray-700">
                        <TableHead className="text-gray-300">Nome</TableHead>
                        <TableHead className="text-gray-300">Email</TableHead>
                        <TableHead className="text-gray-300">Telefone</TableHead>
                        <TableHead className="text-gray-300">Cidade</TableHead>
                        <TableHead className="text-gray-300">Potencial de Investimento</TableHead>
                        <TableHead className="text-gray-300">Data</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {formularios.map((form: any) => (
                        <TableRow key={form.id} className="border-gray-700 hover:bg-gray-700 transition-colors">
                          <TableCell className="text-white font-medium">{form.name}</TableCell>
                          <TableCell className="text-gray-300">{form.email}</TableCell>
                          <TableCell className="text-gray-300">{form.phone}</TableCell>
                          <TableCell className="text-gray-300">{form.city}</TableCell>
                          <TableCell>
                            <Badge variant="outline" className="text-allpOrange border-allpOrange">
                              {form.quote_potential}
                            </Badge>
                          </TableCell>
                          <TableCell className="text-gray-300">{formatDate(form.created_at)}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="conversas">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Lista de Clientes */}
              <div className="lg:col-span-1">
                <Card className="bg-gray-800 border-gray-700 shadow-2xl">
                  <CardHeader className="bg-gradient-to-r from-allpPurple to-purple-700 text-white">
                    <CardTitle className="flex items-center gap-2">
                      <MessageSquare className="w-6 h-6" />
                      Clientes ({filteredConversations.length})
                    </CardTitle>
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                      <Input
                        placeholder="Buscar por nome, email, telefone ou mensagem..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="pl-10 bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                      />
                    </div>
                  </CardHeader>
                  <CardContent className="p-0 max-h-96 overflow-y-auto">
                    {filteredConversations.map((group, index) => (
                      <div
                        key={index}
                        onClick={() => setSelectedCustomer(group)}
                        className={`p-4 border-b border-gray-700 cursor-pointer transition-all duration-300 hover:bg-gray-700 ${
                          selectedCustomer?.customer.conversation_id === group.customer.conversation_id 
                            ? 'bg-allpPurple' 
                            : ''
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-allpOrange rounded-full flex items-center justify-center">
                            <User className="w-5 h-5 text-white" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h3 className="text-white font-medium truncate">{group.customer.name}</h3>
                            <div className="flex items-center gap-2 text-sm text-gray-400">
                              <Phone className="w-3 h-3" />
                              <span className="truncate">{group.customer.phone}</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-gray-400">
                              <Calendar className="w-3 h-3" />
                              <span>{formatDate(group.lastMessageDate)}</span>
                            </div>
                          </div>
                          <Badge variant="outline" className="text-allpOrange border-allpOrange">
                            {group.messages.length}
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>

              {/* Conversa Selecionada */}
              <div className="lg:col-span-2">
                <Card className="bg-gray-800 border-gray-700 shadow-2xl">
                  <CardHeader className="bg-gradient-to-r from-allpPurple to-purple-700 text-white">
                    <CardTitle>
                      {selectedCustomer ? (
                        <div className="flex items-center gap-3">
                          <User className="w-6 h-6" />
                          <div>
                            <div>{selectedCustomer.customer.name}</div>
                            <div className="text-sm text-purple-200 font-normal flex items-center gap-4">
                              <span className="flex items-center gap-1">
                                <Mail className="w-3 h-3" />
                                {selectedCustomer.customer.email}
                              </span>
                              <span className="flex items-center gap-1">
                                <Phone className="w-3 h-3" />
                                {selectedCustomer.customer.phone}
                              </span>
                            </div>
                          </div>
                        </div>
                      ) : (
                        'Selecione um cliente para visualizar a conversa'
                      )}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-6">
                    {selectedCustomer ? (
                      <div className="space-y-4 max-h-96 overflow-y-auto">
                        {selectedCustomer.messages
                          .sort((a, b) => new Date(a.created_at).getTime() - new Date(b.created_at).getTime())
                          .map((message, index) => (
                          <div
                            key={index}
                            className={`p-4 rounded-lg ${
                              message.sender === 'human' 
                                ? 'bg-allpPurple text-white ml-8' 
                                : 'bg-gray-700 text-white mr-8'
                            }`}
                          >
                            <div className="flex justify-between items-start mb-2">
                              <Badge variant={message.sender === 'human' ? 'default' : 'secondary'}>
                                {message.sender === 'human' ? 'Cliente' : 'Sistema'}
                              </Badge>
                              <span className="text-xs text-gray-300">
                                {formatDate(message.created_at)}
                              </span>
                            </div>
                            <p className="text-sm">{message.message || 'Mensagem sem conteúdo'}</p>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="text-center text-gray-400 py-8">
                        <MessageSquare className="w-16 h-16 mx-auto mb-4 opacity-50" />
                        <p>Selecione um cliente da lista para visualizar suas mensagens</p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="robson">
            <Card className="bg-gray-800 border-gray-700 shadow-2xl">
              <CardHeader className="bg-gradient-to-r from-allpPurple to-purple-700 text-white">
                <CardTitle className="flex items-center gap-2">
                  <Bot className="w-6 h-6" />
                  Histórico do Chat Robson - N8N ({n8nChats.length})
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow className="border-gray-700">
                        <TableHead className="text-gray-300">ID</TableHead>
                        <TableHead className="text-gray-300">Telefone</TableHead>
                        <TableHead className="text-gray-300">Remetente</TableHead>
                        <TableHead className="text-gray-300">Mensagem</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {n8nChats.map((chat) => (
                        <TableRow key={chat.id} className="border-gray-700 hover:bg-gray-700 transition-colors">
                          <TableCell className="text-white font-mono">{chat.id}</TableCell>
                          <TableCell className="text-gray-300 font-mono">{chat.session_id}</TableCell>
                          <TableCell>
                            <Badge 
                              variant={chat.sender === 'ai' ? 'default' : 'secondary'}
                              className={chat.sender === 'ai' ? 'bg-blue-600 text-white' : 'bg-green-600 text-white'}
                            >
                              {chat.sender === 'ai' ? 'Robson (IA)' : 'Usuário'}
                            </Badge>
                          </TableCell>
                          <TableCell className="text-gray-300 max-w-md">
                            <div className="whitespace-pre-wrap text-sm bg-gray-900 p-3 rounded border-l-4 border-allpOrange">
                              {chat.content}
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Admin;
