import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function NoEncontrada() {
  return (
    <main>
      <Container className="py-5 text-center">
        <p className="etiqueta">Error 404</p>
        <h1>Página no encontrada</h1>
        <p className="text-muted mt-3">
          La dirección que buscas no existe o fue movida.
        </p>
        <Link to="/" className="btn btn-success mt-3">
          Volver al inicio
        </Link>
      </Container>
    </main>
  )
}

export default NoEncontrada
