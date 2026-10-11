import { useState } from "react";
import { Button, Form } from "react-bootstrap";

function FormularioReagendar({ cita, onGuardar, onCancelar }) {
  const [datos, setDatos] = useState({ fecha: cita.fecha });
  const [errores, setErrores] = useState({});

  function cambiar(evento) {
    const { name, value } = evento.target;
    setDatos({ ...datos, [name]: value });
  }

  function enviar(evento) {
    evento.preventDefault();
    const nuevosErrores = {};
    if (!datos.fecha.trim()) nuevosErrores.fecha = "Fecha obligatoria";
    setErrores(nuevosErrores);
    if (Object.keys(nuevosErrores).length > 0) return;
    onGuardar(cita.id, datos.fecha);
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
            <Form.Control.Feedback type="invalid">
              {errores.fecha}
            </Form.Control.Feedback>
          </Form.Group>

          <Button type="submit" className="me-2">Guardar</Button>
          <Button type="button" onClick={() => onCancelar()}>Cancelar</Button>
        </Form>
      </div>
    </article>
  );
}


export default FormularioReagendar;