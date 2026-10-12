import { useState } from "react";
import { Button, Form } from "react-bootstrap";

const inicial = { nombre: "", correo: "", telefono: "", rol: "", activo: true };

function FormularioUsuario({ onGuardar }) {
  const [datos, setDatos] = useState(inicial);
  const [errores, setErrores] = useState({});

  function cambiar(evento) {
    const { name, value } = evento.target;
    setDatos({ ...datos, [name]: value });
  }

  function enviar(evento) {
    evento.preventDefault();
    const nuevosErrores = {};
    if (!datos.nombre.trim()) nuevosErrores.nombre = "Nombre obligatorio";
    if (!datos.correo.trim()) nuevosErrores.correo = "Correo obligatorio";
    if (!datos.telefono.trim()) nuevosErrores.telefono = "Teléfono obligatorio";
    if (!datos.rol) nuevosErrores.rol = "Selecciona rol";
    setErrores(nuevosErrores);
    if (Object.keys(nuevosErrores).length > 0) return;
    onGuardar(datos);
    setDatos(inicial);
  }

  return (
    <Form onSubmit={enviar} noValidate>
      <Form.Group className="mb-3" controlId="nombre">
        <Form.Label>Nombre</Form.Label>
        <Form.Control
          name="nombre"
          value={datos.nombre}
          onChange={cambiar}
          isInvalid={Boolean(errores.nombre)}
        />
        <Form.Control.Feedback type="invalid">{errores.nombre}</Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3" controlId="correo">
        <Form.Label>Correo</Form.Label>
        <Form.Control
          name="correo"
          value={datos.correo}
          onChange={cambiar}
          isInvalid={Boolean(errores.correo)}
        />
        <Form.Control.Feedback type="invalid">{errores.correo}</Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3" controlId="telefono">
        <Form.Label>Teléfono</Form.Label>
        <Form.Control
          name="telefono"
          value={datos.telefono}
          onChange={cambiar}
          isInvalid={Boolean(errores.telefono)}
        />
        <Form.Control.Feedback type="invalid">{errores.telefono}</Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3" controlId="rol">
        <Form.Label>Rol</Form.Label>
        <Form.Select
          name="rol"
          value={datos.rol}
          onChange={cambiar}
          isInvalid={Boolean(errores.rol)}
        >
          <option value="">Selecciona un rol</option>
          <option>Administrador</option>
          <option>Recepcionista</option>
          <option>Dueño de mascota</option>
        </Form.Select>
        <Form.Control.Feedback type="invalid">{errores.rol}</Form.Control.Feedback>
      </Form.Group>

      <Button type="submit">Guardar</Button>
    </Form>
  );
}

export default FormularioUsuario;
