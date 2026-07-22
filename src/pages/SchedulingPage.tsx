import { useState } from 'react';

export const SchedulingPage = () => {
  const [formData, setFormData] = useState({ name: '', phone: '', service: '', date: '' });

  const handleSchedule = () => {
    const message = `Olá, meu nome é ${formData.name}. Gostaria de agendar ${formData.service} para o dia ${formData.date}.`;
    window.open(`https://wa.me/5511999999999?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="container mx-auto py-12 px-4 max-w-md">
      <h1 className="text-3xl font-heading mb-8 text-center">Agendamento</h1>
      <div className="space-y-4">
        <input type="text" placeholder="Nome" className="w-full p-3 border " onChange={(e) => setFormData({...formData, name: e.target.value})} />
        <input type="text" placeholder="Serviços" className="w-full p-3 border " onChange={(e) => setFormData({...formData, service: e.target.value})} />
        <input type="date" className="w-full p-3 border" onChange={(e) => setFormData({...formData, date: e.target.value})} />
        <button onClick={handleSchedule} className="w-full bg-oasis-gold py-3 font-bold hover:opacity-90">
          Agendar por via WhatsApp
        </button>
      </div>
    </div>
  );
};