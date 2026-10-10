// @ts-nocheck
import { useState } from 'react';
import ChatbotModule from 'react-chatbot-kit';
const Chatbot = ChatbotModule.default || ChatbotModule;

import 'react-chatbot-kit/build/main.css';
import './Chatbot.css';
import config from './config';
import ActionProvider from './ActionProvider';
import MessageParser from './MessageParser';
import { MessageCircle, X } from 'lucide-react';

export default function Chat() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-[999999] flex flex-col items-end gap-3">
      {isOpen && (
        <div
          className="relative shadow-2xl rounded-3xl overflow-hidden border border-[#F9D5E5] bg-white w-87.5 md:w-95"
          style={{ maxWidth: 'calc(100vw - 3rem)' }}
        >
          <div className="bg-[#8B3A62] px-5 py-4 flex items-center justify-between text-white select-none">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 bg-emerald-400 rounded-full animate-pulse" />
              <span className="font-serif font-medium text-base tracking-wide">Assistente Oásis</span>
            </div>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setIsOpen(false);
              }}
              className="text-white hover:bg-white/20 p-2 rounded-full transition-all cursor-pointer z-50 flex items-center justify-center"
              title="Fechar chat"
            >
              <X size={20} />
            </button>
          </div>

          <div
            className="bg-[#FFFDFD] p-2"
            data-lenis-prevent
            style={{
              display: 'flex',
              flexDirection: 'column',
              height: 'min(480px, calc(100dvh - 13rem))',
            }}
          >
            <Chatbot
              config={config}
              actionProvider={ActionProvider}
              messageParser={MessageParser}
            />
          </div>
        </div>
      )}

      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="bg-[#8B3A62] hover:bg-[#6e2d4e] text-white w-14 h-14 rounded-full shadow-xl flex items-center justify-center transition-all duration-300 hover:scale-105 border-2 border-[#F9D5E5] cursor-pointer"
        title={isOpen ? 'Fechar Assistente Oásis' : 'Abrir Assistente Oásis'}
        aria-label={isOpen ? 'Fechar chat' : 'Abrir chat'}
      >
        {isOpen ? <X size={26} /> : <MessageCircle size={26} />}
      </button>
    </div>
  );
}