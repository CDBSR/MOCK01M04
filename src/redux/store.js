import React from 'react';
import {applyMiddleware, combineReducers, legacy_createStore as createStore} from '@reduxjs/toolkit';
import CartReducer from './cartReducer';
import ProductReducer from './productReducer';
import { thunk } from 'redux-thunk';

const rootReducer = combineReducers({
    products : ProductReducer,
    cart : CartReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));
  
//   const Store = configureStore({
//     reducer: {
//         cart: CartReducer,
//         products : ProductReducer,
//     },
//     applyMiddleware: [thunk],
//   });
	
  
export default store;
  