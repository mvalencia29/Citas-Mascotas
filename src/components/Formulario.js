import React from "react";
import { Card, Form, Button } from "react-bootstrap";

const Formulario = () => {
  return (
    <Card
      className="container-formulario"
      style={{ minWidth: "400px", background: "transparent", border: "none" }}
    >
      <Card.Body>
        <Card.Title>Crear Cita</Card.Title>
        <Form.Group>
          <Form.Label>Nombre Mascota</Form.Label>
          <Form.Control type="text" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Raza</Form.Label>
          <Form.Control type="text" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Descripcion de la Mascota</Form.Label>
          <Form.Control type="text" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Nombre Dueño</Form.Label>
          <Form.Control type="text" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Sintomas</Form.Label>
          <Form.Control as="textarea" rows="3" />
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
