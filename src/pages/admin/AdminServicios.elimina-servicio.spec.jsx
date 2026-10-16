import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import AdminServicios from "./AdminServicios";

beforeEach(() => {
  localStorage.clear();
});

describe("AdminServicios - eliminar servicio", () => {
  it("reduce en uno los servicios al hacer clic en Eliminar", async () => {
    const usuario = userEvent.setup();
    render(<MemoryRouter><AdminServicios /></MemoryRouter>);
    const botonesAntes = screen.getAllByRole("button", { name: /eliminar/i });
    await usuario.click(botonesAntes[0]);
    expect(screen.queryAllByRole("button", { name: /eliminar/i })).toHaveLength(botonesAntes.length - 1);
  });
});
