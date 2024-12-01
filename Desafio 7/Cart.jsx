
import React from 'react';
import { useCart } from '../context/CartContext';

const Cart = () => {
  const { cart, removeFromCart } = useCart();

  return (
    <div>
      <h1>Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ul>
          {cart.map((product) => (
            <li key={product.id}>
              <h3>{product.name}</h3>
              <p>${product.price}</p>
              <button onClick={() => removeFromCart(product.id)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
import React, { useState, useEffect } from "react";
import { useTotal } from "./App";

function Cart() {
  const { total, updateTotal } = useTotal();
  const [items, setItems] = useState([
    { name: "Pizza Española", price: 10, quantity: 1 },
    { name: "Pizza Pepperoni", price: 12, quantity: 1 },
  ]);

 
  useEffect(() => {
    const newTotal = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
    updateTotal(newTotal);
  }, [items, updateTotal]);

  const handleQuantityChange = (index, delta) => {
    const newItems = [...items];
    newItems[index].quantity += delta;
    setItems(newItems);
  };

  return (
    <div>
      <h2>Carrito de compras</h2>
      {items.map((item, index) => (
        <div key={index}>
          <span>{item.name}</span>
          <span>${item.price}</span>
          <button onClick={() => handleQuantityChange(index, -1)}>-</button>
          <span>{item.quantity}</span>
          <button onClick={() => handleQuantityChange(index, 1)}>+</button>
        </div>
      ))}
      <div>Total: ${total.toFixed(2)}</div>
    </div>
  );
}

import React, { useState, useEffect } from "react";
import { useTotal } from "./App"; // Asegúrate de que useTotal esté bien importado
import { useCart } from "../context/CartContext"; // Para obtener la información del carrito

const Cart = () => {
  const { total, updateTotal } = useTotal();
  const { cart, removeFromCart } = useCart();
  const [token, setToken] = useState(false); 

  useEffect(() => {
    const newTotal = cart.reduce((acc, product) => acc + product.price * product.quantity, 0);
    updateTotal(newTotal);
  }, [cart, updateTotal]);

  const handleQuantityChange = (index, delta) => {
    const newCart = [...cart];
    newCart[index].quantity += delta;
    setItems(newCart);
  };

  return (
    <div>
      <h2>Carrito de compras</h2>
      {cart.length === 0 ? (
        <p>Tu carrito está vacío</p>
      ) : (
        <ul>
          {cart.map((product, index) => (
            <li key={product.id}>
              <h3>{product.name}</h3>
              <p>${product.price}</p>
              <button onClick={() => handleQuantityChange(index, -1)}>-</button>
              <span>{product.quantity}</span>
              <button onClick={() => handleQuantityChange(index, 1)}>+</button>
              <button onClick={() => removeFromCart(product.id)}>Eliminar</button>
            </li>
          ))}
        </ul>
      )}
      <div>Total: ${total.toFixed(2)}</div>

      
      <button disabled={!token} onClick={() => alert("Procesando pago")}>
        Pagar
      </button>
    </div>
  );
};

export default Cart;





