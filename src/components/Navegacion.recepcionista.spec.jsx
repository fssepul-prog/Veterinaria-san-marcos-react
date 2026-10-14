import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Navegacion from "./Navegacion";

beforeEach(() => {
  // Navegacion lee localStorage en cada cambio de ruta para decidir qué menú mostrar
  localStorage.setItem("sesion", JSON.stringify({
    email: "recepcion@sanmarcos.cl",
    nombre: "Recepcionista",
    rol: "Recepcionista",
  }));
});

afterEach(() => {
  localStorage.clear();
});

describe("Navegacion - recepcionista", () => {
  it("muestra los enlaces de recepción con sesión de Recepcionista", () => {
    render(
      <MemoryRouter initialEntries={["/recepcion/citas"]}>
        <Navegacion />
      </MemoryRouter>
    );
    expect(screen.getByRole("link", { name: /fichas/i })).toBeInTheDocument();
  });
});
