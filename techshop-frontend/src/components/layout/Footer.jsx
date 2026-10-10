export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-16">
      <div className="max-w-[1200px] mx-auto px-5">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">TechShop</h3>
            <p className="text-gray-400">
              Tu tienda de confianza. Calidad garantizada.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Categorías</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Computadoras</li>
              <li>Smartphones</li>
              <li>Tablets</li>
              <li>Audio</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Contacto</h4>
            <p className="text-gray-400">contacto@techshop.com</p>
            <p className="text-gray-400">+1 (555) 123-4567</p>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>© 2024 TechShop. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}