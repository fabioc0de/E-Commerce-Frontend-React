export default function NotFound() {
  return (
    <div className="min-h-screen pt-16 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">404 - Página no encontrada</h1>
        <p className="text-gray-600 mb-6">La página que buscas no existe.</p>
        <a href="/" className="text-blue-600 hover:underline">
          Volver al inicio
        </a>
      </div>
    </div>
  );
}