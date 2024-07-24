import React from 'react';
import '../css/Sidebar.css';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="menu-item">
                <span className="icon">🗓️</span>
                <span className="text">Calendario</span>
            </div>
            <div className="menu-item">
                <span className="icon">📋</span>
                <span className="text">Solicitudes</span>
            </div>
            <div className="menu-item">
                <span className="icon">👤</span>
                <span className="text">Perfil</span>
            </div>
            <div className="menu-item">
                <span className="icon">⚙️</span>
                <span className="text">Configuración</span>
            </div>
            <div className="menu-item">
                <span className="icon">🛠️</span>
                <span className="text">Soporte</span>
            </div>
        </div>
    );
};

export default Sidebar;

