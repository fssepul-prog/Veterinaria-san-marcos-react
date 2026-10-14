export function guardarCitas(citas) {
  localStorage.setItem("citas", JSON.stringify(citas));
}
