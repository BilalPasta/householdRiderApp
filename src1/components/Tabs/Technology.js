import React from 'react';
import { Text, View, ScrollView } from 'react-native';
import Category from '../Category';

const Technology = () => (

  <ScrollView>

    <View style={{ marginTop: 20 }}>
      <Text
      style={{
        marginLeft: 7,
        marginBottom: 7,
        fontSize: 20,
        fontWeight: 'bold', }}
      > Smartphones </Text>

    <ScrollView horizontal>

    <Category
        imageURL={require('../assets/grocery.png')}
        name={'Technology'}
        quantity={'03'}
        price={'100'}
    />

    <Category
        imageURL={require('../assets/grocery.png')}
        name={'Technology'}
        quantity={'03'}
        price={'100'}
    />

    <Category
        imageURL={require('../assets/grocery.png')}
        name={'Technology'}
        quantity={'03'}
        price={'100'}
    />

    <Category
        imageURL={require('../assets/grocery.png')}
        name={'Technology'}
        quantity={'03'}
        price={'100'}
    />

    <Category
        imageURL={require('../assets/grocery.png')}
        name={'Technology'}
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
      > Laptops </Text>

    <ScrollView horizontal>

    <Category
        imageURL={require('../assets/grocery.png')}
        name={'Technology'}
        quantity={'03'}
        price={'100'}
    />

    <Category
        imageURL={require('../assets/grocery.png')}
        name={'Technology'}
        quantity={'03'}
        price={'100'}
    />

    <Category
        imageURL={require('../assets/grocery.png')}
        name={'Technology'}
        quantity={'03'}
        price={'100'}
    />

    <Category
        imageURL={require('../assets/grocery.png')}
        name={'Technology'}
        quantity={'03'}
        price={'100'}
    />

    <Category
        imageURL={require('../assets/grocery.png')}
        name={'Technology'}
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
      > Tablets </Text>

    <ScrollView horizontal>

    <Category
        imageURL={require('../assets/grocery.png')}
        name={'Technology'}
        quantity={'03'}
        price={'100'}
    />

    <Category
        imageURL={require('../assets/grocery.png')}
        name={'Technology'}
        quantity={'03'}
        price={'100'}
    />

    <Category
        imageURL={require('../assets/grocery.png')}
        name={'Technology'}
        quantity={'03'}
        price={'100'}
    />

    <Category
        imageURL={require('../assets/grocery.png')}
        name={'Technology'}
        quantity={'03'}
        price={'100'}
    />

    <Category
        imageURL={require('../assets/grocery.png')}
        name={'Technology'}
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
      > Computing Accessories </Text>

    <ScrollView horizontal>

    <Category
        imageURL={require('../assets/grocery.png')}
        name={'Technology'}
        quantity={'03'}
        price={'100'}
    />

    <Category
        imageURL={require('../assets/grocery.png')}
        name={'Technology'}
        quantity={'03'}
        price={'100'}
    />

    <Category
        imageURL={require('../assets/grocery.png')}
        name={'Technology'}
        quantity={'03'}
        price={'100'}
    />

    <Category
        imageURL={require('../assets/grocery.png')}
        name={'Technology'}
        quantity={'03'}
        price={'100'}
    />

    <Category
        imageURL={require('../assets/grocery.png')}
        name={'Technology'}
        quantity={'03'}
        price={'100'}
    />

      </ScrollView>
    </View>

  </ScrollView>
);

export { Technology };
