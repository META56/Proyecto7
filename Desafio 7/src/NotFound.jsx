
import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css'; 

const NotFound = () => {
  return (
    <div className="notfound-container">
      <div className="notfound-content">
        <h1 className="notfound-title">¡Oops!</h1>
        <p className="notfound-message">La página que buscas no existe.</p>
        <Link to="/" className="back-home-btn">
          Regresar a Inicio
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
