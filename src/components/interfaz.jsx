import React, { useState, useEffect } from "react";
import './interfaz.css'; // Importa el archivo de estilos

function Interfaz() {
  // Se crea el estado para el número de orden
  const [numeroOrden, setNumeroOrden] = useState(1); // Inicia en 1
  
    // Usar localStorage para guardar el número de orden
  useEffect(() => {
    const numeroGuardado = localStorage.getItem('numeroOrden');
    if (numeroGuardado) {
      setNumeroOrden(parseInt(numeroGuardado));
    }
  }, []);

  

  // Se crea el estado para datos de la orden
  const [datosCliente, setDatosCliente] = useState({
    fecha: '',
    nombre: '',
    identificacion: '',
    telefono: '',
    telefono1: '',
    direccion: ''
  });
  

  const [vehiculo, setVehiculo] = useState({
    marca: '',
    modelo: '',
    placa: '',
    otras: ''
  });

  const [servicios, setServicios] = useState({
    tipo: '',
    especifico: '',
    insumos: '',
    otros: '',
    precioServicio: '',
    precioInsumos: '',
    precioOtros: ''
  });

    // Se genera error en fecha por formato errado
  const [error, setError] = useState("");

    // Se verifica el formato de la fecha ingresada
    const handleChangeFecha = (e) => {
      setDatosCliente({ ...datosCliente, fecha: e.target.value });
    };
    
    // Validar la fecha solo cuando el usuario sale del campo de texto
    const handleBlurFecha = () => {
      const regex = /^\d{4}\/\d{2}\/\d{2}$/;
      if (!regex.test(datosCliente.fecha) && datosCliente.fecha !== "") {
        setError("Debe ingresar la fecha en el formato AAAA/MM/DD.");
      } else {
        setError(""); // Sin error si el formato es correcto o si el campo está vacío
      }
    };

  // Incrementar el número de orden y guardar la nueva orden
  const handleGuardarOrden = () => {
    // Crear el objeto de la orden actual con toda la información
    const nuevaOrden = {
      numeroOrden,
      datosCliente,
      vehiculo,
      servicios
    };

    // Recupera las órdenes existentes desde el localStorage (si hay alguna)
    const ordenesGuardadas = JSON.parse(localStorage.getItem('orders')) || [];

    // Agrega la nueva orden al arreglo
    ordenesGuardadas.push(nuevaOrden);

    // Guarda el nuevo arreglo de órdenes en localStorage
    localStorage.setItem('orders', JSON.stringify(ordenesGuardadas));

    // Incrementa el número de orden
    const nuevoNumeroOrden = numeroOrden + 1;
    setNumeroOrden(nuevoNumeroOrden);

    // Guarda el nuevo número de orden en el localStorage para recuperar
    localStorage.setItem('numeroOrden', nuevoNumeroOrden);

    console.log("Nueva orden guardada", { numeroOrden, datosCliente, vehiculo, servicios });
  };

  return (
    <div className="interfaz-container">
      <h1>Orden de Servicio</h1>
      
      <fieldset>
        <legend>Datos del Cliente</legend>
        <div className="form-group">
          <label>Número de orden:</label>
          <input type="text" value={numeroOrden} readOnly />
        </div>
        <div className="form-group">
          <label>Fecha de orden:</label>
          <input
            type="text"
            value={datosCliente.fecha}
            placeholder='AAAA/MM/DD'
            onChange={handleChangeFecha}  // Solo actualiza el valor
    onBlur={handleBlurFecha}  // Valida el formato cuando el usuario sale del campo
          />                   
        </div>
        <div>
              {error &&  <p className="error-message" >{error} </p>} 

        </div>
        <div className="form-group">
          <label>Nombre o razón social:</label>
          <input
            type="text"
            value={datosCliente.nombre}
            onChange={(e) => setDatosCliente({ ...datosCliente, nombre: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label>Número de identificación:</label>
          <input
            type="text"
            value={datosCliente.identificacion}
            onChange={(e) => setDatosCliente({ ...datosCliente, identificacion: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label>Teléfono:</label>
          <input
            type="text"
            value={datosCliente.telefono}
            onChange={(e) => setDatosCliente({ ...datosCliente, telefono: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label>Teléfono 2:</label>
          <input
            type="text"
            value={datosCliente.telefono1}
            onChange={(e) => setDatosCliente({ ...datosCliente, telefono1: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label>Dirección:</label>
          <input
            type="text"
            value={datosCliente.direccion}
            onChange={(e) => setDatosCliente({ ...datosCliente, direccion: e.target.value })}
          />
        </div>
      </fieldset>

      <fieldset>
        <legend>Características del Vehículo</legend>
        <div className="form-group">
          <label>Marca:</label>
          <input
            type="text"
            value={vehiculo.marca}
            onChange={(e) => setVehiculo({ ...vehiculo, marca: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label>Modelo:</label>
          <input
            type="text"
            value={vehiculo.modelo}
            onChange={(e) => setVehiculo({ ...vehiculo, modelo: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label>Placa:</label>
          <input
            type="text"
            value={vehiculo.placa}
            onChange={(e) => setVehiculo({ ...vehiculo, placa: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label>Otras:</label>
          <input
            type="text"
            value={vehiculo.otras}
            onChange={(e) => setVehiculo({ ...vehiculo, otras: e.target.value })}
          />
        </div>
      </fieldset>

      <fieldset>
        <legend>Servicios</legend>
        <div className="form-group">
          <label>Tipo de servicio:</label>
          <select
            value={servicios.tipo}
            onChange={(e) => setServicios({ ...servicios, tipo: e.target.value })}
          >
            <option value="">Seleccionar</option>
            <option value="Preventivo">Preventivo</option>
            <option value="Correctivo">Correctivo</option>
            <option value="Reparación">Reparación</option>
          </select>
        </div>
        <div className="form-group">
          <label>Servicio específico:</label>
          <select
            value={servicios.especifico}
            onChange={(e) => setServicios({ ...servicios, especifico: e.target.value })}
          >
            <option value="">Seleccionar</option>
            <option value="Cambio de aceite">Cambio de aceite</option>
            <option value="Revisión de frenos">Revisión de frenos</option>
            <option value="Alineación">Alineación</option>
          </select>
        </div>
        <div className="form-group">
          <label>Precio servicio específico:</label>
          <input
            type="number"
            value={servicios.precioServicio}
            onChange={(e) => setServicios({ ...servicios, precioServicio: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label>Insumos:</label>
          <select
            value={servicios.insumos}
            onChange={(e) => setServicios({ ...servicios, insumos: e.target.value })}
          >
            <option value="">Seleccionar</option>
            <option value="Correa">Correa</option>
            <option value="Pastillas de frenos">Pastillas de frenos</option>
            <option value="Aceite">Aceite</option>
          </select>
        </div>
        <div className="form-group">
          <label>Precio de Insumos:</label>
          <input
            type="number"
            value={servicios.precioInsumos}
            onChange={(e) => setServicios({ ...servicios, precioInsumos: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label>Otros:</label>
          <input
            type="text"
            value={servicios.otros}
            onChange={(e) => setServicios({ ...servicios, otros: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label>Precio de otros servicios:</label>
          <input
            type="number"
            value={servicios.precioOtros}
            onChange={(e) => setServicios({ ...servicios, precioOtros: e.target.value })}
          />
        </div>
      </fieldset>

      <button onClick={handleGuardarOrden}>Guardar Orden</button>
    </div>
    
  );



  return (
    <div className="interfaz-container">
      <h1>Orden de Servicio</h1>
      
      {/* Los formularios y campos de datos se mantienen igual */}
      {/* ... */}
      
      <button onClick={handleGuardarOrden}>Guardar Orden</button>
    </div>
  );
}




export default Interfaz;