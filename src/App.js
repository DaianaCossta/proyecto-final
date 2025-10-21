import { useState } from 'react';
import './App.css';
import TarjetaJuego from './components/TarjetaJuego';
import FormularioJuego from './components/FormularioJuego';

function App() {
  const [juegos, setJuegos] = useState([
    {
      id: 1,
      titulo: "The Last of Us",
      genero: "Aventura",
      completado: true,
      puntuacion: 5
    },
    {
      id: 2,
      titulo: "Hollow Knight",
      genero: "Metroidvania",
      completado: true,
      puntuacion: 5
    },
    {
      id: 3,
      titulo: "Elden Ring",
      genero: "RPG",
      completado: false,
      puntuacion: 4
    }
  ]);

  // Función para agregar un nuevo juego
  const agregarJuego = (nuevoJuego) => {
    setJuegos([...juegos, nuevoJuego]);
  };

  // ✨ NUEVA: Función para eliminar un juego
  const eliminarJuego = (id) => {
    // Filtrar el array: mantener todos los juegos EXCEPTO el que tiene este id
    const juegosActualizados = juegos.filter(juego => juego.id !== id);
    setJuegos(juegosActualizados);
  };

  return (
    <div className="App">
      <h1>🎮 GameTracker</h1>
      
      <FormularioJuego onAgregarJuego={agregarJuego} />
      
      <div className="biblioteca">
        {juegos.map((juego) => (
          <TarjetaJuego 
            key={juego.id} 
            juego={juego}
            onEliminar={eliminarJuego}  
          />
        ))}
      </div>
    </div>
  );
}

export default App;