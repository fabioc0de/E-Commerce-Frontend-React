// src/components/ui/NavBar.jsx
import { useState } from 'react';
import { Link } from 'react-router-dom';  // Nuevo import
import { ShoppingCart, Menu, X, User, Tag, Grid } from 'lucide-react';  // Íconos de lucide-react

export default function NavBar() {
  const [open, setOpen] = useState(false);
  
  // Estado temporal del carrito (luego vendrá del Context)
  const [cartCount] = useState(3);
  
  const navigationItems = [
    { name: 'Inicio', path: '/', icon: <Grid size={18} /> },
    { name: 'Productos', path: '/productos', icon: <Grid size={18} /> },
    { name: 'Categorías', path: '/categorias', icon: <Grid size={18} /> },
    { name: 'Ofertas', path: '/ofertas', icon: <Tag size={18} /> },
  ];

  return (
    <nav className="flex items-center">
      {/* Botón hamburguesa para móvil */}
      <button
        className="md:hidden text-white p-2 focus:outline-none ml-2"
        onClick={() => setOpen(!open)}
        aria-label="Toggle navigation"
      >
        {open ? <X size={24} /> : <Menu size={24} />}
      </button>
      
      {/* Lista de navegación - Desktop */}
      <ul className="hidden md:flex items-center pl-0 pr-0 m-0">
        {navigationItems.map((item) => (
          <li 
            key={item.name} 
            className="list-none mx-[2px] py-[6px] px-[15px] nav-item hover:bg-[#2563eb] hover:rounded-[16px] transition-colors duration-300"
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
        <li className="list-none mx-[2px] py-[6px] px-[15px] nav-item hover:bg-[#2563eb] hover:rounded-[16px] transition-colors duration-300">
          <Link 
            to="/login" 
            className="no-underline text-white flex items-center gap-2"
          >
            <User size={18} />
            <span className="hidden lg:inline">Log In</span>
          </Link>
        </li>
        
        {/* Carrito con contador */}
        <li className="list-none mx-[2px] py-[6px] px-[15px] nav-item hover:bg-[#2563eb] hover:rounded-[16px] transition-colors duration-300 relative">
          <Link 
            to="/carrito" 
            className="no-underline text-white flex items-center gap-2 relative"
          >
            <ShoppingCart size={20} />
            <span className="hidden lg:inline">Carrito</span>
            
            {/* Contador del carrito */}
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </Link>
        </li>
      </ul>
      
      {/* Menú móvil desplegable */}
      {open && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-[#2e6ae2] shadow-lg rounded-b-xl z-50 p-4">
          <ul className="flex flex-col space-y-2 pl-0 m-0">
            {navigationItems.map((item) => (
              <li 
                key={item.name}
                className="list-none py-3 px-4 hover:bg-[#2563eb] rounded-lg transition-colors"
              >
                <Link 
                  to={item.path} 
                  className="no-underline text-white flex items-center gap-3"
                  onClick={() => setOpen(false)}
                >
                  {item.icon}
                  {item.name}
                </Link>
              </li>
            ))}
            
            <li className="list-none py-3 px-4 hover:bg-[#2563eb] rounded-lg transition-colors">
              <Link 
                to="/login" 
                className="no-underline text-white flex items-center gap-3"
                onClick={() => setOpen(false)}
              >
                <User size={18} />
                Log In
              </Link>
            </li>
            
            <li className="list-none py-3 px-4 hover:bg-[#2563eb] rounded-lg transition-colors relative">
              <Link 
                to="/carrito" 
                className="no-underline text-white flex items-center gap-3"
                onClick={() => setOpen(false)}
              >
                <ShoppingCart size={18} />
                Carrito
                {cartCount > 0 && (
                  <span className="ml-auto bg-red-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
