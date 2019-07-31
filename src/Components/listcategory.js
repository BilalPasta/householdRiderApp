import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView ,ActivityIndicator,InteractionManager} from 'react-native';
// import { Card, CardSection } from './Index';
import CardSection from './cartsection'
import Card from './card';
import Header from './header';
import {connect} from 'react-redux';
import {AddItemToCart} from './store/action/index';


class ListCategory extends Component {




  constructor(props){
    super(props);
    this.state={
      ShowScreen: true,


    }
    this.props.navigation.closeDrawer();
  }
  render() {
    return (
      <View style={{backgroundColor:'#d3d3d3',flex:1}}>
     { this.state.ShowScreen?(
        <View  >
         <Header     opendrawer={()=>this.props.navigation.openDrawer()} title={'CATEGORIES'} opencart={()=>this.props.navigation.navigate('CartDisplay')}/>

      <ScrollView>
{this.props.Appdata.CategoryWithMenu.map((categoryObject,categoryindex)=><TouchableOpacity 
  key={categoryindex}
onPress={() =>{
 this.props.navigation.navigate('CategoryRelatedItems',{Menu:categoryObject,CategoryIndex:categoryindex})


}
 }>
<Card>
  <CardSection>
    <View style={styles.thumbnailStyle}>
      <Image source={{uri:categoryObject.imageUrl}} style={styles.thumbnailImage} />
      
    </View>

    <View style={styles.infoStyle}>
      <Text style={styles.infoTextStyle}> {categoryObject.categoryname} </Text>
      <Text style={styles.infoTextStyle}> {categoryObject.description} </Text>
    </View>
  </CardSection>
</Card>
</TouchableOpacity>)}
        


      </ScrollView>
      </View>):
      (<ActivityIndicator size="large" style={{flex:1,alignItems:'center',justifyContent:'center'}}  color="#db0000"/>)
        } 
        </View> );
  }



  componentDidMount(){
    InteractionManager.runAfterInteractions(() => {
    
      this.setState({
        ShowScreen: true,
      });
    });
   }
}

const styles = StyleSheet.create({
  thumbnailImage: {
    width: 60,
    height: 95,
  },
  thumbnailStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 5,
    marginRight: 15,
  },
  infoStyle: {
    marginTop: 25,
    flexDirection: 'column',
  },
  infoTextStyle: {
    color: '#000000',
    fontSize: 15,
    fontFamily: 'serif',
  },
});


function mapstatetoprops(state){
  return{
Appdata:state.Appdata
  }
}

function mapdispatchtoprops(){
  return{
    AddItemToCart:(itemobj,categoryname)=>{
      dispatch(AddItemToCart(itemobj,categoryname));

    }

  }
}


export default connect(mapstatetoprops,mapdispatchtoprops)(ListCategory)