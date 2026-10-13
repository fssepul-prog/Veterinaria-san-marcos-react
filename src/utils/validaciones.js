// src/utils/validaciones.js
// Funciones reutilizables para validar campos de formulario en toda la app.

// Recibe un string de correo y retorna true si tiene formato válido, false si no
export function validarEmail(email) {
  // .trim() elimina espacios al inicio y al final antes de validar
  // /\S+@\S+\.\S+/ es una expresión regular: exige caracteres, @, más caracteres, punto y más caracteres
  // .test() aplica la regex al texto y retorna true o false
  return /\S+@\S+\.\S+/.test(email.trim());
}

// Recibe un string de teléfono y retorna true si tiene al menos un carácter real
export function validarTelefono(telefono) {
  // .trim() elimina espacios; si el resultado tiene largo mayor a 0, el campo no está vacío
  return telefono.trim().length > 0;
}
