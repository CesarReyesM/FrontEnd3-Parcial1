import React from 'react';

const Card = (props) => {
  return (
    <div>
        <h3>Datos del usuario: </h3>
        <label>Nombre: </label>
        <h3>{props.nombre}</h3>

        <label>Apellido: </label>
        <h3>{props.apellido}</h3>
        
    </div>
  )
}

export default Card