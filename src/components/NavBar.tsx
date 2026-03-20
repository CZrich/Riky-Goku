import { useState } from "react";
import { NavLink } from "react-router-dom";
//import iconG from "../assets/iconG.svg"
export function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const linkStyles = ({ isActive }: { isActive: boolean }) =>
    `px-4 py-2 rounded-lg text-sm font-bold transition-all duration-300 block md:inline-block ${isActive
      ? "bg-blue-600 text-white shadow-lg shadow-blue-200"
      : "text-gray-600 hover:bg-gray-100 hover:text-blue-600"
    }`;

  return (
    <nav className="bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">

          {/* LOGO */}

          <div className="flex items-center gap-2 group cursor-pointer">
            <div className="w-10 h-10 bg-slate-900 rounded-xl flex items-center justify-center relative overflow-hidden shadow-lg shadow-blue-500/20 group-hover:shadow-green-500/40 transition-all duration-300">

              {/* El SVG de Fusión Rick/Goku */}
              <svg
                viewBox="0 0 100 100"
                className="w-full h-full p-1 transition-transform duration-500 group-hover:scale-110"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Círculo de Portal Animado (Borde Verde) */}
                <circle
                  cx="50" cy="50" r="46"
                  fill="none"
                  stroke="#4ade80"
                  strokeWidth="4"
                  strokeDasharray="15 8"
                  className="animate-[spin_10s_linear_infinite]"
                />

                {/* Silueta Rick (Celeste - Lado Izquierdo) */}
                <path
                  fill="#bae6fd"
                  d="M48,25 C35,20 22,25 15,35 L5,30 L10,45 C4,50 4,60 10,70 L48,70 Z"
                />

                {/* Silueta Goku (Naranja - Lado Derecho) */}
                <path
                  fill="#fb923c"
                  d="M52,22 L72,5 L78,25 L98,32 L82,52 L88,78 L52,68 Z"
                />

                {/* Núcleo de Energía Central */}
                <circle cx="50" cy="50" r="4" fill="white" className="animate-pulse" />
              </svg>
            </div>

            {/* Texto del Logo con Estilo Tailwind */}
            <span className="font-black text-2xl tracking-tighter uppercase italic text-gray-800">
              Uky<span className="text-blue-600 group-hover:text-green-500 transition-colors duration-300">Wiki</span>
            </span>
          </div>

          {/* BOTÓN HAMBURGUESA (Solo se ve en Móvil: md:hidden) */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-blue-600 focus:outline-none p-2"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                )}
              </svg>
            </button>
          </div>

          {/* LINKS DE ESCRITORIO (Se oculta en móvil: hidden md:flex) */}
          <div className="hidden md:flex items-center gap-2">
            <NavLink to="/" className={linkStyles}>Home</NavLink>
            <NavLink to="/rickandmorty" className={linkStyles}>Rick & Morty</NavLink>
            <NavLink to="/dragonball" className={linkStyles}>Dragon Ball</NavLink>
            <NavLink to="/comments" className={linkStyles}>Comentar</NavLink>
            <NavLink to ="/quizz" className={linkStyles}> Quizz</NavLink>
          </div>
        </div>

        {/* MENÚ DESPLEGABLE MÓVIL (Solo se ve cuando isOpen es true) */}
        <div className={`${isOpen ? "block" : "hidden"} md:hidden pb-4 animate-fadeIn`}>
          <div className="flex flex-col gap-2">
            <NavLink to="/" onClick={() => setIsOpen(false)} className={linkStyles}>Home</NavLink>
            <NavLink to="/rickandmorty" onClick={() => setIsOpen(false)} className={linkStyles}>Rick & Morty</NavLink>
            <NavLink to="/dragonball" onClick={() => setIsOpen(false)} className={linkStyles}>Dragon Ball</NavLink>
            <NavLink to="/comments" onClick={() => setIsOpen(false)} className={linkStyles}>Comentar</NavLink>
            <NavLink to ="/quizz" onClick={() => setIsOpen(false)} className={linkStyles}> Quizz</NavLink>

          </div>
        </div>
      </div>
    </nav>
  );
}