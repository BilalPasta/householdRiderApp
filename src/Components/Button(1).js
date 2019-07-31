import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';

const Button = ({ style, children, onPress }) => (
    <TouchableOpacity onPress={onPress} style={[styles.buttonStyle, style]}>
      <Text style={styles.textStyle}> {children} </Text>
    </TouchableOpacity>
  );

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 15,
    color: 'white',
  },
  buttonStyle: {
    paddingTop: 8,
    paddingBottom: 8,
    borderRadius: 7,
    borderWidth: 1,
    borderColor: '#009900',
    alignItems: 'center',
    marginRight: 8,
    marginLeft: 8,
    marginBottom: 10,
    backgroundColor: '#009900',
  },
});

export { Button };
