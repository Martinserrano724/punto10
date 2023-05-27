import React from "react";
import Card from "react-bootstrap/Card";
import { Button } from "react-bootstrap";


const Pelicula = ({ pelis, eliminar,index }) => {
  return (
    <Card className="contenedorPelicula  col-md-4 col-lg-3 m-1 p-0 m-0 rounded-4">
      <Card.Header className="cardTituloCita ps-3 m-0 ">
        <div className="  ">
          <div className="d-flex flex-column align-self-center ">
            <Card.Title className="fs-5 d-block  ">
              <div className="text-center">
               <span className="fs-6">Pelicula:</span>  {JSON.stringify(pelis.nombrePelicula)}
              </div>
            </Card.Title>
          </div>
        </div>
      </Card.Header>
      <Card.Body className="p-0 m-0 contenedorDatos ">
        <div className="contenedorDatos w-100 row p-3 m-0 ">
        <div className="p-0 m-0 d-flex d-row mb-2">
            <div className="col-4 fs-6   ">genero: </div>
            <div className="txtDatos h-100 w-100 rounded-4 text-center">{pelis.genero}</div>
          </div>
          <div className="p-0 m-0 d-flex d-row mb-2">
            <div className="col-4 fs-6 ">descripcion: </div>
            <div className="txtDatos  w-50 rounded-4 text-center h-100 w-100 overflow-auto">{pelis.descripcionPelicula}</div>
          </div>
          
        </div>
      </Card.Body>
      <Card.Footer className=" m-0 btnEliminar">
        <Button className="primary " onClick={() => eliminar(index)}>
          Eliminar
        </Button>
      </Card.Footer>
    </Card>
  );
};

export default Pelicula;
