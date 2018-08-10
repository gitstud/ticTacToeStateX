var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import * as React from 'react';
import { Square } from './Square';
import { View, StyleSheet } from 'react-native';
import { data, inject } from 'statex/react';
class Props {
}
__decorate([
    data((state) => state.squares)
], Props.prototype, "squares", void 0);
let Board = class Board extends React.Component {
    renderSquare(i) {
        const { squares } = this.props;
        return (React.createElement(Square, { key: i, index: i, value: squares && squares[i] }));
    }
    render() {
        const row = [0, 1, 2];
        return (React.createElement(View, null,
            React.createElement(View, { style: styles.boardRow }, [...row].map(r => this.renderSquare(r))),
            React.createElement(View, { style: styles.boardRow }, [...row].map(r => this.renderSquare(r + 3))),
            React.createElement(View, { style: styles.boardRow }, [...row].map(r => this.renderSquare(r + 6)))));
    }
};
Board = __decorate([
    inject(Props)
], Board);
export { Board };
const styles = StyleSheet.create({
    boardRow: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    }
});
//# sourceMappingURL=Board.js.map