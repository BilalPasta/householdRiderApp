import { createStore } from 'redux';
import cartItems from '../reducers/cartItems';

const store = createStore(cartItems);

export default store;
