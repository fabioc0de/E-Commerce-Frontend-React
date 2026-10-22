// src/components/ui/NavBar.jsx
import { useEffect, useRef, useState } from 'react';
import { useCart } from '../../features/cart/CartContext';
import { Link } from 'react-router-dom';
import {Menu, X, User, Tag, Home, Package, Layers3 } from 'lucide-react';  

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const modalRef = useRef(null);
  const { cart } = useCart();
  const count = cart.items.reduce((total, item) => total + item.quantity, 0);

  useEffect(() => {
    if (!open) return;

    const handlePointerDown = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener('pointerdown', handlePointerDown);

    return () => {
      document.removeEventListener('pointerdown', handlePointerDown);
    };
  }, [open]);
  
  const navigationItems = [
    { name: 'Inicio', path: '/', icon: <Home size={18}/>},
    { name: 'Productos', path: '/productos', icon: <Package size={18}/>},
    { name: 'Categorías', path: '/categorias', icon: <Layers3 size={18}/>},
    { name: 'Ofertas', path: '/ofertas', icon: <Tag size={18}/>}
  ];

  return (
    <nav className="relative flex items-center justify-center">
      {/* Botón hamburguesa para móvil */}
      <button
        className="flex h-9 w-9 justify-center items-center
                  rounded-full bg-[#4488ee] 
                  cursor-pointer text-white 
                  transition-transform duration-200 ease-out
                  hover:-translate-y-0.5
                  lg:h-auto lg:w-auto lg:bg-transparent lg:rounded-none 
                  lg:hidden focus:outline-none"
        onClick={() => setOpen(!open)}
        aria-label="Toggle navigation"
      >
        {open ? <X size={22} /> : <Menu size={22} />}
      </button>
      
      {/* Lista de navegación - Desktop */}
      <ul className="hidden lg:flex items-center pl-0 pr-0 m-0">
        {navigationItems.map((item) => (
          <li 
            key={item.name} 
            className="list-none mx-0.5 py-1.5 px-3.75 nav-item hover:bg-[#2563eb] rounded-2xl transition-colors duration-300"
          >
            <Link 
              to={item.path} 
              className="no-underline text-white flex items-center gap-2"
            >
              {item.icon}
              {item.name}
            </Link>
          </li>
        ))}
        
        {/* Login/Usuario */}
        <li className="list-none mx-0.5 py-1.5 px-3.75 nav-item hover:bg-[#2563eb] rounded-2xl transition-colors duration-300">
          <Link 
            to="/login" 
            className="no-underline text-white flex items-center gap-2"
          >
            <User size={18} />
            <span className="hidden lg:inline">Log In</span>
          </Link>
        </li>
      </ul>
      
      {/* Menú móvil desplegable */}
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/45 backdrop-blur-sm lg:hidden" aria-modal="true" role="dialog">
          <div ref={modalRef} className="w-[60%] max-w-sm rounded-2xl border border-white/10 bg-[#2e6ae2]/95 p-5 shadow-[0_20px_60px_rgba(0,0,0,0.35)]">
            <div className="mb-4 flex items-center justify-between">
              <span className="p-4 text-base font-semibold text-white">Menú</span>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-white/10 text-white"
                aria-label="Cerrar menú"
              >
                <X size={18} />
              </button>
            </div>

            <ul className="m-0 flex flex-col gap-2 pl-0">
              {navigationItems.map((item) => (
                <li 
                  key={item.name}
                  className="list-none rounded-xl px-4 py-3 transition-colors hover:bg-[#2563eb]"
                >
                  <Link 
                    to={item.path} 
                    className="flex items-center gap-3 text-base text-white no-underline"
                    onClick={() => setOpen(false)}
                  >
                    {item.icon}
                    {item.name}
                  </Link>
                </li>
              ))}

              <li className="list-none rounded-xl px-4 py-3 transition-colors hover:bg-[#2563eb]">
                <Link 
                  to="/login" 
                  className="flex items-center gap-3 text-base text-white no-underline"
                  onClick={() => setOpen(false)}
                >
                  <User size={18} />
                  Log In
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
}
