// @ts-nocheck
import React from 'react';
import ChatbotModule from 'react-chatbot-kit';
const Chatbot = ChatbotModule.default || ChatbotModule;

import 'react-chatbot-kit/build/main.css';
import './Chatbot.css';
import config from './config';
import ActionProvider from './ActionProvider';
import MessageParser from './MessageParser';

export default function Chat() {
  return (
    <div style={{ position: 'fixed', bottom: '20px', right: '20px', zIndex: 999999 }}>
      <Chatbot
        config={config}
        actionProvider={ActionProvider}
        messageParser={MessageParser}
      />
    </div>
  );
}