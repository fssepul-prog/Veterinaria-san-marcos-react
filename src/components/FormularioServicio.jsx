import { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";

const inicial = { codigo: "", nombre: "", categoria: "", duracion: "", precio: "" };

// Props: servicioEditando (null cuando es un servicio nuevo), onGuardar y onCancelar
function FormularioServicio({ servicioEditando, onGuardar, onCancelar }) {
  const [datos, setDatos] = useState(inicial);
  const [errores, setErrores] = useState({});

  // Cuando se recibe un servicio para editar, carga sus datos en el formulario automáticamente
  useEffect(() => {
    // Si viene un servicioEditando lo carga; si no (nuevo servicio), usa el formulario vacío
    setDatos(servicioEditando || inicial);
    setErrores({}); // limpia los errores del formulario anterior al cambiar de servicio
  }, [servicioEditando]); // se ejecuta cada vez que cambia el servicio a editar

  // Actualiza en tiempo real el campo que el usuario está escribiendo o seleccionando
  function cambiar(evento) {
    const { name, value } = evento.target; // extrae el nombre del campo y su nuevo valor
    setDatos({ ...datos, [name]: value }); // copia el estado actual y reemplaza solo ese campo
  }

  // Maneja el clic en "Guardar": valida los campos, llama al padre y limpia el formulario
  function enviar(evento) {
    evento.preventDefault(); // evita recarga de página
    const nuevosErrores = {};
    if (!datos.codigo.trim())  nuevosErrores.codigo   = "Código obligatorio";
    if (!datos.nombre.trim())  nuevosErrores.nombre   = "Nombre obligatorio";
    if (!datos.categoria)      nuevosErrores.categoria = "Selecciona categoría";
    if (!datos.duracion.trim()) nuevosErrores.duracion = "Duración obligatoria";
    // Number() convierte el texto del input a número para poder compararlo con 0
    if (datos.precio === "" || Number(datos.precio) < 0) nuevosErrores.precio = "Ingresa un precio (no puede ser negativo)";
    setErrores(nuevosErrores);
    if (Object.keys(nuevosErrores).length > 0) return; // si hay errores, no continúa
    // Convierte precio a número antes de enviarlo al componente padre (AdminServicios)
    onGuardar({ ...datos, precio: Number(datos.precio) });
    setDatos(inicial); // limpia el formulario para el próximo servicio
  }

  return (
    <Form onSubmit={enviar} noValidate>
      <Form.Group className="mb-3" controlId="codigo">
        <Form.Label>Código</Form.Label>
        <Form.Control
          name="codigo"
          value={datos.codigo}
          onChange={cambiar}
          isInvalid={Boolean(errores.codigo)}
        />
        <Form.Control.Feedback type="invalid">{errores.codigo}</Form.Control.Feedback>
      </Form.Group>

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

      <Form.Group className="mb-3" controlId="categoria">
        <Form.Label>Categoría</Form.Label>
        <Form.Select
          name="categoria"
          value={datos.categoria}
          onChange={cambiar}
          isInvalid={Boolean(errores.categoria)}
        >
          <option value="">Selecciona una categoría</option>
          <option>Consultas</option>
          <option>Vacunación</option>
          <option>Cirugía</option>
          <option>Desparasitación</option>
          <option>Exámenes</option>
          <option>Otros</option>
        </Form.Select>
        <Form.Control.Feedback type="invalid">{errores.categoria}</Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3" controlId="duracion">
        <Form.Label>Duración</Form.Label>
        <Form.Control
          name="duracion"
          value={datos.duracion}
          onChange={cambiar}
          placeholder="Ej: 30 min"
          isInvalid={Boolean(errores.duracion)}
        />
        <Form.Control.Feedback type="invalid">{errores.duracion}</Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3" controlId="precio">
        <Form.Label>Precio (CLP)</Form.Label>
        <Form.Control
          type="number"
          name="precio"
          min="0"
          value={datos.precio}
          onChange={cambiar}
          isInvalid={Boolean(errores.precio)}
        />
        <Form.Control.Feedback type="invalid">{errores.precio}</Form.Control.Feedback>
      </Form.Group>

      <Button type="submit" className="me-2">Guardar</Button>
      {onCancelar && (
        <Button variant="secondary" onClick={onCancelar}>Cancelar</Button>
      )}
    </Form>
  );
}

export default FormularioServicio;
