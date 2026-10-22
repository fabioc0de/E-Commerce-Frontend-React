import { useEffect, useState } from 'react';
import ProductCard from '../features/products/ProductCard';

export default function Productos() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => {
        if (!res.ok) throw new Error('Error al obtener productos');
        return res.json();
      })
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="text-center py-8">Cargando productos...</div>;
  if (error) return <div className="text-center text-red-500 py-8">{error}</div>;

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      <h1 className="text-3xl font-bold text-center py-8">Nuestros Productos</h1>
      <div className="max-w-6xl mx-auto px-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div key={product.id} className="flex justify-center items-stretch">
              <div className="w-full max-w-xs scale-95">
                <ProductCard product={product} api />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}