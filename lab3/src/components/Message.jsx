import React from "react";
import { useState,useEffect } from "react";

const Message = (formState) => {
  return (
    <>
        <h3>Login Successfull</h3>
        <p>Matricula: {formState.formState.matricula}</p>
        <p>Nombre: {formState.formState.nombre}</p>
        <p>Apellidos: {formState.formState.apellidos}</p>
        <p>Edad: {formState.formState.edad}</p>
        <p>Universidad: {formState.formState.universidad}</p>
        <p>Carrera: {formState.formState.carrera}</p>
    </>
  );
};

export default Message;
