





// import React from "react";
// import {
//   StyleSheet,
//   View,
//   Text,
//   TouchableOpacity,
//   Platform,
//   ActivityIndicator,
//   InteractionManager,
//   PermissionsAndroid,
//   Dimensions
// } from "react-native";
// import MapView, {
//   Marker,
//   AnimatedRegion,
//   Polyline,
//   PROVIDER_GOOGLE
// } from "react-native-maps";
// import firebase from 'react-native-firebase'
// import {Snackbar, FAB, Portal } from  'react-native-paper'
// import {connect} from 'react-redux';


// const { width, height } = Dimensions.get('window');
// const ASPECT_RATIO = width / height;
// const LATITUDE_DELTA = 0.0922;
// const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
// const LATITUDE = 29.95539;
// const LONGITUDE = 78.07513;


// class AnimatedMarkers extends React.Component {
//   constructor(props) {
//  super(props);
  
//  if(!this.props.currentUser.location){

//  }
//     else{firebase.database().ref('/').child(`stripe_customers/${this.props.currentUser.uid}/location`).on('value',(defaultposition)=>{
// this.setState({coordinate:{
//   latitude:defaultposition.val()._latitude,
//   longitude:defaultposition.val()._longitude
// }})


// console.log(this.state.coordinate);

//     });
//   }

//     this.state = {
//       open: false,
//       showScreen:false,
//       coordinate:{
//         latitude: LATITUDE,
//                 longitude: LONGITUDE,
//         latitudeDelta: LATITUDE_DELTA,
//         longitudeDelta: LONGITUDE_DELTA
//       }
//     }





//   }


  






  

//   componentDidMount() {
// console.log('coordinate');
//     this.requestCameraPermission();


//     InteractionManager.runAfterInteractions(() => {
    
//       this.setState({
//         showScreen: true,
//       });
//     });
       
//     navigator.geolocation.getCurrentPosition (
//       (position) => {
//         const yourGeoPoint= new firebase.firestore.GeoPoint(position.coords.latitude, position.coords.longitude)
        
// // alert('current');
//         firebase.database().ref(`/stripe_customers/${this.props.currentUser.uid}/location`).set(yourGeoPoint);
//         this.setState({
//         coordinate:{
//                    latitude: position.coords.latitude,
//           longitude: position.coords.longitude,
//         }
//       }) 
    

//     },
//       (error)    => { console.log(error) },
//       {
//         enableHighAccuracy: true,
//         timeout:            20000,
//         maximumAge:         1000,
//         enableHighAccuracy: false, timeout: 5000, maximumAge: 10000 
//         // enableHighAccuracy: true, timeout: 25000, maximumAge: 3600000 
//       }
//     )
//     this.watchID = navigator.geolocation.watchPosition(
//       position => {

//         const yourGeoPoint= new firebase.firestore.GeoPoint(position.coords.latitude, position.coords.longitude)
        

//         firebase.database().ref(`/stripe_customers/${this.props.currentUser.uid}/location`).set(yourGeoPoint);
//          this.setState({
//           coordinate:{
//                      latitude: position.coords.latitude,
//             longitude: position.coords.longitude,
//           }
//         })


       
   

      
//       },
//       error => console.log(error),
//       {
//         enableHighAccuracy: true,
//         timeout: 20000,
//         maximumAge: 1000,
//         distanceFilter: 10
//       }
//     );
//   }




//   requestCameraPermission = async () => {
//     try {
//       const granted = await PermissionsAndroid.request(
//         PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
//         {
//           title: "Location Access Permission",
//           buttonNeutral: "Ask Me Later",
          
//           buttonNegative: "Cancel",
//           buttonPositive: "OK"
//         }
//       );
//       if (granted === PermissionsAndroid.RESULTS.GRANTED) {
//         console.log("You can use the camera");
//       } else {
//         console.log("Camera permission denied");
//       }
//     } catch (err) {
//       console.warn(err);
//     }
//   };

//   render() {
 
//     return (
// this.state.showScreen?
//       (<View style={styles.container}>
//         <MapView
//           style={styles.map}
          
//           provider={PROVIDER_GOOGLE}
//           showUserLocation
//           followUserLocation
//           loadingEnabled
//           region={{
//             latitude: this.state.latitude,
//             longitude: this.state.longitude,
//             latitudeDelta: 0.0922,
//             longitudeDelta: 0.0421,
//           }}
//           			zoomEnabled
// 			scrollEnabled
//         >
//           <Marker.Animated
//             ref={marker => {
//               this.marker = marker;
//             }}
//             coordinate={this.state.coordinate}
//           />

// }
          
//         </MapView>
//         <Portal>
//         <FAB.Group
//           open={this.state.open}
//           icon={this.state.open ? 'today' : 'add'}
//           actions={[
       
