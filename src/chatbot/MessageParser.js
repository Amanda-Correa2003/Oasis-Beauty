// src/chatbot/MessageParser.js
class MessageParser {
  constructor(actionProvider, state) {
    this.actionProvider = actionProvider;
    this.state = state;
  }

  parse(message) {
    const lowerCaseMessage = message.toLowerCase();

    // Lógica de palavras-chave simples (para a entrevista, mostre que isso pode ser substituído por IA)
    if (lowerCaseMessage.includes('agendar') || lowerCaseMessage.includes('marcar')) {
      this.actionProvider.handleAgendamentoList();
    }
    else if (lowerCaseMessage.includes('serviço') || lowerCaseMessage.includes('corte') || lowerCaseMessage.includes('unha')) {
      this.actionProvider.handleServicosList();
    }
    else if (lowerCaseMessage.includes('preço') || lowerCaseMessage.includes('valor') || lowerCaseMessage.includes('custa')) {
      this.actionProvider.handlePrecosInfo();
    }
    else if (lowerCaseMessage.includes('horário') || lowerCaseMessage.includes('abre')) {
      this.actionProvider.handleHorarioInfo();
    }
    else if (lowerCaseMessage.includes('contato') || lowerCaseMessage.includes('telefone')) {
        this.actionProvider.handleContatoInfo();
      }
    else {
      this.actionProvider.handleDefault();
    }
  }
}

export default MessageParser;