import { useState } from 'react';
import { services } from '../data/services';
import { useCart } from '../context/CartContext';
import { Search, ShoppingCart, Scissors, Droplet, Sparkles, Wand2, Flower2, Check } from 'lucide-react';

export const ServicesPage = () => {
  const [filter, setFilter] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('todos');
  const [addedId, setAddedId] = useState<string | number | null>(null);
  const { addToCart } = useCart();

  const handleAdd = (service: any) => {
    addToCart(service);
    setAddedId(service.id);
    setTimeout(() => setAddedId(null), 2000);
  };

  const categories = [
    { id: 'todos', label: 'Todos os Serviços' },
    { id: 'corte', label: 'Cortes & Estilo' },
    { id: 'coloracao', label: 'Coloração' },
    { id: 'tratamento', label: 'Tratamentos' },
    { id: 'manicure', label: 'Manicure & Pés' }
  ];

  const filteredServices = services.filter((s: any) => {
    const matchesSearch = s.name.toLowerCase().includes(filter.toLowerCase()) || 
                          s.description.toLowerCase().includes(filter.toLowerCase());
    
    if (selectedCategory === 'todos') return matchesSearch;
    return matchesSearch && s.name.toLowerCase().includes(selectedCategory);
  });

  const getServiceIcon = (name: string) => {
    const lower = name.toLowerCase();
    if (lower.includes('corte')) return <Scissors size={18} className="text-[#8B3A62]" />;
    if (lower.includes('coloração') || lower.includes('luzes') || lower.includes('mechas')) return <Droplet size={18} className="text-[#8B3A62]" />;
    if (lower.includes('hidratação') || lower.includes('reconstrução')) return <Wand2 size={18} className="text-[#8B3A62]" />;
    return <Sparkles size={18} className="text-[#8B3A62]" />;
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#FFFDFD] relative overflow-hidden text-gray-800">
      
      <div className="absolute top-12 left-6 text-[#E8A0BF]/30 pointer-events-none hidden lg:block">
        <Flower2 size={80} strokeWidth={1} />
      </div>
      <div className="absolute top-12 right-6 text-[#E8A0BF]/30 pointer-events-none hidden lg:block scale-x-[-1]">
        <Flower2 size={80} strokeWidth={1} />
      </div>

      <div className="container mx-auto py-20 px-6 max-w-7xl grow">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.25em] text-[#C75D8B] font-semibold mb-3 block">Menu de Experiências</span>
          <h1 className="text-4xl md:text-5xl font-serif text-[#8B3A62] mb-4 tracking-tight">Nossos Serviços & Cuidados</h1>
          <p className="text-gray-600 font-light italic text-base mb-6">
            Cada ritual foi pensado exclusivamente para realçar sua beleza natural e proporcionar momentos de puro relaxamento.
          </p>
          
          <div className="flex items-center justify-center gap-3 text-[#E8A0BF]">
            <div className="w-16 h-px bg-[#E8A0BF]/60" />
            <Flower2 size={18} className="text-[#C75D8B]" strokeWidth={1.5} />
            <div className="w-16 h-px bg-[#E8A0BF]/60" />
          </div>
        </div>
        
        <div className="max-w-3xl mx-auto mb-16 space-y-6">
          <div className="relative">
            <div className="absolute inset-y-0 left-5 flex items-center pointer-events-none text-[#C75D8B]">
              <Search size={20} />
            </div>
            <input 
              type="text" 
              placeholder="Pesquisar por tratamento, corte ou procedimento..." 
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="w-full pl-14 pr-6 py-4 bg-white border border-[#F9D5E5] rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-[#E8A0BF] text-gray-700 placeholder-gray-400 text-sm transition-all"
            />
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-5 py-2.5 rounded-full text-xs uppercase tracking-wider font-medium transition-all duration-300 border ${
                  selectedCategory === cat.id 
                    ? 'bg-[#8B3A62] text-white border-[#8B3A62] shadow-md' 
                    : 'bg-white text-gray-600 border-[#F9D5E5] hover:border-[#E8A0BF] hover:bg-[#FCE7F3]/30'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {filteredServices.length === 0 ? (
          <div className="text-center py-16 bg-[#FCE7F3]/30 rounded-3xl border border-[#F9D5E5] max-w-xl mx-auto">
            <Sparkles size={32} className="mx-auto text-[#C75D8B] mb-3" />
            <h3 className="font-serif text-xl text-[#8B3A62] mb-2">Nenhum serviço encontrado</h3>
            <p className="text-gray-500 text-sm font-light">Tente buscar por outro termo ou limpe os filtros.</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service: any) => (
              <div 
                key={service.id} 
                className="bg-white rounded-3xl p-6 border border-[#F9D5E5] shadow-sm hover:shadow-xl hover:border-[#E8A0BF] transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="relative mb-6 overflow-hidden rounded-2xl">
                    <img 
                      src={service.image} 
                      alt={service.name} 
                      className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-700" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
                    
                    <div className="absolute top-3 right-3 w-10 h-10 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center shadow-md border border-[#F9D5E5]">
                      {getServiceIcon(service.name)}
                    </div>
                  </div>

                  <h3 className="text-xl font-serif text-[#8B3A62] mb-2 font-medium group-hover:text-[#C75D8B] transition-colors">
                    {service.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-6 leading-relaxed font-light">
                    {service.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#F9D5E5]/60 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-gray-400 block">Investimento</span>
                    <span className="text-[#8B3A62] font-semibold text-lg">
                      R$ {service.price}
                    </span>
                  </div>

                  <button 
                    onClick={() => handleAdd(service)}
                    className={`py-3 px-5 rounded-full font-medium transition-all duration-300 flex items-center gap-2 text-xs uppercase tracking-wider shadow-sm ${
                      addedId === service.id
                        ? 'bg-emerald-600 text-white'
                        : 'bg-[#FCE7F3] border border-[#E8A0BF] text-[#8B3A62] hover:bg-[#8B3A62] hover:text-white hover:border-[#8B3A62]'
                    }`}
                  >
                    {addedId === service.id ? (
                      <>
                        <Check size={16} /> Adicionado
                      </>
                    ) : (
                      <>
                        <ShoppingCart size={14} /> Selecionar
                      </>
                    )}
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};