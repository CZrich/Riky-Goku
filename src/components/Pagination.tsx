interface PaginationProps{
    page:number;
    isPlaceData:boolean;
    nextPage:()=>void;
    prevPage:()=>void;
    isNextDisabled:boolean;



}


export function Pagination({  page,prevPage,nextPage, isPlaceData,isNextDisabled }:PaginationProps ){

    console.log("el calor de si tiene siguente pagina ",isNextDisabled)
  return (
    <div className="flex items-center justify-center gap-6 my-10 p-4">
      
      {/* Botón Anterior - Estilo Resolution Blue */}
      <button 
        onClick={prevPage} 
        disabled={page === 0}
        className={`
          flex items-center gap-2 px-6 py-3 rounded-2xl font-black uppercase italic tracking-tighter transition-all duration-300
          ${page === 0 
            ? 'bg-[#8A9294]/20 text-[#8A9294] cursor-not-allowed opacity-50' 
            : 'bg-[#072083] text-[#FFD7C1] hover:bg-[#02afc5] hover:shadow-[0_0_15px_rgba(7,32,131,0.4)] active:scale-95'
          }
        `}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" />
        </svg>
        Página Anterior
      </button>

      {/* Indicador de Página Central */}
      <div className="flex items-center justify-center w-14 h-14 bg-white border-4 border-[#97ce4c] rounded-full shadow-inner">
        <span className="text-[#44281d] font-black text-xl">{page+1}</span>
      </div>

      {/* Botón Siguiente - Estilo Heliconia (Goku) */}
      <button 
        onClick={nextPage} 
        disabled={isNextDisabled }
        className={`
          flex items-center gap-2 px-6 py-3 rounded-2xl font-black uppercase italic tracking-tighter transition-all duration-300
          ${isNextDisabled || isPlaceData
            ? 'bg-[#8A9294]/20 text-[#8A9294] cursor-not-allowed opacity-50' 
            : 'bg-[#F85B1A] text-white hover:bg-[#ff7e45] hover:shadow-[0_0_20px_rgba(248,91,26,0.5)] active:scale-95'
          }
        `}
      >
        Siguiente Página
        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
        </svg>
      </button>

    </div>
  );
}