import React, { Component } from 'react';
// import { Provider } from 'react-redux';
// import store from './src/components/store';
// import { Drawer } from './Navigators';
// import Firebase from './src/components/firebase';
// import fb from './src/firebase';
// import Map from './src/components/Map';
// import Map from './src/Components/map';
import { Provider } from 'react-redux';
// import Signup from './src/Components/signup';
import store from './src/Components/store/index';


// import firebase from 'react-native-firebase';


import  Drawer  from './src/Components/Navigation';


// import {Text,View} from 'react-native';
// import Creditcard from './src/Components/creditcard';
export default class App extends React.Component {





  render() {
  
    
 
    return (
      <Provider store={store}>
        {/* <Map/>
         */}
 <Drawer/> 
 {/* <Creditcard/>  */}
        </Provider>
    );
  }
}
