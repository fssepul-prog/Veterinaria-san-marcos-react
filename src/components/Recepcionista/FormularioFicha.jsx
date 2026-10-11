import { useState } from "react";
import { Button, Form } from "react-bootstrap";

// Recibe "ficha": vacía para registrar una nueva o con datos para editarla
function FormularioFicha({ ficha, onGuardar }) {
  const [datos, setDatos] = useState(ficha);
  const [errores, setErrores] = useState({});

  function cambiar(evento) {
    const { name, value } = evento.target;
    setDatos({ ...datos, [name]: value });
  }

  function enviar(evento) {
    evento.preventDefault();
    const nuevosErrores = {};
    if (!datos.dueno.trim()) nuevosErrores.dueno = "Dueño obligatorio";
    if (!datos.mascota.trim()) nuevosErrores.mascota = "Mascota obligatoria";
    if (!datos.fecha.trim()) nuevosErrores.fecha = "Fecha obligatoria";
    if (!datos.motivo.trim()) nuevosErrores.motivo = "Motivo obligatorio";
    if (!datos.diagnostico.trim()) nuevosErrores.diagnostico = "Diagnóstico obligatorio";
    setErrores(nuevosErrores);
    if (Object.keys(nuevosErrores).length > 0) return;
    onGuardar(datos);
    setDatos(ficha);
  }

  return (
    <Form onSubmit={enviar} noValidate>
      <Form.Group className="mb-3" controlId="dueno">
        <Form.Label>Dueño</Form.Label>
        <Form.Control
          name="dueno"
          value={datos.dueno}
          onChange={cambiar}
          isInvalid={Boolean(errores.dueno)}
        />
        <Form.Control.Feedback type="invalid">
          {errores.dueno}
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3" controlId="mascota">
        <Form.Label>Mascota</Form.Label>
        <Form.Control
          name="mascota"
          value={datos.mascota}
          onChange={cambiar}
          isInvalid={Boolean(errores.mascota)}
        />
        <Form.Control.Feedback type="invalid">
          {errores.mascota}
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3" controlId="fecha">
        <Form.Label>Fecha (DD-MM-AAAA)</Form.Label>
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

      <Form.Group className="mb-3" controlId="motivo">
        <Form.Label>Motivo</Form.Label>
        <Form.Control
          name="motivo"
          value={datos.motivo}
          onChange={cambiar}
          isInvalid={Boolean(errores.motivo)}
        />
        <Form.Control.Feedback type="invalid">
          {errores.motivo}
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3" controlId="diagnostico">
        <Form.Label>Diagnóstico</Form.Label>
        <Form.Control
          name="diagnostico"
          value={datos.diagnostico}
          onChange={cambiar}
          isInvalid={Boolean(errores.diagnostico)}
        />
        <Form.Control.Feedback type="invalid">
          {errores.diagnostico}
        </Form.Control.Feedback>
      </Form.Group>

      <Button type="submit">Guardar</Button>
    </Form>
  );
}

export default FormularioFicha;
