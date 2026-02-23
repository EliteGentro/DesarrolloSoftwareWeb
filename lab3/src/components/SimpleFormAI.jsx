import React, { useState, useEffect } from "react";
import MessageAI from "./MessageAI";
import "../ai.css";

const SimpleFormAI = () => {
  const [formState, setFormState] = useState({
    matricula: "",
    nombre: "",
    apellidos: "",
    edad: "",
    universidad: "",
    carrera: "",
    email: "",
    suggestion: "",
  });
  const [errors, setErrors] = useState({});
  const [showResults, setShowResults] = useState(false);

  const validateField = (name, value) => {
    let err = {};
    switch (name) {
      case "matricula":
        if (!/^[0-9]{6}$/.test(value)) {
          err.matricula = "La matrícula debe tener 6 dígitos numéricos";
        }
        break;
      case "edad":
        if (value && (value < 0 || value > 120)) {
          err.edad = "Ingresa una edad válida";
        }
        break;
      case "email":
        if (
          value &&
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)
        ) {
          err.email = "Correo electrónico inválido";
        }
        break;
      default:
        break;
    }
    return err;
  };

  const onInputChange = (e) => {
    const { name, value } = e.target;
    const fieldErrors = validateField(name, value);

    setFormState((prev) => {
      const next = { ...prev, [name]: value };
      if (name === "nombre" && value.length < 3) {
        next.suggestion = "¿Ese es tu nombre real?";
      } else if (name === "nombre") {
        next.suggestion = "";
      }
      return next;
    });

    setErrors((prev) => ({ ...prev, ...fieldErrors }));
    setShowResults(false);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const accumulated = {};
    for (const key of [
      "matricula",
      "edad",
      "email",
    ]) {
      Object.assign(accumulated, validateField(key, formState[key]));
    }
    setErrors(accumulated);
    if (Object.keys(accumulated).length === 0) {
      setShowResults(true);
    }
  };

  useEffect(() => {
    console.log("[SimpleFormAI] state changed", formState);
  }, [formState]);

  return (
    <>
      <form className="ai-form" onSubmit={onSubmit}>
        <div className="ai-segment">
          <h1>AI Signup</h1>
        </div>

        <label>
          <input
            type="text"
            placeholder="Matrícula (6 dígitos)"
            name="matricula"
            value={formState.matricula}
            onChange={onInputChange}
          />
        </label>
        {errors.matricula && <p className="error">{errors.matricula}</p>}

        <label>
          <input
            type="text"
            placeholder="Nombre"
            name="nombre"
            value={formState.nombre}
            onChange={onInputChange}
          />
        </label>
        {formState.suggestion && (
          <p className="suggestion">{formState.suggestion}</p>
        )}

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
        {errors.edad && <p className="error">{errors.edad}</p>}

        <label>
          <input
            type="email"
            placeholder="Correo electrónico"
            name="email"
            value={formState.email}
            onChange={onInputChange}
          />
        </label>
        {errors.email && <p className="error">{errors.email}</p>}

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

        <button className="ai-button red" type="submit">
          <i className="icon ion-md-cloud"></i> Submit AI
        </button>
      </form>

      {showResults && <MessageAI formState={formState} />}
    </>
  );
};

export default SimpleFormAI;
