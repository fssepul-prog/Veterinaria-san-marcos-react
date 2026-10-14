import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import AdminServicios from "./AdminServicios";

beforeEach(() => {
  localStorage.clear();
});

describe("AdminServicios - gestión de servicios", () => {
  it("agrega un nuevo servicio y lo muestra en la tabla", async () => {
    const usuario = userEvent.setup();
    // MemoryRouter es necesario porque AdminServicios usa Link internamente
    render(<MemoryRouter><AdminServicios /></MemoryRouter>);
    await usuario.type(screen.getByLabelText(/código/i), "TEST01");
    await usuario.type(screen.getByLabelText(/nombre/i), "Servicio de prueba");
    await usuario.selectOptions(screen.getByRole("combobox", { name: /^categoría$/i }), "Consultas");
    await usuario.type(screen.getByLabelText(/duración/i), "20 min");
    await usuario.type(screen.getByLabelText(/precio/i), "9000");
    await usuario.click(screen.getByRole("button", { name: /guardar/i }));
    expect(screen.getByText("Servicio de prueba")).toBeInTheDocument();
  });
});
