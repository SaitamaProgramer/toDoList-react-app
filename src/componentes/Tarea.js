import React from "react";
import '../hojas-de-estilo/Tarea.css'
import { AiOutlineCloseCircle } from "react-icons/ai";


export default function Tarea( {id, texto, completada, completarTarea, eliminarTarea }){
    return (
        <div className={ completada ? 'tarea-contenedor completada' : 'tarea-contenedor'}>
            <div 
                className='tarea-texto'
                onClick={ () => completarTarea(id)}    
            >
                
                {texto}
            </div>
            <div
                onClick={ () => eliminarTarea(id)}
            >
                < AiOutlineCloseCircle className='tarea-icono'/>
            </div>
        </div>
    )
}