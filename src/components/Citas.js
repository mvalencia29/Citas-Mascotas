import React from "react";
import Cita from "./Cita";

const Citas = ({ citas, eliminarCita }) => {

  const title = Object.keys(citas).length === 0 ? "No hay Citas" : "Administra tus citas";

  return (
    <div className="container-citas">
      <h5 style={{ textAlign: "center", marginBottom: "32px" }}>{title}</h5>
      {citas.map((cita) => (
        <Cita cita={cita} key={cita.id} eliminarCita={eliminarCita} />
      ))}
    </div>
  );
};

export default Citas;
