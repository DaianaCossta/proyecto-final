import './App.css';

function App() {
 //array de varios juegos//
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
    },
    {
    id: 4,
    titulo: "Stardew Valley",
    genero: "Simulación",
    completado: true,
    puntuacion: 5
  }

  ];

  return (
    <div className="App">
      <h1>🎮 GameTracker</h1>
      
      <div className="biblioteca">
        {juegos.map((juego) => ( //recorre el array y crea una tarjeta para cada juego//
           //key para que react identifique que elementos cambiaron, se agregaron o eliminaron//
          <div key={juego.id} className="tarjeta-juego"> 
            <h2>{juego.titulo}</h2>
            <p>Género: {juego.genero}</p>
            <p>⭐ Puntuación: {juego.puntuacion}/5</p>
            <p>{juego.completado ? "✅ Completado" : "⏳ En progreso"}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;