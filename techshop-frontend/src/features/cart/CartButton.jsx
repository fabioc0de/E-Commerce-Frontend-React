import { ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";

export default function CartButton({ count }) {

    return(
        <Link to="/carrito" className="relative flex items-center gap-2 text-white">
            <span className = "flex h-9 w-9 items-center justify-center rounded-full bg-[#4488ee] lg:h-auto lg:w-auto lg:bg-transparent lg:rounded-none transition-transform duration-200 ease-out hover:-translate-y-0.5 hover:scale-[1.04]">
                <ShoppingBag size={20} />
            </span>
            
            {count > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {count}
                </span>
            )}
        </Link>
    );
}
