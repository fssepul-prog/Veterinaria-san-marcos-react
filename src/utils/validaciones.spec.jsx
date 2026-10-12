// src/utils/validaciones.spec.jsx

// Pruebas unitarias puras: no necesitan render ni DOM, solo importan la función y verifican su retorno.
import { validarEmail, validarTelefono } from "./validaciones";




// --- Bloque 1: validarEmail ---
// Verifica que la función detecta correctamente si un correo tiene formato válido.
describe("validarEmail", () => {

  // La cadena contiene "@" y un dominio con punto → la expresión regular debe retornar true.
  it("acepta un correo con formato válido", () => {
    expect(validarEmail("usuario@ejemplo.com")).toBe(true);
  });

  // La cadena no contiene "@" ni punto de dominio → la expresión regular debe retornar false.
  it("rechaza un correo sin formato válido", () => {
    expect(validarEmail("usuarioejemplo")).toBe(false);
  });
});




// --- Bloque 2: validarTelefono ---
// Verifica que la función acepta cadenas con contenido y rechaza cadenas vacías o solo espacios.
describe("validarTelefono", () => {

  // La cadena tiene caracteres reales tras hacer trim() → length > 0 → retorna true.
  it("acepta un teléfono no vacío", () => {
    expect(validarTelefono("+56912345678")).toBe(true);
  });

  // La cadena es solo espacios → trim() la convierte en "" → length === 0 → retorna false.
  it("rechaza un teléfono vacío", () => {
    expect(validarTelefono("   ")).toBe(false);
  });
});
