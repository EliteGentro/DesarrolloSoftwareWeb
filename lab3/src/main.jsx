import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './ai.css'          // styles for the AI components (separate from App.css)
import App from './App.jsx'
import SimpleForm from './components/SimpleForm.jsx'
import SimpleFormAI from './components/SimpleFormAI.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* original component */}
    <SimpleForm />

    {/* visual separator between regular and AI versions */}
    <hr style={{ margin: '2rem 0', borderColor: '#ccc' }} />

    {/* AI‑enhanced form */}
    <SimpleFormAI />
  </StrictMode>,
)
