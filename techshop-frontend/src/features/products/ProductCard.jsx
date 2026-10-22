// src/components/products/ProductCard.jsx
import { useState } from 'react';
import { useCart } from '../cart/CartContext';

export default function ProductCard({ product, api }) {
  const [added, setAdded] = useState(false);
  const { dispatch } = useCart();

  function handleBuy() {
    dispatch({ type: 'ADD_TO_CART', payload: { product, quantity: 1 } });
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  }

  const name = api ? product.title : product.name;
  const image = product.image;
  const category = product.category;
  const price = product.price;

  return (
    <div className="bg-[#f0f6fe] rounded-[10px] p-4 text-center transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_4px_20px_rgba(0,0,0,0.1)] text-black block w-full max-w-xs flex flex-col h-[400px]">
      <div className="flex flex-col flex-grow">
        <div className="flex justify-center items-center h-40 mb-2.5">
          <img
            src={image}
            alt={name}
            className="max-h-full w-auto block rounded-[10px] object-contain max-w-[120px]"
          />
        </div>
        <h3 className="text-xl font-semibold mb-2 line-clamp-2 min-h-[2.5rem]">{name}</h3>
        {added && (
          <div className="text-green-600 font-semibold mb-2">¡Producto agregado!</div>
        )}
      </div>
      <div className="flex flex-col justify-end flex-shrink-0">
        <div className="flex justify-between items-center mb-3">
          <span className="text-2xl font-bold text-blue-600">${price}</span>
          <span className="text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded">
            {category}
          </span>
        </div>
        <button className="promo-button bg-blue-600 text-white rounded-full px-5 py-2 font-bold cursor-pointer transition-colors duration-200 hover:bg-blue-700 w-full block" onClick={handleBuy}>
          Comprar ahora
        </button>
      </div>
    </div>
  );
}