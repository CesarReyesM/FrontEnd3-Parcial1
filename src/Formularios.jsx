import React, {useState} from 'react';
import Card from './Card';

const Formulario =() => {
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [error, setError] = useState('');
    const [mostrar, setMostrar] = useState(false)
    
    const handlInputNombre = (e) =>{
        setNombre(e.target.value);
    }
    const handlInputApellido = (e) =>{
        setApellido(e.target.value);
    }

    const handleSubmit = (e) =>{
        e.preventDefault();

        if(nombre.trim().length < 4 || apellido.trim().length <7  ){
            setError("Los campos deben ser llenados correctamente... ");
            return;
        }else{
            setError("");
            setMostrar(true);
            return;
        }
    }
   

    return (
        <form onSubmit={handleSubmit}>
            <div> 
                <label>Nombre: </label>
                <input type="text" id="nombre" value={nombre} onChange={handlInputNombre } />
            </div>

            <div> 
                <label>Apellido: </label>
                <input type="text" id="apellido" value={apellido} onChange={handlInputApellido } />
            </div>
            {error && <div style={{ color: 'red' }}>{error}</div> }
            <button style={{backgroundColor:"blue" }} type='submit' >Enviar</button>
            
            {mostrar && <Card nombre = {nombre} apellido={apellido} /> }

        </form>


    )


}

export default Formulario;