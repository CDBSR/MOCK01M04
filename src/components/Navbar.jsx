import { Badge, Button, Flex, useSelect } from '@chakra-ui/react'
import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

const Navbar = () => {
  const cartItems = useSelector((state) => state.cart.items);

  return (
    <Flex bg={'teal.500'} p={4} color={'white'} justifyContent={'space-between'}>
        <Link to='/'><Button variant={'ghost'}>Products</Button></Link>
        <Link to='/cart'><Button variant={'ghost'}>Cart <Badge ml={2}> {cartItems.length} </Badge> </Button></Link>
    </Flex>
  )
}

export default Navbar
