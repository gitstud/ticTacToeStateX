var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
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
let GameStore = class GameStore {
    selectSquareAction(state, payload) {
        const { squares, xIsNext, winner } = state;
        if (winner) {
            return state;
        }
        const newSquares = Array.isArray(squares) ? [...squares] : Array(9).fill(undefined);
        newSquares[payload.turn] = xIsNext ? 'X' : 'O';
        return {
            squares: newSquares || [],
            xIsNext: !xIsNext,
            winner: calculateWinner(newSquares)
        };
    }
    resetState() {
        return {
            squares: Array(9).fill(undefined),
            xIsNext: true,
            winner: undefined
        };
    }
};
__decorate([
    action(SelectSquareAction)
], GameStore.prototype, "selectSquareAction", null);
__decorate([
    action(ResetState)
], GameStore.prototype, "resetState", null);
GameStore = __decorate([
    store()
], GameStore);
export { GameStore };
//# sourceMappingURL=store.js.map