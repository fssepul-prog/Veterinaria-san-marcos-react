/*
  Navegacion con React Bootstrap Navbar.

  Modo público  → enlaces de la homepage + botones de autenticación por rol.
  Modo admin    → solo enlaces del panel de administración + botón Salir.
  La detección del modo usa pathname.startsWith('/admin').
  La sesión se re-lee en cada cambio de ruta (useLocation como dependencia).
*/

import { useState, useEffect } from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'

function Navegacion() {
  const location           = useLocation()
  const navigate           = useNavigate()
  // true si la ruta actual pertenece al panel interno (admin o recepción)
  const esAdmin            = location.pathname.startsWith('/admin') || location.pathname.startsWith('/recepcion')
  const [sesion, setSesion] = useState(null)

  // Se ejecuta cada vez que el usuario navega a una ruta distinta
  useEffect(() => {
    const guardada = localStorage.getItem('sesion') // lee la sesión guardada
    // Si existe, la convierte de texto JSON a objeto; si no, deja sesion en null
    setSesion(guardada ? JSON.parse(guardada) : null)
  }, [location]) // location como dependencia hace que se re-ejecute en cada cambio de ruta

  // Elimina la sesión y devuelve al usuario a la página de inicio
  function cerrarSesion() {
    localStorage.removeItem('sesion') // borra la sesión del navegador
    setSesion(null)                   // limpia el estado para que el menú se actualice
    navigate('/')                     // redirige al inicio sin recargar la página
  }

  return (
    <Navbar expand="md" className="navbar-vet">
      <Container>
        <Navbar.Brand as={NavLink} to={
          sesion?.rol === 'Administrador' ? '/admin/servicios' :
          sesion?.rol === 'Recepcionista' ? '/recepcion/citas' : '/'
        } className="navbar-brand-vet">
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

          {esAdmin ? (
            /* ── Modo administración ── */
            <>
              <Nav className="me-auto">
                {sesion?.rol === 'Administrador' && (
                  <>
                    <Nav.Link as={NavLink} to="/admin/servicios">Servicios</Nav.Link>
                    <Nav.Link as={NavLink} to="/admin/citas">Citas</Nav.Link>
                    <Nav.Link as={NavLink} to="/admin/usuarios">Usuarios</Nav.Link>
                    <Nav.Link as={NavLink} to="/admin/reportes">Reportes</Nav.Link>
                    <Nav.Link as={NavLink} to="/admin/historial">Historial</Nav.Link>
                  </>
                )}
                {sesion?.rol === 'Recepcionista' && (
                  <>
                    <Nav.Link as={NavLink} to="/recepcion/citas">Citas</Nav.Link>
                    <Nav.Link as={NavLink} to="/recepcion/fichas">Fichas</Nav.Link>
                  </>
                )}
              </Nav>
              <Nav className="ms-md-3 mt-2 mt-md-0">
                <button type="button" className="nav-link btn-nav-auth" onClick={cerrarSesion}>
                  Salir
                </button>
              </Nav>
            </>
          ) : (
            /* ── Modo público ── */
            <>
              <Nav className="me-auto">
                <Nav.Link as={NavLink} to="/" end>Inicio</Nav.Link>
                <Nav.Link as={NavLink} to="/nosotros">Nosotros</Nav.Link>
                <Nav.Link as={NavLink} to="/servicios">Servicios</Nav.Link>
                <Nav.Link as={NavLink} to="/agenda">Agenda</Nav.Link>
                <Nav.Link as={NavLink} to="/recursos">Recursos</Nav.Link>
                <Nav.Link as={NavLink} to="/citas">Solicitar hora</Nav.Link>
              </Nav>

              <Nav className="gap-2 ms-md-3 mt-2 mt-md-0">
                {!sesion && (
                  <>
                    <Nav.Link as={NavLink} to="/ingreso" className="btn-nav-auth">
                      Ingresar
                    </Nav.Link>
                    <Nav.Link as={NavLink} to="/registro" className="btn-nav-auth btn-nav-registro">
                      Registrarse
                    </Nav.Link>
                  </>
                )}
                {sesion?.rol === 'Cliente' && (
                  <>
                    <Nav.Link as={NavLink} to="/mi-cuenta" className="btn-nav-auth">
                      Mi cuenta
                    </Nav.Link>
                    <button type="button" className="nav-link btn-nav-auth" onClick={cerrarSesion}>
                      Salir
                    </button>
                  </>
                )}
              </Nav>
            </>
          )}

        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Navegacion
