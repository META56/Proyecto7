import React from 'react';
import { Link } from 'react-router-dom';
import { useCarrito } from './CarritoContext';
import { useContext } from 'react';
import { UserContext } from '../context/UserContext';

const MainNavbar = () => {
  const { precioTotal = 0 } = useCarrito(); // Corregido para garantizar un valor predeterminado.

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">Pizzería</Link>
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav" 
          aria-controls="navbarNav" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/menu">Menu</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">Contact</Link>
            </li>
          </ul>
          <div className="ms-auto">
            <Link to="/cart" className="btn btn-outline-success">
              🛒 Total: ${precioTotal.toFixed(2)}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

const UserNavbar = () => {
  const { token, login, logout } = useContext(UserContext);

  return (
    <nav style={styles.navbar}>
      <h1 style={styles.title}>Mi Pizzería</h1>
      {token ? (
        <div>
          <span style={styles.token}>Token: {token}</span>
          <button style={styles.button} onClick={logout}>
            Logout
          </button>
        </div>
      ) : (
        <button
          style={styles.button}
          onClick={() => login("simulated-token-12345")}
        >
          Login
        </button>
      )}
    </nav>
  );
};

const AuthNavbar = () => {
  const { user, logout } = useContext(UserContext);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">Pizzería</a>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="#">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Profile</a>
          </li>
        </ul>
        <ul className="navbar-nav ml-auto">
          {user ? (
            <>
              <li className="nav-item">
                <span className="nav-link">Hola, {user.name}</span>
              </li>
              <li className="nav-item">
                <button
                  className="btn btn-outline-danger"
                  onClick={logout}
                >
                  Logout
                </button>
              </li>
            </>
          ) : (
            <li className="nav-item">
              <a className="btn btn-outline-primary" href="#">Login</a>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

const styles = {
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 20px",
    backgroundColor: "#333",
    color: "#fff",
  },
  title: {
    fontSize: "1.5rem",
  },
  token: {
    marginRight: "10px",
  },
  button: {
    padding: "5px 10px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
};

export { MainNavbar, UserNavbar, AuthNavbar };
import React from 'react';

const Navbar = ({ token }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">Pizzería</a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
           
            <li className="nav-item">
              <a className="nav-link" href="/home">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/total">Total</a>
            </li>

          
            {token ? (
              <>
                <li className="nav-item">
                  <a className="nav-link" href="/profile">Profile</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/logout">Logout</a>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <a className="nav-link" href="/login">Login</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/register">Register</a>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;













