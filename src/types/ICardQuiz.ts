export interface ICardQuiz {
  id: number;
  uniqueId?: string;
  src: string;
  name: string;
  isFlipped: boolean;
  isMatched: boolean;
}