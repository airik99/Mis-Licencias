// src/components/PendingRequests.js
import React from 'react';
import '../css/PendingRequests.css'; // Asegúrate de que la ruta sea correcta

const PendingRequests = () => {
  return (
    <section className="pending-requests">
      <h2>Solicitudes Pendientes</h2>
      {/* Aquí se mostrarán las solicitudes pendientes */}
      <ul>
        <li>Solicitud 1</li>
        <li>Solicitud 2</li>
        <li>Solicitud 3</li>
      </ul>
    </section>
  );
};

export default PendingRequests;
