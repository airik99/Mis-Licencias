import React from 'react';
import '../css/Requests.css';
import '../css/MainView.css';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';

const Requests = () => {
    return (
        <div>
            <div className="main-view">
                <Sidebar />
                <div className="main-content">
                    <Header />
                    <div className="requests">
                        <h2>Mis Solicitudes</h2>
                        <div className="request">
                            <p>Tipo de Licencia</p>
                            <p>Fecha de solicitud</p>
                            <p>Días Tomados</p>
                            <p>Estado</p>
                            <p></p>
                        </div>
                        <div className="all-requests">
                            <p>Vacaciones</p>
                            <p>12/08/2024</p>
                            <p>7</p>
                            <p className="state-requets-pend">Pendiente</p>
                            <button className="edit-button-requests">Editar</button>
                        </div>
                        <div className="all-requests">
                            <p>Vacaciones</p>
                            <p>15/05/2024</p>
                            <p>14</p>
                            <p className="state-requets-acept">Aceptada</p>
                        </div>
                        <div className="all-requests">
                            <p>Vacaciones</p>
                            <p>01/01/2024</p>
                            <p>7</p>
                            <p className="state-requets-rech">Rechazada</p>
                        </div>
                    </div>
                </div>
            </div>
            <footer className="footer"></footer>
        </div>
    );
};

export default Requests;
