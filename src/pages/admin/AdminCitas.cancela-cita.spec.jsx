import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import AdminCitas from "./AdminCitas";

beforeEach(() => {
  localStorage.clear();
});

describe("AdminCitas - cancelar", () => {
  it("reduce en uno los botones Cancelar al cancelar una cita", async () => {
    const usuario = userEvent.setup();
    render(<AdminCitas />);
    const botonesAntes = screen.getAllByRole("button", { name: /cancelar/i });
    await usuario.click(botonesAntes[0]);
    expect(screen.queryAllByRole("button", { name: /cancelar/i })).toHaveLength(botonesAntes.length - 1);
  });
});
