import { v4 as uuidv4 } from 'uuid';

class ActionProvider {
  constructor(createChatBotMessage, setStateFunc, createClientMessage) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
    this.createClientMessage = createClientMessage;
  }

  updateChatState = (messages, widgetName = null) => {
    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, ...messages],
      widget: widgetName,
    }));
  };

  handleAgendamentoList = () => {
    const message = this.createChatBotMessage(
      'Para realizar seu agendamento, você pode acessar nossa página de Agendamento no menu superior ou clicar diretamente no botão de agendamento na página de serviços e carrinho.',
      { withAvatar: true, id: uuidv4(), widget: 'optionsWidget' }
    );
    this.updateChatState([message], 'optionsWidget');
  };

  handleServicosList = () => {
    const message = this.createChatBotMessage(
      'Nossos serviços exclusivos contam com Visagismo, Tratamentos Capilares e Pele Premium, além de Manicure Deluxe. Você pode ver todos na aba de Serviços!',
      { withAvatar: true, id: uuidv4(), widget: 'optionsWidget' }
    );
    this.updateChatState([message], 'optionsWidget');
  };

  handlePrecosInfo = () => {
    const message = this.createChatBotMessage(
      'Os valores variam conforme o tratamento: por exemplo, o Corte Moderno custa R$ 150,00 e a Coloração Premium custa R$ 450,00.',
      { withAvatar: true, id: uuidv4(), widget: 'optionsWidget' }
    );
    this.updateChatState([message], 'optionsWidget');
  };

  handleHorarioInfo = () => {
    const message = this.createChatBotMessage(
      'Estamos abertos de terça a sábado, das 09h às 20h.',
      { withAvatar: true, id: uuidv4(), widget: 'optionsWidget' }
    );
    this.updateChatState([message], 'optionsWidget');
  };

  handleContatoInfo = () => {
    const message = this.createChatBotMessage(
      'Você pode falar conosco pelo e-mail contato@oasisbeauty.com ou diretamente pelo WhatsApp (11) 99999-9999.',
      { withAvatar: true, id: uuidv4(), widget: 'optionsWidget' }
    );
    this.updateChatState([message], 'optionsWidget');
  };

  handleDefault = () => {
    const message = this.createChatBotMessage(
      'Não compreendi muito bem. Sobre qual desses assuntos você quer falar?',
      { withAvatar: true, id: uuidv4(), widget: 'optionsWidget' }
    );
    this.updateChatState([message], 'optionsWidget');
  };
}

export default ActionProvider;