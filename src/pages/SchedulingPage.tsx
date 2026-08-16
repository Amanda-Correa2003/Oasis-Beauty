import { useState } from 'react';
import { Calendar, User, Phone, Sparkles, MessageCircle, Scissors, ArrowRight, Clock, Star } from 'lucide-react';

export const SchedulingPage = () => {
  const [formData, setFormData] = useState({ name: '', phone: '', service: '', date: '' });

  const handleSchedule = () => {
    const message = `Olá, meu nome é ${formData.name}. Gostaria de agendar ${formData.service} para o dia ${formData.date}. Meu telefone é ${formData.phone}.`;
    window.open(`https://wa.me/5511999999999?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-[#FFFDFD] text-gray-800">
      
      <section className="relative h-[30vh] flex items-center justify-center bg-[#FCE7F3]/30">
        <div className="text-center px-6">
          <h1 className="text-4xl md:text-5xl font-serif text-[#8B3A62] mb-3">Reservar Experiência</h1>
          <p className="font-light tracking-[0.2em] uppercase text-xs text-[#C75D8B]">Agendamento Exclusivo Oásis Beauty</p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto -mt-10 relative z-20 px-6 pb-20">
        <div className="grid md:grid-cols-5 gap-12">
          
          <div className="md:col-span-2 space-y-8">
            <div className="bg-[#8B3A62] rounded-[2rem] p-10 text-white shadow-2xl">
              <h2 className="font-serif text-2xl mb-6">Como funciona seu agendamento?</h2>
              <p className="text-[#F9D5E5] font-light leading-relaxed text-sm mb-6">
                Esta é a sua porta de entrada para um atendimento sob medida. Diferente de um agendamento comum, aqui na Oásis Beauty, nós analisamos cada solicitação individualmente para garantir que o tempo do profissional e os produtos certos estejam reservados exclusivamente para você.
              </p>
              <p className="text-[#F9D5E5] font-light leading-relaxed text-sm">
                Ao enviar este formulário, nossa equipe entrará em contato via WhatsApp para alinhar os detalhes técnicos, tirar dúvidas e confirmar o horário que melhor se adapta à sua agenda. É o primeiro passo para o seu momento de reconexão.
              </p>
              
              <div className="mt-10 pt-8 border-t border-white/20 space-y-4">
                <div className="flex items-center gap-3 text-sm"><Star size={16}/> Consultoria personalizada</div>
                <div className="flex items-center gap-3 text-sm"><Clock size={16}/> Resposta em até 2 horas</div>
              </div>
            </div>
          </div>

          <div className="md:col-span-3 bg-white rounded-[2rem] p-10 border border-[#F9D5E5] shadow-lg">
            <h3 className="text-xl font-serif text-[#8B3A62] mb-8">Preencha seus dados</h3>
            
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Field label="Nome Completo" icon={<User size={18}/>} onChange={(v: string) => setFormData({...formData, name: v})} />
                <Field label="WhatsApp" icon={<Phone size={18}/>} onChange={(v: string) => setFormData({...formData, phone: v})} />
              </div>
              
              <Field label="Serviço ou Procedimento Desejado" icon={<Scissors size={18}/>} onChange={(v: string) => setFormData({...formData, service: v})} />
              <Field label="Data de Preferência" type="date" icon={<Calendar size={18}/>} onChange={(v: string) => setFormData({...formData, date: v})} />

              <div className="pt-4">
                <button 
                  onClick={handleSchedule} 
                  className="w-full bg-[#2a2024] text-white py-5 rounded-2xl font-medium hover:bg-[#4a3a42] transition-all duration-300 shadow-lg flex items-center justify-center gap-3 uppercase tracking-widest text-xs"
                >
                  <MessageCircle size={18} />
                  Enviar Solicitação via WhatsApp <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Field = ({ label, icon, type = "text", onChange }: any) => (
  <div>
    <label className="block text-[10px] uppercase tracking-widest text-[#8B3A62] font-semibold mb-2 ml-1">{label}</label>
    <div className="relative">
      <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-[#C75D8B]">
        {icon}
      </div>
      <input 
        type={type}
        className="w-full pl-12 pr-4 py-4 bg-[#FCE7F3]/20 border border-[#F9D5E5] rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#E8A0BF] text-gray-700 text-sm transition-all"
        onChange={(e) => onChange(e.target.value)} 
      />
    </div>
  </div>
);