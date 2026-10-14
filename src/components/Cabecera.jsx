import { Link } from 'react-router-dom'

function Cabecera() {
  return (
    <header className="cabecera-sitio">
      {/* La marca (logo + nombre) redirige al inicio */}
      <Link className="marca" to="/">
        Veterinaria San Marcos
      </Link>
    </header>
  )
}

export default Cabecera
