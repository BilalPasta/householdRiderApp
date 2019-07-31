import React, { Component } from 'react';
import RNAccountKit from 'react-native-facebook-account-kit';
import { View, Text, Image, StyleSheet } from 'react-native';
import Firebase from './Firebase.js';
import { Card, Spinner, CardSection, Input, Button } from './Index';

export default class LoginForm extends Component {
  state = { email: '', password: '', error: '', loading: false, signedIn: null }

  componentDidMount() {
    RNAccountKit.configure({
      responseType: 'code',
      initialPhoneCountryPrefix: '+92',
    });

    Firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ signedIn: true });
      } else {
        this.setState({ signedIn: false });
      }
    });
  }

  onButtonPress() {
    const { email, password } = this.state;

    this.setState({ error: '', loading: true });

    Firebase.auth().signInWithEmailAndPassword(email, password)
      .then(this.signInSuccess.bind(this))
      .catch(() => {
          Firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(this.signInSuccess.bind(this))
            .catch(this.signInFail.bind(this));
      });
  }

  signInSuccess() {
    this.setState({
      password: '',
      error: '',
      loading: false
    });

    this.renderNewScreen();
  }

  signInFail() {
    this.setState({ error: 'Authentication Failed', loading: false });
  }

  LoginButtonPress = async () => {
    try {
      const payload = await RNAccountKit.loginWithPhone();
      if (!payload) {
        console.warn('Login cancelled', payload);
      } else {
        this.props.navigation.navigate('ListCategory');
      }
    } catch (err) {
      console.warn('Error', err.message);
    }
  }

  renderNewScreen() {
    switch (this.state.signedIn) {
      case true:
        return this.props.navigation.navigate('ListCategory');
      case false:
        return <LoginForm />;
      default:
        return <Spinner size="large" />;
    }
  }

  renderButton() {
    if (this.state.loading) {
      return <Spinner size='small' />;
    }

    return (
      <Button
      style={styles.signInButton}
      onPress={() => this.onButtonPress()}
      >
        Sign In
      </Button>
    );
  }

  render() {
    return (
      <View style={styles.viewStyle}>

      <View style={styles.imageStyle}>
        <Image
        source={require('./assets/icon.jpg')}
        style={{ height: 100, width: 100 }}
        />
      </View>

        <Card>

          <CardSection>
            <Input
              label={'Email: '}
              onChangeText={(email) => this.setState({ email })}
              placeholder={'user@example.com'}
              value={this.state.email}
            />
          </CardSection>

          <CardSection>
            <Input
            label={'Password: '}
            onChangeText={(password) => this.setState({ password })}
            placeholder={'********'}
            value={this.state.password}
            secureTextEntry
            />
          </CardSection>

      </Card>

      <Text style={styles.errorStyle}>
        {this.state.error}
      </Text>

      <CardSection>
        {this.renderButton()}
      </CardSection>

      <CardSection>
        <Button
        onPress={this.LoginButtonPress}
        {...this.props} style={styles.numberButton}
        >
          Sign In with Number
        </Button>
      </CardSection>

    </View>

    );
  }
}

const styles = StyleSheet.create({
  viewStyle: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'column',
    marginRight: 8,
    marginLeft: 8,
  },
  imageStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 40,
  },
  signInButton: {
    flex: 1,
    backgroundColor: '#e6b800',
    borderColor: '#e6b800'
  },
  errorStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red',
  },
  numberButton: {
    flex: 1,
    backgroundColor: '#68a2ff',
    borderColor: '#68a2ff',
  },
});
