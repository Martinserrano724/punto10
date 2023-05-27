import React from "react";
import { Form, Button, Card } from "react-bootstrap";
import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Swal from 'sweetalert2';
import ListaPelicula from "./ListaPelicula";


const FormularioPelicula = () => {
  let peliculasLocalStorage = JSON.parse(localStorage.getItem("listaPeliculas")) || [];
  const [nombrePelicula, setNombrePelicula] = useState("");
  const [descripcionPelicula, setDescripcionPelicula] = useState("");
  const [genero, setGenero] = useState("");
  let peliculaForm = { Nombre: "", descripcion: "", genero: "" };
  const [arrayPelis, setArrayPelis] = useState(peliculasLocalStorage);


  const handleSubmit = (e) => {
    e.preventDefault();
    if (validaciones() == "") {
      Swal.fire({
          title: 'Formulario',
          text: 'Datos Enviados',
          icon: 'success',
        })
        peliculaForm={nombrePelicula,descripcionPelicula,genero}
    setArrayPelis([...arrayPelis,peliculaForm]);
    setNombrePelicula("");
    setDescripcionPelicula("");
    setGenero("");

      }
      else {
        Swal.fire({
          title: 'ERROR',
          text: `${validaciones()}`,
          icon: 'error',
        })
      }
  };

  useEffect(() => {
    //se ejecuta en las montadas de domm
    localStorage.setItem("listaPeliculas", JSON.stringify(arrayPelis));
  }, [arrayPelis]);

  const valicacionTextoInput = (texto,input) => {
    if (texto != "" && texto.length < input) {
      return true;
    } else {
      return false;
    }
  };
  const validaciones = () => {
    let validacion = "";
    if (!valicacionTextoInput(nombrePelicula,100)) {
      validacion += "ERROR Nombre de Pelicula \n ";
    }
    if (!valicacionTextoInput(descripcionPelicula,400)) {
      validacion += "ERROR descripcion de Pelicula \n ";
    }
    
    return validacion;
  };
  const eliminarPeli = (idPeli) => {
    let posicionPeli = idPeli;


    let peliculaFiltradas = arrayPelis.filter((itemCita, index) => {
      if (index != posicionPeli) {
        return itemCita;
      }
    });
    setArrayPelis(peliculaFiltradas);
  };

  return (
    <div className=" p-5 ps-0 pe-0  body h-100">
      <h2 className="text-center mb-4">
        Administrador pacientes de veterinaria
      </h2>
      <div className="d-flex justify-content-center">
        <Form onSubmit={handleSubmit} className="p-0 formContenedor">
          <Card>
            <Card.Header>
              Llenar el formulario para Cargar una pelicula{" "}
            </Card.Header>
            <Card.Body className="p-0 ">
              <div className="contenedorDatos">
                <Form.Group className="mb-2 ps-3 pe-5  d-flex flex-row ">
                  <Form.Label className="col-4 align-self-center">
                    Nombre de Pelicula:
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="ingrese un Nombre de Pelicula"
                    onChange={(e) => setNombrePelicula(e.target.value)}
                    value={nombrePelicula}
                    className=" w-100"
                    maxLength={100}
                    minLength={1}
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-2 ps-3 pe-5  d-flex flex-row ">
                  <Form.Label className="col-4 align-self-center">
                    descripcion de Pelicula:
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="ingrese un Nombre de Pelicula"
                    onChange={(e) => setDescripcionPelicula(e.target.value)}
                    value={descripcionPelicula}
                    className=" w-100"
                    as="textarea"
                    rows={3}
                    cols={2}
                    maxLength={400}
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-2 ps-3 pe-5  d-flex flex-row ">
                  <Form.Label className="col-4 align-self-center">
                    genero de Pelicula:
                  </Form.Label>
                  <select  onChange={(e) => setGenero(e.target.value)}
                    value={genero} >
                  <option value="romance">Romance</option>
                  <option value="terror">Terror</option>
                  <option value="comedia">Comedia</option>
                  <option value="drama">Drama</option>
                  <option value="accion">Accion</option>
                  <option value="fantacia">Fantasia</option>
                </select>
                </Form.Group>
                
                </div>
              <Card.Footer className="d-flex justify-content-center">
                <Button type="submit">Agregue Nueva Pelicula</Button>
              </Card.Footer>
            </Card.Body>
          </Card>
        </Form>
      </div>
      <hr />
      <h3 className="text-center">Administra las citas Aqui</h3>
      <div className="">
        <ListaPelicula pelis={arrayPelis} eliminar={eliminarPeli}></ListaPelicula>
      </div>
    </div>
  );
};

export default FormularioPelicula;
