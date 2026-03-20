import { useMemoryGame} from "../hooks/useMemoryGame";
import  type {ICardQuiz} from '../types/ICardQuiz'
// 1. MEJORA PROFESIONAL: Declaramos el tipo de origen de las imagenes
// Pick<> elige propiedades específicas de la interfaz Card original sin requerir que 
// le pasemos a mano cosas dinámicas como isFlipped o isMatched.
type BaseCard = Pick<ICardQuiz, 'id' | 'src' | 'name'>;

const CARD_IMAGES: BaseCard[] = [
  { id: 1, src: "https://dragonball-api.com/characters/goku_normal.webp", name: "Goku" },
  { id: 2, src: "https://rickandmortyapi.com/api/character/avatar/1.jpeg", name: "Rick" },
  { id: 3, src: "https://dragonball-api.com/characters/vegeta_normal.webp", name: "Vegeta" },
  { id: 4, src: "https://rickandmortyapi.com/api/character/avatar/2.jpeg", name: "Morty" },
  { id: 5, src: "https://dragonball-api.com/characters/TrunksNormal.webp", name: "Trunks" },
  { id: 6, src: "https://rickandmortyapi.com/api/character/avatar/3.jpeg", name: "Summer" },
];

export default function QuizzPage() {
  const { cards, turns, handleChoice, initGame, isGameOver } = useMemoryGame(CARD_IMAGES);

  return (
    <div className="min-h-screen bg-[#8A9294]/10 p-4 flex flex-col items-center select-none">
      
      <header className="text-center mb-8">
        <h1 className="text-5xl font-black uppercase italic text-[#072083]">
          Memory <span className="text-[#97ce4c]">Match</span> <span className="text-[#F85B1A]">Z</span>
        </h1>
        
        <div className="flex gap-4 mt-4 justify-center items-center">
          <div className="bg-white px-5 py-1 rounded-full border-2 border-[#bae6fd] font-black text-[#072083] shadow-sm">
            {turns} <span className="text-xs text-[#8A9294]">TURNOS</span>
          </div>
          <button 
            onClick={initGame} 
            className="bg-[#F85B1A] text-white px-6 py-2 rounded-full font-black uppercase text-xs hover:bg-[#072083] transition-colors shadow-md hover:shadow-lg"
          >
            Reiniciar
          </button>
        </div>
      </header>

      {/* Grid responsivo */}
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3 max-w-4xl w-full">
        {cards.map((card) => (
          <MemoryCard 
            key={card.uniqueId} 
            card={card} 
            onClick={() => handleChoice(card)} 
          />
        ))}
      </div>

      {isGameOver && <VictoryModal turns={turns} onRestart={initGame} />}
    </div>
  );
}

// --- SUB-COMPONENTES ACTUALIZADOS ---

function MemoryCard({ card, onClick }: { card: ICardQuiz; onClick: () => void }) {
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

function VictoryModal({ turns, onRestart }: { turns: number; onRestart: () => void }) {
  return (
    // Agregué backdrop-blur-sm para que se vea ligeramente borroso el fondo del juego. Da un look muy profesional.
    <div className="fixed inset-0 bg-[#072083]/90 backdrop-blur-sm z-50 flex flex-col items-center justify-center animate-fade-in">
      <h2 className="text-6xl font-black text-[#F85B1A] italic mb-4 animate-bounce drop-shadow-xl">
        ¡SÚPER VICTORIA!
      </h2>
      <p className="text-white font-bold mb-8 uppercase tracking-widest text-xl">
        Completado en <span className="text-[#97ce4c]">{turns}</span> turnos
      </p>
      <button 
        onClick={onRestart} 
        className="bg-[#97ce4c] text-[#44281d] px-10 py-4 rounded-full font-black text-2xl hover:scale-110 transition-transform shadow-green-500/50 shadow-2xl"
      >
        JUGAR OTRA VEZ
      </button>
    </div>
  );
}
