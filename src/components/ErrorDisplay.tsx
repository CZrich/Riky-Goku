interface ErrorDisplayProps {
  message?: string;
  reset?: () => void; // Función para volver a intentar la carga
}

export   default function ErrorDisplay({ message, reset }: ErrorDisplayProps) {
  return (
    <div className="min-h-[400px] flex flex-col items-center justify-center p-8 bg-white rounded-[3rem] border-4 border-dashed border-[#F85B1A]/30 shadow-2xl max-w-2xl mx-auto my-10 animate-fade-in">
      
      {/* Icono de Alerta Estilo Cápsula */}
      <div className="relative mb-6">
        <div className="absolute inset-0 bg-[#F85B1A] blur-2xl opacity-20 animate-pulse"></div>
        <div className="relative w-20 h-20 bg-[#072083] rounded-full flex items-center justify-center border-4 border-[#F85B1A] shadow-lg">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-[#FFD7C1]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
        </div>
      </div>

      {/* Mensajes */}
      <h2 className="text-[#072083] text-3xl font-black uppercase italic tracking-tighter mb-2 text-center">
        ¡Interferencia en el <span className="text-[#F85B1A]">Radar</span>!
      </h2>
      
      <p className="text-[#8A9294] font-bold text-sm uppercase tracking-widest mb-6 text-center max-w-xs leading-relaxed">
        {message || "No pudimos sintonizar la señal del multiverso en este sector."}
      </p>

      {/* Botón de Reintento */}
      {reset && (
        <button 
          onClick={reset}
          className="flex items-center gap-3 px-8 py-3 bg-[#072083] text-[#FFD7C1] font-black uppercase italic rounded-2xl border-b-4 border-[#1e2d5f] hover:bg-[#F85B1A] hover:text-white transition-all active:scale-95 active:border-b-0"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
          Reestablecer Conexión
        </button>
      )}

      {/* Detalle Técnico Ocultable */}
      <div className="mt-8 pt-6 border-t border-[#8A9294]/10 w-full flex justify-center">
        <span className="text-[10px] font-black text-[#8A9294]/40 uppercase tracking-[0.4em]">
          Error Code: 404_SC_FAILED
        </span>
      </div>
    </div>
  );
}