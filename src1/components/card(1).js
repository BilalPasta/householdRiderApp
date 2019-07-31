import React from 'react';
import { View, StyleSheet } from 'react-native';

const Card = (props) => (
  <View style={styles.viewStyle}>
    {props.children}
  </View>
);

const styles = StyleSheet.create({
  viewStyle: {
    marginTop: 10,
    marginRight: 5,
    marginLeft: 5,
    marginBottom: 10,
    borderRadius: 5,
    borderWidth: 1.5,
    borderColor: '#cccccc',
    padding: 2,
  },
});

export default Card;
