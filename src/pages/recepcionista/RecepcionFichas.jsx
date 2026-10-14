import { useEffect, useState } from "react"
import { Col, Row } from "react-bootstrap"
import TarjetaFicha from "../../components/recepcionista/TarjetaFicha"
import FormularioFicha from "../../components/recepcionista/FormularioFicha"
import { fichasIniciales } from "../../data/fichas"

const fichaVacia = { dueno: "", mascota: "", fecha: "", motivo: "", diagnostico: "" }

function RecepcionFichas() {
  const [editando, setEditando] = useState(null)

  const [fichas, setFichas] = useState(() => {
    const guardadas = localStorage.getItem("fichas")
    return guardadas ? JSON.parse(guardadas) : fichasIniciales
  })

  // Persiste las fichas entre recargas
  useEffect(() => {
    localStorage.setItem("fichas", JSON.stringify(fichas))
  }, [fichas])

  function registrar(ficha) {
    setFichas([...fichas, { ...ficha, id: fichas.length + 1 }])
  }

  function actualizar(ficha) {
    setFichas(fichas.map((item) => (item.id === ficha.id ? ficha : item)))
    setEditando(null)
  }

  function empezarEditar(id) {
    setEditando(id)
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
