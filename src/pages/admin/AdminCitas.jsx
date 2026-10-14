import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import TarjetaCita from "../../components/TarjetaCita";
import { citasIniciales } from "../../data/citas";
import { guardarCitas } from "../../utils/guardarCitas";

const estados = ["Todas", "Pendiente", "Confirmada", "Cancelada"];

function AdminCitas() {
  const [estado, setEstado] = useState("Todas");

  // Persiste el estado entre recargas
  const [citas, setCitas] = useState(() => {
    const guardadas = localStorage.getItem("citas");
    return guardadas ? JSON.parse(guardadas) : citasIniciales;
  });

  useEffect(() => {
    guardarCitas(citas);
  }, [citas]);

  const visibles =
    estado === "Todas"
      ? citas
      : citas.filter((cita) => cita.estado === estado);

  function confirmar(id) {
    setCitas(citas.map((cita) =>
      cita.id === id ? { ...cita, estado: "Confirmada" } : cita
    ));
  }

  function cancelar(id) {
    setCitas(citas.map((cita) =>
      cita.id === id ? { ...cita, estado: "Cancelada" } : cita
    ));
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