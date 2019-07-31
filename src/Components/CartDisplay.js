import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';

class CartDisplay extends Component {
  render() {
    return (
      <View />
    );
  }
}

const mapStateToProps = (state) => ({
    cartItems: state,
  });

export default connect(mapStateToProps)(CartDisplay);
