import './interfaz.css'
import { FiPlus } from 'react-icons/fi';
import { useState } from 'react';

function Interfaz(){
    return (
        <>
            <header className='header'>
                <h1>Gestion de facturas</h1>
            </header>
            <div className="task-search">
                <input type='text' placeholder='Buscar Tareas ...' onChange={(e) =>console.log('Escribistes: ', e.target.value)}/>
            </div>
            <div className="task-filters">
                <select onChange={(e) => handleOnchange(e.target.value)}>
                    <option value="">Todas las Categorías</option>
                    <option value="Trabajo">Trabajo</option>
                    <option value="Personal">Personal</option>
                    <option value="Hogar">Hogar</option>
                </select>
                <select onChange={(e) => handleOnchange(e)}>
                    <option value="">Todos los estados</option>
                    <option value="completed">Completadas</option>
                    <option value="pending">Pendientes</option>
                </select>
            </div>
        </>
    )
}

export default Interfaz;