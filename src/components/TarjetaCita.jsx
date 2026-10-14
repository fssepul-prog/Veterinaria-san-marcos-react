function TarjetaCita({ cita, onConfirmar, onCancelar, onReagendar }) {
  return (
    <article className="card h-100">
      <div className="card-body">
        <h2 className="h5">{cita.mascota}</h2>
        <p>Dueño: {cita.dueno}</p>
        <p>Servicio: {cita.servicio}</p>
        <p>Fecha: {cita.fecha}</p>
        <p>Estado: {cita.estado}</p>

        {cita.estado === "Pendiente" && (
          <button
            className="btn btn-success me-2"
            onClick={() => onConfirmar(cita.id)}
          >
            Confirmar
          </button>
        )}

        {onReagendar && cita.estado !== "Cancelada" && (
          <button
            className="btn btn-warning me-2"
            onClick={() => onReagendar(cita.id)}
          >
            Reagendar
          </button>
        )}

        {onCancelar && cita.estado !== "Cancelada" && (
          <button
            className="btn btn-danger"
            onClick={() => onCancelar(cita.id)}
          >
            Cancelar
          </button>
        )}
      </div>
    </article>
  )
}

export default TarjetaCita
