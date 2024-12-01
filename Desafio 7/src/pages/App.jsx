import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './CartContext';


import Navbar from './components/Navbar';
import Home from './components/Home';
import Register from './components/Register';
import Login from './components/Login';
import Cart from './components/Cart';
import Pizza from './components/Pizza';
import Profile from './components/Profile';
import NotFound from './components/NotFound';

const App = () => {
  return (
    <CartProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/pizza/:id" element={<Pizza />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/404" element={<NotFound />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </CartProvider>
  );
};

import React from 'react';
import Navbar from './Navbar'; 
import Home from './Home'; 
import { CarritoProvider } from './CarritoContext'; 

function App() {
  return (
    <CarritoProvider>
      <Navbar />
      <Home />
    </CarritoProvider>
  );
}
import React, { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export const useCart = () => {
    return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        setCart((prevCart) => {
            const productExists = prevCart.find(item => item.id === product.id);
            if (productExists) {
                return prevCart.map(item =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            }
            return [...prevCart, { ...product, quantity: 1 }];
        });
    };

    const removeFromCart = (id) => {
        setCart((prevCart) => prevCart.filter(item => item.id !== id));
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
            {children}
        </CartContext.Provider>
    );
};
import React from 'react';
import { CartProvider } from './context/CartContext';
import Home from './pages/Home';

function App() {
    return (
        <CartProvider>
            <Home />
        </CartProvider>
    );
}


import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CartProvider } from './context/CartContext';  
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Cart from './pages/Cart';  

const App = () => {
  return (
    <CartProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/cart" element={<Cart />} />  
        </Routes>
      </Router>
    </CartProvider>
  );
};
import React, { useState, useContext, createContext } from "react";
import Navbar from "./Navbar";
import Cart from "./Cart";


const TotalContext = createContext();

export function useTotal() {
  return useContext(TotalContext);
}

function App() {
  const [total, setTotal] = useState(0);

  const updateTotal = (newTotal) => {
    setTotal(newTotal);
  };

  return (
    <TotalContext.Provider value={{ total, updateTotal }}>
      <Navbar />
      <Cart />
    </TotalContext.Provider>
  );
}
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { UserProvider } from './context/UserContext';

ReactDOM.render(
    <UserProvider>
        <App />
    </UserProvider>,
    document.getElementById('root')
);
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ProtectedRoute, LoginPage, RegisterPage } from './components';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route
          path="/protected"
          element={
            <ProtectedRoute>
              <ProtectedPage /> 
            </ProtectedRoute>
          }
        />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;










