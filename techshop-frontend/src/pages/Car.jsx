import { useCart } from '../components/products/CartContext';

export default function Car() {
  const { cart, dispatch } = useCart();
  const items = cart.items;
  const total = items.reduce((acc, item) => acc + item.product.price * item.quantity, 0);

  return (
    <div className="min-h-screen pt-16">
      <div className="max-w-4xl mx-auto px-5 py-8">
        <h1 className="text-3xl font-bold mb-6">Tu Carrito</h1>
        {items.length === 0 ? (
          <p className="text-gray-600">Tu carrito está vacío.</p>
        ) : (
          <div className="space-y-4">
            {items.map(({ product, quantity }) => (
              <div key={product.id} className="flex items-center justify-between bg-white rounded shadow p-4">
                <div className="flex items-center gap-4">
                  <img src={product.image} alt={product.title || product.name} className="w-16 h-16 object-contain rounded" />
                  <div>
                    <div className="font-semibold">{product.title || product.name}</div>
                    <div className="text-sm text-gray-500">Cantidad: {quantity}</div>
                    <div className="text-sm text-gray-500">Precio unitario: ${product.price}</div>
                  </div>
                </div>
                <div className="flex flex-col items-end gap-2">
                  <div className="font-bold text-blue-600">${(product.price * quantity).toFixed(2)}</div>
                  <button
                    className="text-xs text-red-500 hover:underline"
                    onClick={() => dispatch({ type: 'REMOVE_FROM_CART', payload: { id: product.id } })}
                  >
                    Quitar
                  </button>
                </div>
              </div>
            ))}
            <div className="flex justify-end mt-6">
              <div className="text-xl font-bold">Total: ${total.toFixed(2)}</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}