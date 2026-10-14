import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import AdminCitas from "./AdminCitas";

beforeEach(() => {
  localStorage.clear();
});

describe("AdminCitas - confirmar", () => {
  it("al confirmar una cita pendiente el botón Confirmar desaparece de esa cita", async () => {
    const usuario = userEvent.setup();
    render(<AdminCitas />);
    const botonesAntes = screen.getAllByRole("button", { name: /confirmar/i });
    await usuario.click(botonesAntes[0]);
    expect(screen.queryAllByRole("button", { name: /confirmar/i })).toHaveLength(botonesAntes.length - 1);
  });
});
