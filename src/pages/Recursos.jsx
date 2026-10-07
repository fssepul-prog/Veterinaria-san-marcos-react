//apartado referente a informacion para la tenencia responsable
import { Col, Container, Row } from 'react-bootstrap'

function Recursos() {
  return (
    <main>
      <Container className="py-4">

        <header className="encabezado-pagina">
          <h1>Cuidado responsable</h1>
          <p className="text-muted">
            Recomendaciones para mantener a tu mascota sana y tener una
            tenencia responsable.
          </p>
        </header>

        <section aria-labelledby="titulo-video" className="mb-5">
          <h2 id="titulo-video">Video informativo</h2>
          <div className="ratio ratio-16x9 mt-3">
            <iframe
              src="https://www.youtube.com/embed/QW_E3n83m8g"
              title="Video de presentación de Veterinaria San Marcos"
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"
              allowFullScreen
            />
          </div>
        </section>

        <section aria-labelledby="titulo-recomendaciones" className="mb-5">
          <h2 id="titulo-recomendaciones">Recomendaciones de cuidado</h2>
          <Row className="g-4 mt-1">

            <Col xs={12} md={4}>
              <article className="card h-100">
                <div className="card-body">
                  <h3 className="card-title h6">Vacunas al día</h3>
                  <p className="card-text">
                    Respeta el calendario de refuerzos anuales, especialmente la
                    vacuna antirrábica, obligatoria por ley.
                  </p>
                </div>
              </article>
            </Col>

            <Col xs={12} md={4}>
              <article className="card h-100">
                <div className="card-body">
                  <h3 className="card-title h6">Desparasitación periódica</h3>
                  <p className="card-text">
                    Aplica antiparasitarios internos y externos según el peso y la
                    especie de tu mascota.
                  </p>
                </div>
              </article>
            </Col>

            <Col xs={12} md={4}>
              <article className="card h-100">
                <div className="card-body">
                  <h3 className="card-title h6">Control de peso</h3>
                  <p className="card-text">
                    Un peso saludable reduce el riesgo de enfermedades articulares
                    y cardíacas a largo plazo.
                  </p>
                </div>
              </article>
            </Col>

          </Row>
        </section>

      </Container>
    </main>
  )
}

export default Recursos
