import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom"; // Importar Link

const Pizza = () => {
  // Estados
  const { id } = useParams(); // Obtener el ID de la pizza desde la URL
  const [pizza, setPizza] = useState(null); // Datos de la pizza
  const [loading, setLoading] = useState(true); // Estado de carga
  const [error, setError] = useState(null); // Estado de error

  // Obtener datos de la API
  useEffect(() => {
    const fetchPizza = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/pizzas/${id}`);
        if (!response.ok) {
          throw new Error("Error al obtener la información de la pizza");
        }
        const data = await response.json();
        setPizza(data); // Guardar datos de la pizza
      } catch (err) {
        setError(err.message); // Guardar error
      } finally {
        setLoading(false); // Finalizar carga
      }
    };

    fetchPizza();
  }, [id]);

  if (loading) return <p>Cargando...</p>;

  if (error) return <p>Error: {error}</p>;

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>{pizza.name}</h1>
      <img style={styles.image} src={pizza.image} alt={pizza.name} />
      <p style={styles.description}>{pizza.description}</p>
      <p style={styles.ingredients}>
        <strong>Ingredientes:</strong> {pizza.ingredients.join(", ")}
      </p>
      <p style={styles.price}>
        <strong>Precio:</strong> ${pizza.price}
      </p>
      <Link to="/cart" style={styles.link}>
        Ir al Carrito
      </Link>
      <Link to={`/cart/add/${pizza.id}`} style={styles.linkSecondary}>
        Agregar esta pizza al carrito
      </Link>
    </div>
  );
};

const styles = {
  container: {
    textAlign: "center",
    padding: "20px",
    maxWidth: "600px",
    margin: "0 auto",
    border: "1px solid #ddd",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    backgroundColor: "#fff",
  },
  title: {
    fontSize: "2rem",
    margin: "10px 0",
  },
  image: {
    width: "100%",
    height: "auto",
    borderRadius: "8px",
    marginBottom: "15px",
  },
  description: {
    fontSize: "1rem",
    margin: "10px 0",
  },
  ingredients: {
    fontSize: "1rem",
    margin: "10px 0",
    color: "#555",
  },
  price: {
    fontSize: "1.2rem",
    fontWeight: "bold",
    margin: "10px 0",
  },
  link: {
    display: "inline-block",
    marginTop: "15px",
    padding: "10px 20px",
    textDecoration: "none",
    backgroundColor: "#007bff",
    color: "#fff",
    borderRadius: "4px",
    fontSize: "1rem",
    marginRight: "10px",
  },
  linkSecondary: {
    display: "inline-block",
    marginTop: "15px",
    padding: "10px 20px",
    textDecoration: "none",
    backgroundColor: "#28a745",
    color: "#fff",
    borderRadius: "4px",
    fontSize: "1rem",
  },
};

export default Pizza;
