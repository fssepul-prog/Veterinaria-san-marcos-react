import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import FormularioServicio from "../../components/FormularioServicio";
import { servicios as serviciosIniciales } from "../../data/servicios";

const categorias = ["Todas", "Consultas", "Vacunación", "Cirugía", "Desparasitación", "Exámenes", "Otros"];

function AdminServicios() {
  const [categoria, setCategoria] = useState("Todas");

  // Carga inicial: si hay servicios guardados en localStorage los usa; si no, usa los del archivo
  const [servicios, setServicios] = useState(() => {
    const guardados = localStorage.getItem("servicios");
    return guardados ? JSON.parse(guardados) : serviciosIniciales;
  });

  // Cada vez que la lista de servicios cambia, la guarda automáticamente en localStorage
  useEffect(() => {
    localStorage.setItem("servicios", JSON.stringify(servicios));
  }, [servicios]);

  // Si no hay filtro activo muestra todos; si hay, filtra por la categoría seleccionada
  const visibles =
    categoria === "Todas"
      ? servicios
      : servicios.filter((servicio) => servicio.categoria === categoria);

  // Agrega un servicio nuevo solo si su código no existe ya en la lista
  function guardar(servicio) {
    // .some() recorre la lista y retorna true si algún elemento tiene el mismo código
    const yaExiste = servicios.some((item) => item.codigo === servicio.codigo);
    if (yaExiste) return; // si ya existe, no hace nada (evita duplicados)
    setServicios([...servicios, servicio]); // agrega el nuevo servicio al final de la lista
  }

  // Elimina el servicio cuyo código coincide con el recibido
  function eliminar(codigo) {
    // .filter() crea un nuevo arreglo sin el elemento que tiene ese código
    setServicios(servicios.filter((item) => item.codigo !== codigo));
  }

  return (
    <main className="container py-4">
      <h1 className="mb-4">Catálogo de servicios</h1>

      <section aria-labelledby="titulo-filtro" className="mb-4">
        <h2 id="titulo-filtro" className="h5">Filtrar por categoría</h2>
        <div className="d-flex flex-wrap gap-2 mt-2">
          {categorias.map((cat) => (
            <button
              key={cat}
              className={categoria === cat ? "btn btn-success" : "btn btn-outline-success"}
              onClick={() => setCategoria(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      <Row className="g-4">
        <Col xs={12} lg={8}>
          <div className="table-responsive">
            <table className="table table-bordered table-hover">
              <caption>Servicios de la clínica</caption>
              <thead className="table-success">
                <tr>
                  <th scope="col">Código</th>
                  <th scope="col">Servicio</th>
                  <th scope="col">Categoría</th>
                  <th scope="col" className="d-none d-md-table-cell">Duración</th>
                  <th scope="col">Precio</th>
                  <th scope="col">Acción</th>
                </tr>
              </thead>
              <tbody>
                {visibles.map((servicio) => (
                  <tr key={servicio.codigo}>
                    <th scope="row">{servicio.codigo}</th>
                    <td>{servicio.nombre}</td>
                    <td>{servicio.categoria}</td>
                    <td className="d-none d-md-table-cell">{servicio.duracion}</td>
                    <td>${servicio.precio.toLocaleString("es-CL")}</td>
                    <td>
                      <button
                        className="btn btn-danger"
                        onClick={() => eliminar(servicio.codigo)}
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

        <Col xs={12} lg={4}>
          <h2 className="h5">Nuevo servicio</h2>
          <FormularioServicio onGuardar={guardar} />
        </Col>
      </Row>
    </main>
  );
}

export default AdminServicios;