import { Link } from 'react-router-dom';
import { ShoppingBag, Menu, X, Sparkles } from 'lucide-react';
import { useState } from 'react';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#2a2024]/90 backdrop-blur-md text-white sticky top-0 z-50 border-b border-[#F9D5E5]/10 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
        
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <span className="text-2xl font-serif tracking-widest text-[#F9D5E5] group-hover:text-white transition-colors">
            OÁSIS BEAUTY
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-10 items-center">
          <Link to="/" className="text-sm uppercase tracking-wider text-gray-300 hover:text-[#F9D5E5] transition-colors font-light">
            Home
          </Link>
          <Link to="/servicos" className="text-sm uppercase tracking-wider text-gray-300 hover:text-[#F9D5E5] transition-colors font-light">
            Serviços
          </Link>
          <Link to="/agendamento" className="text-sm uppercase tracking-wider text-gray-300 hover:text-[#F9D5E5] transition-colors font-light">
            Agendamento
          </Link>
          
          <Link to="/carrinho" className="relative p-2.5 bg-white/5 hover:bg-white/10 rounded-full transition-all border border-white/10 text-[#F9D5E5]">
            <ShoppingBag size={18} />
          </Link>
        </div>

        {/* Mobile Actions (Bag + Menu Button) */}
        <div className="flex items-center gap-3 md:hidden">
          <Link to="/carrinho" className="relative p-2.5 bg-white/5 rounded-full text-[#F9D5E5] border border-white/10">
            <ShoppingBag size={18} />
          </Link>

          <button 
            className="p-2.5 bg-white/5 rounded-full text-[#F9D5E5] border border-white/10 hover:bg-white/10 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Menu"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[#2a2024] border-b border-[#F9D5E5]/10 shadow-2xl py-6 px-6 flex flex-col gap-4 animate-fadeIn">
          <Link 
            to="/" 
            onClick={() => setIsOpen(false)}
            className="text-sm uppercase tracking-wider text-gray-300 hover:text-[#F9D5E5] py-2 border-b border-white/5 transition-colors"
          >
            Home
          </Link>
          <Link 
            to="/servicos" 
            onClick={() => setIsOpen(false)}
            className="text-sm uppercase tracking-wider text-gray-300 hover:text-[#F9D5E5] py-2 border-b border-white/5 transition-colors"
          >
            Serviços
          </Link>
          <Link 
            to="/agendamento" 
            onClick={() => setIsOpen(false)}
            className="text-sm uppercase tracking-wider text-gray-300 hover:text-[#F9D5E5] py-2 transition-colors"
          >
            Agendamento
          </Link>
        </div>
      )}
    </nav>
  );
};