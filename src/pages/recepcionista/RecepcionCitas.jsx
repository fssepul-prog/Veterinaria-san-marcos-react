import { useEffect, useState } from "react"
import { Col, Row } from "react-bootstrap"
import TarjetaCita from "../../components/TarjetaCita"
import FormularioReagendar from "../../components/recepcionista/FormularioReagendar"
import { citasIniciales } from "../../data/citas"

const estados = ["Todas", "Pendiente", "Confirmada", "Cancelada"]

function RecepcionCitas() {
  const [estado, setEstado] = useState("Todas")
  const [reagendando, setReagendando] = useState(null)

  // Carga inicial: usa las citas guardadas en localStorage o las del archivo de datos
  const [citas, setCitas] = useState(() => {
    const guardadas = localStorage.getItem("citas")
    return guardadas ? JSON.parse(guardadas) : citasIniciales
  })

  // Persiste la lista de citas en localStorage cada vez que se modifica
  useEffect(() => {
    localStorage.setItem("citas", JSON.stringify(citas))
  }, [citas])

  // Muestra todas las citas o solo las del estado elegido en el filtro
  const visibles =
    estado === "Todas"
      ? citas
      : citas.filter((cita) => cita.estado === estado)

  // Cambia el estado de la cita con ese id a "Confirmada" manteniendo el resto igual
  function confirmar(id) {
    setCitas(
      // .map() devuelve una nueva lista; solo la cita con ese id recibe el cambio
      citas.map((cita) =>
        cita.id === id ? { ...cita, estado: "Confirmada" } : cita
      )
    )
  }

  // Actualiza la fecha de la cita con ese id y cierra el formulario de reagendado
  function reagendar(id, fecha) {
    setCitas(
      citas.map((cita) =>
        cita.id === id ? { ...cita, fecha } : cita // reemplaza solo el campo fecha
      )
    )
    setReagendando(null) // cierra el formulario de reagendado para esa cita
  }

  // Abre el formulario de reagendado para la cita con ese id
  function empezarReagendar(id) {
    setReagendando(id) // guarda el id de la cita que se está reagendando
  }

  // Cierra el formulario de reagendado sin guardar cambios
  function cancelarReagendar() {
    setReagendando(null) // vuelve a mostrar la tarjeta normal de la cita
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
