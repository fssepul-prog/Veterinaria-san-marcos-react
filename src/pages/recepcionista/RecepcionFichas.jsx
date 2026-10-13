import { useEffect, useState } from "react"
import { Col, Row } from "react-bootstrap"
import TarjetaFicha from "../../components/recepcionista/TarjetaFicha"
import FormularioFicha from "../../components/recepcionista/FormularioFicha"
import { fichasIniciales } from "../../data/fichas"

const fichaVacia = { dueno: "", mascota: "", fecha: "", motivo: "", diagnostico: "" }

function RecepcionFichas() {
  const [editando, setEditando] = useState(null)

  // Carga inicial: usa las fichas guardadas en localStorage o las del archivo de datos
  const [fichas, setFichas] = useState(() => {
    const guardadas = localStorage.getItem("fichas")
    return guardadas ? JSON.parse(guardadas) : fichasIniciales
  })

  // Guarda la lista de fichas en localStorage cada vez que se agrega o modifica una
  useEffect(() => {
    localStorage.setItem("fichas", JSON.stringify(fichas))
  }, [fichas])

  // Agrega una ficha nueva con un id generado a partir del tamaño actual de la lista
  function registrar(ficha) {
    // fichas.length + 1 asigna el siguiente número disponible como id
    setFichas([...fichas, { ...ficha, id: fichas.length + 1 }])
  }

  // Reemplaza la ficha editada en la lista y cierra el formulario de edición
  function actualizar(ficha) {
    // .map() devuelve una nueva lista reemplazando solo la ficha cuyo id coincide
    setFichas(fichas.map((item) => (item.id === ficha.id ? ficha : item)))
    setEditando(null) // cierra el formulario de edición y vuelve a mostrar la tarjeta
  }

  // Abre el formulario de edición para la ficha con ese id
  function empezarEditar(id) {
    setEditando(id) // guarda el id de la ficha que se está editando
  }

  return (
    <main className="container py-4">
      <h1 className="mb-4">Fichas de pacientes</h1>

      <Row className="g-4">
        {editando === null && (
          <Col xs={12} lg={4}>
            <h2 className="h5">Registrar ficha</h2>
            <FormularioFicha ficha={fichaVacia} onGuardar={registrar} />
          </Col>
        )}

        <Col xs={12} lg={8}>
          <Row className="g-4">
            {fichas.map((ficha) => (
              <Col xs={12} md={6} key={ficha.id}>
                {editando !== ficha.id && (
                  <TarjetaFicha ficha={ficha} onEditar={empezarEditar} />
                )}
                {editando === ficha.id && (
                  <div className="card h-100">
                    <div className="card-body">
                      <h2 className="h5">Editar ficha de {ficha.mascota}</h2>
                      <FormularioFicha ficha={ficha} onGuardar={actualizar} />
                    </div>
                  </div>
                )}
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </main>
  )
}

export default RecepcionFichas
