import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import FormularioReagendar from "./FormularioReagendar";

const cita = { id: 1, mascota: "Firulais", fecha: "10-10-2026" };

describe("FormularioReagendar - validación", () => {
  it("muestra error cuando se intenta guardar con la fecha vacía", async () => {
    const usuario = userEvent.setup();
    render(<FormularioReagendar cita={cita} onGuardar={() => {}} onCancelar={() => {}} />);
    await usuario.clear(screen.getByLabelText(/nueva fecha/i));
    await usuario.click(screen.getByRole("button", { name: /guardar/i }));
    expect(screen.getByText("Fecha obligatoria")).toBeInTheDocument();
  });
});
