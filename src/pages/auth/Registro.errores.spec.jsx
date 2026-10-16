import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import Registro from "./Registro";

beforeEach(() => {
  localStorage.clear();
});

describe("Registro - validación", () => {
  it("muestra errores de nombre, correo y contraseña al enviar el formulario vacío", async () => {
    const usuario = userEvent.setup();
    render(<MemoryRouter><Registro /></MemoryRouter>);
    await usuario.click(screen.getByRole("button", { name: /crear cuenta/i }));
    expect(screen.getByText("El nombre es obligatorio.")).toBeInTheDocument();
    expect(screen.getByText("El correo es obligatorio.")).toBeInTheDocument();
    expect(screen.getByText("La contraseña es obligatoria.")).toBeInTheDocument();
    expect(localStorage.getItem("usuarios")).toBeNull();
  });
});
