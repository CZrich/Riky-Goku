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
    <div className="min-h-screen bg-[#8A9294]/10 p-4 flex flex-col items-center select-none">
      
      <header className="text-center mb-8">
        <h1 className="text-5xl font-black uppercase italic text-[#072083]">
          Multiverse <span className="text-[#97ce4c]">Match</span> <span className="text-[#F85B1A]">Z</span>
        </h1>
        
        <div className="flex gap-4 mt-4 justify-center items-center">
          <div className="bg-white px-5 py-1 rounded-full border-2 border-[#bae6fd] font-black text-[#072083] shadow-sm">
            {turns} <span className="text-xs text-[#8A9294]">TURNOS</span>
          </div>
          
          <button 
            onClick={loadNewGame} 
            disabled={isLoading}
            className={`px-6 py-2 rounded-full font-black uppercase text-xs text-white transition-colors shadow-md hover:shadow-lg ${isLoading ? 'bg-gray-400 cursor-not-allowed' : 'bg-[#F85B1A] hover:bg-[#072083]'}`}
          >
            {isLoading ? "Viajando..." : "Reiniciar"}
          </button>
        </div>
      </header>

      {/* Validamos visualmente Si ocurre error que le avise en vez de quedarse callado */}
      {!isLoading && gameImages.length === 0 ? (
        <div className="text-2xl font-black text-red-500 animate-pulse mt-10">
          Ocurrrio un error
        </div>
      ) : 
      isLoading && cards.length === 0 ? (
        <div className="text-2xl font-black text-[#072083] animate-pulse mt-10">
          Abriendo portales interdimensionales...
        </div>
      ) : (
        <div className="relative grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3 max-w-4xl w-full">
          
          {cards.map((card) => (
            <MemoryCard 
              key={card.uniqueId} 
              card={card} 
              onClick={() => handleChoice(card)} 
            />
          ))}

          {/* DIV ESENCIAL DE VICTORIA (Sin Modal Externo) */}
          {isGameOver && (
             <div className="absolute inset-0 bg-[#072083]/95 backdrop-blur-sm z-10 flex flex-col items-center justify-center rounded-[1.5rem] border-4 border-[#bae6fd] animate-fade-in">
               <h2 className="text-4xl md:text-6xl font-black text-[#F85B1A] italic mb-3 animate-bounce">
                 ¡SÚPER VICTORIA!
               </h2>
               <button 
                 onClick={loadNewGame} 
                 className="mt-4 bg-[#97ce4c] text-[#44281d] px-8 py-3 rounded-full font-black text-xl md:text-2xl hover:scale-110 transition-transform shadow-green-500/50 shadow-lg"
               >
                 NUEVO TABLERO
               </button>
             </div>
          )}
        </div>
      )}
    </div>
  );
}

// (Y tu function MemoryCard la pones aquí debajo sin ningún cambio)
