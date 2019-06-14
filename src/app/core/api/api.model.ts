export type GameLevels = 'easy' | 'medium' | 'hard';

export interface Card {
  id: number;
  icon: string;
  text: string;
  visible?: boolean;
  checked?: boolean;
  position?: number;
}
