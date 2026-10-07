/*
  TarjetaServicio con clases Bootstrap Card.

  Patrón equivalente en conecta-cultura: TarjetaActividad.jsx
  Se reemplaza <article className="tarjeta"> por Bootstrap card h-100,
  igual que TarjetaActividad usa <article className="card h-100">.
*/

import { Link } from 'react-router-dom'
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

          <div className="d-flex gap-2 mt-auto">
            <Link
                to={'/servicios/' + servicio.id}
                className="btn btn-outline-success btn-sm"
            >
              Ver detalle
            </Link>
            <button
                className="btn btn-success btn-sm"
                onClick={() => onAgendar(servicio)}
            >
              Solicitar hora
            </button>
          </div>
        </div>
      </article>
  )
}

export default TarjetaServicio
