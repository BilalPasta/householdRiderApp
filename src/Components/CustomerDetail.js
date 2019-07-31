import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { Card, CardSection, Input, Button } from './Index';

const CustomerDetail = ({ props }) => (

  <View style={styles.contentStyle}>

      <View style={styles.imageStyle}>
          <Image source={require('./assets/Pic.jpg')} style={styles.thumbnailImage} />
      </View>

      <View>

      <Card>
        <CardSection>
          <Input
            label={'First Name: '}
            placeholder={'First Name'}
          />
        </CardSection>

        <CardSection>
          <Input
            label={'Last Name: '}
            placeholder={'Last Name'}
          />
        </CardSection>

        <CardSection>
          <Input
            label={'Email: '}
            placeholder={'user@example.com'}
          />
        </CardSection>

        <CardSection>
          <Input
            label={'Phone No: '}
            placeholder={'XXXX-XXXXXXX'}
          />
        </CardSection>

        <CardSection>
          <Input
            label={'Address: '}
            placeholder={'Address'}
          />
        </CardSection>

       </Card>

       <CardSection {...props} style={styles.buttonSection}>
          <Button {...props} style={styles.buttonStyle}>
              Delete Account
          </Button>
       </CardSection>

      </View>

  </View>

);

const styles = StyleSheet.create({
  contentStyle: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'column',
  },
  imageStyle: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  thumbnailImage: {
    width: 100,
    height: 100,
    borderRadius: 100 / 2,
    marginRight: 4,
    marginLeft: 3,
  },
  buttonSection: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonStyle: {
    flex: 1,
    backgroundColor: 'red',
    borderColor: 'red',
    borderRadius: 5,
  }
});

export { CustomerDetail };
