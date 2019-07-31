import React,{Component} from 'react';
import {View,ActivityIndicator,Dimensions,ImageBackground,Text} from 'react-native';
import {connect} from 'react-redux';
import {getriders} from './store/action/index';
let {width} = Dimensions.get('window');

 class SplashScreen extends React.Component{
    constructor(props){
 super(props);
   
            this.props.getriders( );
            setTimeout(()=>{
                this.props.navigation.navigate('LoginScreen')       
                } ,4000);
}
    render() {
    return (
         <View style={{flex:1}}> 
      
 <ImageBackground style={{flex:1,width:width}}   source={require('./assets/splash.jpeg')}  resizeMode="contain"> 
  <ActivityIndicator animating={true} size="large" style={{flex:1,alignItems:'center',justifyContent:'center'}}  color="#fff"/> 

 </ImageBackground>   
     </View>
     )     
}}

function mapstatetoprops(state){
    return{
      Appdata:state.Appdata,
      currentUser:state.Appdata.CurrentUser
    }}

function mapdispatchtoprops(dispatch){
    return{
        getriders:()=>{
            dispatch(getriders());
        }
}
}
export default connect(mapstatetoprops,mapdispatchtoprops)(SplashScreen);