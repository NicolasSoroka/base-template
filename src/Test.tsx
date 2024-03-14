import React from "react";
import { Button } from "primereact/button";
import "primeicons/primeicons.css";

const Test = () => {
  return (
    <div>
      <h2>test primereact</h2>
      <Button icon="pi pi-check" />
      <Button label="Submit" icon="pi pi-check" />
      <Button label="Submit" icon="pi pi-check" iconPos="right" />
      <i className="pi pi-spin pi-spinner" style={{ fontSize: "2rem" }}></i>
      <i className="pi pi-spin pi-cog" style={{ fontSize: "2rem" }}></i>
    </div>
  );
};

export default Test;
