import React from 'react';
import '../css/Login.css';
import logo from '../img/imagen.jpg';

const Login = () => {
    return (
      <div className="login-page">
        <div className="login-box">
          <h2>Iniciar Sesión</h2>
          <form>
            <div className="user-box">
              <label>Usuario</label>
              <input type="text" name="username" placeholder='Usuario/DNI' required />
            </div>
            <div className="user-box">
              <label>Contraseña</label>
              <input type="password" name="password" placeholder='********' required />
            </div>
            <button type="submit">Iniciar Sesión</button>
          </form>
          <a href="#">¿Olvidó su contraseña?</a>
        </div>
        <footer>© 2024 Mis Licencias. Todos los derechos reservados.</footer>
      </div>
    );
  };

export default Login;
