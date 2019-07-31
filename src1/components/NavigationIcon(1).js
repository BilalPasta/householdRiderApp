import React, { Component } from 'react';
import { View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

class NavigationIcon extends Component {
  render() {
    return (

      <View>
        <TouchableOpacity onPress={this.props.onPress}>
            <Icon name="navicon" size={25} color={'white'} />
        </TouchableOpacity>
      </View>

    );
  }
}

export default NavigationIcon;
