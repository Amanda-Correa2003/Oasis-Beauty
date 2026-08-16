import { createChatBotMessage } from 'react-chatbot-kit';
import { v4 as uuidv4 } from 'uuid';
import Options from './Options';

const botName = 'Assistente Oásis';

const config = {
  botName,
  initialMessages: [
    createChatBotMessage(
      'Olá! Seja muito bem-vindo(a) à Oásis Beauty. Sobre o que você gostaria de conversar hoje?',
      {
        withAvatar: true,
        delay: 300,
        id: uuidv4(),
        widget: 'optionsWidget',
      }
    ),
  ],
  widgets: [
    {
      widgetName: 'optionsWidget',
      widgetFunc: (props) => <Options {...props} />,
    },
  ],
  customStyles: {
    botMessageBox: {
      backgroundColor: '#8B3A62',
    },
    chatButton: {
      backgroundColor: '#8B3A62',
    },
  },
};

export default config;