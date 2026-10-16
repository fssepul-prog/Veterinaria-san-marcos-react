import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { vi } from "vitest";
import FormularioServicio from "./FormularioServicio";

describe("FormularioServicio - guardado", () => {
  it("llama a onGuardar con los datos cuando todos los campos están completos", async () => {
    const usuario = userEvent.setup();
    const onGuardar = vi.fn();
    render(<FormularioServicio onGuardar={onGuardar} />);
    await usuario.type(screen.getByLabelText(/código/i), "SV099");
    await usuario.type(screen.getByLabelText(/^nombre$/i), "Revisión dental");
    await usuario.selectOptions(screen.getByRole("combobox", { name: /categoría/i }), "Consultas");
    await usuario.type(screen.getByLabelText(/duración/i), "20 min");
    await usuario.type(screen.getByLabelText(/precio/i), "12000");
    await usuario.click(screen.getByRole("button", { name: /guardar/i }));
    expect(onGuardar).toHaveBeenCalled();
  });
});
