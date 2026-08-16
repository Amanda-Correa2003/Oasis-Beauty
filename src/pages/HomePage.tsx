import { Link } from 'react-router-dom';
import { Sparkles, Crown, Coffee, Heart, Star, ShieldCheck, Clock } from 'lucide-react';

export const HomePage = () => {
  const pillars = [
    { title: "Visagismo & Estilo", desc: "Análise detalhada do seu traço facial e personalidade para criar um visual perfeitamente harmonioso.", icon: <Crown size={28} /> },
    { title: "Tratamentos Premium", desc: "Tecnologia de ponta em reconstrução capilar, terapias de couro cabeludo e estética avançada.", icon: <Sparkles size={28} /> },
    { title: "Espaço & Acolhimento", desc: "Desfrute de blends exclusivos de chás, música ambiente suave e um clima de calmaria inigualável.", icon: <Coffee size={28} /> }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[#FFFDFD] text-gray-800 selection:bg-[#F9D5E5] selection:text-[#8B3A62]">
      
      <section className="relative h-[85vh] flex items-center justify-center text-center overflow-hidden bg-[#2a2024]">
        <img 
          src='https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&w=1600&q=80'
          alt="Luxury Salon Interior" 
          className="absolute inset-0 w-full h-full object-cover opacity-80 scale-105 transition-transform duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/20" />
        
        <div className="relative z-10 px-4 max-w-4xl mt-6">
          <span className="text-[#F9D5E5] uppercase tracking-[0.3em] text-xs font-medium mb-4 block drop-shadow">Estética & Cuidado Personalizado</span>
          <h1 className="text-5xl md:text-7xl font-serif text-[#FFFDFD] mb-6 tracking-tight drop-shadow-lg">OÁSIS BEAUTY</h1>
          <p className="text-lg md:text-xl text-[#F9D5E5] mb-10 font-light tracking-wide italic drop-shadow max-w-xl mx-auto">
            Mais do que um salão, o seu refúgio particular de beleza e reconexão.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/agendamento" className="w-full sm:w-auto bg-[#8B3A62] text-[#FFFDFD] px-10 py-4 rounded-full font-medium hover:bg-[#6e2d4e] transition-all duration-300 shadow-2xl border border-[#E8A0BF]/40 hover:scale-105 tracking-wider text-sm">
              RESERVAR MEU MOMENTO
            </Link>
            <Link to="/servicos" className="w-full sm:w-auto bg-white/10 backdrop-blur-md text-[#FFFDFD] px-8 py-4 rounded-full font-medium hover:bg-white/20 transition-all duration-300 border border-white/20 tracking-wider text-sm">
              CONHECER SERVIÇOS
            </Link>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[#F9D5E5]/70 animate-bounce">
          <Sparkles size={20} />
        </div>
      </section>

      <section className="py-20 px-6 max-w-4xl mx-auto text-center">
        <span className="text-xs uppercase tracking-[0.25em] text-[#C75D8B] font-semibold mb-3 block">Nossa Filosofia</span>
        <h2 className="text-3xl md:text-4xl font-serif text-[#8B3A62] mb-6">A arte de realçar a sua essência natural</h2>
        <p className="text-gray-600 font-light leading-relaxed text-base md:text-lg mb-8">
          Acreditamos que o verdadeiro luxo reside nos detalhes e na individualidade. Na Oásis Beauty, cada atendimento é planejado como uma experiência única de resgate do bem-estar, unindo técnicas sofisticadas de visagismo, produtos de altíssima performance e um ambiente acolhedor.
        </p>
        <div className="flex justify-center items-center gap-8 text-sm text-[#8B3A62] font-medium tracking-wide">
          <div className="flex items-center gap-2"><ShieldCheck size={18} className="text-[#C75D8B]" /> Produtos Hipoalergênicos</div>
          <div className="flex items-center gap-2"><Clock size={18} className="text-[#C75D8B]" /> Atendimento com Hora Marcada</div>
        </div>
      </section>

      <section className="py-20 px-6 bg-[#FCE7F3]/60 border-y border-[#F9D5E5]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs uppercase tracking-widest text-[#C75D8B] font-semibold mb-2 block">Exclusividade e Cuidado</span>
            <h3 className="text-3xl font-serif text-[#8B3A62]">Pilares do Nosso Espaço</h3>
            <div className="w-16 h-0.5 bg-[#E8A0BF] mx-auto mt-4" />
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {pillars.map((item, i) => (
              <div key={i} className="bg-[#FFFDFD] p-8 rounded-3xl border border-[#F9D5E5] shadow-sm hover:shadow-xl hover:border-[#E8A0BF] transition-all duration-300 flex flex-col items-center text-center group">
                <div className="mb-5 p-4 bg-[#FCE7F3] rounded-2xl group-hover:bg-[#8B3A62] group-hover:text-white transition-all duration-300 text-[#8B3A62] group-hover:text-white">
                  {item.icon}
                </div>
                <h4 className="font-serif text-xl text-[#8B3A62] mb-3">{item.title}</h4>
                <p className="text-gray-600 leading-relaxed text-sm font-light">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 max-w-5xl mx-auto text-center">
        <span className="text-xs uppercase tracking-widest text-[#C75D8B] font-semibold mb-2 block">Relatos Oásis</span>
        <h3 className="text-3xl font-serif text-[#8B3A62] mb-12">O que dizem nossas clientes</h3>
        
        <div className="grid md:grid-cols-2 gap-8 text-left">
          <div className="bg-white p-8 rounded-3xl border border-[#F9D5E5] shadow-sm flex flex-col justify-between">
            <p className="text-gray-700 italic font-light mb-6 text-sm leading-relaxed">
              "Ir à Oásis Beauty não é apenas cuidar do cabelo, é uma experiência terapêutica. O atendimento é impecável e o cuidado com cada detalhe faz toda a diferença no meu dia a dia."
            </p>
            <div className="flex items-center justify-between">
              <span className="font-serif text-sm text-[#8B3A62] font-medium">— Mariana Souza</span>
              <div className="flex text-amber-400 gap-1"><Star size={14} fill="currentColor" /><Star size={14} fill="currentColor" /><Star size={14} fill="currentColor" /><Star size={14} fill="currentColor" /><Star size={14} fill="currentColor" /></div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-[#F9D5E5] shadow-sm flex flex-col justify-between">
            <p className="text-gray-700 italic font-light mb-6 text-sm leading-relaxed">
              "O visagismo mudou a forma como enxergo meu visual. Encontrei profissionais que realmente entendem o que valoriza o meu rosto. Simplesmente apaixonada pelo espaço!"
            </p>
            <div className="flex items-center justify-between">
              <span className="font-serif text-sm text-[#8B3A62] font-medium">— Camila Duarte</span>
              <div className="flex text-amber-400 gap-1"><Star size={14} fill="currentColor" /><Star size={14} fill="currentColor" /><Star size={14} fill="currentColor" /><Star size={14} fill="currentColor" /><Star size={14} fill="currentColor" /></div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#8B3A62] py-16 px-6 text-center text-white relative overflow-hidden">
        <div className="absolute -right-10 -bottom-10 opacity-10 pointer-events-none">
          <Heart size={250} />
        </div>
        <div className="max-w-2xl mx-auto relative z-10">
          <h3 className="text-3xl md:text-4xl font-serif mb-4">Pronta para viver essa experiência?</h3>
          <p className="text-[#F9D5E5] font-light mb-8 text-sm md:text-base">
            Agende seu horário com antecedência e garanta o seu momento exclusivo conosco.
          </p>
          <Link to="/agendamento" className="inline-block bg-[#FFFDFD] text-[#8B3A62] px-10 py-4 rounded-full font-medium hover:bg-[#F9D5E5] transition-all duration-300 shadow-xl tracking-wider text-sm">
            AGENDAR AGORA MESMO
          </Link>
        </div>
      </section>
    </div>
  );
};