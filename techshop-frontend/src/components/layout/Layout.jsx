import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

export default function Layout() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Outlet /> {/* Aquí se renderizarán las páginas */}
      </main>
      <Footer />
    </div>
  );
}