import { Link, useParams } from "react-router-dom";
import { pacientes } from "../../data/pacientes";
 
function DetalleFicha() {
  const { id } = useParams();
  const paciente = pacientes.find(
    (item) => item.id === Number(id)
  );
 
  if (!paciente) {
    return <p>La ficha solicitada no existe.</p>;
  }
 
  return (
    <main className="container py-4">
      <h1>Ficha clínica: {paciente.mascota}</h1>
      <p>Especie: {paciente.especie}</p>
      <p>Dueño: {paciente.dueno}</p>
      <p>Última atención: {paciente.ultimaAtencion}</p>
      <p>Diagnóstico: {paciente.diagnostico}</p>
      <p>Medicamento: {paciente.medicamento}</p>
      <p>Vacuna: {paciente.vacuna}</p>
      <p>Próximo control: {paciente.proximoControl}</p>
      <Link to="/admin/historial">Volver</Link>
    </main>
  );
}

export default DetalleFicha;
