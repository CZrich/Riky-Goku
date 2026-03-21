export interface ICardQuiz {
  id: number | string;
  uniqueId?: string;
  src: string;
  name: string;
  isFlipped: boolean;
  isMatched: boolean;
}