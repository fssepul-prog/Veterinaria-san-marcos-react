import { useState } from "react";
import { pacientes } from "../../data/pacientes";

const especies = ["Todas", "Perro", "Gato", "Conejo", "Ave"];

function AdminHistorial() {
  // Estado que guarda la especie seleccionada como filtro; "Todas" muestra todos los pacientes
  const [especie, setEspecie] = useState("Todas");

  // Si el filtro es "Todas" retorna la lista completa; si no, filtra por la especie seleccionada
  const visibles =
    especie === "Todas"
      ? pacientes
      : pacientes.filter((paciente) => paciente.especie === especie);

  return (
    <main className="container py-4">
      <h1 className="mb-4">Historial clínico de pacientes</h1>

      <section aria-labelledby="titulo-filtro" className="mb-4">
        <h2 id="titulo-filtro" className="h5">Filtrar por especie</h2>
        <div className="d-flex flex-wrap gap-2 mt-2">
          {especies.map((opcion) => (
            <button
              key={opcion}
              className={especie === opcion ? "btn btn-success" : "btn btn-outline-success"}
              onClick={() => setEspecie(opcion)}
            >
              {opcion}
            </button>
          ))}
        </div>
      </section>

      <div className="table-responsive">
        <table className="table table-bordered table-hover">
          <caption>Pacientes registrados</caption>
          <thead className="table-success">
            <tr>
              <th scope="col">Mascota</th>
              <th scope="col">Especie</th>
              <th scope="col">Dueño</th>
              <th scope="col">Última atención</th>
              <th scope="col">Ficha</th>
            </tr>
          </thead>
          <tbody>
            {visibles.map((paciente) => (
              <tr key={paciente.id}>
                <td>{paciente.mascota}</td>
                <td>{paciente.especie}</td>
                <td>{paciente.dueno}</td>
                <td>{paciente.ultimaAtencion}</td>
                <td>
                  <button className="btn btn-outline-success btn-sm" disabled>
                    Ver ficha
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}

export default AdminHistorial;