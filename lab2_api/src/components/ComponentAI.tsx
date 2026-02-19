import React from 'react'

type Props = {
  id: number;
  name: string;
  sprites?: string[];
  gender?: string;
  occupation?: string;
}

const ComponentAI: React.FC<Props> = ({ id, name, sprites = [], gender, occupation }) => {
  const img = (sprites || []).find(Boolean) ?? 'https://via.placeholder.com/300x300?text=Avatar'

  return (
    <div className="card shadow-sm h-100">
      <div style={{background: 'linear-gradient(90deg, #f8f9fa, #e9ecef)'}} className="p-3 text-center border-bottom">
      </div>
      <div className="card-body d-flex flex-column">
        <div className="d-flex align-items-center mb-3">
          <img src={img} alt={name} className="rounded-circle me-3" style={{width:80, height:80, objectFit:'cover'}}/>
          <div>
            <h5 className="mb-0 text-capitalize">{name}</h5>
            <small className="text-muted">ID #{id}</small>
          </div>
        </div>

        <div className="mb-3">
          <span className="badge bg-primary me-2 text-capitalize">{occupation ?? 'Desconocida'}</span>
          <span className="badge bg-secondary text-capitalize">{gender ?? 'Desconocido'}</span>
        </div>

        <p className="card-text text-muted flex-grow-1">A compact, modern presentation that focuses on readability and quick metadata access. Designed with accessible contrast, responsive images and clear affordances for actions.</p>

        <div className="d-flex gap-2 mt-3">
          <button className="btn btn-outline-primary btn-sm">Ver más</button>
          <button className="btn btn-outline-secondary btn-sm">Compartir</button>
        </div>
      </div>
    </div>
  )
}

export default ComponentAI
