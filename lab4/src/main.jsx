import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './Usuarios.jsx';
import Manager from './Manager.jsx';
import Requirements from './Requirements.jsx';
import RequirementsAI from './RequirementsAI.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className="p-4">
      <h1 className="mb-4">Lab4 - Requisitos</h1>
      <h2 className="mt-5">Versión normal</h2>
      <Requirements />
      <hr className="my-5" />
      <h2 className="mt-5">Versión IA</h2>
      <RequirementsAI />
    </div>
  </StrictMode>,
)
