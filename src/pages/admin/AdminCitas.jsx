import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import TarjetaCita from "../../components/TarjetaCita";
import { citasIniciales } from "../../data/citas";

const estados = ["Todas", "Pendiente", "Confirmada", "Cancelada"];

function AdminCitas() {
  const [estado, setEstado] = useState("Todas");

  // Carga inicial: usa las citas guardadas en localStorage o las del archivo de datos
  const [citas, setCitas] = useState(() => {
    const guardadas = localStorage.getItem("citas");
    return guardadas ? JSON.parse(guardadas) : citasIniciales;
  });

  // Sincroniza la lista de citas con localStorage cada vez que cambia
  useEffect(() => {
    localStorage.setItem("citas", JSON.stringify(citas));
  }, [citas]);

  // Muestra todas las citas o solo las del estado seleccionado (Pendiente, Confirmada, Cancelada)
  const visibles =
    estado === "Todas"
      ? citas
      : citas.filter((cita) => cita.estado === estado);

  // Cambia el estado de la cita con ese id a "Confirmada" sin modificar las demás
  function confirmar(id) {
    setCitas(
      // .map() recorre todas las citas; solo cambia la que coincide con el id
      citas.map((cita) =>
        cita.id === id ? { ...cita, estado: "Confirmada" } : cita
      )
    );
  }

  // Cambia el estado de la cita con ese id a "Cancelada" sin modificar las demás
  function cancelar(id) {
    setCitas(
      citas.map((cita) =>
        cita.id === id ? { ...cita, estado: "Cancelada" } : cita
      )
    );
  }

  return (
    <main className="container py-4">
      <h1 className="mb-4">Todas las citas</h1>

      <section aria-labelledby="titulo-filtro" className="mb-4">
        <h2 id="titulo-filtro" className="h5">Filtrar por estado</h2>
        <div className="d-flex flex-wrap gap-2 mt-2">
          {estados.map((opcion) => (
            <button
              key={opcion}
              className={estado === opcion ? "btn btn-success" : "btn btn-outline-success"}
              onClick={() => setEstado(opcion)}
            >
              {opcion}
            </button>
          ))}
        </div>
      </section>

      <Row className="g-4">
        {visibles.map((cita) => (
          <Col xs={12} md={6} lg={4} key={cita.id}>
            <TarjetaCita
              cita={cita}
              onConfirmar={confirmar}
              onCancelar={cancelar}
            />
          </Col>
        ))}
      </Row>
    </main>
  );
}

export default AdminCitas;