import { useEffect, useState } from "react"
import { Col, Row } from "react-bootstrap"
import TarjetaCita from "../../components/TarjetaCita"
import FormularioReagendar from "../../components/recepcionista/FormularioReagendar"
import { citasIniciales } from "../../data/citas"

const estados = ["Todas", "Pendiente", "Confirmada", "Cancelada"]

function RecepcionCitas() {
  const [estado, setEstado] = useState("Todas")
  const [reagendando, setReagendando] = useState(null)

  const [citas, setCitas] = useState(() => {
    const guardadas = localStorage.getItem("citas")
    return guardadas ? JSON.parse(guardadas) : citasIniciales
  })

  // Persiste las citas entre recargas
  useEffect(() => {
    localStorage.setItem("citas", JSON.stringify(citas))
  }, [citas])

  const visibles =
    estado === "Todas"
      ? citas
      : citas.filter((cita) => cita.estado === estado)

  function confirmar(id) {
    setCitas(
      citas.map((cita) =>
        cita.id === id ? { ...cita, estado: "Confirmada" } : cita
      )
    )
  }

  function reagendar(id, fecha) {
    setCitas(
      citas.map((cita) =>
        cita.id === id ? { ...cita, fecha } : cita
      )
    )
    setReagendando(null)
  }

  function empezarReagendar(id) {
    setReagendando(id)
  }

  function cancelarReagendar() {
    setReagendando(null)
  }

  return (
    <main className="container py-4">
      <h1 className="mb-4">Citas solicitadas</h1>

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
            {reagendando !== cita.id && (
              <TarjetaCita
                cita={cita}
                onConfirmar={confirmar}
                onReagendar={empezarReagendar}
              />
            )}
            {reagendando === cita.id && (
              <FormularioReagendar
                cita={cita}
                onGuardar={reagendar}
                onCancelar={cancelarReagendar}
              />
            )}
          </Col>
        ))}
      </Row>
    </main>
  )
}

export default RecepcionCitas
