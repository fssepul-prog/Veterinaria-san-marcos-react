/*
  Agenda con useState para selección de día.
  Muestra el horario semanal de la clínica.
  useState controla el día seleccionado y filtra los horarios visibles.
  Los datos son estáticos (objeto con días como claves).
*/

import { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const DIAS = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado']

const HORARIOS = {
  Lunes:      ['09:00', '10:00', '11:00', '14:00', '15:00', '16:00', '17:00'],
  Martes:     ['09:00', '10:00', '11:00', '14:00', '15:00', '16:00'],
  Miércoles:  ['09:00', '10:00', '14:00', '15:00', '16:00', '17:00'],
  Jueves:     ['09:00', '10:00', '11:00', '14:00', '15:00'],
  Viernes:    ['09:00', '10:00', '11:00', '14:00'],
  Sábado:     ['10:00', '11:00', '12:00'],
}

function Agenda() {
  const [dia, setDia] = useState('Lunes')

  return (
    <main>
      <Container className="py-4">

        <header className="encabezado-pagina">
          <p className="etiqueta">Disponibilidad semanal</p>
          <h1>Agenda de atención</h1>
          <p className="text-muted">
            Consulta los horarios disponibles y solicita tu hora en línea.
            Los bloques marcados son horarios regulares; la disponibilidad
            real se confirma al momento de la solicitud.
          </p>
        </header>

        {/* ── Selector de día ── */}
        <section aria-labelledby="titulo-dias" className="mb-4">
          <h2 id="titulo-dias" className="h5">Selecciona un día</h2>
          <div className="d-flex flex-wrap gap-2 mt-2">
            {DIAS.map((d) => (
              <button
                key={d}
                className={dia === d ? 'btn btn-success' : 'btn btn-outline-success'}
                onClick={() => setDia(d)}
              >
                {d}
              </button>
            ))}
          </div>
        </section>

        {/* ── Horarios del día seleccionado ── */}
        <section aria-labelledby="titulo-horarios" className="mb-5">
          <h2 id="titulo-horarios" className="h5 mb-3">
            Horarios — {dia}
          </h2>
          <Row className="g-3">
            {HORARIOS[dia].map((hora) => (
              <Col xs={6} sm={4} md={3} lg={2} key={hora}>
                <div className="card text-center py-3">
                  <span className="h5 mb-0">{hora}</span>
                  <small className="text-muted">Disponible</small>
                </div>
              </Col>
            ))}
          </Row>
        </section>

        {/* ── Resumen de horario general ── */}
        <section aria-labelledby="titulo-resumen" className="mb-5">
          <h2 id="titulo-resumen">Horario general de la clínica</h2>
          <div className="tabla-contenedor">
            <table className="table table-bordered mt-3">
              <thead className="table-success">
                <tr>
                  <th scope="col">Día</th>
                  <th scope="col">Mañana</th>
                  <th scope="col">Tarde</th>
                </tr>
              </thead>
              <tbody>
                <tr><th scope="row">Lunes a viernes</th><td>09:00 – 13:00</td><td>14:00 – 18:00</td></tr>
                <tr><th scope="row">Sábado</th><td>10:00 – 13:00</td><td>Cerrado</td></tr>
                <tr><th scope="row">Domingo</th><td colSpan={2} className="text-center text-muted">Cerrado</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <aside className="aviso mb-4" aria-labelledby="titulo-aviso-agenda">
          <h2 id="titulo-aviso-agenda">¿Listo para agendar?</h2>
          <p>
            Completa el formulario de solicitud de hora y te confirmaremos
            la fecha disponible por correo o teléfono.
          </p>
          <Link to="/citas" className="btn btn-success">Solicitar hora ahora</Link>
        </aside>

      </Container>
    </main>
  )
}

export default Agenda
