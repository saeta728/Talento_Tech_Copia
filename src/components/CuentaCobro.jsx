import React, { useState } from 'react';
import './CuentaCobro.css';

function CuentaCobro() {
  const [numeroOrden, setNumeroOrden] = useState('');
  const [order, setOrder] = useState(null);

  // Función para buscar la orden en localStorage
  const handleBuscarOrden = () => {
    const orders = JSON.parse(localStorage.getItem('orders')) || [];
    const foundOrder = orders.find((order) => order.numeroOrden === parseInt(numeroOrden));
    if (foundOrder) {
      setOrder(foundOrder);
    } else {
      alert('No se encontró la orden con el número ingresado.');
    }
  };

  // Calcular total de factura
  const calcularTotal = () => {
    if (order && order.servicios) {
      return (
        parseFloat(order.servicios.precioServicio || 0) +
        parseFloat(order.servicios.precioInsumos || 0) +
        parseFloat(order.servicios.precioOtros || 0)
      );
    }
    return 0;
  };

  return (
    <>
    <h5>***PARA IMPRIMR SU FACTURA: "CTRL + P"</h5>
    <div className="cuenta-cobro">
      <h1>Cuenta de Cobro</h1>
      
      <div>
        <label>Número de orden:</label>
        <input
          type="text"
          value={numeroOrden}
          onChange={(e) => setNumeroOrden(e.target.value)}
        />
        <button onClick={handleBuscarOrden}>Buscar Orden</button>
      </div>

      {order && (
        <div>
          <h2>Datos del cliente</h2>
          <p><strong>Nombre o razón social:</strong> {order.datosCliente.nombre}</p>
          <p><strong>Número de identificación:</strong> {order.datosCliente.identificacion}</p>
          <p><strong>Teléfono:</strong> {order.datosCliente.telefono}</p>
          <p><strong>Dirección:</strong> {order.datosCliente.direccion}</p>

          <h2>Características del Vehículo</h2>
          <p><strong>Marca:</strong> {order.vehiculo.marca}</p>
          <p><strong>Modelo:</strong> {order.vehiculo.modelo}</p>
          <p><strong>Placa:</strong> {order.vehiculo.placa}</p>
          <p><strong>Otras características:</strong> {order.vehiculo.otras}</p>

          <h2>Servicios</h2>
          <p><strong>Tipo de servicio:</strong> {order.servicios.tipo}</p>
          <p><strong>Servicio específico:</strong> {order.servicios.especifico} - Precio: ${order.servicios.precioServicio}</p>
          <p><strong>Insumos:</strong> {order.servicios.insumos} - Precio: ${order.servicios.precioInsumos}</p>
          <p><strong>Otros:</strong> {order.servicios.otros} - Precio: ${order.servicios.precioOtros}</p>

          <h2>Total de la factura</h2>
          <p><strong>Total:</strong> ${calcularTotal()}</p>
        </div>
      )}
    </div>
    </>
  );
}

export default CuentaCobro;