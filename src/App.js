import React, { useState, useEffect } from "react";
import Topbar from "./components/Topbar";
import { Row, Col } from "react-bootstrap";
import Formulario from "./components/Formulario";
import Citas from "./components/Citas";

function App() {
  let citasIniciales = JSON.parse(localStorage.getItem("citas"));
  if (!citasIniciales) {
    citasIniciales = [];
  }

  const [citas, setCitas] = useState(citasIniciales);

  const crearCitas = (cita) => {
    setCitas([...citas, cita]);
  };

  useEffect(() => {
    if (citas) {
      localStorage.setItem("citas", JSON.stringify(citas));
    } else {
      localStorage.setItem("citas", JSON.stringify([]));
    }
  }, [citas]);

  const eliminarCita = (id) => {
    const nuevasCitas = citas.filter((cita) => cita.id !== id);
    setCitas(nuevasCitas);
  };

  return (
    <div className="App">
      <Topbar />
      <div className="container">
        <Row>
          <Col xs={12} sm={12} md={12} lg={6} xl={6}>
            <Formulario crearCitas={crearCitas} />
          </Col>
          <Col xs={12} sm={12} md={12} lg={6} xl={6}>
            <Citas citas={citas} eliminarCita={eliminarCita} />
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default App;
