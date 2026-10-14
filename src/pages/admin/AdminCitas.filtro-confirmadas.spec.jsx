import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import AdminCitas from "./AdminCitas";

beforeEach(() => {
  localStorage.clear();
});

describe("AdminCitas - filtro por estado", () => {
  it("muestra solo las citas confirmadas al filtrar por Confirmada", async () => {
    const usuario = userEvent.setup();
    render(<AdminCitas />);
    await usuario.click(screen.getByRole("button", { name: "Confirmada" }));
    // Luna tiene estado "Confirmada" en citasIniciales; Firulais tiene "Pendiente"
    expect(screen.getByText("Luna")).toBeInTheDocument();
    expect(screen.queryByText("Firulais")).not.toBeInTheDocument();
  });
});
