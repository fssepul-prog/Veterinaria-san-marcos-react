import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import NoEncontrada from "./NoEncontrada";

describe("NoEncontrada", () => {
  it("muestra el mensaje de error 404 y el enlace para volver al inicio", () => {
    render(<MemoryRouter><NoEncontrada /></MemoryRouter>);
    expect(screen.getByText("Página no encontrada")).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /volver al inicio/i })).toBeInTheDocument();
  });
});
