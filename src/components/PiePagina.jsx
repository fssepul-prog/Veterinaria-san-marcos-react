import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function PiePagina({ esAdmin }) {
  if (esAdmin) {
    return (
      <footer className="py-3 bg-dark text-white mt-5 pie-sitio">
        <Container>
          <p className="mb-0">
            <small>© 2026 Veterinaria San Marcos.</small>
          </p>
        </Container>
      </footer>
    )
  }

  return (
    <footer className="py-4 bg-dark text-white mt-5 pie-sitio">
      <Container>
        <Row className="mb-3 justify-content-between">
          <Col xs={12} md={6} lg={4} className="mb-3 mb-md-0">
            <p><strong>Veterinaria San Marcos</strong></p>
            <address className="mb-0" style={{ fontStyle: 'normal' }}>
              Rancagua, Región del Libertador General Bernardo O'Higgins<br />
              Teléfono: <a href="tel:+56912345678">+56 9 1234 5678</a><br />
              Correo: <a href="mailto:contacto@veterinariasanmarcos.cl">contacto@veterinariasanmarcos.cl</a>
            </address>
          </Col>
          <Col xs={12} md={6} lg={4} className="text-md-end">
            <p><strong>Enlaces</strong></p>
            <p><Link to="/agenda">Horario de atención</Link></p>
            <p><Link to="/citas">Solicitar una hora</Link></p>
          </Col>
        </Row>
        <p className="mb-0">
          <small>© 2026 Veterinaria San Marcos.</small>
        </p>
      </Container>
    </footer>
  )
}

export default PiePagina
