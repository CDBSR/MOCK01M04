import axios from 'axios';
import { FETCH_PRODUCTS_ERROR, FETCH_PRODUCTS_LOADING, FETCH_PRODUCTS_SUCCESS } from './productReducer';
import { baseurl } from '@/components/BaseUrl';
import { ADD_TO_CART, PLACE_ORDER, REMOVE_FROM_CART, UPDATE_QUANTITY } from './cartReducer';

export const fetchProducts = () => async(dispatch) => {
    dispatch({type: FETCH_PRODUCTS_LOADING});
    try {
        const response = await axios.get(baseurl);
        dispatch({type : FETCH_PRODUCTS_SUCCESS, payload: response.data});
    } catch (error) {
        console.log(error);
        dispatch({type: FETCH_PRODUCTS_ERROR, payload: error.message});
    }
};

export const addToCart = (product) => ({
    type : ADD_TO_CART,
    payload: product,
});

export const removeFromCart = (id) => ({
    type: REMOVE_FROM_CART,
    payload: {id},
});

export const updateQuantity = (id, quantity) => ({
    type: UPDATE_QUANTITY,
    payload: {id, quantity},
});

export const placeOrder = () => ({
    type: PLACE_ORDER,
});