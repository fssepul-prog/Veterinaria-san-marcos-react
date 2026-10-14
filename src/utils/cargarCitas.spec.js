import { vi } from "vitest";
import { cargarResumen } from "./cargarCitas";

describe("cargarResumen", () => {
  it("obtiene el resumen de citas desde el servicio sin datos reales", async () => {
    // Simula un servicio externo que resuelve una promesa con datos ficticios
    const servicio = {
      obtener: vi.fn().mockResolvedValue([
        { id: 1, mascota: "Firulais", estado: "Pendiente" },
      ]),
    };

    const resultado = await cargarResumen(servicio);

    // Verifica que el servicio fue invocado y que solo retorna los campos esperados
    expect(servicio.obtener).toHaveBeenCalled();
    expect(resultado).toEqual([{ mascota: "Firulais", estado: "Pendiente" }]);
  });
});
