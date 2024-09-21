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

  return (
    <div className="paso-container">
      <h1>Paso Intermedio</h1>
      <div className="botones-container">
        <button onClick={handleGenerarOrden} className="boton-generar">Generar Orden de Servicio</button>
        <button onClick={handleGenerarFactura} className="boton-generar">Generar Factura</button>
      </div>
    </div>
  );
}

export default Paso;