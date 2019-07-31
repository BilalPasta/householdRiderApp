import { TextInput,Button,Switch ,Provider as PaperProvider} from 'react-native-paper';
import {View,Text,Image,ScrollView,InteractionManager,ActivityIndicator} from 'react-native';
import React,{Component} from 'react';
// import fb from '../firebase';
import firebase from 'react-native-firebase';
import {connect} from 'react-redux';
import {LoginUserData} from '../Components/store/action/index';
import Toast from 'react-native-root-toast';

class Login extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      ShowScreen:false,
      email: '',
      password:'',
      requestsend:false,
      feedbackmessage:'All fields are required'

    };
    this.loginAccount=this.loginAccount.bind(this);
  }
 
componentDidMount(){
  InteractionManager.runAfterInteractions(() => {
    
    this.setState({
      ShowScreen: true,
    });
  });
}

  loginAccount=(email,password)=>{
    const {requestsend}=this.state;
  
    if(email!=''&&password!=''){
      
      this.setState({requestsend:!requestsend})
    firebase.auth().signInWithEmailAndPassword(email, password).catch((error)=> {
      // Handle Errors here.
      var errorCode = error.code;
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
      
      // ...
    }).then((user)=>{
      // console.log(user.user.uid);
    if(user!=null){
      firebase.database().ref(`/`).child('stripe_customers').child(user.user.uid).on('value',(obj)=>{
        let objec=obj.val()
        objec.uid=obj.key;
        // console.log(objec);



        if(objec.usertype=='user'){
          // alert()
          this.props.LoginUserData(objec);

        this.setState({feedbackmessage:'Account login successfully',requestsend:false});
        this.props.navigation.navigate('OrderLIst');}
        else{
          // alert()
          this.setState({feedbackmessage:'Account not valid',requestsend:false});
  
        }

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



      })
      console.log(objec);
     


    

      
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
<PaperProvider>
        <View style={{flex:1}}>
        <View style={{flex:1}}>
<Image source={require('./assets/logo.png')} /> 
          </View>
          <View style={{flex:1}}>
      <TextInput
          style={{marginBottom:10,backgroundColor:'#d3d3d3',color:'black'}}
              keyboardType={'email-address'}
             
        label='Email'
        value={this.state.email}
        onChangeText={email => this.setState({ email })}
        type='outlined'
      />
       <TextInput
        label='Password'        
          style={{marginBottom:10,backgroundColor:'#d3d3d3'}}

          

        value={this.state.password}
        onChangeText={password => this.setState({ password })}
        type='outlined'
        secureTextEntry={true} 
      />

 <Button icon="add-a-photo"
  loading={this.state.requestsend}
  style={{marginTop:30,backgroundColor:'#003366'}}
mode="contained" onPress={() => this.loginAccount(this.state.email,this.state.password)}>
Login  </Button> 

<Button
 icon="add-a-photo"
  
  style={{marginTop:30,backgroundColor:'#003366'}}
mode="contained" onPress={() =>
 this.props.navigation.navigate('SignUpScreen')
}
 >
SignUp  </Button> 

      </View>
      </View>
      </PaperProvider>
      </ScrollView>):
      (<ActivityIndicator size="large" style={{flex:1,alignItems:'center',justifyContent:'center'}}  color="#003366"/>)
    );
  }
}

function mapstatetoprops(state){
  return{

  }
}


function mapdispatchtoprops(dispatch){
return{
  LoginUserData:(obj)=>{
    dispatch(LoginUserData(obj))
  }
}
}

export default connect(mapstatetoprops,mapdispatchtoprops)(Login)




