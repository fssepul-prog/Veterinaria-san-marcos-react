/*
  Navegacion con React Bootstrap Navbar.
*/

import { Container, Nav, Navbar } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

function Navegacion() {
  return (
      <Navbar expand="md" className="navbar-vet">
        <Container>
          <Navbar.Brand as={NavLink} to="/" className="navbar-brand-vet">
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
            {/* ── Enlace de navegación principal ── */}
            <Nav className="me-auto">
              <Nav.Link as={NavLink} to="/" end>Inicio</Nav.Link>
              <Nav.Link as={NavLink} to="/nosotros">Nosotros</Nav.Link>
              <Nav.Link as={NavLink} to="/servicios">Servicios</Nav.Link>
              <Nav.Link as={NavLink} to="/agenda">Agenda</Nav.Link>
              <Nav.Link as={NavLink} to="/recursos">Recursos</Nav.Link>
              <Nav.Link as={NavLink} to="/citas">Solicitar hora</Nav.Link>
            </Nav>

            {/* ── Acceso de usuario ── */}
            <Nav className="gap-2 ms-md-3 mt-2 mt-md-0">
              <Nav.Link as={NavLink} to="/ingreso" className="btn-nav-auth">
                Ingresar
              </Nav.Link>
              <Nav.Link as={NavLink} to="/registro" className="btn-nav-auth btn-nav-registro">
                Registrarse
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  )
}

export default Navegacion
