import { useMemoryGame } from "../hooks/useMemoryGame";
import type { ICardQuiz } from '../types/ICardQuiz';
import { useState, useEffect } from "react";
import MemoryCard from "../components/MemoryCard";



import { getCharcaterMultiverse } from "../services/quizz.service";

export default function QuizzPage() {
  const [gameImages, setGameImages] = useState<ICardQuiz[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  
  const { cards, turns, handleChoice, initGame, isGameOver } = useMemoryGame(gameImages);

  const loadNewGame = async () => {
    setIsLoading(true);
    const newCards = await getCharcaterMultiverse();
    setGameImages(newCards);
    
 
    initGame(newCards); 
    
    setIsLoading(false);
  };

  useEffect(() => {
    (async () => {
      await loadNewGame();
    })();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="min-h-screen bg-[#8A9294]/10 p-2 sm:p-4 md:p-8 flex flex-col items-center select-none overflow-x-hidden">
      
      <header className="text-center mb-6 md:mb-10 w-full max-w-2xl">
        <h1 className="text-3xl sm:text-5xl font-black uppercase italic text-[#072083] leading-tight">
          Multiverse <span className="text-[#97ce4c]">Match</span> <span className="text-[#F85B1A]">Z</span>
        </h1>
        
        <div className="flex gap-3 mt-4 justify-center items-center">
          <div className="bg-white px-4 py-1.5 rounded-full border-2 border-[#bae6fd] font-black text-[#072083] shadow-sm flex items-center gap-2">
            <span className="text-lg md:text-xl">{turns}</span> 
            <span className="text-[10px] md:text-xs text-[#8A9294] tracking-widest">TURNOS</span>
          </div>
          
          <button 
            onClick={loadNewGame} 
            disabled={isLoading}
            className={`px-5 py-2 md:px-8 md:py-3 rounded-full font-black uppercase text-[10px] md:text-xs text-white transition-all shadow-md active:scale-95 ${
              isLoading ? 'bg-gray-400 cursor-not-allowed' : 'bg-[#F85B1A] hover:bg-[#072083]'
            }`}
          >
            {isLoading ? "Viajando..." : "Reiniciar"}
          </button>
        </div>
      </header>

      {/* --- CONTENEDOR PRINCIPAL DEL JUEGO --- */}
      <div className="w-full max-w-4xl flex justify-center items-start px-2">
        
        {!isLoading && gameImages.length === 0 ? (
          <div className="text-xl md:text-2xl font-black text-red-500 animate-pulse mt-10 text-center">
            ¡FALLA EN EL RADAR! <br/> Reintenta la conexión.
          </div>
        ) : 
        isLoading && cards.length === 0 ? (
          <div className="text-xl md:text-2xl font-black text-[#072083] animate-pulse mt-10 text-center uppercase italic">
            Abriendo portales...
          </div>
        ) : (
          <div className="relative w-full">
            {/* GRID RESPONSIVO: 
                - 3 columnas en móvil pequeño (iPhone SE etc)
                - 4 columnas en móvil normal
                - 6 columnas en desktop 
            */}
            <div className="grid grid-cols-3 xs:grid-cols-4 md:grid-cols-6 gap-2 sm:gap-4 w-full h-fit">
              {cards.map((card) => (
                <MemoryCard 
                  key={card.uniqueId} 
                  card={card} 
                  onClick={() => handleChoice(card)} 
                />
              ))}
            </div>

            {/* OVERLAY DE VICTORIA RESPONSIVO */}
            {isGameOver && (
               <div className="absolute inset-0 bg-[#072083]/95 backdrop-blur-md z-20 flex flex-col items-center justify-center rounded-[2rem] border-4 border-[#97ce4c] animate-fade-in p-4 text-center">
                 <h2 className="text-4xl md:text-7xl font-black text-[#F85B1A] italic mb-4 leading-none drop-shadow-lg">
                   ¡SÚPER <br className="md:hidden"/> VICTORIA!
                 </h2>
                 <p className="text-white font-bold uppercase tracking-widest text-xs md:text-lg mb-6 opacity-80">
                   Nivel completado en {turns} movimientos
                 </p>
                 <button 
                   onClick={loadNewGame} 
                   className="bg-[#97ce4c] text-[#44281d] px-10 py-4 rounded-full font-black text-xl md:text-3xl hover:scale-110 transition-transform shadow-[0_0_30px_rgba(151,206,76,0.4)] active:scale-90"
                 >
                   NUEVO TABLERO
                 </button>
               </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

// (Y tu function MemoryCard la pones aquí debajo sin ningún cambio)
