import React, { useState } from "react";
import { Card, Form, Button } from "react-bootstrap";

const Formulario = () => {
  const [cita, setCita] = useState({
    mascota: "",
    raza: "",
    descripcionMascota: "",
    dueño: "",
    sintomas: "",
  });

  const HandleChange = (e) => {
    setCita({
      ...cita,
      [e.target.name]: e.target.value,
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
            value={cita.mascota}
            name="mascota"
            type="text"
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Raza</Form.Label>
          <Form.Control
            onChange={HandleChange}
            name="raza"
            value={cita.raza}
            type="text"
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Descripcion de la Mascota</Form.Label>
          <Form.Control
            onChange={HandleChange}
            name="descripcionMascota"
            value={cita.descripcionMascota}
            type="text"
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Nombre Dueño</Form.Label>
          <Form.Control
            onChange={HandleChange}
            name="dueño"
            value={cita.dueño}
            type="text"
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Sintomas</Form.Label>
          <Form.Control
            onChange={HandleChange}
            name="sintomas"
            value={cita.sintomas}
            as="textarea"
            rows="3"
          />
        </Form.Group>
        <Button
          variant="primary"
          type="button"
          id="btn-guardar"
          style={{ width: "100%", marginTop: "10px", border: "none" }}
        >
          Crear Cita
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Formulario;
