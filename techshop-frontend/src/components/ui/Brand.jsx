// src/components/ui/Brand.jsx
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';

export default function Brand() {
  return (
    <div className="flex items-center">
      <Link 
        to="/" 
        className="flex items-center no-underline text-white text-[1.1rem] hover:opacity-90 transition-opacity"
      >
        <img src={logo} alt="Logo" className="max-w-[32px] rounded-[10px]" />
        <span className="ml-[10px] pb-0 font-bold text-lg">TechShop</span>
      </Link>
    </div>
  );
}
