export async function cargarResumen(servicio) {
  const citas = await servicio.obtener();
  return citas.map((c) => ({ mascota: c.mascota, estado: c.estado }));
}
