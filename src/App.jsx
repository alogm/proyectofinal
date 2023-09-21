import { useState } from 'react'
import './App.css'
import Dia from './componentes/Dia'
import Semana from './componentes/Semana'
import Seach from './componentes/Seach'
import Gps from './componentes/Gps'
import Adicionales from './componentes/Adicionales'
import Cambio from './componentes/Cambio'

function App() {
  

  return (
    <>
    <section className='principal'>
  <Seach/>
  <Gps/>
  <Dia/>
  </section>
  <Cambio>gol</Cambio>
  <Semana/>
  
  <Adicionales/>
  
    </>
  )
}

export default App
