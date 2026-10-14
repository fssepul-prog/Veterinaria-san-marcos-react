import { validarEmail } from "./validaciones";

describe("validarEmail", () => {
  it("rechaza un correo sin formato válido", () => {
    expect(validarEmail("usuarioejemplo")).toBe(false);
  });
});
