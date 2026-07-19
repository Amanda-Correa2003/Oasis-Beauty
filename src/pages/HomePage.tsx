import{ Link } from 'react-router-dom';

export const HomePage = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Banner */}
      <section className="relative h-[80vh] flex items-center justify-center text-center bg-gray-900">
        <img 
          src="https://images.unsplash.com/photo-1560066984-1389b4cda4f6?auto=format&fit=crop&w=1600&q=80" 
          alt="Luxury Salon" 
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        />
        <div className="relative z-10 px-4">
          <h1 className="text-5xl md:text-7xl font-heading text-oasis-white mb-6">OÁSIS BEAUTY</h1>
          <p className="text-xl md:text-2xl text-oasis-gold mb-8 font-light italic">Seu refúgio de beleza e bem-estar.</p>
          <div className="flex gap-4 justify-center">
            <Link to="/agendamento" className="bg-oasis-gold px-8 py-3 text-oasis-black font-bold hover:bg-white transition">
              AGENDAR AGORA
            </Link>
          </div>
        </div>
      </section>

      {/* Destaque */}
      <section className="py-20 px-4 container mx-auto text-center">
        <h2 className="text-3xl font-heading mb-12">Experiências Exclusivas</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 border border-oasis-gold/30">
            <h3 className="font-heading text-xl mb-4">Visagismo</h3>
            <p className="text-sm">Design personalizado que revela sua melhor versão.</p>
          </div>
          <div className="p-6 border border-oasis-gold/30">
            <h3 className="font-heading text-xl mb-4">Tratamentos Premium</h3>
            <p className="text-sm">Tecnologia avançada em cuidados capilares e pele.</p>
          </div>
          <div className="p-6 border border-oasis-gold/30">
            <h3 className="font-heading text-xl mb-4">Ambiente Sofisticado</h3>
            <p className="text-sm">Um espaço criado para o seu relaxamento total.</p>
          </div>
        </div>
      </section>
    </div>
  );
};