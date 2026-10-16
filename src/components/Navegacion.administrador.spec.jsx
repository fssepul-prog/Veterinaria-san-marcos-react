import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import Navegacion from "./Navegacion";

beforeEach(() => {
  localStorage.setItem("sesion", JSON.stringify({
    email: "admin@sanmarcos.cl",
    nombre: "Marcela Iturra",
    rol: "Administrador",
  }));
});

afterEach(() => {
  localStorage.clear();
});

describe("Navegacion - administrador", () => {
  it("muestra los enlaces de administración con sesión de Administrador", () => {
    render(
      <MemoryRouter initialEntries={["/admin/servicios"]}>
        <Navegacion />
      </MemoryRouter>
    );
    expect(screen.getByRole("link", { name: /usuarios/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /reportes/i })).toBeInTheDocument();
  });

  it("elimina la sesión y muestra el menú público al hacer clic en Salir", async () => {
    const usuario = userEvent.setup();
    render(
      <MemoryRouter initialEntries={["/admin/servicios"]}>
        <Navegacion />
      </MemoryRouter>
    );
    await usuario.click(screen.getByRole("button", { name: /salir/i }));
    expect(screen.getByRole("link", { name: /ingresar/i })).toBeInTheDocument();
  });
});
