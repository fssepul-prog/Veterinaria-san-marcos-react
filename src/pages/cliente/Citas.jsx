//formulario controlado con validación.

import { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { servicios } from '../../data/servicios'

const ESTADO_INICIAL = {
  nombre:   '',
  email:    '',
  telefono: '',
  mascota:  '',
  especie:  '',
  servicio: '',
  mensaje:  '',
}

function Citas() {
  const [form, setForm]       = useState(ESTADO_INICIAL)
  const [errores, setErrores] = useState({})
  const [enviado, setEnviado] = useState(false)

  // Actualiza en tiempo real el campo del formulario que el usuario está escribiendo
  function manejarCambio(e) {
    // ...form mantiene los valores anteriores; solo se reemplaza el campo que cambió
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  // Verifica que los campos obligatorios tengan datos antes de enviar la solicitud
  function validar() {
    const e = {} // objeto que acumulará un mensaje por cada campo inválido
    if (!form.nombre.trim())   e.nombre   = 'El nombre es obligatorio.'
    if (!form.email.trim())    e.email    = 'El correo es obligatorio.'
    else if (!/\S+@\S+\.\S+/.test(form.email))
                               e.email    = 'El correo no tiene un formato válido.'
    if (!form.telefono.trim()) e.telefono = 'El teléfono es obligatorio.'
    if (!form.mascota.trim())  e.mascota  = 'El nombre de la mascota es obligatorio.'
    if (!form.especie)         e.especie  = 'Selecciona la especie.'
    if (!form.servicio)        e.servicio = 'Selecciona un servicio.'
    return e // si el objeto llega vacío, todos los campos son válidos
  }

  // Maneja el clic en "Enviar solicitud": valida, guarda la cita y muestra confirmación
  function manejarEnvio(e) {
    e.preventDefault() // evita que el formulario recargue la página
    const nuevosErrores = validar()
    if (Object.keys(nuevosErrores).length > 0) {
      setErrores(nuevosErrores) // muestra los errores y no continúa
      return
    }
    // Lee las citas ya guardadas (o un arreglo vacío si no existe ninguna)
    const citas = JSON.parse(localStorage.getItem('citas') || '[]')
    // Agrega la nueva cita con un id único basado en la hora actual
    citas.push({ ...form, id: Date.now() })
    localStorage.setItem('citas', JSON.stringify(citas)) // guarda la lista actualizada
    setEnviado(true)  // cambia la vista al mensaje de confirmación
    setErrores({})
  }

  // Limpia el formulario para que el usuario pueda enviar otra solicitud desde cero
  function nuevaSolicitud() {
    setForm(ESTADO_INICIAL) // vuelve todos los campos a su valor vacío original
    setEnviado(false)       // oculta el mensaje de confirmación y vuelve a mostrar el formulario
  }

  if (enviado) {
    return (
      <main>
        <Container className="py-4" style={{ maxWidth: '42rem' }}>
          <div className="aviso text-center py-5">
            <h1 className="h3">¡Solicitud enviada!</h1>
            <p className="mt-3">
              Hemos recibido tu solicitud para <strong>{form.mascota}</strong>.
              Te confirmaremos la hora disponible al correo{' '}
              <strong>{form.email}</strong> o al teléfono{' '}
              <strong>{form.telefono}</strong>.
            </p>
            <div className="d-flex justify-content-center gap-3 mt-4">
              <button className="btn btn-success" onClick={nuevaSolicitud}>
                Nueva solicitud
              </button>
              <Link to="/" className="btn btn-outline-success">Volver al inicio</Link>
            </div>
          </div>
        </Container>
      </main>
    )
  }

  return (
    <main>
      <Container className="py-4">

        <header className="encabezado-pagina">
          <p className="etiqueta">Reserva en línea</p>
          <h1>Solicitar hora</h1>
          <p className="text-muted">
            Completa el formulario y te confirmaremos la disponibilidad.
            Los campos marcados con * son obligatorios.
          </p>
        </header>

        <Row className="justify-content-center">
          <Col xs={12} lg={8}>
            <form onSubmit={manejarEnvio} noValidate>

              {/* ── Datos del dueño ── */}
              <fieldset className="mb-4">
                <legend className="h5 mb-3">Datos de contacto</legend>

                <div className="mb-3">
                  <label htmlFor="nombre" className="form-label">Nombre completo *</label>
                  <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    className={'form-control' + (errores.nombre ? ' is-invalid' : '')}
                    value={form.nombre}
                    onChange={manejarCambio}
                    placeholder="Ej: Juan Pérez"
                  />
                  {errores.nombre && <div className="invalid-feedback">{errores.nombre}</div>}
                </div>

                <Row>
                  <Col xs={12} md={6}>
                    <div className="mb-3">
                      <label htmlFor="email" className="form-label">Correo electrónico *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className={'form-control' + (errores.email ? ' is-invalid' : '')}
                        value={form.email}
                        onChange={manejarCambio}
                        placeholder="correo@ejemplo.com"
                      />
                      {errores.email && <div className="invalid-feedback">{errores.email}</div>}
                    </div>
                  </Col>
                  <Col xs={12} md={6}>
                    <div className="mb-3">
                      <label htmlFor="telefono" className="form-label">Teléfono *</label>
                      <input
                        type="tel"
                        id="telefono"
                        name="telefono"
                        className={'form-control' + (errores.telefono ? ' is-invalid' : '')}
                        value={form.telefono}
                        onChange={manejarCambio}
                        placeholder="+56 9 1234 5678"
                      />
                      {errores.telefono && <div className="invalid-feedback">{errores.telefono}</div>}
                    </div>
                  </Col>
                </Row>
              </fieldset>

              {/* ── Datos de la mascota ── */}
              <fieldset className="mb-4">
                <legend className="h5 mb-3">Datos de la mascota</legend>

                <Row>
                  <Col xs={12} md={6}>
                    <div className="mb-3">
                      <label htmlFor="mascota" className="form-label">Nombre de la mascota *</label>
                      <input
                        type="text"
                        id="mascota"
                        name="mascota"
                        className={'form-control' + (errores.mascota ? ' is-invalid' : '')}
                        value={form.mascota}
                        onChange={manejarCambio}
                        placeholder="Ej: Firulais"
                      />
                      {errores.mascota && <div className="invalid-feedback">{errores.mascota}</div>}
                    </div>
                  </Col>
                  <Col xs={12} md={6}>
                    <div className="mb-3">
                      <label htmlFor="especie" className="form-label">Especie *</label>
                      <select
                        id="especie"
                        name="especie"
                        className={'form-select' + (errores.especie ? ' is-invalid' : '')}
                        value={form.especie}
                        onChange={manejarCambio}
                      >
                        <option value="">Selecciona...</option>
                        <option value="Perro">Perro</option>
                        <option value="Gato">Gato</option>
                        <option value="Conejo">Conejo</option>
                        <option value="Ave">Ave</option>
                        <option value="Otro">Otro</option>
                      </select>
                      {errores.especie && <div className="invalid-feedback">{errores.especie}</div>}
                    </div>
                  </Col>
                </Row>
              </fieldset>

              {/* ── Servicio solicitado ── */}
              <fieldset className="mb-4">
                <legend className="h5 mb-3">Servicio</legend>

                <div className="mb-3">
                  <label htmlFor="servicio" className="form-label">Servicio solicitado *</label>
                  <select
                    id="servicio"
                    name="servicio"
                    className={'form-select' + (errores.servicio ? ' is-invalid' : '')}
                    value={form.servicio}
                    onChange={manejarCambio}
                  >
                    <option value="">Selecciona un servicio...</option>
                    {servicios.map((s) => (
                      <option key={s.id} value={s.nombre}>
                        {s.nombre} — ${s.precio.toLocaleString('es-CL')}
                      </option>
                    ))}
                  </select>
                  {errores.servicio && <div className="invalid-feedback">{errores.servicio}</div>}
                </div>

                <div className="mb-3">
                  <label htmlFor="mensaje" className="form-label">Observaciones (opcional)</label>
                  <textarea
                    id="mensaje"
                    name="mensaje"
                    className="form-control"
                    rows={3}
                    value={form.mensaje}
                    onChange={manejarCambio}
                    placeholder="Indica cualquier detalle relevante sobre la condición de tu mascota..."
                  />
                </div>
              </fieldset>

              <div className="d-flex gap-3">
                <button type="submit" className="btn btn-success">
                  Enviar solicitud
                </button>
                <Link to="/servicios" className="btn btn-outline-success">
                  Ver catálogo de servicios
                </Link>
              </div>

            </form>
          </Col>
        </Row>

      </Container>
    </main>
  )
}

export default Citas
