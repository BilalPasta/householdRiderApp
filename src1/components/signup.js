import { TextInput,Button,Switch } from 'react-native-paper';
import {View,Text,Image,ScrollView,InteractionManager,ActivityIndicator} from 'react-native';
import React,{Component} from 'react';
// import firebase from '../firebase';
import firebase from 'react-native-firebase';
import Toast from 'react-native-root-toast';


export default class SignUp extends React.Component {
  constructor(props){
super(props);
    this.state = {
      ShowScreen:false,
      username:''
,   email: '',
    password:'',
   usertype:'user',
    feedbackmessage:'All fields are required',
    requestsend:false,
    contact:''
  };
  this.signupAccount=this.signupAccount.bind(this);
  }



  componentDidMount(){
    InteractionManager.runAfterInteractions(() => {
    
      this.setState({
        ShowScreen: true,
      });
    });
  }

  signupAccount=(username,email,password,contact)=>{
    
    const {requestsend}=this.state;
  
    if(email!=''&&password!=''&&contact!=''&&username!=''){
      this.setState({requestsend:!requestsend})
    firebase.auth().createUserWithEmailAndPassword(email, password).catch((error)=> {
        var errorMessage = error.message;
        this.setState({feedbackmessage:errorMessage,requestsend:false})

        Toast.show(this.state.feedbackmessage, {
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

        // console.log(errorCode);

        // ...
      }).then((result)=>{
        // console.log(result)
        if(result!=null){
        let obj=this.state;
        delete this.state.requestsend;
        delete this.state.feedbackmessage;
        
        // delete this.state.ShowScreen;
        // console.log(result);
        firebase.database().ref(`stripe_customers/${result.user.uid}/`).update(obj);
        // console.log(result);
        // var successmessage=result.message;
// this.setState({feedbackmessage:successmessage, requestsend:!requestsend})
this.setState({feedbackmessage:'Account signup Successfully',requestsend:false});

Toast.show(this.state.feedbackmessage, {
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
// alert('');

        }
      })
      
  }
else{
 Toast.show(this.state.feedbackmessage, {
  duration: 200,
  position: Toast.positions.BOTTOM,
  shadow: true,
  animation: true,
  hideOnPress: true,
  delay: 0,
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
}



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


  render(){
    return (
      this.state.ShowScreen?
      (
      <ScrollView ref="myScrollView" style={{backgroundColor:'#d3d3d3'}}>
        <View style={{flex:1}}>
        <View style={{flex:1}}>
<Image source={require('./assets/logo.png')} style={{height:250}}/>
          </View>
        <View style={{flex:1}}>
     


        <TextInput 
label='Name'
style={{marginBottom:10,backgroundColor:'#d3d3d3'}}
value={this.state.username}
onChangeText={username => this.setState({ username })}
type='Outlined'
keyboardAppearance='dark'
keyboardType={'default'}

/>  
      <TextInput 
        label='Email'
        style={{marginBottom:10,backgroundColor:'#d3d3d3'}}
        value={this.state.email}
        onChangeText={email => this.setState({ email })}
        type='Outlined'
        keyboardAppearance='dark'
        keyboardType={'email-address'}

        // error={(this.state.feedbackmessage=='The email address is badly formatted.')?true:false}
      />
       <TextInput

               style={{marginBottom:10,backgroundColor:'#d3d3d3'}}
        label='Password'
        value={this.state.password}
        onChangeText={password => this.setState({ password })}
        type='Outlined'
        secureTextEntry={true} 
        // error={(this.state.feedbackmessage=='Password should be at least 6 characters')?true:false}
      />
      <TextInput
   
        label='Contact'
        style={{marginBottom:10,backgroundColor:'#d3d3d3'}}
        keyboardType={'phone-pad'}
        value={this.state.contact}
        onChangeText={contact => this.setState({ contact })}
        type='Outlined'
        
        // error={(this.state.contact.length!=11)?true:false}
      />
      {/* <View style={{flexDirection:'row'}}>

<Text style={{justifyContent:'center',alignItems: 'center',paddingLeft:5}}>user
  </Text>
 <Switch
       style={{flex:1}}
       color={'#00008b'}
  value={this.state.userType.user}
  onValueChange={() =>
    { 
      const {userType}=this.state;
     
      const {user}=this.state.userType;
      const {rider}=this.state.userType;
      userType.rider=!rider;
      userType.user=!user;

      this.setState({ userType:userType});
     }
  }
/>

<Text  style={{justifyContent:'center',alignItems: 'center',paddingLeft:5}}>rider
  </Text>
 
<Switch
       style={{flex:1}}
       color={'#00008b'}
  value={this.state.userType.rider}
  onValueChange={() =>
    { 
      const {userType}=this.state;
     
      const {user}=this.state.userType;
      const {rider}=this.state.userType;
      userType.rider=!rider;
      userType.user=!user;

      this.setState({ userType:userType});
     }
  }
/>

</View>  */}
<Button
 loading={this.state.requestsend}
 icon="add-a-photo" 
style={{marginTop:30,backgroundColor:'#003366'}}
mode="contained" onPress={() =>this.signupAccount(this.state.username,this.state.email,this.state.password,this.state.contact)}>
SignUp  </Button> 
       </View>
  
      </View>
      </ScrollView>):
      (<ActivityIndicator size="large" style={{flex:1,alignItems:'center',justifyContent:'center'}}  color="#003366"/>)
    );
  }
}





// import React, { Component } from 'react';
// import {
//   StyleSheet,
//   Text,
//   View,
//   TextInput,
//   Button,
//   TouchableHighlight,
//   Image,
//   Alert
// } from 'react-native';

// export default class ContactView extends Component {

//   constructor(props) {
//     super(props);
//     state = {
//       email   : '',
//       password: '',
//     }
//   }

//   onClickListener = (viewId) => {
//     Alert.alert("Alert", "Button pressed "+viewId);
//   }

//   render() {
//     return (
//       <View style={styles.container}>
//         <Image style={styles.logo} source={{uri: 'https://png.icons8.com/google/color/120'}}/>

//         <View style={styles.inputContainer}>
//           <Image style={styles.inputIcon} source={{uri: 'https://png.icons8.com/user/ultraviolet/50/3498db'}}/>
//           <TextInput style={styles.inputs}
//               placeholder="Name"
//               underlineColorAndroid='transparent'
//               onChangeText={(email) => this.setState({email})}/>
//         </View>
        
//         <View style={styles.inputContainer}>
//           <Image style={styles.inputIcon} source={{uri: 'https://png.icons8.com/message/ultraviolet/50/3498db'}}/>
//           <TextInput style={styles.inputs}
//               placeholder="Email"
//               underlineColorAndroid='transparent'
//               onChangeText={(password) => this.setState({password})}/>
//         </View>

        
//         <View style={styles.inputContainer}>
//           <Image style={styles.inputIcon} source={{uri: 'https://png.icons8.com/speech-bubble/ultraviolet/50'}}/>
//           <TextInput style={[ styles.messageInput]}
//               placeholder="Message"
//               underlineColorAndroid='transparent'
//               onChangeText={(password) => this.setState({password})}/>
//         </View>

//         <TouchableHighlight style={[styles.buttonContainer, styles.sendButton]} onPress={() => this.onClickListener('login')}>
//           <Text style={styles.buttonText}>Send</Text>
//         </TouchableHighlight>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#DCDCDC',
//   },
//   logo:{
//     width:120,
//     height:120,
//     justifyContent: 'center',
//     marginBottom:20,
//   },
//   inputContainer: {
//       borderBottomColor: '#F5FCFF',
//       backgroundColor: '#FFFFFF',
//       borderRadius:30,
//       borderBottomWidth: 1,
//       width:250,
//       height:45,
//       marginBottom:20,
//       flexDirection: 'row',
//       alignItems:'center'
//   },
//   inputs:{
//       height:45,
//       marginLeft:16,
//       borderBottomColor: '#FFFFFF',
//       flex:1,
//   },
//   inputIcon:{
//     width:30,
//     height:30,
//     marginLeft:15,
//     justifyContent: 'center'
//   },
//   buttonContainer: {
//     height:45,
//     flexDirection: 'row',
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginBottom:20,
//     width:100,
//     borderRadius:30,
//   },
//   sendButton: {
//     backgroundColor: "#FF4500",
//   },
//   buttonText: {
//     color: 'white',
//   }
// }); 


