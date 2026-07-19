import { useState } from 'react';
import { services } from '../data/services';
import { useCart } from '../context/CartContext';

export const ServicesPage = () => {
  const [filter, setFilter] = useState('');
  const { addToCart } = useCart();

  const filteredServices = services.filter(s => 
    s.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-4xl font-heading text-center mb-8">Nossos Serviços</h1>
      
      <input 
        type="text" 
        placeholder="Buscar serviço..." 
        className="w-full p-3 border border-gray-300 mb-8"
        onChange={(e) => setFilter(e.target.value)}
      />

      <div className="grid md:grid-cols-3 gap-8">
        {filteredServices.map(service => (
          <div key={service.id} className="border p-4 shadow-lg hover:shadow-xl transition">
            <img src={service.image} alt={service.name} className="w-full h-48 object-cover mb-4" />
            <h3 className="text-xl font-bold">{service.name}</h3>
            <p className="text-gray-600 mb-4">{service.description}</p>
            <p className="font-bold text-oasis-gold text-lg mb-4">R$ {service.price}</p>
            <button 
              onClick={() => addToCart(service)}
              className="w-full bg-oasis-black text-white py-2 hover:bg-oasis-gold transition"
            >
              Adicionar ao Carrinho
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};