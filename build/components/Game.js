var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import * as React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Board } from './Board';
import { data, inject } from 'statex/react';
import { ResetState } from '../actions';
class Props {
}
__decorate([
    data((state) => state.winner)
], Props.prototype, "winner", void 0);
__decorate([
    data((state) => state.xIsNext)
], Props.prototype, "xIsNext", void 0);
let Game = class Game extends React.Component {
    componentDidMount() {
        new ResetState().dispatch();
    }
    render() {
        const { winner, xIsNext } = this.props;
        return (React.createElement(View, { style: styles.game },
            React.createElement(Text, { style: styles.title }, "Tic-Tac-Toe with StateX"),
            !winner && (React.createElement(Text, { style: styles.turn }, xIsNext ? 'X\'s Turn' : 'O\'s Turn')),
            React.createElement(View, { style: styles.gameBoard }, winner && (React.createElement(Text, { style: styles.turn }, `${0} is the Winner!!!`))),
            React.createElement(Board, null),
            winner && (React.createElement(TouchableOpacity, { onPress: () => new ResetState().dispatch(), style: styles.play },
                React.createElement(Text, null, "Play Again!")))));
    }
};
Game = __decorate([
    inject(Props)
], Game);
export { Game };
const styles = StyleSheet.create({
    title: {
        color: '#e58cdb',
        fontSize: 30
    },
    turn: {
        color: '#53c7f0',
        fontSize: 30,
        paddingBottom: 30
    },
    game: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    gameBoard: {
        paddingTop: 10,
        paddingBottom: 10
    },
    play: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#87e5da',
        borderColor: '#87e5da',
        borderWidth: 1,
        borderRadius: 10,
        paddingTop: 15,
        paddingBottom: 15,
        paddingRight: 20,
        paddingLeft: 20,
        marginTop: 30
    }
});
//# sourceMappingURL=Game.js.map