import React from 'react';

const VariablesIA: React.FC = () => {
  const nombre: string = 'Carlos';
  const edad: number = 30;
  const activo: boolean = true;

  return (
    <section>
      <h2>Variables en React + TypeScript</h2>
      <p>Nombre: {nombre}</p>
      <p>Edad: {edad}</p>
      <p>Estado: {activo ? 'Activo ✅' : 'Inactivo ❌'}</p>
    </section>
  );
};

export default VariablesIA;
