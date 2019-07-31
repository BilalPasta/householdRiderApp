import React from 'react';
import { Text, View, ScrollView } from 'react-native';
import Category from '../Category';
import firebase from 'firebase';


class App extends React.Component {
componentWillMount() {
    var config = {
        apiKey: "AIzaSyCWNMsBzJWHAWOgrT-FzrpFlLDSpXmOSa0",
        authDomain: "aohg-6ccb5.firebaseapp.com",
        databaseURL: "https://aohg-6ccb5.firebaseio.com",
        projectId: "aohg-6ccb5",
        storageBucket: "aohg-6ccb5.appspot.com",
        messagingSenderId: "47355898209"
      };
      firebase.initializeApp(config);
      firebase.database().ref('user/001').set({
        name:'BabyLotion',
        price:100

      }
      ).then(()=>{
          console.log('Inserted');
      }).catch((error) => {
        console.log(error);
       });
}
}

const BabyCare = () => (

  <ScrollView>
    <View style={{ marginTop: 20 }}>
      <Text
      style={{
        marginLeft: 7,
        marginBottom: 7,
        fontSize: 20,
        fontWeight: 'bold', }}
      > Diaper & Wipes </Text>

    <ScrollView horizontal>

    <Category
        imageURL={require('../assets/grocery.png')}
        name={'Baby Care'}
        quantity={'03'}
        price={'100'}
    />
      </ScrollView>
    </View>
  </ScrollView>
);

export { BabyCare };
