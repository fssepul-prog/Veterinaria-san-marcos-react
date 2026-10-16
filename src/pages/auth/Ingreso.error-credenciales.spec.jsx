import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import Ingreso from "./Ingreso";

beforeEach(() => {
  localStorage.clear();
});

describe("Ingreso - autenticación", () => {
  it("muestra error con credenciales incorrectas", async () => {
    const usuario = userEvent.setup();
    render(<MemoryRouter><Ingreso /></MemoryRouter>);
    await usuario.type(screen.getByLabelText(/correo electrónico/i), "noexiste@test.com");
    await usuario.type(screen.getByLabelText(/contraseña/i), "wrongpass");
    await usuario.click(screen.getByRole("button", { name: /ingresar/i }));
    expect(screen.getByText(/correo o contraseña incorrectos/i)).toBeInTheDocument();
    expect(localStorage.getItem("sesion")).toBeNull();
  });
});
