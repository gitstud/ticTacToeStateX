import * as React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { SelectSquareAction } from '../actions';

export const Square = ({ value, index }) => (
  <TouchableOpacity
    style={styles.square}
    onPress={() => {
      if (!value) {
        new SelectSquareAction(index).dispatch();
      }
    }}
  >
    <Text style={value === 'X' ? styles.x : styles.o}>
      {value}
    </Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  square: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#999',
    height: 64,
    width: 64,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  x: {
    color: '#92a4c0',
    fontSize: 30
  },
  o: {
    color: '#f4adad',
    fontSize: 30
  }
});
