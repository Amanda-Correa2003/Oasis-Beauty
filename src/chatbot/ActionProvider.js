// src/chatbot/ActionProvider.js
import { createChatBotMessage } from 'react-chatbot-kit';
import { v4 as uuidv4 } from 'uuid';

class ActionProvider {
  constructor(createChatBotMessage, setStateFunc, createClientMessage) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
    this.createClientMessage = createClientMessage;
  }

  // Função auxiliar para atualizar o estado do chat
  updateChatState = (messages) => {
    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, ...messages],
    }));
  };

  // --- Ações Específicas ---

  handleAgendamentoList = () => {
    const message = this.createChatBotMessage(
      'Para agendar, você pode acessar nossa página de Agendamento no menu acima, ou clicar no botão abaixo:',
      {
        withAvatar: true,
        id: uuidv4(),
        // Você pode adicionar um widget de botão aqui se quiser
      }
    );
    this.updateChatState([message]);
  };

  handleServicosList = () => {
    const message = this.createChatBotMessage(
      'Nossos serviços incluem Visagismo, Tratamentos Premium, Manicure Deluxe e Limpeza de Pele. Você pode ver os detalhes na página de Serviços.',
      { withAvatar: true, id: uuidv4() }
    );
    this.updateChatState([message]);
  };

  handlePrecosInfo = () => {
    const message = this.createChatBotMessage(
      'Os preços variam. Por exemplo, o Corte Moderno é R$ 150,00 e a Colorização Premium é R$ 450,00. Consulte a página de Serviços para a lista completa.',
      { withAvatar: true, id: uuidv4() }
    );
    this.updateChatState([message]);
  };

  handleHorarioInfo = () => {
    const message = this.createChatBotMessage(
      'Estamos abertos de segunda a sábado, das 08h00 às 20h00.',
      { withAvatar: true, id: uuidv4() }
    );
    this.updateChatState([message]);
  };

  handleContatoInfo = () => {
      const message = this.createChatBotMessage(
        'Você pode entrar em contato pelo e-mail contato@oasisbeauty.com ou pelo telefone (11) 99999-9999.',
        { withAvatar: true, id: uuidv4() }
      );
      this.updateChatState([message]);
    };

  handleDefault = () => {
    const message = this.createChatBotMessage(
      'Desculpe, não entendi. Pode reformular sua pergunta? Lembre-se que posso ajudar com agendamentos, serviços e preços.',
      { withAvatar: true, id: uuidv4() }
    );
    this.updateChatState([message]);
  };
}

export default ActionProvider;