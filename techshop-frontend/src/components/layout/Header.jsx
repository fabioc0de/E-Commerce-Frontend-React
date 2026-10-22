import Brand from '../ui/Brand';
import NavBar from './NavBar';
import CartButton from '../../features/cart/CartButton';
import SearchBar from '../ui/SearchBar';
import { useCart } from '../../features/cart/CartContext';

export default function Header() {
  const { cart } = useCart();
  const cartCount = cart.items.reduce((total, item) => total + item.quantity, 0);

  return (
    <header className="bg-[#2e6ae2] text-white py-1.5 shadow-[0_4px_24px_0_rgba(36,70,169,0.18),0_2px_12px_0_rgba(0,0,0,0.12)] sticky top-0 z-10">
      <div className="px-4 py-2 lg:px-5">
        <div className="flex flex-col gap-3 lg:hidden">
          <div className="flex w-full items-center justify-between gap-3">
            <Brand />
            <CartButton count={cartCount} />
          </div>

          <div className="flex w-full items-center gap-3">
            <div className="flex-1 min-w-0">
              <SearchBar />
            </div>
            <NavBar />
          </div>
        </div>

        <div className="hidden lg:flex lg:items-center lg:justify-between lg:gap-2">
          <Brand />
          <div className="flex-1 min-w-0 max-w-155">
            <SearchBar />
          </div>
          <div className="flex items-center gap-2">
            <NavBar />
            <CartButton count={cartCount} />
          </div>
        </div>
      </div>
    </header>
  );
}
