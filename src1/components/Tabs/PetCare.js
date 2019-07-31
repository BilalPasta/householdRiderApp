import React from 'react';
import { Text, View, ScrollView } from 'react-native';
import Category from '../Category';

const PetCare = () => (

  <ScrollView>
    <View style={{ marginTop: 20 }}>
      <Text
      style={{
        marginLeft: 7,
        marginBottom: 7,
        fontSize: 20,
        fontWeight: 'bold', }}
      > Cat Food </Text>

    <ScrollView horizontal>

    <Category
        imageURL={require('../assets/grocery.png')}
        name={'Pet Care'}
        quantity={'03'}
        price={'100'}
    />

    <Category
        imageURL={require('../assets/grocery.png')}
        name={'Pet Care'}
        quantity={'03'}
        price={'100'}
    />

    <Category
        imageURL={require('../assets/grocery.png')}
        name={'Pet Care'}
        quantity={'03'}
        price={'100'}
    />

    <Category
        imageURL={require('../assets/grocery.png')}
        name={'Pet Care'}
        quantity={'03'}
        price={'100'}
    />

    <Category
        imageURL={require('../assets/grocery.png')}
        name={'Pet Care'}
        quantity={'03'}
        price={'100'}
    />

      </ScrollView>
    </View>

    <View style={{ marginTop: 20 }}>
      <Text
      style={{
        marginLeft: 7,
        marginBottom: 7,
        fontSize: 20,
        fontWeight: 'bold', }}
      > Dog Food </Text>

    <ScrollView horizontal>

    <Category
        imageURL={require('../assets/grocery.png')}
        name={'Pet Care'}
        quantity={'03'}
        price={'100'}
    />

    <Category
        imageURL={require('../assets/grocery.png')}
        name={'Pet Care'}
        quantity={'03'}
        price={'100'}
    />

    <Category
        imageURL={require('../assets/grocery.png')}
        name={'Pet Care'}
        quantity={'03'}
        price={'100'}
    />

    <Category
        imageURL={require('../assets/grocery.png')}
        name={'Pet Care'}
        quantity={'03'}
        price={'100'}
    />

    <Category
        imageURL={require('../assets/grocery.png')}
        name={'Pet Care'}
        quantity={'03'}
        price={'100'}
    />

      </ScrollView>
    </View>
  </ScrollView>
);

export { PetCare };
