import React from 'react';
import Pelicula from './Pelicula';

const ListaPelicula = ({pelis,eliminar}) => {
    return (
        < div className='container-fluid'>
        <div className="row d-flex justify-content-evenly align-items-center">
           { pelis.map((pelis,index)=>{          
           return <Pelicula  className='h-100' pelis={pelis} key={index} eliminar={eliminar} index={index}></Pelicula>})}
        </div>
        </div>
    );
};

export default ListaPelicula;