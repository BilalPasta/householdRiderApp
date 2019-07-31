// import React, { Component } from 'react';
// import { StyleSheet, View, Text } from 'react-native';
// import ShoppingCartIcon from './ShoppingCartIcon';
// import NavigationIcon from './NavigationIcon';


// export default class Header extends Component {
//   render() {
//     return (
//       <View style={styles.viewStyle01}>

//       <NavigationIcon onPress={() =>this.props.opendrawer() } />

//       <Text style={styles.textStyle}> {this.props.title} </Text>

//  <ShoppingCartIcon onPress={() => this.props.opencart()} />

//       </View>
//       );
//     }
//   }

// const styles = StyleSheet.create({
//   viewStyle01: {
//     backgroundColor: '#003366',
//     padding: 10,
//     borderWidth: 2,
//     borderColor: '#003366',
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//   },
//   textStyle: {
//     fontSize: 22,
//     color: 'white',
//   },
// });

//  ;



import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import ShoppingCartIcon from './ShoppingCartIcon';
import NavigationIcon from './NavigationIcon';


export default class Header extends Component {
  render() {
    return (
      <View style={styles.viewStyle01}>

      <NavigationIcon onPress={() =>this.props.opendrawer() } />

      <Text style={styles.textStyle}> {this.props.title} </Text>

<ShoppingCartIcon onPress={() => this.props.opencart()} />

      </View>
      );
    }
  }

const styles = StyleSheet.create({
  viewStyle01: {
    backgroundColor: '#003366',
    padding: 10,
    borderWidth: 2,
    borderColor: '#003366',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textStyle: {
    fontSize: 22,
    color: 'white',
  },
});

 ;
