import React,{useEffect} from 'react'
import { todosPersonajes } from '../functions/functions'


 const Inicio = () => {
  
  useEffect(() => {
    todosPersonajes()
  },[])
  
  return (
    <div>Inicio</div>
  )
}

export default Inicio