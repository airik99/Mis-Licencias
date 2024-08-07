import React, { useState, useRef, useEffect } from 'react';
import '../css/Header.css';

const Header = () => {
    const [menuVisible, setMenuVisible] = useState(false);
    const menuRef = useRef(null);

    const handleMenuToggle = () => {
        setMenuVisible(!menuVisible);
    };

    const handleClickOutside = (event) => {
        if (menuRef.current && !menuRef.current.contains(event.target)) {
            setMenuVisible(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <header>
            <div className="notifications">
                <a className="notifications-bell" href="#asd">🔔</a>
            </div>
            <div className="profile" onClick={handleMenuToggle}>
                <div className="profile-pic" id="profilePic">NA</div>
                <span>Nombre del Usuario</span>
                {menuVisible && (
                    <div className="dropdown-menu" ref={menuRef}>
                        <a href="#asd">
                            👤 Editar Perfil
                        </a>
                        <a href="#asd"> {/*esto creo que lo voy a sacar*/}
                            🔒 Cambiar Contraseña
                        </a>
                        <a href="#asd">
                            🚪 Cerrar Sesión
                        </a>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header;
