import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { Button } from './Index';

const mapDispatchToProps = (dispatch) => ({
    addItemToCart: (product) => dispatch({ type: 'ADD_TO_CART', payload: product })
  });

class Category extends Component {
  render() {
    return (
      <View style={styles.container}>

        <View style={{ flex: 2 }}>
            <Image
            source={this.props.imageURL}
            style={styles.imageStyle}
            />
        </View>

        <View style={styles.textStyle}>
          <Text> {this.props.name} ( {this.props.quantity} ) </Text>
          <Text> Rs. {this.props.price} </Text>
        </View>

        <Button onPress={this.props.addItemToCart}>
          Add to Cart
        </Button>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 190,
    width: 180,
    marginLeft: 10,
    borderWidth: 0.3,
    borderColor: '#808080',
  },
  imageStyle: {
    flex: 1,
    height: null,
    width: null,
    marginTop: 5,
  },
  textStyle: {
    flex: 1,
    paddingLeft: 10,
    paddingTop: 10,
  },
});

export default connect(null, mapDispatchToProps)(Category);
