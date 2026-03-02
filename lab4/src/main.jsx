import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './Usuarios.jsx'
import Manager from './Manager.jsx';
import Requirements from './Requirements.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Requirements />
  </StrictMode>,
)
