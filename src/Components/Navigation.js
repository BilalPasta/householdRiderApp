
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import { createStackNavigator, createDrawerNavigator } from 'react-navigation';
import ListCategory from './listcategory';
import OrderList from './orderlist';
import Profile from './profile';
import GetCardDetails from './creditcard';
import CartDisplay from './cartitems';
import LoginScreen from './login';
import SignUpScreen from './signup';
import SplashScreen from './splash';
import CategoryRelatedItems from './categoryrelateditems';

import Map from './map';

//  export const Stack = createStackNavigator({

// SplashScreen:{
//   screen:SplashScreen,
//   navigationOptions:{
//     header:null
//   }
// },
// LoginScreen:{
// screen:LoginScreen,
// navigationOptions:{
//   header:null
// }
// },
// SignUpScreen:{
// screen:SignUpScreen,
// navigationOptions:{
//   header:null
// }
// },

//   // ListCategory: { screen: ListCategory,
//   //                 navigationOptions: {
//   //                   header:null
//   //                 },
//   //               },
//   // CategoryRelatedItems: { screen: CategoryRelatedItems,
//   //               navigationOptions: {
//   //                 header:null
//   //               },
//   //             },

//     map: {
//       screen: Map,
//       navigationOptions: {
//         drawerLabel: 'Map',
//         drawerIcon: <Icon name="map" size={22} color={'black'} />,
//         header:null
//       }
//     },
//   //   GetCardDetails:{
//   //     screen:GetCardDetails,
//   //     navigationOptions:{
//   //       header:null
//   //     }
//   //   } 
//   // ,

//     myProfile: {
//       screen: Profile,
//       navigationOptions: {
//         drawerLabel: 'My Profile',
//         drawerIcon: <MaterialIcon name="face" size={22} color={'black'} />,
//         header:null
//       }
//     },   
    
  
// },
// {
//   initialRouteName: 'SplashScreen',
// });



// export const Drawer = createDrawerNavigator({

//   home: {
//     screen: Stack,
//     navigationOptions: {
//       // drawerLockMode: 'locked-closed',
//       drawerLabel: 'Home',
//       drawerIcon: <Icon name="home" size={22} color={'black'} />,
//     }
//   },
  
//   map: {
//     screen: Map,
//     navigationOptions: {
//       drawerLabel: 'Map',
//       drawerIcon: <Icon name="map" size={22} color={'black'} />,
//     }
//   },

//   myProfile: {
//     screen: Profile,
//     navigationOptions: {
//       drawerLabel: 'My Profile',
//       drawerIcon: <MaterialIcon name="face" size={22} color={'black'} />,
//     }
//   },
//   OrderList:{
//     screen:OrderList,
//     navigationOptions:{
//       drawerLabel: 'My Orders',
//       drawerIcon: <MaterialIcon name="face" size={22} color={'black'} />,

//     }
//   }
  
// });




const AuthStack=createStackNavigator(
  {
    SplashScreen:{
      screen:SplashScreen,
      navigationOptions:{
        header:null
      }
    },
    LoginScreen:{
    screen:LoginScreen,
    navigationOptions:{
      header:null
    }
    },
    SignUpScreen:{
    screen:SignUpScreen,
    navigationOptions:{
      header:null
    }
    },
  }, {
      initialRouteName: 'SplashScreen',
      navigationOptions: {
      //   headerTintColor: '#fff',
      //   headerStyle: {
      //     backgroundColor: '#000',
      //   },
        // gesturesEnabled: true,
        // gesturesDirection: 'inverted',
      },
      // headerMode:'screen',
      header:null,
      transitionConfig: () => ({
        screenInterpolator: sceneProps => {
          const { layout, position, scene } = sceneProps;
          const { index } = scene;
          const width = layout.initWidth;
    
          return {
            opacity: position.interpolate({
              inputRange: [index - 1, index, index + 1],
              outputRange: [ 0, 1, 0],
            }),
            transform: [{
              translateX: position.interpolate({
                inputRange: [index - 1, index, index + 1],
                outputRange: [-width, 0, width],
              }),
            }]
          };
        },
        headerTitleInterpolator: sceneProps => {
          const { layout, position, scene } = sceneProps;
          const { index } = scene;
    
          return {
            opacity: position.interpolate({
              inputRange: [index - 1, index, index + 1],
              outputRange: [ 0, 1, 0],
            }),
            transform: [{
              translateX: position.interpolate({
                inputRange: [index - 1, index, index + 1],
                outputRange: [-50, 0, 50],
              }),
            }]
          };
        },
      }),
    
    }
)












const AppStack=createStackNavigator(
  {
    map: {
      screen: Map,
      navigationOptions: {
       header:null
      }
    },
  
    myProfile: {
      screen: Profile,
      navigationOptions: {
       
      }
    },
    OrderList:{
      screen:OrderList,
      navigationOptions:{
  
      }
    }

  }, {
      initialRouteName: 'map',
      navigationOptions: {
        headerTintColor: '#fff',
        headerStyle: {
          backgroundColor: '#0ead00',
        },
        // gesturesEnabled: true,
        // gesturesDirection: 'inverted',
      },
      headerMode:'screen',
      transitionConfig: () => ({
        screenInterpolator: sceneProps => {
          const { layout, position, scene } = sceneProps;
          const { index } = scene;
          const width = layout.initWidth;
    
          return {
            opacity: position.interpolate({
              inputRange: [index - 1, index, index + 1],
              outputRange: [ 0, 1, 0],
            }),
            transform: [{
              translateX: position.interpolate({
                inputRange: [index - 1, index, index + 1],
                outputRange: [-width, 0, width],
              }),
            }]
          };
        },
        headerTitleInterpolator: sceneProps => {
          const { layout, position, scene } = sceneProps;
          const { index } = scene;
    
          return {
            opacity: position.interpolate({
              inputRange: [index - 1, index, index + 1],
              outputRange: [ 0, 1, 0],
            }),
            transform: [{
              translateX: position.interpolate({
                inputRange: [index - 1, index, index + 1],
                outputRange: [-50, 0, 50],
              }),
            }]
          };
        },
      }),
    
    }
)



const RootStack=createStackNavigator(
  {
    AuthStack:AuthStack,
    AppStack:AppStack
  
 
  },{
    navigationOptions:{
      header:null
    }
  }
)





export default RootStack;