//             { icon: 'email', label: 'Profile', onPress: () => console.log('Pressed email') },
//             { icon: 'notifications', label: 'Orders', onPress: () => console.log('Pressed notifications') },
//           ]}
//           onStateChange={({ open }) => this.setState({ open })}
//           onPress={() => {
//             if (this.state.open) {
//               // do something if the speed dial is open
//             }
//           }}
//         />
//       </Portal>

//                        </View>):(<ActivityIndicator size="large" style={{flex:1,alignItems:'center',justifyContent:'center'}}  color="#003366"/>)
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     ...StyleSheet.absoluteFillObject,
//     justifyContent: "flex-end",
//     alignItems: "center"
//   },
//   map: {
//     ...StyleSheet.absoluteFillObject
//   },
//   bubble: {
//     flex: 1,
//     backgroundColor: "rgba(255,255,255,0.7)",
//     paddingHorizontal: 18,
//     paddingVertical: 12,
//     borderRadius: 20
//   },
//   latlng: {
//     width: 200,
//     alignItems: "stretch"
//   },
//   button: {
//     width: 80,
//     paddingHorizontal: 12,
//     alignItems: "center",
//     marginHorizontal: 10
//   },
//   buttonContainer: {
//     flexDirection: "row",
//     marginVertical: 20,
//     backgroundColor: "transparent"
//   }
// });

// // export default AnimatedMarkers;

// function mapstatetoprops(state){
//   return{
// currentUser:state.Appdata.CurrentUser,
// riders:state.Appdata.riders
// }
// }

// function mapdispatchtoprops(){
//   return{}
// }

// export  default connect(mapstatetoprops,mapdispatchtoprops)(AnimatedMarkers)





// import React, { Component } from 'react';
// import { Platform, StyleSheet, Text, View, Dimensions } from 'react-native';
// import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
// import firebase from 'react-native-firebase'
// import {Snackbar, FAB, Portal ,Provider as PaperProvider} from  'react-native-paper'
// import {connect} from 'react-redux';
// const { width, height } = Dimensions.get('window');
// const ASPECT_RATIO = width / height;
// const LATITUDE = 0;
// const LONGITUDE = 0;
// const LATITUDE_DELTA = 0.0922;
// const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

// class Map extends Component {
// 	constructor(props) {
//     super(props);


//      if(!this.props.currentUser.location){

//  }
//     else{
      
//       firebase.database().ref('/').child(`stripe_customers/${this.props.currentUser.uid}/location`).on('value',(defaultposition)=>{
// this.setState({region:{
//   latitude:defaultposition.val()._latitude,
//   longitude:defaultposition.val()._longitude,
//   latitudeDelta: LATITUDE_DELTA,
//   longitudeDelta: LONGITUDE_DELTA,

// }})
// })

// }
//     this.state = {
//       region: {
//         latitude: LATITUDE,
//         longitude: LONGITUDE,
//         latitudeDelta: LATITUDE_DELTA,
//         longitudeDelta: LONGITUDE_DELTA,
//       }
//     };
//   }

//   componentDidMount() {
//     navigator.geolocation.getCurrentPosition(
//       position => {
//         // this.setState({
//         //   region: {
//         //     latitude: position.coords.latitude,
//         //     longitude: position.coords.longitude,
//         //     latitudeDelta: LATITUDE_DELTA,
//         //     longitudeDelta: LONGITUDE_DELTA,
//         //   }
//         // });
   
//         const yourGeoPoint= new firebase.firestore.GeoPoint(position.coords.latitude, position.coords.longitude)
        

//         firebase.database().ref(`/stripe_customers/${this.props.currentUser.uid}/location`).set(yourGeoPoint);
//       },
//     (error) => console.log(error.message),
//     { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
//     );


      
// //          this.setState({
// //           coordinate:{
// //                      latitude: position.coords.latitude,
// //             longitude: position.coords.longitude,
// //           }
// //         })




//     // this.watchID = navigator.geolocation.watchPosition(
//     //   position => {
//     //     this.setState({
//     //       region: {
//     //         latitude: position.coords.latitude,
//     //         longitude: position.coords.longitude,
           
//     //       }
//     //     });
//     //     const yourGeoPoint= new firebase.firestore.GeoPoint(position.coords.latitude, position.coords.longitude)
        

//     //     firebase.database().ref(`/stripe_customers/${this.props.currentUser.uid}/location`).set(yourGeoPoint);
      
//     //   }
//     // );
//   }

