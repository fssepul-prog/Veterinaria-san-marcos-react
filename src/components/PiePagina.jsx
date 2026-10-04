/*
  Guía 10 — PiePagina con Bootstrap.

  Patrón equivalente en conecta-cultura: PiePagina.jsx
  Se usa bg-dark (que apunta a --bs-dark, sobreescrito al verde oscuro
  de la veterinaria en index.css) igual que conecta-cultura usa bg-dark.
*/

import { Col, Container, Row } from 'react-bootstrap'

function PiePagina() {
  return (
    <footer className="py-4 bg-dark text-white mt-5 pie-sitio">
      <Container>
        <Row className="mb-3">
          <Col md={6} className="mb-3 mb-md-0">
            <p><strong>Veterinaria San Marcos</strong></p>
            <address className="mb-0" style={{ fontStyle: 'normal' }}>
              Rancagua, Región del Libertador General Bernardo O'Higgins<br />
              Teléfono: <a href="tel:+56912345678">+56 9 1234 5678</a><br />
              Correo: <a href="mailto:contacto@veterinariasanmarcos.cl">contacto@veterinariasanmarcos.cl</a>
            </address>
          </Col>
          <Col md={6}>
            <p><strong>Enlaces</strong></p>
            <p><a href="#agenda">Horario de atención</a></p>
            <p><a href="#citas">Solicitar una hora</a></p>
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
