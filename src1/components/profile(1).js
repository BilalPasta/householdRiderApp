
import { Avatar,Button,TextInput } from 'react-native-paper';
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView
} from 'react-native';
import Header from './header';
// import fb from '../firebase';
import firebase from 'react-native-firebase';
import {connect} from 'react-redux';
import { Checkbox } from 'react-native-paper';
import Toast from 'react-native-root-toast';



class UserProfileView extends Component {

constructor(props){
  super(props);
  this.state={
    loading:false,
    passwordcheck:false,
    namecheck:false,
    contactcheck:false,
    username:'',
    oldpassword:'',
    newpassword:'',
    contact:'',
  }
  this.updateProfile=this.updateProfile.bind(this);

  
}


componentDidMount(){

 
}

_scrollToInput() {
  const scrollResponder = this.refs.myScrollView.getScrollResponder();
  const inputHandle = React.findNodeHandle(this.refs.myInput)

  scrollResponder.scrollResponderScrollNativeHandleToKeyboard(
    inputHandle, // The TextInput node handle
    0, // The scroll view's bottom "contentInset" (default 0)
    true // Prevent negative scrolling
  );
}
  changepassword(oldpassword,newPassword){
    // this.setState({loading:true});




    
    if(this.props.currentUser.password==oldpassword){
//       User.updatePassword(newPassword).then(function() {
//         // Update successful.
//         // this.setState({loading:false})
//         firebase.database().ref('/').child(`stripe_customers/${this.props.currentUser.uid}/password`).set(newPassword);
// console.log('aagya');
//         console.log('sucess')
//       }).catch(function(error) {
//         // An error happened.
//         Toast.show(error.message, {
//           duration: 400,
//           position: Toast.positions.BOTTOM,
//           shadow: true,
//           animation: true,
//           hideOnPress: true,
//           delay: 100,
//           onShow: () => {
//               // calls on toast\`s appear animation start
        
//           },
//           onShown: () => {
//               // calls on toast\`s appear animation end.
        
//           },
//           onHide: () => {
//               // calls on toast\`s hide animation start.
//           },
//           onHidden: () => {
//               // calls on toast\`s hide animation end.
        
        
//           }
//         })
//         // this.setState({loading:false})
  
    
//       });
   

firebase.auth().onAuthStateChanged((userdata) => {
  // console.log(user) 
  
  userdata.updatePassword(newPassword).then(()=> {
    // Update successful.
    // this.setState({loading:false})
    firebase.database().ref('/').child(`stripe_customers/${this.props.currentUser.uid}/password`).set(newPassword);
  console.log('aagya');
    console.log('sucess')
  }).catch((error)=> {
    // An error happened.
    Toast.show(error.message, {
      duration: 400,
      position: Toast.positions.BOTTOM,
      shadow: true,
      animation: true,
      hideOnPress: true,
      delay: 100,
      onShow: () => {
          // calls on toast\`s appear animation start
    
      },
      onShown: () => {
          // calls on toast\`s appear animation end.
    
      },
      onHide: () => {
          // calls on toast\`s hide animation start.
      },
      onHidden: () => {
          // calls on toast\`s hide animation end.
    
    
      }
    })
    // this.setState({loading:false})
  
  
  });
  
  
  })
}
    else{
      Toast.show('Old password is incorrect', {
        duration: 400,
        position: Toast.positions.BOTTOM,
        shadow: true,
        animation: true,
        hideOnPress: true,
        delay: 100,
        onShow: () => {
            // calls on toast\`s appear animation start
      
        },
        onShown: () => {
            // calls on toast\`s appear animation end.
      
        },
        onHide: () => {
            // calls on toast\`s hide animation start.
        },
        onHidden: () => {
            // calls on toast\`s hide animation end.
      
        }
      })
      // this.setState({loading:false})
    }
    // var newPassword = /();
   
    
  }
changename(name){

  firebase.database().ref('/').child(`stripe_customers/${this.props.currentUser.uid}/name`).set(name);
}

changecontact(contact){
  firebase.database().ref('/').child(`stripe_customers/${this.props.currentUser.uid}/contact`).set(contact);
}

updateProfile(oldpassword,newpassword,name,contact){
  this.setState({loading:true});
  if(this.state.passwordcheck){
    this.changepassword(oldpassword,newpassword);
  }
  if(this.state.namecheck){
    this.changename(name);
  }
  if(this.state.contactcheck){
    alert();
    this.changecontact(contact);
  }
  this.setState({loading:false});

}

