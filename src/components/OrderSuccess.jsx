import { VStack, Text, Button } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom';

const OrderSuccess = () => {
  return (
    <VStack gap={4} p={4}>
        <Text fontSize={'2xl'}>Order Placed Successfully</Text>
        <Link to='/'>
            <Button colorPalette={'blue'}>Continue Shopping</Button>
        </Link>
    </VStack>
  )
}

export default OrderSuccess
