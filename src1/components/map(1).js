import React, { Component } from 'react';

import {  StyleSheet, Dimensions,View ,PermissionsAndroid,Text} from 'react-native';
import MapView, { PROVIDER_GOOGLE,Marker } from 'react-native-maps';
import firebase from 'react-native-firebase';
import haversine from "haversine";

import { connect } from 'react-redux';


const { width, height } = Dimensions.get('window');
const ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;




let distancearray=[];
const start = {
  latitude: 24.881966,
  longitude: 67.051400
}

const end = {
  latitude: 24.882423,
  longitude: 67.052200
}




 class Map extends Component {
	constructor(props) {
    super(props);
    this.state = {
      initialRegion: {
        latitude: 24.927816,
        longitude: 67.108940,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA,
      },
      nearestRegion:null
    };

this.measuredifference=this.measuredifference.bind(this);
  }



 measuredifference=(yourposition,riderpositionarray)=>{
    riderpositionarray.map((ridercoordsobject)=>{
let distance=haversine(yourposition,ridercoordsobject);
distancearray.push(distance);
distancearray=distancearray.sort();

    });
this.setState({nearestRegion:distancearray[0]})
console.log(distancearray);

  }

    requestLocationPermission = async () => {
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
        console.log("You can use the location");
      } else {
        console.log("location permission denied");
      }
    } catch (err) {
      console.warn(err);
    }
  };


  componentDidMount() {
    this.requestLocationPermission();

    navigator.geolocation.getCurrentPosition(
      position => {
        this.setState({
          initialRegion: {
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
          initialRegion: {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            latitudeDelta: LATITUDE_DELTA,
            longitudeDelta: LONGITUDE_DELTA,
          }
        });
        // console.log(position.coords)
// let distance1=haversine(this.state.initialRegion,start);
// let distance2=haversine(this.state.initialRegion,end);
// console.log(distance1);
// console.log(distance2)

this.measuredifference(this.state.initialRegion,[{
  latitude: 24.882423,
  longitude: 67.052200
},{
  latitude: 24.881966,
  longitude: 67.051400
}])
        // firebase.database().ref('/').child(`stripe_customers/${this.props.currentUser.uid}/position`).set(position.coords);
        
      }
    );
  }
  

  render() {
    return (
			<View>

      <MapView
			provider={PROVIDER_GOOGLE}
      style={{ width, height }}
      showsUserLocation
			region={this.state.initialRegion}
      // onRegionChangeComplete={initialRegion =>alert(initialRegion.longitude)}
			zoomEnabled
			scrollEnabled
      >
       <Marker.Animated
           
            coordinate={this.state.initialRegion}
            title={'Bilal Usman'}
          >
{/* <Text style={{marginBottom:10,fontWeight:'bold'}}>Bilal Usman
  </Text> */}
</Marker.Animated         >
           
           {/* {this.state.nearestRegion.latitude!=undefined?( <Marker.Animated
           
           coordinate={this.state.nearestRegion}
         />):(null)} */}

<Marker.Animated
           
           coordinate={start}
         />
          <Marker.Animated
           
           coordinate={end}
         />
			</MapView>


			</View>
    );
  }
}

const styles = StyleSheet.create({
	searchContainer: {
		top: 10,
		position: 'absolute',
		width,
	},
	inputWrapper: {
		marginLeft: 15,
		marginRight: 10,
		marginTop: 10,
		marginBottom: 0,
		backgroundColor: '#fff',
		opacity: 0.9,
		borderRadius: 7,
	},
	inputSearch: {
		fontSize: 16,
	},
});





function mapstatetoprops(state){
  return{
currentUser:state.Appdata.CurrentUser
}
}

function mapdispatchtoprops(){
  return{}
}

export  default connect(mapstatetoprops,mapdispatchtoprops)(Map)