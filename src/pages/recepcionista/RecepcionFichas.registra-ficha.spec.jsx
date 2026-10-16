import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import RecepcionFichas from "./RecepcionFichas";

beforeEach(() => {
  localStorage.clear();
});

describe("RecepcionFichas - registrar ficha", () => {
  it("agrega una nueva ficha y la muestra en la lista al completar el formulario", async () => {
    const usuario = userEvent.setup();
    render(<RecepcionFichas />);
    await usuario.type(screen.getByLabelText(/dueño/i), "Carlos Ruiz");
    await usuario.type(screen.getByLabelText(/mascota/i), "Pelusa");
    await usuario.type(screen.getByLabelText(/fecha/i), "15-10-2026");
    await usuario.type(screen.getByLabelText(/motivo/i), "Vacuna anual");
    await usuario.type(screen.getByLabelText(/diagnóstico/i), "Sana");
    await usuario.click(screen.getByRole("button", { name: /guardar/i }));
    expect(screen.getByText("Pelusa")).toBeInTheDocument();
    expect(screen.getByLabelText(/dueño/i)).toHaveValue("");
  });
});
