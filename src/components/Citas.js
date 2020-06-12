import React from "react";
import Cita from "./Cita";

const Citas = () => {
  return (
    <div className="container-citas">
      <Title title="Administra tus citas" />
      <Cita />
    </div>
  );
};

const Title = (props) => {
  const { title } = props;

  return <h5 style={{ textAlign: "center", marginBottom: "32px" }}>{title}</h5>;
};

export default Citas;
