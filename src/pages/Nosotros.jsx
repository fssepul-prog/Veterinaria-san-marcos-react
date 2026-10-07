
import { Col, Container, Row } from 'react-bootstrap'

function Nosotros() {
  return (
    <main>
      <Container className="py-4">

        <header className="encabezado-pagina">
          <p className="etiqueta">¿Quiénes somos?</p>
          <h1>Una clínica de barrio con más de 15 años de trayectoria</h1>
          <p className="text-muted">
            Fundada en 2009, Veterinaria San Marcos atiende a las familias y sus
            mascotas de Rancagua con cercanía y responsabilidad profesional.
          </p>
        </header>

        <section aria-labelledby="titulo-historia" className="mb-5">
          <h2 id="titulo-historia">Nuestra historia</h2>
          <p>
            Comenzamos como una consulta pequeña y hoy atendemos en promedio 25
            pacientes por día. El aumento sostenido de atenciones en los últimos
            dos años nos impulsa a digitalizar procesos que antes dependían por
            completo del papel, como la agenda de citas y las fichas clínicas.
          </p>
        </section>

        <section aria-labelledby="titulo-equipo" className="mb-5">
          <h2 id="titulo-equipo">Nuestro equipo</h2>
          <Row className="g-4 mt-1">

            <Col xs={12} md={4}>
              <article className="card h-100">
                <img
                  src="/equipo-clinico.jpg"
                  alt="Equipo clínico de Veterinaria San Marcos"
                  className="card-img-top"
                />
                <div className="card-body">
                  <h3 className="card-title h6">Nuestro equipo profesional</h3>
                  <ul className="card-text">
                    <li>3 médicos veterinarios</li>
                    <li>1 técnico veterinario</li>
                    <li>1 recepcionista administrativa</li>
                  </ul>
                </div>
              </article>
            </Col>

            <Col xs={12} md={4}>
              <article className="card h-100">
                <img
                  src="/animales.png"
                  alt="Mascotas atendidas en la clínica"
                  className="card-img-top"
                />
                <div className="card-body">
                  <h3 className="card-title h6">Especies que atendemos</h3>
                  <p className="card-text">
                    Principalmente perros y gatos, además de conejos y aves. Cada
                    ficha clínica se adapta a las necesidades propias de la especie.
                  </p>
                </div>
              </article>
            </Col>

            <Col xs={12} md={4}>
              <article className="card h-100">
                <img
                  src="/compromiso.png"
                  alt="Compromiso con las mascotas"
                  className="card-img-top"
                />
                <div className="card-body">
                  <h3 className="card-title h6">Nuestro compromiso</h3>
                  <p className="card-text">
                    Que cada dueño pueda revisar el historial de su mascota,
                    recibir aviso antes del vencimiento de una vacuna y pedir
                    horas sin depender únicamente del teléfono.
                  </p>
                </div>
              </article>
            </Col>

          </Row>
        </section>

        <section aria-labelledby="titulo-principios" className="mb-5">
          <h2 id="titulo-principios">Principios de atención</h2>
          <ul className="mt-3">
            <li>Trato cercano y explicaciones claras para personas sin experiencia previa en salud animal.</li>
            <li>Registro digital del historial clínico, disponible desde cualquier dispositivo con internet.</li>
            <li>Privacidad de los datos: cada dueño solo puede ver la información de sus propias mascotas.</li>
          </ul>
        </section>

        <section aria-labelledby="titulo-como-agendar" className="mb-5">
          <h2 id="titulo-como-agendar">Cómo agendar tu primera hora</h2>
          <ol className="mt-3">
            <li>Revisa el catálogo de servicios y elige la atención que necesita tu mascota.</li>
            <li>Consulta la agenda semanal para conocer los horarios disponibles.</li>
            <li>Completa el formulario de solicitud de hora con los datos de contacto y de tu mascota.</li>
          </ol>
        </section>

      </Container>
    </main>
  )
}

export default Nosotros
