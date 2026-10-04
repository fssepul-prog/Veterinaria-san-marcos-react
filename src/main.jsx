import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import App from './App.jsx'

/*
  Guía 9 — Paso 3: Punto de entrada de la aplicación React.

  createRoot toma el elemento <div id="root"> del index.html
  y le dice a React que desde aquí controla toda la interfaz.

  StrictMode activa advertencias adicionales en desarrollo:
  ayuda a detectar errores antes de que lleguen a producción.

  En la versión HTML original, cada página tenía su propio <body>
  con scripts separados. Ahora todo parte desde este único archivo.
*/
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
