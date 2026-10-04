/*
  Guía 10 — Componente raíz App con navegación por estado.

  Sin React Router (Guía 11), la página visible se controla con useState.
  paginaActual es un string que indica qué componente renderizar.

  Patrones de Guía 10 aplicados:
    - useState para paginaActual (navegación sin router)
    - Renderizado condicional con función renderPagina()
    - onCambiarPagina se pasa como prop a Navegacion

  NOTA GUÍA 11: en la Guía 11, useState + renderPagina() serán reemplazados
  por <BrowserRouter> y <Routes> de react-router-dom.
*/

import { useState } from 'react'
import Navegacion from './components/Navegacion'
import PiePagina from './components/PiePagina'
import Inicio from './pages/Inicio'
import Nosotros from './pages/Nosotros'
import Servicios from './pages/Servicios'
import Recursos from './pages/Recursos'

function App() {
  /*
    Estado de navegación: determina qué página se muestra.
    Valor inicial 'inicio' → se muestra la página de inicio al cargar.
  */
  const [paginaActual, setPaginaActual] = useState('inicio')

  /*
    Selecciona el componente de página según el estado actual.
    Renderizado condicional equivalente al switch de rutas en React Router.
    Las páginas Agenda y Citas se agregarán en etapas siguientes.
  */
  function renderPagina() {
    if (paginaActual === 'nosotros')  return <Nosotros />
    if (paginaActual === 'servicios') return <Servicios />
    if (paginaActual === 'recursos')  return <Recursos />
    return <Inicio />
  }

  return (
    <>
      {/*
        Se pasan dos props a Navegacion:
          paginaActual   → para marcar el enlace activo (aria-current)
          onCambiarPagina → para que el menú pueda cambiar el estado
      */}
      <Navegacion
        paginaActual={paginaActual}
        onCambiarPagina={setPaginaActual}
      />
      {renderPagina()}
      <PiePagina />
    </>
  )
}

export default App
