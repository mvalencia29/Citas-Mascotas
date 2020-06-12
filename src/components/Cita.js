import React from "react";
import { Card, Form, Button } from "react-bootstrap";

const Cita = () => {
  return (
    <Card
      style={{ minWidth: "400px", background: "white", border: "none", margin: "10px" }}
    >
      <Card.Body>
      <p>Nombre Mascota : </p>
      <p>Raza : </p>
      <p>Descripcion de la mascota : </p>
      <p>Nombre Dueño : </p>
      <p>Sintomas : </p>
        <Button
          variant="primary"
          type="button"
          id="btn-guardar"
          style={{ width: "100%", border: "none" }}
        >
          Eliminar
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Cita;
