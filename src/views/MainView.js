import React from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import '../css/MainView.css';

const MainView = () => {
    return (
        <div className="main-view">
            <Sidebar />
            <div className="main-content">
                <Header />
                {/* Aquí puedes agregar el contenido principal */}
                <section className="calendar">
                    {/* Calendario aquí */}
                </section>
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
                <section className="pending">
                    <h2>Solicitudes Pendientes</h2>
                    {/* Lista de solicitudes pendientes */}
                </section>
                <section className="announcements">
                    <h2>Anuncios de la Empresa</h2>
                    {/* Anuncios de la empresa */}
                </section>
            </div>
        </div>
    );
};

export default MainView;
