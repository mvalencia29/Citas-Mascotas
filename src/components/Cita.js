import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";

const Cita = ({cita, eliminarCita}) => {

  return (
    <Card
      style={{ minWidth: "400px", background: "white", border: "none", margin: "10px" }}
    >
      <Card.Body>
      <p>Nombre Mascota : {cita.mascota}</p>
      <p>Raza : {cita.raza}</p>
      <p>Descripcion de la mascota : {cita.descripcionMascota}</p>
      <p>Nombre Dueño : {cita.dueño}</p>
      <p>Sintomas : {cita.sintomas}</p>
        <Button
          variant="primary"
          type="button"
          id="btn-guardar"
          style={{ width: "100%", border: "none" }}
          onClick={() => eliminarCita(cita.id)}
        >
          Eliminar
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Cita;
