import React from 'react';
import { StyleSheet, View } from 'react-native';

const CardSection = ({ children, style }) => (
  <View style={[styles.viewStyle, style]}>
    {children}
  </View>
);

const styles = StyleSheet.create({
  viewStyle: {
    padding: 5,
    flexDirection: 'row'
  },
});

export { CardSection };
