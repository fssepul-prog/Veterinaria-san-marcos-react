/*
  Guía 9 — Paso 5: Componente funcional Cabecera.

  En la versión HTML original, el <header> se repetía en cada página .html.
  En React, se convierte en un componente reutilizable: se escribe una sola vez
  y se usa en App.jsx para todas las páginas.

  Reglas JSX a recordar:
  - Se usa className en vez de class (class es palabra reservada en JS).
  - Las etiquetas deben cerrarse: <img /> en vez de <img>.
  - El componente debe retornar un único elemento raíz (aquí <header>).
*/

function Cabecera() {
  return (
    <header className="cabecera-sitio">
      {/* La marca (logo + nombre) redirige al inicio */}
      <a className="marca" href="/">
        Veterinaria San Marcos
      </a>
    </header>
  )
}

export default Cabecera
