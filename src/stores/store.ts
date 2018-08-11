import { AppState } from '../state';
import { SelectSquareAction, ResetState } from '../actions';
import { action, store } from 'statex/react';

const calculateWinner = (squares) => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return undefined;
};

@store()
export class GameStore {

  @action(SelectSquareAction)
  selectSquareAction(state: AppState, payload: SelectSquareAction): AppState {
    const { squares, xIsNext, winner } = state;
    if (winner) {
      return state;
    }
    const newSquares = Array.isArray(squares) ? [...squares] : Array(9).fill(undefined);
    newSquares[payload.turn] = xIsNext ? 'X' : 'O';
    console.log(calculateWinner(newSquares));
    return {
      squares: newSquares || [],
      xIsNext: !xIsNext,
      winner: calculateWinner(newSquares)
    };
  }

  @action(ResetState)
  resetState(): AppState {
    return {
      squares: Array(9).fill(undefined),
      xIsNext: true,
      winner: undefined
    };
  }
}
