import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Navegacion from "./Navegacion";

beforeEach(() => {
  localStorage.clear();
});

afterEach(() => {
  localStorage.clear();
});

describe("Navegacion - modo público", () => {
  it("muestra los enlaces públicos y el botón Ingresar cuando no hay sesión activa", () => {
    // MemoryRouter es necesario porque Navegacion usa NavLink internamente
    render(
      <MemoryRouter initialEntries={["/"]}>
        <Navegacion />
      </MemoryRouter>
    );
    expect(screen.getByRole("link", { name: /nosotros/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /ingresar/i })).toBeInTheDocument();
  });
});
