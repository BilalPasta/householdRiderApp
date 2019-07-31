import React from 'react';
import { Text, View, ScrollView } from 'react-native';
import Category from '../Category';

const FruVeg = () => (

  <ScrollView>
    <View style={{ marginTop: 20 }}>
      <Text
      style={{
        marginLeft: 7,
        marginBottom: 7,
        fontSize: 20,
        fontWeight: 'bold', }}
      > Vegetables </Text>

    <ScrollView horizontal>

    <Category
        imageURL={require('../assets/grocery.png')}
        name={'Fruits & Vegetables'}
        quantity={'03'}
        price={'100'}
    />

    <Category
        imageURL={require('../assets/grocery.png')}
        name={'Fruits & Vegetables'}
        quantity={'03'}
        price={'100'}
    />

    <Category
        imageURL={require('../assets/grocery.png')}
        name={'Fruits & Vegetables'}
        quantity={'03'}
        price={'100'}
    />

    <Category
        imageURL={require('../assets/grocery.png')}
        name={'Fruits & Vegetables'}
        quantity={'03'}
        price={'100'}
    />

    <Category
        imageURL={require('../assets/grocery.png')}
        name={'Fruits & Vegetables'}
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
      > Fruits </Text>

    <ScrollView horizontal>

    <Category
        imageURL={require('../assets/grocery.png')}
        name={'Fruits & Vegetables'}
        quantity={'03'}
        price={'100'}
    />

    <Category
        imageURL={require('../assets/grocery.png')}
        name={'Fruits & Vegetables'}
        quantity={'03'}
        price={'100'}
    />

    <Category
        imageURL={require('../assets/grocery.png')}
        name={'Fruits & Vegetables'}
        quantity={'03'}
        price={'100'}
    />

    <Category
        imageURL={require('../assets/grocery.png')}
        name={'Fruits & Vegetables'}
        quantity={'03'}
        price={'100'}
    />

    <Category
        imageURL={require('../assets/grocery.png')}
        name={'Fruits & Vegetables'}
        quantity={'03'}
        price={'100'}
    />

      </ScrollView>
    </View>
  </ScrollView>
);

export { FruVeg };
