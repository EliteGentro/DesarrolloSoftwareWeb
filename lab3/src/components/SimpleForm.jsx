import React from "react";
import { useState, useEffect } from "react";
import Message from "./Message";

const SimpleForm = () => {
  const [button, setButton] = useState(false);
  const [formState, setFormState] = useState({
    matricula: "123456",
    nombre: "Jorge",
    apellidos: "Carvajal",
    edad: 25,
    universidad: "Universidad de Guadalajara",
    carrera: "Ingeniería en Computación",
  });

  const onInputChange = (event) => {
    const { name, value } = event.target;
    setButton(false);
    setFormState({ ...formState, [name]: value });
  };

  useEffect(() => {
    // console.log('useEffect called!');
  }, []);
  useEffect(() => {
    // console.log('formState changed!');
  }, [formState]);

  return (
    <>
      <form>
        <div className="segment">
          <h1>Sign up</h1>
        </div>

        <label>
          <input
            type="text"
            placeholder="Matrícula"
            name="matricula"
            value={formState.matricula}
            onChange={onInputChange}
          />
        </label>
        <label>
          <input
            type="text"
            placeholder="Nombre"
            name="nombre"
            value={formState.nombre}
            onChange={onInputChange}
          />
        </label>
        <label>
          <input
            type="text"
            placeholder="Apellidos"
            name="apellidos"
            value={formState.apellidos}
            onChange={onInputChange}
          />
        </label>
        <label>
          <input
            type="number"
            placeholder="Edad"
            name="edad"
            value={formState.edad}
            onChange={onInputChange}
          />
        </label>
        <label>
          <input
            type="text"
            placeholder="Universidad"
            name="universidad"
            value={formState.universidad}
            onChange={onInputChange}
          />
        </label>
        <label>
          <input
            type="text"
            placeholder="Carrera"
            name="carrera"
            value={formState.carrera}
            onChange={onInputChange}
          />
        </label>
        <button
          className="red"
          type="button"
          onClick={() => setButton(!button)}
        >
          <i className="icon ion-md-lock"></i> Log in
        </button>
      </form>

      {button && formState.matricula === "123456" && <Message formState={formState} />}
    </>
  );
};

export default SimpleForm;
