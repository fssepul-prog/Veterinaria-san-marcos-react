import { validarEmail } from "./validaciones";

describe("validarEmail", () => {
  it("acepta un correo con formato válido", () => {
    expect(validarEmail("usuario@ejemplo.com")).toBe(true);
  });
});
