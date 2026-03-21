import { Link } from 'react-router-dom';

export default function NoFoundPage() {
  return (
    <div className="min-h-screen bg-[#8A9294]/10 flex items-center justify-center p-6 text-center">
      <div className="max-w-md w-full bg-white p-10 rounded-[2.5rem] shadow-xl border-b-8 border-[#072083]">
        
        {/* Código de Error */}
        <h1 className="text-8xl font-black text-[#072083] italic tracking-tighter mb-2">
          404
        </h1>
        
        {/* Línea decorativa tipo Goku */}
        <div className="flex justify-center gap-1 mb-6">
          <div className="h-1.5 w-12 bg-[#F85B1A] rounded-full" />
          <div className="h-1.5 w-3 bg-[#072083] rounded-full" />
        </div>

        {/* Mensaje */}
        <div className="space-y-2 mb-10">
          <h2 className="text-xl font-bold uppercase text-[#44281d]">
            Página no encontrada
          </h2>
          <p className="text-[#8A9294] font-medium italic">
            Parece que te has desviado del camino, Guerrero.
          </p>
        </div>

        {/* Botón Simple */}
        <Link 
          to="/" 
          className="inline-block bg-[#072083] text-[#FFD7C1] px-8 py-3 rounded-xl font-black uppercase italic tracking-widest transition-transform hover:scale-105 active:scale-95 shadow-md"
        >
          Regresar al inicio
        </Link>
        
      </div>
    </div>
  );
}