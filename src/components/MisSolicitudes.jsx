/*
  MisSolicitudes con clases Bootstrap.

  Patrón equivalente en conecta-cultura: MisInscripciones.jsx
*/

import { Col, Row } from 'react-bootstrap'

function MisSolicitudes({ solicitudes, onEliminar }) {
  return (
    <section className="mt-5">
      <h2>Mis solicitudes agendadas</h2>

      {solicitudes.length === 0 && (
        <p className="text-muted">No tienes servicios agendados aún.</p>
      )}

      <Row className="g-3 mt-1">
        {solicitudes.map((servicio) => (
          <Col xs={12} md={6} lg={4} key={servicio.id}>
            <article className="card h-100">
              <div className="card-body d-flex flex-column">
                <h3 className="card-title h6">{servicio.nombre}</h3>
                <p className="card-text text-muted">{servicio.categoria}</p>
                <button
                  className="btn btn-outline-danger btn-sm mt-auto"
                  onClick={() => onEliminar(servicio.id)}
                >
                  Eliminar
                </button>
              </div>
            </article>
          </Col>
        ))}
      </Row>
    </section>
  )
}

export default MisSolicitudes
