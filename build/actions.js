import { Action } from 'statex';
export class SelectSquareAction extends Action {
    constructor(turn) {
        super();
        this.turn = turn;
    }
}
export class ResetState extends Action {
    constructor() { super(); }
}
//# sourceMappingURL=actions.js.map