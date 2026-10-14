import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import Servicios from "./Servicios";
import { servicios } from "../data/servicios";

describe("Servicios - filtro de categoría", () => {
  it("muestra solo los servicios de Vacunación al filtrar", async () => {
    const usuario = userEvent.setup();
    render(<MemoryRouter><Servicios /></MemoryRouter>);
    await usuario.click(screen.getByRole("button", { name: "Vacunación" }));
    const vacunacion = servicios.filter((s) => s.categoria === "Vacunación");
    expect(screen.getAllByRole("heading", { level: 3 })).toHaveLength(vacunacion.length);
  });
});
