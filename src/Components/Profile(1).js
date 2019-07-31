import React, { Component } from 'react';
import { CustomerDetail } from './Index';

export default class Profile extends Component {
  render() {
    return (
        <CustomerDetail
          firstName={'Arham'}
          lastName={'Ahmed'}
          email={'arhamahmed1323@gmail.com'}
          contactNo={'0331-3972256'}
          address={'591 W. Garfield Lane Brooklyn, NY'}
        />
    );
  }
}
