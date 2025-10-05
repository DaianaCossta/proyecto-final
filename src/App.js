import './App.css';

function App() {
  // Datos de prueba de un juego
  const juego = {
    titulo: "The Last of Us",
    genero: "Aventura",
    completado: true,
    puntuacion: 5
  };

  return (
    <div className="App">
      <h1>🎮 GameTracker</h1>
      
      <div className="tarjeta-juego">
        <h2>{juego.titulo}</h2>
        <p>Género: {juego.genero}</p>
        <p>⭐ Puntuación: {juego.puntuacion}/5</p>
        <p>{juego.completado ? "✅ Completado" : "⏳ En progreso"}</p>
      </div>
    </div>
  );
}

export default App;