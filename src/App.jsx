import { useState } from 'react'
import './App.css'
import Dia from './componentes/Dia'
import Semana from './componentes/Semana'
import Seach from './componentes/Seach'
import Gps from './componentes/Gps'
import Adicionales from './componentes/Adicionales'
import Cambio from './componentes/Cambio'
import useApi from './componentes/servicios/useApi'

function App() {
  const { data, currentDate, cambioImg} = useApi();

  return (
    <>
      <section className='principal'>
        <Seach />
        <Gps />
        <Dia data={data} currentDate={currentDate} cambioImg={cambioImg}/>
      </section>
      <Cambio />
      <Semana data={data} cambioImg={cambioImg}/>
      <Adicionales data={data}/>
    </>
  )
}

export default App
