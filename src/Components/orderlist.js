// import React ,{Component} from 'react'
// import {connect} from 'react-redux';

// class OrderList extends React.Component{


//     render(){
// return(
//     <View>
//     <Header     opendrawer={()=>this.props.navigation.openDrawer()} title={'Order List'} opencart={()=>this.props.navigation.navigate('CartDisplay')}/>
// </View>
// )
//     }
// }








import {connect} from 'react-redux';

import * as React from 'react';
import { List, Checkbox,Snackbar, FAB, Portal ,Provider as PaperProvider } from 'react-native-paper';
import {View,Text,ActivityIndicator,InteractionManager,ScrollView,TextInput,StatusBar} from 'react-native'
import Header from './header';

import firebase from 'react-native-firebase';

class OrderList extends React.Component {



  static navigationOptions = {
    title: 'Orders List',
  };
  constructor(props){
    super(props);
    this.state = {
      expanded: false,
      ShowScreen: false,
      orderlist:null
    }


    this._handlePress=this._handlePress.bind(this);
    this.GetOrders=this.GetOrders.bind(this);

  }
 

  _handlePress = (index) =>
  {
    orderlist=this.state.orderlist;
    orderlist[index].expand=!orderlist[index].expand


    this.setState({orderlist:[...orderlist]})
  }
    // this.setState({
    //   expanded: !this.state.expanded
    // });



    componentDidMount(){
        InteractionManager.runAfterInteractions(() => {
        
          this.setState({
            ShowScreen: true,
          });
        });
       }
    


//     GetOrders(){
//       let orderslist=[];
//         console.log(this.props.currentUser.uid);
// firebase.database().ref('/').child(`orders`).on('value',(data)=>{
// // console.log(data.val());
// // this.setState({orderlist:data.val()})
// if(data.exists()){
//   data.forEach((orderdetails)=>{
//     let order=orderdetails.val();
//     order.id=orderdetails.key;
//     order.expand=false;
//     orderslist.push(order)
//   })
//   this.setState({orderlist:orderslist});
//   console.log('orderslist');
//   console.log(orderslist);
//   // var sessionsRef = firebase.database().ref("sessions");

//   // sessionsRef.push({
//   //   startedAt: firebase.database.ServerValue.TIMESTAMP
//   // }).then((data)=>{
//   //   console.log(data.val())
//   // });

//   // fb=firebase.database.ServerValue.TIMESTAMP;
//   // console.log(fb);
// }
// else{
// this.setState({orderlist:'No Order'})

// }

// // console.log(orders);
// // data.exists()?console.log('exits'):console.log('not exist');
// })

//     }

GetOrders(){
  let orderslist=[];
    console.log(this.props.currentUser.uid);
firebase.database().ref('/').child(`orders`).on('child_added',(data)=>{
// alert();
// if(data.exists()){
//   data.forEach((orderdetails)=>{
//     let order=orderdetails.val();
//     order.id=orderdetails.key;
//     order.expand=false;
//     orderslist.push(order)
//   })
var obj=data.val();
obj.id=data.key;
orderslist.push(obj)

this.setState({orderlist:orderslist});
// console.log('orderslist');
// console.log(orderslist);
// var sessionsRef = firebase.database().ref("sessions");

// sessionsRef.push({
//   startedAt: firebase.database.ServerValue.TIMESTAMP
// }).then((data)=>{
//   console.log(data.val())
// });

// fb=firebase.database.ServerValue.TIMESTAMP;
// console.log(fb);
// }
// else{
// this.setState({orderlist:'No Order'})

// }

// console.log(orders);
// data.exists()?console.log('exits'):console.log('not exist');
})

}
    componentWillMount(){
        this.GetOrders()
    }
    


    checkid(index,id){

    }

  render() {
    return (
    this.state.ShowScreen&&this.state.orderlist!=null?(
      <PaperProvider>
                {/* <StatusBar
          barStyle="dark-content"
          backgroundColor="#0ead00"
        /> */}
 
      <ScrollView>
    <View>
        
            {/* <Header     opendrawer={()=>this.props.navigation.openDrawer()} title={'Order List'} opencart={()=>this.props.navigation.navigate('CartDisplay')}/> */}
      <List.Section title="Orders">
   {this.state.orderlist.map((data,index)=>{
return(
  <List.Accordion
      title={`${data.customername}`}
      description={`${data.date}`}
      expanded={data.expand}
      onPress={()=>this._handlePress(index)}
    >
    <View style={{flexDirection:'row'}}>
     <List.Subheader style={{flex:2}}>{`ID  ${data.id}`}</List.Subheader>
     <List.Subheader style={{flex:1}}>{`${data.deliverstatus?'Delivered':'Not Delivered'}`}</List.Subheader>

     </View>
     <View style={{flexDirection:'row'}}>

     <List.Subheader style={{flex:1}}>Item name</List.Subheader>
     <List.Subheader  style={{flex:1}}>Price X Quantity</List.Subheader>
</View>
     
{data.order.map((orders)=>
  <View style={{flexDirection:'row'}}>

  <List.Item style={{flex:1}} title={`${orders.itemdetails.itemname}`} />
  <List.Item style={{flex:1}}  title={`${orders.itemdetails.itemprice} X ${orders.count}`} />

  </View>)}
     

      {/* <View style={{flexDirection:'row'}}>

<List.Item style={{flex:1}} title="Total " />
<List.Item style={{flex:1}}  titleEllipsizeMode={'head'} title="800" />
</View> */}

    </List.Accordion>
)
   })}
      
 
        {/* <List.Accordion
          title="Controlled Accordion"
          description="Item description"
          left={props => <List.Icon {...props} icon="folder" />}
          expanded={this.state.expanded}
          onPress={this._handlePress}
        >
          <List.Item title="First item" />
          <List.Item title="Second item" />
        </List.Accordion> */}
      </List.Section>
      </View>
      </ScrollView>

      </PaperProvider>):(<ActivityIndicator size="large" style={{flex:1,alignItems:'center',justifyContent:'center'}}  color="#0ead00"/>)
    );
  }
}

function mapstatetoprops(state){
    return{
Orderlist:state.Appdata,
currentUser:state.Appdata.CurrentUser,

    }
}

function mapdispatchtoprops(){
return{

}    
}

export default connect(mapstatetoprops,mapdispatchtoprops) (OrderList);