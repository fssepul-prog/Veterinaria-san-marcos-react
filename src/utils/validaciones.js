// src/utils/validaciones.js
export function validarEmail(email) {
  return /\S+@\S+\.\S+/.test(email.trim());
}

export function validarTelefono(telefono) {
  return telefono.trim().length > 0;
}
