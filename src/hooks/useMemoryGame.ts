import { useState, useCallback, useRef } from "react";
import type { ICardQuiz } from "../types/ICardQuiz";


export const useMemoryGame = (initialImages: ICardQuiz[]) => {
  const shuffleCards = useCallback(() => {
    return [...initialImages, ...initialImages]
      .sort(() => Math.random() - 0.5)
      .map((card, index) => ({
        ...card,
        uniqueId: typeof crypto !== 'undefined' && crypto.randomUUID 
          ? crypto.randomUUID() 
          : `card_${index}_${Math.random()}`,
        isFlipped: false,
        isMatched: false,
      }));
  }, [initialImages]);

  const [cards, setCards] = useState<ICardQuiz[]>(shuffleCards);
  const [turns, setTurns] = useState(0);

  
  const choiceOne = useRef<ICardQuiz | null>(null);
  const disabled = useRef<boolean>(false);
  const timeoutId = useRef<ReturnType<typeof setTimeout> | null>(null);

  const initGame = useCallback(() => {
    if (timeoutId.current) clearTimeout(timeoutId.current);
    setCards(shuffleCards());
    choiceOne.current = null;
    disabled.current = false;
    setTurns(0);
  }, [shuffleCards]);

  const resetTurn = () => {
    choiceOne.current = null;
    disabled.current = false;
    setTurns(prev => prev + 1);
  };

  const handleChoice = (card: ICardQuiz) => {
    // Si la referencia está bloqueada mecánicamente, IGNORAR CLIC AL INSTANTE
    if (disabled.current || card.isFlipped || card.isMatched) return;

    const firstCard = choiceOne.current;
    if (firstCard && firstCard.uniqueId === card.uniqueId) return;

    // TODO BIEN: Voltear la carta
    setCards(prev => prev.map(c => 
      c.uniqueId === card.uniqueId ? { ...c, isFlipped: true } : c
    ));

    if (!firstCard) {
      // ESTA ES LA PRIMERA CARTA. Se guarda directo
      choiceOne.current = card;
    } else {
      // se bloque la tabal cuando se da   click en la segunda carta
      disabled.current = true;

      // Evaluar la lógica
      if (firstCard.id === card.id) {
        // HACEN MATCH
        setCards(prev => prev.map(c => 
          (c.id === firstCard.id) ? { ...c, isMatched: true, isFlipped: true } : c
        ));
        resetTurn();
      } else {
        // funcionadidad para ocularse
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
