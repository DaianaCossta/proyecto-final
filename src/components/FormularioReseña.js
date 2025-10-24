import { useState } from 'react';
import './FormularioReseña.css';

function FormularioReseña({ juegos, onAgregarReseña }) {
  const [juegoSeleccionado, setJuegoSeleccionado] = useState("");
  const [textoReseña, setTextoReseña] = useState("");

  const manejarSubmit = (e) => {
    e.preventDefault();

    if (juegoSeleccionado === "" || textoReseña.trim() === "") {
      alert("Por favor completa todos los campos");
      return;
    }

    const juegoEncontrado = juegos.find(j => j.id === Number(juegoSeleccionado));
    
    if (!juegoEncontrado) {
      alert("Selecciona un juego válido");
      return;
    }

    const nuevaReseña = {
      id: Date.now(),
      juegoId: juegoEncontrado.id,
      juegoTitulo: juegoEncontrado.titulo,
      texto: textoReseña,
      fecha: new Date().toLocaleDateString('es-ES')
    };

    onAgregarReseña(nuevaReseña);

    setJuegoSeleccionado("");
    setTextoReseña("");
  };

  return (
    <div className="formulario-reseña-container">
      <h2>✍️ Escribir Nueva Reseña</h2>
      
      <form onSubmit={manejarSubmit}>
        <div className="campo">
          <label>Selecciona el juego:</label>
          <select
            value={juegoSeleccionado}
            onChange={(e) => setJuegoSeleccionado(e.target.value)}
          >
            <option value="">-- Elige un juego --</option>
            {juegos.map((juego) => (
              <option key={juego.id} value={juego.id}>
                {juego.titulo}
              </option>
            ))}
          </select>
        </div>

        <div className="campo">
          <label>Tu reseña:</label>
          <textarea
            value={textoReseña}
            onChange={(e) => setTextoReseña(e.target.value)}
            placeholder="Escribe tu opinión sobre el juego..."
            rows="6"
          />
        </div>

        <button type="submit" className="btn-agregar-reseña">
          Publicar Reseña
        </button>
      </form>
    </div>
  );
}

export default FormularioReseña;