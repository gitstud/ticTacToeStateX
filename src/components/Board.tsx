import * as React from 'react';
import { Square } from './Square';
import {
  View,
  StyleSheet
} from 'react-native';
import { data, inject } from 'statex/react';
import { AppState, Move } from '../state';

class Props {
  @data((state: AppState) => state.squares)
  squares?: Move[];
}

interface State { }

@inject(Props)
export class Board extends React.Component<Props, State> {
  renderSquare(i: number) {
    const { squares } = this.props;
    return (
      <Square
        key={i}
        index={i}
        value={squares && squares[i]}
      />
    );
  }

  render() {
    const row = [0, 1, 2];

    return (
      <View>
        <View style={styles.boardRow}>
          {[...row].map(r => this.renderSquare(r))}
        </View>
        <View style={styles.boardRow}>
          {[...row].map(r => this.renderSquare(r + 3))}
        </View>
        <View style={styles.boardRow}>
          {[...row].map(r => this.renderSquare(r + 6))}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  boardRow: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
