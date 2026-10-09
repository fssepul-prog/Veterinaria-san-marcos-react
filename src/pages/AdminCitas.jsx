import { useEffect, useState } from "react";
import { citasIniciales } from "../../data/citas";

const estados = ["Todas", "Pendiente", "Confirmada", "Cancelada"];

function AdminCitas() {
  const [citas, setCitas] = useState(() => {
    const guardadas = localStorage.getItem("citas");
    return guardadas ? JSON.parse(guardadas) : citasIniciales;
  });
  const [filtro, setFiltro] = useState("Todas");

  useEffect(() => {
    localStorage.setItem("citas", JSON.stringify(citas));
  }, [citas]);

  // Operador ternario: si el filtro es Todas muestra todo, si no filtra por estado
  const visibles = filtro === "Todas"
    ? citas
    : citas.filter((c) => c.estado === filtro);

  function cambiarEstado(id, estado) {
    setCitas(citas.map((c) => (c.id === id ? { ...c, estado } : c)));
  }

  return (
    <main className="container py-4">
      <h1>Todas las citas</h1>

      <section aria-labelledby="titulo-filtro" className="mb-4">
        <h2 id="titulo-filtro" className="h5">Filtrar por estado</h2>
        <div className="d-flex flex-wrap gap-2 mt-2">
          {estados.map((estado) => (
            <button
              key={estado}
              className={filtro === estado ? "btn btn-success" : "btn btn-outline-success"}
              onClick={() => setFiltro(estado)}
            >
              {estado}
            </button>
          ))}
        </div>
      </section>

      <div className="table-responsive">
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">Dueño</th>
              <th scope="col">Mascota</th>
              <th scope="col">Servicio</th>
              <th scope="col">Fecha</th>
              <th scope="col">Estado</th>
              <th scope="col">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {visibles.map((c) => (
              <tr key={c.id}>
                <td>{c.dueno}</td>
                <td>{c.mascota}</td>
                <td>{c.servicio}</td>
                <td>{c.fecha}</td>
                <td>{c.estado}</td>
                <td>
                  {/* Solo se puede confirmar una cita pendiente */}
                  {c.estado === "Pendiente" && (
                    <button
                      className="btn btn-sm btn-primary me-1"
                      aria-label={`Confirmar cita de ${c.dueno}`}
                      onClick={() => cambiarEstado(c.id, "Confirmada")}
                    >
                      Confirmar
                    </button>
                  )}
                  {/* Una cita ya cancelada no se vuelve a cancelar */}
                  {c.estado !== "Cancelada" && (
                    <button
                      className="btn btn-sm btn-danger"
                      aria-label={`Cancelar cita de ${c.dueno}`}
                      onClick={() => cambiarEstado(c.id, "Cancelada")}
                    >
                      Cancelar
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}

export default AdminCitas;