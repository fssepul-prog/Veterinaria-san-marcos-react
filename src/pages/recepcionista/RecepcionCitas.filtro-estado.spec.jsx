import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import RecepcionCitas from "./RecepcionCitas";

beforeEach(() => {
  localStorage.clear();
});

describe("RecepcionCitas - filtro por estado", () => {
  it("muestra solo las citas confirmadas al filtrar por Confirmada", async () => {
    const usuario = userEvent.setup();
    render(<RecepcionCitas />);
    await usuario.click(screen.getByRole("button", { name: "Confirmada" }));
    expect(screen.getByText("Luna")).toBeInTheDocument();
    expect(screen.queryByText("Firulais")).not.toBeInTheDocument();
  });
});
