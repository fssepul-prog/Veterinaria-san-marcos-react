import { useState } from "react";
import { Form } from "react-bootstrap";
import { pacientes } from "../../data/pacientes";

function AdminHistorial() {
  const [busqueda, setBusqueda] = useState("");
  // Paciente al que se le hizo clic en "Ver ficha"
  const [seleccionado, setSeleccionado] = useState(null);

  // Se busca por nombre de mascota o por nombre del dueño
  const texto = busqueda.trim().toLowerCase();
  const visibles = pacientes.filter(
    (p) => p.mascota.toLowerCase().includes(texto) || p.dueno.toLowerCase().includes(texto)
  );

  return (
    <main className="container py-4">
      <h1>Historial clínico de pacientes</h1>

      <Form.Group className="mb-3" controlId="buscar">
        <Form.Label>Buscar por mascota o dueño</Form.Label>
        <Form.Control
          value={busqueda}
          onChange={(evento) => setBusqueda(evento.target.value)}
        />
      </Form.Group>

      <div className="table-responsive">
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">Mascota</th>
              <th scope="col">Especie</th>
              <th scope="col">Dueño</th>
              <th scope="col">Última atención</th>
              <th scope="col">Ficha</th>
            </tr>
          </thead>
          <tbody>
            {visibles.map((p) => (
              <tr key={p.id}>
                <td>{p.mascota}</td>
                <td>{p.especie}</td>
                <td>{p.dueno}</td>
                <td>{p.ultimaAtencion}</td>
                <td>
                  <button
                    className="btn btn-sm btn-primary"
                    aria-label={`Ver ficha de ${p.mascota}`}
                    onClick={() => setSeleccionado(p)}
                  >
                    Ver ficha
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Renderizado condicional: la ficha solo aparece si hay un paciente seleccionado */}
      {seleccionado && (
        <article className="card">
          <div className="card-body">
            <h2 className="h5">Ficha clínica: {seleccionado.mascota}</h2>
            <p>Dueño: {seleccionado.dueno}</p>
            <p>Diagnóstico: {seleccionado.diagnostico}</p>
            <p className="mb-0">Próximo control: {seleccionado.proximoControl}</p>
          </div>
        </article>
      )}
    </main>
  );
}

export default AdminHistorial;