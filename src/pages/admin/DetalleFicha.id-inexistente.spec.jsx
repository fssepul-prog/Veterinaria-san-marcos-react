import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import DetalleFicha from "./DetalleFicha";
 
describe("DetalleFicha - id inexistente", () => {
  it("muestra un mensaje cuando no existe la ficha", () => {
    // Sin ruta con :id no hay id, así que no se encuentra ningún paciente
    render(
      <MemoryRouter>
        <DetalleFicha />
      </MemoryRouter>
    );
    expect(screen.getByText("La ficha solicitada no existe.")).toBeInTheDocument();
  });
  
});