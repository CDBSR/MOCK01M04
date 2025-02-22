import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { HStack, Text, VStack, Image, Input, Button } from '@chakra-ui/react';
import { removeFromCart, updateQuantity } from '@/redux/action';
import { Link } from 'react-router-dom';

const Cart = () => {

    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.cart.items);
    const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

    if (cartItems.legth === 0) {
        return <Text>Your Cart is Empty</Text>;
    }

    return (
        <VStack gap={4} p={4}>
            {cartItems.map((product) => (
                <HStack key={product.id} gap={4} maxWidth={'800px'} width={'500px'} >
                    <Image src={product.image} alt={product.title} boxSize={'200px'} objectFit={'contain'}></Image>
                    <Text fontSize={'lg'} fontWeight={'bold'}> {product.title} </Text>
                    <Text fontSize={'lg'}> ${product.price} </Text>
                    <Input gap={4} type='number' value={product.quantity} onChange={(e) => dispatch(updateQuantity(product.id, parseInt(e.target.value)))} width={'100px'}/>
                    <Button colorPalette={'red'} onClick={() => dispatch(removeFromCart(product.id))} > Remove </Button>
                </HStack>
            ))}
            <Text fontSize={'xl'}>Total : ${totalPrice.toFixed(2)} </Text>
            {cartItems.length > 0 && (
                <Link to='/checkout'>
                    <Button colorPalette={'blue'}>Proceed to Checkout</Button>
                </Link>
            ) }

            {cartItems.length === 0 && (
                <Link to='/'>
                <Text>Your cart is Empty Please do shopping</Text>
                <Button colorPalette={'blue'}>Home</Button>
            </Link>
            ) }
            
            
        </VStack>
    )
}

export default Cart
