import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/login.jsx'; //import Login from './login';
import Interfaz from './components/interfaz.jsx'; //import Interfaz from './interfaz';
import Recuperar from './components/recuperar.jsx';
import Crear from './components/crear.jsx';
import CuentaCobro from './components/CuentaCobro.jsx';
import Paso from './components/Paso.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/interfaz' element={<Interfaz />} />
        <Route path='/recuperar' element={<Recuperar />} />
        <Route path='/crear' element={<Crear />} />
        <Route path='/cuentacobro' element={<CuentaCobro />} />
        <Route path='/paso' element={<Paso />} />
      </Routes>
    </Router>
  );
}

export default App;
