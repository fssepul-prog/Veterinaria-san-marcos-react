/*
  Guía 10 — TarjetaServicio con clases Bootstrap Card.

  Patrón equivalente en conecta-cultura: TarjetaActividad.jsx
  Se reemplaza <article className="tarjeta"> por Bootstrap card h-100,
  igual que TarjetaActividad usa <article className="card h-100">.
*/

function TarjetaServicio({ servicio, onAgendar }) {
  return (
    <article className="card h-100">
      <div className="card-body d-flex flex-column">
        <h3 className="card-title h5">{servicio.nombre}</h3>

        <p className="etiqueta">{servicio.categoria}</p>

        <p className="card-text">{servicio.descripcion}</p>

        <p className="card-text">
          <small><strong>Especie:</strong> {servicio.especie}</small>
        </p>
        <p className="card-text">
          <small><strong>Duración:</strong> {servicio.duracion}</small>
        </p>
        <p className="card-text">
          <strong>Precio:</strong> ${servicio.precio.toLocaleString('es-CL')}
        </p>

        {/* mt-auto empuja el botón al fondo de la tarjeta */}
        <button
          className="btn btn-success mt-auto"
          onClick={() => onAgendar(servicio)}
        >
          Solicitar hora
        </button>
      </div>
    </article>
  )
}

export default TarjetaServicio
