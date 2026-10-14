import { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'

const USUARIOS_DEMO = [
  { email: 'admin@sanmarcos.cl',     contrasena: 'admin123',   nombre: 'Administrador', rol: 'Administrador' },
  { email: 'recepcion@sanmarcos.cl', contrasena: 'recep123',   nombre: 'Recepcionista', rol: 'Recepcionista' },
  { email: 'cliente@sanmarcos.cl',   contrasena: 'cliente123', nombre: 'Cliente Demo',  rol: 'Cliente'       },
]

const ESTADO_INICIAL = { email: '', contrasena: '' }

const RUTA_POR_ROL = {
  Administrador: '/admin/servicios',
  Recepcionista: '/recepcion/citas',
  Cliente:       '/mi-cuenta',
}

function Ingreso() {
  const navigate              = useNavigate()
  const [form, setForm]       = useState(ESTADO_INICIAL)
  const [errores, setErrores] = useState({})

  function manejarCambio(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  function validar() {
    const e = {}
    if (!form.email.trim())
      e.email = 'El correo es obligatorio.'
    else if (!/\S+@\S+\.\S+/.test(form.email))
      e.email = 'El correo no tiene un formato válido.'
    if (!form.contrasena)
      e.contrasena = 'La contraseña es obligatoria.'
    else if (form.contrasena.length < 6)
      e.contrasena = 'La contraseña debe tener al menos 6 caracteres.'
    return e
  }

  function manejarEnvio(e) {
    e.preventDefault()
    const nuevosErrores = validar()
    if (Object.keys(nuevosErrores).length > 0) {
      setErrores(nuevosErrores)
      return
    }
    const usuario = USUARIOS_DEMO.find(
      (u) => u.email === form.email && u.contrasena === form.contrasena
    )
    if (!usuario) {
      setErrores({ credenciales: 'Correo o contraseña incorrectos.' })
      return
    }
    // Guarda solo email, nombre y rol — nunca la contraseña
    localStorage.setItem('sesion', JSON.stringify({
      email: usuario.email,
      nombre: usuario.nombre,
      rol: usuario.rol,
    }))
    setErrores({})
    navigate(RUTA_POR_ROL[usuario.rol] ?? '/')
  }

  return (
    <main>
      <Container className="py-5">
        <Row className="justify-content-center">
          <Col xs={12} sm={8} md={6} lg={5}>

            <div className="card shadow-sm">
              <div className="card-body p-4">
                <h1 className="h4 mb-1 text-center">Ingresar</h1>
                <p className="text-muted text-center mb-4">
                  Accede a tu cuenta para revisar tus solicitudes.
                </p>

                {errores.credenciales && (
                  <div className="alert alert-danger py-2">{errores.credenciales}</div>
                )}

                <form onSubmit={manejarEnvio} noValidate>
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

                  <div className="mb-4">
                    <label htmlFor="contrasena" className="form-label">Contraseña</label>
                    <input
                      type="password"
                      id="contrasena"
                      name="contrasena"
                      className={'form-control' + (errores.contrasena ? ' is-invalid' : '')}
                      value={form.contrasena}
                      onChange={manejarCambio}
                      placeholder="Mínimo 6 caracteres"
                      autoComplete="current-password"
                    />
                    {errores.contrasena && <div className="invalid-feedback">{errores.contrasena}</div>}
                  </div>

                  <button type="submit" className="btn btn-success w-100">
                    Ingresar
                  </button>
                </form>

                <div className="mt-4 p-3 bg-light rounded">
                  <p className="mb-1"><small><strong>Cuentas de demostración:</strong></small></p>
                  {USUARIOS_DEMO.map((u) => (
                    <p key={u.email} className="mb-0">
                      <small>
                        <strong>{u.rol}:</strong> <code>{u.email}</code> /{' '}
                        <code>{u.contrasena}</code>
                      </small>
                    </p>
                  ))}
                </div>

                <hr className="my-4" />

                <p className="text-center mb-0">
                  ¿No tienes cuenta?{' '}
                  <Link to="/registro">Regístrate aquí</Link>
                </p>
              </div>
            </div>

          </Col>
        </Row>
      </Container>
    </main>
  )
}

export default Ingreso
