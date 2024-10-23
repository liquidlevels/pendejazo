"use client";
import React, { Children, useState } from "react";

const FormularioMascota = () => {
  const [mascota, setMascota] = useState({
    nombre: "",
    edad: "",
    raza: "",
    tipoAnimal: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(mascota);
  };

  const handleData = (event) => {
    event.preventDefault();
    const { name, value } = event.target;

    setMascota({
      ...mascota,
      [name]: value,
    });
  };
  return (
    <main className="w-screen h-screen flex flex-col items-center">
      <article className="flex flex-col w-[300px] h-[350px] mt-[200px] border rounded-md bg-[#f5f6f7] p-4">
        <h2 className="font-bold text-2xl self-center">Registro Mascota</h2>
        <form
          action=""
          onSubmit={handleSubmit}
          className="pt-2 flex flex-col px-2"
        >
          <label htmlFor="nombre" className="pt-1">
            Nombre
          </label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            value={mascota.nombre}
            onChange={handleData}
            className="border"
          />
          <label htmlFor="edad" className="pt-1">
            Edad
          </label>
          <input
            type="text"
            id="edad"
            name="edad"
            value={mascota.edad}
            onChange={handleData}
            className="border"
          />
          <label htmlFor="raza" className="pt-1">
            Raza
          </label>
          <input
            type="text"
            id="raza"
            name="raza"
            value={mascota.raza}
            onChange={handleData}
            className="border"
          />
          <label htmlFor="tipoAnimal" className="pt-1">
            Tipo de animal
          </label>
          <select
            id="tipoAnimal"
            className="space-x-2 border p-1 mt-1"
            name="tipoAnimal"
            value={mascota.tipoAnimal}
            onChange={handleData}
          >
            <option value="" disabled selected>
              Select your option
            </option>
            <option value="gato">Gato</option>
            <option value="perro">Perro</option>
            <option value="perico">Perico</option>
            <option value="lagarto">Lagarto</option>
          </select>
          <button
            type="submit"
            // onClick={handleSubmit}
            className="self-center bg-gray-200 border rounded-md font-bold size-fit py-2 px-4 pt-2 mt-2"
          >
            Registrar
          </button>
        </form>
      </article>
    </main>
  );
};

export default FormularioMascota;
