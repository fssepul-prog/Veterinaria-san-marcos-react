import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

function NavegacionAdmin() {
  return (
    <Navbar expand="md" bg="light" data-bs-theme="light">
      <Container>
        <Navbar.Brand as={NavLink} to="/">Veterinaria San Marcos</Navbar.Brand>
        <Navbar.Toggle aria-controls="menu-admin" />
        <Navbar.Collapse id="menu-admin">
          <Nav className="ms-auto">
            <NavLink className="nav-link" to="/">Inicio</NavLink>
            <NavLink className="nav-link" to="/admin/citas">Citas</NavLink>
            <NavLink className="nav-link" to="/admin/usuarios">Usuarios</NavLink>
            <NavLink className="nav-link" to="/admin/servicios">Servicios</NavLink>
            <NavLink className="nav-link" to="/admin/reportes">Reportes</NavLink>
            <NavLink className="nav-link" to="/admin/historial">Historial</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavegacionAdmin;
