import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Button } from './Index';

class SignOut extends Component {

  render() {
    return (
      <View style={styles.viewStyle}>
          <Button
            style={styles.signOutButton}
            onPress={() => this.props.navigation.navigate('LoginForm')}
          >
              Sign Out
          </Button>

          <Button
            style={styles.changePasswordButton}
          >
              Change Password
          </Button>
      </View>
    );
  }

}


const styles = StyleSheet.create({
  viewStyle: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'column',
  },
  signOutButton: {
    backgroundColor: 'red',
    borderColor: 'red',
    borderRadius: 5,
  },
  changePasswordButton: {
    backgroundColor: '#e6b800',
    borderColor: '#e6b800'
  },
});

export default SignOut;
