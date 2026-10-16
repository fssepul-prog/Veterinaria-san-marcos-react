import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { vi } from "vitest";
import FormularioReagendar from "./FormularioReagendar";

const cita = { id: 2, mascota: "Luna", fecha: "08-10-2026" };

describe("FormularioReagendar - guardado", () => {
  it("llama a onGuardar con el id y la nueva fecha al enviar el formulario completo", async () => {
    const usuario = userEvent.setup();
    const onGuardar = vi.fn();
    render(<FormularioReagendar cita={cita} onGuardar={onGuardar} onCancelar={() => {}} />);
    await usuario.clear(screen.getByLabelText(/nueva fecha/i));
    await usuario.type(screen.getByLabelText(/nueva fecha/i), "20-10-2026");
    await usuario.click(screen.getByRole("button", { name: /guardar/i }));
    expect(onGuardar).toHaveBeenCalledWith(2, "20-10-2026");
  });
});
