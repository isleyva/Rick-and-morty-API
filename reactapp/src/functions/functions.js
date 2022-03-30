import axios from 'axios';

const todosPersonajes = () => {
    const peticion = await axios.get('https://rickandmortyapi.com/api/character/');
    state(peticion.data.results);
}

export {
    todosPersonajes
}