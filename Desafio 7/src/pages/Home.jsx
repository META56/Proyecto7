// src/pages/Home.jsx
import React from 'react';
import { useCart } from '../context/CartContext';

const Home = () => {
  const { addToCart } = useCart();

  const pizzas = [
    { id: 1, name: 'Napolitana', price: 8, description: 'Mozzarella, Tomate, Jamón, Orégano' },
    { id: 2, name: 'Española', price: 10, description: 'Mozzarella, Gorgonzola, Parmesano, Provolone.' },
    { id: 3, name: 'Pepperoni', price: 10, description: 'Mozzarella, Pepperoni, Orégano.' },
    
  ];

  const handleAddToCart = (pizza) => {
    addToCart(pizza);
  };

  return (
    <div>
      <h1>Menu</h1>
      <div className="pizza-list">
        {pizzas.map((pizza) => (
          <div key={pizza.id} className="pizza-item">
            <h3>{pizza.name}</h3>
            <p>{pizza.description}</p>
            <p>${pizza.price}</p>
            <button onClick={() => handleAddToCart(pizza)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
