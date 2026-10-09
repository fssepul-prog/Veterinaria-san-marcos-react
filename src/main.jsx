import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import App from './App.jsx'

/*
  Implementacion de BrowserRouter la cual abarca toda la aplicación.

  BrowserRouter habilita React Router en el árbol de componentes,
  Este debe envolver la aplicación para que sus descendientes puedan leer la dirección actual
  y navegar sin recargar el documento completo.

  Sin BrowserRouter, cada vez que el usuario navegara a /servicios o /nosotros,
  el navegador haría una solicitud completa al servidor y recargaría toda la página.
  Con BrowserRouter, React intercepta esa navegación y simplemente intercambia el componente que se muestra,
  sin recargar nada. La URL cambia en la barra del navegador, pero el documento HTML es siempre el mismo.
  Esto ayuda a mantener una interfaz fluida y rapida(ya que esta no presenta recargas)

*/

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </StrictMode>,
)
