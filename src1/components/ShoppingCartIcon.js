import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';

class ShoppingCartIcon extends Component {
  render() {
    return (

      <View style={styles.cart_ButtonStyle}>

        <TouchableOpacity onPress={this.props.onPress}>
            <View style={styles.cartItemIndicator}>
              <Text> {this.props.cartItems.length} </Text>
            </View>
            <Icon
              name="shopping-cart"
              size={25} color={'white'}
            />
        </TouchableOpacity>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  cart_ButtonStyle: {
    paddingRight: 6,
    marginTop: 3,
  },
  cartItemIndicator: {
    position: 'absolute',
    height: 22,
    width: 22,
    backgroundColor: '#e6b800',
    borderRadius: 17,
    right: 16,
    bottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1,
  },
});

const mapStateToProps = (state) => ({
    cartItems: state,
  });

export default connect(mapStateToProps)(ShoppingCartIcon);
