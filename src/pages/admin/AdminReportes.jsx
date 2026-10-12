import { medicamentos } from "../../data/medicamentos";
import { reportes } from "../../data/reportes";

function AdminReportes() {
  // for...of recorre el arreglo (Guía 6) y let permite ir sumando los totales
  let totalAtenciones = 0;
  let totalIngresos = 0;
  for (const reporte of reportes) {
    totalAtenciones = totalAtenciones + reporte.atenciones;
    totalIngresos = totalIngresos + reporte.atenciones * reporte.precio;
  }

  const stockBajo = medicamentos.filter((medicamento) => medicamento.stock <= 20);

  return (
    <main className="container py-4">
      <h1 className="mb-4">Reportes del sistema</h1>

      <section aria-labelledby="titulo-atenciones" className="mb-5">
        <h2 id="titulo-atenciones" className="h4">Atenciones del mes</h2>
        <div className="table-responsive">
          <table className="table table-bordered table-hover mt-3">
            <caption>Atenciones e ingresos por servicio</caption>
            <thead className="table-success">
              <tr>
                <th scope="col">Servicio</th>
                <th scope="col">Atenciones</th>
                <th scope="col">Ingresos (CLP)</th>
              </tr>
            </thead>
            <tbody>
              {reportes.map((reporte) => (
                <tr key={reporte.id}>
                  <td>{reporte.servicio}</td>
                  <td>{reporte.atenciones}</td>
                  <td>${(reporte.atenciones * reporte.precio).toLocaleString("es-CL")}</td>
                </tr>
              ))}
              <tr>
                <th scope="row">Total</th>
                <th>{totalAtenciones}</th>
                <th>${totalIngresos.toLocaleString("es-CL")}</th>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section aria-labelledby="titulo-stock">
        <h2 id="titulo-stock" className="h4">Medicamentos con stock bajo</h2>
        <div className="table-responsive">
          <table className="table table-bordered table-hover mt-3">
            <caption>Medicamentos con 20 unidades o menos</caption>
            <thead className="table-success">
              <tr>
                <th scope="col">Código</th>
                <th scope="col">Medicamento</th>
                <th scope="col">Stock</th>
              </tr>
            </thead>
            <tbody>
              {stockBajo.map((medicamento) => (
                <tr key={medicamento.id}>
                  <th scope="row">{medicamento.codigo}</th>
                  <td>{medicamento.nombre}</td>
                  <td>{medicamento.stock}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
}

export default AdminReportes;
