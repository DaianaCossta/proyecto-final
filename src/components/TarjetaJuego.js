import './TarjetaJuego.css';

function TarjetaJuego({ juego }) {
  return (
    <div className="tarjeta-juego">
      <h2>{juego.titulo}</h2>
      <p>Género: {juego.genero}</p>
      <p>⭐ Puntuación: {juego.puntuacion}/5</p>
      <p>{juego.completado ? "✅ Completado" : "⏳ En progreso"}</p>
    </div>
  );
}

export default TarjetaJuego;