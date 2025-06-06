
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import AllpFitLogo from '@/components/AllpFitLogo';

const Admin = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [conversations, setConversations] = useState([]);
  const [formularios, setFormularios] = useState([]);
  const [chatHistories, setChatHistories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Verificar se o usuário está logado
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

      // Carregar formulários
      const { data: formData, error: formError } = await supabase
        .from('allpfit_formulario')
        .select('*')
        .order('created_at', { ascending: false });

      if (formError) throw formError;
      setFormularios(formData || []);

      // Carregar histórico do chat do N8N
      const { data: chatData, error: chatError } = await supabase
        .from('n8n_chat_histories_alpfit')
        .select('*')
        .order('id', { ascending: false });

      if (chatError) throw chatError;
      setChatHistories(chatData || []);

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

  const handleLogout = () => {
    localStorage.removeItem('allpfit_admin');
    navigate('/');
    toast({
      title: "Logout realizado",
      description: "Até logo!",
    });
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleString('pt-BR');
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-allpBlack flex items-center justify-center">
        <div className="text-white">Carregando...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-allpBlack">
      {/* Header do Admin */}
      <header className="py-4 px-6 bg-purple-900">
        <div className="container mx-auto flex justify-between items-center">
          <AllpFitLogo className="h-12" alt="Allp Fit Logo" />
          <div className="flex items-center gap-4">
            <span className="text-white">Painel Administrativo</span>
            <Button onClick={handleLogout} variant="outline" className="text-white border-white hover:bg-white hover:text-purple-900">
              Sair
            </Button>
          </div>
        </div>
      </header>

      {/* Conteúdo Principal */}
      <main className="container mx-auto py-8 px-6">
        <Tabs defaultValue="formularios" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="formularios">Formulários de Investimento</TabsTrigger>
            <TabsTrigger value="conversas">Conversas do Chat</TabsTrigger>
            <TabsTrigger value="robson">Chat do Robson (N8N)</TabsTrigger>
          </TabsList>

          <TabsContent value="formularios">
            <Card>
              <CardHeader>
                <CardTitle>Formulários de Investimento ({formularios.length})</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Nome</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead>Telefone</TableHead>
                        <TableHead>Cidade</TableHead>
                        <TableHead>Potencial de Investimento</TableHead>
                        <TableHead>Data</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {formularios.map((form: any) => (
                        <TableRow key={form.id}>
                          <TableCell>{form.name}</TableCell>
                          <TableCell>{form.email}</TableCell>
                          <TableCell>{form.phone}</TableCell>
                          <TableCell>{form.city}</TableCell>
                          <TableCell>{form.quote_potential}</TableCell>
                          <TableCell>{formatDate(form.created_at)}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="conversas">
            <Card>
              <CardHeader>
                <CardTitle>Conversas do Chat ({conversations.length})</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Nome</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead>Telefone</TableHead>
                        <TableHead>Remetente</TableHead>
                        <TableHead>Mensagem</TableHead>
                        <TableHead>ID da Conversa</TableHead>
                        <TableHead>Data</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {conversations.map((conv: any) => (
                        <TableRow key={conv.id}>
                          <TableCell>{conv.name || '-'}</TableCell>
                          <TableCell>{conv.email || '-'}</TableCell>
                          <TableCell>{conv.phone || '-'}</TableCell>
                          <TableCell>{conv.sender || '-'}</TableCell>
                          <TableCell className="max-w-xs truncate">{conv.message || '-'}</TableCell>
                          <TableCell className="font-mono text-xs">{conv.conversation_id || '-'}</TableCell>
                          <TableCell>{formatDate(conv.created_at)}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="robson">
            <Card>
              <CardHeader>
                <CardTitle>Histórico do Chat Robson - N8N ({chatHistories.length})</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>ID</TableHead>
                        <TableHead>Session ID</TableHead>
                        <TableHead>Mensagem</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {chatHistories.map((chat: any) => (
                        <TableRow key={chat.id}>
                          <TableCell>{chat.id}</TableCell>
                          <TableCell className="font-mono text-xs">{chat.session_id}</TableCell>
                          <TableCell className="max-w-md">
                            <pre className="whitespace-pre-wrap text-xs bg-gray-100 p-2 rounded">
                              {JSON.stringify(chat.message, null, 2)}
                            </pre>
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
