import { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const ESTADO_INICIAL = { nombre: '', email: '', contrasena: '', confirmar: '' }

function Registro() {
  const [form, setForm]       = useState(ESTADO_INICIAL)
  const [errores, setErrores] = useState({})
  const [registrado, setRegistrado] = useState(false)

  function manejarCambio(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  function validar() {
    const e = {}
    if (!form.nombre.trim())
      e.nombre = 'El nombre es obligatorio.'
    if (!form.email.trim())
      e.email = 'El correo es obligatorio.'
    else if (!/\S+@\S+\.\S+/.test(form.email))
      e.email = 'El correo no tiene un formato válido.'
    if (!form.contrasena)
      e.contrasena = 'La contraseña es obligatoria.'
    else if (form.contrasena.length < 6)
      e.contrasena = 'La contraseña debe tener al menos 6 caracteres.'
    if (form.confirmar !== form.contrasena)
      e.confirmar = 'Las contraseñas no coinciden.'
    return e
  }

  function manejarEnvio(e) {
    e.preventDefault()
    const nuevosErrores = validar()
    if (Object.keys(nuevosErrores).length > 0) {
      setErrores(nuevosErrores)
      return
    }
    setErrores({})
    const usuarios = JSON.parse(localStorage.getItem('usuarios') || '[]')
    // La contraseña no se almacena
    usuarios.push({ nombre: form.nombre, email: form.email, fechaRegistro: Date.now() })
    localStorage.setItem('usuarios', JSON.stringify(usuarios))
    setRegistrado(true)
  }

  if (registrado) {
    return (
      <main>
        <Container className="py-5">
          <Row className="justify-content-center">
            <Col xs={12} sm={8} md={6} lg={5}>
              <div className="aviso text-center py-5">
                <h1 className="h4">¡Registro completado!</h1>
                <p className="mt-3">
                  Tu cuenta ha sido registrada. En esta etapa del proyecto
                  la autenticación aún no está activa.
                </p>
                <Link to="/ingreso" className="btn btn-success mt-2">
                  Ir a Ingresar
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </main>
    )
  }

  return (
    <main>
      <Container className="py-5">
        <Row className="justify-content-center">
          <Col xs={12} sm={8} md={6} lg={5}>

            <div className="card shadow-sm">
              <div className="card-body p-4">
                <h1 className="h4 mb-1 text-center">Crear cuenta</h1>
                <p className="text-muted text-center mb-4">
                  Regístrate para gestionar tus solicitudes de hora.
                </p>

                <form onSubmit={manejarEnvio} noValidate>
                  <div className="mb-3">
                    <label htmlFor="nombre" className="form-label">Nombre completo</label>
                    <input
                      type="text"
                      id="nombre"
                      name="nombre"
                      className={'form-control' + (errores.nombre ? ' is-invalid' : '')}
                      value={form.nombre}
                      onChange={manejarCambio}
                      placeholder="Ej: Juan Pérez"
                      autoComplete="name"
                    />
                    {errores.nombre && <div className="invalid-feedback">{errores.nombre}</div>}
                  </div>

                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">Correo electrónico</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className={'form-control' + (errores.email ? ' is-invalid' : '')}
                      value={form.email}
                      onChange={manejarCambio}
                      placeholder="correo@ejemplo.com"
                      autoComplete="email"
                    />
                    {errores.email && <div className="invalid-feedback">{errores.email}</div>}
                  </div>

                  <div className="mb-3">
                    <label htmlFor="contrasena" className="form-label">Contraseña</label>
                    <input
                      type="password"
                      id="contrasena"
                      name="contrasena"
                      className={'form-control' + (errores.contrasena ? ' is-invalid' : '')}
                      value={form.contrasena}
                      onChange={manejarCambio}
                      placeholder="Mínimo 6 caracteres"
                      autoComplete="new-password"
                    />
                    {errores.contrasena && <div className="invalid-feedback">{errores.contrasena}</div>}
                  </div>

                  <div className="mb-4">
                    <label htmlFor="confirmar" className="form-label">Confirmar contraseña</label>
                    <input
                      type="password"
                      id="confirmar"
                      name="confirmar"
                      className={'form-control' + (errores.confirmar ? ' is-invalid' : '')}
                      value={form.confirmar}
                      onChange={manejarCambio}
                      placeholder="Repite la contraseña"
                      autoComplete="new-password"
                    />
                    {errores.confirmar && <div className="invalid-feedback">{errores.confirmar}</div>}
                  </div>

                  <button type="submit" className="btn btn-success w-100">
                    Crear cuenta
                  </button>
                </form>

                <hr className="my-4" />

                <p className="text-center mb-0">
                  ¿Ya tienes una cuenta?{' '}
                  <Link to="/ingreso">Ingresa aquí</Link>
                </p>
              </div>
            </div>

          </Col>
        </Row>
      </Container>
    </main>
  )
}

export default Registro
