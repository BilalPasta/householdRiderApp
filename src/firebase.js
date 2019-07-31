// import * as firebase from 'firebase';
// import Geofire from 'geofire';
// const config = {
//     apiKey: 'AIzaSyBNxIyf_NEmiHtzDnPKb-BtrRZR2DxvzkY',
//     authDomain: 'key-buttress-225711.firebaseapp.com',
//     databaseURL: 'https://key-buttress-225711.firebaseio.com',
//     projectId: 'key-buttress-225711',
//     storageBucket: 'key-buttress-225711.appspot.com',
//     messagingSenderId: '797951559188',
// };

// const Firebase = firebase.initializeApp(config);

// export default Firebase;





// import firebase from 'firebase';
const firebase =require('firebase');

var config = {
    apiKey: "AIzaSyDPN4axM5gs0_ll9h8cEVhr5ZrNQgy91S8",
    authDomain: "anytime-order-household-goods.firebaseapp.com",
    databaseURL: "https://anytime-order-household-goods.firebaseio.com",
    projectId: "anytime-order-household-goods",
    storageBucket: "anytime-order-household-goods.appspot.com",
    messagingSenderId: "894381085837"
  };

const firebaseAp=firebase.initializeApp(config);
// let geoFireRef = firebase.database().ref().child('fishponds');
// let geoFireApp = new geofire(geoFireRef)
export default firebaseAp;
  