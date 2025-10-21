import './TarjetaReseña.css';

function TarjetaReseña({ reseña, onEliminar }) {
  return (
    <div className="tarjeta-reseña">
      <button 
        className="btn-eliminar-reseña"
        onClick={() => onEliminar(reseña.id)}
        title="Eliminar reseña"
      >
        ❌
      </button>
      
      <div className="reseña-header">
        <h3>🎮 {reseña.juegoTitulo}</h3>
        <span className="reseña-fecha">{reseña.fecha}</span>
      </div>
      
      <p className="reseña-texto">{reseña.texto}</p>
    </div>
  );
}

export default TarjetaReseña;