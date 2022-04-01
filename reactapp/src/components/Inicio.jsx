import React,{useEffect, useState} from 'react'
import { todosPersonajes } from '../functions/api'


 const Inicio = () => {
  
  const [personajes, setPersonajes] = useState(null)

  useEffect(() => {
    todosPersonajes(setPersonajes)
  },[])
  
  return (
    <>
    {personajes != null ? (
      personajes.map(personaje => (
        <div key={personaje.id}>
          <a href={"<personajes/${personajes.id}"}>{personaje.name}</a>
          
          </div>))

    ) : ("Cargando...")}
    
    </>
  )
}

export default Inicio