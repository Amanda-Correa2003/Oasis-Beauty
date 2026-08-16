class MessageParser {
  constructor(actionProvider, state) {
    this.actionProvider = actionProvider;
    this.state = state;
  }

  parse(message) {
    const query = message.toLowerCase();

    if (query.includes('agendar') || query.includes('marcar') || query.includes('agendamento')) {
      this.actionProvider.handleAgendamentoList();
    } else if (query.includes('serviço') || query.includes('corte') || query.includes('unha') || query.includes('tratamento')) {
      this.actionProvider.handleServicosList();
    } else if (query.includes('preço') || query.includes('valor') || query.includes('custa') || query.includes('quanto')) {
      this.actionProvider.handlePrecosInfo();
    } else if (query.includes('horário') || query.includes('abre') || query.includes('funcionamento')) {
      this.actionProvider.handleHorarioInfo();
    } else if (query.includes('contato') || query.includes('telefone') || query.includes('email')) {
      this.actionProvider.handleContatoInfo();
    } else {
      this.actionProvider.handleDefault();
    }
  }
}

export default MessageParser;