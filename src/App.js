import React from "react";
import Topbar from "./components/Topbar";
import { Row, Col } from "react-bootstrap";
import Formulario from "./components/Formulario";
import Citas from "./components/Citas";

function App() {
  return (
    <div className="App">
      <Topbar />
      <div className="container">
        <Row>
          <Col xs={12} sm={12} md={12} lg={6} xl={6}>
            <Formulario />
          </Col>
          <Col xs={12} sm={12} md={12} lg={6} xl={6}>
          <Citas />
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default App;
