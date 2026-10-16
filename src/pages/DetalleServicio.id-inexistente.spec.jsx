import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import DetalleServicio from "./DetalleServicio";

describe("DetalleServicio - id inexistente", () => {
  it("muestra la página de error cuando el id del servicio no existe", () => {
    render(
      <MemoryRouter initialEntries={["/servicios/9999"]}>
        <DetalleServicio />
      </MemoryRouter>
    );
    expect(screen.getByText("Página no encontrada")).toBeInTheDocument();
  });
});
