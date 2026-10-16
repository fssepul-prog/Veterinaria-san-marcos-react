import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import Registro from "./Registro";

beforeEach(() => {
  localStorage.clear();
});

describe("Registro - contraseñas no coinciden", () => {
  it("muestra error cuando la contraseña y su confirmación no son iguales", async () => {
    const usuario = userEvent.setup();
    render(<MemoryRouter><Registro /></MemoryRouter>);
    await usuario.type(screen.getByLabelText(/nombre completo/i), "Juan Pérez");
    await usuario.type(screen.getByLabelText(/correo electrónico/i), "juan@ejemplo.com");
    await usuario.type(screen.getByLabelText(/^contraseña$/i), "password123");
    await usuario.type(screen.getByLabelText(/confirmar contraseña/i), "diferente456");
    await usuario.click(screen.getByRole("button", { name: /crear cuenta/i }));
    expect(screen.getByText("Las contraseñas no coinciden.")).toBeInTheDocument();
    expect(localStorage.getItem("usuarios")).toBeNull();
  });
});
