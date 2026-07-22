import { useCart } from '../context/CartContext';

export const CartPage = () => {
  const { cart, removeFromCart, updateQuantity, total } = useCart();

  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-3xl font-heading mb-8 text-pink-700">Seu Carrinho</h1>
      {cart.length === 0 ? <p>Seu carrinho está vazio.</p> : (
        <div className="space-y-4">
          {cart.map(item => (
            <div key={item.id} className="flex justify-between items-center border-b pb-4">
              <div>
                <h3 className="font-bold">{item.name}</h3>
                <p>R$ {item.price} x {item.quantity}</p>
              </div>
              <div className="flex gap-4">
                <input 
                  type="number" min="1" value={item.quantity} 
                  className="w-16 border"
                  onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                />
                <button onClick={() => removeFromCart(item.id)} className="text-red-500">Excluir</button>
              </div>
            </div>
          ))}
          <div className="text-right text-2xl font-bold pt-4">Total: R$ {total.toFixed(2)}</div>
        </div>
      )}
    </div>
  );
};