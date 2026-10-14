import { vi } from "vitest";
import { guardarCitas } from "./guardarCitas";

describe("guardarCitas", () => {
  it("llama a setItem con la clave citas y el arreglo serializado", () => {
    // Espía sobre localStorage.setItem sin reemplazarlo
    const espia = vi.spyOn(Storage.prototype, "setItem");

    const citas = [{ id: 1, mascota: "Firulais", estado: "Pendiente" }];
    guardarCitas(citas);

    expect(espia).toHaveBeenCalledWith("citas", JSON.stringify(citas));

    // Restaura el comportamiento original para no afectar otros tests
    espia.mockRestore();
  });
});
