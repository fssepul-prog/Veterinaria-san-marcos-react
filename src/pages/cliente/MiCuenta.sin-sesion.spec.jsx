import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import MiCuenta from "./MiCuenta";

beforeEach(() => {
  localStorage.clear();
});

describe("MiCuenta - sin sesión", () => {
  it("muestra el mensaje de acceso restringido cuando no hay sesión activa", () => {
    render(<MemoryRouter><MiCuenta /></MemoryRouter>);
    expect(screen.getByText("Acceso restringido")).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /ir a ingresar/i })).toBeInTheDocument();
  });
});
