import {createStore,combineReducers,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

// import cartItems from '../reducers/cartItems';
import {App} from './reducer/index';
// const store = createStore(cartItems);

const store = createStore(
    combineReducers ({
        Appdata:App
    }),
    {},
    applyMiddleware(thunk)
);
export default  store;
// export default store;























































