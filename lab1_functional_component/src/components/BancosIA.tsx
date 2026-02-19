import React from 'react';
import { bancos } from '../data/bancos';


const BancosIA: React.FC = () => {
  return (
    <section>
      <h2>Listado de Bancos 🏦</h2>

      <ul>
        {bancos.map((banco) => (
          <li key={banco.id}>
            <strong>{banco.nombre}</strong> - {banco.country}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default BancosIA;
