import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FormularioPelicula from './components/FormularioPelicula'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <FormularioPelicula></FormularioPelicula>
    </>
  )
}

export default App
