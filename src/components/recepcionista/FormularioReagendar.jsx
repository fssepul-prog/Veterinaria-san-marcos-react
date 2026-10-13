import { useState } from "react"
import { Button, Form } from "react-bootstrap"

function FormularioReagendar({ cita, onGuardar, onCancelar }) {
  const [datos, setDatos] = useState({ fecha: cita.fecha })
  const [errores, setErrores] = useState({})

  // Actualiza el campo de fecha cuando el usuario escribe en él
  function cambiar(evento) {
    const { name, value } = evento.target
    setDatos({ ...datos, [name]: value }) // reemplaza el campo que cambió manteniendo el resto
  }

  // Valida que la nueva fecha no esté vacía y la envía al componente padre
  function enviar(evento) {
    evento.preventDefault() // evita recarga de página
    const nuevosErrores = {}
    if (!datos.fecha.trim()) nuevosErrores.fecha = "Fecha obligatoria" // campo vacío
    setErrores(nuevosErrores)
    if (Object.keys(nuevosErrores).length > 0) return // si hay error, no continúa
    // Llama a reagendar en RecepcionCitas pasando el id de la cita y la nueva fecha
    onGuardar(cita.id, datos.fecha)
  }

  return (
    <article className="card h-100">
      <div className="card-body">
        <h2 className="h5">Reagendar a {cita.mascota}</h2>
        <Form onSubmit={enviar} noValidate>
          <Form.Group className="mb-3" controlId="fecha">
            <Form.Label>Nueva fecha</Form.Label>
            <Form.Control
              name="fecha"
              value={datos.fecha}
              onChange={cambiar}
              isInvalid={Boolean(errores.fecha)}
            />
            <Form.Control.Feedback type="invalid">{errores.fecha}</Form.Control.Feedback>
          </Form.Group>

          <Button type="submit" className="me-2">Guardar</Button>
          <Button type="button" variant="secondary" onClick={() => onCancelar()}>Cancelar</Button>
        </Form>
      </div>
    </article>
  )
}

export default FormularioReagendar
