import React from 'react';
import '../css/Header.css';

const Header = () => {
    return (
        <header>
            <div className="notifications">
                <span>🔔</span>
            </div>
            <div className="profile">
                <div className="profile-pic" id="profilePic">NA</div>
                <span>Nombre del Usuario</span>
            </div>
        </header>
    );
};

export default Header;
