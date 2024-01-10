import React, { useEffect } from 'react';
import { useState } from 'react';
import {Routes, Route, useNavigate} from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import './App.css'
import { Badge, Button } from 'react-bootstrap';
import Logo from "./assets/Logo.png";
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import ProductGallery from './components/ProductGallery';
import ProductDetails from './components/ProductDetails';
import Cart from './components/Cart';
import Checkout from './components/Checkout';

function App() {
const navigate = useNavigate();
const [user, setUser] = useState('');

const [cartItems, setCartItems] = useState({});

useEffect(() =>{
  const userEmail = localStorage.getItem('userEmail');
  if (userEmail){
    setUser(userEmail)
  }
}, [])

const handleAddToCart = (item) => {
  setCartItems({...cartItems, ...item});
}

  return (
    <div>
        <Navbar className='navbar'>
            <Navbar.Brand onClick={() => navigate('/')} style={{marginLeft: 60, color: '#216ad9', fontWeight: 'bolder', fontSize: '1.6rem', display: 'flex', alignItems: 'center', cursor: 'pointer'}}>
              <img
                alt=''
                src={Logo}
                width="32"
                height="32"
                className='d-inline-block align-top' />{' '}
               &nbsp; InstaBuy!
            </Navbar.Brand>
            <Navbar.Collapse className="justify-content-end">
              {user && <Button onClick={() => navigate('/cart')}>Cart &nbsp;{Object.keys(cartItems).length > 0 && (<Badge bg='dark'>{Object.keys(cartItems).length}</Badge>)}</Button>}
              &nbsp;&nbsp;&nbsp;
              <Button style={{marginRight: 40}} onClick={() => navigate('/login')}>{user ? 'Logout' : 'Login'}</Button>
            </Navbar.Collapse>
        </Navbar>
        <Routes>
          <Route path='/' element={<Home user = {user} />} />
          <Route path='/login' element={<Login setUser = {setUser} />} />
          <Route path='/signup' element={<Signup setUser = {setUser} />} />
          <Route path='/products' element={<ProductGallery />} />
          <Route path='/product/:id' element={<ProductDetails handleAddToCart={handleAddToCart} cartItems={cartItems} />} />
          <Route path='/cart' element={<Cart cartItems={cartItems} />} />
          <Route path='/checkout' element={<Checkout />} />
        </Routes>

    </div>   
  )
}

export default App
