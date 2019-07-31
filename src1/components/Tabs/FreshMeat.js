import React from 'react';
import { Text, View, ScrollView } from 'react-native';
import Category from '../Category';

const FreshMeat = () => (

  <ScrollView>
    <View style={{ marginTop: 20 }}>
      <Text
      style={{
        marginLeft: 7,
        marginBottom: 7,
        fontSize: 20,
        fontWeight: 'bold', }}
      > Mutton </Text>

    <ScrollView horizontal>

    <Category
        imageURL={require('../assets/grocery.png')}
        name={'Fresh Meat'}
        quantity={'03'}
        price={'100'}
    />

    <Category
        imageURL={require('../assets/grocery.png')}
        name={'Fresh Meat'}
        quantity={'03'}
        price={'100'}
    />

    <Category
        imageURL={require('../assets/grocery.png')}
        name={'Fresh Meat'}
        quantity={'03'}
        price={'100'}
    />

    <Category
        imageURL={require('../assets/grocery.png')}
        name={'Fresh Meat'}
        quantity={'03'}
        price={'100'}
    />

    <Category
        imageURL={require('../assets/grocery.png')}
        name={'Fresh Meat'}
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
      > Veal </Text>

    <ScrollView horizontal>

    <Category
        imageURL={require('../assets/grocery.png')}
        name={'Fresh Meat'}
        quantity={'03'}
        price={'100'}
    />

    <Category
        imageURL={require('../assets/grocery.png')}
        name={'Fresh Meat'}
        quantity={'03'}
        price={'100'}
    />

    <Category
        imageURL={require('../assets/grocery.png')}
        name={'Fresh Meat'}
        quantity={'03'}
        price={'100'}
    />

    <Category
        imageURL={require('../assets/grocery.png')}
        name={'Fresh Meat'}
        quantity={'03'}
        price={'100'}
    />

    <Category
        imageURL={require('../assets/grocery.png')}
        name={'Fresh Meat'}
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
      > Beef </Text>

    <ScrollView horizontal>

    <Category
        imageURL={require('../assets/grocery.png')}
        name={'Fresh Meat'}
        quantity={'03'}
        price={'100'}
    />

    <Category
        imageURL={require('../assets/grocery.png')}
        name={'Fresh Meat'}
        quantity={'03'}
        price={'100'}
    />

    <Category
        imageURL={require('../assets/grocery.png')}
        name={'Fresh Meat'}
        quantity={'03'}
        price={'100'}
    />

    <Category
        imageURL={require('../assets/grocery.png')}
        name={'Fresh Meat'}
        quantity={'03'}
        price={'100'}
    />

    <Category
        imageURL={require('../assets/grocery.png')}
        name={'Fresh Meat'}
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
      > Chicken </Text>

    <ScrollView horizontal>

    <Category
        imageURL={require('../assets/grocery.png')}
        name={'Fresh Meat'}
        quantity={'03'}
        price={'100'}
    />

    <Category
        imageURL={require('../assets/grocery.png')}
        name={'Fresh Meat'}
        quantity={'03'}
        price={'100'}
    />

    <Category
        imageURL={require('../assets/grocery.png')}
        name={'Fresh Meat'}
        quantity={'03'}
        price={'100'}
    />

    <Category
        imageURL={require('../assets/grocery.png')}
        name={'Fresh Meat'}
        quantity={'03'}
        price={'100'}
    />

    <Category
        imageURL={require('../assets/grocery.png')}
        name={'Fresh Meat'}
        quantity={'03'}
        price={'100'}
    />

      </ScrollView>
    </View>
  </ScrollView>
);

export { FreshMeat };
