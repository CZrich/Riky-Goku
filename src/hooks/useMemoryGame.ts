import { useState, useCallback, useRef, useEffect } from "react";
import type { ICardQuiz } from "../types/ICardQuiz";




export const useMemoryGame = (initialImages: ICardQuiz[]) => {
  
  // Acepta enviar una baraja nueva directamente
  const shuffleCards = useCallback((imagesToShuffle = initialImages) => {
        return [...imagesToShuffle, ...imagesToShuffle]
      .sort(() => Math.random() - 0.5)
      .map((card, index) => ({
        ...card,
        uniqueId: typeof crypto !== 'undefined' && crypto.randomUUID 
          ? crypto.randomUUID() 
          : `card_${index}_${Math.random()}`,
        isFlipped: false,
        isMatched: false,
      })) as ICardQuiz[]; // <-- TypeScript forzado e instruído correctamente
  }, [initialImages]);



  const [cards, setCards] = useState<ICardQuiz[]>([]);
  const [turns, setTurns] = useState(0);

  const choiceOne = useRef<ICardQuiz | null>(null);
  const disabled = useRef<boolean>(false);
  const timeoutId = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Escuchador dinámico
  useEffect(() => {
    if (initialImages && initialImages.length > 0) {
      if (timeoutId.current) clearTimeout(timeoutId.current);
      setCards(shuffleCards());
      choiceOne.current = null;
      disabled.current = false;
      setTurns(0);
    }
  }, [initialImages, shuffleCards]);

 
  const initGame = useCallback((newImages?: ICardQuiz[]) => {
    if (timeoutId.current) clearTimeout(timeoutId.current);
    
    // Si trae imagenes forzosas usa esas, si no usa las del estado viejo.
    const deckToUse = newImages && newImages.length > 0 ? newImages : initialImages;
    setCards(shuffleCards(deckToUse));
    choiceOne.current = null;
    disabled.current = false;
    setTurns(0);
  }, [initialImages, shuffleCards]);

  const resetTurn = () => {
    choiceOne.current = null;
    disabled.current = false;
    setTurns(prev => prev + 1);
  };

  const handleChoice = (card: ICardQuiz) => {
    if (disabled.current || card.isFlipped || card.isMatched) return;

    const firstCard = choiceOne.current;
    if (firstCard && firstCard.uniqueId === card.uniqueId) return;

    setCards(prev => prev.map(c => 
      c.uniqueId === card.uniqueId ? { ...c, isFlipped: true } : c
    ));

    if (!firstCard) {
      choiceOne.current = card;
    } else {
      disabled.current = true;
      if (firstCard.id === card.id) {
         setCards(prev => prev.map(c => 
          (c.id === firstCard.id) ? { ...c, isMatched: true, isFlipped: true } : c
        ));
        resetTurn();
      } else {
        timeoutId.current = setTimeout(() => {
          setCards(prev => prev.map(c => 
            (c.uniqueId === firstCard.uniqueId || c.uniqueId === card.uniqueId) 
            ? { ...c, isFlipped: false } : c
          ));
          resetTurn();
        }, 1000);
      }
    }
  };

  const isGameOver = cards.length > 0 && cards.every(c => c.isMatched);

  return { cards, turns, handleChoice, initGame, isGameOver };
};
