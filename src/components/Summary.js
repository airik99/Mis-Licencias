// src/components/Summary.js
import React from 'react';
import '../css/Summary.css'; // Asegúrate de que la ruta sea correcta

const Summary = () => {
  return (
    <section className="summary">
      <div className="summary-item">
        <h3>Días Tomados</h3>
        <p>10</p>
      </div>
      <div className="summary-item">
        <h3>Días Disponibles</h3>
        <p>15</p>
      </div>
      <div className="summary-item">
        <h3>Solicitudes Pendientes</h3>
        <p>3</p>
      </div>
    </section>
  );
};

export default Summary;
