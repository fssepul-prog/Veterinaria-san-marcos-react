import { reportes } from "../../data/reportes";

function AdminReportes() {
  // reduce recorre el arreglo y va acumulando un total
  const totalAtenciones = reportes.reduce((total, r) => total + r.atenciones, 0);
  const totalIngresos = reportes.reduce((total, r) => total + r.atenciones * r.precio, 0);

  return (
    <main className="container py-4">
      <h1>Reportes del sistema</h1>
      <p>Total de atenciones del mes: <strong>{totalAtenciones}</strong></p>

      <div className="table-responsive">
        <table className="table table-striped">
          <caption>Atenciones e ingresos por servicio</caption>
          <thead>
            <tr>
              <th scope="col">Servicio</th>
              <th scope="col">Atenciones</th>
              <th scope="col">Ingresos</th>
            </tr>
          </thead>
          <tbody>
            {reportes.map((r) => (
              <tr key={r.servicio}>
                <td>{r.servicio}</td>
                <td>{r.atenciones}</td>
                <td>${(r.atenciones * r.precio).toLocaleString("es-CL")}</td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <th scope="row">Total</th>
              <td>{totalAtenciones}</td>
              <td>${totalIngresos.toLocaleString("es-CL")}</td>
            </tr>
          </tfoot>
        </table>
      </div>
    </main>
  );
}

export default AdminReportes;
