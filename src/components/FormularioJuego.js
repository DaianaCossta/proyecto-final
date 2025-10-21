import { useState } from 'react';
import './FormularioJuego.css';

function FormularioJuego({ onAgregarJuego }) {
  // Estados para cada campo del formulario
  const [titulo, setTitulo] = useState("");
  const [genero, setGenero] = useState("");
  const [puntuacion, setPuntuacion] = useState(3);
  const [completado, setCompletado] = useState(false);

  // Función que se ejecuta al enviar el formulario
  const manejarSubmit = (e) => {
    e.preventDefault(); // Evita que la página se recargue
    
    // Validación simple
    if (titulo.trim() === "" || genero.trim() === "") {
      alert("Por favor completa todos los campos");
      return;
    }

    // Crear objeto con los datos del nuevo juego
    const nuevoJuego = {
      id: Date.now(), // ID temporal (luego vendrá del backend)
      titulo: titulo,
      genero: genero,
      puntuacion: puntuacion,
      completado: completado
    };

    // Llamar a la función que nos pasaron por props
    onAgregarJuego(nuevoJuego);

    // Limpiar el formulario
    setTitulo("");
    setGenero("");
    setPuntuacion(3);
    setCompletado(false);
  };

  return (
    <div className="formulario-container">
      <h2>➕ Agregar Nuevo Juego</h2>
      
      <form onSubmit={manejarSubmit}>
        <div className="campo">
          <label>Título del juego:</label>
          <input
            type="text"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
            placeholder="Ej: The Last of Us"
          />
        </div>

        <div className="campo">
          <label>Género:</label>
          <input
            type="text"
            value={genero}
            onChange={(e) => setGenero(e.target.value)}
            placeholder="Ej: Aventura"
          />
        </div>

        <div className="campo">
          <label>Puntuación: {puntuacion}/5</label>
          <input
            type="range"
            min="1"
            max="5"
            value={puntuacion}
            onChange={(e) => setPuntuacion(Number(e.target.value))}
          />
        </div>

        <div className="campo-checkbox">
          <label>
            <input
              type="checkbox"
              checked={completado}
              onChange={(e) => setCompletado(e.target.checked)}
            />
            ¿Completado?
          </label>
        </div>

        <button type="submit" className="btn-agregar">
          Agregar Juego
        </button>
      </form>
    </div>
  );
}

export default FormularioJuego;