//   render() {
//     return (
//       <View>
//       <MapView
// 		provider={PROVIDER_GOOGLE}
//         style={{ flex: 1 }}
//         showsUserLocation
// 		region={this.state.region}
//         onRegionChangeComplete={region => this.setState({ region })}
//       >
// 		 </MapView>
//      {/* <Portal>
//         <FAB.Group
//           open={this.state.open}
//           icon={this.state.open ? 'today' : 'add'}
//           actions={[
//             { icon: 'add', onPress: () => console.log('Pressed add') },
//             { icon: 'star', label: 'Star', onPress: () => console.log('Pressed star')},
//             { icon: 'email', label: 'Email', onPress: () => console.log('Pressed email') },
//             { icon: 'notifications', label: 'Remind', onPress: () => console.log('Pressed notifications') },
//           ]}
//           onStateChange={({ open }) => this.setState({ open })}
//           onPress={() => {
//             if (this.state.open) {
//               // do something if the speed dial is open
//             }
//           }}
//         />
//       </Portal> */}
//      </View>
//     );
//   }
// }



// function mapstatetoprops(state){
//   return{
// currentUser:state.Appdata.CurrentUser,

//   }
// }
// function mapdispatchtoprops(dispatch){
//   return{

//   }
// }

// export default connect(mapstatetoprops,mapdispatchtoprops)(Map);





import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Dimensions ,ActivityIndicator,InteractionManager,StatusBar,PermissionsAndroid} from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import {connect} from 'react-redux';
import {Snackbar, FAB, Portal ,Provider as PaperProvider} from  'react-native-paper'
import firebase from 'react-native-firebase';
const { width, height } = Dimensions.get('window');
const ASPECT_RATIO = width / height;
const LATITUDE = 0;
const LONGITUDE = 0;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

class Map extends Component {
	constructor() {
    super();
    this.state = {
      showscreen:false,
      region: {
        latitude: LATITUDE,
        longitude: LONGITUDE,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA,
      }
    };
  }


  componentWillUnmount() {
    navigator.geolocation.clearWatch(this.watchID);
  }
  signOut(){
    // firebase.auth().signOut().then(()=> {
      this.props.navigation.navigate('LoginScreen')      
  //   }).catch((error)=> {
  //     // An error happened.
  //   });
  }

  requestCameraPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: "Location Access Permission",
          buttonNeutral: "Ask Me Later",
          
          buttonNegative: "Cancel",
          buttonPositive: "OK"
        }
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log("You can use the camera");
      } else {
        console.log("Camera permission denied");
      }
    } catch (err) {
      console.warn(err);
    }
  };




  componentDidMount() {
    InteractionManager.runAfterInteractions(() => {
    
      this.setState({
        showscreen: true,
      });
      this.requestCameraPermission();

    });


     navigator.geolocation.getCurrentPosition(
      position => {



        const yourGeoPoint= new firebase.firestore.GeoPoint(position.coords.latitude, position.coords.longitude)
        

        firebase.database().ref(`/stripe_customers/${this.props.currentUser.uid}/location`).set(yourGeoPoint);
              
        this.setState({
          region: {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            latitudeDelta: LATITUDE_DELTA,
            longitudeDelta: LONGITUDE_DELTA,
          }
        });

   
      },
    (error) => console.log(error.message),
    { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
    );
    this.watchID = navigator.geolocation.watchPosition(
      position => {
        this.setState({
          region: {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            latitudeDelta: LATITUDE_DELTA,
            longitudeDelta: LONGITUDE_DELTA,
          }
        });
      }
    );
  }

  render() {
    return (
      this.state.showscreen?
      <PaperProvider>
                  <StatusBar
          barStyle="light-content"
          backgroundColor="#0ead00"
        />
        
      <MapView
		provider={PROVIDER_GOOGLE}
        style={{ flex: 1 }}
        showsUserLocation
		region={this.state.region}
        onRegionChangeComplete={region => this.setState({ region })}
      >
		<MapView.Marker coordinate={this.state.region} />
		 </MapView>
  <Portal   style={{backgroundColor:'#fff'}}>
        <FAB.Group
       
          open={this.state.open}
          icon={this.state.open ? 'today' : 'add'}
          actions={[
            { icon: require('./assets/logout.png'), label: 'SignOut', onPress: () => this.signOut()
          },
          { icon: 'face', label: 'Profile', onPress: () =>  this.props.navigation.navigate('myProfile')
        },
            { icon: 'menu', label: 'Orders', onPress: () => this.props.navigation.navigate('OrderList') },
          ]}
          onStateChange={({ open }) => this.setState({ open })}
          onPress={() => {
            if (this.state.open) {
              // do something if the speed dial is open
            }
          }}
        />
      </Portal>
     </PaperProvider>:(<ActivityIndicator size="large" style={{flex:1,alignItems:'center',justifyContent:'center'}}  color="#003366"/>)
    );
  }
}


function mapstatetoprops(state){
  return{
currentUser:state.Appdata.CurrentUser,

  }
}
function mapdispatchtoprops(dispatch){
  return{

  }
}

export default connect(mapstatetoprops,mapdispatchtoprops)(Map);
















