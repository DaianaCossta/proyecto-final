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
      
      {juego.portadaURL && (
        <div className="portada-container">
          <img 
            src={juego.portadaURL} 
            alt={juego.titulo}
            className="portada-juego"
            onError={(e) => e.target.style.display = 'none'}
          />
        </div>
      )}
      
      <h2>{juego.titulo}</h2>
      <p>Género: {juego.genero}</p>
      <p>⭐ Puntuación: {juego.puntuacion}/5</p>
      
      {juego.horasJugadas > 0 && (
        <p>⏱️ Horas jugadas: {juego.horasJugadas}h</p>
      )}
      
      <p>{juego.completado ? "✅ Completado" : "⏳ En progreso"}</p>
    </div>
  );
}

export default TarjetaJuego;