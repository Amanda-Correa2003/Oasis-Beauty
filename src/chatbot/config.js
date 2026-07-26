// src/chatbot/config.js
import { createChatBotMessage } from 'react-chatbot-kit';
import { v4 as uuidv4 } from 'uuid';

const botName = 'Assistente Oásis';

const config = {
  botName: botName,
  initialMessages: [
    createChatBotMessage(
      `Olá! Bem-vindo(a) ao ${botName}. Como posso ajudar você hoje?`,
      {
        withAvatar: true,
        delay: 500,
        id: uuidv4(),
      }
    ),
    createChatBotMessage(
      'Posso tirar dúvidas sobre agendamentos, serviços ou preços.',
      {
        withAvatar: true,
        delay: 1000,
        id: uuidv4(),
      }
    ),
  ],
  customStyles: {
    botMessageBox: {
      backgroundColor: '#c1188b', // Seu rosa
    },
    chatButton: {
      backgroundColor: '#c1188b', // Seu rosa
    },
  },
  // Se você tiver uma imagem de ícone/avatar, coloque o caminho aqui
  // customComponents: { botAvatar: (props) => <img {...props} src="/caminho/para/seu/avatar.png" alt="Bot Avatar" /> },
};

export default config;