  render() {
    const {passwordcheck}=this.state;
    const {contactcheck}=this.state;
    const {namecheck}=this.state;
    return (
      <ScrollView ref="myScrollView" style={{backgroundColor:'#d3d3d3'}}>
      <View >
      <Header     opendrawer={()=>this.props.navigation.openDrawer()} title={'Profile'} />

          <View style={styles.header}>
            <View style={styles.headerContent}>
                {/* <Image style={styles.avatar}
                  source={{uri: 'https://bootdey.com/img/Content/avatar/avatar6.png'}}/> */}
                      <Avatar.Text size={64} label={this.props.currentUser.name[0]} />


                <Text style={styles.name}>{this.props.currentUser.name} </Text>
                <Text style={styles.userInfo}>{this.props.currentUser.email} </Text>
                <Text style={styles.userInfo}>{this.props.currentUser.contact} </Text>
            </View>
          </View>

          
          
          <View style={styles.body}>
          <View style={{flexDirection:"row",justifyContent:'space-between'}}>
          <View style={{margin:2,flex:1,justifyContent:'center',alignItems:'center',}}>
        <Text style={{fontSize:16,fontWeight:'bold'}} >Name</Text>
        <Checkbox 
        color={'#003366'}
        status={namecheck ? 'checked' : 'unchecked'}
        onPress={() => { this.setState({ namecheck: !namecheck }); }}
      />
      </View>
          <View style={{margin:2,flex:1,justifyContent:'center',alignItems:'center'}}>
        <Text style={{fontSize:16,fontWeight:'bold'}} >Password</Text>
          <Checkbox 
            color={'#003366'}
        status={passwordcheck ? 'checked' : 'unchecked'}
        onPress={() => { this.setState({ passwordcheck: !passwordcheck }); }}
      />
      </View>
      
      <View style={{margin:2,flex:1,justifyContent:'center',alignItems:'center'}}>
      <Text style={{fontSize:16,fontWeight:'bold'}} >Contact</Text>
        <Checkbox 
          color={'#003366'}
        status={contactcheck ? 'checked' : 'unchecked'}
        onPress={() => { this.setState({ contactcheck: !contactcheck }); }}
      />
      </View>
            </View>


            <ScrollView  ref="myScrollView" style={{backgroundColor:'#d3d3d3'}}>
            <View>
              
         {this.state.namecheck?
         (<TextInput
        label='Name'        
          style={{marginBottom:5,backgroundColor:'#d3d3d3'}}

          

        value={this.state.username}
        onChangeText={username => this.setState({ username })}
        type='outlined'
      />):(null)}   

      {this.state.passwordcheck?(<View> 
        <TextInput
        label='Old Password'        
          style={{marginBottom:5,backgroundColor:'#d3d3d3'}}
        value={this.state.oldpassword}
        onChangeText={oldpassword => this.setState({ oldpassword })}
        type='outlined'
      />
        <TextInput
        label='New Password'        
          style={{marginBottom:5,backgroundColor:'#d3d3d3'}}
        value={this.state.newpassword}
        onChangeText={newpassword => this.setState({ newpassword })}
        type='outlined'
      />
      </View>):(null)} 
           
      {this.state.contactcheck?(<TextInput
        label='Contact'        
          style={{marginBottom:5,backgroundColor:'#d3d3d3'}}

          

        value={this.state.contact}
        onChangeText={contact => this.setState({ contact })}
        type='outlined'
      />):(null)}  
      
              </View>
              
          <Button
          disabled={this.state.namecheck||this.state.contactcheck||this.state.passwordcheck?false:true}
 icon="add-a-photo"
  loading={this.state.loading}
  style={{marginTop:30,backgroundColor:'#003366'}}
mode="contained" onPress={() => this.updateProfile(this.state.oldpassword,this.state.newpassword,this.state.username,this.state.contact)}>
UpdateProfile  </Button> 
</ScrollView>
            </View>
      </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  header:{
    backgroundColor: "#fff",
    marginTop:20
  },
  headerContent:{
    padding:30,
    alignItems: 'center',
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom:10,
  },
  name:{
    fontSize:22,
    color:"#000000",
    fontWeight:'600',
  },
  userInfo:{
    fontSize:16,
    color:"#778899",
    fontWeight:'600',
  },
  body:{
    backgroundColor: "#d3d3d3",
    // height:400,
    // alignItems:'center',
  },
  item:{
    flexDirection : 'row',
  },
  infoContent:{
    flex:1,
    alignItems:'flex-start',
    paddingLeft:5
  },
  iconContent:{
    flex:1,
    alignItems:'flex-end',
    paddingRight:5,
  },
  icon:{
    width:30,
    height:30,
    marginTop:20,
  },
  info:{
    fontSize:18,
    marginTop:20,
    color: "#FFFFFF",
  }
});
 


function mapstatetoprops(state){
  return{
currentUser:state.Appdata.CurrentUser
}
}

function mapdispatchtoprops(){
  return{}
}
export default connect(mapstatetoprops,mapdispatchtoprops)(UserProfileView)