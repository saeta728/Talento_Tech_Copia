import './login.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

   //Simulamos un usuario con storedUser y storedPassword.
   // Al hacer clic en el botón de "ENVIAR", validamos las credenciales y, 
   // si son correctas, redirigimos a la página de interfaz.
   // Éste User y el Password vienen por defecto para el inicial único usuario.
  const defaultUser = { nombre: 'usuarioDemo', password: 'passwordDemo', email: 'saeta@hotmail.es' };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Obtener los usuarios almacenados en localStorage
    const users = JSON.parse(localStorage.getItem('users')) || [];

    // Buscar el usuario, ya sea el predeterminado o uno creado
    const user = users.find((user) => user.nombre === username && user.password === password);

    // Verificar si coincide con el usuario por defecto
    if ((username === defaultUser.nombre && password === defaultUser.password) || user) {
      navigate('/interfaz'); // Redirigir si las credenciales son correctas
    } else {
      setErrorMessage('Usuario o contraseña incorrectos');
    }

  };





  return (
    <>
      <form className='seccion' onSubmit={handleSubmit}>
        <h1 className='login'>Login</h1>
        <input
          className='ing ing_usuario'
          type="text"
          placeholder='Ingrese su usuario'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          className='ing ing_contraseña'
          type="password"
          placeholder='Ingrese su contraseña'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
        <button type='submit' className='boton'>ENVIAR</button>
        <button type="button" onClick={() => navigate('/recuperar')} className='boton'>
          Recuperar contraseña
        </button>
        <button type="button" onClick={() => navigate('/crear')} className='boton'>
          Crear cuenta
        </button>
      </form>
    </>
  );
}

export default Login;