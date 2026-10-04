/*
  Guía 10 — Inicio con Bootstrap Container/Row/Col y estado real.
*/

import { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import TarjetaServicio from '../components/TarjetaServicio'
import MisSolicitudes from '../components/MisSolicitudes'
import { servicios } from '../data/servicios'

function Inicio() {
  const serviciosDestacados = servicios.slice(0, 3)

  const [solicitudes, setSolicitudes] = useState(() => {
    const guardadas = localStorage.getItem('solicitudes')
    return guardadas ? JSON.parse(guardadas) : []
  })

  function manejarAgendar(servicio) {
    const yaExiste = solicitudes.some((item) => item.id === servicio.id)
    if (yaExiste) return
    setSolicitudes([...solicitudes, servicio])
  }

  function manejarEliminar(id) {
    setSolicitudes(solicitudes.filter((item) => item.id !== id))
  }

  useEffect(() => {
    localStorage.setItem('solicitudes', JSON.stringify(solicitudes))
  }, [solicitudes])

  return (
    <main>
      <Container className="py-4">

        {/* ── Hero ── */}
        <section className="presentacion mb-5">
          <div>
            <p className="etiqueta">Clínica veterinaria en Rancagua</p>
            <h1>Cuidamos a tu mascota como parte de tu familia</h1>
            <p>
              Acompañamos a las familias de Rancagua y a sus mascotas desde 2009.
              Nuestro equipo de especialistas está presente en cada etapa: prevenir
              enfermedades, resolverlas a tiempo y ayudarte a disfrutar de tu
              regalón sano y feliz.
            </p>
            <div className="d-flex flex-wrap gap-2 mt-3">
              <a className="btn btn-success" href="#citas">Solicitar una hora</a>
              <a className="btn btn-outline-success" href="#servicios">Ver todos los servicios</a>
            </div>
          </div>
          <img src="/clinica-fachada.jpg" alt="Centro Médico Veterinario San Marcos" />
        </section>

        {/* ── Servicios destacados ── */}
        <section aria-labelledby="titulo-destacados" className="mb-5">
          <h2 id="titulo-destacados">Servicios destacados</h2>
          <p className="text-muted mb-4">
            Estas son las atenciones más solicitadas. Para ver el catálogo
            completo visita la página de servicios.
          </p>
          <Row className="g-4">
            {serviciosDestacados.map((servicio) => (
              <Col xs={12} md={6} lg={4} key={servicio.id}>
                <TarjetaServicio servicio={servicio} onAgendar={manejarAgendar} />
              </Col>
            ))}
          </Row>
        </section>

        {/* ── Aviso ── */}
        <aside className="aviso mb-4" aria-labelledby="titulo-aviso">
          <h2 id="titulo-aviso">¿Sabías que puedes agendar en línea?</h2>
          <p>
            Ya no es necesario llamar por teléfono ni presentarte en la clínica.
            Completa el formulario de solicitud de hora y te confirmaremos la
            fecha disponible.
          </p>
        </aside>

        <MisSolicitudes solicitudes={solicitudes} onEliminar={manejarEliminar} />

      </Container>
    </main>
  )
}

export default Inicio
