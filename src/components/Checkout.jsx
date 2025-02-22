import { placeOrder } from '@/redux/action';
import { VStack, Text, Button } from '@chakra-ui/react';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Checkout = () => {

    const dispatch = useDispatch();
    const cartItmes = useSelector((state) => state.cart.items);
    const totalPrice = cartItmes.reduce((total, item) => total + item.price * item.quantity, 0);

    const handlePlaceOrder = () => {
        dispatch(placeOrder());
    };

  return (
    <VStack gap={4} p={4}>
        <Text fontSize={'2xl'}> Order Summary</Text>
        {cartItmes.map((item) => (
            <Text key={item.id}> {item.title} - {item.quantity} x ${item.price} </Text>
        ))}
        <Text fontSize={'xl'}>Total : ${totalPrice.toFixed(2)} </Text>
        <Button colorPalette={'blue'} onClick={handlePlaceOrder}>
            <Link to='/order-success'>Place Order</Link>
        </Button>
        
    </VStack>
  )
}

export default Checkout
