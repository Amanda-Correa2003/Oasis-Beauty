export const Footer = () => {
  return (
    <footer className="bg-oasis-black text-oasis-white py-12 border-t border-oasis-gold ">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        <div>
          <h3 className="text-xl font-heading text-oasis-gold mb-4">Oásis Beauty</h3>
          <p className="text-sm">Seu refúgio de beleza e bem-estar.</p>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Contato</h4>
          <p className="text-sm">contato@oasisbeauty.com</p>
          <p className="text-sm">(11) 99999-9999</p>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Endereço</h4>
          <p className="text-sm">Av. Premium, 1000 - São Paulo, SP</p>
        </div>
      </div>
      <div className="text-center mt-8 text-xs text-gray-500">
        © 2026 Oásis Beauty. Todos os direitos reservados.
      </div>
    </footer>
  );
};