import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import { unicoPersonaje } from '../functions/api'

 const Personaje = () => {
 const [personajes, setPersonajes] = useState(null)
 
  const params = useParams()
  useEffect(() => {
    unicoPersonaje(params.id, setPersonajes)
  },[])
  return (
    <>
    <h2>Personaje con el id {params.id} </h2>
    <p>con el nombre {}</p>
    </>
    
  )
}
export default Personaje
