import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import { createStackNavigator, createDrawerNavigator } from 'react-navigation';
import ListCategory from './src/components/ListCategory';
import Profile from './src/components/Profile';
import CartDisplay from './src/components/CartDisplay';
import LoginForm from './src/components/LoginForm';
import Header from './src/components/Header';
import SignOut from './src/components/SignOut';
import Map from './src/components/Map';
import {
         Technology,
         Grocery,
         FruVeg,
         FreshMeat,
         PersonalCare,
         HomeCare,
         BabyCare,
         BakeryDairy,
         Beverages,
         InstantFood,
         FrozenChilled,
         PetCare,
       } from './src/components/Index';

 const ProfileContent = createStackNavigator({
   Profile: { screen: Profile,
              navigationOptions: {
                header: props => <Header {...props} title={'My Profile'} />,
              },
            },
 });

 const CartContent = createStackNavigator({
   CartDisplay: { screen: CartDisplay,
                  navigationOptions: {
                    header: props => <Header {...props} title={'My Cart'} />,
              },
            },
 });

 const MapContent = createStackNavigator({
   Map: { screen: Map,
          navigationOptions: {
            header: props => <Header {...props} title={'Maps'} />,
              },
            },
 });

 const MyOrdersContent = createStackNavigator({
   CartDisplay: { screen: CartDisplay,
                  navigationOptions: {
                    header: props => <Header {...props} title={'My Orders'} />,
              },
            },
 });

 const WalletContent = createStackNavigator({
   CartDisplay: { screen: CartDisplay,
                  navigationOptions: {
                    header: props => <Header {...props} title={'Wallet'} />,
              },
            },
 });

 const FAQsContent = createStackNavigator({
   CartDisplay: { screen: CartDisplay,
                  navigationOptions: {
                    header: props => <Header {...props} title={'FAQs'} />,
              },
            },
 });

 const SignOutContent = createStackNavigator({
   CartDisplay: { screen: SignOut,
                  navigationOptions: {
                    header: props => <Header {...props} title={'Signing Out...'} />,
              },
            },
 });

  //////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////

 export const Stack = createStackNavigator({

   LoginForm: { screen: LoginForm,
                navigationOptions: {
                  title: 'Login Page',
                    headerTitleStyle: {
                      flex: 1,
                      color: 'white',
                      textAlign: 'center',
                    },
                    headerStyle: {
                      backgroundColor: '#009900',
                    },
                  },
                },

  ListCategory: { screen: ListCategory,
                  navigationOptions: {
                    header: props => <Header {...props} title={'Categories'} />,
                  },
                },
  Technology: { screen: Technology,
                navigationOptions: {
                  header: props => <Header {...props} title={'Technology'} />,
                },
              },
  Grocery: { screen: Grocery,
             navigationOptions: {
               header: props => <Header {...props} title={'Grocery'} />,
             },
           },
  FruVeg: { screen: FruVeg,
            navigationOptions: {
              header: props => <Header {...props} title={'Fruits & Vegetables'} />,
            },
          },
  FreshMeat: { screen: FreshMeat,
               navigationOptions: {
                 header: props => <Header {...props} title={'Fresh Meat'} />,
               },
             },
  PersonalCare: { screen: PersonalCare,
                  navigationOptions: {
                    header: props => <Header {...props} title={'Personal Care'} />,
                  },
                },
  HomeCare: { screen: HomeCare,
              navigationOptions: {
                header: props => <Header {...props} title={'Home Care'} />,
              },
            },
  BabyCare: { screen: BabyCare,
              navigationOptions: {
                header: props => <Header {...props} title={'Baby Care'} />,
              },
            },
  BakeryDairy: { screen: BakeryDairy,
                 navigationOptions: {
                   header: props => <Header {...props} title={'Bakery & Dairy'} />,
                 },
               },
  Beverages: { screen: Beverages,
               navigationOptions: {
                 header: props => <Header {...props} title={'Beverages'} />,
               },
             },
  InstantFood: { screen: InstantFood,
                 navigationOptions: {
                   header: props => <Header {...props} title={'Instant Food'} />,
                 },
               },
  FrozenChilled: { screen: FrozenChilled,
                   navigationOptions: {
                     header: props => <Header {...props} title={'Frozen & Chilled'} />,
                   },
                 },
  PetCare: { screen: PetCare,
             navigationOptions: {
               header: props => <Header {...props} title={'Pet Care'} />,
             },
           },
},
{
  initialRouteName: 'LoginForm',
});

////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

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
    screen: MapContent,
    navigationOptions: {
      drawerLabel: 'Map',
      drawerIcon: <Icon name="map" size={22} color={'black'} />,
    }
  },
  myCart: {
    screen: CartContent,
    navigationOptions: {
      drawerLabel: 'My Cart',
      drawerIcon: <Icon name="shopping-cart" size={22} color={'black'} />,
    }
  },
  myProfile: {
    screen: ProfileContent,
    navigationOptions: {
      drawerLabel: 'My Profile',
      drawerIcon: <MaterialIcon name="face" size={22} color={'black'} />,
    }
  },
  myOrders: {
    screen: MyOrdersContent,
    navigationOptions: {
      drawerLabel: 'My Orders',
      drawerIcon: <Icon name="list-ul" size={18} color={'black'} />,
    }
  },
  wallet: {
    screen: WalletContent,
    navigationOptions: {
      drawerLabel: 'Wallet',
      drawerIcon: <EntypoIcon name="wallet" size={20} color={'black'} />,
    }
  },
  faqs: {
    screen: FAQsContent,
    navigationOptions: {
      drawerLabel: 'FAQs',
      drawerIcon: <Icon name="info-circle" size={20} color={'black'} />,
    }
  },
  signOut: {
    screen: SignOutContent,
    navigationOptions: {
      drawerLockMode: 'locked-closed',
      drawerLabel: 'Sign Out',
      drawerIcon: <Icon name="sign-out" size={20} color={'black'} />,
    }
  },

});
