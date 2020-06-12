import React from "react";
import { Card } from "react-bootstrap";

const Citas = () => {
  return (
    <div className="container-citas">  
          <Title title={10} />
    </div>
  );
};

const Title = (props) => {
  const { title } = props;

  return (
    <div>
      <h5 style={{ textAlign: "center"}}>{title}</h5>
    </div>
  );
};

export default Citas;
