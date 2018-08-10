import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Game } from './components/Game';
import './stores';

export default class App extends React.Component<{}, {}> {
  render() {
    return (
      <View style={styles.container}>
        <Game />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f9ff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 40
  }
});
