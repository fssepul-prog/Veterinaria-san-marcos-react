/*
  MiCuenta — perfil del dueño de mascota.
  Adaptación de mi-cuenta.html (Proyecto-veterinaria-main).

  Lee la sesión guardada en localStorage ("sesion") para identificar al
  usuario activo. Si no hay sesión, muestra un aviso con enlace a /ingreso.
  Si hay sesión, muestra:
    - Historial clínico de demostración (datos fijos, como en el original).
    - Mis citas: leídas de localStorage ("citas"), filtradas por el nombre
      del usuario activo (campo "nombre" que guarda Citas.jsx).
*/

import { useState, useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const HISTORIAL_DEMO = [
  { fecha: '10-06-2026', motivo: 'Control anual',      diagnostico: 'Sana, al día con vacunas'        },
  { fecha: '22-03-2026', motivo: 'Vómitos',            diagnostico: 'Gastritis leve, en tratamiento'  },
  { fecha: '05-01-2026', motivo: 'Vacuna antirrábica', diagnostico: 'Aplicada sin reacciones'          },
]

function MiCuenta() {
  const [sesion, setSesion] = useState(() => {
    const guardada = localStorage.getItem('sesion')
    return guardada ? JSON.parse(guardada) : null
  })
  const [misCitas, setMisCitas] = useState([])

  useEffect(() => {
    if (!sesion) return
    const guardadas = JSON.parse(localStorage.getItem('citas') || '[]')
    setMisCitas(guardadas.filter((c) => c.nombre === sesion.nombre))
  }, [sesion])

  function cerrarSesion() {
    localStorage.removeItem('sesion')
    setSesion(null)
    setMisCitas([])
  }

  /* ── Sin sesión activa ── */
  if (!sesion) {
    return (
      <main>
        <Container className="py-5">
          <Row className="justify-content-center">
            <Col xs={12} sm={8} md={6}>
              <div className="aviso text-center py-5">
                <h1 className="h4">Acceso restringido</h1>
                <p className="mt-3">
                  Debes iniciar sesión para ver tu cuenta.
                </p>
                <Link to="/ingreso" className="btn btn-success mt-2">
                  Ir a Ingresar
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </main>
    )
  }

  /* ── Con sesión activa ── */
  return (
    <main>
      <Container className="py-4">

        {/* ── Encabezado ── */}
        <header className="encabezado-pagina d-flex justify-content-between align-items-start flex-wrap gap-2">
          <div>
            <p className="etiqueta">Bienvenido, {sesion.nombre}</p>
            <h1>Mi cuenta</h1>
            <p>
              Revisa el historial clínico de tus mascotas y el estado de tus
              solicitudes de hora.
            </p>
          </div>
          <button
            className="btn btn-outline-success mt-2"
            onClick={cerrarSesion}
          >
            Cerrar sesión
          </button>
        </header>

        {/* ── Historial clínico ── */}
        <section aria-labelledby="titulo-historial" className="mb-5">
          <h2 id="titulo-historial">Historial clínico</h2>
          <p className="text-muted mb-3">
            Ejemplo de historial de una mascota registrada (datos de demostración).
          </p>
          <div className="tabla-contenedor">
            <table className="table table-striped">
              <caption>Historial de Luna (gata)</caption>
              <thead>
                <tr>
                  <th scope="col">Fecha</th>
                  <th scope="col">Motivo</th>
                  <th scope="col">Diagnóstico</th>
                </tr>
              </thead>
              <tbody>
                {HISTORIAL_DEMO.map((registro, i) => (
                  <tr key={i}>
                    <td>{registro.fecha}</td>
                    <td>{registro.motivo}</td>
                    <td>{registro.diagnostico}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ── Mis citas solicitadas ── */}
        <section aria-labelledby="titulo-mis-citas">
          <h2 id="titulo-mis-citas">Mis citas solicitadas</h2>
          <div className="tabla-contenedor">
            <table className="table table-striped">
              <caption>Citas solicitadas por {sesion.nombre}</caption>
              <thead>
                <tr>
                  <th scope="col">Mascota</th>
                  <th scope="col">Especie</th>
                  <th scope="col">Servicio</th>
                  <th scope="col">Estado</th>
                </tr>
              </thead>
              <tbody>
                {misCitas.length === 0 ? (
                  <tr>
                    <td colSpan={4} className="text-center text-muted py-3">
                      No tienes citas agendadas.
                    </td>
                  </tr>
                ) : (
                  misCitas.map((cita) => (
                    <tr key={cita.id}>
                      <td>{cita.mascota}</td>
                      <td>{cita.especie}</td>
                      <td>{cita.servicio}</td>
                      <td>{cita.estado ?? 'Pendiente'}</td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </section>

      </Container>
    </main>
  )
}

export default MiCuenta
