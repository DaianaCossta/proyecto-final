import './App.css';
import TarjetaJuego from './components/TarjetaJuego';

function App() {
  const juegos = [
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
  ];

  return (
    <div className="App">
      <h1>🎮 GameTracker</h1>
      
      <div className="biblioteca">
        {juegos.map((juego) => (
          <TarjetaJuego key={juego.id} juego={juego} />
        ))}
      </div>
    </div>
  );
}

export default App;