import './TarjetaJuego.css';

function TarjetaJuego({ juego, onEliminar }) {
  return (
    <div className="tarjeta-juego">
      <button 
        className="btn-eliminar"
        onClick={() => onEliminar(juego.id)}
        title="Eliminar juego"
      >
        ❌
      </button>
      
      <h2>{juego.titulo}</h2>
      <p>Género: {juego.genero}</p>
      <p>⭐ Puntuación: {juego.puntuacion}/5</p>
      <p>{juego.completado ? "✅ Completado" : "⏳ En progreso"}</p>
    </div>
  );
}

export default TarjetaJuego;