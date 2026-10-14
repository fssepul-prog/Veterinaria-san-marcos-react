import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import Ingreso from "./Ingreso";

beforeEach(() => {
  localStorage.clear();
});

describe("Ingreso - validación", () => {
  it("muestra errores de validación al enviar el formulario vacío", async () => {
    const usuario = userEvent.setup();
    render(<MemoryRouter><Ingreso /></MemoryRouter>);
    await usuario.click(screen.getByRole("button", { name: /ingresar/i }));
    expect(screen.getByText(/el correo es obligatorio/i)).toBeInTheDocument();
    expect(screen.getByText(/la contraseña es obligatoria/i)).toBeInTheDocument();
  });
});
