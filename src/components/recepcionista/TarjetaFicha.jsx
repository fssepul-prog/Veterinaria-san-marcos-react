function TarjetaFicha({ ficha, onEditar }) {
  return (
    <article className="card h-100">
      <div className="card-body">
        <h2 className="h5">{ficha.mascota}</h2>
        <p>Dueño: {ficha.dueno}</p>
        <p>Fecha: {ficha.fecha}</p>
        <p>Motivo: {ficha.motivo}</p>
        <p>Diagnóstico: {ficha.diagnostico}</p>
        <button
          className="btn btn-outline-success"
          onClick={() => onEditar(ficha.id)}
        >
          Editar
        </button>
      </div>
    </article>
  )
}

export default TarjetaFicha
