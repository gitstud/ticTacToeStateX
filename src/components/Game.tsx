import * as React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Board } from './Board';
import { data, inject } from 'statex/react';
import { AppState, Move } from '../state';
import { ResetState } from '../actions';

class Props {
  @data((state: AppState) => state.winner)
  winner?: Move;

  @data((state: AppState) => state.xIsNext)
  xIsNext?: boolean;
}

interface State { }

@inject(Props)
export class Game extends React.Component<Props, State> {
  componentDidMount() {
    new ResetState().dispatch();
  }
  render() {
    const { winner, xIsNext } = this.props;
    return (
      <View style={styles.game}>
        <Text style={styles.title}>
          Tic-Tac-Toe with StateX
        </Text>
        {!winner && (
          <Text style={styles.turn}>
            {xIsNext ? 'X\'s Turn' : 'O\'s Turn'}
          </Text>
        )}
        <View style={styles.gameBoard}>
          {winner && (
            <Text style={styles.turn}>
              {`${0} is the Winner!!!`}
            </Text>
          )}
        </View>
        <Board />
        {winner && (
          <TouchableOpacity
            onPress={() => new ResetState().dispatch()}
            style={styles.play}
          >
            <Text>
              Play Again!
            </Text>
          </TouchableOpacity>
        )}
      </View>
    );
  }
}

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
