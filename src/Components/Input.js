import React from 'react';
import { StyleSheet, TextInput, View, Text } from 'react-native';

const Input = ({ label, onChangeText, value, placeholder, secureTextEntry }) => (
    <View style={styles.viewStyle}>

      <Text style={styles.labelStyle}> { label } </Text>

      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        style={styles.inputStyle}
        secureTextEntry={secureTextEntry}
      />

    </View>
);

const styles = StyleSheet.create({
  viewStyle: {
    flex: 2,
    padding: 6,
    flexDirection: 'row',
    alignItems: 'center',
  },
  labelStyle: {
    flex: 0.5,
    color: '#000000',
    fontSize: 14,
  },
  inputStyle: {
    flex: 1.5,
    fontSize: 14,
    paddingLeft: 6,
  },
});

export { Input };
