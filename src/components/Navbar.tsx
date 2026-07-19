import  { Link } from 'react-router-dom';
import { ShoppingBag, Menu, X } from 'lucide-react';
import { useState } from 'react';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-oasis-black text-oasis-white p-4 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-heading font-bold text-oasis-gold">
          OÁSIS BEAUTY
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 items-center">
          <Link to="/" className="hover:text-oasis-gold transition">Home</Link>
          <Link to="/servicos" className="hover:text-oasis-gold transition">Serviços</Link>
          <Link to="/agendamento" className="hover:text-oasis-gold transition">Agendamento</Link>
          <Link to="/contato" className="hover:text-oasis-gold transition">Contato</Link>
          <Link to="/carrinho" className="relative">
            <ShoppingBag className="hover:text-oasis-gold transition" />
          </Link>
        </div>

        {/* Mobile Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col gap-4 mt-4 bg-oasis-darkGray p-4">
          <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/servicos" onClick={() => setIsOpen(false)}>Serviços</Link>
          <Link to="/agendamento" onClick={() => setIsOpen(false)}>Agendamento</Link>
          <Link to="/contato" onClick={() => setIsOpen(false)}>Contato</Link>
        </div>
      )}
    </nav>
  );
};