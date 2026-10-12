/*
  Componente funcional Cabecera.

  En la versión HTML original, el <header> se repetía en cada página .html.
  En React, se convierte en un componente reutilizable: se escribe una sola vez
  y se usa en App.jsx para todas las páginas.

  Reglas JSX a recordar:
  - Se usa className en vez de class (class es palabra reservada en JS).
  - Las etiquetas deben cerrarse: <img /> en vez de <img>.
  - El componente debe retornar un único elemento raíz (aquí <header>).
*/

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
