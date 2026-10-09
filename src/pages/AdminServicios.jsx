import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import FormularioServicio from "../../components/FormularioServicio";
import { serviciosIniciales } from "../../data/servicios";

function AdminServicios() {
  const [servicios, setServicios] = useState(() => {
    const guardados = localStorage.getItem("servicios");
    return guardados ? JSON.parse(guardados) : serviciosIniciales;
  });
  const [editando, setEditando] = useState(null);

  useEffect(() => {
    localStorage.setItem("servicios", JSON.stringify(servicios));
  }, [servicios]);

  function guardar(datos) {
    if (editando) {
      setServicios(servicios.map((s) => (s.id === editando.id ? { ...s, ...datos } : s)));
      setEditando(null);
    } else {
      setServicios([...servicios, { ...datos, id: Date.now() }]);
    }
  }

  function eliminar(id) {
    setServicios(servicios.filter((s) => s.id !== id));
  }

  return (
    <main className="container py-4">
      <h1>Catálogo de servicios</h1>

      <Row className="g-4">
        <Col xs={12} lg={7}>
          <div className="table-responsive">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th scope="col">Servicio</th>
                  <th scope="col">Categoría</th>
                  <th scope="col">Duración</th>
                  <th scope="col">Precio</th>
                  <th scope="col">Acciones</th>
                </tr>
              </thead>
              <tbody>
                {servicios.map((s) => (
                  <tr key={s.id}>
                    <td>{s.nombre}</td>
                    <td>{s.categoria}</td>
                    <td>{s.duracion}</td>
                    <td>${s.precio.toLocaleString("es-CL")}</td>
                    <td>
                      <button
                        className="btn btn-sm btn-primary me-1"
                        aria-label={`Editar ${s.nombre}`}
                        onClick={() => setEditando(s)}
                      >
                        Editar
                      </button>
                      <button
                        className="btn btn-sm btn-danger"
                        aria-label={`Eliminar ${s.nombre}`}
                        onClick={() => eliminar(s.id)}
                      >
                        Eliminar
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Col>

        <Col xs={12} lg={5}>
          <FormularioServicio
            servicioEditando={editando}
            onGuardar={guardar}
            onCancelar={() => setEditando(null)}
          />
        </Col>
      </Row>
    </main>
  );
}

export default AdminServicios;
