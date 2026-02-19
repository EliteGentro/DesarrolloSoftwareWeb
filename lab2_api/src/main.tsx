import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { CustomHook } from './components/CustomHook.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CustomHook></CustomHook>
  </StrictMode>,
)
