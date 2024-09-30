import React from 'react';
import { useNavigate } from 'react-router-dom'; // Para redirección
import './Paso.css'; // Importa el archivo CSS con el estilo similar al login

function Paso() {
  const navigate = useNavigate(); // Hook de React Router para redireccionar

  // Funciones para manejar los clics en los botones
  const handleGenerarOrden = () => {
    navigate('/interfaz'); // Redirige a la página Interfaz.jsx
  };

  const handleGenerarFactura = () => {
    navigate('/cuentacobro'); // Redirige a la página CuentaCobro.jsx
  };

  const handleLogout = () => {
    navigate('/'); // Redirige al componente Login.jsx
  };

  return (
    <body>
      <div className="paso-container">
      <h1>Menú Principal</h1>
      <h2>¿Que deseas hacer?</h2>
      <div className="botones-container">
        <button onClick={handleGenerarOrden} className="boton-generar">Generar Orden de Servicio</button>
        <button onClick={handleGenerarFactura} className="boton-generar">Generar Factura</button>
      </div>
      <button onClick={handleLogout} className="boton-logout">Cerrar Sesión</button>
    </div>
    </body>
    
  );
}

export default Paso;