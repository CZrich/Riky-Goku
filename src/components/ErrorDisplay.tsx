import { Link } from "react-router-dom";

interface ErrorDisplayProps {
  message?: string;
  path?: string;
  reset?: () => void;
}

export default function ErrorDisplay({ message, path, reset }: ErrorDisplayProps) {
  return (
    <div className="min-h-[400px] flex flex-col items-center justify-center p-8 bg-white rounded-[3rem] border-4 border-dashed border-[#F85B1A]/30 shadow-2xl max-w-2xl mx-auto my-10 animate-fade-in relative overflow-hidden">

      {/* --- DECORACIÓN DE FONDO --- */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-[#F85B1A]/5 rounded-full -mr-16 -mt-16 blur-3xl"></div>

      {/* Icono de Alerta Estilo Cápsula */}
      <div className="relative mb-6">
        <div className="absolute inset-0 bg-[#F85B1A] blur-2xl opacity-20 animate-pulse"></div>
        <div className="relative w-24 h-24 bg-[#072083] rounded-full flex items-center justify-center border-4 border-[#F85B1A] shadow-xl transform hover:scale-110 transition-transform">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-[#FFD7C1]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
        </div>
      </div>

      {/* Mensajes */}
      <h2 className="text-[#072083] text-3xl md:text-4xl font-black uppercase italic tracking-tighter mb-4 text-center">
        ¡Interferencia en el <span className="text-[#F85B1A]">Radar</span>!
      </h2>

      <p className="text-[#8A9294] font-bold text-sm uppercase tracking-widest mb-8 text-center max-w-xs leading-relaxed">
        {message || "No pudimos sintonizar la señal del multiverso en este sector."}
      </p>

      {/* Acciones */}
      <div className="flex flex-col gap-4 items-center">
        {/* Botón de Reintentar (si existe la función reset) */}
        {reset && (
          <button
            onClick={reset}
            className="bg-[#F85B1A] text-white px-8 py-3 rounded-full font-black uppercase italic tracking-widest text-xs shadow-lg hover:bg-[#072083] transition-colors active:scale-95"
          >
            Sincronizar de nuevo
          </button>
        )}


        <div className="mt-8 pt-6 border-t border-[#8A9294]/10 w-full flex justify-center">
          <Link
            to={path || "/"}
            className="
      inline-flex items-center justify-center
      px-6 py-2 
      border-2 border-[#F85B1A]
      rounded-full 
      text-[11px] font-black 
      uppercase tracking-[0.3em] 
      transition-all duration-300
      hover:border-[#F85B1A] text-[#F85B1A] hover:bg-[#F85B1A]/5
      active:scale-95
    "
          >
            <span className="mr-2 text-sm">←</span> Regresar al Inicio
          </Link>
        </div>
      </div>

      {/* Decoración inferior (Estilo UI de Radar) */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 opacity-20">
        <div className="w-2 h-2 rounded-full bg-[#072083]"></div>
        <div className="w-8 h-2 rounded-full bg-[#F85B1A]"></div>
        <div className="w-2 h-2 rounded-full bg-[#072083]"></div>
      </div>
    </div>
  );
}