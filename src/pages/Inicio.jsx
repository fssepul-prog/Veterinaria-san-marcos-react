import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import TarjetaServicio from '../components/TarjetaServicio.jsx'
import { servicios } from '../data/servicios.js'

function Inicio() {

  const serviciosDestacados = servicios.slice(0, 3)

  return (
    <main>
      <Container className="py-4">
        <section className="presentacion mb-5">
          <div>
            <p className="etiqueta">Clínica veterinaria en Rancagua</p>
            <h1>El bienestar de tus mascotas son nuestra prioridad.</h1>
            <p>
              Acompañamos a las familias de Rancagua y a sus mascotas desde 2009. Nuestro equipo de especialistas estará contigo en cada etapa: prevención de enfermedades,
              tratamientos y con una orientación de forma oportuna.
            </p>
            <div className="d-flex flex-wrap gap-2 mt-3">

              <Link className="btn btn-success" to="/citas">Solicitar una hora</Link>
              <Link className="btn btn-outline-success" to="/servicios">Ver todos los servicios</Link>
            </div>
          </div>
          <img src="/clinica-fachada.jpg" alt="Centro Médico Veterinario San Marcos" />
        </section>

        <section aria-labelledby="titulo-destacados" className="mb-5">
          <h2 id="titulo-destacados">Servicios destacados</h2>
          <p className="text-muted mb-4">
            Estas son las atenciones más solicitadas. Para ver el catálogo
            completo visite la página de servicios.
          </p>

          <Row className="g-4">
            {serviciosDestacados.map((servicio) => (
              <Col xs={12} md={6} lg={4} key={servicio.id}>
                <TarjetaServicio servicio={servicio} />
              </Col>
            ))}
          </Row>
        </section>

        <aside className="aviso mb-4" aria-labelledby="titulo-aviso">
          <h2 id="titulo-aviso">¿Sabías que puedes agendar en línea?</h2>
          <p>
            Agenda tu hora sin llamar ni ir a la clínica para reservar una cita.
            Solo llena el formulario de solicitud y te confirmaremos la fecha disponible.
          </p>
          <Link to="/citas" className="btn btn-success mt-2">Solicitar hora</Link>
        </aside>

      </Container>
    </main>
  )
}

export default Inicio
