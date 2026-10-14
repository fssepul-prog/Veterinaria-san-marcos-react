import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import Citas from "./Citas";

beforeEach(() => {
  localStorage.clear();
});

describe("Citas - formulario", () => {
  it("muestra errores al enviar el formulario vacío", async () => {
    const usuario = userEvent.setup();
    render(<MemoryRouter><Citas /></MemoryRouter>);
    await usuario.click(screen.getByRole("button", { name: /enviar solicitud/i }));
    expect(screen.getByText("El nombre es obligatorio.")).toBeInTheDocument();
    expect(screen.getByText("El correo es obligatorio.")).toBeInTheDocument();
    expect(screen.getByText("El teléfono es obligatorio.")).toBeInTheDocument();
    expect(screen.getByText("El nombre de la mascota es obligatorio.")).toBeInTheDocument();
  });
});
