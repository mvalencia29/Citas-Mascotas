import React, { useState } from "react";
import { Card, Form, Button } from "react-bootstrap";
import { v4 as uuid } from "uuid";

const Formulario = ({ crearCitas }) => {
  const [cita, setCita] = useState({
    mascota: "",
    raza: "",
    descripcionMascota: "",
    dueño: "",
    sintomas: "",
  });

  const { mascota, raza, descripcionMascota, dueño, sintomas } = cita;

  const HandleChange = (e) => {
    setCita({
      ...cita,
      [e.target.name]: e.target.value,
    });
  };

  const HandleClick = () => {
    //Validacion
    if (
      mascota.trim() === "" ||
      raza.trim() === "" ||
      descripcionMascota.trim() === "" ||
      dueño.trim() === "" ||
      sintomas.trim() === ""
    ) {
      alert("Por favor Completa los campos");
      return;
    }

    //Asignar un ID
    cita.id = uuid();

    //Crear Cita
    crearCitas(cita);

    //Reiniciar Formulario
    setCita({
      mascota: "",
      raza: "",
      descripcionMascota: "",
      dueño: "",
      sintomas: "",
    });
  };

  return (
    <Card
      className="container-formulario"
      style={{ minWidth: "400px", background: "transparent", border: "none" }}
    >
      <Card.Body>
        <Card.Title>Crear Cita</Card.Title>
        <Form.Group>
          <Form.Label>Nombre Mascota</Form.Label>
          <Form.Control
            onChange={HandleChange}
            value={mascota}
            name="mascota"
            type="text"
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Raza</Form.Label>
          <Form.Control
            onChange={HandleChange}
            name="raza"
            value={raza}
            type="text"
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Descripcion de la Mascota</Form.Label>
          <Form.Control
            onChange={HandleChange}
            name="descripcionMascota"
            value={descripcionMascota}
            type="text"
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Nombre Dueño</Form.Label>
          <Form.Control
            onChange={HandleChange}
            name="dueño"
            value={dueño}
            type="text"
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Sintomas</Form.Label>
          <Form.Control
            onChange={HandleChange}
            name="sintomas"
            value={sintomas}
            as="textarea"
            rows="3"
          />
        </Form.Group>
        <Button
          variant="primary"
          type="button"
          id="btn-guardar"
          style={{ width: "100%", marginTop: "10px", border: "none" }}
          onClick={HandleClick}
        >
          Crear Cita
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Formulario;
