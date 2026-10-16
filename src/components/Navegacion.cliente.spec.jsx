import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Navegacion from "./Navegacion";

beforeEach(() => {
  localStorage.setItem("sesion", JSON.stringify({
    email: "cliente@gmail.com",
    nombre: "Juan Cliente",
    rol: "Cliente",
  }));
});

afterEach(() => {
  localStorage.clear();
});

describe("Navegacion - cliente", () => {
  it("muestra el enlace Mi cuenta y el botón Salir con sesión de Cliente", () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <Navegacion />
      </MemoryRouter>
    );
    expect(screen.getByRole("link", { name: /mi cuenta/i })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /salir/i })).toBeInTheDocument();
  });
});
