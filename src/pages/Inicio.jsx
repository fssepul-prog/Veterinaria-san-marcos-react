//Sección principal de la pagina web, se muestran los apartados destacados de esta
import { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
//el vinculo link es el remplazo a la etiqueta <a href>, permitiendo asi la navegacion sin recargas
import { Link } from 'react-router-dom'
import TarjetaServicio from '../components/TarjetaServicio'
import MisSolicitudes from '../components/MisSolicitudes'
import { servicios } from '../data/servicios'


  function Inicio() {

    //muestra unicamente los primeros 3 elementos de la biblioteca de "servicios.js"
    const serviciosDestacados = servicios.slice(0, 3)
    //se inicializa el estado de solicitudes, al interactuar con esta, se guardan los datos "solicitudes", la informacion se recupera al actualizar la pagina
    //ya que esta se esta guardando en el localStorage del navegador
    //RECORDAR QUE =>  ES UNA FUNCION DE COMPARACION, ASI QUE BASICAMENTE YO REVISO SI EXISTE ALGO EN EL LOCALSTORAGE CON CLAVE DE SOLICITUDES,
    //SI EXISTE ALGO, ESTE TEXTO PASA A UN ARREGLO MEDIANTE JSON.PARSE Y LO CONVIERTE EN UN VALOR INICIAL
    //SI NO HAY NADA, RETORNA UN ARREGLO VACIO, ESTO SE PUEDE VER EN return guardadas ? JSON.parse(guardadas) : []  , RECORDAR QUE ? ES UN OPERADOR TERNARIO, ESTE EQUIVALE A UN IF/ELSE
    const [solicitudes, setSolicitudes] = useState(() => {
      const guardadas = localStorage.getItem('solicitudes')
      return guardadas ? JSON.parse(guardadas) : []
    })
    //Agrega un servicio a la lista de solicitudes, pero antes verifica con some si ese servicio ya fue agendado.
    // Si ya existe simplemente no hace nada (return). Si no existe lo agrega al arreglo.
    function manejarAgendar(servicio) {
      const yaExiste = solicitudes.some((item) => item.id === servicio.id)
      if (yaExiste) return
      setSolicitudes([...solicitudes, servicio])
    }
    // Elimina un servicio de la lista usando filter, descartando el elemento cuyo id coincida con el recibido.
    function manejarEliminar(id) {
      setSolicitudes(solicitudes.filter((item) => item.id !== id))
    }
    //Cada vez que la lista de solicitudes cambia, guarda automáticamente el estado actualizado en localStorage con JSON.stringify.
    // Así los datos persisten aunque el usuario recargue la página.
    useEffect(() => {
      localStorage.setItem('solicitudes', JSON.stringify(solicitudes))
    }, [solicitudes])


  return (
    <main>
      <Container className="py-4">
        {/* ── Portada inicio ── */}
        <section className="presentacion mb-5">
          <div>
            <p className="etiqueta">Clínica veterinaria en Rancagua</p>
            <h1>El bienestar de tus mascotas son nuestra prioridad.</h1>
            <p>
              Acompañamos a las familias de Rancagua y a sus mascotas desde 2009. Nuestro equipo de especialistas estará contigo en cada etapa: prevención de enfermedades,
              tratamientos e información oportuna, para que disfrutes de tu regalón sano y feliz.
            </p>
            <div className="d-flex flex-wrap gap-2 mt-3">
              <a className="btn btn-success" href="#citas">Solicitar una hora</a>
              <a className="btn btn-outline-success" href="#servicios">Ver todos los servicios</a>
            </div>
          </div>
          <img src="/clinica-fachada.jpg" alt="Centro Médico Veterinario San Marcos" />
        </section>

        {/* ── Servicios destacados ── */}
        <section aria-labelledby="titulo-destacados" className="mb-5">
          <h2 id="titulo-destacados">Servicios destacados</h2>
          <p className="text-muted mb-4">
            Estas son las atenciones más solicitadas. Para ver el catálogo
            completo visita la página de servicios.
          </p>
          <Row className="g-4">
            {serviciosDestacados.map((servicio) => (
              <Col xs={12} md={6} lg={4} key={servicio.id}>
                <TarjetaServicio servicio={servicio} onAgendar={manejarAgendar} />
              </Col>
            ))}
          </Row>
        </section>

        {/* ── Aviso ── */}
        <aside className="aviso mb-4" aria-labelledby="titulo-aviso">
          <h2 id="titulo-aviso">¿Sabías que puedes agendar en línea?</h2>
          <p>
            Agenda tu hora sin llamar ni ir a la clínica.
            Solo llena el formulario de solicitud y te confirmaremos la fecha disponible.
          </p>
        </aside>

        <MisSolicitudes solicitudes={solicitudes} onEliminar={manejarEliminar} />

      </Container>
    </main>
  )
}

export default Inicio
