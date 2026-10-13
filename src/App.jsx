//Se importa el sistema de rutas de react router para definir la navegacion de la plataforma

import { Routes, Route, useLocation } from 'react-router-dom'
import Navegacion from './components/Navegacion'
import PiePagina from './components/PiePagina'
import Inicio from './pages/Inicio.jsx'
import Nosotros from './pages/Nosotros.jsx'
import Servicios from './pages/Servicios.jsx'
import DetalleServicio from './pages/DetalleServicio.jsx'
import Agenda from './pages/Agenda.jsx'
import Recursos from './pages/Recursos.jsx'
import Citas from './pages/cliente/Citas'
import Ingreso from './pages/auth/Ingreso'
import Registro from './pages/auth/Registro'
import NoEncontrada from './pages/NoEncontrada.jsx'
import MiCuenta from './pages/cliente/MiCuenta'
import AdminServicios from './pages/admin/AdminServicios'
import AdminCitas from './pages/admin/AdminCitas'
import AdminUsuarios from './pages/admin/AdminUsuarios'
import AdminReportes from './pages/admin/AdminReportes'
import AdminHistorial from './pages/admin/AdminHistorial'
import RecepcionCitas from './pages/recepcionista/RecepcionCitas'
import RecepcionFichas from './pages/recepcionista/RecepcionFichas'

//definicion de rutas que funcionaran de manera conjunta con BrowserRouter
//tanto Navegacion como PiePagina estan siempre activas, y dependiendo del enrutamiento, el "body" de la pagina cambia segun la solicitud del usuario
function App() {
    const { pathname } = useLocation()
    const esAdmin = pathname.startsWith('/admin') || pathname.startsWith('/recepcion')

    return (
        <>
            <Navegacion />
            <Routes>
                <Route path="/"                    element={<Inicio />} />
                <Route path="/nosotros"            element={<Nosotros />} />
                <Route path="/servicios"           element={<Servicios />} />
                {/*A la capa de servicios se le otorga un parametro dinamico "id"
                para identificar un servicio en particular*/}
                <Route path="/servicios/:id"       element={<DetalleServicio />} />
                <Route path="/agenda"              element={<Agenda />} />
                <Route path="/recursos"            element={<Recursos />} />
                <Route path="/citas"               element={<Citas />} />
                <Route path="/ingreso"             element={<Ingreso />} />
                <Route path="/registro"            element={<Registro />} />
                <Route path="/mi-cuenta"           element={<MiCuenta />} />
                <Route path="/admin/servicios"     element={<AdminServicios />} />
                <Route path="/admin/citas"         element={<AdminCitas />} />
                <Route path="/admin/usuarios"      element={<AdminUsuarios />} />
                <Route path="/admin/reportes"          element={<AdminReportes />} />
                <Route path="/admin/historial"         element={<AdminHistorial />} />
                <Route path="/recepcion/citas"         element={<RecepcionCitas />} />
                <Route path="/recepcion/fichas"        element={<RecepcionFichas />} />
                {/* Captura cualquier ruta no definida y muestra la página 404 */}
                <Route path="*"                        element={<NoEncontrada />} />
            </Routes>
            <PiePagina esAdmin={esAdmin} />
        </>
    )
}

export default App