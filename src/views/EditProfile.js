import React from 'react';
import '../css/EditProfile.css';
import '../css/MainView.css';
import Sidebar from '../components/Sidebar';   
import Header from '../components/Header';     
import profileImage from '../img/imagenperfil.jpg'; 

const EditProfile = () => {
    return (
        <div> 
        <div className="main-view">
            <Sidebar />
            <div className="main-content">
                <Header />
                <h2>Editar Perfil</h2>
                <div className="edit-profile">
                    <form className="edit-profile-form">
                        <div className="edit-pic">
                            <img src={profileImage} alt="Imagen de Perfil" className="profile-pic-edit"/>
                            <a href="#asd" className="pencil-edit">✏</a>
                        </div>
                        <label>Nombre</label>
                        <input type="text" name="name" placeholder='Satoru' required />
                        
                        <label>Apellido</label>
                        <input type="text" name="lastname" placeholder='Gojo' required />
                        
                        <label>Correo Electrónico</label>
                        <input type="email" name="email" placeholder='satorugojo@gmail.com' required />
                        
                        <label>Contraseña Actual</label>
                        <input type="password" name="password" placeholder='********' required />
                        
                        <label>Contraseña Nueva</label>
                        <input type="password" name="password" placeholder='********' required />
                        
                        <label>Contraseña Nueva</label>
                        <input type="password" name="password" placeholder='********' required />
                        
                        <button className="save-profile-button" type="submit">Guardar Cambios</button>
                    </form>
                </div>
            </div>
        </div>
        <footer className="footer"></footer>
        </div>
    );
};

export default EditProfile;
