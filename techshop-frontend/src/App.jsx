
import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import Productos from './pages/Productos';
import Car from './pages/Car';
import NotFound from './pages/NotFound';
import { CartProvider } from './components/products/CartContext';

function App() {
  return (
    <CartProvider>
      <Routes>
      <Route path="/" element={<Layout />}>
        {/* Ruta Home (contenido principal) */}
        <Route index element={<Home />} />
        
        {/* Rutas adicionales */}
        <Route path="productos" element={<Productos />} />
        <Route path="carrito" element={<Car />} />
        
        {/* Ruta de error 404 */}
        <Route path="*" element={<NotFound />} />
      </Route>
      </Routes>
    </CartProvider>
  );
}

export default App;