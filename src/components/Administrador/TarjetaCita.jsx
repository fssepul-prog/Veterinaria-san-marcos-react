// Contiene 3 props: un objeto "cita" y dos funciones que avisan a la página
// cuando se presiona Confirmar o Cancelar
function TarjetaCita({ cita, onConfirmar, onCancelar }) {
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
            className="btn btn-primary me-2"
            onClick={() => onConfirmar(cita.id)}
          >
            Confirmar
          </button>
        )}

        {cita.estado !== "Cancelada" && (
          <button
            className="btn btn-danger"
            onClick={() => onCancelar(cita.id)}
          >
            Cancelar
          </button>
        )}
      </div>
    </article>
  );
}

export default TarjetaCita;
