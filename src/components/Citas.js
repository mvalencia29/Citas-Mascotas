import React, { useEffect, useState } from "react";
import Cita from "./Cita";

const Citas = ({ citas, eliminarCita }) => {
  
  const title = citas.lenght === 0 ? "No hay Citas" : "Administra tus citas";

  return (
    <div className="container-citas">
      <Title title={title} />
      {citas.map((cita) => (
        <Cita cita={cita} key={cita.id} eliminarCita={eliminarCita} />
      ))}
    </div>
  );
};

const Title = (props) => {
  const { title } = props;

  return <h5 style={{ textAlign: "center", marginBottom: "32px" }}>{title}</h5>;
};

export default Citas;
