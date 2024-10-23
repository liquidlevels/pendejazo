"use client";
import React, { useState } from "react";

const Formulario = () => {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [edad, setEdad] = useState(0);

  const handleNameChange = (event) => {
    setNombre(event.target.value);
  };

  const handleLastnameChange = (event) => {
    setApellido(event.target.value);
  };

  return (
    <div className="h-screen">
      <form action="">
        <input
          type="text"
          name="name"
          placeholder="Name"
          onChange={handleNameChange}
        />
        <input
          type="text"
          name="last name"
          placeholder="Last name"
          onChange={handleLastnameChange}
        />
        <input
          type="text"
          name="last name"
          placeholder="Age"
          onChange={(event) => {
            setEdad(event.target.value);
          }}
        />
        <button type="submit">Submit</button>
      </form>
      <p>
        Hola {nombre} {apellido}, sos puto y tenes {edad} anos
      </p>
    </div>
  );
};

export default Formulario;
