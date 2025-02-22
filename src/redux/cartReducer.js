import React from 'react';


const initialState = {
    items: [],
};

export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const CLEAR_CART = 'CLEAR_CART';
export const UPDATE_QUANTITY = 'UPDATE_QUANTITY';
export const PLACE_ORDER = 'PLACE_ORDER';

const CartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            const existingItem = state.items.find((item) => item.id === action.payload.id);
            if (existingItem) {
                return {
                    ...state,
                    items: state.items.map((item) => item.id === action.payload.id ? { ...item, quantity: item.quantity + 1 } : item),
                };
            } else {
                return {
                    ...state,
                    items: [...state.items, { ...action.payload, quantity: 1 }],
                };
            }
        case REMOVE_FROM_CART:
            return {
                ...state,
                items: state.items.filter((item) => item.id !== action.payload.id),
            };
        case UPDATE_QUANTITY:
            return {
                ...state, items: state.items.map((item) => item.id === action.payload.id ? { ...item, quantity: action.payload.quantity } : item),
            };

        case PLACE_ORDER:
            return {
                ...state, items: []
            };

        default:
            return state;
    }
}

export default CartReducer;
