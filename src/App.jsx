import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Container } from '@chakra-ui/react'
import { Route, Routes } from 'react-router-dom'
import ProductList from './components/ProductList'
import Cart from './components/Cart'
import Checkout from './components/Checkout'
import OrderSuccess from './components/OrderSuccess'
import Navbar from './components/Navbar'

// import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Container>
      <Navbar />
      <Routes>
        <Route path='/' element = {<ProductList />} />
        <Route path='/cart' element = {<Cart />} />
        <Route path='/checkout' element = {<Checkout />} />
        <Route path='/order-success' element = {<OrderSuccess />} />
      </Routes>
    </Container>
    </>
  )
}

export default App
