import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'; 
import { useCart } from './context/CartContext'; 
import Navbar from './components/Navbar';


const Home = () => {
  const { addToCart } = useCart();

  const products = [
    { id: 1, name: 'Pizza Margarita', price: 10, image: 'path/to/image' },
    { id: 2, name: 'Pizza Peperoni', price: 12, image: 'path/to/image' },
   
  ];

  const handleAddToCart = (product) => {
    addToCart(product);
  };

  return (
    <div>
      <h2>Pizzas Disponibles</h2>
      <div>
        {products.map((product) => (
          <div key={product.id}>
            <img src={product.image} alt={product.name} width={100} />
            <h3>{product.name}</h3>
            <p>${product.price}</p>
            <button onClick={() => handleAddToCart(product)}>Agregar al Carrito</button>
          </div>
        ))}
      </div>
    </div>
  );
};


const About = () => {
  return <h1>Acerca de Nosotros</h1>;
};


const NotFound = () => {
  return <h1>404: Página no encontrada</h1>;
};


const Navbar = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </nav>
  );
};


const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;








