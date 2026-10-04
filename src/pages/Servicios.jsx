/*
  Guía 10 — Servicios con Bootstrap Container/Row/Col y patrones de estado.

  Patrones Guía 10: useState, useEffect, localStorage, .filter(), .some(), .map()
  Patrón equivalente en conecta-cultura: Actividades.jsx
*/

import { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import TarjetaServicio from '../components/TarjetaServicio'
import MisSolicitudes from '../components/MisSolicitudes'
import { servicios } from '../data/servicios'

const categorias = ['Todas', 'Consultas', 'Vacunación', 'Desparasitación', 'Cirugía', 'Otros']

function Servicios() {
  const [categoria, setCategoria] = useState('Todas')

  const [solicitudes, setSolicitudes] = useState(() => {
    const guardadas = localStorage.getItem('solicitudes')
    return guardadas ? JSON.parse(guardadas) : []
  })

  const visibles =
    categoria === 'Todas'
      ? servicios
      : servicios.filter((s) => s.categoria === categoria)

  function manejarAgendar(servicio) {
    const yaExiste = solicitudes.some((item) => item.id === servicio.id)
    if (yaExiste) return
    setSolicitudes([...solicitudes, servicio])
  }

  function manejarEliminar(id) {
    setSolicitudes(solicitudes.filter((item) => item.id !== id))
  }

  useEffect(() => {
    localStorage.setItem('solicitudes', JSON.stringify(solicitudes))
  }, [solicitudes])

  return (
    <main>
      <Container className="py-4">

        {/* ── Encabezado ── */}
        <header className="encabezado-pagina">
          <p className="etiqueta">Catálogo de atención</p>
          <h1>Servicios para el cuidado de tu mascota</h1>
          <p className="text-muted">
            Estas son las categorías de atención más solicitadas en Veterinaria
            San Marcos. Los precios son referenciales y pueden variar según el
            tamaño y la condición de cada paciente.
          </p>
        </header>

        {/* ── Filtro ── */}
        <section aria-labelledby="titulo-filtro" className="mb-4">
          <h2 id="titulo-filtro" className="h5">Filtrar por categoría</h2>
          <div className="d-flex flex-wrap gap-2 mt-2">
            {categorias.map((cat) => (
              <button
                key={cat}
                className={categoria === cat ? 'btn btn-success' : 'btn btn-outline-success'}
                onClick={() => setCategoria(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </section>

        {/* ── Tarjetas filtradas ── */}
        <section aria-labelledby="titulo-catalogo" className="mb-5">
          <h2 id="titulo-catalogo" className="h5">
            {categoria === 'Todas' ? 'Todos los servicios' : categoria}
          </h2>

          {visibles.length === 0 ? (
            <p className="text-muted">No hay servicios disponibles en esta categoría.</p>
          ) : (
            <Row className="g-4 mt-1">
              {visibles.map((servicio) => (
                <Col xs={12} md={6} lg={4} key={servicio.id}>
                  <TarjetaServicio servicio={servicio} onAgendar={manejarAgendar} />
                </Col>
              ))}
            </Row>
          )}
        </section>

        {/* ── Tabla de precios ── */}
        <section aria-labelledby="titulo-precios" className="mb-5">
          <h2 id="titulo-precios">Precios de referencia</h2>
          <div className="tabla-contenedor">
            <table className="table table-bordered table-hover mt-3">
              <caption>Servicios más solicitados y su valor aproximado</caption>
              <thead className="table-success">
                <tr>
                  <th scope="col">Código</th>
                  <th scope="col">Servicio</th>
                  <th scope="col">Especie</th>
                  <th scope="col">Duración</th>
                  <th scope="col">Precio (CLP)</th>
                </tr>
              </thead>
              <tbody>
                {servicios.map((s) => (
                  <tr key={s.id}>
                    <th scope="row">{s.codigo}</th>
                    <td>{s.nombre}</td>
                    <td>{s.especie}</td>
                    <td>{s.duracion}</td>
                    <td>${s.precio.toLocaleString('es-CL')}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p><small className="text-muted">Valores de agosto de 2026, sujetos a evaluación clínica previa.</small></p>
        </section>

        {/* ── Aviso ── */}
        <aside className="aviso mb-4" aria-labelledby="titulo-aviso-servicios">
          <h2 id="titulo-aviso-servicios">¿Ya sabes qué servicio necesitas?</h2>
          <p>
            Completa el formulario de solicitud de hora indicando el servicio
            elegido y te confirmaremos la fecha disponible.
          </p>
        </aside>

        <MisSolicitudes solicitudes={solicitudes} onEliminar={manejarEliminar} />

      </Container>
    </main>
  )
}

export default Servicios
