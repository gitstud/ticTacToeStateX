export type Turn = 'X' | 'O';
export type Move = undefined | 'X' | 'O';

export interface AppState {
  squares?: Move[]
  xIsNext?: boolean
  winner?: Move
}
