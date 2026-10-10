import { useCart } from '../context/CartContext';
import { ShoppingBag, Trash2, Plus, Minus, MessageCircle, ArrowRight, Flower2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export const CartPage = () => {
  const { cart, removeFromCart, updateQuantity, total } = useCart();

  const handleCheckoutWhatsApp = () => {
    if (cart.length === 0) return;
    
    let message = "Olá! Gostaria de agendar/solicitar os seguintes serviços do meu carrinho:\n\n";
    cart.forEach(item => {
      message += `• ${item.name} (Qtd: ${item.quantity}) - R$ ${(item.price * item.quantity).toFixed(2)}\n`;
    });
    message += `\n*Total:* R$ ${total.toFixed(2)}`;

    window.open(`https://wa.me/5521964239143?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#FFFDFD] relative overflow-hidden">
      <div className="absolute top-6 left-6 text-[#E8A0BF]/40 pointer-events-none hidden md:block">
        <Flower2 size={64} strokeWidth={1} />
      </div>
      <div className="absolute top-6 right-6 text-[#E8A0BF]/40 pointer-events-none hidden md:block scale-x-[-1]">
        <Flower2 size={64} strokeWidth={1} />
      </div>

      <div className="container mx-auto py-16 px-4 md:px-8 max-w-4xl flex-grow">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-serif text-[#8B3A62] mb-3 tracking-tight">Seu Carrinho</h1>
          <p className="text-gray-600 font-light italic text-sm md:text-base mb-4">Revise seus serviços selecionados antes do agendamento.</p>
          
          <div className="flex items-center justify-center gap-3 text-[#E8A0BF]">
            <div className="w-16 h-[1px] bg-[#E8A0BF]/60" />
            <Flower2 size={20} className="text-[#C75D8B]" strokeWidth={1.5} />
            <div className="w-16 h-[1px] bg-[#E8A0BF]/60" />
          </div>
        </div>

        {cart.length === 0 ? (
          <div className="bg-white rounded-3xl p-12 text-center border border-[#F9D5E5] shadow-sm max-w-lg mx-auto">
            <div className="w-16 h-16 bg-[#FCE7F3] rounded-full flex items-center justify-center mx-auto mb-6 text-[#8B3A62]">
              <ShoppingBag size={28} />
            </div>
            <h3 className="text-xl font-serif text-[#8B3A62] mb-2">Seu carrinho está vazio</h3>
            <p className="text-gray-600 text-sm mb-8 font-light">Explore nossos serviços exclusivos e escolha seu próximo momento de cuidado.</p>
            <Link 
              to="/servicos" 
              className="inline-flex items-center gap-2 bg-[#8B3A62] text-white px-8 py-3.5 rounded-full font-medium hover:bg-[#6e2d4e] transition-all duration-300 shadow-md text-sm"
            >
              Ver Serviços <ArrowRight size={16} />
            </Link>
          </div>
        ) : (
          <div className="bg-white rounded-3xl p-6 md:p-10 border border-[#F9D5E5] shadow-sm space-y-6">
            <div className="divide-y divide-[#F9D5E5]">
              {cart.map(item => (
                <div key={item.id} className="py-6 first:pt-0 last:pb-0 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                  <div className="flex items-center gap-4">
                    {item.image && (
                      <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded-2xl border border-[#F9D5E5]" />
                    )}
                    <div>
                      <h3 className="font-serif text-lg text-[#8B3A62] font-medium">{item.name}</h3>
                      <p className="text-sm text-gray-500 font-light">R$ {item.price} cada</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between w-full sm:w-auto gap-6">
                    <div className="flex items-center border border-[#F9D5E5] rounded-full bg-[#FFFDFD] overflow-hidden shadow-sm">
                      <button 
                        onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                        className="px-3 py-1.5 text-gray-500 hover:bg-[#FCE7F3] transition-colors"
                      >
                        <Minus size={14} />
                      </button>
                      <span className="px-3 text-sm font-medium text-[#8B3A62]">{item.quantity}</span>
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="px-3 py-1.5 text-gray-500 hover:bg-[#FCE7F3] transition-colors"
                      >
                        <Plus size={14} />
                      </button>
                    </div>

                    <span className="font-semibold text-[#8B3A62] min-w-[80px] text-right">
                      R$ {(item.price * item.quantity).toFixed(2)}
                    </span>

                    <button 
                      onClick={() => removeFromCart(item.id)} 
                      className="text-gray-400 hover:text-red-500 transition-colors p-2"
                      title="Excluir item"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-[#F9D5E5] pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
              <div className="text-gray-600 text-sm font-light">
                Total de itens selecionados: <span className="font-medium text-[#8B3A62]">{cart.reduce((acc, item) => acc + item.quantity, 0)}</span>
              </div>
              <div className="text-2xl font-serif text-[#8B3A62] font-semibold">
                Total: R$ {total.toFixed(2)}
              </div>
            </div>

            <div className="pt-4">
              <button 
                onClick={handleCheckoutWhatsApp}
                className="w-full bg-[#8B3A62] text-white py-4 px-6 rounded-full font-medium hover:bg-[#6e2d4e] transition-all duration-300 shadow-md flex items-center justify-center gap-2 text-sm tracking-wide"
              >
                <MessageCircle size={18} />
                Agendar / Comprar agora pelo WhatsApp
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};