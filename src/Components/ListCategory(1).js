import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Card, CardSection } from './Index';

export default class ListCategory extends Component {
  render() {
    return (
      <ScrollView>

        <TouchableOpacity onPress={() => this.props.navigation.navigate('Technology')}>
          <Card>
            <CardSection>
              <View style={styles.thumbnailStyle}>
                <Image source={require('./assets/grocery.png')} style={styles.thumbnailImage} />
              </View>

              <View style={styles.infoStyle}>
                <Text style={styles.infoTextStyle}> Technology </Text>
                <Text style={styles.infoTextStyle}> Smartphones, Laptops </Text>
              </View>
            </CardSection>
          </Card>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => this.props.navigation.navigate('Grocery')}>
          <Card>
            <CardSection>
              <View style={styles.thumbnailStyle}>
                <Image source={require('./assets/grocery.png')} style={styles.thumbnailImage} />
              </View>

              <View style={styles.infoStyle}>
                <Text style={styles.infoTextStyle}> Grocery </Text>
                <Text style={styles.infoTextStyle}> Oil & Ghee, Daalain </Text>
              </View>
            </CardSection>
          </Card>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => this.props.navigation.navigate('FruVeg')}>
          <Card>
            <CardSection>
              <View style={styles.thumbnailStyle}>
                <Image source={require('./assets/grocery.png')} style={styles.thumbnailImage} />
              </View>

              <View style={styles.infoStyle}>
                <Text style={styles.infoTextStyle}> Fruits & Vegetables </Text>
                <Text style={styles.infoTextStyle}> Potato, Tomato, Apple </Text>
              </View>
            </CardSection>
          </Card>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => this.props.navigation.navigate('FreshMeat')}>
          <Card>
            <CardSection>
              <View style={styles.thumbnailStyle}>
                <Image source={require('./assets/grocery.png')} style={styles.thumbnailImage} />
              </View>

              <View style={styles.infoStyle}>
                <Text style={styles.infoTextStyle}> Fresh Meat </Text>
                <Text style={styles.infoTextStyle}> Mutton, Beef, Chicken, Fish </Text>
              </View>
            </CardSection>
          </Card>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => this.props.navigation.navigate('PersonalCare')}>
          <Card>
            <CardSection>
              <View style={styles.thumbnailStyle}>
                <Image source={require('./assets/grocery.png')} style={styles.thumbnailImage} />
              </View>

              <View style={styles.infoStyle}>
                <Text style={styles.infoTextStyle}> Personal Care </Text>
                <Text style={styles.infoTextStyle}> Shampoo, Soap, Body Spray </Text>
              </View>
            </CardSection>
          </Card>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => this.props.navigation.navigate('HomeCare')}>
          <Card>
            <CardSection>
              <View style={styles.thumbnailStyle}>
                <Image source={require('./assets/grocery.png')} style={styles.thumbnailImage} />
              </View>

              <View style={styles.infoStyle}>
                <Text style={styles.infoTextStyle}> Home Care </Text>
                <Text style={styles.infoTextStyle}> Cleaners, Detergents, Tissue </Text>
              </View>
            </CardSection>
          </Card>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => this.props.navigation.navigate('BabyCare')}>
          <Card>
            <CardSection>
              <View style={styles.thumbnailStyle}>
                <Image source={require('./assets/grocery.png')} style={styles.thumbnailImage} />
              </View>

              <View style={styles.infoStyle}>
                <Text style={styles.infoTextStyle}> Baby Care </Text>
                <Text style={styles.infoTextStyle}> Diapers, Lotions, Baby Food </Text>
              </View>
            </CardSection>
          </Card>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => this.props.navigation.navigate('BakeryDairy')}>
          <Card>
            <CardSection>
              <View style={styles.thumbnailStyle}>
                <Image source={require('./assets/grocery.png')} style={styles.thumbnailImage} />
              </View>

              <View style={styles.infoStyle}>
                <Text style={styles.infoTextStyle}> Bakery & Dairy </Text>
                <Text style={styles.infoTextStyle}> Milk, Butter, Cheese, Bread </Text>
              </View>
            </CardSection>
          </Card>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => this.props.navigation.navigate('Beverages')}>
          <Card>
            <CardSection>
              <View style={styles.thumbnailStyle}>
                <Image source={require('./assets/grocery.png')} style={styles.thumbnailImage} />
              </View>

              <View style={styles.infoStyle}>
                <Text style={styles.infoTextStyle}> Beverages </Text>
                <Text style={styles.infoTextStyle}> Tea, Cola, Juices </Text>
              </View>
            </CardSection>
          </Card>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => this.props.navigation.navigate('InstantFood')}>
          <Card>
            <CardSection>
              <View style={styles.thumbnailStyle}>
                <Image source={require('./assets/grocery.png')} style={styles.thumbnailImage} />
              </View>

              <View style={styles.infoStyle}>
                <Text style={styles.infoTextStyle}> Instant Food </Text>
                <Text style={styles.infoTextStyle}> Chips, Cookies, Noodles </Text>
              </View>
            </CardSection>
          </Card>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => this.props.navigation.navigate('FrozenChilled')}>
          <Card>
            <CardSection>
              <View style={styles.thumbnailStyle}>
                <Image source={require('./assets/grocery.png')} style={styles.thumbnailImage} />
              </View>

              <View style={styles.infoStyle}>
                <Text style={styles.infoTextStyle}> Frozen & Chilled </Text>
                <Text style={styles.infoTextStyle}> Nuggets, Kebab </Text>
              </View>
            </CardSection>
          </Card>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => this.props.navigation.navigate('PetCare')}>
          <Card>
            <CardSection>
              <View style={styles.thumbnailStyle}>
                <Image source={require('./assets/grocery.png')} style={styles.thumbnailImage} />
              </View>

              <View style={styles.infoStyle}>
                <Text style={styles.infoTextStyle}> Pet Care </Text>
                <Text style={styles.infoTextStyle}> Cat Food, Dog Food </Text>
              </View>
            </CardSection>
          </Card>
        </TouchableOpacity>

      </ScrollView>
    );
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
