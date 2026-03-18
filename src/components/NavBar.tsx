import { NavLink } from "react-router-dom";


export function NavBar() {
  // Clase reutilizable para los links
  const linkStyles = ({ isActive }: { isActive: boolean }) => 
    `px-4 py-2 rounded-lg text-sm font-bold transition-all duration-300 ${
      isActive 
        ? "bg-blue-600 text-white shadow-lg shadow-blue-200" 
        : "text-gray-600 hover:bg-gray-100 hover:text-blue-600"
    }`;

  return (
    <nav className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-black">
                G
            </div>
            
             <span className="font-black text-xl tracking-tighter uppercase">uky</span>
        </div>

        {/* Links */}
        <div className="flex items-center gap-2">
             <NavLink to="/" className={linkStyles}>Home</NavLink>
             <NavLink to="/riky" className={linkStyles}>Rick & Morty</NavLink>
             <NavLink to="/goku" className={linkStyles}>Dragon Ball</NavLink>
        </div>
    </nav>
  );
}