import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Importamos useNavigate para redirigir


function Recuperar() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate(); // Hook de navegación

  const defaultEmail = 'saeta@hotmail.es'; // Correo predeterminado
    // Función que se ejecuta al presionar el botón "Enviar"
  const handleRecovery = () => {
  // Obtener usuarios almacenados en localStorage
  const users = JSON.parse(localStorage.getItem('users')) || [];

  // Verificar si el correo ingresado es el predeterminado
  if (email === defaultEmail) {
    setMessage(`Se ha enviado un correo de recuperación a ${email}`);
    
    //Si el correo es correcto, se muestra un mensaje y se redirige al usuario a la página de login después de 2 segundos con setTimeout(() => navigate('/'), 2000);
    setTimeout(() => navigate('/'), 2000); // Redirigir al login después de 2 segundos
  }
  // Verificar si el correo existe en los usuarios creados
  else if (users.some((user) => user.email === email)) {
    setMessage(`Se ha enviado un correo de recuperación a ${email}`);
    setTimeout(() => navigate('/'), 2000); // Redirigir al login después de 2 segundos
  } else {
    setMessage('El correo ingresado no está registrado o no es válido');
    //Si el correo es incorrecto, el usuario se queda en la página de recuperación y se muestra el mensaje de error.
    }
  };

  return (
    <div className="seccion">
      <h1 className= "login">Recuperar contraseña</h1>
      <input 
        className='ing' 
        type="email" 
        placeholder="Ingrese su correo"
        value={email}
        onChange={(e) => setEmail(e.target.value)} 
      />
      <button className="boton" onClick={handleRecovery}>Enviar</button>
      {message && <p>{message}</p>}
    </div>
  );
}

export default Recuperar;