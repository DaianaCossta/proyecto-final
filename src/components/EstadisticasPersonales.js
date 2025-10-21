import './EstadisticasPersonales.css';

function EstadisticasPersonales({ juegos, reseñas }) {
  // Calcular estadísticas
  const totalJuegos = juegos.length;
  const juegosCompletados = juegos.filter(juego => juego.completado).length;
  const juegosEnProgreso = totalJuegos - juegosCompletados;
  
  // Calcular promedio de puntuación
  const promedioPuntuacion = totalJuegos > 0 
    ? (juegos.reduce((suma, juego) => suma + juego.puntuacion, 0) / totalJuegos).toFixed(1)
    : 0;
  
  const totalReseñas = reseñas.length;

  return (
    <div className="estadisticas-container">
      <h2>📊 Mis Estadísticas</h2>
      
      <div className="estadisticas-grid">
        <div className="tarjeta-estadistica tarjeta-total">
          <div className="icono">🎮</div>
          <div className="estadistica-info">
            <h3>Total de Juegos</h3>
            <p className="numero">{totalJuegos}</p>
          </div>
        </div>

        <div className="tarjeta-estadistica tarjeta-completados">
          <div className="icono">✅</div>
          <div className="estadistica-info">
            <h3>Completados</h3>
            <p className="numero">{juegosCompletados}</p>
          </div>
        </div>

        <div className="tarjeta-estadistica tarjeta-progreso">
          <div className="icono">⏳</div>
          <div className="estadistica-info">
            <h3>En Progreso</h3>
            <p className="numero">{juegosEnProgreso}</p>
          </div>
        </div>

        <div className="tarjeta-estadistica tarjeta-promedio">
          <div className="icono">⭐</div>
          <div className="estadistica-info">
            <h3>Puntuación Promedio</h3>
            <p className="numero">{promedioPuntuacion} / 5</p>
          </div>
        </div>

        <div className="tarjeta-estadistica tarjeta-reseñas">
          <div className="icono">📝</div>
          <div className="estadistica-info">
            <h3>Reseñas Escritas</h3>
            <p className="numero">{totalReseñas}</p>
          </div>
        </div>
      </div>

      {totalJuegos > 0 && (
        <div className="barra-progreso-container">
          <h3>Progreso General</h3>
          <div className="barra-progreso">
            <div 
              className="barra-completada"
              style={{ width: `${(juegosCompletados / totalJuegos) * 100}%` }}
            >
              {juegosCompletados > 0 && (
                <span className="porcentaje">
                  {Math.round((juegosCompletados / totalJuegos) * 100)}%
                </span>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default EstadisticasPersonales;