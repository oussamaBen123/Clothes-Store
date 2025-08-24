import { NavLink } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800">
      <h1 className="text-9xl font-bold mb-4">404</h1>
      <p className="text-2xl mb-6">Oops! Page Not Found</p>
      <p className="mb-6">La page que vous recherchez n'existe pas ou a été déplacée.</p>
      <NavLink 
        to="/" 
        className="!px-6 !py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
      >
        Retour à l'accueil
      </NavLink>
    </div>
  );
}
