import {BrowserRouter,Routes, Route,} from 'react-router-dom'
import Inicio from './components/Inicio'
import Personaje from './components/Personaje'
import "./index.css"

function App() {
  return (
    <div className="contene">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Inicio></Inicio>}></Route>
          <Route path="/personaje/:id" element={<Personaje></Personaje>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
