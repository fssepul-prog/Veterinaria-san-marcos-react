import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import AdminHistorial from "./AdminHistorial";

describe("AdminHistorial - filtro por especie", () => {
  it("muestra solo los pacientes de la especie seleccionada al filtrar", async () => {
    const usuario = userEvent.setup();
    render(
      <MemoryRouter>
        <AdminHistorial />
      </MemoryRouter>
    );
    await usuario.click(screen.getByRole("button", { name: "Perro" }));
    expect(screen.getByText("Firulais")).toBeInTheDocument();
    expect(screen.queryByText("Luna")).not.toBeInTheDocument();
  });
});
