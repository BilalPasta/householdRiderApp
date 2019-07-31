import * as firebase from 'firebase';

const config = {
    apiKey: 'AIzaSyBNxIyf_NEmiHtzDnPKb-BtrRZR2DxvzkY',
    authDomain: 'key-buttress-225711.firebaseapp.com',
    databaseURL: 'https://key-buttress-225711.firebaseio.com',
    projectId: 'key-buttress-225711',
    storageBucket: 'key-buttress-225711.appspot.com',
    messagingSenderId: '797951559188',
};

const Firebase = firebase.initializeApp(config);

export default Firebase;
