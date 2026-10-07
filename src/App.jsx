//Se importa el sistema de rutas de react router para definir la navegacion de la plataforma

import { Routes, Route } from 'react-router-dom'
import Navegacion from './components/Navegacion'
import PiePagina from './components/PiePagina'
import Inicio from './pages/Inicio'
import Nosotros from './pages/Nosotros'
import Servicios from './pages/Servicios'
import DetalleServicio from './pages/DetalleServicio'
import Agenda from './pages/Agenda'
import Recursos from './pages/Recursos'
import Citas from './pages/Citas'
import Ingreso from './pages/Ingreso'
import Registro from './pages/Registro'
import NoEncontrada from './pages/NoEncontrada'

//definicion de rutas que funcionaran de manera conjunta con BrowserRouter
//tanto Navegacion como PiePagina estan siempre activas, y dependiendo del enrutamiento, el "body" de la pagina cambia segun la solicitud del usuario
function App() {
    return (
        <>
            <Navegacion />
            <Routes>
                <Route path="/"                element={<Inicio />} />
                <Route path="/nosotros"        element={<Nosotros />} />
                <Route path="/servicios"       element={<Servicios />} />
                {/*A la capa de servicios se le otorga un parametro dinamico "id"
                para identificar un servicio en particular*/}
                <Route path="/servicios/:id"   element={<DetalleServicio />} />
                <Route path="/agenda"          element={<Agenda />} />
                <Route path="/recursos"        element={<Recursos />} />
                <Route path="/citas"           element={<Citas />} />
                <Route path="/ingreso"         element={<Ingreso />} />
                <Route path="/registro"        element={<Registro />} />
                {/* Captura cualquier ruta no definida y muestra la página 404 */}
                <Route path="*"                element={<NoEncontrada />} />
            </Routes>
            <PiePagina />
        </>
    )
}

export default App