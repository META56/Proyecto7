import React from "react";

const Profile = ({ userEmail, onLogout }) => {
  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Perfil</h2>
      <p style={styles.email}>
        <strong>Email:</strong> {userEmail}
      </p>
      <button style={styles.button} onClick={onLogout}>
        Cerrar sesión
      </button>
    </div>
  );
};

const styles = {
  container: {
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    width: "300px",
    margin: "20px auto",
    textAlign: "center",
    backgroundColor: "#f9f9f9",
  },
  title: {
    fontSize: "1.5em",
    marginBottom: "10px",
  },
  email: {
    fontSize: "1em",
    marginBottom: "20px",
  },
  button: {
    padding: "10px 20px",
    fontSize: "1em",
    color: "#fff",
    backgroundColor: "#007bff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default Profile;
