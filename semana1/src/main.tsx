import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import './clases/strings.ts'
import './clases/arrays.ts'
import './clases/objetos.ts'
import './clases/funciones.ts'
import './clases/array.ts'
import './clases/import.ts'
import Bancos from './components/Bancos.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Bancos />
  </StrictMode>,
)
