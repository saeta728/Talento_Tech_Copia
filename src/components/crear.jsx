import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Importamos useNavigate para redirigir


function Crear() {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate(); // Hook de navegación

  const defaultEmail = 'saeta@hotmail.es'; // Correo predeterminado

  const handleCreateAccount = () => {
    if (nombre && email && password) {
      // Guarda los datos del usuario en el localStorage
      //Las cuentas de usuario se almacenan en el localStorage en un array llamado users.
      //Antes de agregar una nueva cuenta, verificamos si ya existe una con el mismo correo electrónico.
      const users = JSON.parse(localStorage.getItem('users')) || [];

      // No permitir crear una cuenta con el correo predeterminado
      if (email === defaultEmail) {
        setMessage('No se puede usar este correo para crear una cuenta.');
        return;
      }
     
      const userExists = users.some((user) => user.email === email);

      if (userExists) {
        setMessage('Este correo ya está registrado.');
      } else {
        users.push({ nombre, email, password });
        localStorage.setItem('users', JSON.stringify(users));
        setMessage('Cuenta creada exitosamente');

        setTimeout(() => navigate('/'), 2000); // Redirigir al login después de 2 segundos
      }
    } else {
      setMessage('Por favor, complete todos los campos');
    }
  };
      //setMessage('Cuenta creada exitosamente');
    //} else {
      //setMessage('Por favor, complete todos los campos');
    //}
  //};

  return (
    <div className="seccion">
      <h1 className= "login">Crear cuenta</h1>
      <h1>Crear cuenta</h1>
      <input 
        className='ing' 
        type="text" 
        placeholder="Nombre"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)} 
      />
      <input 
        className='ing' 
        type="email" 
        placeholder="Correo electrónico"
        value={email}
        onChange={(e) => setEmail(e.target.value)} 
      />
      <input 
        className='ing' 
        type="password" 
        placeholder="Contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)} 
      />
      <button className="boton" onClick={handleCreateAccount}>Crear cuenta</button>
      {message && <p>{message}</p>}
    </div>
  );
}

export default Crear;