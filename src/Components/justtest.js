import React from 'react';
import { View, TextInput, StyleSheet, Keyboard,  TouchableWithoutFeedback } from 'react-native';

const DismissKeyboard = ({ children }) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
);

const App = () => (
  <DismissKeyboard>
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="email"
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="password"
      />
    </View>
  </DismissKeyboard>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2374AB',
  },
  input: {
    width: '80%',
    paddingVertical: 10,
    paddingHorizontal: 5,
    borderRadius: 3,
    backgroundColor: '#ffffff70',
    marginVertical: 5,
  },
});

export default App;
