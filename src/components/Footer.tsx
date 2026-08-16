import { MapPin, Phone, Mail, Flower2, Clock } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-[#2a2024] text-white pt-20 pb-12 border-t border-[#F9D5E5]/20">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        
        {/* Sobre a marca */}
        <div className="md:col-span-1 space-y-4">
          <h3 className="font-serif text-2xl text-[#F9D5E5] tracking-wide">Oásis Beauty</h3>
          <p className="text-sm text-gray-400 font-light leading-relaxed">
            Seu refúgio particular de estética, cuidado personalizado e reconexão.
          </p>
        </div>

        {/* Contato */}
        <div>
          <h4 className="font-serif text-lg text-[#F9D5E5] mb-4">Contato</h4>
          <ul className="space-y-3 text-sm text-gray-400 font-light">
            <li>
              <a href="tel:5511999999999" className="flex items-center gap-3 hover:text-white transition-colors">
                <Phone size={16} className="text-[#C75D8B]" /> (11) 99999-9999
              </a>
            </li>
            <li>
              <a href="mailto:contato@oasisbeauty.com" className="flex items-center gap-3 hover:text-white transition-colors">
                <Mail size={16} className="text-[#C75D8B]" /> contato@oasisbeauty.com
              </a>
            </li>
          </ul>
        </div>

        {/* Endereço */}
        <div>
          <h4 className="font-serif text-lg text-[#F9D5E5] mb-4">Endereço</h4>
          <ul className="space-y-3 text-sm text-gray-400 font-light">
            <li className="flex items-start gap-3">
              <MapPin size={16} className="text-[#C75D8B] shrink-0 mt-0.5" /> 
              <span>Av. Premium, 1000 - Sala 42<br />São Paulo, SP</span>
            </li>
          </ul>
        </div>

        {/* Horários */}
        <div>
          <h4 className="font-serif text-lg text-[#F9D5E5] mb-4">Horários</h4>
          <ul className="space-y-3 text-sm text-gray-400 font-light">
            <li className="flex items-center gap-3">
              <Clock size={16} className="text-[#C75D8B]" /> Terça a Sábado: 9h às 20h
            </li>
            <li className="text-xs text-gray-500 pl-7">Atendimento exclusivo com hora marcada.</li>
          </ul>
        </div>

      </div>

      {/* Rodapé inferior com direitos */}
      <div className="max-w-6xl mx-auto px-6 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 font-light">
        <div className="flex items-center gap-2 mb-4 sm:mb-0">
          <Flower2 size={16} className="text-[#C75D8B]" />
          <span>© 2026 Oásis Beauty. Todos os direitos reservados.</span>
        </div>
        <div className="flex gap-6">
          <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
          <a href="#" className="hover:text-white transition-colors">Política de Privacidade</a>
        </div>
      </div>
    </footer>
  );
};