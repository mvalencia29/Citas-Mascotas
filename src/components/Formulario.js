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
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
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
