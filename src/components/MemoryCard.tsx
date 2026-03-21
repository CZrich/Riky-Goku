import type { ICardQuiz } from "../types/ICardQuiz";

 export  default function MemoryCard({ card, onClick }: { card: ICardQuiz; onClick: () => void }) {
  const flipped = card.isFlipped || card.isMatched;
  
  return (
    // Reemplacé "perspective" por "[perspective:1000px]" que funcionará en el 100% de proyectos Tailwind
    <div className="relative aspect-[3/4] cursor-pointer [perspective:1000px]" onClick={onClick}>
      <div className={`w-full h-full transition-all duration-500 [transform-style:preserve-3d] ${flipped ? '[transform:rotateY(180deg)]' : ''}`}>
        
        {/* Trasera */}
        <div className="absolute inset-0 bg-[#072083] rounded-xl border-4 border-[#F85B1A] flex items-center justify-center [backface-visibility:hidden] shadow-lg">
          <span className="text-[#97ce4c] font-black text-3xl">?</span>
        </div>

        {/* Frontal corrigiendo backface-hidden y agregando shadow */}
        <div className="absolute inset-0 bg-white rounded-xl border-4 border-[#bae6fd] [transform:rotateY(180deg)] [backface-visibility:hidden] p-2 flex items-center justify-center shadow-lg">
          <img 
            src={card.src} 
            alt={card.name} 
            // Suavizamos el paso a escala de grises cuando completan un par
            className={`w-full h-full object-contain transition-all duration-300 ${card.isMatched ? 'grayscale opacity-50' : ''}`} 
          />
        </div>
      </div>
    </div>
  );
}
