import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Bancos from './components/Bancos'
import HolaMundo from './components/HolaMundo'
import Variables from './components/Variables'

import HolaMundoIA from './components/HolaMundoIA'
import VariablesIA from './components/VariablesIA'
import BancosIA from './components/BancosIA'

function App() {

  return (
    <>
      <HolaMundo/>
      <Variables/>
      <Bancos />

      <HolaMundoIA/>
      <VariablesIA/>
      <BancosIA />
    </>
  )
}

export default App
