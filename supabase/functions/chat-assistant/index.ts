
import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.50.0';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const openaiApiKey = Deno.env.get('openai_key');
    const supabaseUrl = Deno.env.get('SUPABASE_URL');
    const supabaseKey = Deno.env.get('SUPABASE_ANON_KEY');

    if (!openaiApiKey) {
      throw new Error('OpenAI API key not found');
    }

    const supabase = createClient(supabaseUrl!, supabaseKey!);
    const { message, threadId, customerName, customerPhone, customerEmail, conversationId } = await req.json();

    console.log('Received message:', message);
    console.log('Thread ID:', threadId);
    console.log('Conversation ID:', conversationId);

    let currentThreadId = threadId;
    let currentConversationId = conversationId;

    // Create thread if not exists
    if (!currentThreadId) {
      const threadResponse = await fetch('https://api.openai.com/v1/threads', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${openaiApiKey}`,
          'Content-Type': 'application/json',
          'OpenAI-Beta': 'assistants=v2'
        }
      });
      
      const threadData = await threadResponse.json();
      currentThreadId = threadData.id;
      console.log('Created new thread:', currentThreadId);
    }

    // Generate conversation ID if not exists
    if (!currentConversationId) {
      currentConversationId = `conv_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
      console.log('Generated conversation ID:', currentConversationId);
    }

    // Save user message to database
    const { error: userMessageError } = await supabase
      .from('allpfit_conversation')
      .insert({
        name: customerName,
        phone: customerPhone,
        email: customerEmail,
        message: message,
        sender: 'user',
        conversation_id: currentConversationId
      });

    if (userMessageError) {
      console.error('Error saving user message:', userMessageError);
    } else {
      console.log('User message saved to database');
    }

    // Add message to thread
    await fetch(`https://api.openai.com/v1/threads/${currentThreadId}/messages`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${openaiApiKey}`,
        'Content-Type': 'application/json',
        'OpenAI-Beta': 'assistants=v2'
      },
      body: JSON.stringify({
        role: 'user',
        content: message
      })
    });

    // Run assistant
    const runResponse = await fetch(`https://api.openai.com/v1/threads/${currentThreadId}/runs`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${openaiApiKey}`,
        'Content-Type': 'application/json',
        'OpenAI-Beta': 'assistants=v2'
      },
      body: JSON.stringify({
        assistant_id: 'asst_Yd3rOJNWyePUGkBRAXVz1rg5'
      })
    });

    const runData = await runResponse.json();
    console.log('Run created:', runData.id);

    // Wait for completion
    let run = runData;
    while (run.status === 'queued' || run.status === 'in_progress') {
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const statusResponse = await fetch(`https://api.openai.com/v1/threads/${currentThreadId}/runs/${run.id}`, {
        headers: {
          'Authorization': `Bearer ${openaiApiKey}`,
          'OpenAI-Beta': 'assistants=v2'
        }
      });
      
      run = await statusResponse.json();
      console.log('Run status:', run.status);
    }

    // Get messages
    const messagesResponse = await fetch(`https://api.openai.com/v1/threads/${currentThreadId}/messages`, {
      headers: {
        'Authorization': `Bearer ${openaiApiKey}`,
        'OpenAI-Beta': 'assistants=v2'
      }
    });

    const messagesData = await messagesResponse.json();
    const assistantMessage = messagesData.data[0];
    const responseContent = assistantMessage.content[0].text.value;

    console.log('Assistant response:', responseContent);

    // Save assistant response to database
    const { error: assistantMessageError } = await supabase
      .from('allpfit_conversation')
      .insert({
        name: customerName,
        phone: customerPhone,
        email: customerEmail,
        message: responseContent,
        sender: 'assistant',
        conversation_id: currentConversationId
      });

    if (assistantMessageError) {
      console.error('Error saving assistant message:', assistantMessageError);
    } else {
      console.log('Assistant message saved to database');
    }

    return new Response(JSON.stringify({
      response: responseContent,
      threadId: currentThreadId,
      conversationId: currentConversationId
    }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('Error in chat-assistant function:', error);
    return new Response(JSON.stringify({ 
      error: error.message,
      details: 'Failed to process chat message'
    }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
