import { useState } from 'react';
import './App.css';
import TarjetaJuego from './components/TarjetaJuego';
import FormularioJuego from './components/FormularioJuego';
import TarjetaReseña from './components/TarjetaReseña';
import FormularioReseña from './components/FormularioReseña';
import EstadisticasPersonales from './components/EstadisticasPersonales';

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

  const [reseñas, setReseñas] = useState([
    {
      id: 1,
      juegoId: 1,
      juegoTitulo: "The Last of Us",
      texto: "Una obra maestra narrativa. La historia te atrapa desde el primer momento y los personajes son inolvidables.",
      fecha: "15/10/2025"
    },
    {
      id: 2,
      juegoId: 2,
      juegoTitulo: "Hollow Knight",
      texto: "Un metroidvania perfecto. El diseño de niveles es espectacular y la dificultad está muy bien balanceada.",
      fecha: "18/10/2025"
    }
  ]);

  const agregarJuego = (nuevoJuego) => {
    setJuegos([...juegos, nuevoJuego]);
  };

  const eliminarJuego = (id) => {
    const juegosActualizados = juegos.filter(juego => juego.id !== id);
    setJuegos(juegosActualizados);
  };

  const agregarReseña = (nuevaReseña) => {
    setReseñas([...reseñas, nuevaReseña]);
  };

  const eliminarReseña = (id) => {
    const reseñasActualizadas = reseñas.filter(reseña => reseña.id !== id);
    setReseñas(reseñasActualizadas);
  };

  return (
    <div className="App">
      <h1>🎮 GameTracker</h1>
      
      <section className="seccion">
        <EstadisticasPersonales juegos={juegos} reseñas={reseñas} />
      </section>

      <section className="seccion">
        <h2 className="titulo-seccion">📚 Mi Biblioteca</h2>
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
      </section>

      <section className="seccion">
        <h2 className="titulo-seccion">📝 Mis Reseñas</h2>
        <FormularioReseña 
          juegos={juegos} 
          onAgregarReseña={agregarReseña}
        />
        <div className="lista-reseñas">
          {reseñas.length === 0 ? (
            <p className="mensaje-vacio">No hay reseñas todavía. ¡Escribe la primera!</p>
          ) : (
            reseñas.map((reseña) => (
              <TarjetaReseña 
                key={reseña.id}
                reseña={reseña}
                onEliminar={eliminarReseña}
              />
            ))
          )}
        </div>
      </section>
    </div>
  );
}

export default App;