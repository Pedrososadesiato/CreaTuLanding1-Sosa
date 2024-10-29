import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer'
import NavBar from './componentes/NavBar/NavBar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <NavBar/>


    <div>
    <h1>Desiato Shop</h1>
    </div>

    <ItemListContainer mensaje = "Inicio del ecommerce"/>
    

   
    
        
    </>
  )
}

export default App
