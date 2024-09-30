import './login.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


function Encabezado() {
  return(
    <div className='header'>
      <div className='espacio_imagen'>
      <img src="/public/logo.png" alt="Logo" className="imagen-logo" />
      </div>
      <h1 className='titulo'>AUTOSENS</h1>
    </div>
  )
};


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

    // Obtiene los usuarios almacenados en localStorage
    const users = JSON.parse(localStorage.getItem('users')) || [];

    // Busca el usuario, ya sea el predeterminado o uno creado
    const user = users.find((user) => user.nombre === username && user.password === password);

    // Verifica si coincide con el usuario por defecto
    if ((username === defaultUser.nombre && password === defaultUser.password) || user) {
      navigate('/Paso'); // Redirige si las credenciales son correctas
    } else {
      setErrorMessage('Usuario o contraseña incorrectos');
    }

  };

  return (
    <>
    <body>
      <form className='seccion' onSubmit={handleSubmit}>
        <h1 className='login'>Login</h1>

          <input className='ing ing_usuario' type="text" placeholder='Ingrese su usuario' value={username}onChange={(e) => setUsername(e.target.value)}/>
          <input className='ing ing_contraseña' type="password" placeholder='Ingrese su contraseña' value={password} onChange={(e) => setPassword(e.target.value)}/>

        {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
        <div className="boton_contenedor">
        <button type='submit' className='boton'>ENVIAR</button>
        <button type="button" onClick={() => navigate('/recuperar')} className='boton'>
          Recuperar contraseña
        </button>
        </div>
        <button type="button" onClick={() => navigate('/crear')} className='boton'>
          <small>¿No tienes cuenta?</small>
          Crear cuenta
        </button>
      </form>
    </body>
    </>
  );
}

export default Login;
export {Encabezado};

