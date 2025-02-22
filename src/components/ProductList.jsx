import { addToCart, fetchProducts } from '@/redux/action';
import { Box, Button, Image, SimpleGrid, Text } from '@chakra-ui/react';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const ProductList = () => {

    const dispatch = useDispatch();
    const {products, loading, error} = useSelector((state) => state.products);

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    if(loading) {
        return <Text>Loading...</Text>
    }
    if(error) {
        return <Text>Error: {error} </Text>
    }

  return (
    <SimpleGrid columns={3} spacing={10} p={4}>
        {products.map((product) => (
            <Box key={product.id} borderWidth='1px' borderRadius='lg' p={4} alignItems={'center'} textAlign={'center'}>
                <Image src={product.image} alt={product.title} boxSize={'350px'} objectFit={'contain'}></Image>
                <Text fontSize={'xl'} fontWeight={'bold'}> {product.title} </Text>
                <Text fontSize={'lg'}> {product.price} </Text>
                <Button colorPalette={'blue'} onClick={() => dispatch(addToCart(product))}>Add To Cart</Button>
            </Box>
        ))}
    </SimpleGrid>
  )
}

export default ProductList
