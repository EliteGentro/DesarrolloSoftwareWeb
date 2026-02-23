import React, { useEffect } from "react";

const MessageAI = ({ formState }) => {
  useEffect(() => {
    console.log("[MessageAI] mounted with state:", formState);
  }, [formState]);

  const greeting = `Hola, ${formState.nombre} ${formState.apellidos}`.toUpperCase();
  const ageCategory = formState.edad >= 18 ? "Adulto" : "Menor";

  return (
    <div className="ai-message">
      <h3>✅ AI Login Successful</h3>
      <p>{greeting}</p>
      <p>Matricula: {formState.matricula}</p>
      <p>Nombre: {formState.nombre}</p>
      <p>Apellidos: {formState.apellidos}</p>
      <p>Edad: {formState.edad} ({ageCategory})</p>
      {formState.email && <p>Email: {formState.email}</p>}
      <p>Universidad: {formState.universidad}</p>
      <p>Carrera: {formState.carrera}</p>
      <p className="note">Esta información ha sido verificada por AI.</p>
    </div>
  );
};

export default MessageAI;
