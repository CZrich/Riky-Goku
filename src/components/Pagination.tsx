interface PaginationProps {
  page: number;
  isPlaceData: boolean;
  nextPage: () => void;
  prevPage: () => void;
  isNextDisabled: boolean;
}

export function Pagination({ page, prevPage, nextPage, isPlaceData, isNextDisabled }: PaginationProps) {
  return (
    <div className="flex items-center justify-center gap-3 sm:gap-6 my-6 md:my-10 p-2 md:p-4">
      
      {/* Botón Anterior */}
      <button 
        onClick={prevPage} 
        disabled={page === 0}
        className={`
          flex items-center justify-center gap-2 px-4 md:px-6 py-3 rounded-2xl font-black uppercase italic tracking-tighter transition-all duration-300
          ${page === 0 
            ? 'bg-[#8A9294]/20 text-[#8A9294] cursor-not-allowed opacity-50' 
            : 'bg-[#072083] text-[#FFD7C1] hover:bg-[#02afc5] active:scale-95'
          }
        `}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" />
        </svg>
        {/* Ocultamos texto en móvil para que no aplaste el círculo */}
        <span className="hidden sm:inline">Anterior</span>
      </button>

      {/* Indicador de Página Central - EL CÍRCULO INDESTRUCTIBLE */}
      <div className="
        flex-shrink-0 
        w-12 h-12 md:w-14 md:h-14 
        bg-white border-4 border-[#97ce4c] 
        rounded-full shadow-inner 
        flex items-center justify-center
        z-10
      ">
        <span className="text-[#44281d] font-black text-lg md:text-xl">{page + 1}</span>
      </div>

      {/* Botón Siguiente */}
      <button 
        onClick={nextPage} 
        disabled={isNextDisabled}
        className={`
          flex items-center justify-center gap-2 px-4 md:px-6 py-3 rounded-2xl font-black uppercase italic tracking-tighter transition-all duration-300
          ${isNextDisabled || isPlaceData
            ? 'bg-[#8A9294]/20 text-[#8A9294] cursor-not-allowed opacity-50' 
            : 'bg-[#F85B1A] text-white hover:bg-[#ff7e45] active:scale-95'
          }
        `}
      >
        <span className="hidden sm:inline">Siguiente</span>
        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
        </svg>
      </button>

    </div>
  );
}