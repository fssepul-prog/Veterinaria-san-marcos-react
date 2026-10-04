/*
  Guía 10 — Navegacion con React Bootstrap Navbar.

  Patrón equivalente en conecta-cultura: Navegacion.jsx
  Diferencia: no usa NavLink de react-router-dom (aún no hay router en Guía 10).
  En su lugar, Nav.Link recibe onClick para cambiar el estado de página en App.

  Bootstrap Navbar.Toggle + Navbar.Collapse manejan el hamburguesa
  automáticamente, sin necesidad de useState manual para el menú.

  Props:
    paginaActual    → marca el enlace activo con la prop active
    onCambiarPagina → actualiza el estado de página en App
*/

import { Container, Nav, Navbar } from 'react-bootstrap'

function Navegacion({ paginaActual, onCambiarPagina }) {
  function irA(pagina) {
    return (e) => {
      e.preventDefault()
      onCambiarPagina(pagina)
    }
  }

  return (
    <Navbar expand="md" className="navbar-vet">
      <Container>
        <Navbar.Brand href="#inicio" onClick={irA('inicio')}>
          <img
            src="/logo.png"
            alt=""
            width="30"
            height="30"
            className="d-inline-block align-text-top me-2"
          />
          Veterinaria San Marcos
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="menu-principal" />

        <Navbar.Collapse id="menu-principal">
          <Nav className="ms-auto">
            <Nav.Link
              href="#inicio"
              onClick={irA('inicio')}
              active={paginaActual === 'inicio'}
            >
              Inicio
            </Nav.Link>
            <Nav.Link
              href="#nosotros"
              onClick={irA('nosotros')}
              active={paginaActual === 'nosotros'}
            >
              Nosotros
            </Nav.Link>
            <Nav.Link
              href="#servicios"
              onClick={irA('servicios')}
              active={paginaActual === 'servicios'}
            >
              Servicios
            </Nav.Link>
            <Nav.Link
              href="#agenda"
              onClick={irA('agenda')}
              active={paginaActual === 'agenda'}
            >
              Agenda
            </Nav.Link>
            <Nav.Link
              href="#recursos"
              onClick={irA('recursos')}
              active={paginaActual === 'recursos'}
            >
              Recursos
            </Nav.Link>
            <Nav.Link
              href="#citas"
              onClick={irA('citas')}
              active={paginaActual === 'citas'}
            >
              Solicitar hora
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Navegacion
