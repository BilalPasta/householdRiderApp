import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import  Button  from './button';
import { connect } from 'react-redux';
import {AddItemToCart,RemoveItemToCart} from './store/action/index';



class Items extends Component {
  constructor(props){
    super(props);
    this.state={
      buttontext:'Add to cart'
    }
  }
  render() {
  let Indexes={
    categoryindex:this.props.CategoryIndex,
    subcategoryindex:this.props.SubcategoryIndex,
    itemindex:undefined
     
  }
    return (
      this.props.itemlist.map((itemobject,itemindex)=>  <View 
    key={itemindex}
    style={styles.container}>

      <View style={{ flex: 2 }}>
          <Image
          source={{uri:itemobject.imageUrl}}
          style={styles.imageStyle}
          
          />
      </View>

      <View style={styles.textStyle}>
        <Text> {itemobject.itemname} ( {this.props.quantity} ) </Text>
        <Text> Rs. {itemobject.itemprice} </Text>
      </View>
  <Button
   onPress={() =>{ 
    Indexes.itemindex=itemindex;
  if(!itemobject.cartstatus){
  this.props.AddItemToCart(this.props.Categoryname,this.props.Subcategoryname,itemobject,Indexes)
  }
  else{
    // this.props.RemoveItemToCart(this.props.Categoryname,this.props.Subcategoryname,itemobject,Indexes)
    // this.setState({buttontext:'Remove Cart'})
  }

} }>
    {/* {this.state.buttontext} */}
    Add to Cart
  </Button>

    </View>)
    
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 190,
    width: 180,
    marginLeft: 10,
    borderWidth: 0.3,
    borderColor: '#808080',
  },
  imageStyle: {
    flex: 1,
    height: null,
    width: null,
    marginTop: 5,
  },
  textStyle: {
    flex: 1,
    paddingLeft: 10,
    paddingTop: 10,
  },
});



function mapstatetoprops(state){
  return{
Appdata:state.Appdata
  }
}

function mapdispatchtoprops(dispatch){
  return{
    AddItemToCart:(categoryname,subcategoryname,itemobj,Indexes)=>{
      dispatch(AddItemToCart(categoryname,subcategoryname,itemobj,Indexes));

    },
    RemoveItemToCart:(categoryname,subcategoryname,itemobj,Indexes)=>{
dispatch(RemoveItemToCart((categoryname,subcategoryname,itemobj,Indexes)));
    }

  }
}
// export default connect(null, mapDispatchToProps)(Items);
export default connect(mapstatetoprops,mapdispatchtoprops)(Items);





{/* <Button onPress={() =>{ 

  let Indexes={
    categoryindex:this.props.CategoryIndex,
    subcategoryindex:this.props.SubcategoryIndex,
    itemindex:itemindex
  }
      itemobject.cartstatus?(this.props.RemoveItemToCart(this.props.Categoryname,this.props.Subcategoryname,itemobject,Indexes)):(this.props.AddItemToCart(this.props.Categoryname,this.props.Subcategoryname,itemobject,Indexes))
    } }>
      Add to Cart
    </Button> */}