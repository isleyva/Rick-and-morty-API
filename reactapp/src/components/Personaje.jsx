import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import { unicoPersonaje } from '../functions/api'

 const Personaje = () => {
  const [personaje, setPersonajes] = useState(null)
 
  const params = useParams()
  useEffect(() => {
    unicoPersonaje(params.id, setPersonajes)
  },[])
  return (
   <>
   {personaje != null ?( 
    <div>
      <h2>Personaje con el id {params.id} </h2>
      <p>con el nombre {personaje.name} </p>
      <image src={personaje.image} alt="" />
    </div>
   ):("Cargando...")}
    
    </>
    
  )
}
export default Personaje
