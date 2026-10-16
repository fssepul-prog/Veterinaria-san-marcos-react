import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { vi } from "vitest";
import FormularioFicha from "./FormularioFicha";

const fichaVacia = { dueno: "", mascota: "", fecha: "", motivo: "", diagnostico: "" };

describe("FormularioFicha - guardado", () => {
  it("llama a onGuardar con los datos cuando todos los campos están completos", async () => {
    const usuario = userEvent.setup();
    const onGuardar = vi.fn();
    render(<FormularioFicha ficha={fichaVacia} onGuardar={onGuardar} />);
    await usuario.type(screen.getByLabelText(/dueño/i), "Ana López");
    await usuario.type(screen.getByLabelText(/mascota/i), "Pelusa");
    await usuario.type(screen.getByLabelText(/fecha/i), "10-10-2026");
    await usuario.type(screen.getByLabelText(/motivo/i), "Control anual");
    await usuario.type(screen.getByLabelText(/diagnóstico/i), "Sana");
    await usuario.click(screen.getByRole("button", { name: /guardar/i }));
    expect(onGuardar).toHaveBeenCalledWith(
      expect.objectContaining({
        dueno: "Ana López",
        mascota: "Pelusa",
        fecha: "10-10-2026",
        motivo: "Control anual",
        diagnostico: "Sana",
      })
    );
  });
});
