import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { ExpertApp } from './components/ExpertApp.jsx'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ExpertApp   />
  </StrictMode>,
)
