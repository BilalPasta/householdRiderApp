import React,{Component} from 'react';
import { CreditCardInput, LiteCreditCardInput } from "react-native-credit-card-input";
import {View} from 'react-native'
import { TextInput,Button,Switch ,Provider as PaperProvider} from 'react-native-paper';
import Stripe from 'react-native-stripe-api';
import Toast from 'react-native-root-toast';
import firebase from 'react-native-firebase';
import {connect} from 'react-redux';

const apiKey = 'pk_test_kp1eyoLWmXz3xWOs6Zl4WnNH';
const client = new Stripe(apiKey);
 class CreditCard extends React.Component{
constructor(props){
    super(props);
this.state={
    number:'',
    expiry:'',
    name:'',
    cvc:'',
    address_zip:'',
    requestsend:false,
    cardvalidation:false
}

this._onChange=this._onChange.bind(this);
}



getdata(){
    console.log(this.state)
}


async  gettoken (number,expiry,cvc,address_zip){

    if(number!=''&&expiry!=''&&cvc!=''&&address_zip!=''){
        let array=expiry.split('/');
    //    console.log(array)

      this.setState({requestsend:true})
    
        const token=    await client.createToken({
                number: number ,
                exp_month: array[0], 
                exp_year: array[1], 
                cvc: cvc,
                address_zip: address_zip
             });
             
    if(!token.error){
      firebase.database().ref(`/stripe_customers/${this.props.currentUser.uid}/sources`).push({token: token.id}).then(()=>{
     this.setState({requestsend:false})
        Toast.show('Payment source has been transfered sucessfully ', {
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
     }
    else{
      this.setState({requestsend:false});
      Toast.show(token.error.message, {
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
      // console.log(token.error.message)
    }}
    else{
      Toast.show('All fields are required', {
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
    }
            
       }
     
_onChange = form =>
{ console.log(form);
this.setState({cardvalidation:form.valid,
    number:form.values.number,
    expiry:form.values.expiry,name:form.values.name,cvc:form.values.cvc,
    address_zip:form.values.postalCode,

})
this.getdata();

}
    render(){
        return(
            <View style={{marginTop:50}}>
<CreditCardInput onChange={this._onChange} requiresName  requiresPostalCode 

allowScroll={true} />
<Button 
           style={{backgroundColor:'#003366',marginTop:40}}
           mode="contained"
loading={this.state.requestsend}
           onPress={()=>{
               
               this.gettoken(this.state.number,this.state.expiry,this.state.cvc,this.state.address_zip)}}>
           done
             </Button>
</View>

        )
    }
}


function mapstatetoprops(state){
    return{
  currentUser:state.Appdata.CurrentUser
    }
  }
  
  function mapdispatchtoprops(){
    return{
  
    }
  }
  
  export default connect(mapstatetoprops,mapdispatchtoprops)(CreditCard)
  
  