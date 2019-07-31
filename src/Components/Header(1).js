import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import ShoppingCartIcon from './ShoppingCartIcon';
import NavigationIcon from './NavigationIcon';

class Header extends Component {
  render() {
    return (
      <View style={styles.viewStyle01}>

      <NavigationIcon onPress={() => this.props.navigation.openDrawer()} />

      <Text style={styles.textStyle}> {this.props.title} </Text>

      <ShoppingCartIcon onPress={() => this.props.navigation.navigate('CartDisplay')} />

      </View>
      );
    }
  }

const styles = StyleSheet.create({
  viewStyle01: {
    backgroundColor: '#009900',
    padding: 10,
    borderWidth: 2,
    borderColor: '#009900',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textStyle: {
    fontSize: 22,
    color: 'white',
  },
});

export default Header;
