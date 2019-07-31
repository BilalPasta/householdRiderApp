import React from 'react';
import { Text, View, ScrollView,InteractionManager ,ActivityIndicator} from 'react-native';
import Items from './items';
import Header from './header';




export default class CategoryRelatedItemsPage extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      ShowScreen: true,

    
    }





  }


  componentDidMount(){
    InteractionManager.runAfterInteractions(() => {
    
      this.setState({
        ShowScreen: true,
      });
    });
   }


  render() {
    const { params } = this.props.navigation.state;
    const RelatedMenu = params ? params.Menu : null;   
    const RelatedMenuIndex=params?params.CategoryIndex:null;
     return (
       <View style={{backgroundColor:'#d3d3d3',flex:1}}>
     { this.state.ShowScreen?(

      <View >
<Header     opendrawer={()=>this.props.navigation.openDrawer()} title={RelatedMenu.categoryname} opencart={()=>this.props.navigation.navigate('CartDisplay')}/>
        <ScrollView>
          {RelatedMenu.subcategoryitemlist.map((SubcategoryObject,SubcategoryIndex) =>
            <View key={SubcategoryIndex} style={{ marginTop: 20 }}>
              <Text
                style={{
                  marginLeft: 7,
                  marginBottom: 7,
                  fontSize: 20,
                  fontWeight: 'bold',
                }}
              > {SubcategoryObject.subcategoryname} </Text>

              <ScrollView horizontal>

                <Items itemlist={SubcategoryObject.itemlist} Categoryname={RelatedMenu.categoryname} Subcategoryname={SubcategoryObject.subcategoryname} CategoryIndex={RelatedMenuIndex} SubcategoryIndex={SubcategoryIndex} />

              </ScrollView>
            </View>)}



        </ScrollView>
      </View>
    ):(<ActivityIndicator size="large" style={{flex:1,alignItems:'center',justifyContent:'center'}}  color="#db0000"/>)
                 } 
                 </View>  ) }
  
}



