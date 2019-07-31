import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import { createStackNavigator, createDrawerNavigator } from 'react-navigation';
import ListCategory from './listcategory';

import Profile from './profile';
import GetCardDetails from './creditcard';
// import CartDisplay from './src/components/CartDisplay';
import CartDisplay from './cartitems';
// import LoginForm from './src/components/LoginForm';
import LoginScreen from './login';
import SignUpScreen from './signup';
import SplashScreen from './splash';
import CategoryRelatedItems from './categoryrelateditems';
import OrderLIst from './orderslist';

// import Header from './src/components/Header';
// import SignOut from './src/components/SignOut';
import Map from './map';

 export const Stack = createStackNavigator({

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
OrderLIst:{
  screen:OrderLIst,
  navigationOptions:{
    header:null
  }
},
  ListCategory: { screen: ListCategory,
                  navigationOptions: {
                    header:null
                  },
                },
  CategoryRelatedItems: { screen: CategoryRelatedItems,
                navigationOptions: {
                  header:null
                },
              },

  CartDisplay: {
    screen: CartDisplay,
    navigationOptions: {
      header:null
    }},
    
    GetCardDetails:{
      screen:GetCardDetails,
      navigationOptions:{
        header:null
      }
    } 
  ,
   map: {
      screen: Map,
      navigationOptions: {
        drawerLabel: 'Map',
        drawerIcon: <Icon name="map" size={22} color={'black'} />,
        header:null
      }
    },
    myProfile: {
      screen: Profile,
      navigationOptions: {
        drawerLabel: 'My Profile',
        drawerIcon: <MaterialIcon name="face" size={22} color={'black'} />,
        header:null
      }
    },   
  
},
{
  initialRouteName: 'SplashScreen',
});



export const Drawer = createDrawerNavigator({

  home: {
    screen: Stack,
    navigationOptions: {
      drawerLockMode: 'locked-closed',
      drawerLabel: 'Home',
      drawerIcon: <Icon name="home" size={22} color={'black'} />,
    }
  },
  map: {
    screen: Map,
    navigationOptions: {
      drawerLabel: 'Map',
      drawerIcon: <Icon name="map" size={22} color={'black'} />,
    }
  },

  myProfile: {
    screen: Profile,
    navigationOptions: {
      drawerLabel: 'My Profile',
      drawerIcon: <MaterialIcon name="face" size={22} color={'black'} />,
    }
  },
  // myOrders: {
  //   screen: MyOrdersContent,
  //   navigationOptions: {
  //     drawerLabel: 'My Orders',
  //     drawerIcon: <Icon name="list-ul" size={18} color={'black'} />,
  //   }
  // },
  // wallet: {
  //   screen: WalletContent,
  //   navigationOptions: {
  //     drawerLabel: 'Wallet',
  //     drawerIcon: <EntypoIcon name="wallet" size={20} color={'black'} />,
  //   }
  // },
  // faqs: {
  //   screen: FAQsContent,
  //   navigationOptions: {
  //     drawerLabel: 'FAQs',
  //     drawerIcon: <Icon name="info-circle" size={20} color={'black'} />,
  //   }
  // },
//   signOut: {
//     screen: SignOut,
//     navigationOptions: {
//       drawerLockMode: 'locked-closed',
//       drawerLabel: 'Sign Out',
//       drawerIcon: <Icon name="sign-out" size={20} color={'black'} />,
//     }
//   },

});
