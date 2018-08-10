import { Action } from 'statex';
import { Move } from './state';

export class SelectSquareAction extends Action {
  constructor(public turn: Move) { super(); }
}

export class ResetState extends Action {
  constructor() { super(); }
}
