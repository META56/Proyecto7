import React from 'react';
import { useCart } from '../CartContext';

const pizzas = [
  { id: 'napolitana', name: 'Napolitana', price: 5950, ingredients: 'Mozzarella, Tomate, Jamón, Orégano', img: '01.jpg' },
  { id: 'margarita', name: 'Margarita', price: 5500, ingredients: 'Mozzarella, Albahaca, Tomate', img: '02.jpg' },
  { id: 'pepperoni', name: 'Pepperoni', price: 6500, ingredients: 'Mozzarella, Pepperoni', img: '03.jpg' },
];

const Menu = () => {
  const { cart, updateCart } = useCart();

  return (
    <div className="container mt-4">
      <h2>Nuestras Pizzas</h2>
      <div className="row">
        {pizzas.map((pizza) => (
          <div className="col-md-4" key={pizza.id}>
            <div className="card">
              <img src={pizza.img} className="card-img-top" alt={pizza.name} />
              <div className="card-body">
                <h5 className="card-title">{pizza.name}</h5>
                <p className="card-text">{pizza.ingredients}</p>
                <p className="card-text"><strong>${pizza.price}</strong></p>
                <div className="quantity-control">
                  <button className="btn btn-secondary" onClick={() => updateCart(pizza.id, -1, pizza.price)}>-</button>
                  <span className="mx-2">{cart[pizza.id]?.quantity || 0}</span>
                  <button className="btn btn-secondary" onClick={() => updateCart(pizza.id, 1, pizza.price)}>+</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
