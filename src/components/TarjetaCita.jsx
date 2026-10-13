// Recibe una cita y funciones callback opcionales para confirmar, cancelar y reagendar
function TarjetaCita({ cita, onConfirmar, onCancelar, onReagendar }) {
  return (
    <article className="card h-100">
      <div className="card-body">
        <h2 className="h5">{cita.mascota}</h2>
        <p>Dueño: {cita.dueno}</p>
        <p>Servicio: {cita.servicio}</p>
        <p>Fecha: {cita.fecha}</p>
        <p>Estado: {cita.estado}</p>

        {/* El botón Confirmar solo aparece si la cita está Pendiente */}
        {cita.estado === "Pendiente" && (
          <button
            className="btn btn-success me-2"
            onClick={() => onConfirmar(cita.id)} // llama a confirmar pasando el id de esta cita
          >
            Confirmar
          </button>
        )}

        {/* El botón Reagendar aparece solo si se pasó la función onReagendar y la cita no está Cancelada */}
        {onReagendar && cita.estado !== "Cancelada" && (
          <button
            className="btn btn-warning me-2"
            onClick={() => onReagendar(cita.id)} // llama a empezarReagendar con el id de la cita
          >
            Reagendar
          </button>
        )}

        {/* El botón Cancelar aparece solo si se pasó la función onCancelar y la cita no está ya Cancelada */}
        {onCancelar && cita.estado !== "Cancelada" && (
          <button
            className="btn btn-danger"
            onClick={() => onCancelar(cita.id)} // llama a cancelar pasando el id de esta cita
          >
            Cancelar
          </button>
        )}
      </div>
    </article>
  )
}

export default TarjetaCita
